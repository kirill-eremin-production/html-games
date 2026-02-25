import { handleResize } from '@/shared/engine';
import { state } from '@/shared/state';

import { playerPlane } from '@/features/flight/player-system';
import { toggleTargetLock } from '@/features/hud/markers';

import { resumeAudio } from '../shared/audio';

import { exitExplorationMode } from './mode-manager';
import { getCurrentModeName } from './mode-registry';
import { pauseGame } from './pause';

function isActiveMode(): boolean {
  const mode = getCurrentModeName();
  return mode === 'combat' || mode === 'exploration' || mode === 'fps';
}

export function setupInputListeners(): void {
  window.addEventListener('keydown', (e) => {
    if (!isActiveMode()) return;
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
    if (!isActiveMode()) return;
    state.keys[e.code] = false;
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isActiveMode()) return;
    // Pointer lock — накапливаем дельту за кадр (FPS-контроллер обнулит после чтения)
    if (document.pointerLockElement) {
      state.mouseDeltaX += e.movementX;
      state.mouseDeltaY += e.movementY;
    } else {
      state.mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      state.mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }
    state.mouseActive = true;
  });

  window.addEventListener('mousedown', (e) => {
    if (isActiveMode()) {
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
