import { Quaternion } from '@/shared/core/quaternion';
import { Vector3 } from '@/shared/core/vector3';
// ── Imports (после моков) ───────────────────────────────────────────────────

import { world } from '@/shared/ecs/combat-world';
import { clearEntityIndex, registerMeshEntity } from '@/shared/ecs/entity-index';
import { state } from '@/shared/state';

import { FighterAIComponent } from '@/entities/ai/fighter-ai';
import { CapitalShipComponent } from '@/entities/combat/capital-ship';
import { ProjectileComponent } from '@/entities/combat/projectile';
import { SubsystemComponent } from '@/entities/combat/subsystem';
import { WeaponComponent } from '@/entities/combat/weapon';
import { queryFightersForUI } from '@/entities/ecs-queries';
import { HitboxComponent } from '@/entities/physics/hitbox';
import { TransformComponent } from '@/entities/physics/transform';
import { VelocityComponent } from '@/entities/physics/velocity';
import { HealthBarComponent } from '@/entities/rendering/health-bar';
import { MeshComponent } from '@/entities/rendering/mesh';
import { DamageBufferComponent } from '@/entities/stats/damage-buffer';
import { HealthComponent } from '@/entities/stats/health';
import { LifetimeComponent } from '@/entities/stats/lifetime';
import { NameComponent } from '@/entities/stats/name';
import { ParentEntityComponent } from '@/entities/stats/parent-entity';
import { PlayerTagComponent } from '@/entities/stats/player-tag';
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
}));

