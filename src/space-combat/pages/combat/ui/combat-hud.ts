import { updateProximityHum } from '@/shared/audio';
import { UI_CONFIG } from '@/shared/config/ui';
import { renderer } from '@/shared/engine';
import { state } from '@/shared/state';
import type { GameSystem } from '@/shared/types';

import { queryAllFighters } from '@/entities/ecs-queries';

import { updateFlightHUD, updateMessageTimer } from '@/features/combat/common-updates';
import { playerPlane } from '@/features/flight/player-system';
import { updateEnemyIndicators } from '@/features/hud/indicators';
import { updateKillFeed } from '@/features/hud/kill-feed';
import { updateTargetMarkers } from '@/features/hud/markers';

import { updatePlanetMarkers } from '@/pages/exploration/ui/planet-markers';

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
  const fighters = queryAllFighters();
  for (const f of fighters) {
    const dSq = playerPlane.position.distanceToSquared(f.transform.position);
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
      updatePlanetMarkers(playerPlane);
      updateEnemyIndicators(playerPlane);
      updateTargetMarkers(playerPlane);
    }

    updateMessageTimer(dt);
  },
};
