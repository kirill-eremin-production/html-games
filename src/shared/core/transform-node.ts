import { Quaternion as BQuaternion, Matrix } from '@babylonjs/core/Maths/math.vector';
import { TransformNode as BTransformNode } from '@babylonjs/core/Meshes/transformNode';
import type { Node } from '@babylonjs/core/node';
import type { Scene } from '@babylonjs/core/scene';

import { Quaternion } from './quaternion';
import { Vector3 } from './vector3';

/**
 * Extended TransformNode that inherits from Babylon.js TransformNode
 * and adds Three.js-compatible convenience properties/methods.
 *
 * Instances ARE real BJS TransformNodes — no wrapping, no sync layer.
 * position/rotation/scaling hold our extended Vector3 instances at runtime
 * (assigned through BJS's setter, stored in BJS's internal field).
 */
export class TransformNode extends BTransformNode {
  constructor(name = '', scene?: Scene | null) {
    super(name, scene ?? undefined);
    this.metadata = {};
    // Replace BJS Vector3 instances with our extended Vector3
    // (goes through BJS setter → stored in BJS's _position/_rotation/_scaling)
    this.position = new Vector3();
    this.rotation = new Vector3();
    this.scaling = new Vector3(1, 1, 1);
  }

  // ── Three.js-compatible: userData backed by BJS metadata ──

  get userData(): Record<string, any> {
    return this.metadata;
  }

  set userData(v: Record<string, any>) {
    this.metadata = v;
  }

  // ── Three.js-compatible: visible backed by BJS setEnabled/isEnabled ──

  get visible(): boolean {
    return this.isEnabled();
  }

  set visible(v: boolean) {
    this.setEnabled(v);
  }

  // ── Three.js-compatible: .scale aliases .scaling ──

  get scale() {
    return this.scaling;
  }

  set scale(v) {
    this.scaling.copyFrom(v);
  }

  // ── Three.js-compatible: .children returns direct child TransformNodes ──

  get children(): TransformNode[] {
    return this.getChildTransformNodes(true) as TransformNode[];
  }

  // ── Three.js-compatible: .quaternion with lazy rotationQuaternion init ──

  get quaternion(): Quaternion {
    if (!this.rotationQuaternion) this.rotationQuaternion = new Quaternion();
    return this.rotationQuaternion as Quaternion;
  }

  set quaternion(q: BQuaternion) {
    this.rotationQuaternion = q;
  }

  // ── Three.js-compatible: matrixWorld = BJS world matrix ──

  get matrixWorld(): Matrix {
    return this.getWorldMatrix();
  }

  // ── Three.js-compatible: add/remove children ──

  add(child: Node): this {
    child.parent = this;
    return this;
  }

  remove(child: Node): this {
    child.parent = null;
    return this;
  }

  // ── Three.js-compatible: traverse all descendants ──

  traverse(fn: (obj: Node) => void): void {
    fn(this);
    for (const desc of this.getDescendants(false)) {
      fn(desc);
    }
  }

  // ── Three.js-compatible: find descendant by name ──

  getObjectByName(name: string): Node | undefined {
    return this.getDescendants(false).find((d) => d.name === name);
  }
}
