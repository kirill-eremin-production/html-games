import type { EngineNode } from '@/shared/core';
import { disposeNode } from '@/shared/core';

export function disposeObject(obj: EngineNode): void {
  disposeNode(obj);
}
