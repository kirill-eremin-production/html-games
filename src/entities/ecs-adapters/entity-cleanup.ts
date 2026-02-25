import { world } from '@/shared/ecs/combat-world';
import { unregisterMeshEntity } from '@/shared/ecs/entity-index';
import type { EntityId } from '@/shared/ecs/types';

import { MeshComponent } from '@/entities/rendering/mesh';
import { ViewComponent } from '@/entities/rendering/view';

/**
 * Удаляет ECS-сущность вместе с визуальным объектом.
 * Поддерживает как новые (ViewComponent), так и legacy (MeshComponent) сущности.
 */
export function destroyEntityWithVisuals(entity: EntityId): void {
  const view = world.getComponent(entity, ViewComponent);
  if (view) {
    unregisterMeshEntity(view.node);
    view.node.dispose();
  } else {
    const mesh = world.getComponent(entity, MeshComponent);
    if (mesh) {
      unregisterMeshEntity(mesh.mesh);
      mesh.mesh.dispose();
    }
  }
  world.destroyEntity(entity);
}
