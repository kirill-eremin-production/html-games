import type { EngineSpriteMaterial } from '../../core';
import { Vector3 } from '../../core';
import { EXPLORATION_CONFIG } from '../../config/exploration';
import { state } from '../../state';
import { playerPlane } from '../../systems/player';
import { getExplorationDetail } from './index';
import { explorationRefs, planetMeshes } from './refs';

const _toPlanet = new Vector3();
const _forward = new Vector3();

export function updateExplorationScene(dt: number, elapsed: number): void {
  const detail = getExplorationDetail();
  if (!detail) return;

  // Animate planet orbits
  for (let i = 0; i < detail.planets.length; i++) {
    const p = detail.planets[i];
    const mesh = planetMeshes[i];
    if (!mesh) continue;

    const angle = p.initialAngle + elapsed * p.orbitalSpeed;
    mesh.position.x = p.orbitalDistance * Math.cos(angle);
    mesh.position.z = p.orbitalDistance * Math.sin(angle);

    // Self-rotation
    mesh.rotation.y += dt * 0.5;
  }

  // Star glow pulse
  if (explorationRefs.starGlow) {
    const mat = explorationRefs.starGlow.material as EngineSpriteMaterial;
    mat.opacity = 0.5 + Math.sin(elapsed * 2) * 0.1;
  }

  // Find nearest planet to player
  let minDist = Infinity;
  let nearestIdx = -1;
  for (let i = 0; i < planetMeshes.length; i++) {
    const d = playerPlane.position.distanceTo(planetMeshes[i].position);
    if (d < minDist) {
      minDist = d;
      nearestIdx = i;
    }
  }

  explorationRefs.nearestPlanetIndex =
    minDist < EXPLORATION_CONFIG.planetInfoDistance ? nearestIdx : -1;

  // Slow down near planets (exploration only)
  if (nearestIdx >= 0 && state.flightModel === 'exploration') {
    const planetRadius = planetMeshes[nearestIdx].scale.x;
    const slowdownDist = planetRadius * EXPLORATION_CONFIG.planetSlowdownMultiplier;
    if (minDist < slowdownDist) {
      // Only slow down when flying towards the planet, not away
      _toPlanet.copy(planetMeshes[nearestIdx].position).sub(playerPlane.position).normalize();
      _forward.set(1, 0, 0).applyQuaternion(playerPlane.quaternion);
      if (_forward.dot(_toPlanet) > 0) {
        state.speed = Math.min(state.speed, EXPLORATION_CONFIG.planetSlowdownMaxSpeed);
      }
    }
  }
}
