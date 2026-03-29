/**
 * Централизованные фабрики для создания объектов движка.
 *
 * Модуль инкапсулирует ссылку на Babylon.js-сцену и предоставляет
 * типизированные функции для создания мешей, геометрий, материалов,
 * источников света, спрайтов и линий без необходимости передавать
 * `scene` в каждый вызов.
 *
 * ```ts
 * const geo = createSphereGeometry(5);
 * const mat = createUnlitMaterial({ color: 0xff4400, emissive: 0x220000 });
 * const mesh = createMesh(geo, mat);
 * addToScene(mesh);
 * ```
 */
import { DirectionalLight as BDirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { PointLight as BPointLight } from '@babylonjs/core/Lights/pointLight';
import { DynamicTexture } from '@babylonjs/core/Materials/Textures/dynamicTexture';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Vector3 as BVector3 } from '@babylonjs/core/Maths/math.vector';
import type { Node } from '@babylonjs/core/node';
import type { Scene } from '@babylonjs/core/scene';

import {
  CylinderGeometry,
  EngineBufferAttribute,
  EngineBufferGeometry,
  IcosahedronGeometry,
  OctahedronGeometry,
  PlaneGeometry,
  RingGeometry,
  SphereGeometry,
} from './geometry';
import { EngineLine } from './line';
import {
  EngineLineMaterial,
  EngineMaterial,
  EnginePointsMaterial,
  EngineSpriteMaterial,
  type MaterialConfig,
  MeshBasicMaterial,
} from './material';
import { EngineMesh } from './mesh';
import { EnginePoints } from './points';
import { EngineSprite } from './sprite';
import { TransformNode } from './transform-node';
import { Vector3 } from './vector3';

// ── Scene reference (set once by scene/setup.ts) ─────────────────────────
let _scene: Scene | null = null;
export function setFactoryScene(scene: Scene): void {
  _scene = scene;
}
export function getFactoryScene(): Scene {
  return _scene!;
}

// ── Transform nodes ─────────────────────────────────────────────────────────
export function createTransformNode(): TransformNode {
  return new TransformNode('', _scene);
}

// ── Mesh creation ────────────────────────────────────────────────────────────
export function createMesh(geometry: EngineBufferGeometry, material: EngineMaterial): EngineMesh {
  const mesh = new EngineMesh('', _scene);
  geometry._applyToMesh(mesh);
  mesh.material = material;
  return mesh;
}

// ── Scene add/remove ─────────────────────────────────────────────────────────
export function addToScene(obj: Node): void {
  // In BJS, nodes with parent=null are root-level scene nodes.
  // If the node was disabled, re-enable it.
  if ('setEnabled' in obj) (obj as TransformNode).setEnabled(true);
}

export function removeFromScene(obj: Node): void {
  // Detach from parent and disable
  obj.parent = null;
  if ('setEnabled' in obj) (obj as TransformNode).setEnabled(false);
}

// ── Geometry factories ──────────────────────────────────────────────────────
export function createSphereGeometry(
  radius: number,
  widthSegments = 16,
  heightSegments = 16,
): SphereGeometry {
  return new SphereGeometry(radius, widthSegments, heightSegments);
}

export function createCylinderGeometry(
  radiusTop: number,
  radiusBottom: number,
  height: number,
  segments = 8,
): CylinderGeometry {
  return new CylinderGeometry(radiusTop, radiusBottom, height, segments);
}

export function createPlaneGeometry(width: number, height: number): PlaneGeometry {
  return new PlaneGeometry(width, height);
}

export function createRingGeometry(
  innerRadius: number,
  outerRadius: number,
  segments = 32,
): RingGeometry {
  return new RingGeometry(innerRadius, outerRadius, segments);
}

export function createOctahedronGeometry(radius: number, detail = 0): OctahedronGeometry {
  return new OctahedronGeometry(radius, detail);
}

export function createIcosahedronGeometry(radius: number, detail = 0): IcosahedronGeometry {
  return new IcosahedronGeometry(radius, detail);
}

export function createBufferGeometry(): EngineBufferGeometry {
  return new EngineBufferGeometry();
}

export function createBufferAttribute(
  array: Float32Array,
  itemSize: number,
): EngineBufferAttribute {
  return new EngineBufferAttribute(array, itemSize);
}

// ── Material factories ──────────────────────────────────────────────────────
export function createPBRMaterial(opts: MaterialConfig = {}): EngineMaterial {
  return new EngineMaterial(opts, _scene ?? undefined);
}

export function createUnlitMaterial(opts: MaterialConfig = {}): MeshBasicMaterial {
  return new MeshBasicMaterial(opts, _scene ?? undefined);
}

export function createAdditiveMaterial(opts: MaterialConfig = {}): MeshBasicMaterial {
  const mat = new MeshBasicMaterial(undefined, _scene ?? undefined);
  if (opts.color !== undefined) {
    if (typeof opts.color === 'number') mat.color.setHex(opts.color);
    else mat.color.copyFrom(opts.color);
  }
  mat.transparent = opts.transparent ?? true;
  if (opts.opacity !== undefined) mat.opacity = opts.opacity;
  mat._blending = 2; // AdditiveBlending
  mat.depthWrite = opts.depthWrite ?? false;
  return mat;
}

