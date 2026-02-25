import { world } from '@/shared/ecs/combat-world';
import { unregisterMeshEntity } from '@/shared/ecs/entity-index';
import type { GameSystem } from '@/shared/types';

import { ProjectileComponent } from '@/entities/combat/projectile';
import { MeshComponent } from '@/entities/rendering/mesh';

/**
 * Legacy bullet system — теперь только cleanup.
 * Движение, коллизии и lifetime обрабатываются
 * projectileMovementSystem, collisionSystem и lifetimeSystem.
 */

function clearAllBullets(): void {
  const projectiles = world.query(ProjectileComponent, MeshComponent);
  for (const {
    entity,
    components: [, mesh],
  } of projectiles) {
    unregisterMeshEntity(mesh.mesh);
    mesh.mesh.dispose();
    world.destroyEntity(entity);
  }
}

export const bulletSystem: GameSystem = {
  id: 'bullets',
  update() {
    // Вся логика перенесена в атомарные ECS-системы
  },
  cleanup() {
    clearAllBullets();
  },
};
