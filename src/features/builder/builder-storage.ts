/**
 * Сохранение и загрузка чертежей (blueprints) в localStorage.
 *
 * Формат: ключ "blueprint:<name>" → JSON { version, name, blocks }.
 * blocks — массив кортежей [x, y, z, colorIndex].
 */
import { type BuilderState, createBuilderState, parseKey, posKey } from './builder-state';

// ── Формат хранения ─────────────────────────────────────────────────────────

const STORAGE_PREFIX = 'blueprint:';
const FORMAT_VERSION = 1;

interface BlueprintData {
  version: number;
  name: string;
  blocks: Array<[number, number, number, number]>; // [x, y, z, colorIndex]
}

// ── Сохранение ──────────────────────────────────────────────────────────────

/** Сохранить текущий чертёж в localStorage */
export function saveBlueprint(state: BuilderState): void {
  const data: BlueprintData = {
    version: FORMAT_VERSION,
    name: state.name,
    blocks: [],
  };

  for (const [key, colorIdx] of state.blocks) {
    const [x, y, z] = parseKey(key);
    data.blocks.push([x, y, z, colorIdx]);
  }

  localStorage.setItem(STORAGE_PREFIX + state.name, JSON.stringify(data));
}

// ── Загрузка ────────────────────────────────────────────────────────────────

/** Загрузить чертёж по имени. Возвращает null если не найден. */
export function loadBlueprint(name: string): BuilderState | null {
  const raw = localStorage.getItem(STORAGE_PREFIX + name);
  if (!raw) return null;

  try {
    const data = JSON.parse(raw) as BlueprintData;
    const state = createBuilderState(data.name);

    for (const [x, y, z, colorIdx] of data.blocks) {
      state.blocks.set(posKey(x, y, z), colorIdx);
    }

    return state;
  } catch {
    return null;
  }
}

// ── Список / удаление ───────────────────────────────────────────────────────

/** Получить список имён всех сохранённых чертежей */
export function listBlueprints(): string[] {
  const names: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(STORAGE_PREFIX)) {
      names.push(key.slice(STORAGE_PREFIX.length));
    }
  }
  return names.sort();
}

/** Удалить чертёж по имени */
export function deleteBlueprint(name: string): void {
  localStorage.removeItem(STORAGE_PREFIX + name);
}
