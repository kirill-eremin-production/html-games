import {
  initAudio,
  isAudioInitialized,
  resumeAudio,
  startEngineHum,
  startProximityHum,
  stopEngineHum,
  stopProximityHum,
  updateProximityHum,
} from '../audio/sound';
import { updateExplorationScene } from '../campaign/exploration-scene/update';
import { onCombatEnd } from '../campaign/mode-manager';
import { isCampaignActive } from '../campaign/state';
import { UI_CONFIG } from '../config/ui';
import { applyCombatConfig, combatConfig } from '../constants';
import { refs } from '../main/refs';
import { createFighter } from '../scene/models';
import { camera, renderer } from '../scene/setup';
import { parseHexColor, settings } from '../settings';
import { resetNameCounters, state } from '../state';
import { aiSystem } from '../systems/ai';
import { capitalShipSystem, spawnCapitalShips } from '../systems/capital-ships';
import { updateFlightHUD, updateMessageTimer } from '../systems/common-updates';
import { damageSystem } from '../systems/damage';
import { playerDeath as playerDeathOriginal, playerPlane, playerRotation } from '../systems/player';
import { flightCoreSystems, weaponSystems } from '../systems/presets';
import { spawnAlly, spawnEnemy, spawnerSystem } from '../systems/spawner';
import type { GameSystem } from '../systems/types';
import { cleanupSystems, initSystems, updateSystems } from '../systems/types';
import { hideHUD, resetCachedShipHTML, showHUD, showMessage } from '../ui/hud';
import { updateEnemyIndicators } from '../ui/indicators';
import { clearKillFeed, updateKillFeed } from '../ui/kill-feed';
import { updateTargetMarkers } from '../ui/markers';
import type { CombatModeContext, GameModeHandler } from './types';

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
  state.speedDecay = true;
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
  resetCachedShipHTML();
  resetNameCounters();
  clearKillFeed();

  playerPlane.position.set(0, 0, 0);
  playerPlane.quaternion.identity();
  playerPlane.visible = true;
  playerRotation.pitch = 0;
  playerRotation.yaw = 0;
  playerRotation.roll = 0;
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

// ── Combat UI updates (not game systems — visual feedback only) ─────────────

function updateDamageEffect(dt: number): void {
  const D = UI_CONFIG.damageEffect;
  if (state.damageFlash > 0) {
    state.damageFlash -= dt;
    renderer.domElement.style.boxShadow = `inset 0 0 ${D.flashGlowSize * state.damageFlash}px rgba(255,0,0,${state.damageFlash})`;
  } else {
    renderer.domElement.style.boxShadow = 'none';
  }
  if (state.playerHealth < D.lowHealthThreshold && state.running) {
    const pulse = Math.sin(Date.now() * D.lowHealthPulseSpeed) * 0.5 + 0.5;
    renderer.domElement.style.boxShadow = `inset 0 0 ${D.lowHealthGlowSize * pulse}px rgba(255,0,0,${D.lowHealthGlowOpacity * pulse})`;
  }
}

function updateProximityAudio(): void {
  let minDistSq = Infinity;
  for (const a of state.allies) {
    const dSq = playerPlane.position.distanceToSquared(a.mesh.position);
    if (dSq < minDistSq) minDistSq = dSq;
  }
  for (const e of state.enemies) {
    const dSq = playerPlane.position.distanceToSquared(e.mesh.position);
    if (dSq < minDistSq) minDistSq = dSq;
  }
  updateProximityHum(minDistSq);
}

function updateCombatUI(dt: number): void {
  updateProximityAudio();
  updateDamageEffect(dt);
  updateKillFeed(dt);

  refs.hudFrameCounter++;
  if (refs.hudFrameCounter % 2 === 0) {
    updateFlightHUD();
    updateEnemyIndicators(playerPlane);
    updateTargetMarkers(playerPlane);
  }

  updateMessageTimer(dt);
}

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

    // All game-logic systems in declared order
    updateSystems(combatSystems, dt);

    // Exploration scene backdrop (animated star system)
    refs.explorationTime += dt;
    updateExplorationScene(dt, refs.explorationTime);

    // UI feedback & HUD
    updateCombatUI(dt);

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
    renderer.domElement.style.boxShadow = 'none';
  },
};
