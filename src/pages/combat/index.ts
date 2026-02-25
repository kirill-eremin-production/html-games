import {
  initAudio,
  isAudioInitialized,
  resumeAudio,
  startEngineHum,
  startProximityHum,
  stopEngineHum,
  stopProximityHum,
} from '@/shared/audio';
import { applyCombatConfig } from '@/shared/config/combat-session';
import { refs } from '@/shared/refs/app-refs';
import { state } from '@/shared/state';
import type { CombatModeContext, GameModeHandler, GameSystem } from '@/shared/types';
import { cleanupSystems, initSystems, updateSystems } from '@/shared/types';

import { aiSystem } from '@/features/combat/ai-system';
import { capitalShipSystem } from '@/features/combat/capital-ship-system';
import { damageSystem } from '@/features/combat/damage-system';
import { spawnerSystem } from '@/features/combat/spawner-system';
import { playerPlane } from '@/features/flight/player-system';
import { flightCoreSystems, weaponSystems } from '@/features/flight/presets';
import { setStarfieldVisible } from '@/features/flight/starfield';
import { hideHUD, showHUD, showMessage } from '@/features/hud/hud';

import { clearExplorationScene, hideExploration } from '@/pages/exploration/scene/index';
import { updateExplorationScene } from '@/pages/exploration/scene/update';

import { checkVictory, playerDeath, setOnCombatEnd } from './combat-outcome';
import { resetCombatState, spawnCombatEntities } from './combat-setup';
import { combatHudSystem, damageEffectSystem, proximityAudioSystem } from './ui/combat-hud';

// ── Combat systems ──────────────────────────────────────────────────────────
// Add new combat mechanics here — each system handles its own init/update/cleanup.
// Order defines execution sequence within a single frame.

const combatSystems: GameSystem[] = [
  // Flight core: input → player movement → starfield parallax
  ...flightCoreSystems,
  // Weapons: bullet physics + hit detection, explosions
  ...weaponSystems,
  // Combat AI & entities
  aiSystem,
  capitalShipSystem,
  spawnerSystem,
  // Event-driven (no update, just init/cleanup for event handlers)
  damageSystem,
  // UI feedback systems
  proximityAudioSystem,
  damageEffectSystem,
  combatHudSystem,
];

// ── Mode handler ────────────────────────────────────────────────────────────

export const combatMode: GameModeHandler = {
  update(dt: number) {
    if (!state.running || refs.paused) return;

    // All game-logic + UI systems in declared order
    updateSystems(combatSystems, dt);

    // Exploration scene backdrop (animated star system)
    state.explorationTime += dt;
    updateExplorationScene(dt, state.explorationTime);

    // Win/lose checks
    if (state.playerHealth <= 0) playerDeath();
    checkVictory();

    if (!state.running) {
      stopEngineHum();
      stopProximityHum();
    }
  },

  enter(context?: CombatModeContext) {
    setOnCombatEnd(context?.onCombatEnd);
    if (context?.combatConfig) applyCombatConfig(context.combatConfig);

    if (!isAudioInitialized()) initAudio();
    resumeAudio();

    initSystems(combatSystems);
    resetCombatState();
    spawnCombatEntities();
    setStarfieldVisible(true);

    showHUD();
    startEngineHum();
    startProximityHum();
    state.running = true;
    showMessage('В БОЙ!', 2);
  },

  exit() {
    state.running = false;
    stopEngineHum();
    stopProximityHum();
    hideHUD();
    cleanupSystems(combatSystems);
    // Clean up exploration scene backdrop
    clearExplorationScene();
    hideExploration();
    playerPlane.setVisibleRecursive(false);
  },
};
