/**
 * Операции с блоками интерьера: создание состояния, set/remove/has, экспорт в JSON.
 *
 * Переиспользует posKey/parseKey/GRID_SIZE/BLOCK_SIZE из shared/blueprint.
 */
import { BLOCK_SIZE, GRID_SIZE, parseKey, posKey } from '@/shared/blueprint/blueprint-data';

import type {
  InteriorBlock,
  InteriorBlockJSON,
  InteriorBlockType,
  InteriorBuilderState,
  InteriorLevelJSON,
  SpawnPoint,
} from './types';
import { INTERIOR_PALETTE } from './types';

export { BLOCK_SIZE, GRID_SIZE, parseKey, posKey };

// ── Создание состояния ──────────────────────────────────────────────────────

/** Создать пустое состояние редактора интерьеров */
export function createInteriorBuilderState(name?: string): InteriorBuilderState {
  return {
    blocks: new Map(),
    currentBlockType: 'wall',
    currentColor: 0,
    name: name ?? 'Untitled Interior',
  };
}

// ── Проверка границ ─────────────────────────────────────────────────────────

/** Проверить, находится ли позиция в допустимых границах сетки */
export function inBounds(x: number, y: number, z: number): boolean {
  return x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE && z >= 0 && z < GRID_SIZE;
}

// ── Операции с блоками ──────────────────────────────────────────────────────

/** Поставить блок. Возвращает true если блок был добавлен. */
export function setInteriorBlock(
  state: InteriorBuilderState,
  x: number,
  y: number,
  z: number,
  type: InteriorBlockType,
  colorIdx: number,
): boolean {
  if (!inBounds(x, y, z)) return false;
  state.blocks.set(posKey(x, y, z), { type, colorIdx });
  return true;
}

/** Удалить блок. Возвращает удалённый блок или null. */
export function removeInteriorBlock(
  state: InteriorBuilderState,
  x: number,
  y: number,
  z: number,
): InteriorBlock | null {
  const key = posKey(x, y, z);
  const block = state.blocks.get(key);
  if (!block) return null;
  state.blocks.delete(key);
  return block;
}

/** Проверить наличие блока */
export function hasInteriorBlock(
  state: InteriorBuilderState,
  x: number,
  y: number,
  z: number,
): boolean {
  return state.blocks.has(posKey(x, y, z));
}

/** Получить блок по координатам */
export function getInteriorBlock(
  state: InteriorBuilderState,
  x: number,
  y: number,
  z: number,
): InteriorBlock | null {
  return state.blocks.get(posKey(x, y, z)) ?? null;
}

// ── Конвертация hex ─────────────────────────────────────────────────────────

function colorIdxToHex(colorIdx: number): string {
  const hex = INTERIOR_PALETTE[colorIdx] ?? 0xcccccc;
  return `#${hex.toString(16).padStart(6, '0')}`;
}

function hexToColorIdx(hex: string): number {
  const num = parseInt(hex.replace('#', ''), 16);
  const idx = INTERIOR_PALETTE.indexOf(num);
  return idx >= 0 ? idx : 0;
}

// ── Экспорт в JSON ──────────────────────────────────────────────────────────

/** Конвертировать состояние редактора в JSON для экспорта */
export function stateToJSON(state: InteriorBuilderState): InteriorLevelJSON {
  const blocks: InteriorBlockJSON[] = [];
  const spawns: SpawnPoint[] = [];
  let maxX = 0;
  let maxY = 0;
  let maxZ = 0;

  for (const [key, block] of state.blocks) {
    const [x, y, z] = parseKey(key);

    if (block.type === 'enemy_spawn') {
      spawns.push({ type: 'enemy', x, y, z, rotation: 0 });
    } else if (block.type === 'player_spawn') {
      spawns.push({ type: 'player', x, y, z, rotation: 0 });
    }

    blocks.push({
      type: block.type,
      x,
      y,
      z,
      color: colorIdxToHex(block.colorIdx),
    });

    maxX = Math.max(maxX, x + 1);
    maxY = Math.max(maxY, y + 1);
    maxZ = Math.max(maxZ, z + 1);
  }

  return {
    name: state.name,
    version: 1,
    blocks,
    spawns,
    meta: {
      size: { x: maxX, y: maxY, z: maxZ },
      created: new Date().toISOString().split('T')[0],
    },
  };
}

/** Конвертировать JSON в состояние редактора */
export function jsonToState(json: InteriorLevelJSON): InteriorBuilderState {
  const blocks = new Map<string, InteriorBlock>();
  for (const b of json.blocks) {
    blocks.set(posKey(b.x, b.y, b.z), {
      type: b.type,
      colorIdx: hexToColorIdx(b.color),
    });
  }
  return {
    blocks,
    currentBlockType: 'wall',
    currentColor: 0,
    name: json.name,
  };
}
