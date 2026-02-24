import { EXPLORATION_CONFIG } from '@/shared/config/exploration';
import { Vector3 } from '@/shared/core/vector3';
import { state } from '@/shared/state';

import { updateExplorationScene } from '../update';

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
      rotation = new Vector3();
      scaling = new Vector3(1, 1, 1);
      setVisibleRecursive = jest.fn();
    },
    createTransformNode: jest.fn(() => ({
      position: new Vector3(),
      quaternion: new Quaternion(),
      rotation: new Vector3(),
      scaling: new Vector3(1, 1, 1),
      setEnabled: jest.fn(),
      setVisibleRecursive: jest.fn(),
    })),
  };
});

jest.mock('@/features/flight/player-system', () => {
  const { Vector3 } = jest.requireActual('@/shared/core/vector3');
  const { Quaternion } = jest.requireActual('@/shared/core/quaternion');
  return {
    playerPlane: {
      position: new Vector3(0, 0, 0),
      quaternion: new Quaternion(),
    },
  };
});

const mockPlanets = [
  {
    initialAngle: 0,
    orbitalSpeed: 1,
    orbitalDistance: 100,
  },
  {
    initialAngle: Math.PI / 2,
    orbitalSpeed: 0.5,
    orbitalDistance: 200,
  },
];

let mockPlanetMeshes: any[] = [];

jest.mock('@/shared/refs/exploration-refs', () => ({
  explorationRefs: { nearestPlanetIndex: -1 },
  get planetMeshes() {
    return mockPlanetMeshes;
  },
}));

jest.mock('../index', () => ({
  getExplorationDetail: jest.fn(() => ({
    planets: mockPlanets,
  })),
}));

function createPlanetMesh(scaleX = 1) {
  return {
    position: new Vector3(0, 0, 0),
    rotation: new Vector3(0, 0, 0),
    scaling: new Vector3(scaleX, scaleX, scaleX),
  };
}

describe('updateExplorationScene', () => {
  beforeEach(() => {
    mockPlanetMeshes = [createPlanetMesh(), createPlanetMesh()];
    state.flightModel = 'exploration' as any;
    state.speed = 5000;
    jest.clearAllMocks();
  });

  describe('Орбиты планет', () => {
    it('вычисляет позицию планеты от времени', () => {
      updateExplorationScene(0.016, 1.0);

      // Планета 0: angle = 0 + 1.0 * 1 = 1.0
      expect(mockPlanetMeshes[0].position.x).toBeCloseTo(100 * Math.cos(1.0), 5);
      expect(mockPlanetMeshes[0].position.z).toBeCloseTo(100 * Math.sin(1.0), 5);
    });

    it('разные планеты имеют разные орбиты', () => {
      updateExplorationScene(0.016, 2.0);

      // Планета 0: angle = 0 + 2.0*1 = 2.0
      // Планета 1: angle = PI/2 + 2.0*0.5 = PI/2 + 1 ≈ 2.5708
      expect(mockPlanetMeshes[0].position.x).toBeCloseTo(100 * Math.cos(2.0), 5);
      expect(mockPlanetMeshes[1].position.x).toBeCloseTo(200 * Math.cos(Math.PI / 2 + 1.0), 5);
    });

    it('планеты вращаются вокруг своей оси', () => {
      const initialRotY = mockPlanetMeshes[0].rotation.y;
      updateExplorationScene(1.0, 0);
      expect(mockPlanetMeshes[0].rotation.y).toBeCloseTo(initialRotY + 0.5, 5); // dt * 0.5
    });
  });

  describe('Замедление у планет', () => {
    it('замедляет при полёте к планете в exploration mode', () => {
      const { playerPlane } = jest.requireMock('@/features/flight/player-system') as any;

      // Планета 0: initialAngle=0, orbitalDistance=100, при elapsed=0
      // angle=0, position = (100, 0, 0)
      // Ставим scaling.x большой чтобы slowdownDist покрывал расстояние
      mockPlanetMeshes[0].scaling.x = 50; // planetRadius=50, slowdownDist = 50*3 = 150
      // Расстояние от игрока (0,0,0) до планеты (100,0,0) = 100 < 150

      // Игрок летит К планете (forward = (1,0,0), toPlanet = (1,0,0))
      playerPlane.position.set(0, 0, 0);
      playerPlane.quaternion.set(0, 0, 0, 1); // identity → forward = (1,0,0)

      state.flightModel = 'exploration' as any;
      state.speed = 5000;

      updateExplorationScene(0.016, 0);

      expect(state.speed).toBeLessThanOrEqual(EXPLORATION_CONFIG.planetSlowdownMaxSpeed);
    });

    it('НЕ замедляет при полёте ОТ планеты', () => {
      const { playerPlane } = jest.requireMock('@/features/flight/player-system') as any;

      // Планета 0: при elapsed=0, position = (100, 0, 0)
      mockPlanetMeshes[0].scaling.x = 50;
      // Ставим игрока ВПЕРЕДИ планеты и летящим ОТ неё
      // forward = (1,0,0), toPlanet = (-1,0,0) → dot < 0
      playerPlane.position.set(110, 0, 0);
      playerPlane.quaternion.set(0, 0, 0, 1);

      state.flightModel = 'exploration' as any;
      state.speed = 5000;

      updateExplorationScene(0.016, 0);

      expect(state.speed).toBe(5000); // не замедлился
    });

    it('НЕ замедляет в combat mode', () => {
      const { playerPlane } = jest.requireMock('@/features/flight/player-system') as any;

      // Планета рядом, но режим combat
      mockPlanetMeshes[0].scaling.x = 50;
      playerPlane.position.set(0, 0, 0);
      playerPlane.quaternion.set(0, 0, 0, 1);

      state.flightModel = 'combat' as any;
      state.speed = 5000;

      updateExplorationScene(0.016, 0);

      expect(state.speed).toBe(5000);
    });
  });

  describe('Ближайшая планета', () => {
    it('определяет ближайшую планету в пределах planetInfoDistance', () => {
      const { explorationRefs } = jest.requireMock('@/shared/refs/exploration-refs') as any;
      const { playerPlane } = jest.requireMock('@/features/flight/player-system') as any;

      playerPlane.position.set(0, 0, 0);
      mockPlanetMeshes[0].position.set(100, 0, 0); // расстояние = 100
      mockPlanetMeshes[1].position.set(500, 0, 0); // расстояние = 500

      updateExplorationScene(0.016, 0);

      // Обе планеты < planetInfoDistance (200000), ближайшая — 0
      expect(explorationRefs.nearestPlanetIndex).toBe(0);
    });
  });
});
