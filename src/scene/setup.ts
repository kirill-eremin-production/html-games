import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene as BScene } from '@babylonjs/core/scene';
import { Color4 } from '@babylonjs/core/Maths/math.color';
import {
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  setFactoryScene,
} from '../core';

// ── Canvas + Engine ──────────────────────────────────────────────────────────
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const engine = new Engine(canvas, false, {
  powerPreference: 'high-performance',
  preserveDrawingBuffer: false,
  alpha: false,
});
engine.setHardwareScalingLevel(1 / Math.min(window.devicePixelRatio, 1.5));

// ── Scene ────────────────────────────────────────────────────────────────────
const bScene = new BScene(engine);
bScene.useRightHandedSystem = true;
bScene.clearColor = new Color4(0x0a / 255, 0x0f / 255, 0x1e / 255, 1);

// Register the scene for factory functions
setFactoryScene(bScene);

// ── Camera ───────────────────────────────────────────────────────────────────
export const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  5000000,
  bScene,
);
bScene.activeCamera = camera;

// ── Lights ───────────────────────────────────────────────────────────────────
new AmbientLight(0x556688, 0.9, bScene);

const sunLight = new DirectionalLight(0xffffff, 2.0, bScene);
sunLight.position.set(500, 300, -200);

const fillLight = new DirectionalLight(0x4466cc, 0.6, bScene);
fillLight.position.set(-300, -100, 400);

new HemisphereLight(0x334466, 0x111122, 0.4, bScene);

// ── Exports ──────────────────────────────────────────────────────────────────
export const scene = bScene;
export { engine, canvas };

export const renderer = {
  domElement: canvas,
  _engine: engine,
  render(): void {
    bScene.render();
  },
  setSize(width: number, height: number): void {
    canvas.width = width;
    canvas.height = height;
    engine.resize();
  },
  setPixelRatio(ratio: number): void {
    engine.setHardwareScalingLevel(1 / ratio);
  },
};

export function handleResize(): void {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
