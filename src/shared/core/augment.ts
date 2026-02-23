/**
 * Augments Babylon.js Vector3, Quaternion, and Color3 prototypes
 * with Three.js-compatible convenience methods.
 *
 * This file must be imported (for side effects) before any game code runs.
 * Existing BJS methods (add, cross, multiply, etc.) are NOT modified.
 */
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Matrix, Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';

// ── Reusable temp matrices ──────────────────────────────────────────────────
const _tmpMat1 = new Matrix();
const _tmpMat2 = new Matrix();

// ══════════════════════════════════════════════════════════════════════════════
// Vector3 augmentation
// ══════════════════════════════════════════════════════════════════════════════

Vector3.prototype.copy = function (v: Vector3): Vector3 {
  return this.copyFrom(v);
};
Vector3.prototype.sub = function (v: Vector3): Vector3 {
  return this.subtractInPlace(v);
};
Vector3.prototype.multiplyScalar = function (s: number): Vector3 {
  return this.scaleInPlace(s);
};
Vector3.prototype.divideScalar = function (s: number): Vector3 {
  return this.scaleInPlace(1 / s);
};
Vector3.prototype.setScalar = function (s: number): Vector3 {
  return this.setAll(s);
};
Vector3.prototype.addScaledVector = function (dir: Vector3, s: number): Vector3 {
  return this.addInPlaceFromFloats(dir.x * s, dir.y * s, dir.z * s);
};
Vector3.prototype.distanceTo = function (v: Vector3): number {
  return Math.sqrt((this.x - v.x) ** 2 + (this.y - v.y) ** 2 + (this.z - v.z) ** 2);
};
Vector3.prototype.distanceToSquared = function (v: Vector3): number {
  return (this.x - v.x) ** 2 + (this.y - v.y) ** 2 + (this.z - v.z) ** 2;
};
Vector3.prototype.applyQuaternion = function (q: Quaternion): Vector3 {
  return this.applyRotationQuaternionInPlace(q);
};
Vector3.prototype.applyMatrix4 = function (m: Matrix): Vector3 {
  Vector3.TransformCoordinatesToRef(this, m, this);
  return this;
};
Vector3.prototype.lerp = function (v: Vector3, t: number): Vector3 {
  this.x += (v.x - this.x) * t;
  this.y += (v.y - this.y) * t;
  this.z += (v.z - this.z) * t;
  return this;
};
Vector3.prototype.lerpVectors = function (v1: Vector3, v2: Vector3, t: number): Vector3 {
  this.x = v1.x + (v2.x - v1.x) * t;
  this.y = v1.y + (v2.y - v1.y) * t;
  this.z = v1.z + (v2.z - v1.z) * t;
  return this;
};
Vector3.prototype.unproject = function (cam: {
  getViewMatrix(): Matrix;
  getProjectionMatrix(): Matrix;
  _updateMatrices?(): void;
}): Vector3 {
  cam._updateMatrices?.();
  const vm = cam.getViewMatrix();
  const pm = cam.getProjectionMatrix();
  vm.multiplyToRef(pm, _tmpMat1);
  _tmpMat1.invertToRef(_tmpMat2);
  Vector3.TransformCoordinatesToRef(this, _tmpMat2, this);
  return this;
};

// ══════════════════════════════════════════════════════════════════════════════
// Quaternion augmentation
// ══════════════════════════════════════════════════════════════════════════════

Quaternion.prototype.copy = function (q: Quaternion): Quaternion {
  this.copyFrom(q);
  return this;
};
Quaternion.prototype.setFromAxisAngle = function (axis: Vector3, angle: number): Quaternion {
  Quaternion.RotationAxisToRef(axis, angle, this);
  return this;
};
Quaternion.prototype.setFromUnitVectors = function (from: Vector3, to: Vector3): Quaternion {
  Quaternion.FromUnitVectorsToRef(from, to, this);
  return this;
};
Quaternion.prototype.premultiply = function (q: Quaternion): Quaternion {
  const tx = this.x,
    ty = this.y,
    tz = this.z,
    tw = this.w;
  this.x = q.w * tx + q.x * tw + q.y * tz - q.z * ty;
  this.y = q.w * ty - q.x * tz + q.y * tw + q.z * tx;
  this.z = q.w * tz + q.x * ty - q.y * tx + q.z * tw;
  this.w = q.w * tw - q.x * tx - q.y * ty - q.z * tz;
  return this;
};
Quaternion.prototype.identity = function (): Quaternion {
  this.set(0, 0, 0, 1);
  return this;
};

// ══════════════════════════════════════════════════════════════════════════════
// Color3 augmentation
// ══════════════════════════════════════════════════════════════════════════════

Color3.prototype.setHex = function (hex: number): Color3 {
  this.r = ((hex >> 16) & 0xff) / 255;
  this.g = ((hex >> 8) & 0xff) / 255;
  this.b = (hex & 0xff) / 255;
  return this;
};
Color3.prototype.getHex = function (): number {
  const r = Math.round(Math.min(this.r, 1) * 255);
  const g = Math.round(Math.min(this.g, 1) * 255);
  const b = Math.round(Math.min(this.b, 1) * 255);
  return (r << 16) | (g << 8) | b;
};
Color3.prototype.multiplyScalar = function (s: number): Color3 {
  this.r *= s;
  this.g *= s;
  this.b *= s;
  return this;
};
Color3.prototype.copy = function (c: Color3): Color3 {
  this.copyFrom(c);
  return this;
};
Color3.prototype.setHSL = function (h: number, s: number, l: number): Color3 {
  if (s === 0) {
    this.r = this.g = this.b = l;
    return this;
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const hue2rgb = (pp: number, qq: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return pp + (qq - pp) * 6 * t;
    if (t < 1 / 2) return qq;
    if (t < 2 / 3) return pp + (qq - pp) * (2 / 3 - t) * 6;
    return pp;
  };
  this.r = hue2rgb(p, q, h + 1 / 3);
  this.g = hue2rgb(p, q, h);
  this.b = hue2rgb(p, q, h - 1 / 3);
  return this;
};

// ══════════════════════════════════════════════════════════════════════════════
// TypeScript type augmentations
// ══════════════════════════════════════════════════════════════════════════════

declare module '@babylonjs/core/Maths/math.vector' {
  interface Vector3 {
    copy(v: Vector3): this;
    sub(v: Vector3): this;
    multiplyScalar(s: number): this;
    divideScalar(s: number): this;
    setScalar(s: number): this;
    addScaledVector(dir: Vector3, s: number): this;
    distanceTo(v: Vector3): number;
    distanceToSquared(v: Vector3): number;
    applyQuaternion(q: Quaternion): this;
    applyMatrix4(m: Matrix): this;
    lerp(v: Vector3, t: number): this;
    lerpVectors(v1: Vector3, v2: Vector3, t: number): this;
    unproject(cam: {
      getViewMatrix(): Matrix;
      getProjectionMatrix(): Matrix;
      _updateMatrices?(): void;
    }): this;
  }

  interface Quaternion {
    copy(q: Quaternion): this;
    setFromAxisAngle(axis: Vector3, angle: number): this;
    setFromUnitVectors(from: Vector3, to: Vector3): this;
    premultiply(q: Quaternion): this;
    identity(): this;
  }
}

declare module '@babylonjs/core/Maths/math.color' {
  interface Color3 {
    setHex(hex: number): this;
    getHex(): number;
    multiplyScalar(s: number): this;
    copy(c: Color3): this;
    setHSL(h: number, s: number, l: number): this;
  }
}
