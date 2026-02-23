import type { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { InstancedMesh } from '@babylonjs/core/Meshes/instancedMesh';
import type { Node } from '@babylonjs/core/node';

/** Recursively dispose geometry and materials of all meshes under a node,
 *  then remove the node from the scene. */
export function disposeNode(obj: Node): void {
  // Dispose materials on all mesh descendants first
  // Skip InstancedMesh — its material is shared with the source mesh
  for (const mesh of (
    obj as { getChildMeshes?: (direct: boolean) => AbstractMesh[] }
  ).getChildMeshes?.(false) ?? []) {
    if (mesh.material && !(mesh instanceof InstancedMesh)) {
      mesh.material.dispose();
    }
  }
  // Dispose the root's own material if it's a mesh (and not an instance)
  if ('material' in obj && (obj as AbstractMesh).material && !(obj instanceof InstancedMesh)) {
    (obj as AbstractMesh).material!.dispose();
  }
  // Recursively dispose the entire subtree (geometry + node)
  obj.dispose();
}
