import * as THREE from 'three';
import { LOCK_RADIUS } from '../constants';
import { camera } from '../scene/setup';
import { state } from '../state';

const markersContainer = document.getElementById('target-markers')!;
const markerPool: HTMLElement[] = [];

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
    const dist3d = playerPlane.position.distanceTo(e.mesh.position);
    if (dist3d > 800) continue;
    const pos = e.mesh.position.clone().project(camera);
    const screenX = (pos.x * 0.5 + 0.5) * w;
    const screenY = (-pos.y * 0.5 + 0.5) * h;
    if (pos.z >= 1 || screenX < -20 || screenX > w + 20 || screenY < -20 || screenY > h + 20)
      continue;
    const el = getMarkerElement(usedCount);
    usedCount++;
    el.className = 'target-marker';
    el.style.left = screenX + 'px';
    el.style.top = screenY + 'px';
    const dxC = screenX - cursorScreenX,
      dyC = screenY - cursorScreenY;
    if (Math.sqrt(dxC * dxC + dyC * dyC) < LOCK_RADIUS) el.classList.add('locked');
    el.children[1].textContent = Math.floor(dist3d) + 'm';
    el.children[2].textContent = e.name;
    const scale = Math.max(0.6, Math.min(1.5, 300 / dist3d));
    (el.children[0] as HTMLElement).style.width = 28 * scale + 'px';
    (el.children[0] as HTMLElement).style.height = 28 * scale + 'px';
  }

  for (const cs of state.capitalShips) {
    if (!cs.alive) continue;
    const shipDist = playerPlane.position.distanceTo(cs.mesh.position);
    if (shipDist > 1500) continue;
    for (const sub of cs.subsystems) {
      if (sub.health <= 0) continue;
      const worldPos = sub.center.clone().applyMatrix4(cs.mesh.matrixWorld);
      const pos = worldPos.clone().project(camera);
      const screenX = (pos.x * 0.5 + 0.5) * w;
      const screenY = (-pos.y * 0.5 + 0.5) * h;
      if (pos.z >= 1 || screenX < -20 || screenX > w + 20 || screenY < -20 || screenY > h + 20)
        continue;
      const el = getMarkerElement(usedCount);
      usedCount++;
      el.className = 'target-marker capital';
      el.style.left = screenX + 'px';
      el.style.top = screenY + 'px';
      const dxC = screenX - cursorScreenX,
        dyC = screenY - cursorScreenY;
      if (Math.sqrt(dxC * dxC + dyC * dyC) < 40) el.classList.add('locked');
      const d = playerPlane.position.distanceTo(worldPos);
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
