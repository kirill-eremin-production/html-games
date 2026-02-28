import { type BuilderState, GRID_SIZE, posKey } from '@/shared/blueprint/blueprint-data';

/**
 * Состояние конструктора: операции с блоками.
 *
 * Данные (палитра, константы, типы) живут в shared/blueprint/blueprint-data,
 * здесь — реэкспорт для обратной совместимости + мутирующие функции.
 */

// Реэкспорт из shared для обратной совместимости внутренних импортов
export {
  BLOCK_PALETTE,
  BLOCK_SIZE,
  type BuilderState,
  GRID_SIZE,
  createBuilderState,
  parseKey,
  posKey,
} from '@/shared/blueprint/blueprint-data';

// ── Операции с блоками ──────────────────────────────────────────────────────

/** Проверить, находится ли позиция в допустимых границах сетки */
export function inBounds(x: number, y: number, z: number): boolean {
  return x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE && z >= 0 && z < GRID_SIZE;
}

/** Поставить блок. Возвращает true если блок был добавлен. */
export function setBlock(
  state: BuilderState,
  x: number,
  y: number,
  z: number,
  colorIdx: number,
): boolean {
  if (!inBounds(x, y, z)) return false;
  state.blocks.set(posKey(x, y, z), colorIdx);
  return true;
}

/** Удалить блок. Возвращает true если блок существовал и был удалён. */
export function removeBlock(state: BuilderState, x: number, y: number, z: number): boolean {
  return state.blocks.delete(posKey(x, y, z));
}

/** Проверить наличие блока в позиции */
export function hasBlock(state: BuilderState, x: number, y: number, z: number): boolean {
  return state.blocks.has(posKey(x, y, z));
}

/** Получить индекс цвета блока (или -1 если блока нет) */
export function getBlock(state: BuilderState, x: number, y: number, z: number): number {
  return state.blocks.get(posKey(x, y, z)) ?? -1;
}
