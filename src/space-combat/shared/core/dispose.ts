import type { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { InstancedMesh } from '@babylonjs/core/Meshes/instancedMesh';
import type { Node } from '@babylonjs/core/node';

/**
 * Безопасно удаляет узел из сцены вместе с материалами и геометрией.
 *
 * **Зачем нужна вместо `node.dispose(false, true)`:**
 * BJS `dispose(false, true)` диспозит материалы у ВСЕХ мешей, включая InstancedMesh.
 * Но у InstancedMesh материал — это ссылка на материал исходного меша.
 * Если его задиспозить, сломаются все остальные инстансы.
 * Эта функция пропускает InstancedMesh при диспозе материалов.
 *
 * **Когда использовать:** при удалении кораблей, снарядов и других объектов,
 * у которых могут быть инстансы с общим материалом.
 *
 * **Производительность:** обходит дочерние меши дополнительно к обходу внутри
 * `obj.dispose()`. На практике это незаметно — поддерево обычно 5–20 мешей,
 * а функция вызывается только при уничтожении объекта, не каждый кадр.
 */
export function disposeNode(obj: Node): void {
  // Собираем все меши поддерева (включая корень, если он меш)
  const meshes =
    'getChildMeshes' in obj
      ? [obj as AbstractMesh, ...(obj as AbstractMesh).getChildMeshes(false)]
      : [];

  // Диспозим материалы (InstancedMesh пропускаем — материал общий с исходным мешем)
  for (const mesh of meshes) {
    if (mesh.material && !(mesh instanceof InstancedMesh)) {
      mesh.material.dispose();
    }
  }

  // Диспозим узел целиком (геометрия + потомки)
  obj.dispose();
}
