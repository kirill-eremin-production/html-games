import {
  CAPITAL_CLOSE_RANGE_SQ,
  CURSOR_PROXIMITY_FACTOR,
  LOCK_PICK_RADIUS,
} from '@/shared/constants';
import { TransformNode, Vector3 } from '@/shared/core';
import { world } from '@/shared/ecs/combat-world';
import { camera } from '@/shared/engine';
import { DomPool } from '@/shared/lib/dom-pool';
import { clampToScreenEdge, worldToScreen } from '@/shared/lib/screen';
import { state } from '@/shared/state';
import type { LockedTarget } from '@/shared/types';

import { CapitalShipComponent } from '@/entities/combat/capital-ship';
import {
  queryAliveCapitalShips,
  queryAliveSubsystems,
  queryFightersByTeam,
} from '@/entities/ecs-queries';
import { TransformComponent } from '@/entities/physics/transform';
import { HealthComponent } from '@/entities/stats/health';
import { NameComponent } from '@/entities/stats/name';

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
  for (const cs of queryAliveCapitalShips()) {
    const shipDistSq = playerPlane.position.distanceToSquared(cs.transform.position);
    if (shipDistSq > SHIP_RANGE_SQ) continue;

    if (shipDistSq > CAPITAL_CLOSE_RANGE_SQ) {
      // Far: single marker at ship center
      const scr = worldToScreen(cs.transform.position, camera, w, h);
      if (scr.z >= 1 || scr.x < -20 || scr.x > w + 20 || scr.y < -20 || scr.y > h + 20) continue;
      const el = pool.get(usedCount++);
      el.className = 'target-marker capital';
      el.style.left = scr.x + 'px';
      el.style.top = scr.y + 'px';
      const dist3d = Math.sqrt(shipDistSq);
      el.children[1].textContent = Math.floor(dist3d) + 'm';
      el.children[2].textContent = `Корабль-${cs.capitalShip.shipIndex + 1}`;
      (el.children[0] as HTMLElement).style.width = '28px';
      (el.children[0] as HTMLElement).style.height = '28px';
    } else {
      // Close: individual subsystem markers (ECS query)
      // transform.position уже содержит мировые координаты (обновлено hierarchy-system)
      const subsystems = queryAliveSubsystems().filter((s) => s.parent.parentId === cs.entity);
      for (const sub of subsystems) {
        const d = playerPlane.position.distanceTo(sub.transform.position);
        const scr = worldToScreen(sub.transform.position, camera, w, h);
        if (scr.z >= 1 || scr.x < -20 || scr.x > w + 20 || scr.y < -20 || scr.y > h + 20) continue;
        const el = pool.get(usedCount++);
        el.className = 'target-marker capital';
        el.style.left = scr.x + 'px';
        el.style.top = scr.y + 'px';
        el.children[1].textContent = Math.floor(d) + 'm';
        el.children[2].textContent = sub.name.name;
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
    const fighterTransform = world.getComponent(lt.entityId, TransformComponent);
    if (!fighterTransform) return usedCount;
    dist3d = playerPlane.position.distanceTo(fighterTransform.position);
    _mrkPos.copyFrom(fighterTransform.position);
    name = lt.fighter.name;
  } else {
    // Подсистема — transform.position уже в мировых координатах (hierarchy-system)
    const subTransform = world.getComponent(lt.subsystemEntity, TransformComponent);
    const nameComp = world.getComponent(lt.subsystemEntity, NameComponent);
    if (!subTransform) return usedCount;
    _mrkPos.copyFrom(subTransform.position);
    dist3d = playerPlane.position.distanceTo(_mrkPos);
    name = nameComp?.name ?? '?';
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
      if (!world.isAlive(lt.entityId)) {
        state.lockedTarget = null;
      }
    } else {
      // Подсистема: проверяем жива ли сущность и здоровье > 0
      const subHealth = world.getComponent(lt.subsystemEntity, HealthComponent);
      const parentShip = world.getComponent(lt.parentEntity, CapitalShipComponent);
      if (!subHealth || subHealth.current <= 0 || !parentShip || !parentShip.alive) {
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

  // Normal mode: proximity-filtered fighter markers (ECS query)
  const diag = Math.sqrt(w * w + h * h);
  const proximityThresholdSq = (CURSOR_PROXIMITY_FACTOR * diag) ** 2;
  const enemies = queryFightersByTeam('enemy');

  for (const e of enemies) {
    const ePos = e.transform.position;
    const distSq = playerPlane.position.distanceToSquared(ePos);
    if (distSq > ENEMY_RANGE_SQ) continue;
    const scr = worldToScreen(ePos, camera, w, h);
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
    el.children[2].textContent = e.name.name;
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
  const enemies = queryFightersByTeam('enemy');

  let bestTarget: LockedTarget | null = null;
  let bestScreenDistSq = Infinity;

  // Screen-pick: enemies near cursor
  for (const e of enemies) {
    const ePos = e.transform.position;
    if (playerPlane.position.distanceToSquared(ePos) > ENEMY_RANGE_SQ) continue;
    const scr = worldToScreen(ePos, camera, w, h);
    if (scr.z >= 1) continue;
    const dSq = (scr.x - cursorScreenX) ** 2 + (scr.y - cursorScreenY) ** 2;
    if (dSq < pickRadiusSq && dSq < bestScreenDistSq) {
      bestScreenDistSq = dSq;
      bestTarget = {
        kind: 'fighter',
        entityId: e.entity,
        fighter: { entityId: e.entity, name: e.name.name },
      };
    }
  }

  // Screen-pick: capital ship subsystems near cursor (ECS query)
  // transform.position уже содержит мировые координаты (обновлено hierarchy-system)
  const aliveSubs = queryAliveSubsystems();
  for (const sub of aliveSubs) {
    const parentTransform = world.getComponent(sub.parent.parentId, TransformComponent);
    if (!parentTransform) continue;
    if (playerPlane.position.distanceToSquared(parentTransform.position) > SHIP_RANGE_SQ) continue;

    const scr = worldToScreen(sub.transform.position, camera, w, h);
    if (scr.z >= 1) continue;
    const dSq = (scr.x - cursorScreenX) ** 2 + (scr.y - cursorScreenY) ** 2;
    if (dSq < pickRadiusSq && dSq < bestScreenDistSq) {
      bestScreenDistSq = dSq;
      bestTarget = {
        kind: 'subsystem',
        subsystemEntity: sub.entity,
        parentEntity: sub.parent.parentId,
      };
    }
  }

  // Fallback: nearest in 3D
  if (!bestTarget) {
    let bestDist3dSq = Infinity;
    for (const e of enemies) {
      const dSq = playerPlane.position.distanceToSquared(e.transform.position);
      if (dSq < bestDist3dSq) {
        bestDist3dSq = dSq;
        bestTarget = {
          kind: 'fighter',
          entityId: e.entity,
          fighter: { entityId: e.entity, name: e.name.name },
        };
      }
    }
    for (const sub of aliveSubs) {
      const dSq = playerPlane.position.distanceToSquared(sub.transform.position);
      if (dSq < bestDist3dSq) {
        bestDist3dSq = dSq;
        bestTarget = {
          kind: 'subsystem',
          subsystemEntity: sub.entity,
          parentEntity: sub.parent.parentId,
        };
      }
    }
  }

  state.lockedTarget = bestTarget;
}
