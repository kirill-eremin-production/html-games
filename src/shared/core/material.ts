import { Constants } from '@babylonjs/core/Engines/constants';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import type { Scene } from '@babylonjs/core/scene';

import { Color } from './color';

let _matId = 0;

/**
 * Параметры создания материала.
 *
 * Передаются в конструктор {@link EngineMaterial} и применяются единовременно.
 * Числовые цвета задаются hex-литералами (`0xff0000`), объектные — через {@link Color}.
 */
export interface MaterialConfig {
  color?: number | Color;
  emissive?: number | Color;
  emissiveIntensity?: number;
  transparent?: boolean;
  opacity?: number;
  shininess?: number;
  roughness?: number;
  /** `0` — передние грани (по умолчанию), `2` — двусторонний рендеринг. */
  side?: number;
  depthWrite?: boolean;
  /** `2` — аддитивный блендинг (AdditiveBlending). */
  blending?: number;
}

/**
 * Базовый материал движка — обёртка над BJS `StandardMaterial`.
 *
 * Предоставляет единый Three.js-совместимый интерфейс (`color`, `emissive`, `opacity`, `transparent`)
 * и автоматически синхронизирует расширённый {@link Color} с BJS-свойствами
 * (`diffuseColor`, `emissiveColor`, `alphaMode`) перед рендерингом.
 *
 * Создание — через фабрики:
 * ```ts
 * const mat = createPBRMaterial({ color: 0xff0000, emissive: 0x330000 });
 * const unlit = createUnlitMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 });
 * ```
 */
export class EngineMaterial extends StandardMaterial {
  _emissiveIntensity = 1;
  _transparent = false;
  _blending = 0;

  constructor(config?: MaterialConfig, scene?: Scene) {
    super(`mat_${_matId++}`, scene ?? undefined);

    this.specularColor.set(0.1, 0.1, 0.1);

    if (config) this._applyConfig(config);

    this.onBindObservable.add(() => this._syncColors());
  }

  protected _color = new Color(0xffffff);
  get color(): Color {
    return this._color;
  }
  set color(v: Color) {
    this._color = v;
  }

  protected _emissive = new Color(0x000000);
  get emissive(): Color {
    return this._emissive;
  }
  set emissive(v: Color) {
    this._emissive = v;
  }

  get opacity(): number {
    return this.alpha;
  }
  set opacity(v: number) {
    this.alpha = v;
  }

  get transparent(): boolean {
    return this._transparent;
  }
  set transparent(v: boolean) {
    this._transparent = v;
  }

  get depthWrite(): boolean {
    return !this.disableDepthWrite;
  }
  set depthWrite(v: boolean) {
    this.disableDepthWrite = !v;
  }

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
    if (c.roughness !== undefined) this.specularPower = Math.max(1, (1 - c.roughness) * 128);
    if (c.side !== undefined) this.backFaceCulling = c.side !== 2;
    if (c.depthWrite !== undefined) this.disableDepthWrite = !c.depthWrite;
    if (c.blending !== undefined) this._blending = c.blending;
  }

  /** Синхронизирует color/emissive с BJS-свойствами перед рендерингом. */
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

export { EngineMaterial as MeshPhongMaterial };

/**
 * Unlit-материал — без освещения, цвет задаётся через emissiveColor.
 *
 * Используется для UI-элементов, свечений, выхлопов двигателей
 * и других объектов, которые должны выглядеть одинаково независимо от сцены.
 *
 * ```ts
 * const mat = createUnlitMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 });
 * ```
 */
export class MeshBasicMaterial extends EngineMaterial {
  constructor(config?: MaterialConfig, scene?: Scene) {
    super(config, scene);
    this.disableLighting = true;
  }

  _syncColors(): void {
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

/**
 * Материал для спрайтов (billboard-квадов).
 * Наследует все свойства {@link EngineMaterial}.
 */
export class EngineSpriteMaterial extends EngineMaterial {}

/**
 * Материал для облаков точек (point clouds).
 *
 * Дополнительные поля:
 * - `size` — размер точки в пикселях
 * - `vertexColors` — использовать цвета из вершинного буфера
 * - `sizeAttenuation` — уменьшать размер с расстоянием
 */
export class EnginePointsMaterial extends EngineMaterial {
  size = 1;
  vertexColors = false;
  sizeAttenuation = true;
}

/** Материал для линий. Наследует все свойства {@link EngineMaterial}. */
export class EngineLineMaterial extends EngineMaterial {}
