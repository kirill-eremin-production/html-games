import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { Vector3 as BVector3 } from '@babylonjs/core/Maths/math.vector';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import type { LinesMesh } from '@babylonjs/core/Meshes/linesMesh';
import type { Node } from '@babylonjs/core/node';
import type { Scene } from '@babylonjs/core/scene';
import type { EngineBufferGeometry } from './geometry';
import type { EngineLineMaterial } from './material';

/**
 * EngineLine — line rendering.
 * Wraps Babylon.js CreateLines.
 */
export class EngineLine {
  geometry: EngineBufferGeometry | null = null;
  material: EngineLineMaterial | null = null;
  _linesMesh: LinesMesh | null = null;
  _scene: Scene | null = null;

  position = new BVector3();
  name = '';
  visible = true;
  metadata: Record<string, any> = {};

  get userData(): Record<string, any> {
    return this.metadata;
  }
  set userData(v: Record<string, any>) {
    this.metadata = v;
  }

  get parent(): Node | null {
    return this._linesMesh?.parent ?? null;
  }
  set parent(p: Node | null) {
    if (this._linesMesh) this._linesMesh.parent = p;
  }

  /** Create the line mesh from geometry. Must be called after setting geometry. */
  build(scene: Scene): void {
    this._scene = scene;
    if (!this.geometry) return;

    const posAttr = this.geometry.attributes['position'];
    if (!posAttr) return;

    const points: BVector3[] = [];
    for (let i = 0; i < posAttr.count; i++) {
      points.push(
        new BVector3(
          posAttr.array[i * 3],
          posAttr.array[i * 3 + 1],
          posAttr.array[i * 3 + 2],
        ),
      );
    }
    if (points.length < 2) return;

    if (this._linesMesh) this._linesMesh.dispose();

    this._linesMesh = MeshBuilder.CreateLines(
      this.name || 'line',
      { points },
      scene,
    );

    if (this.material) {
      const c = this.material.color;
      this._linesMesh.color = new Color3(c.r, c.g, c.b);
    }
  }

  setEnabled(v: boolean): void {
    this.visible = v;
    this._linesMesh?.setEnabled(v);
  }

  dispose(): void {
    this._linesMesh?.dispose();
    this._linesMesh = null;
  }
}
