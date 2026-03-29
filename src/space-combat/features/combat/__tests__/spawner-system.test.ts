// ── Imports (после моков) ───────────────────────────────────────────────────

import { world } from '@/shared/ecs/combat-world';
import { state } from '@/shared/state';

import { TeamComponent } from '@/entities/stats/team';

import { updateRespawnQueue } from '../spawner-system';

// ── Mocks ───────────────────────────────────────────────────────────────────

jest.mock('@/shared/core', () => {
  const { Vector3 } = jest.requireActual('@/shared/core/vector3');
  const { Quaternion } = jest.requireActual('@babylonjs/core/Maths/math.vector');
  return {
    Vector3,
    Quaternion,
    TransformNode: class {
      position = new Vector3();
      quaternion = new Quaternion();
    },
    addToScene: jest.fn(),
  };
});

jest.mock('@/shared/ecs/combat-world', () => {
  const { World } = jest.requireActual('@/shared/ecs/world');
  return { world: new World(), resetWorld: jest.fn() };
});

jest.mock('@/shared/ecs/entity-index', () => ({
  registerMeshEntity: jest.fn(),
  unregisterMeshEntity: jest.fn(),
  getEntityByMesh: jest.fn(),
  clearEntityIndex: jest.fn(),
}));

jest.mock('@/shared/config/combat-session', () => ({
  combatConfig: {
    fighterHP: 50,
    allySpeedMin: 55,
    allySpeedMax: 75,
    allyFireRateMin: 1,
    allyFireRateMax: 3,
    enemySpeedMin: 45,
    enemySpeedMax: 65,
    enemyFireRateMin: 2,
    enemyFireRateMax: 5,
    respawnDelay: 5,
  },
}));

jest.mock('@/shared/model-loader/shared', () => ({
  addHealthBar: jest.fn(() => ({
    bar: { lookAt: jest.fn() },
    fill: { scaling: { x: 1 }, position: { x: 0 } },
  })),
}));

jest.mock('@/shared/settings', () => ({
  settings: {
    colors: {
      allyBody: '#33cc77',
      allyExhaust: '#00ffaa',
      enemyBody: '#dd3333',
      enemyExhaust: '#ff3300',
    },
  },
  parseHexColor: jest.fn(() => 0),
}));

jest.mock('@/entities/objects/space-ships', () => ({
  createFighterInstanced: jest.fn(() => {
    const { Vector3 } = jest.requireActual('@/shared/core/vector3');
    const { Quaternion } = jest.requireActual('@babylonjs/core/Maths/math.vector');
    return {
      position: new Vector3(),
      quaternion: new Quaternion(),
    };
  }),
}));

jest.mock('@/features/flight/player-system', () => {
  const { Vector3 } = jest.requireActual('@/shared/core/vector3');
  const { Quaternion } = jest.requireActual('@babylonjs/core/Maths/math.vector');
  return {
    playerPlane: {
      position: new Vector3(0, 0, 0),
      quaternion: new Quaternion(),
    },
  };
});

// ── Helpers ─────────────────────────────────────────────────────────────────

function countByTeam(team: string): number {
  return world.query(TeamComponent).filter((e) => e.components[0].team === team).length;
}

// ── Tests ───────────────────────────────────────────────────────────────────

describe('updateRespawnQueue', () => {
  beforeEach(() => {
    state.respawnQueue = [];
    world.clear();
  });

  it('уменьшает таймеры в очереди', () => {
    state.respawnQueue.push({ team: 'ally', timer: 5 });
    updateRespawnQueue(1);
    expect(state.respawnQueue[0].timer).toBe(4);
  });

  it('спавнит союзника при достижении нуля', () => {
    state.respawnQueue.push({ team: 'ally', timer: 1 });
    updateRespawnQueue(1);
    expect(state.respawnQueue.length).toBe(0);
    expect(countByTeam('ally')).toBe(1);
  });

  it('спавнит врага при достижении нуля', () => {
    state.respawnQueue.push({ team: 'enemy', timer: 1 });
    updateRespawnQueue(1);
    expect(state.respawnQueue.length).toBe(0);
    expect(countByTeam('enemy')).toBe(1);
  });

  it('не спавнит при таймере > 0', () => {
    state.respawnQueue.push({ team: 'ally', timer: 5 });
    updateRespawnQueue(2);
    expect(state.respawnQueue.length).toBe(1);
    expect(countByTeam('ally')).toBe(0);
  });

  it('обрабатывает несколько записей', () => {
    state.respawnQueue.push({ team: 'ally', timer: 1 });
    state.respawnQueue.push({ team: 'enemy', timer: 1 });
    state.respawnQueue.push({ team: 'ally', timer: 5 });

    updateRespawnQueue(1);

    expect(countByTeam('ally')).toBe(1);
    expect(countByTeam('enemy')).toBe(1);
    expect(state.respawnQueue.length).toBe(1);
    expect(state.respawnQueue[0].timer).toBe(4);
  });
});
