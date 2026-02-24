import type { EngineMesh } from '@/shared/core';
import { createTransformNode } from '@/shared/core';

export const explorationGroup = createTransformNode();
explorationGroup.setEnabled(false);

export const planetMeshes: EngineMesh[] = [];
export const asteroidMeshes: EngineMesh[] = [];

export const explorationRefs = {
  starMesh: null as EngineMesh | null,
  nearestPlanetIndex: -1,
};
