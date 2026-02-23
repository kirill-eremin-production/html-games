import { state } from '../state';
import { hideMessage, updateHUD } from '../ui/hud';
import { drawMinimap } from '../ui/minimap';
import { updatePlanetMarkers } from '../ui/planet-markers';

import { playerPlane } from './player';

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
