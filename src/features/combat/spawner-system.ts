import { COMBAT_CONSTANTS } from '@/shared/config/combat';
import { combatConfig } from '@/shared/config/combat-session';
import { Vector3, addToScene } from '@/shared/core';
import { createFighterInstanced } from '@/entities/fighter';
import { addHealthBar } from '@/shared/model-loader/shared';
import { parseHexColor, settings } from '@/shared/settings';
import { nextAllyName, nextEnemyName, state } from '@/shared/state';

import { playerPlane } from '@/features/flight/player-system';
import type { GameSystem } from '@/shared/types';

const C = COMBAT_CONSTANTS;

export function spawnAlly(near: Vector3): void {
  const mesh = createFighterInstanced(
    parseHexColor(settings.colors.allyBody),
    parseHexColor(settings.colors.allyExhaust),
  );
  addToScene(mesh);
  const offset = new Vector3(
    (Math.random() - 0.5) * C.allySpawnSpread.x,
    (Math.random() - 0.5) * C.allySpawnSpread.y,
    (Math.random() - 0.5) * C.allySpawnSpread.z,
  );
  mesh.position.copyFrom(near).add(offset);
  mesh.quaternion.copyFrom(playerPlane.quaternion);
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
    ai: { state: 'chase', timer: 0, evadeDir: new Vector3(), target: null },
  });
}

export function spawnEnemy(near: Vector3): void {
  const mesh = createFighterInstanced(
    parseHexColor(settings.colors.enemyBody),
    parseHexColor(settings.colors.enemyExhaust),
  );
  addToScene(mesh);
  const offset = new Vector3(
    (Math.random() - 0.5) * C.enemySpawnSpread.x,
    (Math.random() - 0.5) * C.enemySpawnSpread.y,
    (Math.random() - 0.5) * C.enemySpawnSpread.z,
  );
  mesh.position.copyFrom(near).add(offset);
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
    ai: { state: 'chase', timer: 0, evadeDir: new Vector3(), target: null },
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
        let spawnPos = new Vector3(...C.defaultEnemySpawnPos);
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
