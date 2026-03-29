import { Vector3 as BjsVector3, Matrix, Quaternion } from '@babylonjs/core/Maths/math.vector';

/**
 * Расширенный 3D-вектор на основе BJS `Vector3`.
 *
 * Все методы мутируют вектор на месте и возвращают `this`,
 * что позволяет писать цепочки: `pos.copyFrom(offset).applyQuaternion(q).add(base)`.
 *
 * Является настоящим BJS-вектором — никаких обёрток или синхронизаций.
 */
export class Vector3 extends BjsVector3 {
  constructor(x?: number, y?: number, z?: number) {
    super(x, y, z);
  }

  /** Квадрат расстояния до другого вектора (без sqrt — быстрее для сравнений). */
  distanceToSquared(v: BjsVector3): number {
    return (this.x - v.x) ** 2 + (this.y - v.y) ** 2 + (this.z - v.z) ** 2;
  }

  /** Расстояние до другого вектора. */
  distanceTo(v: BjsVector3): number {
    return Math.sqrt(this.distanceToSquared(v));
  }

  /** Поворачивает вектор кватернионом на месте. */
  applyQuaternion(q: Quaternion): this {
    return this.applyRotationQuaternionInPlace(q);
  }

  /** Трансформирует вектор матрицей 4×4 на месте. */
  applyMatrix4(m: Matrix): this {
    BjsVector3.TransformCoordinatesToRef(this, m, this);
    return this;
  }

  /** Линейная интерполяция к вектору `v` с коэффициентом `t`. */
  lerp(v: BjsVector3, t: number): this {
    this.x += (v.x - this.x) * t;
    this.y += (v.y - this.y) * t;
    this.z += (v.z - this.z) * t;
    return this;
  }

  /** Прибавляет `dir * s` на месте. */
  addScaledVector(dir: BjsVector3, s: number): this {
    return this.addInPlaceFromFloats(dir.x * s, dir.y * s, dir.z * s);
  }

  /** Клонирует как расширенный Vector3 (а не базовый BJS). */
  override clone(): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }

  /** Мутирующее сложение (в BJS `add` создаёт новый вектор). */
  override add(v: BjsVector3): this {
    this.addInPlace(v);
    return this;
  }

  /** Мутирующее векторное произведение (в BJS `cross` создаёт новый вектор). */
  override cross(v: BjsVector3): this {
    const ax = this.x;
    const ay = this.y;
    const az = this.z;
    this.x = ay * v.z - az * v.y;
    this.y = az * v.x - ax * v.z;
    this.z = ax * v.y - ay * v.x;
    return this;
  }
}
