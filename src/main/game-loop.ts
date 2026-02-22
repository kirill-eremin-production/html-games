import { stopEngineHum, stopProximityHum, updateProximityHum } from '../audio/sound';
import { updateExplorationHud } from '../campaign/exploration-scene/hud';
import { updateExplorationScene } from '../campaign/exploration-scene/update';
import { updateTravelAnimation } from '../campaign/galaxy-controls';
import { updateGalaxyLabels, updateGalaxyScene } from '../campaign/galaxy-scene';
import { onCombatEnd } from '../campaign/mode-manager';
import { currentMode, isCampaignActive } from '../campaign/state';
import { combatConfig } from '../constants';
import { camera, renderer, scene } from '../scene/setup';
import { updateStarfieldPosition } from '../scene/starfield';
import { state } from '../state';
import { updateAllies, updateEnemies } from '../systems/ai';
import { updateBullets } from '../systems/bullets';
import { updateCapitalShips } from '../systems/capital-ships';
import { updateExplosions } from '../systems/explosions';
import { playerDeath as playerDeathOriginal, playerPlane, updatePlayer } from '../systems/player';
import { updateRespawnQueue } from '../systems/spawner';
import { hideMessage, updateHUD } from '../ui/hud';
import { updateEnemyIndicators } from '../ui/indicators';
import { updateKillFeed } from '../ui/kill-feed';
import { updateTargetMarkers } from '../ui/markers';
import { drawMinimap } from '../ui/minimap';
import { updatePlanetMarkers } from '../ui/planet-markers';
import { clock, refs } from './refs';

const TARGET_FPS = 60;
const FRAME_INTERVAL = 1000 / TARGET_FPS;

// ── Per-frame helpers ────────────────────────────────────────────────────────

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
  // If lives ran out and this is campaign mode, route to combat result
  if (state.lives <= 0 && isCampaignActive && !state.running) {
    // Hide game-over screen that playerDeathOriginal showed
    (document.getElementById('game-over')! as HTMLElement).style.display = 'none';
    onCombatEnd(false, state.score);
  }
}

// ── Game loop ────────────────────────────────────────────────────────────────

export function gameLoop(timestamp = 0): void {
  requestAnimationFrame(gameLoop);
  const elapsed = timestamp - refs.lastFrameTime;
  if (elapsed < FRAME_INTERVAL) return;
  refs.lastFrameTime = timestamp - (elapsed % FRAME_INTERVAL);
  const dt = Math.min(clock.getDelta(), 0.05);

  // Galaxy mode: update galaxy scene animations
  if (currentMode === 'galaxy') {
    updateGalaxyScene(dt);
    updateTravelAnimation(dt);
    updateGalaxyLabels(camera);
    renderer.render(scene, camera);
    return;
  }

  // Exploration mode: fly around star system (reuses combat player with shooting)
  if (currentMode === 'exploration') {
    refs.explorationTime += dt;
    updatePlayer(dt);
    updateBullets(dt);
    updateExplosions(dt);
    updateExplorationScene(dt, refs.explorationTime);
    updateExplorationHud();
    updateStarfieldPosition(playerPlane.position);

    refs.hudFrameCounter++;
    if (refs.hudFrameCounter % 2 === 0) {
      updateHUD();
      updatePlanetMarkers(playerPlane);
      drawMinimap(playerPlane);
    }

    if (state.messageTimer > 0) {
      state.messageTimer -= dt;
      if (state.messageTimer <= 0) hideMessage();
    }

    renderer.render(scene, camera);
    return;
  }

  // Non-combat modes: just render
  if (currentMode !== 'combat') {
    renderer.render(scene, camera);
    return;
  }

  // Combat mode
  if (!state.running || refs.paused) {
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

  // Update star system (planets orbiting) in combat too
  refs.explorationTime += dt;
  updateExplorationScene(dt, refs.explorationTime);
  updateStarfieldPosition(playerPlane.position);

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
    updateHUD();
    updateEnemyIndicators(playerPlane);
    updateTargetMarkers(playerPlane);
    updatePlanetMarkers(playerPlane);
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
