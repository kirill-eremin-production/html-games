import { getSystem } from '../data';
import { campaign } from '../state';

import { getExplorationDetail } from './index';
import { explorationRefs } from './refs';
import { EXPLORATION_TEMPLATES } from './templates';

let hudContainer: HTMLElement | null = null;
let planetInfoPanel: HTMLElement | null = null;
let onReturnToGalaxy: (() => void) | null = null;
let lastShownPlanetIdx = -2; // force first update

export function setupExplorationHud(returnCb: () => void): void {
  onReturnToGalaxy = returnCb;

  if (!hudContainer) {
    hudContainer = document.createElement('div');
    hudContainer.id = 'exploration-hud';
    document.body.appendChild(hudContainer);
  }

  if (!planetInfoPanel) {
    planetInfoPanel = document.createElement('div');
    planetInfoPanel.id = 'exploration-planet-info';
    document.body.appendChild(planetInfoPanel);
  }

  const sys = getSystem(campaign.currentSystemId);
  hudContainer.innerHTML = EXPLORATION_TEMPLATES.hud(sys.name);
  hudContainer.style.display = 'block';
  planetInfoPanel.style.display = 'block';
  lastShownPlanetIdx = -2;

  const returnBtn = document.getElementById('expl-return-btn');
  if (returnBtn) {
    returnBtn.addEventListener('click', () => {
      if (onReturnToGalaxy) onReturnToGalaxy();
    });
  }
}

export function updateExplorationHud(): void {
  if (!planetInfoPanel) return;

  const idx = explorationRefs.nearestPlanetIndex;
  if (idx === lastShownPlanetIdx) return;
  lastShownPlanetIdx = idx;

  if (idx < 0) {
    planetInfoPanel.innerHTML = EXPLORATION_TEMPLATES.noPlanetNearby();
  } else {
    const detail = getExplorationDetail();
    if (detail && detail.planets[idx]) {
      planetInfoPanel.innerHTML = EXPLORATION_TEMPLATES.planetInfo(detail.planets[idx]);
    }
  }
}

export function hideExplorationHud(): void {
  if (hudContainer) hudContainer.style.display = 'none';
  if (planetInfoPanel) planetInfoPanel.style.display = 'none';
}
