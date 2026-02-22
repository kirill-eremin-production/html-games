import { updateTravelAnimation } from '../campaign/galaxy-controls';
import { updateGalaxyLabels, updateGalaxyScene } from '../campaign/galaxy-scene';
import { camera } from '../scene/setup';
import type { GameModeHandler } from './types';

export const galaxyMode: GameModeHandler = {
  update(dt: number) {
    updateGalaxyScene(dt);
    updateTravelAnimation(dt);
    updateGalaxyLabels(camera);
  },
  enter() {},
  exit() {},
};
