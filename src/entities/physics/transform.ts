import type { TransformNode } from '@/shared/core';

/** 3D-объект сущности на сцене */
export class TransformComponent {
  constructor(public mesh: TransformNode) {}
}
