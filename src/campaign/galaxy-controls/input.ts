import { Raycaster, Vector2 } from '../../core';
import { getStarMeshes, selectSystem } from '../galaxy-scene';

import { galaxyCamera } from './camera';
import { setSelectedSystemId, updateInfoPanel } from './hud';
import { isTraveling } from './travel';

// ── State ────────────────────────────────────────────────────────────────────

let enabled = false;

// Click detection (mouse)
let dragStartX = 0;
let dragStartY = 0;

// Click detection (touch)
let touchStartId: number | null = null;
let touchStartX = 0;
let touchStartY = 0;

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

// ── Mouse click detection ───────────────────────────────────────────────────

function onMouseDown(e: MouseEvent): void {
  if (!enabled || isTraveling()) return;
  if (e.button === 0) {
    dragStartX = e.clientX;
    dragStartY = e.clientY;
  }
}

function onMouseUp(e: MouseEvent): void {
  if (!enabled || isTraveling()) return;
  if (isUIElement(e.target)) return;
  if (e.button === 0) {
    const moved = Math.abs(e.clientX - dragStartX) > 3 || Math.abs(e.clientY - dragStartY) > 3;
    if (!moved) {
      pickStar(e.clientX, e.clientY);
    }
  }
}

// ── Touch click detection ───────────────────────────────────────────────────

function onTouchStart(e: TouchEvent): void {
  if (!enabled || isTraveling()) return;
  if (isUIElement(e.target)) return;
  if (e.touches.length === 1) {
    const t = e.touches[0];
    touchStartId = t.identifier;
    touchStartX = t.clientX;
    touchStartY = t.clientY;
  }
}

function onTouchEnd(e: TouchEvent): void {
  if (!enabled || isTraveling()) return;
  for (let i = 0; i < e.changedTouches.length; i++) {
    const t = e.changedTouches[i];
    if (t.identifier !== touchStartId) continue;
    touchStartId = null;
    const moved = Math.abs(t.clientX - touchStartX) > 8 || Math.abs(t.clientY - touchStartY) > 8;
    if (!moved) {
      pickStar(t.clientX, t.clientY);
    }
  }
}

// ── Listener management ──────────────────────────────────────────────────────

export function addInputListeners(): void {
  window.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mouseup', onMouseUp);
  window.addEventListener('touchstart', onTouchStart, { passive: false });
  window.addEventListener('touchend', onTouchEnd);
}

export function removeInputListeners(): void {
  window.removeEventListener('mousedown', onMouseDown);
  window.removeEventListener('mouseup', onMouseUp);
  window.removeEventListener('touchstart', onTouchStart);
  window.removeEventListener('touchend', onTouchEnd);
}
