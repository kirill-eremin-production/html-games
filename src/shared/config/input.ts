import type { Action } from '@/shared/input';

export const defaultKeyMap: Record<string, Action> = {
  KeyW: 'thrust',
  ShiftLeft: 'boost',
  ShiftRight: 'boost',
  KeyS: 'brake',
  KeyA: 'rollLeft',
  KeyD: 'rollRight',
  Space: 'fire',
  MouseLeft: 'fire',
};
