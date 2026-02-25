import { Quaternion } from '@/shared/core/quaternion';
import { Vector3 } from '@/shared/core/vector3';
// ── Imports (после моков) ───────────────────────────────────────────────────

import { world } from '@/shared/ecs/combat-world';
import { clearEntityIndex, registerMeshEntity } from '@/shared/ecs/entity-index';
import { state } from '@/shared/state';

import { FighterAIComponent } from '@/entities/ai/fighter-ai';
import { CapitalShipComponent } from '@/entities/combat/capital-ship';
import { ProjectileComponent } from '@/entities/combat/projectile';
import { WeaponComponent } from '@/entities/combat/weapon';
import { TransformComponent } from '@/entities/physics/transform';
import { VelocityComponent } from '@/entities/physics/velocity';
import { HealthBarComponent } from '@/entities/rendering/health-bar';
import { MeshComponent } from '@/entities/rendering/mesh';
import { DamageBufferComponent } from '@/entities/stats/damage-buffer';
import { HealthComponent } from '@/entities/stats/health';
import { LifetimeComponent } from '@/entities/stats/lifetime';
import { NameComponent } from '@/entities/stats/name';
import { TeamComponent } from '@/entities/stats/team';

import { collisionSystem } from '../collision-system';
import { healthSystem } from '../health-system';
import { lifetimeSystem } from '../lifetime-system';
import { projectileMovementSystem } from '../movement-system';

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

jest.mock('@/shared/audio', () => ({ playHitSound: jest.fn() }));

jest.mock('@/shared/engine', () => ({
  camera: { position: new (jest.requireActual('@/shared/core/vector3').Vector3)() },
}));

jest.mock('@/shared/events', () => ({ emit: jest.fn() }));

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

jest.mock('../damage-system', () => ({
  destroyFighter: jest.fn(),
  destroySubsystem: jest.fn(),
}));

jest.mock('../explosions', () => ({ createExplosion: jest.fn() }));
jest.mock('../weapons', () => ({ cleanupExcessBullets: jest.fn() }));

// ── Helpers ─────────────────────────────────────────────────────────────────

function makeMockMesh(x = 0, y = 0, z = 0) {
  return {
    position: new Vector3(x, y, z),
    quaternion: new Quaternion(),
    dispose: jest.fn(),
    setVisibleRecursive: jest.fn(),
    getWorldMatrix: jest.fn(),
  } as any;
}

interface ProjectileOpts {
  velocity?: Vector3;
  life?: number;
  damage?: number;
  team?: 'player' | 'ally' | 'enemy';
  shooterName?: string;
}

function createProjectileECS(x: number, y: number, z: number, opts: ProjectileOpts = {}) {
  const mesh = makeMockMesh(x, y, z);
  const id = world.createEntity();

  world.addComponent(id, new TransformComponent(mesh.position, mesh.quaternion));
  world.addComponent(id, new MeshComponent(mesh));
  world.addComponent(
    id,
    new ProjectileComponent(
      opts.velocity ?? new Vector3(1, 0, 0),
      opts.damage ?? 10,
      opts.shooterName ?? 'Ас',
    ),
  );
  world.addComponent(id, new LifetimeComponent(opts.life ?? 2));
  world.addComponent(id, new TeamComponent(opts.team ?? 'player'));
  registerMeshEntity(mesh, id);

  return { id, mesh };
}

function createFighterECS(
  x: number,
  y: number,
  z: number,
  team: 'ally' | 'enemy' = 'enemy',
  hp = 50,
) {
  const mesh = makeMockMesh(x, y, z);
  const healthBarMesh = { lookAt: jest.fn() } as any;
  const healthFillMesh = { scaling: { x: 1 }, position: { x: 0 } } as any;
  const id = world.createEntity();
  const healthComp = new HealthComponent(hp, hp);

  world.addComponent(id, new TransformComponent(mesh.position, mesh.quaternion));
  world.addComponent(id, new MeshComponent(mesh));
  world.addComponent(id, healthComp);
  world.addComponent(id, new HealthBarComponent(healthBarMesh, healthFillMesh));
  world.addComponent(id, new VelocityComponent(60));
  world.addComponent(id, new WeaponComponent(1));
  world.addComponent(id, new DamageBufferComponent());
  world.addComponent(id, new TeamComponent(team));
  world.addComponent(id, new NameComponent('test'));
  world.addComponent(id, new FighterAIComponent('chase', 0, new Vector3(), null));
  registerMeshEntity(mesh, id);

  // Legacy Fighter-proxy для чтения healthComp в тестах
  const fighter = {
    mesh,
    name: 'test',
    get health() {
      return healthComp.current;
    },
    set health(v: number) {
      healthComp.current = v;
    },
    maxHealth: hp,
  } as any;

  return { id, mesh, fighter, healthComp };
}

// ── Tests ───────────────────────────────────────────────────────────────────

