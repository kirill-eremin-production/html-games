import { updateExplorationHud } from '../scene/hud';
import { updateExplorationScene } from '../scene/update';
import { state } from '@/shared/state';

import { updateFlightHUD, updateMessageTimer } from '@/features/combat/common-updates';
import { playerPlane } from '@/features/flight/player-system';
import type { GameSystem } from '@/shared/types';

import { updatePlanetMarkers } from '../ui/planet-markers';

export const explorationSceneSystem: GameSystem = {
  id: 'exploration-scene',
  update(dt) {
    state.explorationTime += dt;
    updateExplorationScene(dt, state.explorationTime);
    updateExplorationHud();
  },
};

export const explorationHudSystem: GameSystem = {
  id: 'exploration-hud',
  update(dt) {
    state.hudFrameCounter++;
    if (state.hudFrameCounter % 2 === 0) {
      updateFlightHUD();
      updatePlanetMarkers(playerPlane);
    }
    updateMessageTimer(dt);
  },
};
