import {
  initAudio,
  isAudioInitialized,
  resumeAudio,
  startEngineHum,
  stopEngineHum,
} from '../audio/sound';
import {
  hideExplorationHud,
  setupExplorationHud,
  updateExplorationHud,
} from '../campaign/exploration-scene/hud';
import {
  buildExplorationScene,
  clearExplorationScene,
  ensureExplorationGroup,
  hideExploration,
  showExploration,
} from '../campaign/exploration-scene/index';
import { updateExplorationScene } from '../campaign/exploration-scene/update';
import { EXPLORATION_CONFIG } from '../config/exploration';
import { refs } from '../main/refs';
import { camera } from '../scene/setup';
import { setStarfieldVisible } from '../scene/starfield';
import { state } from '../state';
import { updateFlightHUD, updateMessageTimer } from '../systems/common-updates';
import { playerPlane, playerRotation } from '../systems/player';
import { flightCoreSystems, weaponSystems } from '../systems/presets';
import type { GameSystem } from '../systems/types';
import { cleanupSystems, updateSystems } from '../systems/types';
import { hideHUD, showHUD } from '../ui/hud';
import { hidePlanetMarkers } from '../ui/planet-markers';
import type { ExplorationModeContext, GameModeHandler } from './types';

// ── Exploration systems ─────────────────────────────────────────────────────
// No AI, no capital ships, no spawner, no damage — just flight + visuals

const explorationSystems: GameSystem[] = [...flightCoreSystems, ...weaponSystems];

function setHudExplorationMode(on: boolean): void {
  const hud = document.getElementById('hud');
  if (hud) {
    if (on) hud.classList.add('exploration-mode');
    else hud.classList.remove('exploration-mode');
  }
}

export const explorationMode: GameModeHandler = {
  update(dt: number) {
    // All game-logic systems in declared order
    updateSystems(explorationSystems, dt);

    // Exploration scene (planet orbits, star glow, proximity slowdown)
    refs.explorationTime += dt;
    updateExplorationScene(dt, refs.explorationTime);
    updateExplorationHud();

    refs.hudFrameCounter++;
    if (refs.hudFrameCounter % 2 === 0) {
      updateFlightHUD();
    }

    updateMessageTimer(dt);
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
    playerPlane.position.set(sx, sy, sz);
    playerPlane.quaternion.identity();
    playerRotation.pitch = 0;
    playerRotation.yaw = 0;
    playerRotation.roll = 0;
    playerPlane.visible = true;

    // Exploration speed
    state.baseSpeed = EXPLORATION_CONFIG.baseSpeed;
    state.boostSpeed = EXPLORATION_CONFIG.boostSpeed;
    state.speedDecay = false;
    state.speed = EXPLORATION_CONFIG.initialSpeed;
    state.mouseX = 0;
    state.mouseY = 0;
    state.shootCooldown = 0;
    state.damageFlash = 0;
    state.playerHealth = 100;
    refs.explorationTime = 0;

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
    playerPlane.visible = false;
  },
};
