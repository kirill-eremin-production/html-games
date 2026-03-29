import type { TransformNode } from '@/shared/core';

import type { EntityId } from './types';

/** Быстрый O(1) lookup EntityId по mesh-ссылке */
const meshToEntity = new Map<TransformNode, EntityId>();

export function registerMeshEntity(mesh: TransformNode, id: EntityId): void {
  meshToEntity.set(mesh, id);
}

export function unregisterMeshEntity(mesh: TransformNode): void {
  meshToEntity.delete(mesh);
}

export function getEntityByMesh(mesh: TransformNode): EntityId | null {
  return meshToEntity.get(mesh) ?? null;
}

export function clearEntityIndex(): void {
  meshToEntity.clear();
}
