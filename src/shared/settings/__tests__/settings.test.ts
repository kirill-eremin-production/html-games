import {
  DEFAULT_SETTINGS,
  loadSettings,
  parseHexColor,
  resetSettings,
  saveSettings,
  settings,
} from '../index';

// Мок localStorage перед импортом модуля (loadSettings вызывается при импорте)
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: jest.fn((key: string) => store[key] ?? null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: jest.fn((key: string) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
    get _store() {
      return store;
    },
  };
})();
Object.defineProperty(globalThis, 'localStorage', { value: localStorageMock });

describe('Settings', () => {
  beforeEach(() => {
    localStorageMock.clear();
    jest.clearAllMocks();
    // Сброс настроек к дефолтным
    Object.assign(settings.colors, DEFAULT_SETTINGS.colors);
    Object.assign(settings.counts, DEFAULT_SETTINGS.counts);
  });

  describe('loadSettings', () => {
    it('загружает настройки из localStorage', () => {
      localStorageMock._store['space-combat-settings'] = JSON.stringify({
        colors: { playerBody: '#ff0000' },
        counts: { allies: 10 },
      });

      loadSettings();

      expect(settings.colors.playerBody).toBe('#ff0000');
      expect(settings.counts.allies).toBe(10);
    });

    it('при пустом localStorage оставляет дефолтные', () => {
      loadSettings();
      expect(settings.colors.playerBody).toBe(DEFAULT_SETTINGS.colors.playerBody);
      expect(settings.counts.allies).toBe(DEFAULT_SETTINGS.counts.allies);
    });

    it('при повреждённых данных оставляет дефолтные', () => {
      localStorageMock._store['space-combat-settings'] = '{broken json';
      loadSettings();
      expect(settings.colors.playerBody).toBe(DEFAULT_SETTINGS.colors.playerBody);
    });

    it('игнорирует невалидные типы полей', () => {
      localStorageMock._store['space-combat-settings'] = JSON.stringify({
        colors: { playerBody: 123 }, // должна быть строка
        counts: { allies: 'ten' }, // должно быть число
      });

      loadSettings();

      expect(settings.colors.playerBody).toBe(DEFAULT_SETTINGS.colors.playerBody);
      expect(settings.counts.allies).toBe(DEFAULT_SETTINGS.counts.allies);
    });
  });

  describe('saveSettings', () => {
    it('сохраняет настройки в localStorage', () => {
      settings.colors.playerBody = '#aabbcc';
      saveSettings();

      const saved = JSON.parse(localStorageMock._store['space-combat-settings']);
      expect(saved.colors.playerBody).toBe('#aabbcc');
    });
  });

  describe('resetSettings', () => {
    it('возвращает настройки к дефолтным', () => {
      settings.colors.playerBody = '#000000';
      settings.counts.allies = 999;

      resetSettings();

      expect(settings.colors.playerBody).toBe(DEFAULT_SETTINGS.colors.playerBody);
      expect(settings.counts.allies).toBe(DEFAULT_SETTINGS.counts.allies);
    });

    it('сохраняет после сброса', () => {
      resetSettings();
      expect(localStorageMock.setItem).toHaveBeenCalled();
    });
  });

  describe('parseHexColor', () => {
    it('преобразует #rrggbb в число', () => {
      expect(parseHexColor('#ff0000')).toBe(0xff0000);
      expect(parseHexColor('#00ff00')).toBe(0x00ff00);
      expect(parseHexColor('#0000ff')).toBe(0x0000ff);
      expect(parseHexColor('#ffffff')).toBe(0xffffff);
      expect(parseHexColor('#000000')).toBe(0x000000);
    });

    it('работает без решётки', () => {
      expect(parseHexColor('aabbcc')).toBe(0xaabbcc);
    });
  });
});
