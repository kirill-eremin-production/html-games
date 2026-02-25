import { playHitSound } from '@/shared/audio';
import { COMBAT_CONSTANTS } from '@/shared/config/combat';
import { PLAYER_CONFIG } from '@/shared/config/player';
import { Vector3 } from '@/shared/core';
import { world } from '@/shared/ecs/combat-world';
import { unregisterMeshEntity } from '@/shared/ecs/entity-index';
import { emit } from '@/shared/events';
import { state } from '@/shared/state';
import type { GameSystem } from '@/shared/types';

import { ProjectileComponent } from '@/entities/combat/projectile';
import {
  type FighterQueryResult,
  capitalShipProxy,
  queryAliveCapitalShips,
  queryFightersByTeam,
} from '@/entities/ecs-queries';
import { TransformComponent } from '@/entities/physics/transform';
import { MeshComponent } from '@/entities/rendering/mesh';
import { TeamComponent } from '@/entities/stats/team';

import { playerPlane } from '@/features/flight/player-system';

import { destroySubsystem } from './damage-system';
import { createExplosion } from './explosions';

const C = COMBAT_CONSTANTS;
const _hitWorldPos = new Vector3();

/**
 * Проверяет столкновения снаряда с ECS-истребителями.
 * При попадании записывает урон в DamageBuffer (обработает HealthSystem).
 */
function hitTestFighters(
  projPos: Vector3,
  projDamage: number,
  projShooterName: string,
  projTeam: string,
  fighters: FighterQueryResult[],
): boolean {
  for (const f of fighters) {
    if (projPos.distanceToSquared(f.transform.position) < C.fighterHitDistSq) {
      f.damageBuffer.hits.push({
        amount: projDamage,
        shooterName: projShooterName,
        shooterTeam: projTeam as 'player' | 'ally' | 'enemy',
      });

      createExplosion(projPos.clone(), C.hitExplosionSize);
      return true;
    }
  }
  return false;
}

function hitTestCapitalShips(
  projPos: Vector3,
  projDamage: number,
  projShooterName: string,
): boolean {
  const ships = queryAliveCapitalShips();
  for (const cs of ships) {
    for (const sub of cs.capitalShip.subsystems) {
      if (sub.health <= 0) continue;
      try {
        _hitWorldPos.copyFrom(sub.center).applyMatrix4(cs.mesh.mesh.getWorldMatrix());
      } catch {
        continue;
      }
      if (projPos.distanceToSquared(_hitWorldPos) < sub.radius * sub.radius) {
        sub.health -= projDamage;
        createExplosion(projPos.clone(), C.hitCapitalExplosionSize);
        if (sub.health <= 0) {
          destroySubsystem(sub, capitalShipProxy(cs), projShooterName || '?');
        }
        return true;
      }
    }
  }
  return false;
}

/** Проверяет столкновения снарядов с целями */
export const collisionSystem: GameSystem = {
  id: 'collision',
  update() {
    // Кэшируем пулы истребителей на этот кадр
    const enemies = queryFightersByTeam('enemy');
    const allies = queryFightersByTeam('ally');

    const projectiles = world.query(
      TransformComponent,
      ProjectileComponent,
      TeamComponent,
      MeshComponent,
    );

    for (const {
      entity,
      components: [transform, proj, team, mesh],
    } of projectiles) {
      if (!world.isAlive(entity)) continue;

      const pos = transform.position;
      const isPlayer = team.team === 'player';
      const isAlly = team.team === 'ally';
      const isEnemy = team.team === 'enemy';

      let hit = false;

      // Снаряды игрока и союзников попадают по врагам
      if ((isPlayer || isAlly) && !hit) {
        hit = hitTestFighters(pos, proj.damage, proj.shooterName, team.team, enemies);
      }

      // Снаряды врагов попадают по союзникам
      if (isEnemy && !hit) {
        hit = hitTestFighters(pos, proj.damage, proj.shooterName, team.team, allies);
      }

      // Снаряды врагов попадают по игроку
      if (isEnemy && !hit && state.invulnTimer <= 0) {
        if (pos.distanceToSquared(playerPlane.position) < C.playerHitDistSq) {
          state.playerHealth -= proj.damage;
          state.damageFlash = PLAYER_CONFIG.damageFlashDuration;
          state.noDamageTimer = 0;
          state.lastAttacker = proj.shooterName || '?';
          createExplosion(pos.clone(), C.hitExplosionSize);
          playHitSound();
          emit('player-hit', { damage: proj.damage, attackerName: proj.shooterName || '?' });
          hit = true;
        }
      }

      // Снаряды игрока и союзников попадают по капитальным кораблям
      if ((isPlayer || isAlly) && !hit) {
        hit = hitTestCapitalShips(pos, proj.damage, proj.shooterName);
      }

      if (hit) {
        unregisterMeshEntity(mesh.mesh);
        mesh.mesh.dispose();
        world.destroyEntity(entity);
      }
    }
  },
};
