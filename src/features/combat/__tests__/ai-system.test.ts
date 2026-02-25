import { Quaternion } from '@/shared/core/quaternion';
import { Vector3 } from '@/shared/core/vector3';
// ── Imports (после моков) ───────────────────────────────────────────────────

import { world } from '@/shared/ecs/combat-world';
import { clearEntityIndex, registerMeshEntity } from '@/shared/ecs/entity-index';

import { FighterAIComponent } from '@/entities/ai/fighter-ai';
import { WeaponComponent } from '@/entities/combat/weapon';
import { TransformComponent } from '@/entities/physics/transform';
import { VelocityComponent } from '@/entities/physics/velocity';
import { HealthBarComponent } from '@/entities/rendering/health-bar';
import { MeshComponent } from '@/entities/rendering/mesh';
import { DamageBufferComponent } from '@/entities/stats/damage-buffer';
import { HealthComponent } from '@/entities/stats/health';
import { NameComponent } from '@/entities/stats/name';
import { TeamComponent } from '@/entities/stats/team';

import { aiSystem } from '../ai-system';

// ── Mocks ───────────────────────────────────────────────────────────────────

jest.mock('@/shared/core', () => {
  const { Vector3 } = jest.requireActual('@/shared/core/vector3');
  const { Quaternion } = jest.requireActual('@/shared/core/quaternion');
  return {
    Vector3,
    Quaternion,
    TransformNode: class {
      position = new Vector3();
      quaternion = new Quaternion();
      setVisibleRecursive = jest.fn();
      dispose = jest.fn();
    },
    disposeNode: jest.fn(),
  };
});

jest.mock('@/shared/ecs/combat-world', () => {
  const { World } = jest.requireActual('@/shared/ecs/world');
  return { world: new World(), resetWorld: jest.fn() };
});

jest.mock('@/shared/engine', () => ({
  camera: { position: new (jest.requireActual('@/shared/core/vector3').Vector3)() },
}));

jest.mock('@/entities/objects/space-ships', () => ({
  cleanupTeamSources: jest.fn(),
  updateExhaustGlow: jest.fn(),
}));

const mockShootFromFighter = jest.fn();
jest.mock('../weapons', () => ({
  shootFromFighter: (...args: any[]) => mockShootFromFighter(...args),
  cleanupExcessBullets: jest.fn(),
}));

jest.mock('@/features/flight/player-system', () => {
  const { Vector3 } = jest.requireActual('@/shared/core/vector3');
  const { Quaternion } = jest.requireActual('@/shared/core/quaternion');
  return {
    playerPlane: {
      position: new Vector3(0, 0, 0),
      quaternion: new Quaternion(),
      setVisibleRecursive: jest.fn(),
    },
  };
});

// ── Helpers ─────────────────────────────────────────────────────────────────

function makeMockMesh(x = 0, y = 0, z = 0) {
  return {
    position: new Vector3(x, y, z),
    quaternion: new Quaternion(),
    dispose: jest.fn(),
    setVisibleRecursive: jest.fn(),
    lookAt: jest.fn(),
    scaling: { x: 1 },
    getWorldMatrix: jest.fn(),
  } as any;
}

function createFighterECS(
  x: number,
  y: number,
  z: number,
  team: 'ally' | 'enemy' = 'ally',
  opts: { speed?: number; shootTimer?: number; health?: number } = {},
) {
  const mesh = makeMockMesh(x, y, z);
  const healthBarMesh = { lookAt: jest.fn() } as any;
  const healthFillMesh = { scaling: { x: 1 }, position: { x: 0 } } as any;

  const id = world.createEntity();
  const healthComp = new HealthComponent(opts.health ?? 50, opts.health ?? 50);
  const velocityComp = new VelocityComponent(opts.speed ?? 60);
  const weaponComp = new WeaponComponent(opts.shootTimer ?? 10);
  const aiComp = new FighterAIComponent('chase', 0, new Vector3(), null);

  world.addComponent(id, new TransformComponent(mesh.position, mesh.quaternion));
  world.addComponent(id, new MeshComponent(mesh));
  world.addComponent(id, healthComp);
  world.addComponent(id, new HealthBarComponent(healthBarMesh, healthFillMesh));
  world.addComponent(id, velocityComp);
  world.addComponent(id, weaponComp);
  world.addComponent(id, new TeamComponent(team));
  world.addComponent(id, aiComp);
  world.addComponent(id, new NameComponent('test'));
  world.addComponent(id, new DamageBufferComponent());
  registerMeshEntity(mesh, id);

  return { id, mesh, healthComp, velocityComp, weaponComp, aiComp, healthBarMesh, healthFillMesh };
}

// ── Tests ───────────────────────────────────────────────────────────────────

