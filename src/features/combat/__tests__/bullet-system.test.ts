import { Vector3 } from '@/shared/core/vector3';
import { state } from '@/shared/state';
import type { Fighter, LaserData } from '@/shared/types';

import { updateBullets } from '../bullet-system';

// Мокаем зависимости
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
    },
    disposeNode: jest.fn(),
  };
});

jest.mock('@/shared/audio', () => ({
  playHitSound: jest.fn(),
}));

jest.mock('@/shared/engine', () => ({
  camera: { position: new (jest.requireActual('@/shared/core/vector3').Vector3)() },
}));

jest.mock('@/shared/events', () => ({
  emit: jest.fn(),
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

jest.mock('../damage-system', () => ({
  destroyFighter: jest.fn(),
  destroySubsystem: jest.fn(),
}));

jest.mock('../explosions', () => ({
  createExplosion: jest.fn(),
}));

jest.mock('../weapons', () => ({
  cleanupExcessBullets: jest.fn(),
}));

function makeBullet(x: number, y: number, z: number, overrides?: Partial<LaserData>): LaserData {
  return {
    mesh: {
      position: new Vector3(x, y, z),
      dispose: jest.fn(),
    },
    velocity: new Vector3(1, 0, 0),
    life: 2,
    damage: 10,
    team: 'player',
    shooterName: 'Ас',
    ...overrides,
  } as any;
}

function makeFighter(x: number, y: number, z: number): Fighter {
  return {
    mesh: {
      position: new Vector3(x, y, z),
    },
    name: 'test',
    health: 50,
    maxHealth: 50,
    speed: 60,
    shootTimer: 1,
    healthBar: {},
    healthFill: {},
    ai: { state: 'chase', timer: 0, evadeDir: new Vector3(), target: null },
  } as any;
}

describe('Bullet System', () => {
  beforeEach(() => {
    state.bullets = [];
    state.allyBullets = [];
    state.enemyBullets = [];
    state.allies = [];
    state.enemies = [];
    state.capitalShips = [];
    state.playerHealth = 100;
    state.maxHealth = 100;
    state.invulnTimer = 0;
    jest.clearAllMocks();
  });

  describe('Жизненный цикл снарядов', () => {
    it('перемещает снаряд по velocity * dt', () => {
      const bullet = makeBullet(0, 0, 0, {
        velocity: new Vector3(100, 0, 0),
      });
      state.bullets.push(bullet);

      updateBullets(0.1);

      expect(bullet.mesh.position.x).toBeCloseTo(10, 5);
    });

    it('удаляет снаряд при life <= 0', () => {
      const bullet = makeBullet(0, 0, 0, { life: 0.5 });
      state.bullets.push(bullet);

      updateBullets(1); // life станет -0.5

      expect(state.bullets.length).toBe(0);
      expect(bullet.mesh.dispose).toHaveBeenCalled();
    });

    it('не удаляет снаряд при life > 0', () => {
      const bullet = makeBullet(0, 0, 0, { life: 5 });
      state.bullets.push(bullet);

      updateBullets(1); // life = 4

      expect(state.bullets.length).toBe(1);
    });
  });

  describe('hitTestFighters', () => {
    it('наносит урон при попадании (distanceSq < fighterHitDistSq)', () => {
      // Ставим снаряд рядом с врагом (расстояние < 12)
      const bullet = makeBullet(5, 0, 0, { damage: 15 });
      const enemy = makeFighter(5, 0, 5); // расстояние = 5 < sqrt(144)=12
      state.bullets.push(bullet);
      state.enemies.push(enemy);

      updateBullets(0.001); // минимальный dt чтобы не сдвинуть снаряд далеко

      expect(enemy.health).toBe(35); // 50 - 15
    });

    it('снаряд удаляется после попадания', () => {
      const bullet = makeBullet(0, 0, 0, { damage: 10 });
      const enemy = makeFighter(0, 0, 0); // расстояние = 0
      state.bullets.push(bullet);
      state.enemies.push(enemy);

      updateBullets(0.001);

      expect(state.bullets.length).toBe(0);
      expect(bullet.mesh.dispose).toHaveBeenCalled();
    });

    it('вызывает destroyFighter при health <= 0', () => {
      const { destroyFighter } = jest.requireMock('../damage-system');
      const bullet = makeBullet(0, 0, 0, { damage: 60 }); // больше maxHealth
      const enemy = makeFighter(0, 0, 0);
      state.bullets.push(bullet);
      state.enemies.push(enemy);

      updateBullets(0.001);

      expect(destroyFighter).toHaveBeenCalled();
    });

    it('не попадает по далёкому врагу', () => {
      const bullet = makeBullet(0, 0, 0, { damage: 10 });
      const enemy = makeFighter(100, 0, 0); // расстояние = 100 >> 12
      state.bullets.push(bullet);
      state.enemies.push(enemy);

      updateBullets(0.001);

      expect(enemy.health).toBe(50); // без изменений
      // Снаряд всё ещё жив (life > 0)
      expect(state.bullets.length).toBe(1);
    });
  });

  describe('hitTestCapitalShips', () => {
    it('наносит урон подсистеме при попадании', () => {
      const { Matrix } = jest.requireActual('@babylonjs/core/Maths/math.vector');
      const bullet = makeBullet(0, 0, 0, { damage: 20, team: 'player' });
      state.bullets.push(bullet);

      state.capitalShips.push({
        mesh: {
          position: new Vector3(0, 0, 0),
          getWorldMatrix: () => Matrix.Identity(),
        },
        subsystems: [
          {
            center: new Vector3(0, 0, 0),
            radius: 20,
            health: 100,
            maxHealth: 100,
            name: 'Турели',
            mesh: {},
          },
        ],
        alive: true,
        turretTimer: 5,
      } as any);

      updateBullets(0.001);

      expect(state.capitalShips[0].subsystems[0].health).toBe(80); // 100 - 20
    });
  });

  describe('Урон игроку', () => {
    it('вражеский снаряд наносит урон игроку', () => {
      const { playerPlane } = jest.requireMock('@/features/flight/player-system') as any;
      playerPlane.position.set(0, 0, 0);
      state.invulnTimer = 0;
      state.playerHealth = 100;

      const bullet = makeBullet(0, 0, 0, {
        damage: 25,
        team: 'enemy',
      });
      state.enemyBullets.push(bullet);

      updateBullets(0.001);

      expect(state.playerHealth).toBe(75);
    });

    it('не наносит урон игроку при invulnTimer > 0', () => {
      const { playerPlane } = jest.requireMock('@/features/flight/player-system') as any;
      playerPlane.position.set(0, 0, 0);
      state.invulnTimer = 3;
      state.playerHealth = 100;

      const bullet = makeBullet(0, 0, 0, {
        damage: 25,
        team: 'enemy',
      });
      state.enemyBullets.push(bullet);

      updateBullets(0.001);

      expect(state.playerHealth).toBe(100);
    });
  });
});
