import type { ProjectionCamera } from '../../core';
import { worldToScreen } from '../../utils/screen';
import { getSystem, systemHasStation } from '../data';
import { campaign } from '../state';

import { labelElements, nearbySystemIds, refs, starMeshes } from './refs';

export function rebuildLabels(): void {
  if (!refs.labelsContainer) {
    refs.labelsContainer = document.createElement('div');
    refs.labelsContainer.id = 'galaxy-labels';
    document.body.appendChild(refs.labelsContainer);
  }
  for (const el of labelElements.values()) el.remove();
  labelElements.clear();

  for (const id of nearbySystemIds) {
    const sys = getSystem(id);
    if (!sys) continue;
    const label = document.createElement('div');
    label.className = 'galaxy-label';
    label.textContent = sys.name + (systemHasStation(id) ? ' \u2302' : '');
    refs.labelsContainer.appendChild(label);
    labelElements.set(sys.id, label);
  }
}

export function updateGalaxyLabels(cam: ProjectionCamera): void {
  if (!refs.labelsContainer) return;
  const w = window.innerWidth;
  const h = window.innerHeight;

  for (const [id, label] of labelElements) {
    const mesh = starMeshes.get(id);
    if (!mesh) continue;

    const scr = worldToScreen(mesh.position, cam, w, h);

    // Behind camera
    if (scr.z > 1) {
      label.style.display = 'none';
      continue;
    }

    label.style.display = '';
    label.style.left = `${scr.x}px`;
    label.style.top = `${scr.y + 18}px`;

    // Highlight current system
    label.classList.toggle('current', id === campaign.currentSystemId);
    // Highlight contract target
    label.classList.toggle('contract-target', campaign.activeContract?.targetSystemId === id);
  }
}
