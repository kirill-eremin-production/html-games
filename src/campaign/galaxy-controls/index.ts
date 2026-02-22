import { highlightRoutes, selectSystem, updateContractMarker } from '../galaxy-scene';
import { centerOnCurrentSystem, setupGalaxyCamera, updateCamera } from './camera';
import {
  deselectSystem,
  ensureUI,
  hideHud,
  setHudCallbacks,
  showHud,
  updateGalaxyHud,
} from './hud';
import { addInputListeners, removeInputListeners, setInputEnabled } from './input';
import { isTraveling, setOnStartCombat, startTravelAnimation } from './travel';

export { updateTravelAnimation } from './travel';

// ── Enable / Disable ─────────────────────────────────────────────────────────

export function enableGalaxyControls(
  stationCb: () => void,
  combatCb: () => void,
  exploreCb: () => void,
  resetCamera = true,
): void {
  ensureUI();
  setInputEnabled(true);
  setOnStartCombat(combatCb);

  setHudCallbacks(
    (targetId) => {
      if (isTraveling()) return;
      startTravelAnimation(targetId);
    },
    stationCb,
    exploreCb,
  );

  addInputListeners();

  if (resetCamera) {
    setupGalaxyCamera();
  } else {
    centerOnCurrentSystem();
    updateCamera();
  }

  highlightRoutes();
  updateContractMarker();
  updateGalaxyHud();
  deselectSystem();
  showHud();

  document.body.classList.add('galaxy-mode');
}

export function disableGalaxyControls(): void {
  setInputEnabled(false);
  removeInputListeners();
  hideHud();
  document.body.classList.remove('galaxy-mode');
}
