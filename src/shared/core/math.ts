import { Vector3 as BVector3, Matrix } from '@babylonjs/core/Maths/math.vector';

import type { Vector3 } from './vector3';

/** Камера, способная предоставить матрицы вида и проекции. */
export interface ProjectionCamera {
  getViewMatrix(force?: boolean): Matrix;
  getProjectionMatrix(force?: boolean): Matrix;
}

/** Переиспользуемая матрица VP для проекции/обратной проекции. */
const _vpMatrix = new Matrix();

/**
 * Проецирует мировую позицию в экранные пиксельные координаты.
 *
 * Умножает view × projection камеры и трансформирует точку из мирового
 * пространства в NDC, затем масштабирует в пиксели экрана.
 * `z < 1` означает, что точка находится перед камерой.
 *
 * Использует переиспользуемый `_vpMatrix` — без аллокаций в горячем цикле.
 */
export function vec3Project(
  worldPos: Vector3,
  cam: ProjectionCamera,
  screenW: number,
  screenH: number,
  tmp: Vector3,
): { x: number; y: number; z: number } {
  const vm = cam.getViewMatrix(true);
  const pm = cam.getProjectionMatrix(true);
  vm.multiplyToRef(pm, _vpMatrix);
  BVector3.TransformCoordinatesToRef(worldPos, _vpMatrix, tmp);
  return {
    x: (tmp.x * 0.5 + 0.5) * screenW,
    y: (-tmp.y * 0.5 + 0.5) * screenH,
    z: tmp.z,
  };
}

/** Переиспользуемая инвертированная VP-матрица для обратной проекции. */
const _invVP = new Matrix();

/**
 * Обратная проекция экранных координат в мировое пространство.
 *
 * Инвертирует VP-матрицу камеры и трансформирует вектор из NDC
 * обратно в мировые координаты. Мутирует `vec` на месте.
 *
 * Используется для определения направления стрельбы по позиции прицела.
 */
export function vec3Unproject(vec: Vector3, cam: ProjectionCamera): Vector3 {
  const vm = cam.getViewMatrix(true);
  const pm = cam.getProjectionMatrix(true);
  vm.multiplyToRef(pm, _vpMatrix);
  _vpMatrix.invertToRef(_invVP);
  BVector3.TransformCoordinatesToRef(vec, _invVP, vec);
  return vec;
}
