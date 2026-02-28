/**
 * Данные чертежей (blueprints): палитра, константы, формат хранения.
 *
 * Вынесено в shared, чтобы entities и другие слои могли работать с
 * блоками без зависимости от features/builder.
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
