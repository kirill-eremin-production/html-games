import * as THREE from 'three';
import { getSystem, systemHasStation } from '../data';
import { campaign } from '../state';
import { labelElements, nearbySystemIds, projVec, refs, starMeshes } from './refs';

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

export function updateGalaxyLabels(cam: THREE.Camera): void {
  if (!refs.labelsContainer) return;
  const w = window.innerWidth;
  const h = window.innerHeight;

  for (const [id, label] of labelElements) {
    const mesh = starMeshes.get(id);
    if (!mesh) continue;

    projVec.copy(mesh.position);
    projVec.project(cam);

    // Behind camera
    if (projVec.z > 1) {
      label.style.display = 'none';
      continue;
    }

    const x = (0.5 + projVec.x / 2) * w;
    const y = (0.5 - projVec.y / 2) * h;

    label.style.display = '';
    label.style.left = `${x}px`;
    label.style.top = `${y + 18}px`;

    // Highlight current system
    label.classList.toggle('current', id === campaign.currentSystemId);
    // Highlight contract target
    label.classList.toggle('contract-target', campaign.activeContract?.targetSystemId === id);
  }
}
