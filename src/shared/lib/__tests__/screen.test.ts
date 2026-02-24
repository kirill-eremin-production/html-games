import { clampToScreenEdge, formatDistance, isOnScreen } from '../screen';

describe('isOnScreen', () => {
  const w = 1920;
  const h = 1080;
  const margin = 50;

  it('точка внутри экрана → true', () => {
    expect(isOnScreen(960, 540, w, h, margin)).toBe(true);
  });

  it('точка на левом краю (внутри margin) → false', () => {
    expect(isOnScreen(30, 540, w, h, margin)).toBe(false);
  });

  it('точка на правом краю (внутри margin) → false', () => {
    expect(isOnScreen(1900, 540, w, h, margin)).toBe(false);
  });

  it('точка на верхнем краю (внутри margin) → false', () => {
    expect(isOnScreen(960, 10, w, h, margin)).toBe(false);
  });

  it('точка на нижнем краю (внутри margin) → false', () => {
    expect(isOnScreen(960, 1060, w, h, margin)).toBe(false);
  });

  it('точка ровно на границе margin → false (строгое неравенство)', () => {
    expect(isOnScreen(50, 540, w, h, margin)).toBe(false);
    expect(isOnScreen(960, 50, w, h, margin)).toBe(false);
  });

  it('точка чуть внутри границы margin → true', () => {
    expect(isOnScreen(51, 540, w, h, margin)).toBe(true);
    expect(isOnScreen(960, 51, w, h, margin)).toBe(true);
  });

  it('margin=0: все точки внутри экрана видимы', () => {
    expect(isOnScreen(1, 1, w, h, 0)).toBe(true);
    expect(isOnScreen(0, 0, w, h, 0)).toBe(false); // строгое неравенство
  });
});

describe('clampToScreenEdge', () => {
  const w = 1000;
  const h = 1000;
  const margin = 50;

  it('точка в центре (за камерой, isBehindCamera) прижимается к верхнему краю', () => {
    const result = clampToScreenEdge(500, 500, w, h, true, margin);
    // При dx=0, dy=0, isBehindCamera — возвращает (cx, margin)
    expect(result.x).toBe(500);
    expect(result.y).toBe(margin);
  });

  it('точка в центре (перед камерой, dx≈0, dy≈0) прижимается к верхнему краю', () => {
    const result = clampToScreenEdge(500, 500, w, h, false, margin);
    expect(result.x).toBe(500);
    expect(result.y).toBe(margin);
  });

  it('точка справа прижимается к правому краю', () => {
    const result = clampToScreenEdge(900, 500, w, h, false, margin);
    expect(result.x).toBeCloseTo(w - margin);
    expect(result.y).toBeCloseTo(500);
  });

  it('точка за камерой инвертирует направление', () => {
    // screenX=700 → dx=200 от центра → isBehindCamera → dx=-200
    const result = clampToScreenEdge(700, 500, w, h, true, margin);
    expect(result.x).toBeLessThan(500); // инвертировано
  });

  it('результат всегда внутри [margin, w-margin] × [margin, h-margin]', () => {
    for (let i = 0; i < 50; i++) {
      const sx = Math.random() * 2000 - 500;
      const sy = Math.random() * 2000 - 500;
      const behind = Math.random() > 0.5;
      const r = clampToScreenEdge(sx, sy, w, h, behind, margin);
      const eps = 1e-10;
      expect(r.x).toBeGreaterThanOrEqual(margin - eps);
      expect(r.x).toBeLessThanOrEqual(w - margin + eps);
      expect(r.y).toBeGreaterThanOrEqual(margin - eps);
      expect(r.y).toBeLessThanOrEqual(h - margin + eps);
    }
  });
});

describe('formatDistance', () => {
  it('менее 1000 → метры (целое число + "м")', () => {
    expect(formatDistance(0)).toBe('0м');
    expect(formatDistance(123)).toBe('123м');
    expect(formatDistance(999)).toBe('999м');
    expect(formatDistance(999.9)).toBe('999м');
  });

  it('1000 и более → километры с одним знаком после запятой', () => {
    expect(formatDistance(1000)).toBe('1.0км');
    expect(formatDistance(1500)).toBe('1.5км');
    expect(formatDistance(2345)).toBe('2.3км');
    expect(formatDistance(10000)).toBe('10.0км');
  });

  it('дробные метры округляются вниз (Math.floor)', () => {
    expect(formatDistance(123.7)).toBe('123м');
    expect(formatDistance(0.9)).toBe('0м');
  });
});
