import { Engine } from '@babylonjs/core/Engines/engine';
import { Color4 } from '@babylonjs/core/Maths/math.color';
import { Scene as BScene } from '@babylonjs/core/scene';

import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  PerspectiveCamera,
  setFactoryScene,
} from '@/shared/core';

// ── Canvas + Engine ──────────────────────────────────────────────────────────
const canvas = document.createElement('canvas');
canvas.id = 'game-canvas';
// CSS dimensions (100vw × 100vh) are set in main.css.
// Do NOT set canvas.width / canvas.height manually — BabylonJS Engine manages
// the pixel-buffer size via setHardwareScalingLevel + engine.resize().
document.body.appendChild(canvas);

const engine = new Engine(canvas, false, {
  powerPreference: 'high-performance',
  preserveDrawingBuffer: false,
  alpha: false,
});
engine.setHardwareScalingLevel(1 / Math.min(window.devicePixelRatio, 1.5));
engine.resize(); // set initial buffer size from CSS clientWidth/clientHeight

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
  setPixelRatio(ratio: number): void {
    engine.setHardwareScalingLevel(1 / ratio);
  },
};

export function handleResize(): void {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  engine.resize();
}
