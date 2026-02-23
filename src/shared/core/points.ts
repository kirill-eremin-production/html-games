import { Constants } from '@babylonjs/core/Engines/constants';
import { Mesh as BMesh } from '@babylonjs/core/Meshes/mesh';
import type { Node } from '@babylonjs/core/node';
import type { Scene } from '@babylonjs/core/scene';

import type { EngineBufferGeometry } from './geometry';
import type { EnginePointsMaterial } from './material';
import { Quaternion } from './quaternion';
import { Vector3 } from './vector3';

/**
 * EnginePoints — point cloud rendering.
 * Extends BJS Mesh with pointsCloud material.
 */
export class EnginePoints extends BMesh {
  _pointsGeometry: EngineBufferGeometry | null = null;
  _pointsMat: EnginePointsMaterial | null = null;

  constructor(name = '', scene?: Scene | null) {
    super(name || 'points', scene ?? undefined);
    this.metadata = {};
    this.position = new Vector3();
    this.scaling = new Vector3(1, 1, 1);
  }

  get pointsGeometry(): EngineBufferGeometry | null {
    return this._pointsGeometry;
  }
  set pointsGeometry(g: EngineBufferGeometry | null) {
    this._pointsGeometry = g;
    if (g) g._applyToMesh(this);
  }

  /** Apply point cloud material settings to the BJS mesh. */
  applyPointsMaterial(mat: EnginePointsMaterial): void {
    this._pointsMat = mat;
    mat._syncColors();
    mat.pointsCloud = true;
    mat.pointSize = mat.size ?? 1;
    mat.disableLighting = true;
    if (mat.vertexColors) {
      mat.emissive.setHex(0xffffff);
    }
    if (mat._blending === 2) {
      mat.alphaMode = Constants.ALPHA_ADD;
      mat.disableDepthWrite = true;
    }
    this.material = mat;
  }

  get userData(): Record<string, any> {
    return this.metadata;
  }
  set userData(v: Record<string, any>) {
    this.metadata = v;
  }

  get visible(): boolean {
    return this.isEnabled();
  }
  set visible(v: boolean) {
    this.setEnabled(v);
  }

  get scale() {
    return this.scaling;
  }

  get quaternion(): Quaternion {
    if (!this.rotationQuaternion) this.rotationQuaternion = new Quaternion();
    return this.rotationQuaternion as Quaternion;
  }

  add(child: Node): this {
    child.parent = this;
    return this;
  }
  remove(child: Node): this {
    child.parent = null;
    return this;
  }
}
