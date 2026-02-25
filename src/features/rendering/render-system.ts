import { Vector3, addToScene, disposeNode } from '@/shared/core';
import { world } from '@/shared/ecs/combat-world';
import { registerMeshEntity } from '@/shared/ecs/entity-index';
import type { GameSystem } from '@/shared/types';

import { createSubsystemEntities } from '@/entities/ecs-adapters/adapters';
import { TransformComponent } from '@/entities/physics/transform';
import { MeshComponent } from '@/entities/rendering/mesh';
import { ViewComponent } from '@/entities/rendering/view';
import { VisualComponent } from '@/entities/rendering/visual';

import { createNodeForVisual } from './visual-factory';

/**
 * RenderSystem — управляет жизненным циклом визуальных объектов.
 *
 * Создаёт BJS-ноды для сущностей с VisualComponent,
 * записывает ViewComponent + MeshComponent (backward compat).
 * Shared refs между TransformComponent и BJS-нодами сохраняются.
 *
 * Capital ships: после создания mesh вызывает lookAt(0,0,0)
 * и создаёт подсистемы из metadata.
 */
export const renderSystem: GameSystem = {
  id: 'render',

  update() {
    // Lifecycle: создание — если есть VisualComponent без ViewComponent
    const visuals = world.query(VisualComponent, TransformComponent);
    for (const {
      entity,
      components: [visual, transform],
    } of visuals) {
      if (world.getComponent(entity, ViewComponent)) continue;

      const node = createNodeForVisual(visual, entity, world);

      // Сохраняем shared refs: копируем позицию/вращение в ноду,
      // затем заменяем ссылки в TransformComponent на ноду
      node.position.copyFrom(transform.position);
      node.quaternion.copyFrom(transform.quaternion);
      transform.position = node.position;
      transform.quaternion = node.quaternion;

      // Capital ship: lookAt центра + создание подсистем из metadata
      if (visual.type === 'capital-ship') {
        node.lookAt(new Vector3(0, 0, 0));
        transform.quaternion = node.quaternion;
        if (node.metadata?.subsystems) {
          createSubsystemEntities(world, entity, node.metadata.subsystems, node);
        }
      }

      addToScene(node);
      world.addComponent(entity, new ViewComponent(node));
      world.addComponent(entity, new MeshComponent(node)); // backward compat
      registerMeshEntity(node, entity);
    }
  },

  cleanup() {
    const views = world.query(ViewComponent);
    for (const {
      components: [view],
    } of views) {
      disposeNode(view.node);
    }
  },
};
