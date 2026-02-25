import { WEAPON_CONFIG } from '@/shared/config/weapons';
import { Quaternion } from '@/shared/core/quaternion';
import { Vector3 } from '@/shared/core/vector3';
// ── Imports (после моков) ───────────────────────────────────────────────────

import { world } from '@/shared/ecs/combat-world';

import { ProjectileComponent } from '@/entities/combat/projectile';
import { MeshComponent } from '@/entities/rendering/mesh';

import { cleanupExcessBullets } from '../weapons';

jest.mock('@/shared/core', () => {
  const { Vector3 } = jest.requireActual('@/shared/core/vector3');
  const { Quaternion } = jest.requireActual('@/shared/core/quaternion');
  return {
    Vector3,
    Quaternion,
    TransformNode: class {
      position = new Vector3();
      quaternion = new Quaternion();
    },
    addToScene: jest.fn(),
    createAdditiveMaterial: jest.fn(() => ({})),
    createCylinderGeometry: jest.fn(() => ({
      rotateZ: jest.fn(),
    })),
    createMesh: jest.fn(() => ({
      position: new Vector3(),
      quaternion: new Quaternion(),
      renderingGroupId: 0,
    })),
  };
});

jest.mock('@/shared/ecs/combat-world', () => {
  const { World } = jest.requireActual('@/shared/ecs/world');
  return { world: new World(), resetWorld: jest.fn() };
});

jest.mock('@/shared/ecs/entity-index', () => ({
  registerMeshEntity: jest.fn(),
  unregisterMeshEntity: jest.fn(),
}));

jest.mock('@/shared/audio', () => ({
  playLaserSound: jest.fn(),
}));

jest.mock('@/entities/objects/space-ships', () => ({
  GUN_OFFSET_L: new (jest.requireActual('@/shared/core/vector3').Vector3)(0, 0, -1),
  GUN_OFFSET_R: new (jest.requireActual('@/shared/core/vector3').Vector3)(0, 0, 1),
}));

const W = WEAPON_CONFIG;

// ── Helpers ─────────────────────────────────────────────────────────────────

function makeMockMesh() {
  return {
    position: new Vector3(),
    quaternion: new Quaternion(),
    dispose: jest.fn(),
  } as any;
}

function createProjectileECS() {
  const mesh = makeMockMesh();
  const id = world.createEntity();
  world.addComponent(id, new ProjectileComponent(new Vector3(1, 0, 0), 10, 'test'));
  world.addComponent(id, new MeshComponent(mesh));
  return { id, mesh };
}

// ── Tests ───────────────────────────────────────────────────────────────────

describe('cleanupExcessBullets', () => {
  beforeEach(() => {
    world.clear();
  });

  it('не удаляет, если общее число <= maxBullets', () => {
    for (let i = 0; i < 50; i++) {
      createProjectileECS();
    }
    cleanupExcessBullets();
    expect(world.query(ProjectileComponent, MeshComponent).length).toBe(50);
  });

  it('удаляет старые снаряды при превышении maxBullets', () => {
    const total = W.maxBullets + 20;
    for (let i = 0; i < total; i++) {
      createProjectileECS();
    }

    cleanupExcessBullets();

    expect(world.query(ProjectileComponent, MeshComponent).length).toBe(W.cleanupTarget);
  });

  it('при cleanup вызывается dispose на удалённых мешах', () => {
    const meshes: any[] = [];
    const total = W.maxBullets + 10;
    for (let i = 0; i < total; i++) {
      const { mesh } = createProjectileECS();
      meshes.push(mesh);
    }

    cleanupExcessBullets();

    const removeCount = total - W.cleanupTarget;
    for (let i = 0; i < removeCount; i++) {
      expect(meshes[i].dispose).toHaveBeenCalled();
    }
    for (let i = removeCount; i < total; i++) {
      expect(meshes[i].dispose).not.toHaveBeenCalled();
    }
  });
});
