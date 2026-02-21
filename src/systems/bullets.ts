import * as THREE from 'three';
import { playHitSound } from '../audio/sound';
import { combatConfig } from '../constants';
import { scene } from '../scene/setup';
import { state } from '../state';
import type { Fighter, LaserData } from '../types';
import { showMessage } from '../ui/hud';
import { addKillFeedEntry } from '../ui/kill-feed';
import { createExplosion, destroyedSubMat } from './explosions';
import { playerPlane } from './player';
import { cleanupExcessBullets } from './weapons';

const HIT_DIST_SQ = 12 * 12; // 144 (scaled 1.5×)
const PLAYER_HIT_DIST_SQ = 6 * 6; // 36 (scaled 1.5×)
const _hitWorldPos = new THREE.Vector3();

function hitTestFighters(laser: LaserData, fighters: Fighter[], isPlayerLaser: boolean): boolean {
  for (let j = fighters.length - 1; j >= 0; j--) {
    const f = fighters[j];
    if (laser.mesh.position.distanceToSquared(f.mesh.position) < HIT_DIST_SQ) {
      f.health -= laser.damage;
      createExplosion(laser.mesh.position.clone(), 0.3);

      if (f.health <= 0) {
        createExplosion(f.mesh.position.clone(), 3);
        scene.remove(f.mesh);
        if (f.healthFill && f.healthFill.geometry) f.healthFill.geometry.dispose();
        if (f.healthFill && f.healthFill.material)
          (f.healthFill.material as THREE.Material).dispose();

        const victimName = f.name;
        const killerName = laser.shooterName || '?';
        const isEnemyVictim = fighters === state.enemies;

        fighters.splice(j, 1);

        const killerTeam =
          laser.team === 'player' ? 'player' : laser.team === 'ally' ? 'ally' : 'enemy';
        const victimTeam = isEnemyVictim ? 'enemy' : 'ally';
        addKillFeedEntry(killerName, victimName, killerTeam, victimTeam as 'ally' | 'enemy');

        if (isEnemyVictim) {
          state.totalEnemyKills++;
        }

        if (isPlayerLaser) {
          state.score += 100;
          state.playerHealth = Math.min(
            state.maxHealth,
            state.playerHealth + state.maxHealth * 0.1,
          );
          showMessage('+100 | +10% HP', 1.5);
        }

        state.respawnQueue.push({
          team: isEnemyVictim ? 'enemy' : 'ally',
          timer: combatConfig.respawnDelay,
        });
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
        createExplosion(laser.mesh.position.clone(), 0.5);

        if (sub.health <= 0) {
          createExplosion(_hitWorldPos.clone(), 4.5);
          state.score += 500;
          showMessage(`${sub.name} УНИЧТОЖЕНА! +500`, 2);
        }

        if (cs.subsystems.every((s) => s.health <= 0)) {
          cs.alive = false;
          createExplosion(cs.mesh.position.clone(), 12);
          for (let k = 0; k < 5; k++) {
            setTimeout(() => {
              if (!cs.mesh.parent) return;
              const offset = new THREE.Vector3(
                (Math.random() - 0.5) * 90,
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 45,
              );
              createExplosion(cs.mesh.position.clone().add(offset), 6);
            }, k * 300);
          }
          setTimeout(() => {
            scene.remove(cs.mesh);
          }, 1800);
          state.score += 2000;
          showMessage('КОРАБЛЬ УНИЧТОЖЕН! +2000', 3);

          if (state.phase === 1 && state.capitalShips.every((c) => !c.alive)) {
            state.phase = 2;
            setTimeout(() => {
              showMessage(
                `ВСЕ КОРАБЛИ УНИЧТОЖЕНЫ!\nУничтожьте ${combatConfig.killTarget} истребителей!`,
                4,
              );
            }, 3500);
          }
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
        if (b.mesh.position.distanceToSquared(playerPlane.position) < PLAYER_HIT_DIST_SQ) {
          state.playerHealth -= b.damage;
          state.damageFlash = 0.3;
          state.noDamageTimer = 0;
          state.lastAttacker = b.shooterName || '?';
          createExplosion(b.mesh.position.clone(), 0.3);
          playHitSound();
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
