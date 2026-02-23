import type { TransformNode } from '@/shared/core';
import { cloneFighterModel } from '@/shared/model-loader';

export function createFighter(color: number, teamColor: number): TransformNode {
  return cloneFighterModel(color, teamColor);
}
