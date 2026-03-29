import { addToScene } from '@/shared/core';
import { engine } from '@/shared/engine';
import type { GalaxyModeContext, GameModeHandler } from '@/shared/types';

import { playerPlane } from '@/features/flight/player-system';
import { hideHUD } from '@/features/hud/hud';

import { disableGalaxyControls, enableGalaxyControls } from './controls';
import { updateTravelAnimation } from './controls';
import { galaxyCamera } from './controls/camera';
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
} from './scene';

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
    hideHUD();
    playerPlane.setVisibleRecursive(false);
    engine.resize();

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
