import { world } from '@/shared/ecs/combat-world';
import type { GameSystem } from '@/shared/types';

import { ProjectileComponent } from '@/entities/combat/projectile';
import { TransformComponent } from '@/entities/physics/transform';

/** Двигает все снаряды по их вектору скорости */
export const projectileMovementSystem: GameSystem = {
  id: 'projectile-movement',
  update(dt: number) {
    const entities = world.query(TransformComponent, ProjectileComponent);
    for (const {
      components: [transform, projectile],
    } of entities) {
      transform.position.addScaledVector(projectile.velocity, dt);
    }
  },
};
