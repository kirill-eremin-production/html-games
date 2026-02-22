import * as THREE from 'three';
import { getExplorationDetail } from '../campaign/exploration-scene/index';
import { planetMeshes } from '../campaign/exploration-scene/refs';
import { camera } from '../scene/setup';

const _pos = new THREE.Vector3();
let container: HTMLElement | null = null;
const markerPool: HTMLElement[] = [];

function ensureContainer(): HTMLElement {
  if (!container) {
    container = document.createElement('div');
    container.id = 'planet-markers';
    document.body.appendChild(container);
  }
  return container;
}

function getMarkerEl(index: number): HTMLElement {
  const c = ensureContainer();
  if (index < markerPool.length) {
    markerPool[index].style.display = 'block';
    return markerPool[index];
  }
  const el = document.createElement('div');
  el.className = 'planet-marker';
  el.innerHTML =
    '<div class="pm-icon">\u25C6</div>' +
    '<div class="pm-label"></div>' +
    '<div class="pm-dist"></div>';
  c.appendChild(el);
  markerPool.push(el);
  return el;
}

export function updatePlanetMarkers(playerPlane: THREE.Group): void {
  const detail = getExplorationDetail();
  if (!detail || planetMeshes.length === 0) {
    for (const el of markerPool) el.style.display = 'none';
    return;
  }

  const w = window.innerWidth;
  const h = window.innerHeight;
  const halfW = w / 2;
  const halfH = h / 2;
  const margin = 50;
  let usedCount = 0;

  for (let i = 0; i < planetMeshes.length; i++) {
    const mesh = planetMeshes[i];
    const planet = detail.planets[i];
    if (!planet) continue;

    const dist3d = playerPlane.position.distanceTo(mesh.position);
    _pos.copy(mesh.position).project(camera);

    const screenX = (_pos.x * 0.5 + 0.5) * w;
    const screenY = (-_pos.y * 0.5 + 0.5) * h;
    const inFront = _pos.z < 1;
    const onScreen =
      inFront &&
      screenX > margin &&
      screenX < w - margin &&
      screenY > margin &&
      screenY < h - margin;

    const el = getMarkerEl(usedCount++);
    const distText =
      dist3d < 1000
        ? Math.floor(dist3d) + '\u043C'
        : (dist3d / 1000).toFixed(1) + '\u043A\u043C';

    if (onScreen) {
      el.className = 'planet-marker on-screen';
      el.style.left = screenX + 'px';
      el.style.top = screenY + 'px';
    } else {
      el.className = 'planet-marker off-screen';
      let dx = screenX - halfW;
      let dy = screenY - halfH;
      if (!inFront) {
        dx = -dx;
        dy = -dy;
      }
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
      el.style.left = clampedX + 'px';
      el.style.top = clampedY + 'px';
    }

    (el.children[1] as HTMLElement).textContent = planet.name;
    (el.children[2] as HTMLElement).textContent = distText;
  }

  for (let i = usedCount; i < markerPool.length; i++) {
    markerPool[i].style.display = 'none';
  }
}

export function hidePlanetMarkers(): void {
  for (const el of markerPool) el.style.display = 'none';
}
