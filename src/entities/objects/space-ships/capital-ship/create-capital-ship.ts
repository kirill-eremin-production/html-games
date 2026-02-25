import type { TransformNode } from '@/shared/core';
import { cloneCapitalShipModel } from '@/shared/model-loader';

export function createCapitalShip(index: number, hullColor?: number): TransformNode {
  return cloneCapitalShipModel(index, hullColor ?? 0x667788);
}
