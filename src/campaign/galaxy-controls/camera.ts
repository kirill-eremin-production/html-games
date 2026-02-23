import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { Vector3 as BVector3 } from '@babylonjs/core/Maths/math.vector';

import type { Vector3 } from '../../core';
import { canvas, camera as combatCamera, scene } from '../../scene/setup';
import { getSystem } from '../data';
import { campaign } from '../state';

// ── Galaxy orbit camera ──────────────────────────────────────────────────────

export const galaxyCamera = new ArcRotateCamera(
  'galaxyCamera',
  0, // alpha (horizontal angle)
  Math.PI / 4, // beta (vertical angle from Y+)
  52, // radius
  BVector3.Zero(),
  scene,
);
galaxyCamera.lowerBetaLimit = 0.2;
galaxyCamera.upperBetaLimit = Math.PI / 2.2;
galaxyCamera.lowerRadiusLimit = 10;
galaxyCamera.upperRadiusLimit = 120;
galaxyCamera.wheelDeltaPercentage = 0.01;
galaxyCamera.panningSensibility = 0; // disable panning
galaxyCamera.detachControl();

// ── Setup ────────────────────────────────────────────────────────────────────

export function setupGalaxyCamera(): void {
  const sys = getSystem(campaign.currentSystemId);
  galaxyCamera.target.set(...sys.position);
  galaxyCamera.alpha = 0;
  galaxyCamera.beta = Math.PI / 4;
  galaxyCamera.radius = 52;
}

export function centerOnCurrentSystem(): void {
  const sys = getSystem(campaign.currentSystemId);
  galaxyCamera.target.set(...sys.position);
}

// ── Activate / deactivate ────────────────────────────────────────────────────

export function activateGalaxyCamera(): void {
  scene.activeCamera = galaxyCamera;
  galaxyCamera.attachControl(canvas, true);
}

export function deactivateGalaxyCamera(): void {
  galaxyCamera.detachControl();
  scene.activeCamera = combatCamera;
}

// ── Input control (for disabling during travel) ──────────────────────────────

export function attachGalaxyInput(): void {
  galaxyCamera.attachControl(canvas, true);
}

export function detachGalaxyInput(): void {
  galaxyCamera.detachControl();
}

// ── Travel helpers ───────────────────────────────────────────────────────────

/** No-op — ArcRotateCamera updates position automatically. */
export function updateCamera(): void {}

export function setOrbitTarget(x: number, y: number, z: number): void {
  galaxyCamera.target.set(x, y, z);
}

export function lerpOrbitTarget(from: Vector3, to: Vector3, t: number): void {
  BVector3.LerpToRef(from, to, t, galaxyCamera.target);
}
