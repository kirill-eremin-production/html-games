import { hideStation, showStation } from './station-ui';

import type { GameModeHandler, StationModeContext } from '@/shared/types';

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
