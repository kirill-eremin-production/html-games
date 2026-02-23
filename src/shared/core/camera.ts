import { FreeCamera } from '@babylonjs/core/Cameras/freeCamera';
import { Vector3 as BVector3 } from '@babylonjs/core/Maths/math.vector';
import type { Scene } from '@babylonjs/core/scene';

import { Vector3 } from './vector3';

let _camId = 0;

/**
 * PerspectiveCamera — extends BJS FreeCamera with convenience API.
 * fov is stored in degrees and converted to radians for BJS.
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
    this.inputs.clear();
    // Replace BJS Vector3 with extended Vector3 for chaining support
    this.position = new Vector3();
    this.upVector = new Vector3(0, 1, 0);
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

  get fovDeg(): number {
    return this._fovDeg;
  }

  set fovDeg(v: number) {
    this._fovDeg = v;
    this.fov = (v * Math.PI) / 180;
  }

  get up(): BVector3 {
    return this.upVector;
  }
  set up(v: BVector3) {
    this.upVector.copyFrom(v);
  }

  /** lookAt accepts either a Vector3 or (x, y, z). */
  lookAt(x: number | Vector3 | BVector3, y?: number, z?: number): this {
    if (typeof x === 'number') {
      this.setTarget(new BVector3(x, y!, z!));
    } else {
      this.setTarget(new BVector3(x.x, x.y, x.z));
    }
    return this;
  }

  /** Recalculate fov in radians after changing fovDeg. */
  updateProjectionMatrix(): void {
    this.fov = (this._fovDeg * Math.PI) / 180;
  }
}

export { PerspectiveCamera as EngineCamera };
export { PerspectiveCamera as Camera };
