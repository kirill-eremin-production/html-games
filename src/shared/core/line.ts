import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Vector3 as BVector3 } from '@babylonjs/core/Maths/math.vector';
import type { LinesMesh } from '@babylonjs/core/Meshes/linesMesh';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import type { Node } from '@babylonjs/core/node';
import type { Scene } from '@babylonjs/core/scene';

import type { EngineBufferGeometry } from './geometry';
import type { EngineLineMaterial } from './material';

/**
 * Линия на сцене.
 *
 * Конвертирует {@link EngineBufferGeometry} с атрибутом `position` в BJS `LinesMesh`.
 * Цвет берётся из {@link EngineLineMaterial}.
 *
 * @example
 * ```ts
 * const line = createLineFromPoints(points, 0x00ccff, true, 0.5);
 * line.parent = parentNode;
 * // ...
 * line.dispose();
 * ```
 */
export class EngineLine {
  geometry: EngineBufferGeometry | null = null;
  material: EngineLineMaterial | null = null;
  private _linesMesh: LinesMesh | null = null;

  get parent(): Node | null {
    return this._linesMesh?.parent ?? null;
  }
  set parent(p: Node | null) {
    if (this._linesMesh) this._linesMesh.parent = p;
  }

  /** Создаёт `LinesMesh` из текущей геометрии. Вызывается фабрикой после установки `geometry`. */
  build(scene: Scene): void {
    if (!this.geometry) return;

    const posAttr = this.geometry.attributes['position'];
    if (!posAttr) return;

    const points: BVector3[] = [];
    for (let i = 0; i < posAttr.count; i++) {
      points.push(
        new BVector3(posAttr.array[i * 3], posAttr.array[i * 3 + 1], posAttr.array[i * 3 + 2]),
      );
    }
    if (points.length < 2) return;

    if (this._linesMesh) this._linesMesh.dispose();

    this._linesMesh = MeshBuilder.CreateLines('line', { points }, scene);

    if (this.material) {
      const c = this.material.color;
      this._linesMesh.color = new Color3(c.r, c.g, c.b);
    }
  }

  dispose(): void {
    this._linesMesh?.dispose();
    this._linesMesh = null;
  }
}
