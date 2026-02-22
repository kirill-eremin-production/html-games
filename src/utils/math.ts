import * as THREE from 'three';

/** Adds uniform random noise to a direction vector and re-normalizes.
 *  Mutates the vector in-place. */
export function addDirectionNoise(dir: THREE.Vector3, spread: number): THREE.Vector3 {
  dir.x += (Math.random() - 0.5) * spread;
  dir.y += (Math.random() - 0.5) * spread;
  dir.z += (Math.random() - 0.5) * spread;
  return dir.normalize();
}

/** Returns a random float in [min, max). */
export function randomRange(min: number, max: number): number {
  return min + Math.random() * (max - min);
}
