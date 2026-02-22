import * as THREE from 'three';
import { playerPlane } from '../../systems/player';
import { getExplorationDetail } from './index';
import { explorationRefs, planetMeshes } from './refs';

const INFO_DISTANCE = 40;

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
    const mat = explorationRefs.starGlow.material as THREE.SpriteMaterial;
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

  explorationRefs.nearestPlanetIndex = minDist < INFO_DISTANCE ? nearestIdx : -1;
}
