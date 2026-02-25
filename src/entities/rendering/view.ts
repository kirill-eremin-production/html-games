import type { TransformNode } from '@/shared/core';

/** Внутренний компонент — ссылка на BJS TransformNode. Управляется ТОЛЬКО RenderSystem. */
export class ViewComponent {
  constructor(public node: TransformNode) {}
}
