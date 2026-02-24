//todo
import { Mesh as BMesh } from '@babylonjs/core/Meshes/mesh';
import { VertexData } from '@babylonjs/core/Meshes/mesh.vertexData';
import type { Node } from '@babylonjs/core/node';
import type { Scene } from '@babylonjs/core/scene';

import { Quaternion } from './quaternion';
import { Vector3 } from './vector3';

/**
 * EngineSprite — billboard mesh that always faces the camera.
 * Creates a 1x1 plane with BILLBOARDMODE_ALL.
 */
export class EngineSprite extends BMesh {
  constructor(name = '', scene?: Scene | null) {
    super(name || 'sprite', scene ?? undefined);

    // Replace BJS Vector3 with our extended Vector3
    this.position = new Vector3();
    this.scaling = new Vector3(1, 1, 1);

    // Create a 1x1 unit plane
    const vd = new VertexData();
    vd.positions = [-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0];
    vd.indices = [0, 1, 2, 0, 2, 3];
    vd.normals = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
    vd.uvs = [0, 0, 1, 0, 1, 1, 0, 1];
    vd.applyToMesh(this);

    this.billboardMode = BMesh.BILLBOARDMODE_ALL;
    this.metadata = {};
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
  set scale(v) {
    this.scaling.copyFrom(v);
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
