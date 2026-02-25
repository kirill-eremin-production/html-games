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
  world: { destroyEntity: jest.fn() },
}));

jest.mock('@/shared/ecs/entity-index', () => ({
  getEntityByMesh: jest.fn(() => null),
  unregisterMeshEntity: jest.fn(),
}));

const C = COMBAT_CONSTANTS;

function makeFighter(name: string) {
  return { mesh: { position: new Vector3(0, 0, 0) }, name } as any;
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
      const { getEntityByMesh } = jest.requireMock('@/shared/ecs/entity-index') as any;
      const { world: mockWorld } = jest.requireMock('@/shared/ecs/combat-world') as any;
      getEntityByMesh.mockReturnValue(42);

      const victim = makeFighter('Фантом-1');

      emit('fighter-killed', {
        victim,
        killerName: 'Ас',
        killerTeam: 'player',
        victimTeam: 'enemy',
        isPlayerKill: true,
      });

      expect(getEntityByMesh).toHaveBeenCalledWith(victim.mesh);
      expect(mockWorld.destroyEntity).toHaveBeenCalledWith(42);
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
      const { getEntityByMesh } = jest.requireMock('@/shared/ecs/entity-index') as any;
      const { world: mockWorld } = jest.requireMock('@/shared/ecs/combat-world') as any;
      getEntityByMesh.mockReturnValue(99);

      const victim = makeFighter('Сокол-1');

      emit('fighter-killed', {
        victim,
        killerName: 'Фантом-1',
        killerTeam: 'enemy',
        victimTeam: 'ally',
        isPlayerKill: false,
      });

      expect(getEntityByMesh).toHaveBeenCalledWith(victim.mesh);
      expect(mockWorld.destroyEntity).toHaveBeenCalledWith(99);
    });
  });
});
