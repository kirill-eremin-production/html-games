import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader';
import type { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import type { TransformNode as BTransformNode } from '@babylonjs/core/Meshes/transformNode';
import type { Node } from '@babylonjs/core/node';
import '@babylonjs/loaders/glTF';

import { getFactoryScene } from './factories';
import { TransformNode } from './transform-node';

/**
 * Load a GLTF/GLB model and return its root as a TransformNode.
 * Uses LoadAssetContainerAsync — template meshes stay off-scene
 * (not rendered) until explicitly cloned.
 */
export async function loadModel(url: string): Promise<TransformNode> {
  const scene = getFactoryScene();

  const lastSlash = url.lastIndexOf('/');
  const rootUrl = lastSlash >= 0 ? url.substring(0, lastSlash + 1) : '';
  const filename = lastSlash >= 0 ? url.substring(lastSlash + 1) : url;

  const container = await SceneLoader.LoadAssetContainerAsync(rootUrl, filename, scene);

  // Create our extended TransformNode as the root
  const root = new TransformNode('__gltfRoot__', scene);
  // Template is only used for cloning — keep it disabled so it never renders
  root.setEnabled(false);

  if (container.meshes.length > 0) {
    // Parent the GLTF root node under our TransformNode
    const bRoot = container.meshes[0];
    bRoot.parent = root;
  }

  // Ensure all nodes have metadata (for userData compat)
  for (const desc of root.getDescendants(false)) {
    if (!desc.metadata) desc.metadata = {};
  }

  return root;
}

/** Clone a model (deep clone). Returns a new TransformNode with cloned hierarchy. */
export function cloneModel(group: TransformNode): TransformNode {
  const scene = group.getScene();
  const clone = new TransformNode(group.name, scene);
  clone.position.copyFrom(group.position);
  if (group.rotationQuaternion) {
    clone.rotationQuaternion = group.rotationQuaternion.clone();
  } else {
    clone.rotation.copyFrom(group.rotation);
  }
  clone.scaling.copyFrom(group.scaling);
  clone.metadata = { ...(group.metadata ?? {}) };

  // Clone all direct children (BJS clone recursively clones descendants)
  for (const child of group.getChildren()) {
    if ('clone' in child) {
      (child as BTransformNode).clone(child.name, clone);
    }
  }

  return clone;
}

/** Traverse all descendants of a node, calling fn for each (including the node itself). */
export function traverseNode(node: Node, fn: (child: Node) => void): void {
  fn(node);
  for (const desc of node.getDescendants(false)) {
    fn(desc);
  }
}

/** Find a child by name in a node's subtree. */
export function getChildByName(node: Node, name: string): Node | undefined {
  return node.getDescendants(false).find((d) => d.name === name);
}

/** Check if an object is a Mesh (works with both EngineMesh and raw BJS Mesh). */
export function isEngineMesh(obj: unknown): boolean {
  if (!obj || typeof obj !== 'object') return false;
  // Check for our EngineMesh.isMesh flag or BJS AbstractMesh
  if ((obj as { isMesh?: boolean }).isMesh) return true;
  // Check for BJS Mesh by duck-typing (has geometry property via getVerticesData)
  return 'getBoundingInfo' in obj && 'material' in obj && 'getVerticesData' in obj;
}
