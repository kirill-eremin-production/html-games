import * as THREE from 'three';
import { camera } from '../../scene/setup';
import { getStarMeshes, selectSystem } from '../galaxy-scene';
import { adjustOrbit, adjustRadius, getOrbitRadius, setOrbitRadius, updateCamera } from './camera';
import { setSelectedSystemId, updateInfoPanel } from './hud';
import { isTraveling } from './travel';

// ── State ────────────────────────────────────────────────────────────────────

let enabled = false;

// Mouse drag
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let lastMouseX = 0;
let lastMouseY = 0;

// Touch
let touchDragId: number | null = null;
let touchStartX = 0;
let touchStartY = 0;
let lastTouchX = 0;
let lastTouchY = 0;
let pinchStartDist = 0;
let pinchStartRadius = 0;
let isPinching = false;

// Raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

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
  raycaster.setFromCamera(mouse, camera);

  const meshes = Array.from(getStarMeshes().values());
  const hits = raycaster.intersectObjects(meshes);
  if (hits.length > 0) {
    const id = hits[0].object.userData.systemId as string;
    setSelectedSystemId(id);
    selectSystem(id);
  } else {
    setSelectedSystemId(null);
    selectSystem(null);
  }
  updateInfoPanel();
}

// ── Mouse handlers ───────────────────────────────────────────────────────────

function onMouseDown(e: MouseEvent): void {
  if (!enabled || isTraveling()) return;
  if (isUIElement(e.target)) return;
  if (e.button === 0) {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  }
}

function onMouseMove(e: MouseEvent): void {
  if (!enabled || isTraveling()) return;
  if (isDragging) {
    const dx = e.clientX - lastMouseX;
    const dy = e.clientY - lastMouseY;
    adjustOrbit(dx * 0.005, dy * 0.005);
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    updateCamera();
  }
}

function onMouseUp(e: MouseEvent): void {
  if (!enabled || isTraveling()) return;
  if (isUIElement(e.target)) {
    isDragging = false;
    return;
  }
  if (e.button === 0) {
    const moved = Math.abs(e.clientX - dragStartX) > 3 || Math.abs(e.clientY - dragStartY) > 3;
    isDragging = false;
    if (!moved) {
      pickStar(e.clientX, e.clientY);
    }
  }
}

function onWheel(e: WheelEvent): void {
  if (!enabled || isTraveling()) return;
  e.preventDefault();
  adjustRadius(e.deltaY * 0.05);
  updateCamera();
}

// ── Touch handlers ───────────────────────────────────────────────────────────

function getTouchDist(e: TouchEvent): number {
  const t0 = e.touches[0];
  const t1 = e.touches[1];
  const dx = t0.clientX - t1.clientX;
  const dy = t0.clientY - t1.clientY;
  return Math.sqrt(dx * dx + dy * dy);
}

function onTouchStart(e: TouchEvent): void {
  if (!enabled || isTraveling()) return;
  if (isUIElement(e.target)) return;

  if (e.touches.length === 2) {
    isPinching = true;
    touchDragId = null;
    pinchStartDist = getTouchDist(e);
    pinchStartRadius = getOrbitRadius();
    e.preventDefault();
    return;
  }

  if (e.touches.length === 1) {
    const t = e.touches[0];
    touchDragId = t.identifier;
    touchStartX = t.clientX;
    touchStartY = t.clientY;
    lastTouchX = t.clientX;
    lastTouchY = t.clientY;
    e.preventDefault();
  }
}

function onTouchMove(e: TouchEvent): void {
  if (!enabled || isTraveling()) return;

  if (isPinching && e.touches.length >= 2) {
    e.preventDefault();
    const dist = getTouchDist(e);
    const scale = pinchStartDist / dist;
    setOrbitRadius(pinchStartRadius * scale);
    updateCamera();
    return;
  }

  if (touchDragId === null) return;
  for (let i = 0; i < e.changedTouches.length; i++) {
    const t = e.changedTouches[i];
    if (t.identifier === touchDragId) {
      e.preventDefault();
      const dx = t.clientX - lastTouchX;
      const dy = t.clientY - lastTouchY;
      adjustOrbit(dx * 0.005, dy * 0.005);
      lastTouchX = t.clientX;
      lastTouchY = t.clientY;
      updateCamera();
    }
  }
}

function onTouchEnd(e: TouchEvent): void {
  if (!enabled || isTraveling()) return;

  if (isPinching) {
    if (e.touches.length < 2) isPinching = false;
    return;
  }

  for (let i = 0; i < e.changedTouches.length; i++) {
    const t = e.changedTouches[i];
    if (t.identifier !== touchDragId) continue;
    touchDragId = null;

    const moved = Math.abs(t.clientX - touchStartX) > 8 || Math.abs(t.clientY - touchStartY) > 8;
    if (moved) return;

    pickStar(t.clientX, t.clientY);
  }
}

// ── Listener management ──────────────────────────────────────────────────────

export function addInputListeners(): void {
  window.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
  window.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('touchstart', onTouchStart, { passive: false });
  window.addEventListener('touchmove', onTouchMove, { passive: false });
  window.addEventListener('touchend', onTouchEnd);
  window.addEventListener('touchcancel', onTouchEnd);
}

export function removeInputListeners(): void {
  window.removeEventListener('mousedown', onMouseDown);
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', onMouseUp);
  window.removeEventListener('wheel', onWheel);
  window.removeEventListener('touchstart', onTouchStart);
  window.removeEventListener('touchmove', onTouchMove);
  window.removeEventListener('touchend', onTouchEnd);
  window.removeEventListener('touchcancel', onTouchEnd);
}
