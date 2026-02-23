import { Raycaster, Vector2 } from '@/shared/core';

import { getStarMeshes, selectSystem } from '../galaxy-scene';

import { galaxyCamera } from './camera';
import { setSelectedSystemId, updateInfoPanel } from './hud';
import { isTraveling } from './travel';

// ── State ────────────────────────────────────────────────────────────────────

let enabled = false;

// Click detection (pointer)
let dragStartX = 0;
let dragStartY = 0;

// Raycaster
const raycaster = new Raycaster();
const mouse = new Vector2();

// ── Helpers ──────────────────────────────────────────────────────────────────

export function setInputEnabled(v: boolean): void {
  enabled = v;
}

function isUIElement(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return !!target.closest('#galaxy-info-panel, #galaxy-hud, #galaxy-brightness');
}

function pickStar(clientX: number, clientY: number): void {
  mouse.x = (clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, galaxyCamera);

  const meshes = Array.from(getStarMeshes().values());
  const hits = raycaster.intersectObjects(meshes);
  if (hits.length > 0) {
    const id = (hits[0].object.metadata as Record<string, any>)?.systemId as string;
    setSelectedSystemId(id);
    selectSystem(id);
  } else {
    setSelectedSystemId(null);
    selectSystem(null);
  }
  updateInfoPanel();
}

// ── Pointer click detection ─────────────────────────────────────────────────
// Use pointer events instead of mouse events because BabylonJS ArcRotateCamera
// calls preventDefault() on pointer events, which suppresses mousedown/mouseup.

function onPointerDown(e: PointerEvent): void {
  if (!enabled || isTraveling()) return;
  if (e.button === 0) {
    dragStartX = e.clientX;
    dragStartY = e.clientY;
  }
}

function onPointerUp(e: PointerEvent): void {
  if (!enabled || isTraveling()) return;
  if (isUIElement(e.target)) return;
  if (e.button === 0) {
    const moved = Math.abs(e.clientX - dragStartX) > 3 || Math.abs(e.clientY - dragStartY) > 3;
    if (!moved) {
      pickStar(e.clientX, e.clientY);
    }
  }
}

// ── Listener management ──────────────────────────────────────────────────────

export function addInputListeners(): void {
  window.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointerup', onPointerUp);
}

export function removeInputListeners(): void {
  window.removeEventListener('pointerdown', onPointerDown);
  window.removeEventListener('pointerup', onPointerUp);
}
