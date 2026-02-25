import type { Vector3 } from '@/shared/core';

/** Снаряд (лазер) */
export class ProjectileComponent {
  constructor(
    public velocity: Vector3,
    public damage: number,
    public shooterName: string,
  ) {}
}
