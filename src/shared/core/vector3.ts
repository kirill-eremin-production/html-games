import {
  Vector2 as BjsVector2,
  Vector3 as BjsVector3,
  Matrix,
  Quaternion,
} from '@babylonjs/core/Maths/math.vector';

/**
 * Extended Vector3 — inherits from BJS Vector3, adds convenience methods.
 * Instances ARE real BJS vectors — no wrapping, no sync.
 * Added methods mutate `this` and return `this` for chaining.
 */
export class Vector3 extends BjsVector3 {
  constructor(x?: number, y?: number, z?: number) {
    super(x, y, z);
  }

  /** Squared Euclidean distance to another vector. */
  distanceToSquared(v: BjsVector3): number {
    return (this.x - v.x) ** 2 + (this.y - v.y) ** 2 + (this.z - v.z) ** 2;
  }

  /** Euclidean distance to another vector. */
  distanceTo(v: BjsVector3): number {
    return Math.sqrt(this.distanceToSquared(v));
  }

  /** Applies a quaternion rotation in place. */
  applyQuaternion(q: Quaternion): this {
    return this.applyRotationQuaternionInPlace(q);
  }

  /** Transforms by a 4x4 matrix in place. */
  applyMatrix4(m: Matrix): this {
    BjsVector3.TransformCoordinatesToRef(this, m, this);
    return this;
  }

  /** Linearly interpolates toward v by factor t. */
  lerp(v: BjsVector3, t: number): this {
    this.x += (v.x - this.x) * t;
    this.y += (v.y - this.y) * t;
    this.z += (v.z - this.z) * t;
    return this;
  }

  /** Adds dir * s in place. */
  addScaledVector(dir: BjsVector3, s: number): this {
    return this.addInPlaceFromFloats(dir.x * s, dir.y * s, dir.z * s);
  }

  override clone(): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }

  /** Mutating add (BJS add returns a new vector). */
  override add(v: BjsVector3): this {
    this.addInPlace(v);
    return this;
  }

  /** Mutating cross product (BJS cross returns a new vector). */
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

export class Vector2 extends BjsVector2 {
  constructor(x?: number, y?: number) {
    super(x, y);
  }
}

// Type augmentation: all mesh/node positions are replaced with extended Vector3
// at construction time, so BJS Vector3 instances in practice have these methods.
declare module '@babylonjs/core/Maths/math.vector' {
  interface Vector3 {
    distanceToSquared(v: Vector3): number;
    distanceTo(v: Vector3): number;
    applyQuaternion(q: Quaternion): this;
    applyMatrix4(m: Matrix): this;
    lerp(v: Vector3, t: number): this;
    addScaledVector(dir: Vector3, s: number): this;
  }

  interface Quaternion {
    setFromAxisAngle(axis: Vector3, angle: number): this;
    setFromUnitVectors(from: Vector3, to: Vector3): this;
    premultiply(q: Quaternion): this;
  }
}
