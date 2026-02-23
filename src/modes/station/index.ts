import { hideStation, showStation } from '@/campaign/station-ui';

import type { GameModeHandler, StationModeContext } from '../types';

export const stationMode: GameModeHandler = {
  update() {},

  enter(context?: StationModeContext) {
    const onBack = context?.onBack;
    if (onBack) showStation(onBack);
  },

  exit() {
    hideStation();
  },
};
