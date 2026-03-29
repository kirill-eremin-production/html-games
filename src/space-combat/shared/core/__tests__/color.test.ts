import { Color } from '@/shared/core/color';

describe('Color', () => {
  describe('constructor', () => {
    it('без аргументов создаёт чёрный цвет', () => {
      const c = new Color();
      expect(c.r).toBe(0);
      expect(c.g).toBe(0);
      expect(c.b).toBe(0);
    });

    it('принимает hex-число', () => {
      const c = new Color(0xff8000);
      expect(c.r).toBe(1);
      expect(c.g).toBeCloseTo(0.502, 2);
      expect(c.b).toBe(0);
    });
  });

  describe('setHex', () => {
    it('красный 0xff0000', () => {
      const c = new Color().setHex(0xff0000);
      expect(c.r).toBe(1);
      expect(c.g).toBe(0);
      expect(c.b).toBe(0);
    });

    it('белый 0xffffff', () => {
      const c = new Color().setHex(0xffffff);
      expect(c.r).toBe(1);
      expect(c.g).toBe(1);
      expect(c.b).toBe(1);
    });

    it('чёрный 0x000000', () => {
      const c = new Color().setHex(0x000000);
      expect(c.r).toBe(0);
      expect(c.g).toBe(0);
      expect(c.b).toBe(0);
    });

    it('произвольный цвет 0x1a2b3c', () => {
      const c = new Color().setHex(0x1a2b3c);
      expect(c.r).toBeCloseTo(0x1a / 255);
      expect(c.g).toBeCloseTo(0x2b / 255);
      expect(c.b).toBeCloseTo(0x3c / 255);
    });

    it('перезаписывает предыдущий цвет', () => {
      const c = new Color(0xff0000);
      c.setHex(0x00ff00);
      expect(c.r).toBe(0);
      expect(c.g).toBe(1);
    });

    it('возвращает this для chaining', () => {
      const c = new Color();
      expect(c.setHex(0xff0000)).toBe(c);
    });
  });

  describe('multiplyScalar', () => {
    it('затемняет цвет вдвое', () => {
      const c = new Color(0xffffff).multiplyScalar(0.5);
      expect(c.r).toBeCloseTo(0.5);
      expect(c.g).toBeCloseTo(0.5);
      expect(c.b).toBeCloseTo(0.5);
    });

    it('умножение на 0 даёт чёрный', () => {
      const c = new Color(0xff8040).multiplyScalar(0);
      expect(c.r).toBe(0);
      expect(c.g).toBe(0);
      expect(c.b).toBe(0);
    });

    it('умножение на 2 удваивает яркость', () => {
      const c = new Color().setHex(0x804020);
      const r0 = c.r;
      const g0 = c.g;
      const b0 = c.b;
      c.multiplyScalar(2);
      expect(c.r).toBeCloseTo(r0 * 2);
      expect(c.g).toBeCloseTo(g0 * 2);
      expect(c.b).toBeCloseTo(b0 * 2);
    });

    it('возвращает this для chaining', () => {
      const c = new Color(0xffffff);
      expect(c.multiplyScalar(0.5)).toBe(c);
    });
  });

  describe('clone', () => {
    it('создаёт копию с теми же значениями', () => {
      const a = new Color(0x336699);
      const b = a.clone();
      expect(b.r).toBe(a.r);
      expect(b.g).toBe(a.g);
      expect(b.b).toBe(a.b);
    });

    it('изменение клона не влияет на оригинал', () => {
      const a = new Color(0xff0000);
      const b = a.clone();
      b.setHex(0x0000ff);
      expect(a.r).toBe(1);
      expect(a.b).toBe(0);
    });

    it('возвращает экземпляр Color, а не Color3', () => {
      const c = new Color(0xff0000).clone();
      expect(c).toBeInstanceOf(Color);
    });
  });

  describe('setHSL', () => {
    it('красный: hue=0, s=1, l=0.5', () => {
      const c = new Color().setHSL(0, 1, 0.5);
      expect(c.r).toBeCloseTo(1);
      expect(c.g).toBeCloseTo(0);
      expect(c.b).toBeCloseTo(0);
    });

    it('зелёный: hue=1/3, s=1, l=0.5', () => {
      const c = new Color().setHSL(1 / 3, 1, 0.5);
      expect(c.r).toBeCloseTo(0);
      expect(c.g).toBeCloseTo(1);
      expect(c.b).toBeCloseTo(0);
    });

    it('серый при s=0 (любой hue)', () => {
      const c = new Color().setHSL(0.75, 0, 0.5);
      expect(c.r).toBeCloseTo(0.5);
      expect(c.g).toBeCloseTo(0.5);
      expect(c.b).toBeCloseTo(0.5);
    });

    it('чёрный: l=0', () => {
      const c = new Color().setHSL(0, 1, 0);
      expect(c.r).toBeCloseTo(0);
      expect(c.g).toBeCloseTo(0);
      expect(c.b).toBeCloseTo(0);
    });

    it('белый: l=1, s=0', () => {
      const c = new Color().setHSL(0, 0, 1);
      expect(c.r).toBeCloseTo(1);
      expect(c.g).toBeCloseTo(1);
      expect(c.b).toBeCloseTo(1);
    });

    it('синий: hue=2/3, s=1, l=0.5', () => {
      const c = new Color().setHSL(2 / 3, 1, 0.5);
      expect(c.r).toBeCloseTo(0);
      expect(c.g).toBeCloseTo(0);
      expect(c.b).toBeCloseTo(1);
    });

    it('приглушённый цвет: s=0.5, l=0.3', () => {
      const c = new Color().setHSL(0, 0.5, 0.3);
      expect(c.r).toBeCloseTo(0.45);
      expect(c.g).toBeCloseTo(0.15);
      expect(c.b).toBeCloseTo(0.15);
    });

    it('возвращает this для chaining', () => {
      const c = new Color();
      expect(c.setHSL(0, 1, 0.5)).toBe(c);
    });
  });

  describe('chaining', () => {
    it('clone().multiplyScalar() — реальный паттерн из кода', () => {
      const base = new Color(0xff8000);
      const dark = base.clone().multiplyScalar(0.7);
      // Оригинал не изменился
      expect(base.r).toBe(1);
      // Клон затемнён
      expect(dark.r).toBeCloseTo(0.7);
      expect(dark).toBeInstanceOf(Color);
    });
  });
});
