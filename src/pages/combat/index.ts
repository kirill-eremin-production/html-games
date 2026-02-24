import {
  initAudio,
  isAudioInitialized,
  resumeAudio,
  startEngineHum,
  startProximityHum,
  stopEngineHum,
  stopProximityHum,
} from '@/shared/audio';
import { applyCombatConfig, combatConfig } from '@/shared/config/combat-session';
import { camera } from '@/shared/engine';
import { refs } from '@/shared/refs/app-refs';
import { parseHexColor, settings } from '@/shared/settings';
import { resetNameCounters, state } from '@/shared/state';
import type { CombatModeContext, GameModeHandler, GameSystem } from '@/shared/types';
import { cleanupSystems, initSystems, updateSystems } from '@/shared/types';

import { capitalShipSystem, spawnCapitalShips } from '@/entities/capital-ship/capital-ship-system';
import { createFighter } from '@/entities/fighter';

import { isCampaignActive } from '@/features/campaign/state';
import { aiSystem } from '@/features/combat/ai-system';
import { damageSystem } from '@/features/combat/damage-system';
import { spawnAlly, spawnEnemy, spawnerSystem } from '@/features/combat/spawner-system';
import {
  playerDeath as playerDeathOriginal,
  playerPlane,
  resetPlayerTransform,
} from '@/features/flight/player-system';
import { flightCoreSystems, weaponSystems } from '@/features/flight/presets';
import { setStarfieldVisible } from '@/features/flight/starfield';
import { hideHUD, resetCachedShipHTML, showHUD, showMessage } from '@/features/hud/hud';
import { clearKillFeed } from '@/features/hud/kill-feed';

import { clearExplorationScene, hideExploration } from '@/pages/exploration/scene/index';
import { updateExplorationScene } from '@/pages/exploration/scene/update';

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

let _onCombatEnd: ((victory: boolean, score: number) => void) | undefined;

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
  camera.setTarget(playerPlane.position);

  // Rebuild player model with current settings colors
  if (refs.playerModel) refs.playerModel.dispose();
  refs.playerModel = createFighter(
    parseHexColor(settings.colors.playerBody),
    parseHexColor(settings.colors.playerExhaust),
  );
  refs.playerModel.parent = playerPlane;
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
    if (isCampaignActive && _onCombatEnd) {
      _onCombatEnd(true, state.score);
    } else if (!isCampaignActive) {
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
    _onCombatEnd?.(false, state.score);
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
    _onCombatEnd = context?.onCombatEnd;
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
