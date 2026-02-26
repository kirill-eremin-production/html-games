/**
 * Состояние конструктора: воксельная сетка, палитра, текущий цвет.
 *
 * Блоки хранятся в sparse Map<string, number> (ключ "x,y,z" → индекс цвета).
 * Это эффективно при разреженном заполнении (типичный случай).
 */

// ── Палитра цветов ──────────────────────────────────────────────────────────

/** Палитра цветов блоков (hex). Индекс в массиве = colorIndex. */
export const BLOCK_PALETTE: number[] = [
  0xcccccc, // светло-серый
  0x444444, // тёмно-серый
  0xcc3333, // красный
  0x33cc33, // зелёный
  0x3333cc, // синий
  0xcccc33, // жёлтый
  0xcc6600, // оранжевый
  0x6633cc, // фиолетовый
  0x33cccc, // голубой
  0xff66aa, // розовый
  0x886633, // коричневый
  0x222222, // чёрный
];

// ── Константы сетки ─────────────────────────────────────────────────────────

/** Максимальный размер сетки по каждой оси (блоков) */
export const GRID_SIZE = 50;

/** Размер одного блока в единицах мира */
export const BLOCK_SIZE = 1;

// ── Ключ позиции ────────────────────────────────────────────────────────────

/** Создать строковый ключ из координат блока */
export function posKey(x: number, y: number, z: number): string {
  return `${x},${y},${z}`;
}

/** Разобрать строковый ключ обратно в координаты */
export function parseKey(key: string): [number, number, number] {
  const parts = key.split(',');
  return [Number(parts[0]), Number(parts[1]), Number(parts[2])];
}

// ── Состояние ───────────────────────────────────────────────────────────────

export interface BuilderState {
  /** Sparse voxel storage: ключ "x,y,z" → индекс цвета в BLOCK_PALETTE */
  blocks: Map<string, number>;
  /** Индекс текущего выбранного цвета в палитре */
  currentColor: number;
  /** Имя чертежа */
  name: string;
}

/** Создать пустое состояние конструктора */
export function createBuilderState(name?: string): BuilderState {
  return {
    blocks: new Map(),
    currentColor: 0,
    name: name ?? 'Untitled',
  };
}

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
