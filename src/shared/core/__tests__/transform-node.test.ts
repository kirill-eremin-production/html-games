import { Quaternion } from '../quaternion';
import { TransformNode } from '../transform-node';
import { Vector3 } from '../vector3';

// Мокаем BJS Node чтобы TransformNode не требовал реальную Scene
let idCounter = 0;
jest.mock('@babylonjs/core/node', () => {
  return {
    Node: class MockNode {
      name: string;
      _children: any[] = [];
      _isEnabled = true;
      metadata: any = null;
      _parentRef: any = null;
      uniqueId: number;

      constructor(name: string) {
        this.name = name;
        this.uniqueId = idCounter++;
      }

      getDescendants(_directOnly: boolean): any[] {
        const result: any[] = [];
        const collect = (node: any) => {
          for (const c of node._children || []) {
            result.push(c);
            if (!_directOnly) collect(c);
          }
        };
        collect(this);
        return result;
      }

      getChildren(): any[] {
        return [...this._children];
      }

      setEnabled(v: boolean) {
        this._isEnabled = v;
      }

      isEnabled() {
        return this._isEnabled;
      }

      get parent() {
        return this._parentRef;
      }

      set parent(p: any) {
        // Remove from old parent
        if (this._parentRef && this._parentRef._children) {
          const idx = this._parentRef._children.indexOf(this);
          if (idx >= 0) this._parentRef._children.splice(idx, 1);
        }
        this._parentRef = p;
        // Add to new parent
        if (p && p._children) {
          p._children.push(this);
        }
      }
    },
  };
});

// Мокаем BJS TransformNode
jest.mock('@babylonjs/core/Meshes/transformNode', () => {
  const { Node } = jest.requireMock('@babylonjs/core/node');
  return {
    TransformNode: class MockBTransformNode extends Node {
      _position: any;
      _rotation: any;
      _scaling: any;
      rotationQuaternion: any = null;

      constructor(name: string) {
        super(name);
        const { Vector3: BjsVec } = jest.requireActual('@babylonjs/core/Maths/math.vector');
        this._position = new BjsVec(0, 0, 0);
        this._rotation = new BjsVec(0, 0, 0);
        this._scaling = new BjsVec(1, 1, 1);
      }

      get position() {
        return this._position;
      }
      set position(v: any) {
        this._position = v;
      }
      get rotation() {
        return this._rotation;
      }
      set rotation(v: any) {
        this._rotation = v;
      }
      get scaling() {
        return this._scaling;
      }
      set scaling(v: any) {
        this._scaling = v;
      }
    },
  };
});

describe('TransformNode', () => {
  beforeEach(() => {
    idCounter = 0;
  });

  describe('constructor', () => {
    it('создаёт узел с расширенным Vector3 в position', () => {
      const node = new TransformNode('test');
      expect(node.position).toBeInstanceOf(Vector3);
      expect(node.position.x).toBe(0);
      expect(node.position.y).toBe(0);
      expect(node.position.z).toBe(0);
    });

    it('scaling по умолчанию (1,1,1)', () => {
      const node = new TransformNode('test');
      expect(node.scaling.x).toBe(1);
      expect(node.scaling.y).toBe(1);
      expect(node.scaling.z).toBe(1);
    });

    it('metadata — пустой объект', () => {
      const node = new TransformNode('test');
      expect(node.metadata).toEqual({});
    });
  });

  describe('quaternion getter', () => {
    it('лениво создаёт кватернион при первом обращении', () => {
      const node = new TransformNode('test');
      expect(node.rotationQuaternion).toBeNull();
      const q = node.quaternion;
      expect(q).toBeDefined();
      expect(node.rotationQuaternion).not.toBeNull();
    });

    it('повторное обращение возвращает тот же объект', () => {
      const node = new TransformNode('test');
      const q1 = node.quaternion;
      const q2 = node.quaternion;
      expect(q1).toBe(q2);
    });

    it('кватернион по умолчанию — единичный (0,0,0,1)', () => {
      const node = new TransformNode('test');
      const q = node.quaternion;
      expect(q.x).toBe(0);
      expect(q.y).toBe(0);
      expect(q.z).toBe(0);
      expect(q.w).toBe(1);
    });

    it('кватернион — экземпляр расширенного Quaternion', () => {
      const node = new TransformNode('test');
      const q = node.quaternion;
      expect(q).toBeInstanceOf(Quaternion);
    });
  });

  describe('setVisibleRecursive', () => {
    it('включает/выключает сам узел', () => {
      const node = new TransformNode('test');
      node.setVisibleRecursive(false);
      expect(node.isEnabled()).toBe(false);

      node.setVisibleRecursive(true);
      expect(node.isEnabled()).toBe(true);
    });

    it('пробрасывает enabled на всех потомков', () => {
      const parent = new TransformNode('parent');
      const child1 = new TransformNode('child1');
      const child2 = new TransformNode('child2');
      const grandchild = new TransformNode('grandchild');

      child1.parent = parent;
      child2.parent = parent;
      grandchild.parent = child1;

      parent.setVisibleRecursive(false);

      expect(parent.isEnabled()).toBe(false);
      expect(child1.isEnabled()).toBe(false);
      expect(child2.isEnabled()).toBe(false);
      expect(grandchild.isEnabled()).toBe(false);

      parent.setVisibleRecursive(true);

      expect(parent.isEnabled()).toBe(true);
      expect(child1.isEnabled()).toBe(true);
      expect(child2.isEnabled()).toBe(true);
      expect(grandchild.isEnabled()).toBe(true);
    });
  });
});
