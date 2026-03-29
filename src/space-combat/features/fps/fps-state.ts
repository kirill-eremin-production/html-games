import { Vector3 } from '@/shared/core/vector3';

/** Состояние FPS-персонажа (позиция, углы обзора, физика) */
export interface FPSState {
  /** Позиция ног персонажа (не глаз!) */
  position: Vector3;
  /** Горизонтальный угол обзора (рад), 0 = вдоль +Z */
  yaw: number;
  /** Вертикальный угол обзора (рад), 0 = горизонт */
  pitch: number;
  /** Скорость персонажа (м/с). X/Z — горизонтальная инерция, Y — гравитация/прыжок */
  velocity: Vector3;
  /** Стоит ли персонаж на полу */
  grounded: boolean;
}

/** Создать начальное FPS-состояние в заданной точке */
export function createFPSState(spawnPoint: Vector3): FPSState {
  return {
    position: spawnPoint.clone(),
    yaw: 0,
    pitch: 0,
    velocity: new Vector3(0, 0, 0),
    grounded: true,
  };
}

/**
 * Единичный вектор направления взгляда из yaw/pitch.
 *
 * Единственный источник истины — все модули (стрельба, raycast билдеров)
 * должны использовать эту функцию вместо самостоятельного вычисления.
 *
 * Записывает результат в `out` и возвращает его.
 */
export function getViewDirection(fps: FPSState, out: Vector3): Vector3 {
  const cosPitch = Math.cos(fps.pitch);
  return out
    .set(-Math.sin(fps.yaw) * cosPitch, -Math.sin(fps.pitch), Math.cos(fps.yaw) * cosPitch)
    .normalize();
}
