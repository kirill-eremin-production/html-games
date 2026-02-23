import { TransformNode } from '@/shared/core';
import { camera } from '@/shared/engine';
import { DomPool } from '@/shared/lib/dom-pool';
import { clampToScreenEdge, formatDistance, isOnScreen, worldToScreen } from '@/shared/lib/screen';
import { planetMeshes } from '@/shared/refs/exploration-refs';

import { getExplorationDetail } from '../scene/index';

let container: HTMLElement | null = null;

function ensureContainer(): HTMLElement {
  if (!container) {
    container = document.createElement('div');
    container.id = 'planet-markers';
    document.body.appendChild(container);
  }
  return container;
}

let pool: DomPool | null = null;

function getPool(): DomPool {
  if (!pool) {
    pool = new DomPool(ensureContainer(), () => {
      const el = document.createElement('div');
      el.className = 'planet-marker';
      el.innerHTML =
        '<div class="pm-icon">\u25C6</div>' +
        '<div class="pm-label"></div>' +
        '<div class="pm-dist"></div>';
      return el;
    });
  }
  return pool;
}

export function updatePlanetMarkers(playerPlane: TransformNode): void {
  const detail = getExplorationDetail();
  const p = getPool();
  if (!detail || planetMeshes.length === 0) {
    p.hideAll();
    return;
  }

  const w = window.innerWidth;
  const h = window.innerHeight;
  const margin = 50;
  let usedCount = 0;

  for (let i = 0; i < planetMeshes.length; i++) {
    const mesh = planetMeshes[i];
    const planet = detail.planets[i];
    if (!planet) continue;

    const dist3d = playerPlane.position.distanceTo(mesh.position);
    const scr = worldToScreen(mesh.position, camera, w, h);
    const inFront = scr.z < 1;
    const onScr = inFront && isOnScreen(scr.x, scr.y, w, h, margin);

    const el = p.get(usedCount++);
    const distText = formatDistance(dist3d);

    if (onScr) {
      el.className = 'planet-marker on-screen';
      el.style.left = scr.x + 'px';
      el.style.top = scr.y + 'px';
    } else {
      el.className = 'planet-marker off-screen';
      const clamped = clampToScreenEdge(scr.x, scr.y, w, h, !inFront, margin);
      el.style.left = clamped.x + 'px';
      el.style.top = clamped.y + 'px';
    }

    (el.children[1] as HTMLElement).textContent = planet.name;
    (el.children[2] as HTMLElement).textContent = distText;
  }

  p.hideFrom(usedCount);
}

export function hidePlanetMarkers(): void {
  getPool().hideAll();
}
