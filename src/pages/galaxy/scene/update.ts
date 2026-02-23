import type { EngineLineMaterial, MeshBasicMaterial } from '@/shared/core';

import { galaxyCamera } from '../controls/camera';
import { campaign } from '@/features/campaign/state';

import {
  FAR_SCALE,
  NEARBY_SCALE,
  SCALE_LERP_SPEED,
  nearbySystemIds,
  pulse,
  rangeCircle,
  refs,
  starHalos,
  starMeshes,
  starScaleCurrent,
} from './refs';

export function updateGalaxyScene(dt: number): void {
  pulse.time += dt;

  // Update twinkle time for bright star overlay
  if (refs.brightStarsMat) refs.brightStarsMat.setFloat('uTime', pulse.time);

  // Current system halo pulse (opacity handled in the distance-fade loop below)
  const currentHalo = starHalos.get(campaign.currentSystemId);
  if (currentHalo) {
    const s = 3 + Math.sin(pulse.time * 3) * 0.5;
    currentHalo.size = s;
  }

  // Contract marker animation
  if (refs.contractMarker && refs.contractMarker.visible) {
    refs.contractMarker.rotation.y += dt * 2;
    refs.contractMarker.position.y =
      refs.contractMarker.userData.baseY + Math.sin(pulse.time * 4) * 0.5;
  }

  // Rotate player ship model gently
  if (refs.playerShipModel) {
    refs.playerShipModel.rotation.y += dt * 0.5;
  }

  // Selection ring pulse
  if (refs.selectionRing && refs.selectionRing.visible) {
    const mat = refs.selectionRing.material as MeshBasicMaterial;
    mat.opacity = 0.5 + Math.sin(pulse.time * 4) * 0.2;
  }

  // Range circle outline pulse
  if (rangeCircle.line?.material) {
    const mat = rangeCircle.line.material as EngineLineMaterial;
    mat.opacity = 0.4 + Math.sin(pulse.time * 2) * 0.15;
  }

  // Animate star scales (nearby = full, far = half)
  // Also fade out halos when they're close to camera to prevent screen-filling rectangles
  const HALO_FADE_FAR = 10; // full opacity at this distance
  const HALO_FADE_NEAR = 5; // fully hidden at this distance
  const camPos = galaxyCamera.position;

  for (const [id, mesh] of starMeshes) {
    const target = nearbySystemIds.has(id) ? NEARBY_SCALE : FAR_SCALE;
    const current = starScaleCurrent.get(id) ?? target;
    const diff = target - current;
    if (Math.abs(diff) > 0.005) {
      const next = current + diff * Math.min(1, dt * SCALE_LERP_SPEED);
      starScaleCurrent.set(id, next);
      mesh.scale.setAll(next);
    } else if (current !== target) {
      starScaleCurrent.set(id, target);
      mesh.scale.setAll(target);
    }

    // Distance-based halo fade — prevents giant sprite rectangles near camera
    const halo = starHalos.get(id);
    if (!halo) continue;
    const dx = camPos.x - mesh.position.x;
    const dy = camPos.y - mesh.position.y;
    const dz = camPos.z - mesh.position.z;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    const fade = Math.max(
      0,
      Math.min(1, (dist - HALO_FADE_NEAR) / (HALO_FADE_FAR - HALO_FADE_NEAR)),
    );

    if (id === campaign.currentSystemId) {
      // Current system has its own pulse — modulate by fade
      halo.color.a = fade * (0.8 + Math.sin(pulse.time * 3) * 0.2);
    } else {
      const s = starScaleCurrent.get(id) ?? target;
      halo.size = 2.5 * s;
      halo.color.a = fade * 0.7;
    }
  }
}
