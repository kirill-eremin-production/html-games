import '@babylonjs/core/Culling/ray';
import type { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import type { Node } from '@babylonjs/core/node';
import type { Scene } from '@babylonjs/core/scene';

/** Результат клика по объекту. */
export interface Intersection {
  /** Объект, по которому кликнули. */
  object: Node;
  /** Расстояние от камеры до точки клика. */
  distance: number;
}

/**
 * Определяет, на какой игровой объект кликнул игрок.
 *
 * Упрощает `scene.pick()`: конвертирует NDC → пиксели, фильтрует по кандидатам,
 * маппит дочерние меши к родителю (клик по крылу → выбор корабля).
 *
 * @example
 * raycaster.setFromCamera(mouse, camera);
 * const hit = raycaster.intersectObjects(ships, true);
 * if (hit) selectShip(hit.object); // hit.object — корабль, не крыло
 */
export class Raycaster {
  private _scene: Scene | null = null;
  private _x = 0;
  private _y = 0;

  /** Запоминает сцену и пересчитывает NDC-координаты мыши в пиксели canvas. */
  setFromCamera(mouse: { x: number; y: number }, camera: { getScene(): Scene }): void {
    this._scene = camera.getScene();
    const canvas = this._scene.getEngine().getRenderingCanvas()!;
    this._x = ((mouse.x + 1) / 2) * canvas.clientWidth;
    this._y = ((-mouse.y + 1) / 2) * canvas.clientHeight;
  }

  /**
   * Ищет объект под курсором среди переданных кандидатов.
   * @param objects — список объектов, по которым можно кликнуть
   * @param recursive — если `true`, клик по дочернему мешу засчитывается родителю
   */
  intersectObjects(objects: Node[], recursive = false): Intersection | null {
    if (!this._scene) return null;

    // Строим маппинг mesh → owner один раз
    const ownerOf = new Map<Node, Node>();
    for (const obj of objects) {
      ownerOf.set(obj, obj);
      if (recursive) {
        for (const d of obj.getDescendants(false)) {
          ownerOf.set(d, obj);
        }
      }
    }

    const result = this._scene.pick(this._x, this._y, (mesh: AbstractMesh) => ownerOf.has(mesh));

    if (result?.hit && result.pickedMesh) {
      const owner = ownerOf.get(result.pickedMesh);
      if (owner) return { object: owner, distance: result.distance };
    }

    return null;
  }
}
