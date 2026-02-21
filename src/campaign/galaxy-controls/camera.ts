import * as THREE from 'three';
import { camera } from '../../scene/setup';
import { getSystem } from '../data';
import { campaign } from '../state';

// ── Orbit camera state ───────────────────────────────────────────────────────

let orbitTheta = 0;
let orbitPhi = Math.PI / 4;
let orbitRadius = 52;
const orbitTarget = new THREE.Vector3(0, 0, 0);

// ── Camera update ────────────────────────────────────────────────────────────

export function updateCamera(): void {
  const x = orbitTarget.x + orbitRadius * Math.sin(orbitPhi) * Math.sin(orbitTheta);
  const y = orbitTarget.y + orbitRadius * Math.cos(orbitPhi);
  const z = orbitTarget.z + orbitRadius * Math.sin(orbitPhi) * Math.cos(orbitTheta);
  camera.position.set(x, y, z);
  camera.lookAt(orbitTarget);
}

export function setupGalaxyCamera(): void {
  camera.up.set(0, 1, 0);
  const sys = getSystem(campaign.currentSystemId);
  orbitTarget.set(...sys.position);
  orbitTheta = 0;
  orbitPhi = Math.PI / 4;
  orbitRadius = 52;
  updateCamera();
}

export function centerOnCurrentSystem(): void {
  camera.up.set(0, 1, 0);
  const sys = getSystem(campaign.currentSystemId);
  orbitTarget.set(...sys.position);
}

// ── Orbit manipulation (used by input & travel) ─────────────────────────────

export function adjustOrbit(dTheta: number, dPhi: number): void {
  orbitTheta -= dTheta;
  orbitPhi = Math.max(0.2, Math.min(Math.PI / 2.2, orbitPhi - dPhi));
}

export function adjustRadius(delta: number): void {
  orbitRadius = Math.max(10, Math.min(120, orbitRadius + delta));
}

export function getOrbitRadius(): number {
  return orbitRadius;
}

export function setOrbitRadius(r: number): void {
  orbitRadius = Math.max(10, Math.min(120, r));
}

export function setOrbitTarget(x: number, y: number, z: number): void {
  orbitTarget.set(x, y, z);
}

export function lerpOrbitTarget(from: THREE.Vector3, to: THREE.Vector3, t: number): void {
  orbitTarget.lerpVectors(from, to, t);
}
