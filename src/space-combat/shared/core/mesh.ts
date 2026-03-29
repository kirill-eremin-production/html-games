import { Quaternion as BQuaternion } from '@babylonjs/core/Maths/math.vector';
import { Mesh as BMesh } from '@babylonjs/core/Meshes/mesh';
import type { Scene } from '@babylonjs/core/scene';

import { Quaternion } from './quaternion';
import { Vector3 } from './vector3';

/**
 * Игровой меш — расширение BJS `Mesh` с типизированными `position` / `quaternion`.
 *
 * Конструктор подставляет расширённый {@link Vector3}, поэтому `.position.distanceTo()`,
 * `.position.applyQuaternion()` и другие методы работают без кастов.
 *
 * Создание — через фабрику {@link createMesh}:
 * ```ts
 * const mesh = createMesh(geometry, material);
 * mesh.position.set(10, 0, 5);
 * addToScene(mesh);
 * ```
 */
export class EngineMesh extends BMesh {
  readonly isMesh = true;

  constructor(name = '', scene?: Scene | null) {
    super(name, scene ?? undefined);
    this.metadata = {};
    this.position = new Vector3();
    this.rotation = new Vector3();
    this.scaling = new Vector3(1, 1, 1);
  }

  /** Позиция меша с типом расширённого {@link Vector3}. */
  override get position(): Vector3 {
    return super.position as Vector3;
  }

  override set position(v: Vector3) {
    super.position = v;
  }

  /**
   * Кватернион вращения. Создаётся лениво при первом обращении.
   * Возвращает расширённый {@link Quaternion} с методами `.multiply()`, `.premultiply()` и т.д.
   */
  get quaternion(): Quaternion {
    if (!this.rotationQuaternion) this.rotationQuaternion = new Quaternion();
    return this.rotationQuaternion as Quaternion;
  }

  set quaternion(q: BQuaternion) {
    this.rotationQuaternion = q;
  }
}
