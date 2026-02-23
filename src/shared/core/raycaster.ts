import '@babylonjs/core/Culling/ray';
import type { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import type { Node } from '@babylonjs/core/node';
import type { Scene } from '@babylonjs/core/scene';

export interface Intersection {
  object: Node;
  distance: number;
}

export class Raycaster {
  _mouseX = 0;
  _mouseY = 0;
  _scene: Scene | null = null;

  setFromCamera(mouse: { x: number; y: number }, camera: { getScene(): Scene }): void {
    this._scene = camera.getScene();
    // scene.pick() expects CSS pixel coordinates, not render-buffer pixels.
    const canvas = this._scene.getEngine().getRenderingCanvas()!;
    this._mouseX = ((mouse.x + 1) / 2) * canvas.clientWidth;
    this._mouseY = ((-mouse.y + 1) / 2) * canvas.clientHeight;
  }

  intersectObjects(objects: Node[]): Intersection[] {
    if (!this._scene) return [];

    const results: Intersection[] = [];
    const pickResult = this._scene.pick(this._mouseX, this._mouseY, (mesh: AbstractMesh) => {
      return objects.some((obj) => {
        if (obj === mesh) return true;
        return obj.getDescendants(false).some((d) => d === mesh);
      });
    });

    if (pickResult?.hit && pickResult.pickedMesh) {
      const pickedMesh = pickResult.pickedMesh;
      for (const obj of objects) {
        if (obj === pickedMesh || obj.getDescendants(false).includes(pickedMesh)) {
          results.push({ object: obj, distance: pickResult.distance });
          break;
        }
      }
    }

    return results;
  }
}
