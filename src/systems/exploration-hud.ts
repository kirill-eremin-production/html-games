import { updateExplorationHud } from '../campaign/exploration-scene/hud';
import { updateExplorationScene } from '../campaign/exploration-scene/update';
import { state } from '../state';

import { updateFlightHUD, updateMessageTimer } from './common-updates';
import type { GameSystem } from './types';

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
    }
    updateMessageTimer(dt);
  },
};
