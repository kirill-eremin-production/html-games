import * as THREE from 'three';
import {
  CAPITAL_CLOSE_RANGE_SQ,
  CURSOR_PROXIMITY_FACTOR,
  LOCK_PICK_RADIUS,
} from '../constants';
import { camera } from '../scene/setup';
import { state } from '../state';
import type { LockedTarget } from '../types';

const markersContainer = document.getElementById('target-markers')!;
const markerPool: HTMLElement[] = [];
const _mrkPos = new THREE.Vector3();
const ENEMY_RANGE_SQ = 800 * 800;
const SHIP_RANGE_SQ = 1500 * 1500;

function getMarkerElement(index: number): HTMLElement {
  if (index < markerPool.length) {
    markerPool[index].style.display = 'block';
    return markerPool[index];
  }
  const el = document.createElement('div');
  el.className = 'target-marker';
  el.innerHTML =
    '<div class="diamond"></div><div class="marker-dist"></div><div class="marker-label"></div>';
  markersContainer.appendChild(el);
  markerPool.push(el);
  return el;
}

// ── Capital ship markers (always visible) ──────────────────────────────────

function renderCapitalShipMarkers(
  usedCount: number,
  w: number,
  h: number,
  playerPlane: THREE.Group,
): number {
  for (const cs of state.capitalShips) {
    if (!cs.alive) continue;
    const shipDistSq = playerPlane.position.distanceToSquared(cs.mesh.position);
    if (shipDistSq > SHIP_RANGE_SQ) continue;

    if (shipDistSq > CAPITAL_CLOSE_RANGE_SQ) {
      // Far: single marker at ship center
      _mrkPos.copy(cs.mesh.position).project(camera);
      const screenX = (_mrkPos.x * 0.5 + 0.5) * w;
      const screenY = (-_mrkPos.y * 0.5 + 0.5) * h;
      if (
        _mrkPos.z >= 1 ||
        screenX < -20 ||
        screenX > w + 20 ||
        screenY < -20 ||
        screenY > h + 20
      )
        continue;
      const el = getMarkerElement(usedCount++);
      el.className = 'target-marker capital';
      el.style.left = screenX + 'px';
      el.style.top = screenY + 'px';
      const dist3d = Math.sqrt(shipDistSq);
      el.children[1].textContent = Math.floor(dist3d) + 'm';
      el.children[2].textContent = `Корабль-${cs.mesh.userData.index + 1}`;
      (el.children[0] as HTMLElement).style.width = '28px';
      (el.children[0] as HTMLElement).style.height = '28px';
    } else {
      // Close: individual subsystem markers
      for (const sub of cs.subsystems) {
        if (sub.health <= 0) continue;
        _mrkPos.copy(sub.center).applyMatrix4(cs.mesh.matrixWorld);
        const d = playerPlane.position.distanceTo(_mrkPos);
        _mrkPos.project(camera);
        const screenX = (_mrkPos.x * 0.5 + 0.5) * w;
        const screenY = (-_mrkPos.y * 0.5 + 0.5) * h;
        if (
          _mrkPos.z >= 1 ||
          screenX < -20 ||
          screenX > w + 20 ||
          screenY < -20 ||
          screenY > h + 20
        )
          continue;
        const el = getMarkerElement(usedCount++);
        el.className = 'target-marker capital';
        el.style.left = screenX + 'px';
        el.style.top = screenY + 'px';
        el.children[1].textContent = Math.floor(d) + 'm';
        el.children[2].textContent = sub.name;
        (el.children[0] as HTMLElement).style.width = '21px';
        (el.children[0] as HTMLElement).style.height = '21px';
      }
    }
  }
  return usedCount;
}

// ── Locked target marker (clamped to screen edge if off-screen) ────────────

