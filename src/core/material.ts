import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { Constants } from '@babylonjs/core/Engines/constants';
import type { Scene } from '@babylonjs/core/scene';
import { Color } from './color';

// Counter for auto-naming
let _matId = 0;

export interface MaterialConfig {
  color?: number | Color;
  emissive?: number | Color;
  emissiveIntensity?: number;
  transparent?: boolean;
  opacity?: number;
  shininess?: number;
  roughness?: number;
  side?: number;
  depthWrite?: boolean;
  blending?: number;
}

export class EngineMaterial extends StandardMaterial {
  _emissiveIntensity = 1;
  _transparent = false;
  _blending = 0;

  // No-op shader hook (Three.js compat)
  onBeforeCompile: ((shader: any) => void) | null = null;

  constructor(config?: MaterialConfig, scene?: Scene) {
    super(`mat_${_matId++}`, scene ?? undefined);

    // BJS defaults — less shiny by default
    this.specularColor.set(0.1, 0.1, 0.1);

    if (config) this._applyConfig(config);

    // Auto-sync Three.js-style colors to BJS properties before rendering
    this.onBindObservable.add(() => this._syncColors());
  }

  // Three.js-compatible "color" = BJS diffuseColor.
  // Override with getter/setter using a private field so we use our extended Color.
  protected _color = new Color(0xffffff);
  get color(): Color {
    return this._color;
  }
  set color(v: Color) {
    this._color = v;
  }

  // Three.js-compatible "emissive" = BJS emissiveColor
  protected _emissive = new Color(0x000000);
  get emissive(): Color {
    return this._emissive;
  }
  set emissive(v: Color) {
    this._emissive = v;
  }

  // Three.js-compatible "opacity" = BJS alpha
  get opacity(): number {
    return this.alpha;
  }
  set opacity(v: number) {
    this.alpha = v;
  }

  // Three.js "transparent"
  get transparent(): boolean {
    return this._transparent;
  }
  set transparent(v: boolean) {
    this._transparent = v;
  }

  // Three.js "shininess" = BJS specularPower
  get shininess(): number {
    return this.specularPower;
  }
  set shininess(v: number) {
    this.specularPower = v;
  }

  // Three.js "depthWrite" = !BJS disableDepthWrite
  get depthWrite(): boolean {
    return !this.disableDepthWrite;
  }
  set depthWrite(v: boolean) {
    this.disableDepthWrite = !v;
  }

  // Three.js "side": 0=front, 2=double
  get side(): number {
    return this.backFaceCulling ? 0 : 2;
  }
  set side(v: number) {
    this.backFaceCulling = v !== 2;
  }

  roughness = 0.5;

  _applyConfig(c: MaterialConfig): void {
    if (c.color !== undefined) {
      if (typeof c.color === 'number') this._color.setHex(c.color);
      else this._color.copyFrom(c.color);
    }
    if (c.emissive !== undefined) {
      if (typeof c.emissive === 'number') this._emissive.setHex(c.emissive);
      else this._emissive.copyFrom(c.emissive);
    }
    if (c.emissiveIntensity !== undefined) this._emissiveIntensity = c.emissiveIntensity;
    if (c.transparent !== undefined) this._transparent = c.transparent;
    if (c.opacity !== undefined) this.alpha = c.opacity;
    if (c.shininess !== undefined) this.specularPower = c.shininess;
    if (c.roughness !== undefined) this.roughness = c.roughness;
    if (c.side !== undefined) this.backFaceCulling = c.side !== 2;
    if (c.depthWrite !== undefined) this.disableDepthWrite = !c.depthWrite;
    if (c.blending !== undefined) this._blending = c.blending;
  }

  // Sync our color/emissive fields to BJS before render.
  // This needs to be called before rendering.
  _syncColors(): void {
    this.diffuseColor.r = this._color.r;
    this.diffuseColor.g = this._color.g;
    this.diffuseColor.b = this._color.b;

    this.emissiveColor.r = this._emissive.r * this._emissiveIntensity;
    this.emissiveColor.g = this._emissive.g * this._emissiveIntensity;
    this.emissiveColor.b = this._emissive.b * this._emissiveIntensity;

    if (this._blending === 2) {
      this.alphaMode = Constants.ALPHA_ADD;
    } else if (this._transparent || this.alpha < 1) {
      this.alphaMode = Constants.ALPHA_COMBINE;
    }
  }
}

// Aliases for Three.js compat
export { EngineMaterial as Material };
export { EngineMaterial as MeshPhongMaterial };
export { EngineMaterial as MeshStandardMaterial };

// MeshBasicMaterial — unlit. In BJS: disableLighting = true, use emissiveColor as display color.
export class MeshBasicMaterial extends EngineMaterial {
  constructor(config?: MaterialConfig, scene?: Scene) {
    super(config, scene);
    this.disableLighting = true;
  }

  _syncColors(): void {
    // For unlit materials, use emissive as the display color
    this.emissiveColor.r = this._color.r;
    this.emissiveColor.g = this._color.g;
    this.emissiveColor.b = this._color.b;

    if (this._blending === 2) {
      this.alphaMode = Constants.ALPHA_ADD;
    } else if (this._transparent || this.alpha < 1) {
      this.alphaMode = Constants.ALPHA_COMBINE;
    }
  }
}

// Sprite material
export class EngineSpriteMaterial extends EngineMaterial {
  map: unknown = null;
}

// Points material
export class EnginePointsMaterial extends EngineMaterial {
  size = 1;
  map: unknown = null;
  vertexColors = false;
  sizeAttenuation = true;
}

// Line material
export class EngineLineMaterial extends EngineMaterial {}
