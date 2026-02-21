import * as THREE from 'three';
import { camera } from '../scene/setup';
import { state } from '../state';

const indicatorsContainer = document.getElementById('enemy-indicators')!;
const indicatorPool: HTMLElement[] = [];
const _indPos = new THREE.Vector3();

function getIndicatorElement(index: number): HTMLElement {
  if (index < indicatorPool.length) {
    indicatorPool[index].style.display = 'flex';
    return indicatorPool[index];
  }
  const el = document.createElement('div');
  el.className = 'enemy-indicator';
  el.innerHTML = '<div class="arrow"></div><div class="dist"></div>';
  indicatorsContainer.appendChild(el);
  indicatorPool.push(el);
  return el;
}

export function updateEnemyIndicators(playerPlane: THREE.Group): void {
  const margin = 40;
  const w = window.innerWidth;
  const h = window.innerHeight;
  const halfW = w / 2;
  const halfH = h / 2;
  let usedCount = 0;

  for (const cs of state.capitalShips) {
    if (!cs.alive) continue;
    _indPos.copy(cs.mesh.position).project(camera);
    const screenX = (_indPos.x * 0.5 + 0.5) * w;
    const screenY = (-_indPos.y * 0.5 + 0.5) * h;
    const inFront = _indPos.z < 1;
    const onScreen =
      inFront &&
      screenX > margin &&
      screenX < w - margin &&
      screenY > margin &&
      screenY < h - margin;
    if (onScreen) continue;

    const el = getIndicatorElement(usedCount);
    usedCount++;
    let dx = screenX - halfW;
    let dy = screenY - halfH;
    if (!inFront) {
      dx = -dx;
      dy = -dy;
    }
    const angle = Math.atan2(dy, dx);
    const edgeX = halfW - margin;
    const edgeY = halfH - margin;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    let clampedX: number, clampedY: number;
    if (absDx < 0.001 && absDy < 0.001) {
      clampedX = halfW;
      clampedY = margin;
    } else {
      const scaleX = absDx > 0.001 ? edgeX / absDx : Infinity;
      const scaleY = absDy > 0.001 ? edgeY / absDy : Infinity;
      const s = Math.min(scaleX, scaleY);
      clampedX = halfW + dx * s;
      clampedY = halfH + dy * s;
    }
    const dist3d = playerPlane.position.distanceTo(cs.mesh.position);
    const distText = dist3d < 1000 ? Math.floor(dist3d) + 'm' : (dist3d / 1000).toFixed(1) + 'km';
    el.style.left = clampedX + 'px';
    el.style.top = clampedY + 'px';
    el.style.transform = 'translate(-50%, -50%)';
    (el.children[0] as HTMLElement).style.transform = `rotate(${(angle * 180) / Math.PI - 90}deg)`;
    (el.children[0] as HTMLElement).style.borderBottomColor = '#ff8800';
    el.children[1].textContent = '\u2605 ' + distText;
    (el.children[1] as HTMLElement).style.color = '#ff8800';
    el.style.opacity = '0.9';
  }

  for (let i = usedCount; i < indicatorPool.length; i++) {
    indicatorPool[i].style.display = 'none';
  }
}
