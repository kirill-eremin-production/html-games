import { Matrix, Quaternion, Vector2 as BjsVector2, Vector3 as BjsVector3 } from '@babylonjs/core/Maths/math.vector';

// Reusable matrices for projection/unprojection
const _tmpMat1 = new Matrix();
const _tmpMat2 = new Matrix();

/**
 * Extended Vector3 that inherits from Babylon.js Vector3
 * and adds Three.js-compatible convenience methods.
 *
 * Instances ARE real BJS vectors — no wrapping, no sync.
 * All added methods mutate `this` and return `this` (Three.js convention).
 */
export class Vector3 extends BjsVector3 {
  constructor(x?: number, y?: number, z?: number) {
    super(x, y, z);
  }

  /** Three.js compat: copies values from another vector (mutates self). */
  copy(v: BjsVector3): this {
    return this.copyFrom(v);
  }

  /** Three.js compat: subtracts v in place (mutates self). */
  sub(v: BjsVector3): this {
    return this.subtractInPlace(v);
  }

  /** Three.js compat: scales by scalar in place (mutates self). */
  multiplyScalar(s: number): this {
    return this.scaleInPlace(s);
  }

  /** Three.js compat: divides all components by scalar (mutates self). */
  divideScalar(s: number): this {
    return this.scaleInPlace(1 / s);
  }

  /** Three.js compat: sets all components to the same value (mutates self). */
  setScalar(s: number): this {
    return this.setAll(s);
  }

  /** Three.js compat: adds dir * s in place (mutates self). */
  addScaledVector(dir: BjsVector3, s: number): this {
    return this.addInPlaceFromFloats(dir.x * s, dir.y * s, dir.z * s);
  }

  /** Three.js compat: Euclidean distance to another vector. */
  distanceTo(v: BjsVector3): number {
    return Math.sqrt(this.distanceToSquared(v));
  }

  /** Three.js compat: squared Euclidean distance to another vector. */
  distanceToSquared(v: BjsVector3): number {
    return (this.x - v.x) ** 2 + (this.y - v.y) ** 2 + (this.z - v.z) ** 2;
  }

  /** Three.js compat: applies a quaternion rotation in place (mutates self). */
  applyQuaternion(q: Quaternion): this {
    return this.applyRotationQuaternionInPlace(q);
  }

  /** Three.js compat: transforms by a 4x4 matrix in place (mutates self). */
  applyMatrix4(m: Matrix): this {
    BjsVector3.TransformCoordinatesToRef(this, m, this);
    return this;
  }

  /** Three.js compat: linearly interpolates toward v by factor t (mutates self). */
  lerp(v: BjsVector3, t: number): this {
    this.x += (v.x - this.x) * t;
    this.y += (v.y - this.y) * t;
    this.z += (v.z - this.z) * t;
    return this;
  }

  /** Three.js compat: set this to interpolation between v1 and v2 by factor t. */
  lerpVectors(v1: BjsVector3, v2: BjsVector3, t: number): this {
    this.x = v1.x + (v2.x - v1.x) * t;
    this.y = v1.y + (v2.y - v1.y) * t;
    this.z = v1.z + (v2.z - v1.z) * t;
    return this;
  }

  /** Three.js compat: unproject from NDC to world space using camera matrices. */
  unproject(cam: { getViewMatrix(): Matrix; getProjectionMatrix(): Matrix; _updateMatrices?(): void }): this {
    cam._updateMatrices?.();
    const vm = cam.getViewMatrix();
    const pm = cam.getProjectionMatrix();
    vm.multiplyToRef(pm, _tmpMat1);
    _tmpMat1.invertToRef(_tmpMat2);
    BjsVector3.TransformCoordinatesToRef(this, _tmpMat2, this);
    return this;
  }

  /** Override clone to return our extended Vector3 instead of base BJS Vector3. */
  override clone(): Vector3 {
    return new Vector3(this.x, this.y, this.z);
  }

  /**
   * Override BJS add() to MUTATE self (Three.js behavior)
   * instead of returning a new vector (BJS behavior).
   */
  override add(v: BjsVector3): this {
    this.addInPlace(v);
    return this;
  }

  /**
   * Override BJS cross() to MUTATE self (Three.js behavior)
   * instead of returning a new vector (BJS behavior).
   */
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

/**
 * Minimal extended Vector2 that inherits from Babylon.js Vector2.
 */
export class Vector2 extends BjsVector2 {
  constructor(x?: number, y?: number) {
    super(x, y);
  }
}
