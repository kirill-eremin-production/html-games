import type { Vector3 } from '@/shared/core';

/** Снаряд (лазер) */
export class ProjectileComponent {
  constructor(
    public velocity: Vector3,
    public life: number,
    public damage: number,
    public shooterName: string,
  ) {}
}
