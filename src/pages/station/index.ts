import type { GameModeHandler, StationModeContext } from '@/shared/types';

import { hideStation, showStation } from './station-ui';

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
