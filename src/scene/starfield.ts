import {
  type EnginePoints,
  type Vector3,
  addToScene,
  createBufferAttribute,
  createBufferGeometry,
  createPoints,
  createPointsMaterial,
} from '@/shared/core';
import { playerPlane } from '../systems/player';
import type { GameSystem } from '../systems/types';

let starfieldPoints: EnginePoints | null = null;

export function createStarfield(): void {
  const count = 2500;
  const geo = createBufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 2500 + Math.random() * 4500;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
    const brightness = 0.3 + Math.random() * 0.2;
    const tint = Math.random();
    colors[i * 3] = brightness * (tint > 0.7 ? 1.0 : 0.85);
    colors[i * 3 + 1] = brightness * (tint > 0.3 ? 1.0 : 0.85);
    colors[i * 3 + 2] = brightness;
  }
  geo.setAttribute('position', createBufferAttribute(positions, 3));
  geo.setAttribute('color', createBufferAttribute(colors, 3));
  const mat = createPointsMaterial({
    size: 1.5,
    vertexColors: true,
    sizeAttenuation: false,
    transparent: true,
    opacity: 0.85,
  });
  starfieldPoints = createPoints(geo, mat);
  addToScene(starfieldPoints);
}

export function setStarfieldVisible(visible: boolean): void {
  if (starfieldPoints) starfieldPoints.visible = visible;
}

export function updateStarfieldPosition(position: Vector3): void {
  if (starfieldPoints) starfieldPoints.position.copy(position);
}

// ── GameSystem adapter ──────────────────────────────────────────────────────

export const starfieldSystem: GameSystem = {
  id: 'starfield',
  update() {
    updateStarfieldPosition(playerPlane.position);
  },
};
