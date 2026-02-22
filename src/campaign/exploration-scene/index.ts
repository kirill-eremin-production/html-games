import * as THREE from 'three';
import { getSystemDetail, mulberry32 } from '../data';
import type { SystemDetail } from '../types';
import { asteroidMeshes, explorationGroup, explorationRefs, planetMeshes } from './refs';

const GALAXY_SEED = 42;

// Shared geometries
const planetGeo = new THREE.SphereGeometry(1, 24, 24);
const asteroidGeo = new THREE.IcosahedronGeometry(1, 0);

let currentDetail: SystemDetail | null = null;

export function buildExplorationScene(systemId: string): void {
  clearExplorationScene();
  const detail = getSystemDetail(systemId);
  currentDetail = detail;

  const idx = systemId === 'solaris' ? 0 : parseInt(systemId.split('-')[1], 10);

  // Ambient light
  const ambient = new THREE.AmbientLight(0x222244, 0.3);
  explorationGroup.add(ambient);

  // Central star
  const starMesh = new THREE.Mesh(
    new THREE.SphereGeometry(detail.starSize * 8, 32, 32),
    new THREE.MeshBasicMaterial({ color: detail.starColor }),
  );
  explorationGroup.add(starMesh);
  explorationRefs.starMesh = starMesh;

  // Star point light
  const starLight = new THREE.PointLight(detail.starColor, 2, 600);
  explorationGroup.add(starLight);

  // Star glow sprite
  const glowMat = new THREE.SpriteMaterial({
    color: detail.starColor,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const glow = new THREE.Sprite(glowMat);
  glow.scale.setScalar(detail.starSize * 30);
  explorationGroup.add(glow);
  explorationRefs.starGlow = glow;

  // Planets
  for (let i = 0; i < detail.planets.length; i++) {
    const p = detail.planets[i];
    const mat = new THREE.MeshStandardMaterial({ color: p.color, roughness: 0.7 });
    const mesh = new THREE.Mesh(planetGeo, mat);
    mesh.scale.setScalar(p.size * 3);
    mesh.userData.planetIndex = i;

    const x = p.orbitalDistance * Math.cos(p.initialAngle);
    const z = p.orbitalDistance * Math.sin(p.initialAngle);
    mesh.position.set(x, 0, z);

    explorationGroup.add(mesh);
    planetMeshes.push(mesh);

    // Orbit line
    const orbitGeo = new THREE.RingGeometry(
      p.orbitalDistance - 0.15,
      p.orbitalDistance + 0.15,
      128,
    );
    const orbitMat = new THREE.MeshBasicMaterial({
      color: 0x334466,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
    });
    const orbitLine = new THREE.Mesh(orbitGeo, orbitMat);
    orbitLine.rotation.x = -Math.PI / 2;
    explorationGroup.add(orbitLine);

    // Rings for gas giants
    if (p.ringColor !== null) {
      const ringGeo = new THREE.RingGeometry(1.5, 2.2, 32);
      const ring = new THREE.Mesh(
        ringGeo,
        new THREE.MeshBasicMaterial({
          color: p.ringColor,
          transparent: true,
          opacity: 0.5,
          side: THREE.DoubleSide,
        }),
      );
      ring.scale.setScalar(p.size * 3);
      ring.rotation.x = Math.PI / 3;
      mesh.add(ring);
    }
  }

  // Asteroid belt
  if (detail.asteroidBeltDistance !== null) {
    const beltDist = detail.asteroidBeltDistance;
    const asteroidCount = 200;
    const rng = mulberry32(GALAXY_SEED * 2000 + idx);
    for (let i = 0; i < asteroidCount; i++) {
      const angle = (i / asteroidCount) * Math.PI * 2 + (rng() - 0.5) * 0.3;
      const r = beltDist + (rng() - 0.5) * 15;
      const y = (rng() - 0.5) * 5;
      const size = 0.3 + rng() * 1.0;

      const mat = new THREE.MeshStandardMaterial({
        color: 0x666666 + Math.floor(rng() * 0x333333),
        roughness: 0.9,
      });
      const mesh = new THREE.Mesh(asteroidGeo, mat);
      mesh.position.set(r * Math.cos(angle), y, r * Math.sin(angle));
      mesh.scale.setScalar(size);
      mesh.rotation.set(rng() * Math.PI, rng() * Math.PI, rng() * Math.PI);

      explorationGroup.add(mesh);
      asteroidMeshes.push(mesh);
    }
  }
}

export function clearExplorationScene(): void {
  while (explorationGroup.children.length > 0) {
    explorationGroup.remove(explorationGroup.children[0]);
  }
  planetMeshes.length = 0;
  asteroidMeshes.length = 0;
  explorationRefs.starMesh = null;
  explorationRefs.starGlow = null;
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
