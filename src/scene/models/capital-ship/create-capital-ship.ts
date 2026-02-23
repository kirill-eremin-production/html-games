import type { TransformNode } from '../../../core';
import { cloneCapitalShipModel } from '../loader';

export function createCapitalShip(index: number, hullColor?: number): TransformNode {
  return cloneCapitalShipModel(index, hullColor ?? 0x667788);
}