describe('AI System (ECS)', () => {
  beforeEach(() => {
    world.clear();
    clearEntityIndex();
    jest.clearAllMocks();
  });

  describe('Переключение состояний', () => {
    it('chase → evade при сближении (dist < evadeDistance)', () => {
      const { aiComp: allyAI } = createFighterECS(0, 0, 0, 'ally');
      const { mesh: enemyMesh } = createFighterECS(50, 0, 0, 'enemy');

      allyAI.target = { mesh: { position: enemyMesh.position }, name: 'enemy' };
      allyAI.timer = 0;

      const origRandom = Math.random;
      Math.random = jest.fn(() => 0.5);

      aiSystem.update(0.016);

      Math.random = origRandom;

      expect(allyAI.state).toBe('evade');
    });

    it('chase → orbit на средней дистанции', () => {
      const { aiComp: allyAI } = createFighterECS(0, 0, 0, 'ally');
      const { mesh: enemyMesh } = createFighterECS(250, 0, 0, 'enemy');

      allyAI.target = { mesh: { position: enemyMesh.position }, name: 'enemy' };
      allyAI.timer = 0;

      const origRandom = Math.random;
      Math.random = jest.fn(() => 0.5);

      aiSystem.update(0.016);

      Math.random = origRandom;

      expect(allyAI.state).toBe('orbit');
    });

    it('chase при большой дистанции (dist > chaseDistance)', () => {
      const { aiComp: allyAI } = createFighterECS(0, 0, 0, 'ally');
      const { mesh: enemyMesh } = createFighterECS(1000, 0, 0, 'enemy');

      allyAI.target = { mesh: { position: enemyMesh.position }, name: 'enemy' };
      allyAI.timer = 0;

      const origRandom = Math.random;
      Math.random = jest.fn(() => 0.5);

      aiSystem.update(0.016);

      Math.random = origRandom;

      expect(allyAI.state).toBe('chase');
    });
  });

  describe('Стрельба', () => {
    it('стреляет когда shootTimer <= 0 и dist < shootDistance', () => {
      const { aiComp, weaponComp } = createFighterECS(0, 0, 0, 'ally');
      const { mesh: enemyMesh } = createFighterECS(200, 0, 0, 'enemy');

      aiComp.target = { mesh: { position: enemyMesh.position }, name: 'enemy' };
      aiComp.timer = 10;
      weaponComp.shootTimer = 0;

      const origRandom = Math.random;
      Math.random = jest.fn(() => 0.5);

      aiSystem.update(0.016);

      Math.random = origRandom;

      expect(mockShootFromFighter).toHaveBeenCalled();
    });

    it('НЕ стреляет когда dist > shootDistance', () => {
      const { aiComp, weaponComp } = createFighterECS(0, 0, 0, 'ally');
      const { mesh: enemyMesh } = createFighterECS(1000, 0, 0, 'enemy');

      aiComp.target = { mesh: { position: enemyMesh.position }, name: 'enemy' };
      aiComp.timer = 10;
      weaponComp.shootTimer = 0;

      const origRandom = Math.random;
      Math.random = jest.fn(() => 0.5);

      aiSystem.update(0.016);

      Math.random = origRandom;

      expect(mockShootFromFighter).not.toHaveBeenCalled();
    });

    it('НЕ стреляет когда shootTimer > 0', () => {
      const { aiComp, weaponComp } = createFighterECS(0, 0, 0, 'ally');
      const { mesh: enemyMesh } = createFighterECS(200, 0, 0, 'enemy');

      aiComp.target = { mesh: { position: enemyMesh.position }, name: 'enemy' };
      aiComp.timer = 10;
      weaponComp.shootTimer = 5;

      const origRandom = Math.random;
      Math.random = jest.fn(() => 0.5);

      aiSystem.update(0.016);

      Math.random = origRandom;

      expect(mockShootFromFighter).not.toHaveBeenCalled();
    });
  });

  describe('Движение', () => {
    it('истребитель перемещается вперёд каждый кадр', () => {
      const { mesh, aiComp } = createFighterECS(0, 0, 0, 'ally', { speed: 100 });
      const { mesh: enemyMesh } = createFighterECS(200, 0, 0, 'enemy');

      aiComp.target = { mesh: { position: enemyMesh.position }, name: 'enemy' };
      aiComp.timer = 10;

      const startX = mesh.position.x;

      const origRandom = Math.random;
      Math.random = jest.fn(() => 0.5);

      aiSystem.update(0.1);

      Math.random = origRandom;

      const moved = mesh.position.distanceTo(new Vector3(startX, 0, 0));
      expect(moved).toBeGreaterThan(0);
    });
  });

  describe('Обновление health bar', () => {
    it('обновляет scaling healthFill по соотношению HP', () => {
      const { aiComp, healthComp, healthFillMesh } = createFighterECS(0, 0, 0, 'ally', {
        health: 50,
      });
      const { mesh: enemyMesh } = createFighterECS(200, 0, 0, 'enemy');

      aiComp.target = { mesh: { position: enemyMesh.position }, name: 'enemy' };
      aiComp.timer = 10;
      healthComp.current = 25; // 50% от max

      const origRandom = Math.random;
      Math.random = jest.fn(() => 0.5);

      aiSystem.update(0.016);

      Math.random = origRandom;

      expect(healthFillMesh.scaling.x).toBeCloseTo(0.5, 5);
    });
  });
});
