import { Color3 } from '@babylonjs/core/Maths/math.color';

/**
 * Расширенный цвет на основе BJS `Color3`.
 *
 * Добавляет удобные способы задания цвета (hex, HSL)
 * и мутирующие операции с chaining: `c.clone().multiplyScalar(0.7)`.
 */
export class Color extends Color3 {
  constructor(hex?: number) {
    super();
    if (hex !== undefined) this.setHex(hex);
  }

  /** Задаёт цвет из hex-числа (например, `0xff0000` — красный). */
  setHex(hex: number): this {
    this.r = ((hex >> 16) & 0xff) / 255;
    this.g = ((hex >> 8) & 0xff) / 255;
    this.b = (hex & 0xff) / 255;
    return this;
  }

  /** Умножает каждый канал на скаляр (затемнение/осветление). */
  multiplyScalar(s: number): this {
    this.r *= s;
    this.g *= s;
    this.b *= s;
    return this;
  }

  /** Клонирует как расширенный Color (а не базовый Color3). */
  override clone(): Color {
    const c = new Color();
    c.r = this.r;
    c.g = this.g;
    c.b = this.b;
    return c;
  }

  /** Задаёт цвет из HSL (все значения от 0 до 1). */
  setHSL(h: number, s: number, l: number): this {
    if (s === 0) {
      this.r = this.g = this.b = l;
      return this;
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    this.r = hueToRgb(p, q, h + 1 / 3);
    this.g = hueToRgb(p, q, h);
    this.b = hueToRgb(p, q, h - 1 / 3);

    return this;
  }
}

function hueToRgb(p: number, q: number, t: number): number {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
