import { world } from '@/shared/ecs/combat-world';
import type { GameSystem } from '@/shared/types';

import { destroyEntityWithVisuals } from '@/entities/ecs-adapters/entity-cleanup';
import { LifetimeComponent } from '@/entities/stats/lifetime';

import { cleanupExcessBullets } from './weapons';

/** Удаляет сущности с истёкшим временем жизни и лишние снаряды */
export const lifetimeSystem: GameSystem = {
  id: 'lifetime',
  update(dt: number) {
    const entities = world.query(LifetimeComponent);
    for (const {
      entity,
      components: [lifetime],
    } of entities) {
      lifetime.remaining -= dt;
      if (lifetime.remaining <= 0) {
        destroyEntityWithVisuals(entity);
      }
    }
    cleanupExcessBullets();
  },
};
