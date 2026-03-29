import { LoadAssetContainerAsync } from '@babylonjs/core/Loading/sceneLoader';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { InstancedMesh } from '@babylonjs/core/Meshes/instancedMesh';
import type { TransformNode as BTransformNode } from '@babylonjs/core/Meshes/transformNode';
import type { AssetContainer } from '@babylonjs/core/assetContainer';
import type { Node } from '@babylonjs/core/node';
import '@babylonjs/loaders/glTF';

import { getFactoryScene } from './factories';
import { TransformNode } from './transform-node';

/**
 * Ссылки на загруженные контейнеры ассетов — защита от сборщика мусора.
 * Без них GPU-буферы геометрии и материалов могут быть освобождены,
 * и клоны/инстансы станут невидимыми.
 */
const _loadedContainers: AssetContainer[] = [];

/**
 * Загружает GLTF/GLB-модель и возвращает корневой {@link TransformNode}.
 *
 * Модель загружается через `LoadAssetContainerAsync`, после чего все ассеты
 * (меши, материалы, текстуры) регистрируются в сцене. Корневой узел выключен —
 * он служит шаблоном для клонирования через {@link cloneModel}.
 *
 * ```ts
 * const template = await loadModel('./models/fighter.glb');
 * const instance = cloneModel(template);
 * instance.setEnabled(true);
 * ```
 */
export async function loadModel(url: string): Promise<TransformNode> {
  const scene = getFactoryScene();

  const container = await LoadAssetContainerAsync(url, scene);

  _loadedContainers.push(container);

  container.addAllToScene();

  const root = new TransformNode('__gltfRoot__', scene);
  root.setEnabled(false);

  if (container.meshes.length > 0) {
    const bRoot = container.meshes[0];
    bRoot.parent = root;
  }

  for (const desc of root.getDescendants(false)) {
    if (!desc.metadata) desc.metadata = {};
  }

  return root;
}

/**
 * Глубоко клонирует модель, возвращая новый {@link TransformNode} с полной иерархией.
 *
 * Конвертирует `InstancedMesh` (зеркальная геометрия из GLTF) в настоящие меши,
 * чтобы каждому клону можно было назначить собственный материал.
 */
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

  for (const child of group.getChildren()) {
    if ('clone' in child) {
      (child as BTransformNode).clone(child.name, clone);
    }
  }

  // InstancedMesh не может иметь собственный материал — заменяем на настоящий Mesh
  for (const desc of clone.getDescendants(false)) {
    if (desc instanceof InstancedMesh) {
      const inst = desc;
      const sourceMesh = inst.sourceMesh;
      const realMesh = sourceMesh.clone(inst.name, inst.parent);
      if (realMesh) {
        realMesh.position.copyFrom(inst.position);
        if (inst.rotationQuaternion) {
          realMesh.rotationQuaternion = inst.rotationQuaternion.clone();
        } else {
          realMesh.rotation.copyFrom(inst.rotation);
        }
        realMesh.scaling.copyFrom(inst.scaling);
        realMesh.isVisible = true;
        realMesh.setEnabled(true);
      }
      inst.dispose();
    }
  }

  return clone;
}

/**
 * Обходит узел и всех его потомков, вызывая `fn` для каждого (включая сам узел).
 */
export function traverseNode(node: Node, fn: (child: Node) => void): void {
  fn(node);
  for (const desc of node.getDescendants(false)) {
    fn(desc);
  }
}

/**
 * Находит потомка по имени в поддереве узла.
 * В отличие от `scene.getNodeByName()`, ищет только среди потомков конкретного узла.
 */
export function getChildByName(node: Node, name: string): Node | undefined {
  return node.getDescendants(false).find((d) => d.name === name);
}

/**
 * Проверяет, является ли объект мешем (BJS `AbstractMesh` или наследник).
 */
export function isEngineMesh(obj: unknown): obj is AbstractMesh {
  return obj instanceof AbstractMesh;
}
