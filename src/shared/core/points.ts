import { Constants } from '@babylonjs/core/Engines/constants';
import { Mesh as BMesh } from '@babylonjs/core/Meshes/mesh';
import type { Scene } from '@babylonjs/core/scene';

import type { EngineBufferGeometry } from './geometry';
import type { EnginePointsMaterial } from './material';
import { Vector3 } from './vector3';

/**
 * Облако точек (point cloud) для рендеринга частиц без полигональной геометрии.
 *
 * Используется для отображения звёздного поля, пылевых эффектов и других
 * визуализаций на основе вершинных данных.
 *
 * Создание — через фабрику {@link createPoints}:
 * ```ts
 * const geo = createBufferGeometry();
 * geo.setAttribute('position', createBufferAttribute(positions, 3));
 * const mat = createPointsMaterial({ size: 2, vertexColors: true });
 * const points = createPoints(geo, mat);
 * addToScene(points);
 * ```
 */
export class EnginePoints extends BMesh {
  constructor(name = '', scene?: Scene | null) {
    super(name || 'points', scene ?? undefined);
    this.metadata = {};
    this.position = new Vector3();
    this.scaling = new Vector3(1, 1, 1);
  }

  /** Привязывает вершинную геометрию (позиции, цвета) к мешу. */
  set pointsGeometry(g: EngineBufferGeometry | null) {
    if (g) g._applyToMesh(this);
  }

  /** Применяет материал точечного облака: включает pointsCloud-режим, настраивает размер и blending. */
  applyPointsMaterial(mat: EnginePointsMaterial): void {
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
}
