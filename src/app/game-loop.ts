import { renderer } from '@/shared/engine';
import { clock } from '@/shared/refs/app-refs';

import { updateCurrentMode } from './mode-registry';

const TARGET_FPS = 60;
const FRAME_INTERVAL = 1000 / TARGET_FPS;

let lastFrameTime = 0;

let _lastRenderError = 0;

export function gameLoop(timestamp = 0): void {
  requestAnimationFrame(gameLoop);
  const elapsed = timestamp - lastFrameTime;
  if (elapsed < FRAME_INTERVAL) return;
  lastFrameTime = timestamp - (elapsed % FRAME_INTERVAL);
  const dt = Math.min(clock.getDelta(), 0.05);

  try {
    updateCurrentMode(dt);
  } catch (err) {
    if (timestamp - _lastRenderError > 2000) {
      console.error('[game-loop] update error:', err);
      _lastRenderError = timestamp;
    }
  }

  try {
    renderer.render();
  } catch (err) {
    if (timestamp - _lastRenderError > 2000) {
      console.error('[game-loop] render error:', err);
      _lastRenderError = timestamp;
    }
  }
}
