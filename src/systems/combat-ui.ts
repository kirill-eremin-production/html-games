import { updateProximityHum } from '../audio';

import { UI_CONFIG } from '../config/ui';
import { renderer } from '../scene/setup';
import { state } from '@/shared/state';
import { updateEnemyIndicators } from '../ui/indicators';
import { updateKillFeed } from '../ui/kill-feed';
import { updateTargetMarkers } from '../ui/markers';

import { updateFlightHUD, updateMessageTimer } from './common-updates';
import { playerPlane } from './player';
import type { GameSystem } from './types';

// ── Damage flash & low-health pulse ─────────────────────────────────────────

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

export const damageEffectSystem: GameSystem = {
  id: 'damage-effect',
  update(dt) {
    updateDamageEffect(dt);
  },
  cleanup() {
    renderer.domElement.style.boxShadow = 'none';
  },
};

// ── Proximity audio (fly-by hum based on nearest fighter) ────────────────────

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

export const proximityAudioSystem: GameSystem = {
  id: 'proximity-audio',
  update() {
    updateProximityAudio();
  },
};

// ── Combat HUD (throttled to every 2nd frame) ───────────────────────────────

export const combatHudSystem: GameSystem = {
  id: 'combat-hud',
  update(dt) {
    updateKillFeed(dt);

    state.hudFrameCounter++;
    if (state.hudFrameCounter % 2 === 0) {
      updateFlightHUD();
      updateEnemyIndicators(playerPlane);
      updateTargetMarkers(playerPlane);
    }

    updateMessageTimer(dt);
  },
};
