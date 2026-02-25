/** Действие игрока, привязанное к клавише (полёт) */
export type FlightAction = 'thrust' | 'brake' | 'boost' | 'fire' | 'rollLeft' | 'rollRight';

/** Действие игрока в FPS-режиме (ангар) */
export type FPSAction =
  | 'moveForward'
  | 'moveBack'
  | 'strafeLeft'
  | 'strafeRight'
  | 'interact'
  | 'jump'
  | 'sprint';

/** Все возможные действия игрока */
export type Action = FlightAction | FPSAction;
