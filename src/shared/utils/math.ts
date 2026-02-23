import type { Vector3 } from '@/shared/core';

/** Adds uniform random noise to a direction vector and re-normalizes.
 *  Mutates the vector in-place. */
export function addDirectionNoise(dir: Vector3, spread: number): Vector3 {
  dir.x += (Math.random() - 0.5) * spread;
  dir.y += (Math.random() - 0.5) * spread;
  dir.z += (Math.random() - 0.5) * spread;
  return dir.normalize();
}

/** Returns a random float in [min, max). */
export function randomRange(min: number, max: number): number {
  return min + Math.random() * (max - min);
}
