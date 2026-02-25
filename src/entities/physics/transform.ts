import type { Quaternion, Vector3 } from '@/shared/core';

/** Позиция и вращение сущности в мировом пространстве */
export class TransformComponent {
  constructor(
    public position: Vector3,
    public quaternion: Quaternion,
  ) {}
}
