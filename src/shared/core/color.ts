import { Color3 } from '@babylonjs/core/Maths/math.color';

export class Color extends Color3 {
  constructor(hex?: number) {
    super();
    if (hex !== undefined) this.setHex(hex);
  }

  /** Set color from a hex integer (e.g. 0xff0000 for red). */
  setHex(hex: number): this {
    this.r = ((hex >> 16) & 0xff) / 255;
    this.g = ((hex >> 8) & 0xff) / 255;
    this.b = (hex & 0xff) / 255;
    return this;
  }

  /** Get color as a hex integer. */
  getHex(): number {
    const r = Math.round(Math.min(this.r, 1) * 255);
    const g = Math.round(Math.min(this.g, 1) * 255);
    const b = Math.round(Math.min(this.b, 1) * 255);
    return (r << 16) | (g << 8) | b;
  }

  /** Three.js-compatible: multiply each channel by scalar, return this. */
  multiplyScalar(s: number): this {
    this.r *= s;
    this.g *= s;
    this.b *= s;
    return this;
  }

  /** Three.js-compatible: copy values from another color, return this. */
  copy(c: Color3): this {
    this.copyFrom(c);
    return this;
  }

  /** Override clone to return our extended Color instead of base Color3. */
  override clone(): Color {
    const c = new Color();
    c.r = this.r;
    c.g = this.g;
    c.b = this.b;
    return c;
  }

  /** Set color from HSL values (all in 0-1 range). */
  setHSL(h: number, s: number, l: number): this {
    // Achromatic
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
