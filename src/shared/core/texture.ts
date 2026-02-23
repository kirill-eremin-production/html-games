import { DynamicTexture } from '@babylonjs/core/Materials/Textures/dynamicTexture';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import type { Scene } from '@babylonjs/core/scene';

let _texId = 0;

/**
 * CanvasTexture — wraps a Babylon.js DynamicTexture created from an HTML canvas.
 */
export class CanvasTexture {
  _bTex: DynamicTexture | null = null;
  _canvas: HTMLCanvasElement;
  generateMipmaps = true;
  minFilter = 0;

  constructor(canvas: HTMLCanvasElement, scene?: Scene) {
    this._canvas = canvas;
    if (scene) this._createBTexture(scene);
  }

  _ensureBTexture(scene: Scene): DynamicTexture {
    if (!this._bTex) this._createBTexture(scene);
    return this._bTex!;
  }

  private _createBTexture(scene: Scene): void {
    const name = `canvasTex_${_texId++}`;
    this._bTex = new DynamicTexture(
      name,
      { width: this._canvas.width, height: this._canvas.height },
      scene,
      this.generateMipmaps,
    );
    const ctx = this._bTex.getContext();
    ctx.drawImage(this._canvas, 0, 0);
    this._bTex.update();
    if (!this.generateMipmaps) {
      this._bTex.updateSamplingMode(Texture.LINEAR_LINEAR);
    }
  }

  dispose(): void {
    this._bTex?.dispose();
    this._bTex = null;
  }
}
