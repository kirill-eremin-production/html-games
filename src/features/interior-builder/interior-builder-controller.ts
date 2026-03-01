/**
 * Контроллер редактора интерьеров: DDA raycast, размещение / удаление блоков, cycling типов.
 *
 * Адаптация builder-controller для InteriorBuilderState.
 * DDA (Amanatides & Woo) для прохода луча по воксельной сетке.
 */
import { Vector3 } from '@/shared/core/vector3';
import {
  BLOCK_SIZE,
  GRID_SIZE,
  hasInteriorBlock,
  inBounds,
  removeInteriorBlock,
  setInteriorBlock,
} from '@/shared/interior';
import type { InteriorBlockType, InteriorBuilderState } from '@/shared/interior';
import { INTERIOR_BLOCK_TYPES } from '@/shared/interior';

import { PILOT_EYE_HEIGHT } from '@/entities/objects/hangar';

import { getViewDirection } from '@/features/fps';
import type { FPSState } from '@/features/fps';

// ── Константы ───────────────────────────────────────────────────────────────

const MAX_REACH = 20;
const ACTION_COOLDOWN = 0.15;
const _dir = new Vector3();

// ── Результат raycast ───────────────────────────────────────────────────────

interface RaycastHit {
  blockX: number;
  blockY: number;
  blockZ: number;
  normalX: number;
  normalY: number;
  normalZ: number;
}

// ── DDA Voxel Traversal ─────────────────────────────────────────────────────

function voxelRaycast(
  state: InteriorBuilderState,
  eyeX: number,
  eyeY: number,
  eyeZ: number,
  dirX: number,
  dirY: number,
  dirZ: number,
): RaycastHit | null {
  let x = Math.floor(eyeX / BLOCK_SIZE);
  let y = Math.floor(eyeY / BLOCK_SIZE);
  let z = Math.floor(eyeZ / BLOCK_SIZE);

  const stepX = dirX >= 0 ? 1 : -1;
  const stepY = dirY >= 0 ? 1 : -1;
  const stepZ = dirZ >= 0 ? 1 : -1;

  const tDeltaX = dirX !== 0 ? Math.abs(BLOCK_SIZE / dirX) : Infinity;
  const tDeltaY = dirY !== 0 ? Math.abs(BLOCK_SIZE / dirY) : Infinity;
  const tDeltaZ = dirZ !== 0 ? Math.abs(BLOCK_SIZE / dirZ) : Infinity;

  let tMaxX =
    dirX !== 0 ? ((dirX > 0 ? (x + 1) * BLOCK_SIZE : x * BLOCK_SIZE) - eyeX) / dirX : Infinity;
  let tMaxY =
    dirY !== 0 ? ((dirY > 0 ? (y + 1) * BLOCK_SIZE : y * BLOCK_SIZE) - eyeY) / dirY : Infinity;
  let tMaxZ =
    dirZ !== 0 ? ((dirZ > 0 ? (z + 1) * BLOCK_SIZE : z * BLOCK_SIZE) - eyeZ) / dirZ : Infinity;

  let nx = 0;
  let ny = 0;
  let nz = 0;

  for (let i = 0; i < MAX_REACH * 3; i++) {
    if (i > 0 && hasInteriorBlock(state, x, y, z)) {
      return { blockX: x, blockY: y, blockZ: z, normalX: nx, normalY: ny, normalZ: nz };
    }

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

    if (x < -1 || x > GRID_SIZE || y < -1 || y > GRID_SIZE || z < -1 || z > GRID_SIZE) {
      break;
    }
  }

  return null;
}

