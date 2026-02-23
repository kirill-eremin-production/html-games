import { renderer } from '@/shared/core';
import { updateCurrentMode } from '../modes/registry';

import { clock } from './refs';

const TARGET_FPS = 60;
const FRAME_INTERVAL = 1000 / TARGET_FPS;

let lastFrameTime = 0;

export function gameLoop(timestamp = 0): void {
  requestAnimationFrame(gameLoop);
  const elapsed = timestamp - lastFrameTime;
  if (elapsed < FRAME_INTERVAL) return;
  lastFrameTime = timestamp - (elapsed % FRAME_INTERVAL);
  const dt = Math.min(clock.getDelta(), 0.05);

  updateCurrentMode(dt);
  renderer.render();
}
