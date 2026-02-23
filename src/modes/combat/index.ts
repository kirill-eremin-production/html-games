import {
  initAudio,
  isAudioInitialized,
  resumeAudio,
  startEngineHum,
  startProximityHum,
  stopEngineHum,
  stopProximityHum,
} from '@/audio';
import { clearExplorationScene, hideExploration } from '@/campaign/exploration-scene/index';
import { updateExplorationScene } from '@/campaign/exploration-scene/update';
import { onCombatEnd } from '@/campaign/mode-manager';
import { isCampaignActive } from '@/campaign/state';
import { applyCombatConfig, combatConfig } from '@/config/combat-session';
import { refs } from '@/main/refs';
import { createFighter } from '@/scene/models';
import { camera } from '@/scene/setup';
import { parseHexColor, settings } from '@/shared/settings';
import { resetNameCounters, state } from '@/shared/state';
import { aiSystem } from '@/systems/ai';
import { capitalShipSystem, spawnCapitalShips } from '@/systems/capital-ships';
import { combatHudSystem, damageEffectSystem, proximityAudioSystem } from '@/systems/combat-ui';
import { damageSystem } from '@/systems/damage';
import {
  playerDeath as playerDeathOriginal,
  playerPlane,
  resetPlayerTransform,
} from '@/systems/player';
import { flightCoreSystems, weaponSystems } from '@/systems/presets';
import { spawnAlly, spawnEnemy, spawnerSystem } from '@/systems/spawner';
import type { GameSystem } from '@/systems/types';
import { cleanupSystems, initSystems, updateSystems } from '@/systems/types';
import { hideHUD, resetCachedShipHTML, showHUD, showMessage } from '@/ui/hud';
import { clearKillFeed } from '@/ui/kill-feed';

import { setStarfieldVisible } from '@/scene/starfield';
import type { CombatModeContext, GameModeHandler } from '../types';

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

// ── State reset ─────────────────────────────────────────────────────────────

function resetCombatState(): void {
  state.killFeed = [];
  state.phase = 1;
  state.score = 0;
  state.lives = 5;
  state.playerHealth = 100;
  state.totalEnemyKills = 0;
  state.lastAttacker = '';
  state.baseSpeed = 80;
  state.boostSpeed = 160;
  state.flightModel = 'combat';
  state.speed = state.baseSpeed;
  state.shootCooldown = 0;
  state.messageTimer = 0;
  state.damageFlash = 0;
  state.noDamageTimer = 0;
  state.invulnTimer = 0;
  state.keys = {};
  state.mouseX = 0;
  state.mouseY = 0;
  state.lockedTarget = null;
  state.explorationTime = 0;
  resetCachedShipHTML();
  resetNameCounters();
  clearKillFeed();

  resetPlayerTransform();
  camera.position.set(-10.5, 3.75, 0);
  camera.lookAt(playerPlane.position);

  // Rebuild player model with current settings colors
  if (refs.playerModel) playerPlane.remove(refs.playerModel);
  refs.playerModel = createFighter(
    parseHexColor(settings.colors.playerBody),
    parseHexColor(settings.colors.playerExhaust),
  );
  playerPlane.add(refs.playerModel);
}

function spawnCombatEntities(): void {
  const csCount = Math.min(combatConfig.capitalShips, 5);
  settings.counts.capitalShips = csCount;
  spawnCapitalShips();

  const allyCount = combatConfig.allies;
  for (let i = 0; i < allyCount; i++) spawnAlly(playerPlane.position);

  const enemyCount = combatConfig.enemies;
  for (let i = 0; i < enemyCount; i++) {
    const shipIdx = i % Math.max(1, state.capitalShips.length);
    spawnEnemy(state.capitalShips[shipIdx].mesh.position);
  }
}

// ── Win/lose checks ──────────────────────────────────────────────────────────

function checkVictory(): void {
  if (state.phase === 1) return;
  if (state.phase === 2 && state.totalEnemyKills >= combatConfig.killTarget) {
    state.running = false;
    if (isCampaignActive) {
      onCombatEnd(true, state.score);
    } else {
      document.getElementById('victory-score')!.textContent =
        `Счёт: ${state.score} | Уничтожено: ${state.totalEnemyKills}`;
      (document.getElementById('victory-screen')! as HTMLElement).style.display = 'flex';
    }
  }
}

function playerDeath(): void {
  playerDeathOriginal();
  if (state.lives <= 0 && isCampaignActive && !state.running) {
    (document.getElementById('game-over')! as HTMLElement).style.display = 'none';
    onCombatEnd(false, state.score);
  }
}

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
  },
};