function floorRaycast(
  eyeX: number,
  eyeY: number,
  eyeZ: number,
  dirX: number,
  dirY: number,
  dirZ: number,
): { x: number; y: number; z: number } | null {
  if (dirY >= 0) return null;
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

export interface InteriorBuilderControllerState {
  cooldown: number;
  prevPlace: boolean;
  prevRemove: boolean;
  prevNextColor: boolean;
  prevPrevColor: boolean;
  prevNextType: boolean;
  prevPrevType: boolean;
}

export function createInteriorControllerState(): InteriorBuilderControllerState {
  return {
    cooldown: 0,
    prevPlace: false,
    prevRemove: false,
    prevNextColor: false,
    prevPrevColor: false,
    prevNextType: false,
    prevPrevType: false,
  };
}

export interface InteriorControllerResult {
  ghostX: number | null;
  ghostY: number | null;
  ghostZ: number | null;
  colorChanged: boolean;
  typeChanged: boolean;
  /** Ключ типа+цвета, который нужно пересобрать (или null) */
  rebuildKey: string | null;
  showExportPanel: boolean;
}

/** Получить индекс текущего типа блока */
function getTypeIndex(type: InteriorBlockType): number {
  return INTERIOR_BLOCK_TYPES.findIndex((t) => t.type === type);
}

export function updateInteriorBuilderController(
  dt: number,
  fps: FPSState,
  builderState: InteriorBuilderState,
  ctrl: InteriorBuilderControllerState,
  placeAction: boolean,
  removeAction: boolean,
  nextColorAction: boolean,
  prevColorAction: boolean,
  nextTypeAction: boolean,
  prevTypeAction: boolean,
  exportAction: boolean,
): InteriorControllerResult {
  const result: InteriorControllerResult = {
    ghostX: null,
    ghostY: null,
    ghostZ: null,
    colorChanged: false,
    typeChanged: false,
    rebuildKey: null,
    showExportPanel: false,
  };

  if (ctrl.cooldown > 0) ctrl.cooldown -= dt;

  getViewDirection(fps, _dir);
  const dirX = _dir.x;
  const dirY = _dir.y;
  const dirZ = _dir.z;

  const eyeX = fps.position.x;
  const eyeY = fps.position.y + PILOT_EYE_HEIGHT;
  const eyeZ = fps.position.z;

  // Raycast
  const hit = voxelRaycast(builderState, eyeX, eyeY, eyeZ, dirX, dirY, dirZ);

  if (hit) {
    const gx = hit.blockX + hit.normalX;
    const gy = hit.blockY + hit.normalY;
    const gz = hit.blockZ + hit.normalZ;

    if (inBounds(gx, gy, gz)) {
      result.ghostX = gx;
      result.ghostY = gy;
      result.ghostZ = gz;
    }

    // Place
    if (placeAction && !ctrl.prevPlace && ctrl.cooldown <= 0) {
      if (result.ghostX !== null && result.ghostY !== null && result.ghostZ !== null) {
        if (
          setInteriorBlock(
            builderState,
            result.ghostX,
            result.ghostY,
            result.ghostZ,
            builderState.currentBlockType,
            builderState.currentColor,
          )
        ) {
          result.rebuildKey = `${builderState.currentBlockType}_${builderState.currentColor}`;
          ctrl.cooldown = ACTION_COOLDOWN;
        }
      }
    }

    // Remove
    if (removeAction && !ctrl.prevRemove && ctrl.cooldown <= 0) {
      const removed = removeInteriorBlock(builderState, hit.blockX, hit.blockY, hit.blockZ);
      if (removed) {
        result.rebuildKey = `${removed.type}_${removed.colorIdx}`;
        ctrl.cooldown = ACTION_COOLDOWN;
      }
    }
  } else {
    // Пол
    const floor = floorRaycast(eyeX, eyeY, eyeZ, dirX, dirY, dirZ);
    if (floor) {
      result.ghostX = floor.x;
      result.ghostY = floor.y;
      result.ghostZ = floor.z;

      if (placeAction && !ctrl.prevPlace && ctrl.cooldown <= 0) {
        if (
          setInteriorBlock(
            builderState,
            floor.x,
            floor.y,
            floor.z,
            builderState.currentBlockType,
            builderState.currentColor,
          )
        ) {
          result.rebuildKey = `${builderState.currentBlockType}_${builderState.currentColor}`;
          ctrl.cooldown = ACTION_COOLDOWN;
        }
      }
    }
  }

  // Color switch
  if (nextColorAction && !ctrl.prevNextColor) {
    builderState.currentColor = (builderState.currentColor + 1) % 12;
    result.colorChanged = true;
  }
  if (prevColorAction && !ctrl.prevPrevColor) {
    builderState.currentColor = (builderState.currentColor + 11) % 12;
    result.colorChanged = true;
  }

  // Block type switch
  if (nextTypeAction && !ctrl.prevNextType) {
    const idx = getTypeIndex(builderState.currentBlockType);
    const nextIdx = (idx + 1) % INTERIOR_BLOCK_TYPES.length;
    builderState.currentBlockType = INTERIOR_BLOCK_TYPES[nextIdx].type;
    result.typeChanged = true;
  }
  if (prevTypeAction && !ctrl.prevPrevType) {
    const idx = getTypeIndex(builderState.currentBlockType);
    const prevIdx = (idx + INTERIOR_BLOCK_TYPES.length - 1) % INTERIOR_BLOCK_TYPES.length;
    builderState.currentBlockType = INTERIOR_BLOCK_TYPES[prevIdx].type;
    result.typeChanged = true;
  }

  // Export panel
  if (exportAction) {
    result.showExportPanel = true;
  }

  // Save prev state
  ctrl.prevPlace = placeAction;
  ctrl.prevRemove = removeAction;
  ctrl.prevNextColor = nextColorAction;
  ctrl.prevPrevColor = prevColorAction;
  ctrl.prevNextType = nextTypeAction;
  ctrl.prevPrevType = prevTypeAction;

  return result;
}
