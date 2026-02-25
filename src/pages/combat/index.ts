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
import { world } from '@/shared/ecs';
import { refs } from '@/shared/refs/app-refs';
import { state } from '@/shared/state';
import type { CombatModeContext, GameModeHandler } from '@/shared/types';

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

// ── Combat systems registration ──────────────────────────────────────────────
// Системы регистрируются в world.scheduler с приоритетами.
// Меньший приоритет = раньше выполняется в кадре.

function registerCombatSystems(): void {
  const { scheduler } = world;

  // Flight core: input → player movement → starfield parallax (0–20)
  scheduler.addMany(flightCoreSystems, 0, 10);
  // Weapons: bullet physics + hit detection, explosions (100–110)
  scheduler.addMany(weaponSystems, 100, 10);
  // Combat AI & entities (200–220)
  scheduler.add(aiSystem, 200);
  scheduler.add(capitalShipSystem, 210);
  scheduler.add(spawnerSystem, 220);
  // Event-driven (no update, just init/cleanup for event handlers)
  scheduler.add(damageSystem, 300);
  // UI feedback systems (400–420)
  scheduler.add(proximityAudioSystem, 400);
  scheduler.add(damageEffectSystem, 410);
  scheduler.add(combatHudSystem, 420);
}

// ── Mode handler ────────────────────────────────────────────────────────────

export const combatMode: GameModeHandler = {
  update(dt: number) {
    if (!state.running || refs.paused) return;

    // All game-logic + UI systems in priority order
    world.update(dt);

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

    // resetCombatState() вызывает resetWorld() → new World(),
    // поэтому системы регистрируем ПОСЛЕ reset
    resetCombatState();
    registerCombatSystems();
    world.scheduler.init();
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
    world.scheduler.cleanup();
    // Clean up exploration scene backdrop
    clearExplorationScene();
    hideExploration();
    playerPlane.setVisibleRecursive(false);
  },
};
