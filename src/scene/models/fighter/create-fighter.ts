import type { TransformNode } from '@/shared/core';
import { cloneFighterModel } from '../loader';

export function createFighter(color: number, teamColor: number): TransformNode {
  return cloneFighterModel(color, teamColor);
}
