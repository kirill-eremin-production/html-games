import { Vector3 } from '@/shared/core';
import { world } from '@/shared/ecs/combat-world';
import type { GameSystem } from '@/shared/types';

import { SubsystemComponent } from '@/entities/combat/subsystem';
import { TransformComponent } from '@/entities/physics/transform';
import { ViewComponent } from '@/entities/rendering/view';
import { ParentEntityComponent } from '@/entities/stats/parent-entity';

const _tmpVec = new Vector3();

/**
 * HierarchySystem — вычисляет мировые координаты дочерних сущностей.
 *
 * Для каждой подсистемы с ParentEntityComponent:
 * local center → world position через world matrix родительского корабля.
 * Результат записывается в TransformComponent.position подсистемы.
 */
export const hierarchySystem: GameSystem = {
  id: 'hierarchy',

  update() {
    const subs = world.query(SubsystemComponent, ParentEntityComponent, TransformComponent);

    for (const {
      components: [sub, parent, transform],
    } of subs) {
      const parentView = world.getComponent(parent.parentId, ViewComponent);
      if (!parentView) continue;

      // local center → world position через world matrix родителя
      _tmpVec.copyFrom(sub.center).applyMatrix4(parentView.node.getWorldMatrix());
      transform.position.copyFrom(_tmpVec);
    }
  },
};
