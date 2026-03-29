import { COMBAT_CONSTANTS } from '@/shared/config/combat';
import type { Vector3 } from '@/shared/core';
import { world } from '@/shared/ecs/combat-world';
import type { GameSystem } from '@/shared/types';

import { ProjectileComponent } from '@/entities/combat/projectile';
import { SubsystemComponent } from '@/entities/combat/subsystem';
import { destroyEntityWithVisuals } from '@/entities/ecs-adapters/entity-cleanup';
import { type SubsystemQueryResult, queryAliveSubsystems } from '@/entities/ecs-queries';
import { HitboxComponent } from '@/entities/physics/hitbox';
import { TransformComponent } from '@/entities/physics/transform';
import { DamageBufferComponent } from '@/entities/stats/damage-buffer';
import { TeamComponent } from '@/entities/stats/team';

import { createExplosion } from './explosions';

const C = COMBAT_CONSTANTS;

// ── Hit-target: общий интерфейс для всех поражаемых сущностей ───────────────

interface HitTarget {
  transform: TransformComponent;
  damageBuffer: DamageBufferComponent;
  hitbox: HitboxComponent;
}

/**
 * Проверяет столкновения снаряда с поражаемыми целями (истребители + игрок).
 * При попадании записывает урон в DamageBuffer (обработает HealthSystem).
 */
function hitTestTargets(
  projPos: Vector3,
  projDamage: number,
  projShooterName: string,
  projTeam: string,
  targets: HitTarget[],
): boolean {
  for (const t of targets) {
    if (projPos.distanceToSquared(t.transform.position) < t.hitbox.radiusSq) {
      t.damageBuffer.hits.push({
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

/**
 * Проверяет столкновения снаряда с подсистемами капитальных кораблей.
 * Подсистемы — отдельные ECS-сущности, урон через DamageBuffer.
 */
function hitTestSubsystems(
  projPos: Vector3,
  projDamage: number,
  projShooterName: string,
  projTeam: string,
  subsystems: SubsystemQueryResult[],
): boolean {
  for (const sub of subsystems) {
    // transform.position уже содержит мировые координаты (обновлено hierarchy-system)
    if (
      projPos.distanceToSquared(sub.transform.position) <
      sub.subsystem.radius * sub.subsystem.radius
    ) {
      sub.damageBuffer.hits.push({
        amount: projDamage,
        shooterName: projShooterName,
        shooterTeam: projTeam as 'player' | 'ally' | 'enemy',
      });
      createExplosion(projPos.clone(), C.hitCapitalExplosionSize);
      return true;
    }
  }
  return false;
}

/** Проверяет столкновения снарядов с целями */
export const collisionSystem: GameSystem = {
  id: 'collision',
  update() {
    // Запрашиваем все поражаемые сущности (истребители + игрок)
    const allDamageable = world.query(
      TransformComponent,
      DamageBufferComponent,
      TeamComponent,
      HitboxComponent,
    );

    const enemyTargets: HitTarget[] = [];
    const friendlyTargets: HitTarget[] = []; // ally + player
    for (const {
      entity,
      components: [transform, damageBuffer, team, hitbox],
    } of allDamageable) {
      // Подсистемы проверяются отдельно (hitTestSubsystems)
      if (world.hasComponent(entity, SubsystemComponent)) continue;
      const t: HitTarget = { transform, damageBuffer, hitbox };
      if (team.team === 'enemy') {
        enemyTargets.push(t);
      } else {
        friendlyTargets.push(t);
      }
    }

    const aliveSubsystems = queryAliveSubsystems();

    const projectiles = world.query(TransformComponent, ProjectileComponent, TeamComponent);

    for (const {
      entity,
      components: [transform, proj, team],
    } of projectiles) {
      if (!world.isAlive(entity)) continue;

      const pos = transform.position;
      const isPlayer = team.team === 'player';
      const isAlly = team.team === 'ally';
      const isEnemy = team.team === 'enemy';

      let hit = false;

      // Снаряды игрока и союзников попадают по врагам
      if ((isPlayer || isAlly) && !hit) {
        hit = hitTestTargets(pos, proj.damage, proj.shooterName, team.team, enemyTargets);
      }

      // Снаряды врагов попадают по союзникам и игроку (единообразно)
      if (isEnemy && !hit) {
        hit = hitTestTargets(pos, proj.damage, proj.shooterName, team.team, friendlyTargets);
      }

      // Снаряды игрока и союзников попадают по подсистемам кораблей
      if ((isPlayer || isAlly) && !hit) {
        hit = hitTestSubsystems(pos, proj.damage, proj.shooterName, team.team, aliveSubsystems);
      }

      if (hit) {
        destroyEntityWithVisuals(entity);
      }
    }
  },
};