jest.mock('@/shared/refs/player-entity', () => ({
  playerEntityId: 0,
  setPlayerEntityId: jest.fn(),
  clearPlayerEntityId: jest.fn(),
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
  world.addComponent(id, new HitboxComponent(12 * 12));
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

function createPlayerECS(x = 0, y = 0, z = 0) {
  const { playerPlane } = jest.requireMock('@/features/flight/player-system') as any;
  const playerEntityMock = jest.requireMock('@/shared/refs/player-entity') as any;
  playerPlane.position.set(x, y, z);

  const id = world.createEntity();
  world.addComponent(id, new TransformComponent(playerPlane.position, playerPlane.quaternion));
  world.addComponent(id, new MeshComponent(playerPlane));
  world.addComponent(id, new NameComponent('Ас'));
  world.addComponent(id, new HealthComponent(state.maxHealth, state.maxHealth));
  world.addComponent(id, new VelocityComponent(80));
  world.addComponent(id, new TeamComponent('player'));
  world.addComponent(id, new DamageBufferComponent());
  world.addComponent(id, new HitboxComponent(6 * 6));
  world.addComponent(id, new PlayerTagComponent());
  registerMeshEntity(playerPlane, id);

  // Устанавливаем playerEntityId для playerSyncSystem
  playerEntityMock.playerEntityId = id;

  return id;
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

    // Сбрасываем playerEntityId
    const playerEntityMock = jest.requireMock('@/shared/refs/player-entity') as any;
    playerEntityMock.playerEntityId = 0;

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

    describe('hitTestSubsystems', () => {
      it('наносит урон подсистеме при попадании (через DamageBuffer)', () => {
        const { Matrix } = jest.requireActual('@babylonjs/core/Maths/math.vector');

        createProjectileECS(0, 0, 0, { damage: 20, team: 'player' });

        const csMesh = {
          position: new Vector3(0, 0, 0),
          quaternion: new Quaternion(),
          getWorldMatrix: () => Matrix.Identity(),
          metadata: { index: 0 },
        } as any;

        // Создаём корабль
        const csId = world.createEntity();
        world.addComponent(csId, new TransformComponent(csMesh.position, csMesh.quaternion));
        world.addComponent(csId, new MeshComponent(csMesh));
        world.addComponent(csId, new CapitalShipComponent(true, 5));
        world.addComponent(csId, new TeamComponent('enemy'));

        // Создаём подсистему как отдельную ECS-сущность
        const subMesh = makeMockMesh(0, 0, 0);
        const subId = world.createEntity();
        const subHealth = new HealthComponent(100, 100);
        world.addComponent(subId, new TransformComponent(subMesh.position, subMesh.quaternion));
        world.addComponent(subId, new MeshComponent(csMesh)); // используем меш корабля для getWorldMatrix
        world.addComponent(subId, new SubsystemComponent('turrets', new Vector3(0, 0, 0), 20));
        world.addComponent(subId, subHealth);
        world.addComponent(subId, new NameComponent('Турели'));
        world.addComponent(subId, new ParentEntityComponent(csId));
        world.addComponent(subId, new DamageBufferComponent());
        world.addComponent(subId, new TeamComponent('enemy'));

        collisionSystem.update!(0);
        healthSystem.update!(0);

        expect(subHealth.current).toBe(80); // 100 - 20
      });

      it('healthSystem обрабатывает подсистемы и уничтожает корабль когда все мертвы', () => {
        const { Matrix } = jest.requireActual('@babylonjs/core/Maths/math.vector');
        const { emit: mockEmit } = jest.requireMock('@/shared/events') as any;

        const csMesh = {
          position: new Vector3(0, 0, 0),
          quaternion: new Quaternion(),
          getWorldMatrix: () => Matrix.Identity(),
          metadata: { index: 0 },
        } as any;

        // Создаём корабль
        const csId = world.createEntity();
        world.addComponent(csId, new TransformComponent(csMesh.position, csMesh.quaternion));
        world.addComponent(csId, new MeshComponent(csMesh));
        world.addComponent(csId, new CapitalShipComponent(true, 5));
        world.addComponent(csId, new TeamComponent('enemy'));

        // Создаём единственную подсистему с 10 HP
        const subMesh = makeMockMesh(0, 0, 0);
        const subId = world.createEntity();
        const subHealth = new HealthComponent(10, 10);
        world.addComponent(subId, new TransformComponent(subMesh.position, subMesh.quaternion));
        world.addComponent(subId, new MeshComponent(csMesh));
        world.addComponent(subId, new SubsystemComponent('turrets', new Vector3(0, 0, 0), 20));
        world.addComponent(subId, subHealth);
        world.addComponent(subId, new NameComponent('Турели'));
        world.addComponent(subId, new ParentEntityComponent(csId));
        world.addComponent(subId, new DamageBufferComponent());
        world.addComponent(subId, new TeamComponent('enemy'));

        // Снаряд попадает в подсистему
        createProjectileECS(0, 0, 0, { damage: 50, team: 'player' });

        collisionSystem.update!(0);
        healthSystem.update!(0);

        // Подсистема убита
        expect(subHealth.current).toBe(0);

        // Должны быть вызваны события: subsystem-destroyed и capital-ship-destroyed
        const emitCalls = mockEmit.mock.calls.map((c: any[]) => c[0]);
        expect(emitCalls).toContain('subsystem-destroyed');
        expect(emitCalls).toContain('capital-ship-destroyed');

        // Корабль помечен как мёртвый
        const capitalShip = world.getComponent(csId, CapitalShipComponent)!;
        expect(capitalShip.alive).toBe(false);
      });
    });

    describe('Урон игроку', () => {
      it('вражеский снаряд наносит урон игроку', () => {
        state.invulnTimer = 0;
        state.playerHealth = 100;
        const playerId = createPlayerECS(0, 0, 0);

        createProjectileECS(0, 0, 0, { damage: 25, team: 'enemy' });

        collisionSystem.update!(0);
        healthSystem.update!(0);

        const hc = world.getComponent(playerId, HealthComponent)!;
        expect(hc.current).toBe(75);
      });

      it('не наносит урон игроку при invulnTimer > 0', () => {
        state.invulnTimer = 3;
        state.playerHealth = 100;
        const playerId = createPlayerECS(0, 0, 0);

        createProjectileECS(0, 0, 0, { damage: 25, team: 'enemy' });

        collisionSystem.update!(0);
        healthSystem.update!(0);

        const hc = world.getComponent(playerId, HealthComponent)!;
        expect(hc.current).toBe(100);
      });
    });
  });

  // ── queryFightersForUI regression ─────────────────────────────────────────

  describe('queryFightersForUI', () => {
    it('не возвращает подсистемы кораблей (регрессия)', () => {
      // Создаём истребителя — должен попасть в результат
      createFighterECS(0, 0, 0, 'enemy');

      // Создаём подсистему с тем же набором компонентов, что и UI-query
      const subMesh = makeMockMesh(10, 0, 0);
      const subId = world.createEntity();
      world.addComponent(subId, new TransformComponent(subMesh.position, subMesh.quaternion));
      world.addComponent(subId, new MeshComponent(subMesh));
      world.addComponent(subId, new SubsystemComponent('turrets', new Vector3(0, 0, 0), 20));
      world.addComponent(subId, new HealthComponent(100, 100));
      world.addComponent(subId, new NameComponent('Турели'));
      world.addComponent(subId, new ParentEntityComponent(0 as any));
      world.addComponent(subId, new DamageBufferComponent());
      world.addComponent(subId, new TeamComponent('enemy'));

      const result = queryFightersForUI();

      // Должен быть только истребитель, не подсистема
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('test');
      expect(result.every((r) => r.name !== 'Турели')).toBe(true);
    });
  });
});
