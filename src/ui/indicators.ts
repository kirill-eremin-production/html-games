import * as THREE from 'three';
import { camera } from '../scene/setup';
import { state } from '../state';
import { DomPool } from '../utils/dom-pool';
import { clampToScreenEdge, formatDistance, worldToScreen } from '../utils/screen';

const indicatorsContainer = document.getElementById('enemy-indicators')!;
const pool = new DomPool(indicatorsContainer, () => {
  const el = document.createElement('div');
  el.className = 'enemy-indicator';
  el.innerHTML = '<div class="arrow"></div><div class="dist"></div>';
  return el;
});

export function updateEnemyIndicators(playerPlane: THREE.Group): void {
  const margin = 40;
  const w = window.innerWidth;
  const h = window.innerHeight;
  let usedCount = 0;

  for (const cs of state.capitalShips) {
    if (!cs.alive) continue;
    const scr = worldToScreen(cs.mesh.position, camera, w, h);
    const inFront = scr.z < 1;
    const onScreen =
      inFront && scr.x > margin && scr.x < w - margin && scr.y > margin && scr.y < h - margin;
    if (onScreen) continue;

    const el = pool.get(usedCount);
    usedCount++;
    const clamped = clampToScreenEdge(scr.x, scr.y, w, h, !inFront, margin);

    const dx = scr.x - w / 2;
    const dy = scr.y - h / 2;
    const angle = Math.atan2(inFront ? dy : -dy, inFront ? dx : -dx);

    const dist3d = playerPlane.position.distanceTo(cs.mesh.position);
    el.style.left = clamped.x + 'px';
    el.style.top = clamped.y + 'px';
    el.style.transform = 'translate(-50%, -50%)';
    (el.children[0] as HTMLElement).style.transform = `rotate(${(angle * 180) / Math.PI - 90}deg)`;
    (el.children[0] as HTMLElement).style.borderBottomColor = '#ff8800';
    el.children[1].textContent = '\u2605 ' + formatDistance(dist3d);
    (el.children[1] as HTMLElement).style.color = '#ff8800';
    el.style.opacity = '0.9';
  }

  pool.hideFrom(usedCount);
}
