import { Vector3 } from '@/shared/core/vector3';

import { addDirectionNoise, randomRange } from '../math';

describe('randomRange', () => {
  it('возвращает значение в диапазоне [min, max)', () => {
    for (let i = 0; i < 100; i++) {
      const val = randomRange(5, 10);
      expect(val).toBeGreaterThanOrEqual(5);
      expect(val).toBeLessThan(10);
    }
  });

  it('при min === max возвращает min', () => {
    expect(randomRange(7, 7)).toBe(7);
  });

  it('работает с отрицательными значениями', () => {
    for (let i = 0; i < 50; i++) {
      const val = randomRange(-10, -5);
      expect(val).toBeGreaterThanOrEqual(-10);
      expect(val).toBeLessThan(-5);
    }
  });
});

describe('addDirectionNoise', () => {
  it('возвращает нормализованный вектор', () => {
    const dir = new Vector3(1, 0, 0);
    addDirectionNoise(dir, 0.5);
    const len = dir.length();
    expect(len).toBeCloseTo(1, 5);
  });

  it('мутирует вектор in-place и возвращает его', () => {
    const dir = new Vector3(0, 1, 0);
    const result = addDirectionNoise(dir, 0.5);
    expect(result).toBe(dir);
  });

  it('при spread=0 вектор остаётся тем же направлением', () => {
    // Math.random() - 0.5 даёт шум, но при spread=0 множитель = 0
    const dir = new Vector3(0, 0, 1);
    addDirectionNoise(dir, 0);
    expect(dir.x).toBeCloseTo(0);
    expect(dir.y).toBeCloseTo(0);
    expect(dir.z).toBeCloseTo(1);
  });

  it('при большом spread вектор изменяется, но остаётся нормализованным', () => {
    const dir = new Vector3(1, 0, 0);
    const origX = dir.x;
    // Повторяем несколько раз, чтобы убедиться, что хотя бы один раз вектор изменился
    let changed = false;
    for (let i = 0; i < 50; i++) {
      const d = new Vector3(1, 0, 0);
      addDirectionNoise(d, 2.0);
      expect(d.length()).toBeCloseTo(1, 5);
      if (Math.abs(d.x - origX) > 0.01) changed = true;
    }
    expect(changed).toBe(true);
  });
});
