import { EXPLORATION_CONFIG } from '@/shared/config/exploration';
import {
  addToScene,
  createAmbientLight,
  createMesh,
  createPBRMaterial,
  createPointLight,
  createRingGeometry,
  createSphereGeometry,
  createUnlitMaterial,
} from '@/shared/core';
import { createIcosahedronGeometry } from '@/shared/core';
import {
  asteroidMeshes,
  explorationGroup,
  explorationRefs,
  planetMeshes,
} from '@/shared/refs/exploration-refs';

import { getSystemDetail, mulberry32 } from '@/features/campaign/data';
import type { SystemDetail } from '@/features/campaign/types';

const GALAXY_SEED = 42;

let explorationAdded = false;

export function ensureExplorationGroup(): void {
  if (!explorationAdded) {
    addToScene(explorationGroup);
    explorationAdded = true;
  }
}

// Shared geometries
const planetGeo = createSphereGeometry(1, 32, 32);
const asteroidGeo = createIcosahedronGeometry(1, 0);

let currentDetail: SystemDetail | null = null;

export function buildExplorationScene(systemId: string): void {
  clearExplorationScene();
  const detail = getSystemDetail(systemId);
  currentDetail = detail;

  const idx = systemId === 'solaris' ? 0 : parseInt(systemId.split('-')[1], 10);

  // Ambient light for the star system
  const ambient = createAmbientLight(0x222244, 0.3);
  explorationGroup.add(ambient);

  // Central star — massive
  const starRadius = detail.starSize * EXPLORATION_CONFIG.starRadiusMultiplier;
  const starMesh = createMesh(
    createSphereGeometry(starRadius, 48, 48),
    createUnlitMaterial({ color: detail.starColor }),
  );
  explorationGroup.add(starMesh);
  explorationRefs.starMesh = starMesh;

  // Star point light
  const starLight = createPointLight(detail.starColor, 2, 5000000);
  explorationGroup.add(starLight);

  // Planets — much larger than the player ship
  const PLANET_SCALE = EXPLORATION_CONFIG.planetScale;
  for (let i = 0; i < detail.planets.length; i++) {
    const p = detail.planets[i];
    const mat = createPBRMaterial({ color: p.color, roughness: 0.7 });
    const mesh = createMesh(planetGeo, mat);
    mesh.scale.setAll(p.size * PLANET_SCALE);
    mesh.userData.planetIndex = i;

    const x = p.orbitalDistance * Math.cos(p.initialAngle);
    const z = p.orbitalDistance * Math.sin(p.initialAngle);
    mesh.position.set(x, 0, z);

    explorationGroup.add(mesh);
    planetMeshes.push(mesh);

    // Rings for gas giants
    if (p.ringColor !== null) {
      const planetVisualSize = p.size * PLANET_SCALE;
      const ringGeo = createRingGeometry(planetVisualSize * 1.4, planetVisualSize * 2.0, 64);
      const ring = createMesh(
        ringGeo,
        createUnlitMaterial({
          color: p.ringColor,
          transparent: true,
          opacity: 0.45,
          side: 2,
        }),
      );
      ring.rotation.x = Math.PI / 3;
      mesh.add(ring);
    }
  }

  // Asteroid belt
  if (detail.asteroidBeltDistance !== null) {
    const beltDist = detail.asteroidBeltDistance;
    const asteroidCount = EXPLORATION_CONFIG.asteroidCount;
    const rng = mulberry32(GALAXY_SEED * 2000 + idx);
    for (let i = 0; i < asteroidCount; i++) {
      const angle = (i / asteroidCount) * Math.PI * 2 + (rng() - 0.5) * 0.3;
      const r = beltDist + (rng() - 0.5) * 100000;
      const y = (rng() - 0.5) * 40000;
      const size = 2000 + rng() * 5000;

      const mat = createPBRMaterial({
        color: 0x666666 + Math.floor(rng() * 0x333333),
        roughness: 0.9,
      });
      const mesh = createMesh(asteroidGeo, mat);
      mesh.position.set(r * Math.cos(angle), y, r * Math.sin(angle));
      mesh.scale.setAll(size);
      mesh.rotation.set(rng() * Math.PI, rng() * Math.PI, rng() * Math.PI);

      explorationGroup.add(mesh);
      asteroidMeshes.push(mesh);
    }
  }
}

export function clearExplorationScene(): void {
  // Dispose children (not just remove) — removing only sets parent=null,
  // which leaves the node as a root scene node still rendering.
  const children = [...explorationGroup.children];
  for (const child of children) {
    child.dispose();
  }
  planetMeshes.length = 0;
  asteroidMeshes.length = 0;
  explorationRefs.starMesh = null;
  explorationRefs.nearestPlanetIndex = -1;
  currentDetail = null;
}

export function getExplorationDetail(): SystemDetail | null {
  return currentDetail;
}

export function showExploration(): void {
  explorationGroup.visible = true;
}

export function hideExploration(): void {
  explorationGroup.visible = false;
}
