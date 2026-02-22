import { updateCurrentMode } from '../modes/registry';
import { camera, renderer, scene } from '../scene/setup';
import { clock, refs } from './refs';

const TARGET_FPS = 60;
const FRAME_INTERVAL = 1000 / TARGET_FPS;

export function gameLoop(timestamp = 0): void {
  requestAnimationFrame(gameLoop);
  const elapsed = timestamp - refs.lastFrameTime;
  if (elapsed < FRAME_INTERVAL) return;
  refs.lastFrameTime = timestamp - (elapsed % FRAME_INTERVAL);
  const dt = Math.min(clock.getDelta(), 0.05);

  updateCurrentMode(dt);
  renderer.render(scene, camera);
}
