import { state } from './state';

export type Action = 'thrust' | 'brake' | 'boost' | 'fire' | 'rollLeft' | 'rollRight';

const keyMap: Record<string, Action> = {
  KeyW: 'thrust',
  ShiftLeft: 'boost',
  ShiftRight: 'boost',
  KeyS: 'brake',
  KeyA: 'rollLeft',
  KeyD: 'rollRight',
  Space: 'fire',
  MouseLeft: 'fire',
};

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