function renderLockedTarget(
  lt: LockedTarget,
  usedCount: number,
  w: number,
  h: number,
  playerPlane: THREE.Group,
): number {
  let dist3d: number;
  let name: string;

  if (lt.kind === 'fighter') {
    dist3d = playerPlane.position.distanceTo(lt.fighter.mesh.position);
    _mrkPos.copy(lt.fighter.mesh.position).project(camera);
    name = lt.fighter.name;
  } else {
    _mrkPos.copy(lt.subsystem.center).applyMatrix4(lt.ship.mesh.matrixWorld);
    dist3d = playerPlane.position.distanceTo(_mrkPos);
    _mrkPos.project(camera);
    name = lt.subsystem.name;
  }

  let screenX = (_mrkPos.x * 0.5 + 0.5) * w;
  let screenY = (-_mrkPos.y * 0.5 + 0.5) * h;
  const z = _mrkPos.z;

  // Clamp to screen edge if off-screen or behind camera
  if (z >= 1 || screenX < 0 || screenX > w || screenY < 0 || screenY > h) {
    const cx = w / 2,
      cy = h / 2;
    let dx = screenX - cx,
      dy = screenY - cy;
    if (z >= 1) {
      dx = -dx;
      dy = -dy;
    }
    const margin = 40;
    const scaleX = Math.abs(dx) > 0.001 ? (w / 2 - margin) / Math.abs(dx) : Infinity;
    const scaleY = Math.abs(dy) > 0.001 ? (h / 2 - margin) / Math.abs(dy) : Infinity;
    const s = Math.min(scaleX, scaleY, 1);
    screenX = cx + dx * s;
    screenY = cy + dy * s;
  }

  const el = getMarkerElement(usedCount++);
  const isCapital = lt.kind === 'subsystem';
  el.className = 'target-marker target-locked' + (isCapital ? ' capital' : '');
  el.style.left = screenX + 'px';
  el.style.top = screenY + 'px';
  el.children[1].textContent = Math.floor(dist3d) + 'm';
  el.children[2].textContent = name;
  const scale = isCapital ? 1 : Math.max(0.6, Math.min(1.5, 300 / dist3d));
  (el.children[0] as HTMLElement).style.width = 21 * scale + 'px';
  (el.children[0] as HTMLElement).style.height = 21 * scale + 'px';

  return usedCount;
}

// ── Main update ────────────────────────────────────────────────────────────

export function updateTargetMarkers(playerPlane: THREE.Group): void {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const cursorScreenX = (state.mouseX * 0.5 + 0.5) * w;
  const cursorScreenY = (state.mouseY * 0.5 + 0.5) * h;
  let usedCount = 0;

  // Check if locked target died
  if (state.lockedTarget) {
    const lt = state.lockedTarget;
    if (lt.kind === 'fighter') {
      if (lt.fighter.health <= 0 || !state.enemies.includes(lt.fighter)) {
        state.lockedTarget = null;
      }
    } else {
      if (lt.subsystem.health <= 0 || !lt.ship.alive) {
        state.lockedTarget = null;
      }
    }
  }

  // Locked mode: show only locked target + capital ship markers
  if (state.lockedTarget) {
    usedCount = renderCapitalShipMarkers(usedCount, w, h, playerPlane);
    usedCount = renderLockedTarget(state.lockedTarget, usedCount, w, h, playerPlane);
    for (let i = usedCount; i < markerPool.length; i++) {
      markerPool[i].style.display = 'none';
    }
    return;
  }

  // Normal mode: proximity-filtered fighter markers
  const diag = Math.sqrt(w * w + h * h);
  const proximityThresholdSq = (CURSOR_PROXIMITY_FACTOR * diag) ** 2;

  for (const e of state.enemies) {
    const distSq = playerPlane.position.distanceToSquared(e.mesh.position);
    if (distSq > ENEMY_RANGE_SQ) continue;
    _mrkPos.copy(e.mesh.position).project(camera);
    const screenX = (_mrkPos.x * 0.5 + 0.5) * w;
    const screenY = (-_mrkPos.y * 0.5 + 0.5) * h;
    if (_mrkPos.z >= 1 || screenX < -20 || screenX > w + 20 || screenY < -20 || screenY > h + 20)
      continue;

    // Cursor proximity filter
    const dxC = screenX - cursorScreenX,
      dyC = screenY - cursorScreenY;
    if (dxC * dxC + dyC * dyC > proximityThresholdSq) continue;

    const el = getMarkerElement(usedCount++);
    el.className = 'target-marker';
    el.style.left = screenX + 'px';
    el.style.top = screenY + 'px';
    const dist3d = Math.sqrt(distSq);
    el.children[1].textContent = Math.floor(dist3d) + 'm';
    el.children[2].textContent = e.name;
    const scale = Math.max(0.6, Math.min(1.5, 300 / dist3d));
    (el.children[0] as HTMLElement).style.width = 21 * scale + 'px';
    (el.children[0] as HTMLElement).style.height = 21 * scale + 'px';
  }

  // Capital ship markers (always visible)
  usedCount = renderCapitalShipMarkers(usedCount, w, h, playerPlane);

  for (let i = usedCount; i < markerPool.length; i++) {
    markerPool[i].style.display = 'none';
  }
}

