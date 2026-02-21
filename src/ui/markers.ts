import * as THREE from 'three';
import { LOCK_RADIUS } from '../constants';
import { camera } from '../scene/setup';
import { state } from '../state';

const markersContainer = document.getElementById('target-markers')!;
const markerPool: HTMLElement[] = [];
const _mrkPos = new THREE.Vector3();
const ENEMY_RANGE_SQ = 800 * 800;
const SHIP_RANGE_SQ = 1500 * 1500;
const LOCK_RADIUS_SQ = LOCK_RADIUS * LOCK_RADIUS;
const CAP_LOCK_RADIUS_SQ = 40 * 40;

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

export function updateTargetMarkers(playerPlane: THREE.Group): void {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const cursorScreenX = (state.mouseX * 0.5 + 0.5) * w;
  const cursorScreenY = (state.mouseY * 0.5 + 0.5) * h;
  let usedCount = 0;

  for (const e of state.enemies) {
    const distSq = playerPlane.position.distanceToSquared(e.mesh.position);
    if (distSq > ENEMY_RANGE_SQ) continue;
    _mrkPos.copy(e.mesh.position).project(camera);
    const screenX = (_mrkPos.x * 0.5 + 0.5) * w;
    const screenY = (-_mrkPos.y * 0.5 + 0.5) * h;
    if (_mrkPos.z >= 1 || screenX < -20 || screenX > w + 20 || screenY < -20 || screenY > h + 20)
      continue;
    const el = getMarkerElement(usedCount);
    usedCount++;
    el.className = 'target-marker';
    el.style.left = screenX + 'px';
    el.style.top = screenY + 'px';
    const dxC = screenX - cursorScreenX,
      dyC = screenY - cursorScreenY;
    if (dxC * dxC + dyC * dyC < LOCK_RADIUS_SQ) el.classList.add('locked');
    const dist3d = Math.sqrt(distSq);
    el.children[1].textContent = Math.floor(dist3d) + 'm';
    el.children[2].textContent = e.name;
    const scale = Math.max(0.6, Math.min(1.5, 300 / dist3d));
    (el.children[0] as HTMLElement).style.width = 28 * scale + 'px';
    (el.children[0] as HTMLElement).style.height = 28 * scale + 'px';
  }

  for (const cs of state.capitalShips) {
    if (!cs.alive) continue;
    if (playerPlane.position.distanceToSquared(cs.mesh.position) > SHIP_RANGE_SQ) continue;
    for (const sub of cs.subsystems) {
      if (sub.health <= 0) continue;
      _mrkPos.copy(sub.center).applyMatrix4(cs.mesh.matrixWorld);
      const d = playerPlane.position.distanceTo(_mrkPos);
      _mrkPos.project(camera);
      const screenX = (_mrkPos.x * 0.5 + 0.5) * w;
      const screenY = (-_mrkPos.y * 0.5 + 0.5) * h;
      if (_mrkPos.z >= 1 || screenX < -20 || screenX > w + 20 || screenY < -20 || screenY > h + 20)
        continue;
      const el = getMarkerElement(usedCount);
      usedCount++;
      el.className = 'target-marker capital';
      el.style.left = screenX + 'px';
      el.style.top = screenY + 'px';
      const dxC = screenX - cursorScreenX,
        dyC = screenY - cursorScreenY;
      if (dxC * dxC + dyC * dyC < CAP_LOCK_RADIUS_SQ) el.classList.add('locked');
      el.children[1].textContent = Math.floor(d) + 'm';
      el.children[2].textContent = sub.name;
      (el.children[0] as HTMLElement).style.width = '36px';
      (el.children[0] as HTMLElement).style.height = '36px';
    }
  }

  for (let i = usedCount; i < markerPool.length; i++) {
    markerPool[i].style.display = 'none';
  }
}
