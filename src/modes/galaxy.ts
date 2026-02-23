import { disableGalaxyControls, enableGalaxyControls } from '../campaign/galaxy-controls';
import { updateTravelAnimation } from '../campaign/galaxy-controls';
import {
  buildGalaxyScene,
  galaxyGroup,
  hideGalaxy,
  highlightRoutes,
  showGalaxy,
  updateContractMarker,
  updateGalaxyLabels,
  updateGalaxyScene,
  updatePlayerShipPosition,
} from '../campaign/galaxy-scene';
import { galaxyCamera } from '../campaign/galaxy-controls/camera';
import { addToScene } from '../core';
import { playerPlane } from '../systems/player';
import type { GalaxyModeContext, GameModeHandler } from './types';

let galaxyBuilt = false;

function ensureGalaxyBuilt(): void {
  if (!galaxyBuilt) {
    buildGalaxyScene();
    addToScene(galaxyGroup);
    galaxyBuilt = true;
  }
}

export const galaxyMode: GameModeHandler = {
  update(dt: number) {
    updateGalaxyScene(dt);
    updateTravelAnimation(dt);
    updateGalaxyLabels(galaxyCamera);
  },

  enter(context?: GalaxyModeContext) {
    const resetCamera = context?.resetCamera !== false;
    const onStation = context?.onStation;
    const onCombat = context?.onCombat;
    const onExploration = context?.onExploration;

    ensureGalaxyBuilt();
    playerPlane.visible = false;

    showGalaxy();
    updatePlayerShipPosition();
    updateContractMarker();
    highlightRoutes();

    if (onStation && onCombat && onExploration) {
      enableGalaxyControls(onStation, onCombat, onExploration, resetCamera);
    }
  },

  exit() {
    disableGalaxyControls();
    hideGalaxy();
  },
};
