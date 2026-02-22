import * as THREE from 'three';

export const explorationGroup = new THREE.Group();
explorationGroup.visible = false;

export const planetMeshes: THREE.Mesh[] = [];
export const asteroidMeshes: THREE.Mesh[] = [];

export const explorationRefs = {
  starMesh: null as THREE.Mesh | null,
  starGlow: null as THREE.Sprite | null,
  nearestPlanetIndex: -1,
};
