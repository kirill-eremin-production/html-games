import type { EngineMesh, EngineSprite, TransformNode } from '../../core';
import { createTransformNode } from '../../core';

export const explorationGroup = createTransformNode();
explorationGroup.visible = false;

export const planetMeshes: EngineMesh[] = [];
export const asteroidMeshes: EngineMesh[] = [];

export const explorationRefs = {
  starMesh: null as EngineMesh | null,
  starGlow: null as EngineSprite | null,
  nearestPlanetIndex: -1,
};
