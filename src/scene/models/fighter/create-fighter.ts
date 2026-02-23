import type { TransformNode } from '../../../core';
import { cloneFighterModel } from '../loader';

export function createFighter(color: number, teamColor: number): TransformNode {
  return cloneFighterModel(color, teamColor);
}
