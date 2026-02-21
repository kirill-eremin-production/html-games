import * as THREE from 'three';
import { playHitSound } from '../audio/sound';
import { KILL_TARGET } from '../constants';
import { RESPAWN_DELAY } from '../constants';
import { scene } from '../scene/setup';
import { state } from '../state';
import type { Fighter, LaserData } from '../types';
import { showMessage } from '../ui/hud';
import { addKillFeedEntry } from '../ui/kill-feed';
import { createExplosion, destroyedSubMat } from './explosions';
import { playerPlane } from './player';
import { cleanupExcessBullets } from './weapons';

function hitTestFighters(laser: LaserData, fighters: Fighter[], isPlayerLaser: boolean): boolean {
  for (let j = fighters.length - 1; j >= 0; j--) {
    const f = fighters[j];
    if (laser.mesh.position.distanceTo(f.mesh.position) < 8) {
      f.health -= laser.damage;
      createExplosion(laser.mesh.position.clone(), 0.3);

      if (f.health <= 0) {
        createExplosion(f.mesh.position.clone(), 2);
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
          state.playerHealth = state.maxHealth;
          showMessage('+100 | HP ВОССТАНОВЛЕНО!', 1.5);
        }

        state.respawnQueue.push({
          team: isEnemyVictim ? 'enemy' : 'ally',
          timer: RESPAWN_DELAY,
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
      const worldPos = sub.center.clone().applyMatrix4(cs.mesh.matrixWorld);
      if (laser.mesh.position.distanceTo(worldPos) < sub.radius) {
        sub.health -= laser.damage;
        createExplosion(laser.mesh.position.clone(), 0.5);

        if (sub.health <= 0) {
          createExplosion(worldPos, 3);
          state.score += 500;
          showMessage(`${sub.name} УНИЧТОЖЕНА! +500`, 2);
        }

        if (cs.subsystems.every((s) => s.health <= 0)) {
          cs.alive = false;
          createExplosion(cs.mesh.position.clone(), 8);
          for (let k = 0; k < 5; k++) {
            setTimeout(() => {
              if (!cs.mesh.parent) return;
              const offset = new THREE.Vector3(
                (Math.random() - 0.5) * 60,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 30,
              );
              createExplosion(cs.mesh.position.clone().add(offset), 4);
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
              showMessage(`ВСЕ КОРАБЛИ УНИЧТОЖЕНЫ!\nУничтожьте ${KILL_TARGET} истребителей!`, 4);
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
        if (b.mesh.position.distanceTo(playerPlane.position) < 4) {
          state.playerHealth -= b.damage;
          state.damageFlash = 0.3;
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
