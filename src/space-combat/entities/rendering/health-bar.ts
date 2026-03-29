import type { EngineMesh, TransformNode } from '@/shared/core';

/** Визуальная полоска здоровья (отдельно от данных HP) */
export class HealthBarComponent {
  constructor(
    public healthBar: TransformNode,
    public healthFill: EngineMesh,
  ) {}
}