describe('ECS Bullet Pipeline', () => {
  beforeEach(() => {
    world.clear();
    clearEntityIndex();

    state.playerHealth = 100;
    state.maxHealth = 100;
    state.invulnTimer = 0;
    state.damageFlash = 0;
    state.noDamageTimer = 0;
    state.lastAttacker = '';
    jest.clearAllMocks();
  });

  // ── Movement ────────────────────────────────────────────────────────────

  describe('ProjectileMovementSystem', () => {
    it('перемещает снаряд по velocity * dt', () => {
      const { mesh } = createProjectileECS(0, 0, 0, {
        velocity: new Vector3(100, 0, 0),
      });

      projectileMovementSystem.update!(0.1);

      expect(mesh.position.x).toBeCloseTo(10, 5);
    });
  });

  // ── Lifetime ────────────────────────────────────────────────────────────

  describe('LifetimeSystem', () => {
    it('удаляет снаряд при life <= 0', () => {
      const { id, mesh } = createProjectileECS(0, 0, 0, { life: 0.5 });

      lifetimeSystem.update!(1); // remaining: 0.5 - 1 = -0.5

      expect(mesh.dispose).toHaveBeenCalled();
      expect(world.isAlive(id)).toBe(false);
    });

    it('не удаляет снаряд при life > 0', () => {
      const { id } = createProjectileECS(0, 0, 0, { life: 5 });

      lifetimeSystem.update!(1); // remaining: 5 - 1 = 4

      expect(world.isAlive(id)).toBe(true);
    });
  });

  // ── Collision ───────────────────────────────────────────────────────────

  describe('CollisionSystem', () => {
    describe('hitTestFighters', () => {
      it('наносит урон при попадании (через DamageBuffer + HealthSystem)', () => {
        // Снаряд рядом с врагом (расстояние = 5 < sqrt(144) = 12)
        createProjectileECS(5, 0, 0, { damage: 15 });
        const { fighter } = createFighterECS(5, 0, 5, 'enemy');

        collisionSystem.update!(0);
        healthSystem.update!(0);

        expect(fighter.health).toBe(35); // 50 - 15
      });

      it('снаряд удаляется после попадания', () => {
        const { id, mesh } = createProjectileECS(0, 0, 0, { damage: 10 });
        createFighterECS(0, 0, 0, 'enemy');

        collisionSystem.update!(0);

        expect(world.isAlive(id)).toBe(false);
        expect(mesh.dispose).toHaveBeenCalled();
      });

      it('вызывает destroyFighter при health <= 0', () => {
        const { destroyFighter } = jest.requireMock('../damage-system');

        createProjectileECS(0, 0, 0, { damage: 60 }); // больше maxHealth
        createFighterECS(0, 0, 0, 'enemy');

        collisionSystem.update!(0);
        healthSystem.update!(0);

        expect(destroyFighter).toHaveBeenCalled();
      });

      it('не попадает по далёкому врагу', () => {
        const { id } = createProjectileECS(0, 0, 0, { damage: 10 });
        const { fighter } = createFighterECS(100, 0, 0, 'enemy'); // расстояние = 100 >> 12

        collisionSystem.update!(0);

        expect(fighter.health).toBe(50);
        expect(world.isAlive(id)).toBe(true);
      });
    });

    describe('hitTestCapitalShips', () => {
      it('наносит урон подсистеме при попадании', () => {
        const { Matrix } = jest.requireActual('@babylonjs/core/Maths/math.vector');

        createProjectileECS(0, 0, 0, { damage: 20, team: 'player' });

        const csMesh = {
          position: new Vector3(0, 0, 0),
          quaternion: new Quaternion(),
          getWorldMatrix: () => Matrix.Identity(),
          metadata: { index: 0 },
        } as any;

        const subsystems = [
          {
            center: new Vector3(0, 0, 0),
            radius: 20,
            health: 100,
            maxHealth: 100,
            name: 'Турели',
            mesh: {},
          },
        ];

        const csId = world.createEntity();
        world.addComponent(csId, new TransformComponent(csMesh.position, csMesh.quaternion));
        world.addComponent(csId, new MeshComponent(csMesh));
        world.addComponent(csId, new CapitalShipComponent(subsystems as any, true, 5));

        collisionSystem.update!(0);

        expect(subsystems[0].health).toBe(80); // 100 - 20
      });
    });

    describe('Урон игроку', () => {
      it('вражеский снаряд наносит урон игроку', () => {
        const { playerPlane } = jest.requireMock('@/features/flight/player-system') as any;
        playerPlane.position.set(0, 0, 0);
        state.invulnTimer = 0;
        state.playerHealth = 100;

        createProjectileECS(0, 0, 0, { damage: 25, team: 'enemy' });

        collisionSystem.update!(0);

        expect(state.playerHealth).toBe(75);
      });

      it('не наносит урон игроку при invulnTimer > 0', () => {
        const { playerPlane } = jest.requireMock('@/features/flight/player-system') as any;
        playerPlane.position.set(0, 0, 0);
        state.invulnTimer = 3;
        state.playerHealth = 100;

        createProjectileECS(0, 0, 0, { damage: 25, team: 'enemy' });

        collisionSystem.update!(0);

        expect(state.playerHealth).toBe(100);
      });
    });
  });
});
