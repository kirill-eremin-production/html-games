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
} from './audio/sound';
import { createFighter } from './scene/models';
import { camera, handleResize, renderer, scene } from './scene/setup';
import { createNebulae, createStarfield } from './scene/starfield';
import { parseHexColor, settings } from './settings';
import { resetNameCounters, state } from './state';
import './styles/main.css';
import { updateAllies, updateEnemies } from './systems/ai';
import { updateBullets } from './systems/bullets';
import { spawnCapitalShips, updateCapitalShips } from './systems/capital-ships';
import { updateExplosions } from './systems/explosions';
import { playerDeath, playerPlane, playerRotation, updatePlayer } from './systems/player';
import { spawnAlly, spawnEnemy, updateRespawnQueue } from './systems/spawner';
import { hideMessage, resetCachedShipHTML, showMessage, updateHUD } from './ui/hud';
import { updateEnemyIndicators } from './ui/indicators';
import { clearKillFeed, updateKillFeed } from './ui/kill-feed';
import { updateTargetMarkers } from './ui/markers';
import { drawMinimap } from './ui/minimap';
import { showSettingsScreen } from './ui/settings-ui';
import { initTouchControls } from './ui/touch-controls';

// Build player model
let playerModel = createFighter(
  parseHexColor(settings.colors.playerBody),
  parseHexColor(settings.colors.playerExhaust),
);
playerPlane.add(playerModel);
scene.add(playerPlane);
playerPlane.position.set(0, 0, 0);

// Pause
let paused = false;
const pauseScreen = document.getElementById('pause-screen')! as HTMLElement;

function pauseGame(): void {
  if (!state.running || paused) return;
  paused = true;
  pauseScreen.style.display = 'flex';
  document.exitFullscreen?.();
}

function resumeGame(): void {
  if (!paused) return;
  document.documentElement.requestFullscreen?.();
  paused = false;
  pauseScreen.style.display = 'none';
  clock.getDelta(); // discard elapsed time while paused
}

document.getElementById('resume-btn')!.addEventListener('click', resumeGame);

// Input
window.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' || e.code === 'KeyP') {
    pauseGame();
    return;
  }
  state.keys[e.code] = true;
  e.preventDefault();
});
window.addEventListener('keyup', (e) => {
  state.keys[e.code] = false;
  e.preventDefault();
});
window.addEventListener('mousemove', (e) => {
  state.mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  state.mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  state.mouseActive = true;
});
window.addEventListener('mousedown', (e) => {
  if (e.button === 0) state.keys['MouseLeft'] = true;
  resumeAudio();
});
window.addEventListener('mouseup', (e) => {
  if (e.button === 0) state.keys['MouseLeft'] = false;
});
window.addEventListener('keydown', () => resumeAudio(), { once: true });
window.addEventListener('resize', handleResize);

// Damage effect
function updateDamageEffect(dt: number): void {
  if (state.damageFlash > 0) {
    state.damageFlash -= dt;
    renderer.domElement.style.boxShadow = `inset 0 0 ${80 * state.damageFlash}px rgba(255,0,0,${state.damageFlash})`;
  } else {
    renderer.domElement.style.boxShadow = 'none';
  }
  if (state.playerHealth < 30 && state.running) {
    const pulse = Math.sin(Date.now() * 0.01) * 0.5 + 0.5;
    renderer.domElement.style.boxShadow = `inset 0 0 ${30 * pulse}px rgba(255,0,0,${0.3 * pulse})`;
  }
}

// Victory check
function checkVictory(): void {
  if (state.phase === 1) return;
  if (state.phase === 2 && state.totalEnemyKills >= 100) {
    state.running = false;
    document.getElementById('victory-score')!.textContent =
      `Счёт: ${state.score} | Уничтожено: ${state.totalEnemyKills}`;
    (document.getElementById('victory-screen')! as HTMLElement).style.display = 'flex';
  }
}

// Game loop
const clock = new THREE.Clock();
const TARGET_FPS = 60;
const FRAME_INTERVAL = 1000 / TARGET_FPS;
let lastFrameTime = 0;
let hudFrameCounter = 0;

function gameLoop(timestamp = 0): void {
  requestAnimationFrame(gameLoop);
  const elapsed = timestamp - lastFrameTime;
  if (elapsed < FRAME_INTERVAL) return;
  lastFrameTime = timestamp - (elapsed % FRAME_INTERVAL);
  const dt = Math.min(clock.getDelta(), 0.05);

  if (!state.running || paused) {
    renderer.render(scene, camera);
    return;
  }

  updatePlayer(dt);
  updateAllies(dt, playerPlane);
  updateEnemies(dt, playerPlane);
  updateCapitalShips(dt);
  updateBullets(dt);
  updateExplosions(dt);
  updateRespawnQueue(dt);

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

  hudFrameCounter++;
  if (hudFrameCounter % 2 === 0) {
    updateHUD();
    updateEnemyIndicators(playerPlane);
    updateTargetMarkers(playerPlane);
    drawMinimap(playerPlane);
  }

  if (state.messageTimer > 0) {
    state.messageTimer -= dt;
    if (state.messageTimer <= 0) hideMessage();
  }

  if (state.playerHealth <= 0) playerDeath();
  checkVictory();

  if (!state.running) {
    stopEngineHum();
    stopProximityHum();
  }

  renderer.render(scene, camera);
}

// Reset game
function resetGame(): void {
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
  resetCachedShipHTML();
  resetNameCounters();
  clearKillFeed();

  playerPlane.position.set(0, 0, 0);
  playerPlane.quaternion.identity();
  playerPlane.visible = true;
  playerRotation.pitch = 0;
  playerRotation.yaw = 0;
  playerRotation.roll = 0;
  camera.position.set(-14, 5, 0);
  camera.lookAt(playerPlane.position);

  // Rebuild player model with current settings colors
  playerPlane.remove(playerModel);
  playerModel = createFighter(
    parseHexColor(settings.colors.playerBody),
    parseHexColor(settings.colors.playerExhaust),
  );
  playerPlane.add(playerModel);

  spawnCapitalShips();
  for (let i = 0; i < settings.counts.allies; i++) spawnAlly(playerPlane.position);
  for (let i = 0; i < settings.counts.enemies; i++) {
    const shipIdx = i % state.capitalShips.length;
    spawnEnemy(state.capitalShips[shipIdx].mesh.position);
  }
}

function startGame(): void {
  document.documentElement.requestFullscreen?.();
  paused = false;
  pauseScreen.style.display = 'none';
  (document.getElementById('start-screen')! as HTMLElement).style.display = 'none';
  (document.getElementById('game-over')! as HTMLElement).style.display = 'none';
  (document.getElementById('victory-screen')! as HTMLElement).style.display = 'none';
  if (!isAudioInitialized()) initAudio();
  resumeAudio();
  resetGame();
  startEngineHum();
  startProximityHum();
  state.running = true;
  showMessage('В БОЙ!', 2);
}

// Init
createStarfield();
createNebulae();
camera.position.set(-14, 5, 0);
camera.lookAt(0, 0, 0);

document.getElementById('start-btn')!.addEventListener('click', startGame);
document.getElementById('restart-btn')!.addEventListener('click', startGame);
document.getElementById('victory-restart-btn')!.addEventListener('click', startGame);
document.getElementById('settings-btn')!.addEventListener('click', showSettingsScreen);

initTouchControls(pauseGame);

clock.start();
gameLoop();
