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
import { camera, scene } from '../scene/setup';
import { playerPlane } from '../systems/player';
import type { GameModeHandler, ModeContext } from './types';

let galaxyBuilt = false;

function ensureGalaxyBuilt(): void {
  if (!galaxyBuilt) {
    buildGalaxyScene();
    scene.add(galaxyGroup);
    galaxyBuilt = true;
  }
}

export const galaxyMode: GameModeHandler = {
  update(dt: number) {
    updateGalaxyScene(dt);
    updateTravelAnimation(dt);
    updateGalaxyLabels(camera);
  },

  enter(context?: ModeContext) {
    const resetCamera = context?.resetCamera !== false;
    const onStation = context?.onStation as (() => void) | undefined;
    const onCombat = context?.onCombat as (() => void) | undefined;
    const onExploration = context?.onExploration as (() => void) | undefined;

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
