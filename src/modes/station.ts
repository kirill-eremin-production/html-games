import { hideStation, showStation } from '../campaign/station-ui';
import type { GameModeHandler, ModeContext } from './types';

export const stationMode: GameModeHandler = {
  update() {},

  enter(context?: ModeContext) {
    const onBack = context?.onBack as (() => void) | undefined;
    if (onBack) showStation(onBack);
  },

  exit() {
    hideStation();
  },
};
