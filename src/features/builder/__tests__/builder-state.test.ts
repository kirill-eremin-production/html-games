import {
  BLOCK_PALETTE,
  BLOCK_SIZE,
  GRID_SIZE,
  createBuilderState,
  getBlock,
  hasBlock,
  inBounds,
  parseKey,
  posKey,
  removeBlock,
  setBlock,
} from '../builder-state';

describe('Builder State', () => {
  // ── Константы ──────────────────────────────────────────────────────────────

  describe('constants', () => {
    it('BLOCK_PALETTE содержит 12 цветов', () => {
      expect(BLOCK_PALETTE).toHaveLength(12);
    });

    it('все цвета в палитре — числа', () => {
      for (const c of BLOCK_PALETTE) {
        expect(typeof c).toBe('number');
        expect(c).toBeGreaterThanOrEqual(0);
        expect(c).toBeLessThanOrEqual(0xffffff);
      }
    });

    it('GRID_SIZE = 50', () => {
      expect(GRID_SIZE).toBe(50);
    });

    it('BLOCK_SIZE = 1', () => {
      expect(BLOCK_SIZE).toBe(1);
    });
  });

  // ── posKey / parseKey ────────────────────────────────────────────────────

  describe('posKey / parseKey', () => {
    it('posKey создаёт строку "x,y,z"', () => {
      expect(posKey(1, 2, 3)).toBe('1,2,3');
    });

    it('posKey с нулями', () => {
      expect(posKey(0, 0, 0)).toBe('0,0,0');
    });

    it('parseKey разбирает строку обратно', () => {
      expect(parseKey('10,20,30')).toEqual([10, 20, 30]);
    });

    it('parseKey ↔ posKey — roundtrip', () => {
      const [x, y, z] = [7, 13, 49];
      expect(parseKey(posKey(x, y, z))).toEqual([x, y, z]);
    });
  });

  // ── createBuilderState ─────────────────────────────────────────────────────

  describe('createBuilderState', () => {
    it('создаёт пустое состояние с именем по умолчанию', () => {
      const s = createBuilderState();
      expect(s.blocks.size).toBe(0);
      expect(s.currentColor).toBe(0);
      expect(s.name).toBe('Untitled');
    });

    it('принимает пользовательское имя', () => {
      const s = createBuilderState('MyShip');
      expect(s.name).toBe('MyShip');
    });
  });

  // ── inBounds ───────────────────────────────────────────────────────────────

  describe('inBounds', () => {
    it('(0,0,0) в границах', () => {
      expect(inBounds(0, 0, 0)).toBe(true);
    });

    it('(49,49,49) в границах', () => {
      expect(inBounds(49, 49, 49)).toBe(true);
    });

    it('(50,0,0) вне границ', () => {
      expect(inBounds(50, 0, 0)).toBe(false);
    });

    it('отрицательные координаты вне границ', () => {
      expect(inBounds(-1, 0, 0)).toBe(false);
      expect(inBounds(0, -1, 0)).toBe(false);
      expect(inBounds(0, 0, -1)).toBe(false);
    });

    it('центр сетки в границах', () => {
      expect(inBounds(25, 25, 25)).toBe(true);
    });
  });

  // ── setBlock / hasBlock / getBlock / removeBlock ──────────────────────────

  describe('block operations', () => {
    let s: ReturnType<typeof createBuilderState>;

    beforeEach(() => {
      s = createBuilderState();
    });

    it('setBlock добавляет блок', () => {
      expect(setBlock(s, 5, 0, 5, 2)).toBe(true);
      expect(s.blocks.size).toBe(1);
    });

    it('hasBlock возвращает true для поставленного блока', () => {
      setBlock(s, 5, 0, 5, 0);
      expect(hasBlock(s, 5, 0, 5)).toBe(true);
    });

    it('hasBlock возвращает false для пустой позиции', () => {
      expect(hasBlock(s, 5, 0, 5)).toBe(false);
    });

    it('getBlock возвращает индекс цвета', () => {
      setBlock(s, 3, 1, 4, 7);
      expect(getBlock(s, 3, 1, 4)).toBe(7);
    });

    it('getBlock возвращает -1 если блока нет', () => {
      expect(getBlock(s, 3, 1, 4)).toBe(-1);
    });

    it('removeBlock удаляет блок', () => {
      setBlock(s, 5, 0, 5, 0);
      expect(removeBlock(s, 5, 0, 5)).toBe(true);
      expect(hasBlock(s, 5, 0, 5)).toBe(false);
      expect(s.blocks.size).toBe(0);
    });

    it('removeBlock возвращает false если блока нет', () => {
      expect(removeBlock(s, 5, 0, 5)).toBe(false);
    });

    it('setBlock вне границ возвращает false', () => {
      expect(setBlock(s, -1, 0, 0, 0)).toBe(false);
      expect(setBlock(s, 50, 0, 0, 0)).toBe(false);
      expect(s.blocks.size).toBe(0);
    });

    it('setBlock перезаписывает существующий блок', () => {
      setBlock(s, 5, 0, 5, 2);
      setBlock(s, 5, 0, 5, 9);
      expect(getBlock(s, 5, 0, 5)).toBe(9);
      expect(s.blocks.size).toBe(1);
    });

    it('несколько блоков хранятся независимо', () => {
      setBlock(s, 0, 0, 0, 0);
      setBlock(s, 1, 0, 0, 1);
      setBlock(s, 0, 1, 0, 2);

      expect(s.blocks.size).toBe(3);
      expect(getBlock(s, 0, 0, 0)).toBe(0);
      expect(getBlock(s, 1, 0, 0)).toBe(1);
      expect(getBlock(s, 0, 1, 0)).toBe(2);
    });
  });
});