export function createSpriteMaterial(
  opts: {
    map?: DynamicTexture;
    color?: number;
    transparent?: boolean;
    opacity?: number;
    depthWrite?: boolean;
    additive?: boolean;
  } = {},
): EngineSpriteMaterial {
  const mat = new EngineSpriteMaterial(undefined, _scene ?? undefined);
  if (opts.map) mat.emissiveTexture = opts.map;
  if (opts.color !== undefined) mat.color.setHex(opts.color);
  mat.transparent = opts.transparent ?? true;
  if (opts.opacity !== undefined) mat.opacity = opts.opacity;
  mat.depthWrite = opts.depthWrite ?? false;
  if (opts.additive) mat._blending = 2;
  return mat;
}

export function createPointsMaterial(
  opts: {
    size?: number;
    map?: DynamicTexture;
    vertexColors?: boolean;
    transparent?: boolean;
    opacity?: number;
    depthWrite?: boolean;
    additive?: boolean;
    sizeAttenuation?: boolean;
  } = {},
): EnginePointsMaterial {
  const mat = new EnginePointsMaterial(undefined, _scene ?? undefined);
  if (opts.size !== undefined) mat.size = opts.size;
  if (opts.map) mat.emissiveTexture = opts.map;
  if (opts.vertexColors !== undefined) mat.vertexColors = opts.vertexColors;
  mat.transparent = opts.transparent ?? true;
  if (opts.opacity !== undefined) mat.opacity = opts.opacity;
  mat.depthWrite = opts.depthWrite ?? false;
  if (opts.additive) mat._blending = 2;
  if (opts.sizeAttenuation !== undefined) mat.sizeAttenuation = opts.sizeAttenuation;
  return mat;
}

function createLineMaterial(color: number, transparent = false, opacity = 1): EngineLineMaterial {
  const mat = new EngineLineMaterial(undefined, _scene ?? undefined);
  mat.color.setHex(color);
  mat.transparent = transparent;
  mat.opacity = opacity;
  return mat;
}

// ── Line factories ──────────────────────────────────────────────────────────
export function createLine(
  geometry: EngineBufferGeometry,
  material: EngineLineMaterial,
): EngineLine {
  const line = new EngineLine();
  line.geometry = geometry;
  line.material = material;
  if (_scene) line.build(_scene);
  return line;
}

export function createLineFromPoints(
  points: Vector3[],
  color: number,
  transparent = false,
  opacity = 1,
): EngineLine {
  const geo = new EngineBufferGeometry().setFromPoints(points);
  const mat = createLineMaterial(color, transparent, opacity);
  return createLine(geo, mat);
}

// ── Sprites ─────────────────────────────────────────────────────────────────
export function createSprite(material: EngineSpriteMaterial): EngineSprite {
  const sprite = new EngineSprite('', _scene);
  sprite.material = material;
  return sprite;
}

// ── Points ──────────────────────────────────────────────────────────────────
export function createPoints(
  geometry: EngineBufferGeometry,
  material: EnginePointsMaterial,
): EnginePoints {
  const pts = new EnginePoints('', _scene);
  pts.pointsGeometry = geometry;
  pts.applyPointsMaterial(material);
  return pts;
}

// ── Lights ──────────────────────────────────────────────────────────────────
function hexToColor3(hex: number): Color3 {
  return new Color3(((hex >> 16) & 0xff) / 255, ((hex >> 8) & 0xff) / 255, (hex & 0xff) / 255);
}

export class AmbientLight extends HemisphericLight {
  constructor(color: number, intensity: number, scene?: Scene) {
    super('ambient', new BVector3(0, 1, 0), scene ?? _scene ?? undefined);
    this.diffuse = hexToColor3(color);
    this.intensity = intensity;
    this.specular.set(0, 0, 0);
  }
}

export class DirectionalLight extends BDirectionalLight {
  constructor(color: number, intensity: number, scene?: Scene) {
    super('directional', new BVector3(0, -1, 0), scene ?? _scene ?? undefined);
    this.diffuse = hexToColor3(color);
    this.intensity = intensity;
  }
}

export class HemisphereLight extends HemisphericLight {
  constructor(skyColor: number, groundColor: number, intensity: number, scene?: Scene) {
    super('hemisphere', new BVector3(0, 1, 0), scene ?? _scene ?? undefined);
    this.diffuse = hexToColor3(skyColor);
    this.groundColor = hexToColor3(groundColor);
    this.intensity = intensity;
  }
}

class PointLightWrapper extends BPointLight {
  constructor(color: number, intensity: number, distance?: number, scene?: Scene) {
    super('pointLight', BVector3.Zero(), scene ?? _scene ?? undefined);
    this.diffuse = hexToColor3(color);
    this.intensity = intensity;
    if (distance) this.range = distance;
  }
}

// ── Texture utilities ───────────────────────────────────────────────────────
export function createTextureFromCanvas(
  canvas: HTMLCanvasElement,
  generateMipmaps = true,
): DynamicTexture {
  const scene = _scene ?? undefined;
  const tex = new DynamicTexture(
    `canvasTex`,
    { width: canvas.width, height: canvas.height },
    scene,
    generateMipmaps,
  );
  const ctx = tex.getContext();
  ctx.drawImage(canvas, 0, 0);
  tex.update();
  if (!generateMipmaps) {
    tex.updateSamplingMode(Texture.LINEAR_LINEAR);
  }
  return tex;
}

export function createAmbientLight(color: number, intensity: number): AmbientLight {
  return new AmbientLight(color, intensity);
}

export function createPointLight(
  color: number,
  intensity: number,
  distance?: number,
): PointLightWrapper {
  return new PointLightWrapper(color, intensity, distance);
}
