import type { Action } from '@/shared/input';

/** Раскладка клавиш для режима полёта (используется также по умолчанию) */
export const flightKeyMap: Record<string, Action> = {
  KeyW: 'thrust',
  ShiftLeft: 'boost',
  ShiftRight: 'boost',
  KeyS: 'brake',
  KeyA: 'rollLeft',
  KeyD: 'rollRight',
  Space: 'fire',
  MouseLeft: 'fire',
};

/** Раскладка клавиш для FPS-режима (ангар) */
export const fpsKeyMap: Record<string, Action> = {
  KeyW: 'moveForward',
  KeyS: 'moveBack',
  KeyA: 'strafeLeft',
  KeyD: 'strafeRight',
  KeyE: 'interact',
  Space: 'jump',
  ShiftLeft: 'sprint',
  ShiftRight: 'sprint',
};

/** Раскладка по умолчанию — полётная (используется в меню, exploration и т.д.) */
export const defaultKeyMap: Record<string, Action> = flightKeyMap;
