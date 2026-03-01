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

/** Действие игрока в режиме конструктора */
export type BuilderAction = 'place' | 'remove' | 'nextColor' | 'prevColor' | 'save';

/** Дополнительные действия для редактора интерьеров */
export type InteriorBuilderAction = 'nextBlockType' | 'prevBlockType';

/** Все возможные действия игрока */
export type Action = FlightAction | FPSAction | BuilderAction | InteriorBuilderAction;
