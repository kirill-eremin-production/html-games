import * as THREE from 'three';
import {
  initAudio,
  isAudioInitialized,
  resumeAudio,
  startEngineHum,
  startProximityHum,
  stopEngineHum,
  stopProximityHum,
} from '../audio/sound';
import { DEFAULT_COMBAT_CONFIG } from '../campaign/balance';
import {
  enterCampaignFromMenu,
  onCombatQuit,
  registerCombatCallbacks,
} from '../campaign/mode-manager';
import { isCampaignActive, setMode } from '../campaign/state';
import type { CombatConfig } from '../campaign/types';
import { applyCombatConfig, combatConfig } from '../constants';
import { createFighter } from '../scene/models';
import { camera, scene } from '../scene/setup';
import { parseHexColor, settings } from '../settings';
import { resetNameCounters, state } from '../state';
import { spawnCapitalShips } from '../systems/capital-ships';
import { playerPlane, playerRotation } from '../systems/player';
import { spawnAlly, spawnEnemy } from '../systems/spawner';
import { hideHUD, resetCachedShipHTML, showHUD, showMessage } from '../ui/hud';
import { clearKillFeed } from '../ui/kill-feed';
import { clock, pauseScreen, refs } from './refs';

// ── Pause ────────────────────────────────────────────────────────────────────

export function pauseGame(): void {
  if (!state.running || refs.paused) return;
  refs.paused = true;
  pauseScreen.style.display = 'flex';
  document.exitFullscreen?.();
}

export function resumeGame(): void {
  if (!refs.paused) return;
  document.documentElement.requestFullscreen?.();
  refs.paused = false;
  pauseScreen.style.display = 'none';
  clock.getDelta(); // discard elapsed time while paused
}

export function quitBattle(): void {
  refs.paused = false;
  pauseScreen.style.display = 'none';
  if (isCampaignActive) {
    onCombatQuit();
  } else {
    stopCombat();
    (document.getElementById('start-screen')! as HTMLElement).style.display = 'flex';
  }
}

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

// ── Start / Stop ─────────────────────────────────────────────────────────────

export function startQuickPlay(): void {
  document.documentElement.requestFullscreen?.();
  refs.paused = false;
  pauseScreen.style.display = 'none';
  (document.getElementById('start-screen')! as HTMLElement).style.display = 'none';
  (document.getElementById('game-over')! as HTMLElement).style.display = 'none';
  (document.getElementById('victory-screen')! as HTMLElement).style.display = 'none';
  if (!isAudioInitialized()) initAudio();
  resumeAudio();
  applyCombatConfig(DEFAULT_COMBAT_CONFIG);
  setMode('combat');
  resetGame();
  showHUD();
  startEngineHum();
  startProximityHum();
  state.running = true;
  showMessage('В БОЙ!', 2);
}

function startCampaignCombat(config: CombatConfig): void {
  document.documentElement.requestFullscreen?.();
  refs.paused = false;
  pauseScreen.style.display = 'none';
  if (!isAudioInitialized()) initAudio();
  resumeAudio();
  applyCombatConfig(config);
  setMode('combat');
  resetGame();
  showHUD();
  startEngineHum();
  startProximityHum();
  state.running = true;
  showMessage('В БОЙ!', 2);
}

export function stopCombat(): void {
  state.running = false;
  stopEngineHum();
  stopProximityHum();
  hideHUD();
  clearCombatObjects();
}

// Register callbacks for mode manager
registerCombatCallbacks(startCampaignCombat, stopCombat);

// ── Campaign ─────────────────────────────────────────────────────────────────

export function startCampaign(): void {
  (document.getElementById('start-screen')! as HTMLElement).style.display = 'none';
  if (!isAudioInitialized()) initAudio();
  resumeAudio();
  enterCampaignFromMenu();
}
