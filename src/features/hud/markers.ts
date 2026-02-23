import { CAPITAL_CLOSE_RANGE_SQ, CURSOR_PROXIMITY_FACTOR, LOCK_PICK_RADIUS } from '@/shared/constants';
import { TransformNode, Vector3 } from '@/shared/core';
import { camera } from '@/shared/engine';
import { state } from '@/shared/state';
import type { LockedTarget } from '@/shared/types';
import { DomPool } from '@/shared/lib/dom-pool';
import { clampToScreenEdge, worldToScreen } from '@/shared/lib/screen';

const markersContainer = document.getElementById('target-markers')!;
const pool = new DomPool(markersContainer, () => {
  const el = document.createElement('div');
  el.className = 'target-marker';
  el.innerHTML =
    '<div class="diamond"></div><div class="marker-dist"></div><div class="marker-label"></div>';
  return el;
});

const _mrkPos = new Vector3();
const ENEMY_RANGE_SQ = 800 * 800;
const SHIP_RANGE_SQ = 1500 * 1500;

// ── Capital ship markers (always visible) ──────────────────────────────────

function renderCapitalShipMarkers(
  usedCount: number,
  w: number,
  h: number,
  playerPlane: TransformNode,
): number {
  for (const cs of state.capitalShips) {
    if (!cs.alive) continue;
    const shipDistSq = playerPlane.position.distanceToSquared(cs.mesh.position);
    if (shipDistSq > SHIP_RANGE_SQ) continue;

    if (shipDistSq > CAPITAL_CLOSE_RANGE_SQ) {
      // Far: single marker at ship center
      const scr = worldToScreen(cs.mesh.position, camera, w, h);
      if (scr.z >= 1 || scr.x < -20 || scr.x > w + 20 || scr.y < -20 || scr.y > h + 20) continue;
      const el = pool.get(usedCount++);
      el.className = 'target-marker capital';
      el.style.left = scr.x + 'px';
      el.style.top = scr.y + 'px';
      const dist3d = Math.sqrt(shipDistSq);
      el.children[1].textContent = Math.floor(dist3d) + 'm';
      el.children[2].textContent = `Корабль-${cs.mesh.userData.index + 1}`;
      (el.children[0] as HTMLElement).style.width = '28px';
      (el.children[0] as HTMLElement).style.height = '28px';
    } else {
      // Close: individual subsystem markers
      for (const sub of cs.subsystems) {
        if (sub.health <= 0) continue;
        _mrkPos.copyFrom(sub.center).applyMatrix4(cs.mesh.matrixWorld);
        const d = playerPlane.position.distanceTo(_mrkPos);
        const scr = worldToScreen(_mrkPos, camera, w, h);
        if (scr.z >= 1 || scr.x < -20 || scr.x > w + 20 || scr.y < -20 || scr.y > h + 20) continue;
        const el = pool.get(usedCount++);
        el.className = 'target-marker capital';
        el.style.left = scr.x + 'px';
        el.style.top = scr.y + 'px';
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
  playerPlane: TransformNode,
): number {
  let dist3d: number;
  let name: string;

  if (lt.kind === 'fighter') {
    dist3d = playerPlane.position.distanceTo(lt.fighter.mesh.position);
    _mrkPos.copyFrom(lt.fighter.mesh.position);
    name = lt.fighter.name;
  } else {
    _mrkPos.copyFrom(lt.subsystem.center).applyMatrix4(lt.ship.mesh.matrixWorld);
    dist3d = playerPlane.position.distanceTo(_mrkPos);
    name = lt.subsystem.name;
  }

  let scr = worldToScreen(_mrkPos, camera, w, h);

  // Clamp to screen edge if off-screen or behind camera
  if (scr.z >= 1 || scr.x < 0 || scr.x > w || scr.y < 0 || scr.y > h) {
    const clamped = clampToScreenEdge(scr.x, scr.y, w, h, scr.z >= 1, 40);
    scr = { x: clamped.x, y: clamped.y, z: scr.z };
  }

  const el = pool.get(usedCount++);
  const isCapital = lt.kind === 'subsystem';
  el.className = 'target-marker target-locked' + (isCapital ? ' capital' : '');
  el.style.left = scr.x + 'px';
  el.style.top = scr.y + 'px';
  el.children[1].textContent = Math.floor(dist3d) + 'm';
  el.children[2].textContent = name;
  const scale = isCapital ? 1 : Math.max(0.6, Math.min(1.5, 300 / dist3d));
  (el.children[0] as HTMLElement).style.width = 21 * scale + 'px';
  (el.children[0] as HTMLElement).style.height = 21 * scale + 'px';

  return usedCount;
}

// ── Main update ────────────────────────────────────────────────────────────

export function updateTargetMarkers(playerPlane: TransformNode): void {
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
    pool.hideFrom(usedCount);
    return;
  }

  // Normal mode: proximity-filtered fighter markers
  const diag = Math.sqrt(w * w + h * h);
  const proximityThresholdSq = (CURSOR_PROXIMITY_FACTOR * diag) ** 2;

  for (const e of state.enemies) {
    const distSq = playerPlane.position.distanceToSquared(e.mesh.position);
    if (distSq > ENEMY_RANGE_SQ) continue;
    const scr = worldToScreen(e.mesh.position, camera, w, h);
    if (scr.z >= 1 || scr.x < -20 || scr.x > w + 20 || scr.y < -20 || scr.y > h + 20) continue;

    // Cursor proximity filter
    const dxC = scr.x - cursorScreenX,
      dyC = scr.y - cursorScreenY;
    if (dxC * dxC + dyC * dyC > proximityThresholdSq) continue;

    const el = pool.get(usedCount++);
    el.className = 'target-marker';
    el.style.left = scr.x + 'px';
    el.style.top = scr.y + 'px';
    const dist3d = Math.sqrt(distSq);
    el.children[1].textContent = Math.floor(dist3d) + 'm';
    el.children[2].textContent = e.name;
    const scale = Math.max(0.6, Math.min(1.5, 300 / dist3d));
    (el.children[0] as HTMLElement).style.width = 21 * scale + 'px';
    (el.children[0] as HTMLElement).style.height = 21 * scale + 'px';
  }

  // Capital ship markers (always visible)
  usedCount = renderCapitalShipMarkers(usedCount, w, h, playerPlane);

  pool.hideFrom(usedCount);
}

// ── Target lock toggle ─────────────────────────────────────────────────────

export function toggleTargetLock(playerPlane: TransformNode): void {
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
    const scr = worldToScreen(e.mesh.position, camera, w, h);
    if (scr.z >= 1) continue;
    const dSq = (scr.x - cursorScreenX) ** 2 + (scr.y - cursorScreenY) ** 2;
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
      _mrkPos.copyFrom(sub.center).applyMatrix4(cs.mesh.matrixWorld);
      const scr = worldToScreen(_mrkPos, camera, w, h);
      if (scr.z >= 1) continue;
      const dSq = (scr.x - cursorScreenX) ** 2 + (scr.y - cursorScreenY) ** 2;
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
        _mrkPos.copyFrom(sub.center).applyMatrix4(cs.mesh.matrixWorld);
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
