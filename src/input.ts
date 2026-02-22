import { defaultKeyMap } from './config/input';
import { state } from './state';
import type { GameSystem } from './systems/types';

export type Action = 'thrust' | 'brake' | 'boost' | 'fire' | 'rollLeft' | 'rollRight';

let keyMap: Record<string, Action> = { ...defaultKeyMap };

export function setKeyMap(map: Record<string, Action>): void {
  keyMap = { ...map };
}

export function getKeyMap(): Readonly<Record<string, Action>> {
  return keyMap;
}

export const actions: Record<Action, boolean> = {
  thrust: false,
  brake: false,
  boost: false,
  fire: false,
  rollLeft: false,
  rollRight: false,
};

export const aim = { x: 0, y: 0 };

export function updateActions(): void {
  for (const action of Object.keys(actions) as Action[]) {
    actions[action] = false;
  }
  for (const [key, action] of Object.entries(keyMap)) {
    if (state.keys[key]) actions[action] = true;
  }
  aim.x = state.mouseX;
  aim.y = state.mouseY;
}

// ── GameSystem adapter ──────────────────────────────────────────────────────

export const inputSystem: GameSystem = {
  id: 'input',
  update() {
    updateActions();
  },
};
