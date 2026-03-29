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
  return (
    mode === 'combat' ||
    mode === 'exploration' ||
    mode === 'fps' ||
    mode === 'builder' ||
    mode === 'interior-builder' ||
    mode === 'interior-scene'
  );
}

export function setupInputListeners(): void {
  window.addEventListener('keydown', (e) => {
    if (!isActiveMode()) return;
    if (e.code === 'Escape' || e.code === 'KeyP') {
      if (getCurrentModeName() === 'exploration') {
        exitExplorationMode();
        return;
      }
      const currentMode = getCurrentModeName();
      if (
        currentMode === 'builder' ||
        currentMode === 'interior-builder' ||
        currentMode === 'interior-scene'
      ) {
        // Эти режимы обрабатывают ESC и P самостоятельно через state.keys
        state.keys[e.code] = true;
        e.preventDefault();
        return;
      }
      pauseGame();
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
      if (e.button === 2) state.keys['MouseRight'] = true;
      if (e.button === 1 && (state.running || getCurrentModeName() === 'exploration')) {
        e.preventDefault();
        toggleTargetLock(playerPlane);
      }
      // Авто-захват pointer lock при клике в FPS-режимах
      const m = getCurrentModeName();
      if (
        !document.pointerLockElement &&
        (m === 'fps' || m === 'builder' || m === 'interior-builder' || m === 'interior-scene')
      ) {
        document.body.requestPointerLock();
      }
    }
    resumeAudio();
  });

  window.addEventListener('mouseup', (e) => {
    if (e.button === 0) state.keys['MouseLeft'] = false;
    if (e.button === 2) state.keys['MouseRight'] = false;
  });

  // Отключить контекстное меню (ПКМ) в builder mode
  window.addEventListener('contextmenu', (e) => {
    const m = getCurrentModeName();
    if (m === 'builder' || m === 'interior-builder') e.preventDefault();
  });

  window.addEventListener('keydown', () => resumeAudio(), { once: true });
  window.addEventListener('resize', handleResize);
}
