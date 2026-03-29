/**
 * Контроллер конструктора: DDA raycast, размещение / удаление блоков.
 *
 * DDA (Digital Differential Analyzer) — алгоритм Amanatides & Woo
 * для быстрого прохода луча по воксельной сетке.
 * Определяет позицию блока и грань входа (нормаль) за O(дальность).
 */
import { Vector3 } from '@/shared/core/vector3';

import { PILOT_EYE_HEIGHT } from '@/entities/objects/hangar';

import { getViewDirection } from '@/features/fps';
import type { FPSState } from '@/features/fps';

import {
  BLOCK_SIZE,
  type BuilderState,
  GRID_SIZE,
  hasBlock,
  inBounds,
  removeBlock,
  setBlock,
} from './builder-state';

// ── Константы ───────────────────────────────────────────────────────────────

/** Максимальная дальность raycast в блоках */
const MAX_REACH = 20;
/** Минимальный интервал между действиями place/remove (сек) */
const ACTION_COOLDOWN = 0.15;
const _dir = new Vector3();

// ── Результат raycast ───────────────────────────────────────────────────────

export interface RaycastHit {
  /** Координаты блока, в который попал луч */
  blockX: number;
  blockY: number;
  blockZ: number;
  /** Нормаль грани входа (для размещения: newPos = block + normal) */
  normalX: number;
  normalY: number;
  normalZ: number;
}

// ── DDA Voxel Traversal ─────────────────────────────────────────────────────

/**
 * Пустить луч из позиции камеры в направлении взгляда.
 * Возвращает первый занятый блок и нормаль грани входа, или null.
 */
export function voxelRaycast(
  state: BuilderState,
  eyeX: number,
  eyeY: number,
  eyeZ: number,
  dirX: number,
  dirY: number,
  dirZ: number,
): RaycastHit | null {
  // Текущая позиция в блочных координатах
  let x = Math.floor(eyeX / BLOCK_SIZE);
  let y = Math.floor(eyeY / BLOCK_SIZE);
  let z = Math.floor(eyeZ / BLOCK_SIZE);

  // Направление шага (+1 или -1)
  const stepX = dirX >= 0 ? 1 : -1;
  const stepY = dirY >= 0 ? 1 : -1;
  const stepZ = dirZ >= 0 ? 1 : -1;

  // Расстояние вдоль луча до следующей границы вокселя по каждой оси
  const tDeltaX = dirX !== 0 ? Math.abs(BLOCK_SIZE / dirX) : Infinity;
  const tDeltaY = dirY !== 0 ? Math.abs(BLOCK_SIZE / dirY) : Infinity;
  const tDeltaZ = dirZ !== 0 ? Math.abs(BLOCK_SIZE / dirZ) : Infinity;

  // Начальные расстояния до первой границы
  let tMaxX: number;
  let tMaxY: number;
  let tMaxZ: number;

  if (dirX !== 0) {
    const boundary = dirX > 0 ? (x + 1) * BLOCK_SIZE : x * BLOCK_SIZE;
    tMaxX = (boundary - eyeX) / dirX;
  } else {
    tMaxX = Infinity;
  }

  if (dirY !== 0) {
    const boundary = dirY > 0 ? (y + 1) * BLOCK_SIZE : y * BLOCK_SIZE;
    tMaxY = (boundary - eyeY) / dirY;
  } else {
    tMaxY = Infinity;
  }

  if (dirZ !== 0) {
    const boundary = dirZ > 0 ? (z + 1) * BLOCK_SIZE : z * BLOCK_SIZE;
    tMaxZ = (boundary - eyeZ) / dirZ;
  } else {
    tMaxZ = Infinity;
  }

  // Последняя пересечённая нормаль
  let nx = 0;
  let ny = 0;
  let nz = 0;

  for (let i = 0; i < MAX_REACH * 3; i++) {
    // Проверяем текущий воксель (пропускаем начальный, если в нём стоим)
    if (i > 0 && hasBlock(state, x, y, z)) {
      return {
        blockX: x,
        blockY: y,
        blockZ: z,
        normalX: nx,
        normalY: ny,
        normalZ: nz,
      };
    }

    // Шагаем по оси с наименьшим tMax
    if (tMaxX < tMaxY) {
      if (tMaxX < tMaxZ) {
        x += stepX;
        tMaxX += tDeltaX;
        nx = -stepX;
        ny = 0;
        nz = 0;
      } else {
        z += stepZ;
        tMaxZ += tDeltaZ;
        nx = 0;
        ny = 0;
        nz = -stepZ;
      }
    } else {
      if (tMaxY < tMaxZ) {
        y += stepY;
        tMaxY += tDeltaY;
        nx = 0;
        ny = -stepY;
        nz = 0;
      } else {
        z += stepZ;
        tMaxZ += tDeltaZ;
        nx = 0;
        ny = 0;
        nz = -stepZ;
      }
    }

    // Прерываем если вышли слишком далеко от сетки
    if (x < -1 || x > GRID_SIZE || y < -1 || y > GRID_SIZE || z < -1 || z > GRID_SIZE) {
      break;
    }
  }

  return null;
}

/**
 * Raycast на пол (y=0) для размещения первого блока.
 * Возвращает координаты блока на полу, или null если луч не попадает.
 */
