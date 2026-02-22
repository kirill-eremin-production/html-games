import type { GameMode } from '../campaign/types';
import type { GameModeHandler, ModeContext } from './types';

const modes = new Map<string, GameModeHandler>();
let currentHandler: GameModeHandler | null = null;
let currentName: GameMode = 'menu';

export function registerMode(name: string, handler: GameModeHandler): void {
  modes.set(name, handler);
}

export function switchMode(name: GameMode, context?: ModeContext): void {
  if (currentHandler) currentHandler.exit();
  currentName = name;
  currentHandler = modes.get(name) ?? null;
  if (currentHandler) currentHandler.enter(context);
}

export function getCurrentModeName(): GameMode {
  return currentName;
}

export function updateCurrentMode(dt: number): void {
  if (currentHandler) currentHandler.update(dt);
}
