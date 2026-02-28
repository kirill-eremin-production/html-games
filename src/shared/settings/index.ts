import type { GameSettings } from './types';

export type { BlueprintSettings, ColorSettings, CountSettings, GameSettings } from './types';

/** Настройки по умолчанию */
export const DEFAULT_SETTINGS: GameSettings = {
  colors: {
    playerBody: '#2299dd',
    playerExhaust: '#00ddff',
    allyBody: '#33cc77',
    allyExhaust: '#00ffaa',
    enemyBody: '#dd3333',
    enemyExhaust: '#ff3300',
    capitalHull: '#667788',
  },
  counts: {
    capitalShips: 3,
    allies: 32,
    enemies: 32,
  },
  blueprint: {
    selectedId: null,
  },
};

const STORAGE_KEY = 'space-combat-settings';

/** Текущие настройки (мутабельный объект) */
export const settings: GameSettings = structuredClone(DEFAULT_SETTINGS);

/** Загрузить настройки из localStorage */
export function loadSettings(): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<GameSettings>;
      if (parsed.colors) {
        for (const key of Object.keys(
          DEFAULT_SETTINGS.colors,
        ) as (keyof GameSettings['colors'])[]) {
          if (typeof parsed.colors[key] === 'string') {
            settings.colors[key] = parsed.colors[key]!;
          }
        }
      }
      if (parsed.counts) {
        for (const key of Object.keys(
          DEFAULT_SETTINGS.counts,
        ) as (keyof GameSettings['counts'])[]) {
          if (typeof parsed.counts[key] === 'number') {
            settings.counts[key] = parsed.counts[key]!;
          }
        }
      }
      if (parsed.blueprint) {
        if (
          typeof parsed.blueprint.selectedId === 'string' ||
          parsed.blueprint.selectedId === null
        ) {
          settings.blueprint.selectedId = parsed.blueprint.selectedId;
        }
      }
    }
  } catch {
    // Повреждённые данные — используем значения по умолчанию
  }
}

/** Сохранить настройки в localStorage */
export function saveSettings(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

/** Сбросить настройки к значениям по умолчанию */
export function resetSettings(): void {
  Object.assign(settings.colors, DEFAULT_SETTINGS.colors);
  Object.assign(settings.counts, DEFAULT_SETTINGS.counts);
  saveSettings();
}

/** Преобразовать hex-цвет (#rrggbb) в число */
export function parseHexColor(hex: string): number {
  return parseInt(hex.replace('#', ''), 16);
}

// Загрузка при импорте
loadSettings();
