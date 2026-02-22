import { updateStarfieldPosition } from '../scene/starfield';
import { state } from '../state';
import { hideMessage, updateHUD } from '../ui/hud';
import { drawMinimap } from '../ui/minimap';
import { updatePlanetMarkers } from '../ui/planet-markers';
import { updateBullets } from './bullets';
import { updateExplosions } from './explosions';
import { playerPlane, updatePlayer } from './player';

export function updateFlightSystems(dt: number): void {
  updatePlayer(dt);
  updateBullets(dt);
  updateExplosions(dt);
  updateStarfieldPosition(playerPlane.position);
}

export function updateFlightHUD(): void {
  updateHUD();
  updatePlanetMarkers(playerPlane);
  drawMinimap(playerPlane);
}

export function updateMessageTimer(dt: number): void {
  if (state.messageTimer > 0) {
    state.messageTimer -= dt;
    if (state.messageTimer <= 0) hideMessage();
  }
}
