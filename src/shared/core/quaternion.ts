import { Quaternion as BQuaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';

export class Quaternion extends BQuaternion {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    super(x, y, z, w);
  }

  /** Set from axis + angle, return this. */
  setFromAxisAngle(axis: Vector3, angle: number): this {
    BQuaternion.RotationAxisToRef(axis, angle, this);
    return this;
  }

  /** Set from two unit vectors, return this. */
  setFromUnitVectors(from: Vector3, to: Vector3): this {
    BQuaternion.FromUnitVectorsToRef(from, to, this);
    return this;
  }

  /** Mutating post-multiply: this = this * q (BJS multiply returns new). */
  override multiply(q: BQuaternion): this {
    this.multiplyInPlace(q);
    return this;
  }

  /** Pre-multiply: this = q * this. */
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
