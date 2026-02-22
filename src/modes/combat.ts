import { stopEngineHum, stopProximityHum, updateProximityHum } from '../audio/sound';
import { updateExplorationScene } from '../campaign/exploration-scene/update';
import { onCombatEnd } from '../campaign/mode-manager';
import { isCampaignActive } from '../campaign/state';
import { UI_CONFIG } from '../config/ui';
import { combatConfig } from '../constants';
import { refs } from '../main/refs';
import { renderer } from '../scene/setup';
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
import type { GameModeHandler } from './types';

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

export const combatMode: GameModeHandler = {
  update(dt: number) {
    if (!state.running || refs.paused) return;

    updatePlayer(dt);
    updateAllies(dt, playerPlane);
    updateEnemies(dt, playerPlane);
    updateCapitalShips(dt);
    updateBullets(dt);
    updateExplosions(dt);
    updateRespawnQueue(dt);

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
  },
  enter() {},
  exit() {},
};
