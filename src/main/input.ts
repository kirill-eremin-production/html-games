import { resumeAudio } from '../audio';

import { exitExplorationMode } from '../campaign/mode-manager';
import { getCurrentModeName } from '../modes/registry';
import { handleResize } from '../scene/setup';
import { state } from '@/shared/state';
import { playerPlane } from '../systems/player';
import { toggleTargetLock } from '../ui/markers';

import { pauseGame } from './combat';

function isFlightMode(): boolean {
  const mode = getCurrentModeName();
  return mode === 'combat' || mode === 'exploration';
}

export function setupInputListeners(): void {
  window.addEventListener('keydown', (e) => {
    if (!isFlightMode()) return;
    if (e.code === 'Escape' || e.code === 'KeyP') {
      if (getCurrentModeName() === 'exploration') {
        exitExplorationMode();
      } else {
        pauseGame();
      }
      return;
    }
    state.keys[e.code] = true;
    e.preventDefault();
  });

  window.addEventListener('keyup', (e) => {
    if (!isFlightMode()) return;
    state.keys[e.code] = false;
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isFlightMode()) return;
    state.mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    state.mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    state.mouseActive = true;
  });

  window.addEventListener('mousedown', (e) => {
    if (isFlightMode()) {
      if (e.button === 0) state.keys['MouseLeft'] = true;
      if (e.button === 1 && (state.running || getCurrentModeName() === 'exploration')) {
        e.preventDefault();
        toggleTargetLock(playerPlane);
      }
    }
    resumeAudio();
  });

  window.addEventListener('mouseup', (e) => {
    if (e.button === 0) state.keys['MouseLeft'] = false;
  });

  window.addEventListener('keydown', () => resumeAudio(), { once: true });
  window.addEventListener('resize', handleResize);
}
