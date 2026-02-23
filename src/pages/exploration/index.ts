import {
  initAudio,
  isAudioInitialized,
  resumeAudio,
  startEngineHum,
  stopEngineHum,
} from '@/shared/audio';
import { EXPLORATION_CONFIG } from '@/shared/config/exploration';
import { camera } from '@/shared/engine';
import { state } from '@/shared/state';
import type { ExplorationModeContext, GameModeHandler, GameSystem } from '@/shared/types';
import { cleanupSystems, updateSystems } from '@/shared/types';

import { playerPlane, resetPlayerTransform } from '@/features/flight/player-system';
import { flightCoreSystems } from '@/features/flight/presets';
import { setStarfieldVisible } from '@/features/flight/starfield';
import { hideHUD, showHUD } from '@/features/hud/hud';

import { hideExplorationHud, setupExplorationHud } from './scene/hud';
import {
  buildExplorationScene,
  clearExplorationScene,
  ensureExplorationGroup,
  hideExploration,
  showExploration,
} from './scene/index';
import { explorationHudSystem, explorationSceneSystem } from './ui/exploration-hud';
import { hidePlanetMarkers } from './ui/planet-markers';

// ── Exploration systems ─────────────────────────────────────────────────────
// No AI, no capital ships, no spawner, no damage — just flight + scene + HUD

const explorationSystems: GameSystem[] = [
  ...flightCoreSystems,
  explorationSceneSystem,
  explorationHudSystem,
];

function setHudExplorationMode(on: boolean): void {
  const hud = document.getElementById('hud');
  if (hud) {
    if (on) hud.classList.add('exploration-mode');
    else hud.classList.remove('exploration-mode');
  }
}

export const explorationMode: GameModeHandler = {
  update(dt: number) {
    updateSystems(explorationSystems, dt);
  },

  enter(context?: ExplorationModeContext) {
    const systemId = context?.systemId;
    const exitCallback = context?.exitCallback;

    ensureExplorationGroup();
    if (systemId) buildExplorationScene(systemId);
    showExploration();
    setStarfieldVisible(true);

    // Position player
    const [sx, sy, sz] = EXPLORATION_CONFIG.startPosition;
    resetPlayerTransform(sx, sy, sz);

    // Exploration speed
    state.baseSpeed = EXPLORATION_CONFIG.baseSpeed;
    state.boostSpeed = EXPLORATION_CONFIG.boostSpeed;
    state.flightModel = 'exploration';
    state.speed = EXPLORATION_CONFIG.initialSpeed;
    state.mouseX = 0;
    state.mouseY = 0;
    state.shootCooldown = 0;
    state.damageFlash = 0;
    state.playerHealth = 100;
    state.explorationTime = 0;

    // Camera
    camera.near = 1;
    camera.updateProjectionMatrix();
    camera.position.set(sx - 10.5, sy + 3.75, sz);
    camera.lookAt(playerPlane.position);

    // HUD
    showHUD();
    setHudExplorationMode(true);

    if (exitCallback) setupExplorationHud(exitCallback);

    // Audio
    if (!isAudioInitialized()) initAudio();
    resumeAudio();
    startEngineHum();
  },

  exit() {
    hideExplorationHud();
    hideExploration();
    clearExplorationScene();
    hidePlanetMarkers();
    setHudExplorationMode(false);
    hideHUD();
    stopEngineHum();
    cleanupSystems(explorationSystems);
    playerPlane.setVisibleRecursive(false);
  },
};
