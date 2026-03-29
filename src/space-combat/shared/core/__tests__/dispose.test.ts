import { InstancedMesh } from '@babylonjs/core/Meshes/instancedMesh';

import { disposeNode } from '../dispose';

// Создаём мок-классы, имитирующие BJS структуру
function createMockMesh(name: string, isInstanced = false) {
  const material = { dispose: jest.fn() };
  const mesh: any = {
    name,
    material,
    dispose: jest.fn(),
    getChildMeshes: jest.fn(() => []),
  };
  if (isInstanced) {
    Object.setPrototypeOf(mesh, InstancedMesh.prototype);
  }
  return mesh;
}

describe('disposeNode', () => {
  it('диспозит материал обычного меша', () => {
    const mesh = createMockMesh('body');
    mesh.getChildMeshes.mockReturnValue([]);

    disposeNode(mesh);

    expect(mesh.material.dispose).toHaveBeenCalledTimes(1);
    expect(mesh.dispose).toHaveBeenCalledTimes(1);
  });

  it('НЕ диспозит материал InstancedMesh', () => {
    const mesh = createMockMesh('body_inst', true);
    mesh.getChildMeshes.mockReturnValue([]);

    disposeNode(mesh);

    expect(mesh.material.dispose).not.toHaveBeenCalled();
    expect(mesh.dispose).toHaveBeenCalledTimes(1);
  });

  it('диспозит материалы дочерних мешей, но не InstancedMesh', () => {
    const child1 = createMockMesh('wing');
    const child2 = createMockMesh('exhaust_inst', true);

    const root = createMockMesh('root');
    root.getChildMeshes.mockReturnValue([child1, child2]);

    disposeNode(root);

    // root и child1 — обычные меши, материалы удалены
    expect(root.material.dispose).toHaveBeenCalled();
    expect(child1.material.dispose).toHaveBeenCalled();
    // child2 — InstancedMesh, материал НЕ удалён
    expect(child2.material.dispose).not.toHaveBeenCalled();
    // Узел целиком удалён
    expect(root.dispose).toHaveBeenCalled();
  });

  it('обрабатывает меш без материала', () => {
    const mesh = createMockMesh('empty');
    mesh.material = null;
    mesh.getChildMeshes.mockReturnValue([]);

    expect(() => disposeNode(mesh)).not.toThrow();
    expect(mesh.dispose).toHaveBeenCalled();
  });

  it('обрабатывает узел без getChildMeshes (не меш)', () => {
    const node: any = {
      dispose: jest.fn(),
    };

    expect(() => disposeNode(node)).not.toThrow();
    expect(node.dispose).toHaveBeenCalled();
  });
});
