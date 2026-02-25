import type { EngineMesh, TransformNode } from '@/shared/core';

/** Здоровье сущности с визуальной полоской */
export class HealthComponent {
  constructor(
    public current: number,
    public max: number,
    public healthBar: TransformNode,
    public healthFill: EngineMesh,
  ) {}
}
