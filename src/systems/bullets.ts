import * as THREE from 'three';
import { playHitSound } from '../audio/sound';
import { COMBAT_CONSTANTS } from '../config/combat';
import { PLAYER_CONFIG } from '../config/player';
import { emit } from '../events';
import { scene } from '../scene/setup';
import { state } from '../state';
import type { Fighter, LaserData } from '../types';
import { destroyFighter, destroySubsystem } from './damage';
import { createExplosion } from './explosions';
import { playerPlane } from './player';
import { cleanupExcessBullets } from './weapons';

const C = COMBAT_CONSTANTS;

const _hitWorldPos = new THREE.Vector3();

function hitTestFighters(laser: LaserData, fighters: Fighter[], isPlayerLaser: boolean): boolean {
  for (let j = fighters.length - 1; j >= 0; j--) {
    const f = fighters[j];
    if (laser.mesh.position.distanceToSquared(f.mesh.position) < C.fighterHitDistSq) {
      f.health -= laser.damage;
      createExplosion(laser.mesh.position.clone(), C.hitExplosionSize);

      if (f.health <= 0) {
        const killerName = laser.shooterName || '?';
        const killerTeam =
          laser.team === 'player' ? 'player' : laser.team === 'ally' ? 'ally' : 'enemy';
        const isEnemyVictim = fighters === state.enemies;
        destroyFighter(f, killerName, killerTeam, isEnemyVictim, isPlayerLaser);
      }
      return true;
    }
  }
  return false;
}

function hitTestCapitalShips(laser: LaserData): boolean {
  for (const cs of state.capitalShips) {
    if (!cs.alive) continue;
    for (const sub of cs.subsystems) {
      if (sub.health <= 0) continue;
      _hitWorldPos.copy(sub.center).applyMatrix4(cs.mesh.matrixWorld);
      if (laser.mesh.position.distanceToSquared(_hitWorldPos) < sub.radius * sub.radius) {
        sub.health -= laser.damage;
        createExplosion(laser.mesh.position.clone(), C.hitCapitalExplosionSize);

        if (sub.health <= 0) {
          destroySubsystem(sub, cs, laser.shooterName || '?');
        }
        return true;
      }
    }
  }
  return false;
}

export function updateBullets(dt: number): void {
  const allLaserArrays: {
    arr: LaserData[];
    hitEnemies: boolean;
    hitAllies: boolean;
    hitPlayer: boolean;
    isPlayer: boolean;
  }[] = [
    { arr: state.bullets, hitEnemies: true, hitAllies: false, hitPlayer: false, isPlayer: true },
    {
      arr: state.allyBullets,
      hitEnemies: true,
      hitAllies: false,
      hitPlayer: false,
      isPlayer: false,
    },
    {
      arr: state.enemyBullets,
      hitEnemies: false,
      hitAllies: true,
      hitPlayer: true,
      isPlayer: false,
    },
  ];

  for (const { arr, hitEnemies, hitAllies, hitPlayer, isPlayer } of allLaserArrays) {
    for (let i = arr.length - 1; i >= 0; i--) {
      const b = arr[i];
      b.mesh.position.addScaledVector(b.velocity, dt);
      b.life -= dt;
      if (b.life <= 0) {
        scene.remove(b.mesh);
        arr.splice(i, 1);
        continue;
      }

      let hit = false;
      if (hitEnemies && !hit) hit = hitTestFighters(b, state.enemies, isPlayer);
      if (hitAllies && !hit) hit = hitTestFighters(b, state.allies, false);

      if (hitPlayer && !hit && state.invulnTimer <= 0) {
        if (b.mesh.position.distanceToSquared(playerPlane.position) < C.playerHitDistSq) {
          state.playerHealth -= b.damage;
          state.damageFlash = PLAYER_CONFIG.damageFlashDuration;
          state.noDamageTimer = 0;
          state.lastAttacker = b.shooterName || '?';
          createExplosion(b.mesh.position.clone(), C.hitExplosionSize);
          playHitSound();
          emit('player-hit', { damage: b.damage, attackerName: b.shooterName || '?' });
          hit = true;
        }
      }

      if ((isPlayer || b.team === 'ally') && !hit) hit = hitTestCapitalShips(b);
      if (hit) {
        scene.remove(b.mesh);
        arr.splice(i, 1);
      }
    }
  }

  cleanupExcessBullets();
}
