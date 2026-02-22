import * as THREE from 'three';
import { COMBAT_CONSTANTS } from '../config/combat';
import { combatConfig } from '../constants';
import { addHealthBar, createFighter } from '../scene/models';
import { scene } from '../scene/setup';
import { parseHexColor, settings } from '../settings';
import { nextAllyName, nextEnemyName, state } from '../state';
import { playerPlane } from './player';
import type { GameSystem } from './types';

const C = COMBAT_CONSTANTS;

export function spawnAlly(near: THREE.Vector3): void {
  const mesh = createFighter(
    parseHexColor(settings.colors.allyBody),
    parseHexColor(settings.colors.allyExhaust),
  );
  scene.add(mesh);
  const offset = new THREE.Vector3(
    (Math.random() - 0.5) * C.allySpawnSpread.x,
    (Math.random() - 0.5) * C.allySpawnSpread.y,
    (Math.random() - 0.5) * C.allySpawnSpread.z,
  );
  mesh.position.copy(near).add(offset);
  mesh.quaternion.copy(playerPlane.quaternion);
  const hb = addHealthBar(mesh, 0x00ff44);
  const name = nextAllyName();
  state.allies.push({
    mesh,
    name,
    healthBar: hb.bar,
    healthFill: hb.fill,
    health: combatConfig.fighterHP,
    maxHealth: combatConfig.fighterHP,
    speed:
      combatConfig.allySpeedMin +
      Math.random() * (combatConfig.allySpeedMax - combatConfig.allySpeedMin),
    shootTimer:
      combatConfig.allyFireRateMin +
      Math.random() * (combatConfig.allyFireRateMax - combatConfig.allyFireRateMin),
    ai: { state: 'chase', timer: 0, evadeDir: new THREE.Vector3(), target: null },
  });
}

export function spawnEnemy(near: THREE.Vector3): void {
  const mesh = createFighter(
    parseHexColor(settings.colors.enemyBody),
    parseHexColor(settings.colors.enemyExhaust),
  );
  scene.add(mesh);
  const offset = new THREE.Vector3(
    (Math.random() - 0.5) * C.enemySpawnSpread.x,
    (Math.random() - 0.5) * C.enemySpawnSpread.y,
    (Math.random() - 0.5) * C.enemySpawnSpread.z,
  );
  mesh.position.copy(near).add(offset);
  const hb = addHealthBar(mesh, 0xff0000);
  const name = nextEnemyName();
  state.enemies.push({
    mesh,
    name,
    healthBar: hb.bar,
    healthFill: hb.fill,
    health: combatConfig.fighterHP,
    maxHealth: combatConfig.fighterHP,
    speed:
      combatConfig.enemySpeedMin +
      Math.random() * (combatConfig.enemySpeedMax - combatConfig.enemySpeedMin),
    shootTimer:
      combatConfig.enemyFireRateMin +
      Math.random() * (combatConfig.enemyFireRateMax - combatConfig.enemyFireRateMin),
    ai: { state: 'chase', timer: 0, evadeDir: new THREE.Vector3(), target: null },
  });
}

export function updateRespawnQueue(dt: number): void {
  for (let i = state.respawnQueue.length - 1; i >= 0; i--) {
    state.respawnQueue[i].timer -= dt;
    if (state.respawnQueue[i].timer <= 0) {
      const entry = state.respawnQueue.splice(i, 1)[0];
      if (entry.team === 'ally') {
        spawnAlly(playerPlane.position);
      } else {
        let spawnPos = new THREE.Vector3(...C.defaultEnemySpawnPos);
        const livingShips = state.capitalShips.filter((cs) => cs.alive);
        if (livingShips.length > 0) {
          spawnPos =
            livingShips[Math.floor(Math.random() * livingShips.length)].mesh.position.clone();
        }
        spawnEnemy(spawnPos);
      }
    }
  }
}

// ── GameSystem adapter ──────────────────────────────────────────────────────

export const spawnerSystem: GameSystem = {
  id: 'spawner',
  update(dt) {
    updateRespawnQueue(dt);
  },
  cleanup() {
    state.respawnQueue = [];
  },
};
