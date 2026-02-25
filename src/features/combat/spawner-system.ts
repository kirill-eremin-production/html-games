import { COMBAT_CONSTANTS } from '@/shared/config/combat';
import { combatConfig } from '@/shared/config/combat-session';
import { Vector3, addToScene } from '@/shared/core';
import { world } from '@/shared/ecs/combat-world';
import { addHealthBar } from '@/shared/model-loader/shared';
import { parseHexColor, settings } from '@/shared/settings';
import { nextAllyName, nextEnemyName, state } from '@/shared/state';
import type { GameSystem } from '@/shared/types';

import { createFighterEntity } from '@/entities/ecs-adapters';
import { createFighterInstanced } from '@/entities/objects/space-ships';

import { playerPlane } from '@/features/flight/player-system';

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

  const { fighter } = createFighterEntity(
    world,
    mesh,
    name,
    combatConfig.fighterHP,
    combatConfig.fighterHP,
    combatConfig.allySpeedMin +
      Math.random() * (combatConfig.allySpeedMax - combatConfig.allySpeedMin),
    combatConfig.allyFireRateMin +
      Math.random() * (combatConfig.allyFireRateMax - combatConfig.allyFireRateMin),
    'ally',
    hb.bar,
    hb.fill,
    new Vector3(),
  );
  state.allies.push(fighter);
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

  const { fighter } = createFighterEntity(
    world,
    mesh,
    name,
    combatConfig.fighterHP,
    combatConfig.fighterHP,
    combatConfig.enemySpeedMin +
      Math.random() * (combatConfig.enemySpeedMax - combatConfig.enemySpeedMin),
    combatConfig.enemyFireRateMin +
      Math.random() * (combatConfig.enemyFireRateMax - combatConfig.enemyFireRateMin),
    'enemy',
    hb.bar,
    hb.fill,
    new Vector3(),
  );
  state.enemies.push(fighter);
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
