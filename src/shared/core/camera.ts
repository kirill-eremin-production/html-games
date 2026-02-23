import { FreeCamera } from '@babylonjs/core/Cameras/freeCamera';
import { Vector3 as BVector3 } from '@babylonjs/core/Maths/math.vector';
import type { Scene } from '@babylonjs/core/scene';

import { Vector3 } from './vector3';

let _camId = 0;

/**
 * PerspectiveCamera — extends BJS FreeCamera with Three.js-compatible API.
 * fov is stored in degrees (Three.js convention) and converted to radians for BJS.
 */
export class PerspectiveCamera extends FreeCamera {
  private _fovDeg: number;
  aspect: number;

  constructor(fov = 50, aspect = 1, near = 0.1, far = 2000, scene?: Scene) {
    super(`camera_${_camId++}`, BVector3.Zero(), scene ?? undefined);
    this._fovDeg = fov;
    this.aspect = aspect;
    this.minZ = near;
    this.maxZ = far;
    this.fov = (fov * Math.PI) / 180;
    // Disable built-in camera controls (we control manually)
    this.inputs.clear();
    // Replace BJS Vector3 with our extended Vector3
    this.position = new Vector3();
  }

  get near(): number {
    return this.minZ;
  }
  set near(v: number) {
    this.minZ = v;
  }

  get far(): number {
    return this.maxZ;
  }
  set far(v: number) {
    this.maxZ = v;
  }

  /** Get fov in degrees (Three.js convention). */
  get fovDeg(): number {
    return this._fovDeg;
  }

  /** Set fov in degrees; automatically updates BJS fov in radians. */
  set fovDeg(v: number) {
    this._fovDeg = v;
    this.fov = (v * Math.PI) / 180;
  }

  /** Three.js-compat: .up = BJS upVector. */
  get up(): BVector3 {
    return this.upVector;
  }
  set up(v: BVector3) {
    this.upVector.copyFrom(v);
  }

  /** Three.js-compat: lookAt accepts either a Vector3 or (x, y, z). */
  lookAt(x: number | Vector3 | BVector3, y?: number, z?: number): this {
    if (typeof x === 'number') {
      this.setTarget(new BVector3(x, y!, z!));
    } else {
      this.setTarget(new BVector3(x.x, x.y, x.z));
    }
    return this;
  }

  /** Three.js-compat: updateProjectionMatrix. In BJS this is automatic. */
  updateProjectionMatrix(): void {
    this.fov = (this._fovDeg * Math.PI) / 180;
  }

  /** Three.js-compat: get combined view-projection matrix for screen projection. */
  _updateMatrices(): void {
    this.getViewMatrix(true);
    this.getProjectionMatrix(true);
  }
}

export { PerspectiveCamera as EngineCamera };
export { PerspectiveCamera as Camera };
