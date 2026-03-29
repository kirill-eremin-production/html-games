import type { TransformNode } from '@/shared/core';

/** Ссылка на BJS TransformNode для рендеринга и dispose */
export class MeshComponent {
  constructor(public mesh: TransformNode) {}
}
