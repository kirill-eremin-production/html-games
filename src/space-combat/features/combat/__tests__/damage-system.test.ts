import { COMBAT_CONSTANTS } from '@/shared/config/combat';
import { PLAYER_CONFIG } from '@/shared/config/player';
import { Vector3 } from '@/shared/core/vector3';
import { clearAllListeners, emit } from '@/shared/events';
import { state } from '@/shared/state';

import { setupDamageHandlers, teardownDamageHandlers } from '../damage-system';

// Мокаем зависимости, требующие Babylon.js runtime
jest.mock('@/shared/core', () => {
  const { Vector3 } = jest.requireActual('@/shared/core/vector3');
  return {
    Vector3,
    disposeNode: jest.fn(),
    removeFromScene: jest.fn(),
  };
});

jest.mock('@/shared/config/combat-session', () => ({
  combatConfig: {
    respawnDelay: 5,
    killTarget: 100,
  },
}));

jest.mock('@/features/hud/hud', () => ({
  showMessage: jest.fn(),
}));

jest.mock('@/features/hud/kill-feed', () => ({
  addKillFeedEntry: jest.fn(),
}));

jest.mock('@/features/combat/explosions', () => ({
  createExplosion: jest.fn(),
}));

jest.mock('@/shared/ecs/combat-world', () => ({
  world: {
    destroyEntity: jest.fn(),
    getComponent: jest.fn(() => null),
  },
}));

jest.mock('@/entities/ecs-adapters/entity-cleanup', () => ({
  destroyEntityWithVisuals: jest.fn(),
}));

jest.mock('@/shared/refs/player-entity', () => ({
  playerEntityId: 0,
}));

const C = COMBAT_CONSTANTS;

function makeFighter(name: string, entityId = 42) {
  return { mesh: { position: new Vector3(0, 0, 0) }, name, entityId } as any;
}

describe('Damage System', () => {
  beforeEach(() => {
    clearAllListeners();
    setupDamageHandlers();
    // Сбрасываем state
    state.score = 0;
    state.playerHealth = 100;
    state.maxHealth = 100;
    state.totalEnemyKills = 0;
    state.respawnQueue = [];
    state.phase = 1;
    jest.clearAllMocks();
  });

  afterEach(() => {
    teardownDamageHandlers();
    clearAllListeners();
  });

  describe('fighter-killed (player kill of enemy)', () => {
    it('начисляет очки при убийстве врага игроком', () => {
      const victim = makeFighter('Фантом-1');

      emit('fighter-killed', {
        victim,
        killerName: 'Ас',
        killerTeam: 'player',
        victimTeam: 'enemy',
        isPlayerKill: true,
      });

      expect(state.score).toBe(C.fighterKillScore);
    });

    it('лечит игрока на killHealthBonus от maxHealth', () => {
      state.playerHealth = 50;
      const victim = makeFighter('Фантом-1');

      emit('fighter-killed', {
        victim,
        killerName: 'Ас',
        killerTeam: 'player',
        victimTeam: 'enemy',
        isPlayerKill: true,
      });

      expect(state.playerHealth).toBe(50 + state.maxHealth * PLAYER_CONFIG.killHealthBonus);
    });

    it('здоровье не превышает maxHealth', () => {
      state.playerHealth = 95;
      const victim = makeFighter('Фантом-1');

      emit('fighter-killed', {
        victim,
        killerName: 'Ас',
        killerTeam: 'player',
        victimTeam: 'enemy',
        isPlayerKill: true,
      });

      expect(state.playerHealth).toBeLessThanOrEqual(state.maxHealth);
    });

    it('увеличивает totalEnemyKills', () => {
      const victim = makeFighter('Фантом-1');

      emit('fighter-killed', {
        victim,
        killerName: 'Ас',
        killerTeam: 'player',
        victimTeam: 'enemy',
        isPlayerKill: true,
      });

      expect(state.totalEnemyKills).toBe(1);
    });

    it('уничтожает ECS entity жертвы', () => {
      const { destroyEntityWithVisuals } = jest.requireMock(
        '@/entities/ecs-adapters/entity-cleanup',
      ) as any;

      const victim = makeFighter('Фантом-1', 42);

      emit('fighter-killed', {
        victim,
        killerName: 'Ас',
        killerTeam: 'player',
        victimTeam: 'enemy',
        isPlayerKill: true,
      });

      expect(destroyEntityWithVisuals).toHaveBeenCalledWith(42);
    });

    it('вызывает destroyEntityWithVisuals с entityId жертвы', () => {
      const { destroyEntityWithVisuals } = jest.requireMock(
        '@/entities/ecs-adapters/entity-cleanup',
      ) as any;

      const victim = makeFighter('Фантом-1', 77);

      emit('fighter-killed', {
        victim,
        killerName: 'Ас',
        killerTeam: 'player',
        victimTeam: 'enemy',
        isPlayerKill: true,
      });

      expect(destroyEntityWithVisuals).toHaveBeenCalledWith(77);
    });

    it('добавляет запись в respawnQueue', () => {
      const victim = makeFighter('Фантом-1');

      emit('fighter-killed', {
        victim,
        killerName: 'Ас',
        killerTeam: 'player',
        victimTeam: 'enemy',
        isPlayerKill: true,
      });

      expect(state.respawnQueue.length).toBe(1);
      expect(state.respawnQueue[0].team).toBe('enemy');
    });
  });

  describe('fighter-killed (ally killed by enemy)', () => {
    it('не начисляет очки, если не player kill', () => {
      const victim = makeFighter('Сокол-1');

      emit('fighter-killed', {
        victim,
        killerName: 'Фантом-1',
        killerTeam: 'enemy',
        victimTeam: 'ally',
        isPlayerKill: false,
      });

      expect(state.score).toBe(0);
    });

    it('уничтожает ECS entity жертвы-союзника', () => {
      const { destroyEntityWithVisuals } = jest.requireMock(
        '@/entities/ecs-adapters/entity-cleanup',
      ) as any;

      const victim = makeFighter('Сокол-1', 99);

      emit('fighter-killed', {
        victim,
        killerName: 'Фантом-1',
        killerTeam: 'enemy',
        victimTeam: 'ally',
        isPlayerKill: false,
      });

      expect(destroyEntityWithVisuals).toHaveBeenCalledWith(99);
    });
  });
});
