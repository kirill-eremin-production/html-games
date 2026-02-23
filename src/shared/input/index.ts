import { defaultKeyMap } from '@/shared/config/input';
import { state } from '@/shared/state';
import type { GameSystem } from '@/shared/types';

import type { Action } from './types';

export type { Action } from './types';

/** Текущая раскладка клавиш */
let keyMap: Record<string, Action> = { ...defaultKeyMap };

/** Текущее состояние действий (нажато/отпущено) */
export const actions: Record<Action, boolean> = {
  thrust: false,
  brake: false,
  boost: false,
  fire: false,
  rollLeft: false,
  rollRight: false,
};

/** Позиция прицела (нормализованные координаты мыши) */
export const aim = { x: 0, y: 0 };

/** Установить новую раскладку клавиш */
export function setKeyMap(map: Record<string, Action>): void {
  keyMap = { ...map };
}

/** Получить текущую раскладку (только для чтения) */
export function getKeyMap(): Readonly<Record<string, Action>> {
  return keyMap;
}

/** Обновить состояние действий на основе нажатых клавиш */
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

/** Система ввода — обновляет actions каждый кадр */
export const inputSystem: GameSystem = {
  id: 'input',
  update() {
    updateActions();
  },
};
