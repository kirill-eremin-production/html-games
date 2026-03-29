import { createBuilderState, posKey, setBlock } from '../builder-state';
import { deleteBlueprint, listBlueprints, loadBlueprint, saveBlueprint } from '../builder-storage';

// ── localStorage mock ──────────────────────────────────────────────────────

const store: Record<string, string> = {};

beforeEach(() => {
  // Очистить хранилище перед каждым тестом
  for (const key of Object.keys(store)) {
    delete store[key];
  }

  Object.defineProperty(globalThis, 'localStorage', {
    value: {
      getItem: (key: string) => store[key] ?? null,
      setItem: (key: string, value: string) => {
        store[key] = value;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      get length() {
        return Object.keys(store).length;
      },
      key: (idx: number) => Object.keys(store)[idx] ?? null,
      clear: () => {
        for (const key of Object.keys(store)) {
          delete store[key];
        }
      },
    },
    writable: true,
    configurable: true,
  });
});

describe('Builder Storage', () => {
  // ── saveBlueprint ───────────────────────────────────────────────────────

  describe('saveBlueprint', () => {
    it('сохраняет пустой чертёж', () => {
      const s = createBuilderState('TestShip');
      saveBlueprint(s);

      const raw = store['blueprint:TestShip'];
      expect(raw).toBeDefined();

      const data = JSON.parse(raw);
      expect(data.version).toBe(1);
      expect(data.name).toBe('TestShip');
      expect(data.blocks).toEqual([]);
    });

    it('сохраняет чертёж с блоками', () => {
      const s = createBuilderState('Ship2');
      setBlock(s, 0, 0, 0, 3);
      setBlock(s, 1, 0, 0, 5);

      saveBlueprint(s);

      const data = JSON.parse(store['blueprint:Ship2']);
      expect(data.blocks).toHaveLength(2);

      // Проверяем что блоки содержат правильные данные
      const sorted = data.blocks.sort((a: number[], b: number[]) => a[0] - b[0]);
      expect(sorted[0]).toEqual([0, 0, 0, 3]);
      expect(sorted[1]).toEqual([1, 0, 0, 5]);
    });

    it('перезаписывает существующий чертёж', () => {
      const s = createBuilderState('Ship');
      setBlock(s, 0, 0, 0, 0);
      saveBlueprint(s);

      // Добавить блок и пересохранить
      setBlock(s, 1, 1, 1, 1);
      saveBlueprint(s);

      const data = JSON.parse(store['blueprint:Ship']);
      expect(data.blocks).toHaveLength(2);
    });
  });

  // ── loadBlueprint ──────────────────────────────────────────────────────

  describe('loadBlueprint', () => {
    it('загружает сохранённый чертёж', () => {
      const s = createBuilderState('MyShip');
      setBlock(s, 5, 3, 7, 2);
      setBlock(s, 10, 0, 10, 8);
      saveBlueprint(s);

      const loaded = loadBlueprint('MyShip');
      expect(loaded).not.toBeNull();
      expect(loaded!.name).toBe('MyShip');
      expect(loaded!.blocks.size).toBe(2);
      expect(loaded!.blocks.get(posKey(5, 3, 7))).toBe(2);
      expect(loaded!.blocks.get(posKey(10, 0, 10))).toBe(8);
    });

    it('возвращает null если чертёж не найден', () => {
      expect(loadBlueprint('nonexistent')).toBeNull();
    });

    it('возвращает null при невалидном JSON', () => {
      store['blueprint:broken'] = 'not json at all';
      expect(loadBlueprint('broken')).toBeNull();
    });

    it('загруженный state имеет currentColor = 0', () => {
      const s = createBuilderState('Ship');
      s.currentColor = 5;
      saveBlueprint(s);

      const loaded = loadBlueprint('Ship');
      expect(loaded!.currentColor).toBe(0);
    });
  });

  // ── listBlueprints ────────────────────────────────────────────────────

  describe('listBlueprints', () => {
    it('возвращает пустой массив если нет чертежей', () => {
      expect(listBlueprints()).toEqual([]);
    });

    it('возвращает имена сохранённых чертежей', () => {
      saveBlueprint(createBuilderState('Alpha'));
      saveBlueprint(createBuilderState('Beta'));

      const names = listBlueprints();
      expect(names).toContain('Alpha');
      expect(names).toContain('Beta');
      expect(names).toHaveLength(2);
    });

    it('возвращает отсортированный список', () => {
      saveBlueprint(createBuilderState('Zeta'));
      saveBlueprint(createBuilderState('Alpha'));
      saveBlueprint(createBuilderState('Mid'));

      expect(listBlueprints()).toEqual(['Alpha', 'Mid', 'Zeta']);
    });

    it('игнорирует ключи без префикса blueprint:', () => {
      store['other:key'] = 'data';
      store['settings'] = 'data';
      saveBlueprint(createBuilderState('Ship'));

      expect(listBlueprints()).toEqual(['Ship']);
    });
  });

  // ── deleteBlueprint ───────────────────────────────────────────────────

  describe('deleteBlueprint', () => {
    it('удаляет чертёж', () => {
      saveBlueprint(createBuilderState('ToDelete'));
      expect(listBlueprints()).toContain('ToDelete');

      deleteBlueprint('ToDelete');
      expect(listBlueprints()).not.toContain('ToDelete');
      expect(loadBlueprint('ToDelete')).toBeNull();
    });

    it('не падает при удалении несуществующего чертежа', () => {
      expect(() => deleteBlueprint('nonexistent')).not.toThrow();
    });
  });

  // ── Roundtrip ──────────────────────────────────────────────────────────

  describe('roundtrip save → load', () => {
    it('сохраняет и загружает 100 блоков', () => {
      const s = createBuilderState('BigShip');

      // Ставим 100 блоков в линию
      for (let i = 0; i < 100; i++) {
        setBlock(s, i % 50, Math.floor(i / 50), 0, i % 12);
      }

      saveBlueprint(s);
      const loaded = loadBlueprint('BigShip');

      expect(loaded).not.toBeNull();
      expect(loaded!.blocks.size).toBe(100);

      // Проверяем каждый блок
      for (let i = 0; i < 100; i++) {
        const x = i % 50;
        const y = Math.floor(i / 50);
        expect(loaded!.blocks.get(posKey(x, y, 0))).toBe(i % 12);
      }
    });
  });
});
