export interface GameSettings {
  colors: {
    playerBody: string;
    playerExhaust: string;
    allyBody: string;
    allyExhaust: string;
    enemyBody: string;
    enemyExhaust: string;
    capitalHull: string;
  };
  counts: {
    capitalShips: number;
    allies: number;
    enemies: number;
  };
}

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
};

const STORAGE_KEY = 'space-combat-settings';

export const settings: GameSettings = structuredClone(DEFAULT_SETTINGS);

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
    }
  } catch {
    // Corrupted data — use defaults
  }
}

export function saveSettings(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

export function resetSettings(): void {
  Object.assign(settings.colors, DEFAULT_SETTINGS.colors);
  Object.assign(settings.counts, DEFAULT_SETTINGS.counts);
  saveSettings();
}

export function parseHexColor(hex: string): number {
  return parseInt(hex.replace('#', ''), 16);
}

// Load on import
loadSettings();
