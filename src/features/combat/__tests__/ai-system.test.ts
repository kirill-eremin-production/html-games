import { Vector3 } from '@/shared/core/vector3';
import { state } from '@/shared/state';
import type { Fighter } from '@/shared/types';

import { updateAllies } from '../ai-system';

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

jest.mock('@/shared/engine', () => ({
  camera: { position: new (jest.requireActual('@/shared/core/vector3').Vector3)() },
}));

jest.mock('@/entities/fighter', () => ({
  cleanupTeamSources: jest.fn(),
  updateExhaustGlow: jest.fn(),
}));

const mockShootFromFighter = jest.fn();
jest.mock('../weapons', () => ({
  shootFromFighter: (...args: any[]) => mockShootFromFighter(...args),
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

function createFighter(x: number, y: number, z: number, overrides?: Partial<Fighter>): Fighter {
  const { Quaternion } = jest.requireActual('@/shared/core/quaternion');
  return {
    mesh: {
      position: new Vector3(x, y, z),
      quaternion: new Quaternion(),
    },
    name: 'test',
    health: 50,
    maxHealth: 50,
    speed: 60,
    shootTimer: 10,
    healthBar: { lookAt: jest.fn() },
    healthFill: { scaling: { x: 1 }, position: { x: 0 } },
    ai: {
      state: 'chase' as const,
      timer: 0,
      evadeDir: new Vector3(),
      target: null,
    },
    ...overrides,
  } as any;
}

describe('AI System', () => {
  beforeEach(() => {
    state.allies = [];
    state.enemies = [];
    state.capitalShips = [];
    jest.clearAllMocks();
  });

  describe('Переключение состояний', () => {
    it('chase → evade при сближении (dist < evadeDistance)', () => {
      // Ставим союзника далеко и врага близко к нему
      const ally = createFighter(0, 0, 0);
      const enemy = createFighter(50, 0, 0); // dist=50 < evadeDistance=100
      state.allies.push(ally);
      state.enemies.push(enemy);

      // Устанавливаем цель и таймер=0 чтобы сработала смена состояния
      ally.ai.target = enemy as any;
      ally.ai.timer = 0;

      // Фиксируем Math.random чтобы не менять цель (retargetChance=0.01)
      const origRandom = Math.random;
      Math.random = jest.fn(() => 0.5); // > retargetChance → не меняет цель

      updateAllies(0.016, (jest.requireMock('@/features/flight/player-system') as any).playerPlane);

      Math.random = origRandom;

      expect(ally.ai.state).toBe('evade');
    });

    it('chase → orbit на средней дистанции', () => {
      // Дистанция между evadeDistance и chaseDistance
      const ally = createFighter(0, 0, 0);
      const enemy = createFighter(250, 0, 0); // evadeDistance < 250 < chaseDistance
      state.allies.push(ally);
      state.enemies.push(enemy);

      ally.ai.target = enemy as any;
      ally.ai.timer = 0;

      const origRandom = Math.random;
      Math.random = jest.fn(() => 0.5);

      updateAllies(0.016, (jest.requireMock('@/features/flight/player-system') as any).playerPlane);

      Math.random = origRandom;

      expect(ally.ai.state).toBe('orbit');
    });

    it('chase при большой дистанции (dist > chaseDistance)', () => {
      const ally = createFighter(0, 0, 0);
      const enemy = createFighter(1000, 0, 0); // > chaseDistance=500
      state.allies.push(ally);
      state.enemies.push(enemy);

      ally.ai.target = enemy as any;
      ally.ai.timer = 0;

      const origRandom = Math.random;
      Math.random = jest.fn(() => 0.5);

      updateAllies(0.016, (jest.requireMock('@/features/flight/player-system') as any).playerPlane);

      Math.random = origRandom;

      expect(ally.ai.state).toBe('chase');
    });
  });

  describe('findNearestTarget (через updateAllies)', () => {
    it('выбирает ближайшего врага как цель', () => {
      const ally = createFighter(0, 0, 0);
      const farEnemy = createFighter(500, 0, 0);
      const nearEnemy = createFighter(100, 0, 0);
      state.allies.push(ally);
      state.enemies.push(farEnemy, nearEnemy);

      ally.ai.target = null;

      const origRandom = Math.random;
      Math.random = jest.fn(() => 0.5); // не переключается на игрока
      updateAllies(0.016, (jest.requireMock('@/features/flight/player-system') as any).playerPlane);
      Math.random = origRandom;

      // Цель — ближайший враг
      expect(ally.ai.target).toBe(nearEnemy);
    });
  });

  describe('Стрельба', () => {
    it('стреляет когда shootTimer <= 0 и dist < shootDistance', () => {
      const ally = createFighter(0, 0, 0);
      const enemy = createFighter(200, 0, 0); // < shootDistance=400
      state.allies.push(ally);
      state.enemies.push(enemy);

      ally.ai.target = enemy as any;
      ally.ai.timer = 10; // не меняем состояние
      ally.shootTimer = 0; // таймер стрельбы истёк

      const origRandom = Math.random;
      Math.random = jest.fn(() => 0.5);

      updateAllies(0.016, (jest.requireMock('@/features/flight/player-system') as any).playerPlane);

      Math.random = origRandom;

      expect(mockShootFromFighter).toHaveBeenCalled();
    });

    it('НЕ стреляет когда dist > shootDistance', () => {
      const ally = createFighter(0, 0, 0);
      const enemy = createFighter(1000, 0, 0); // > shootDistance=400
      state.allies.push(ally);
      state.enemies.push(enemy);

      ally.ai.target = enemy as any;
      ally.ai.timer = 10;
      ally.shootTimer = 0;

      const origRandom = Math.random;
      Math.random = jest.fn(() => 0.5);

      updateAllies(0.016, (jest.requireMock('@/features/flight/player-system') as any).playerPlane);

      Math.random = origRandom;

      expect(mockShootFromFighter).not.toHaveBeenCalled();
    });

    it('НЕ стреляет когда shootTimer > 0', () => {
      const ally = createFighter(0, 0, 0);
      const enemy = createFighter(200, 0, 0);
      state.allies.push(ally);
      state.enemies.push(enemy);

      ally.ai.target = enemy as any;
      ally.ai.timer = 10;
      ally.shootTimer = 5; // таймер не истёк

      const origRandom = Math.random;
      Math.random = jest.fn(() => 0.5);

      updateAllies(0.016, (jest.requireMock('@/features/flight/player-system') as any).playerPlane);

      Math.random = origRandom;

      expect(mockShootFromFighter).not.toHaveBeenCalled();
    });
  });

  describe('Движение', () => {
    it('истребитель перемещается вперёд каждый кадр', () => {
      const ally = createFighter(0, 0, 0);
      const enemy = createFighter(200, 0, 0);
      state.allies.push(ally);
      state.enemies.push(enemy);

      ally.ai.target = enemy as any;
      ally.ai.timer = 10;
      ally.speed = 100;

      const startX = ally.mesh.position.x;

      const origRandom = Math.random;
      Math.random = jest.fn(() => 0.5);

      updateAllies(0.1, (jest.requireMock('@/features/flight/player-system') as any).playerPlane);

      Math.random = origRandom;

      // Позиция должна измениться
      const moved = ally.mesh.position.distanceTo(new Vector3(startX, 0, 0));
      expect(moved).toBeGreaterThan(0);
    });
  });

  describe('Обновление health bar', () => {
    it('обновляет scaling healthFill по соотношению HP', () => {
      const ally = createFighter(0, 0, 0);
      const enemy = createFighter(200, 0, 0);
      state.allies.push(ally);
      state.enemies.push(enemy);

      ally.ai.target = enemy as any;
      ally.ai.timer = 10;
      ally.health = 25; // 50% от maxHealth
      ally.maxHealth = 50;

      const origRandom = Math.random;
      Math.random = jest.fn(() => 0.5);

      updateAllies(0.016, (jest.requireMock('@/features/flight/player-system') as any).playerPlane);

      Math.random = origRandom;

      expect(ally.healthFill.scaling.x).toBeCloseTo(0.5, 5);
    });
  });
});
