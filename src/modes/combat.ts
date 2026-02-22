import * as THREE from 'three';
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
import type { CombatConfig } from '../campaign/types';
import { UI_CONFIG } from '../config/ui';
import { applyCombatConfig, combatConfig } from '../constants';
import { updateActions } from '../input';
import { refs } from '../main/refs';
import { createFighter } from '../scene/models';
import { camera, renderer, scene } from '../scene/setup';
import { parseHexColor, settings } from '../settings';
import { resetNameCounters, state } from '../state';
import { updateAllies, updateEnemies } from '../systems/ai';
import { spawnCapitalShips, updateCapitalShips } from '../systems/capital-ships';
import {
  updateFlightHUD,
  updateFlightSystems,
  updateMessageTimer,
} from '../systems/common-updates';
import { setupDamageHandlers, teardownDamageHandlers } from '../systems/damage';
import { playerDeath as playerDeathOriginal, playerPlane, playerRotation } from '../systems/player';
import { spawnAlly, spawnEnemy } from '../systems/spawner';
import { updateRespawnQueue } from '../systems/spawner';
import { hideHUD, resetCachedShipHTML, showHUD, showMessage } from '../ui/hud';
import { updateEnemyIndicators } from '../ui/indicators';
import { clearKillFeed, updateKillFeed } from '../ui/kill-feed';
import { updateTargetMarkers } from '../ui/markers';
import type { GameModeHandler, ModeContext } from './types';

// ── Combat objects cleanup ───────────────────────────────────────────────────

function clearCombatObjects(): void {
  for (const b of state.bullets) scene.remove(b.mesh);
  for (const b of state.allyBullets) scene.remove(b.mesh);
  for (const b of state.enemyBullets) scene.remove(b.mesh);
  for (const a of state.allies) scene.remove(a.mesh);
  for (const e of state.enemies) scene.remove(e.mesh);
  for (const cs of state.capitalShips) scene.remove(cs.mesh);
  for (const exp of state.explosions) {
    for (const p of exp.particles) {
      scene.remove(p.mesh);
      p.mesh.geometry.dispose();
      (p.mesh.material as THREE.Material).dispose();
    }
  }

  state.bullets = [];
  state.allyBullets = [];
  state.enemyBullets = [];
  state.allies = [];
  state.enemies = [];
  state.capitalShips = [];
  state.explosions = [];
  state.respawnQueue = [];
}

// ── Reset ────────────────────────────────────────────────────────────────────

function resetGame(): void {
  clearCombatObjects();
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

  // Use combatConfig for counts (overridden in campaign mode)
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

// ── Update helpers ───────────────────────────────────────────────────────────

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

// ── Mode handler ─────────────────────────────────────────────────────────────

export const combatMode: GameModeHandler = {
  update(dt: number) {
    if (!state.running || refs.paused) return;

    updateActions();
    updateFlightSystems(dt);
    updateAllies(dt, playerPlane);
    updateEnemies(dt, playerPlane);
    updateCapitalShips(dt);
    updateRespawnQueue(dt);

    refs.explorationTime += dt;
    updateExplorationScene(dt, refs.explorationTime);

    // Proximity engine sound — find closest fighter
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
    updateDamageEffect(dt);
    updateKillFeed(dt);

    refs.hudFrameCounter++;
    if (refs.hudFrameCounter % 2 === 0) {
      updateFlightHUD();
      updateEnemyIndicators(playerPlane);
      updateTargetMarkers(playerPlane);
    }

    updateMessageTimer(dt);

    if (state.playerHealth <= 0) playerDeath();
    checkVictory();

    if (!state.running) {
      stopEngineHum();
      stopProximityHum();
    }
  },

  enter(context?: ModeContext) {
    const config = context?.combatConfig as CombatConfig | undefined;
    if (config) applyCombatConfig(config);

    if (!isAudioInitialized()) initAudio();
    resumeAudio();

    setupDamageHandlers();
    resetGame();
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
    clearCombatObjects();
    teardownDamageHandlers();
    renderer.domElement.style.boxShadow = 'none';
  },
};
