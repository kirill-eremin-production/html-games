import type { EngineNode } from '../core';
import { disposeNode } from '../core';

export function disposeObject(obj: EngineNode): void {
  disposeNode(obj);
}
