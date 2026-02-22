import { updateExplorationHud } from '../campaign/exploration-scene/hud';
import { updateExplorationScene } from '../campaign/exploration-scene/update';
import { refs } from '../main/refs';
import { updateStarfieldPosition } from '../scene/starfield';
import { state } from '../state';
import { updateBullets } from '../systems/bullets';
import { updateExplosions } from '../systems/explosions';
import { playerPlane, updatePlayer } from '../systems/player';
import { hideMessage, updateHUD } from '../ui/hud';
import { drawMinimap } from '../ui/minimap';
import { updatePlanetMarkers } from '../ui/planet-markers';
import type { GameModeHandler } from './types';

export const explorationMode: GameModeHandler = {
  update(dt: number) {
    refs.explorationTime += dt;
    updatePlayer(dt);
    updateBullets(dt);
    updateExplosions(dt);
    updateExplorationScene(dt, refs.explorationTime);
    updateExplorationHud();
    updateStarfieldPosition(playerPlane.position);

    refs.hudFrameCounter++;
    if (refs.hudFrameCounter % 2 === 0) {
      updateHUD();
      updatePlanetMarkers(playerPlane);
      drawMinimap(playerPlane);
    }

    if (state.messageTimer > 0) {
      state.messageTimer -= dt;
      if (state.messageTimer <= 0) hideMessage();
    }
  },
  enter() {},
  exit() {},
};
