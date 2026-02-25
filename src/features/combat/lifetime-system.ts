import { world } from '@/shared/ecs/combat-world';
import { unregisterMeshEntity } from '@/shared/ecs/entity-index';
import type { GameSystem } from '@/shared/types';

import { MeshComponent } from '@/entities/rendering/mesh';
import { LifetimeComponent } from '@/entities/stats/lifetime';

import { cleanupExcessBullets } from './weapons';

/** Удаляет сущности с истёкшим временем жизни и лишние снаряды */
export const lifetimeSystem: GameSystem = {
  id: 'lifetime',
  update(dt: number) {
    const entities = world.query(LifetimeComponent, MeshComponent);
    for (const {
      entity,
      components: [lifetime, mesh],
    } of entities) {
      lifetime.remaining -= dt;
      if (lifetime.remaining <= 0) {
        unregisterMeshEntity(mesh.mesh);
        mesh.mesh.dispose();
        world.destroyEntity(entity);
      }
    }
    cleanupExcessBullets();
  },
};
