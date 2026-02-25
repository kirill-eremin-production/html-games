import { COMBAT_CONSTANTS } from '@/shared/config/combat';
import { combatConfig } from '@/shared/config/combat-session';
import { Quaternion, Vector3 } from '@/shared/core';
import { world } from '@/shared/ecs/combat-world';
import { parseHexColor, settings } from '@/shared/settings';
import { nextAllyName, nextEnemyName, state } from '@/shared/state';
import type { GameSystem } from '@/shared/types';

import { FighterAIComponent } from '@/entities/ai/fighter-ai';
import { WeaponComponent } from '@/entities/combat/weapon';
import { queryAliveCapitalShips } from '@/entities/ecs-queries';
import { HitboxComponent } from '@/entities/physics/hitbox';
import { TransformComponent } from '@/entities/physics/transform';
import { VelocityComponent } from '@/entities/physics/velocity';
import { VisualComponent } from '@/entities/rendering/visual';
import { DamageBufferComponent } from '@/entities/stats/damage-buffer';
import { HealthComponent } from '@/entities/stats/health';
import { NameComponent } from '@/entities/stats/name';
import { TeamComponent } from '@/entities/stats/team';

import { playerPlane } from '@/features/flight/player-system';

const C = COMBAT_CONSTANTS;

export function spawnAlly(near: Vector3): void {
  const offset = new Vector3(
    (Math.random() - 0.5) * C.allySpawnSpread.x,
    (Math.random() - 0.5) * C.allySpawnSpread.y,
    (Math.random() - 0.5) * C.allySpawnSpread.z,
  );
  const pos = new Vector3().copyFrom(near).add(offset);
  const quat = new Quaternion().copyFrom(playerPlane.quaternion);

  const id = world.createEntity();
  world.addComponent(id, new TransformComponent(pos, quat));
  world.addComponent(
    id,
    new VisualComponent(
      'fighter',
      parseHexColor(settings.colors.allyBody),
      parseHexColor(settings.colors.allyExhaust),
    ),
  );
  world.addComponent(id, new NameComponent(nextAllyName()));
  world.addComponent(id, new HealthComponent(combatConfig.fighterHP, combatConfig.fighterHP));
  world.addComponent(
    id,
    new VelocityComponent(
      combatConfig.allySpeedMin +
        Math.random() * (combatConfig.allySpeedMax - combatConfig.allySpeedMin),
    ),
  );
  world.addComponent(
    id,
    new WeaponComponent(
      combatConfig.allyFireRateMin +
        Math.random() * (combatConfig.allyFireRateMax - combatConfig.allyFireRateMin),
    ),
  );
  world.addComponent(id, new TeamComponent('ally'));
  world.addComponent(id, new FighterAIComponent('chase', 0, new Vector3(), null));
  world.addComponent(id, new DamageBufferComponent());
  world.addComponent(id, new HitboxComponent(C.fighterHitDistSq));
}

export function spawnEnemy(near: Vector3): void {
  const offset = new Vector3(
    (Math.random() - 0.5) * C.enemySpawnSpread.x,
    (Math.random() - 0.5) * C.enemySpawnSpread.y,
    (Math.random() - 0.5) * C.enemySpawnSpread.z,
  );
  const pos = new Vector3().copyFrom(near).add(offset);

  const id = world.createEntity();
  world.addComponent(id, new TransformComponent(pos, new Quaternion()));
  world.addComponent(
    id,
    new VisualComponent(
      'fighter',
      parseHexColor(settings.colors.enemyBody),
      parseHexColor(settings.colors.enemyExhaust),
    ),
  );
  world.addComponent(id, new NameComponent(nextEnemyName()));
  world.addComponent(id, new HealthComponent(combatConfig.fighterHP, combatConfig.fighterHP));
  world.addComponent(
    id,
    new VelocityComponent(
      combatConfig.enemySpeedMin +
        Math.random() * (combatConfig.enemySpeedMax - combatConfig.enemySpeedMin),
    ),
  );
  world.addComponent(
    id,
    new WeaponComponent(
      combatConfig.enemyFireRateMin +
        Math.random() * (combatConfig.enemyFireRateMax - combatConfig.enemyFireRateMin),
    ),
  );
  world.addComponent(id, new TeamComponent('enemy'));
  world.addComponent(id, new FighterAIComponent('chase', 0, new Vector3(), null));
  world.addComponent(id, new DamageBufferComponent());
  world.addComponent(id, new HitboxComponent(C.fighterHitDistSq));
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
        const livingShips = queryAliveCapitalShips();
        if (livingShips.length > 0) {
          spawnPos =
            livingShips[Math.floor(Math.random() * livingShips.length)].transform.position.clone();
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