export function floorRaycast(
  eyeX: number,
  eyeY: number,
  eyeZ: number,
  dirX: number,
  dirY: number,
  dirZ: number,
): { x: number; y: number; z: number } | null {
  // Луч должен смотреть вниз
  if (dirY >= 0) return null;

  // Пересечение с плоскостью y = 0
  const t = -eyeY / dirY;
  if (t < 0 || t > MAX_REACH * BLOCK_SIZE) return null;

  const hitX = eyeX + dirX * t;
  const hitZ = eyeZ + dirZ * t;

  const bx = Math.floor(hitX / BLOCK_SIZE);
  const bz = Math.floor(hitZ / BLOCK_SIZE);

  if (!inBounds(bx, 0, bz)) return null;
  return { x: bx, y: 0, z: bz };
}

// ── Контроллер ──────────────────────────────────────────────────────────────

export interface BuilderControllerState {
  /** Таймер кулдауна между действиями */
  cooldown: number;
  /** Предыдущее состояние кнопок (для edge detection) */
  prevPlace: boolean;
  prevRemove: boolean;
  prevNextColor: boolean;
  prevPrevColor: boolean;
}

export function createControllerState(): BuilderControllerState {
  return {
    cooldown: 0,
    prevPlace: false,
    prevRemove: false,
    prevNextColor: false,
    prevPrevColor: false,
  };
}

/** Результат обновления контроллера за кадр */
export interface ControllerResult {
  /** Координаты ghost preview (null = не показывать) */
  ghostX: number | null;
  ghostY: number | null;
  ghostZ: number | null;
  /** Индекс цвета изменился? */
  colorChanged: boolean;
  /** Был ли размещён или удалён блок? Если да, индекс затронутого цвета. */
  changedColorIdx: number | null;
  /** Нужно показать панель сохранения? */
  showSavePanel: boolean;
}

/**
 * Обновить контроллер конструктора за один кадр.
 *
 * Выполняет raycast, обрабатывает ввод (place/remove/color), возвращает результат.
 */
export function updateBuilderController(
  dt: number,
  fps: FPSState,
  builderState: BuilderState,
  ctrl: BuilderControllerState,
  placeAction: boolean,
  removeAction: boolean,
  nextColorAction: boolean,
  prevColorAction: boolean,
  saveAction: boolean,
): ControllerResult {
  const result: ControllerResult = {
    ghostX: null,
    ghostY: null,
    ghostZ: null,
    colorChanged: false,
    changedColorIdx: null,
    showSavePanel: false,
  };

  // Обновить кулдаун
  if (ctrl.cooldown > 0) ctrl.cooldown -= dt;

  getViewDirection(fps, _dir);
  const dirX = _dir.x;
  const dirY = _dir.y;
  const dirZ = _dir.z;

  // Позиция глаз
  const eyeX = fps.position.x;
  const eyeY = fps.position.y + PILOT_EYE_HEIGHT;
  const eyeZ = fps.position.z;

  // Raycast
  const hit = voxelRaycast(builderState, eyeX, eyeY, eyeZ, dirX, dirY, dirZ);

  if (hit) {
    // Ghost preview — позиция нового блока (block + normal)
    const gx = hit.blockX + hit.normalX;
    const gy = hit.blockY + hit.normalY;
    const gz = hit.blockZ + hit.normalZ;

    if (inBounds(gx, gy, gz)) {
      result.ghostX = gx;
      result.ghostY = gy;
      result.ghostZ = gz;
    }

    // Place (edge trigger + cooldown)
    if (placeAction && !ctrl.prevPlace && ctrl.cooldown <= 0) {
      if (result.ghostX !== null && result.ghostY !== null && result.ghostZ !== null) {
        if (
          setBlock(
            builderState,
            result.ghostX,
            result.ghostY,
            result.ghostZ,
            builderState.currentColor,
          )
        ) {
          result.changedColorIdx = builderState.currentColor;
          ctrl.cooldown = ACTION_COOLDOWN;
        }
      }
    }

    // Remove (edge trigger + cooldown)
    if (removeAction && !ctrl.prevRemove && ctrl.cooldown <= 0) {
      const removedColor = builderState.blocks.get(`${hit.blockX},${hit.blockY},${hit.blockZ}`);
      if (removedColor !== undefined) {
        removeBlock(builderState, hit.blockX, hit.blockY, hit.blockZ);
        result.changedColorIdx = removedColor;
        ctrl.cooldown = ACTION_COOLDOWN;
      }
    }
  } else {
    // Нет блока под прицелом — пробуем пол для первого блока
    const floor = floorRaycast(eyeX, eyeY, eyeZ, dirX, dirY, dirZ);
    if (floor) {
      result.ghostX = floor.x;
      result.ghostY = floor.y;
      result.ghostZ = floor.z;

      // Place на пол
      if (placeAction && !ctrl.prevPlace && ctrl.cooldown <= 0) {
        if (setBlock(builderState, floor.x, floor.y, floor.z, builderState.currentColor)) {
          result.changedColorIdx = builderState.currentColor;
          ctrl.cooldown = ACTION_COOLDOWN;
        }
      }
    }
  }

  // Color switch (edge trigger)
  if (nextColorAction && !ctrl.prevNextColor) {
    builderState.currentColor = (builderState.currentColor + 1) % 12;
    result.colorChanged = true;
  }
  if (prevColorAction && !ctrl.prevPrevColor) {
    builderState.currentColor = (builderState.currentColor + 11) % 12;
    result.colorChanged = true;
  }

  // Save panel (edge trigger)
  if (saveAction) {
    result.showSavePanel = true;
  }

  // Запоминаем предыдущее состояние кнопок
  ctrl.prevPlace = placeAction;
  ctrl.prevRemove = removeAction;
  ctrl.prevNextColor = nextColorAction;
  ctrl.prevPrevColor = prevColorAction;

  return result;
}
