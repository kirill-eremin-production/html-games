import * as THREE from 'three';

import { cloneFighterModel } from '../loader';

export function createFighter(color: number, teamColor: number): THREE.Group {
  return cloneFighterModel(color, teamColor);
}
