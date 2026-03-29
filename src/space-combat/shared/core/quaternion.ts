import { Quaternion as BQuaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';

/**
 * Мутирующий кватернион вращения на основе BJS `Quaternion`.
 *
 * Все методы изменяют экземпляр на месте и возвращают `this`,
 * что позволяет писать цепочки без аллокаций в горячем цикле:
 *
 * ```ts
 * plane.quaternion.multiply(_tmp.setFromAxisAngle(axis, angle));
 * ```
 *
 * Является настоящим BJS-кватернионом — работает со всеми API BabylonJS напрямую.
 */
export class Quaternion extends BQuaternion {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    super(x, y, z, w);
  }

  /** Задаёт вращение вокруг оси `axis` на угол `angle` (рад). */
  setFromAxisAngle(axis: Vector3, angle: number): this {
    BQuaternion.RotationAxisToRef(axis, angle, this);
    return this;
  }

  /** Задаёт вращение, переводящее единичный вектор `from` в `to`. */
  setFromUnitVectors(from: Vector3, to: Vector3): this {
    BQuaternion.FromUnitVectorsToRef(from, to, this);
    return this;
  }

  /** Мутирующее пост-умножение: `this = this * q` (в BJS `multiply` создаёт новый объект). */
  override multiply(q: BQuaternion): this {
    this.multiplyInPlace(q);
    return this;
  }

  /** Пре-умножение: `this = q * this`. */
  premultiply(q: BQuaternion): this {
    const tx = this.x,
      ty = this.y,
      tz = this.z,
      tw = this.w;

    this.x = q.w * tx + q.x * tw + q.y * tz - q.z * ty;
    this.y = q.w * ty - q.x * tz + q.y * tw + q.z * tx;
    this.z = q.w * tz + q.x * ty - q.y * tx + q.z * tw;
    this.w = q.w * tw - q.x * tx - q.y * ty - q.z * tz;

    return this;
  }
}
