import * as THREE from 'three';
import { cloneCapitalShipModel } from '../loader';

export function createCapitalShip(index: number, hullColor?: number): THREE.Group {
  return cloneCapitalShipModel(index, hullColor ?? 0x667788);
}
