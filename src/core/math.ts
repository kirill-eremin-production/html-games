import { Matrix, Vector3 as BVector3 } from '@babylonjs/core/Maths/math.vector';

import type { Quaternion } from './quaternion';
import type { Vector3 } from './vector3';

/** Any camera that can provide view/projection matrices. */
export interface ProjectionCamera {
  getViewMatrix(force?: boolean): Matrix;
  getProjectionMatrix(force?: boolean): Matrix;
}

/** Create a quaternion from an axis and angle. Mutates `out`. */
export function quatFromAxisAngle(axis: Vector3, angle: number, out: Quaternion): Quaternion {
  return out.setFromAxisAngle(axis, angle);
}

/** Create a quaternion that rotates `from` unit vector to `to` unit vector. Mutates `out`. */
export function quatFromUnitVectors(from: Vector3, to: Vector3, out: Quaternion): Quaternion {
  return out.setFromUnitVectors(from, to);
}

/** Squared distance between two Vector3. */
export function vec3DistSq(a: Vector3, b: Vector3): number {
  return a.distanceToSquared(b);
}

/** Distance between two Vector3. */
export function vec3Dist(a: Vector3, b: Vector3): number {
  return a.distanceTo(b);
}

/** target += dir * scalar. Mutates target in-place. */
export function vec3AddScaled(target: Vector3, dir: Vector3, scalar: number): Vector3 {
  return target.addScaledVector(dir, scalar);
}

/** Apply a 4x4 matrix transform to a vector. Mutates vec in-place. */
export function vec3TransformMatrix(vec: Vector3, matrix: Matrix): Vector3 {
  return vec.applyMatrix4(matrix);
}

/** Apply a quaternion rotation to a vector. Mutates vec in-place. */
export function vec3ApplyQuat(vec: Vector3, q: Quaternion): Vector3 {
  return vec.applyQuaternion(q);
}

// Reusable matrix for projection operations
const _vpMatrix = new Matrix();

/** Project world position to screen pixel coordinates.
 *  z < 1 means the point is in front of the camera. */
export function vec3Project(
  worldPos: Vector3,
  cam: ProjectionCamera,
  screenW: number,
  screenH: number,
  tmp: Vector3,
): { x: number; y: number; z: number } {
  const vm = cam.getViewMatrix(true);
  const pm = cam.getProjectionMatrix(true);
  vm.multiplyToRef(pm, _vpMatrix);
  BVector3.TransformCoordinatesToRef(worldPos, _vpMatrix, tmp);
  return {
    x: (tmp.x * 0.5 + 0.5) * screenW,
    y: (-tmp.y * 0.5 + 0.5) * screenH,
    z: tmp.z,
  };
}

// Reusable matrix for unprojection
const _invVP = new Matrix();

/** Unproject a screen-space coordinate to world space. Mutates vec in-place. */
export function vec3Unproject(vec: Vector3, cam: ProjectionCamera): Vector3 {
  const vm = cam.getViewMatrix(true);
  const pm = cam.getProjectionMatrix(true);
  vm.multiplyToRef(pm, _vpMatrix);
  _vpMatrix.invertToRef(_invVP);
  BVector3.TransformCoordinatesToRef(vec, _invVP, vec);
  return vec;
}
