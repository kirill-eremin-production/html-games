/**
 * Типы для Interior Builder и Interior Scene.
 *
 * InteriorBlockType — типы блоков (стена, пол, потолок, дверь, лестница, маркеры).
 * InteriorLevelJSON — формат экспорта уровня для автономного рендера.
 */

// ── Типы блоков ─────────────────────────────────────────────────────────────

/** Тип блока в интерьере */
export type InteriorBlockType =
  | 'wall'
  | 'floor'
  | 'ceiling'
  | 'door'
  | 'ladder'
  | 'enemy_spawn'
  | 'player_spawn';

/** Метаданные типа блока для UI */
export interface InteriorBlockTypeInfo {
  type: InteriorBlockType;
  label: string;
  defaultColor: number;
  /** Маркеры не рендерятся в runtime-сцене (только в редакторе) */
  isMarker: boolean;
}

/** Описания всех типов блоков */
export const INTERIOR_BLOCK_TYPES: InteriorBlockTypeInfo[] = [
  { type: 'wall', label: 'Стена', defaultColor: 0x888888, isMarker: false },
  { type: 'floor', label: 'Пол', defaultColor: 0x666666, isMarker: false },
  { type: 'ceiling', label: 'Потолок', defaultColor: 0x555555, isMarker: false },
  { type: 'door', label: 'Дверь', defaultColor: 0x8b4513, isMarker: false },
  { type: 'ladder', label: 'Лестница', defaultColor: 0xdaa520, isMarker: false },
  { type: 'enemy_spawn', label: 'Враг', defaultColor: 0xff0000, isMarker: true },
  { type: 'player_spawn', label: 'Игрок', defaultColor: 0x00ff00, isMarker: true },
];

/** Палитра цветов для интерьерных блоков */
export const INTERIOR_PALETTE: number[] = [
  0x888888, 0x666666, 0x555555, 0x4a4a52, 0x555560, 0x3a3a42, 0xcccccc, 0x444444, 0x8b4513,
  0xdaa520, 0xcc3333, 0x3333cc,
];

// ── Данные блока ────────────────────────────────────────────────────────────

/** Один блок в состоянии билдера */
export interface InteriorBlock {
  type: InteriorBlockType;
  colorIdx: number;
}

// ── Состояние билдера ───────────────────────────────────────────────────────

/** Состояние редактора интерьеров */
export interface InteriorBuilderState {
  /** Sparse voxel storage: ключ "x,y,z" → InteriorBlock */
  blocks: Map<string, InteriorBlock>;
  /** Текущий выбранный тип блока */
  currentBlockType: InteriorBlockType;
  /** Текущий выбранный индекс цвета в INTERIOR_PALETTE */
  currentColor: number;
  /** Имя уровня */
  name: string;
}

// ── Спавн-поинты ────────────────────────────────────────────────────────────

/** Точка спавна (игрок или враг) */
export interface SpawnPoint {
  type: 'player' | 'enemy';
  x: number;
  y: number;
  z: number;
  /** Угол поворота (градусы, 0 = +Z) */
  rotation: number;
}

// ── JSON формат уровня ──────────────────────────────────────────────────────

/** Блок в JSON-формате */
export interface InteriorBlockJSON {
  type: InteriorBlockType;
  x: number;
  y: number;
  z: number;
  color: string;
}

/** Самодостаточный JSON-формат уровня для рендера без редактора */
export interface InteriorLevelJSON {
  name: string;
  version: 1;
  blocks: InteriorBlockJSON[];
  spawns: SpawnPoint[];
  meta: {
    size: { x: number; y: number; z: number };
    created: string;
  };
}