// ── Target lock toggle ─────────────────────────────────────────────────────

export function toggleTargetLock(playerPlane: THREE.Group): void {
  if (state.lockedTarget) {
    state.lockedTarget = null;
    return;
  }

  const w = window.innerWidth;
  const h = window.innerHeight;
  const cursorScreenX = (state.mouseX * 0.5 + 0.5) * w;
  const cursorScreenY = (state.mouseY * 0.5 + 0.5) * h;
  const pickRadiusSq = LOCK_PICK_RADIUS * LOCK_PICK_RADIUS;

  let bestTarget: LockedTarget | null = null;
  let bestScreenDistSq = Infinity;

  // Screen-pick: enemies near cursor
  for (const e of state.enemies) {
    if (playerPlane.position.distanceToSquared(e.mesh.position) > ENEMY_RANGE_SQ) continue;
    _mrkPos.copy(e.mesh.position).project(camera);
    if (_mrkPos.z >= 1) continue;
    const sx = (_mrkPos.x * 0.5 + 0.5) * w;
    const sy = (-_mrkPos.y * 0.5 + 0.5) * h;
    const dSq = (sx - cursorScreenX) ** 2 + (sy - cursorScreenY) ** 2;
    if (dSq < pickRadiusSq && dSq < bestScreenDistSq) {
      bestScreenDistSq = dSq;
      bestTarget = { kind: 'fighter', fighter: e };
    }
  }

  // Screen-pick: capital ship subsystems near cursor
  for (const cs of state.capitalShips) {
    if (!cs.alive) continue;
    if (playerPlane.position.distanceToSquared(cs.mesh.position) > SHIP_RANGE_SQ) continue;
    for (const sub of cs.subsystems) {
      if (sub.health <= 0) continue;
      _mrkPos.copy(sub.center).applyMatrix4(cs.mesh.matrixWorld);
      _mrkPos.project(camera);
      if (_mrkPos.z >= 1) continue;
      const sx = (_mrkPos.x * 0.5 + 0.5) * w;
      const sy = (-_mrkPos.y * 0.5 + 0.5) * h;
      const dSq = (sx - cursorScreenX) ** 2 + (sy - cursorScreenY) ** 2;
      if (dSq < pickRadiusSq && dSq < bestScreenDistSq) {
        bestScreenDistSq = dSq;
        bestTarget = { kind: 'subsystem', subsystem: sub, ship: cs };
      }
    }
  }

  // Fallback: nearest in 3D
  if (!bestTarget) {
    let bestDist3dSq = Infinity;
    for (const e of state.enemies) {
      const dSq = playerPlane.position.distanceToSquared(e.mesh.position);
      if (dSq < bestDist3dSq) {
        bestDist3dSq = dSq;
        bestTarget = { kind: 'fighter', fighter: e };
      }
    }
    for (const cs of state.capitalShips) {
      if (!cs.alive) continue;
      for (const sub of cs.subsystems) {
        if (sub.health <= 0) continue;
        _mrkPos.copy(sub.center).applyMatrix4(cs.mesh.matrixWorld);
        const dSq = playerPlane.position.distanceToSquared(_mrkPos);
        if (dSq < bestDist3dSq) {
          bestDist3dSq = dSq;
          bestTarget = { kind: 'subsystem', subsystem: sub, ship: cs };
        }
      }
    }
  }

  state.lockedTarget = bestTarget;
}
