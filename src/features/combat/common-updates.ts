import { state } from '@/shared/state';

import { playerPlane } from '@/features/flight/player-system';
import { hideMessage, updateHUD } from '@/features/hud/hud';
import { drawMinimap } from '@/features/hud/minimap';

export function updateFlightHUD(): void {
  updateHUD();
  drawMinimap(playerPlane);
}

export function updateMessageTimer(dt: number): void {
  if (state.messageTimer > 0) {
    state.messageTimer -= dt;
    if (state.messageTimer <= 0) hideMessage();
  }
}
