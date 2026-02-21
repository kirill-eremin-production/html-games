import * as THREE from 'three';

// Muzzle positions in local fighter space (front tip of each weapon pod)
// Pod center: (0.2, -0.25, ±2.0), pod length 1.8 along X → tip at x = 0.2 + 0.9 = 1.1
export const GUN_OFFSET_R = new THREE.Vector3(1.1, -0.25, 2.0);
export const GUN_OFFSET_L = new THREE.Vector3(1.1, -0.25, -2.0);
