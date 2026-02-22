import { resumeAudio } from '../audio/sound';
import { exitExplorationMode } from '../campaign/mode-manager';
import { currentMode } from '../campaign/state';
import { handleResize } from '../scene/setup';
import { state } from '../state';
import { playerPlane } from '../systems/player';
import { toggleTargetLock } from '../ui/markers';
import { pauseGame } from './combat';

function isFlightMode(): boolean {
  return currentMode === 'combat' || currentMode === 'exploration';
}

export function setupInputListeners(): void {
  window.addEventListener('keydown', (e) => {
    if (!isFlightMode()) return;
    if (e.code === 'Escape' || e.code === 'KeyP') {
      if (currentMode === 'exploration') {
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
    if (currentMode === 'combat') {
      if (e.button === 0) state.keys['MouseLeft'] = true;
      if (e.button === 1 && state.running) {
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
