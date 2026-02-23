import { Vector3 } from '../../core';
import { getSystem } from '../data';
import {
  getStarPosition,
  highlightRoutes,
  setPlayerShipAt,
  updateContractMarker,
  updatePlayerShipPosition,
} from '../galaxy-scene';
import { campaign, regenerateContracts, travelToSystem } from '../state';

import { attachGalaxyInput, detachGalaxyInput, lerpOrbitTarget, setOrbitTarget } from './camera';
import { deselectSystem, updateGalaxyHud } from './hud';

// ── State ────────────────────────────────────────────────────────────────────

let traveling = false;
const travelFromPos = new Vector3();
const travelToPos = new Vector3();
let travelProgress = 0;
const TRAVEL_DURATION = 1.5; // seconds
let travelTargetId: string | null = null;
let travelIsContractTarget = false;
const _lerpPos = new Vector3();

let onStartCombat: (() => void) | null = null;

// ── Public API ───────────────────────────────────────────────────────────────

export function isTraveling(): boolean {
  return traveling;
}

export function setOnStartCombat(cb: (() => void) | null): void {
  onStartCombat = cb;
}

export function startTravelAnimation(targetId: string): void {
  const fromPos = getStarPosition(campaign.currentSystemId);
  const toPos = getStarPosition(targetId);
  if (!fromPos || !toPos) return;

  travelFromPos.copy(fromPos);
  travelToPos.copy(toPos);
  travelProgress = 0;
  travelTargetId = targetId;
  travelIsContractTarget = campaign.activeContract?.targetSystemId === targetId;
  traveling = true;

  detachGalaxyInput();
  deselectSystem();
  updateGalaxyHud();
}

export function updateTravelAnimation(dt: number): void {
  if (!traveling || !travelTargetId) return;

  travelProgress += dt / TRAVEL_DURATION;

  if (travelProgress >= 1) {
    travelProgress = 1;
    traveling = false;

    // Complete travel
    travelToSystem(travelTargetId);
    updatePlayerShipPosition();
    highlightRoutes();
    updateContractMarker();
    updateGalaxyHud();

    // Center camera on new system
    const sys = getSystem(travelTargetId);
    setOrbitTarget(...sys.position);
    attachGalaxyInput();

    if (travelIsContractTarget && campaign.activeContract) {
      if (onStartCombat) onStartCombat();
    } else {
      regenerateContracts();
    }
    return;
  }

  // EaseInOut quad
  const t = travelProgress;
  const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  // Move player ship along straight path
  _lerpPos.lerpVectors(travelFromPos, travelToPos, ease);
  setPlayerShipAt(_lerpPos);

  // Camera follows smoothly
  lerpOrbitTarget(travelFromPos, travelToPos, ease);
}
