import { Quaternion as BQuaternion } from '@babylonjs/core/Maths/math.vector';
import { TransformNode as BTransformNode } from '@babylonjs/core/Meshes/transformNode';
import type { Scene } from '@babylonjs/core/scene';

import { Quaternion } from './quaternion';
import { Vector3 } from './vector3';

/**
 * Расширенный узел сцены на основе BJS `TransformNode`.
 *
 * Конструктор подставляет расширённый {@link Vector3} в `position`, `rotation`
 * и `scaling`, что даёт chaining и дополнительные методы (`.applyQuaternion()`,
 * `.distanceTo()` и т.д.) без обёрток и синхронизации.
 *
 * Является настоящим BJS-узлом — работает со всеми API BabylonJS напрямую.
 */
export class TransformNode extends BTransformNode {
  constructor(name = '', scene?: Scene | null) {
    super(name, scene ?? undefined);
    this.metadata = {};
    this.position = new Vector3();
    this.rotation = new Vector3();
    this.scaling = new Vector3(1, 1, 1);
  }

  /** Позиция узла с типом расширённого {@link Vector3}. */
  override get position(): Vector3 {
    return super.position as Vector3;
  }

  override set position(v: Vector3) {
    super.position = v;
  }

  /**
   * Рекурсивно включает/выключает узел и ВСЕХ потомков.
   * BJS `setEnabled` не каскадируется на детей автоматически.
   */
  setVisibleRecursive(v: boolean): void {
    this.setEnabled(v);
    for (const desc of this.getDescendants(false)) {
      if ('setEnabled' in desc) (desc as BTransformNode).setEnabled(v);
      if ('isVisible' in desc) (desc as any).isVisible = v;
    }
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
