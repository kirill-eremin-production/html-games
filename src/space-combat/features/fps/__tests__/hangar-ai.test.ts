import { Vector3 } from '@/shared/core/vector3';

import type { HangarData } from '@/entities/objects/hangar';

import { clearHangarAI, createHangarAIState, spawnHangarPilot, updateHangarAI } from '../hangar-ai';
import type { HangarAIState, HangarPilot } from '../hangar-ai';

// Мокаем space-ships чтобы не тянуть StandardMaterial/model-loader без BJS-сцены
jest.mock('@/entities/objects/space-ships', () => ({
  createFighter: jest.fn(),
}));

// ── Мок фабрик (BabylonJS не нужен) ─────────────────────────────────────────

const mockRemoveFromScene = jest.fn();
const mockSetEnabled = jest.fn();

jest.mock('@/shared/core/factories', () => ({
  createTransformNode: () => ({
    position: new (jest.requireActual('@/shared/core/vector3').Vector3)(),
    setEnabled: mockSetEnabled,
    parent: null,
  }),
  createMesh: () => ({
    position: new (jest.requireActual('@/shared/core/vector3').Vector3)(),
    parent: null,
  }),
  createCylinderGeometry: () => ({}),
  createSphereGeometry: () => ({}),
  createUnlitMaterial: () => ({}),
  removeFromScene: (...args: unknown[]) => mockRemoveFromScene(...args),
}));

// ── Хелпер: создать минимальный HangarData ──────────────────────────────────

function createMockHangar(slotCount: number): HangarData {
  const slots = [];
  for (let i = 0; i < slotCount; i++) {
    slots.push({
      position: new Vector3(i * 5, 0, 30 + i * 12),
      interactPoint: new Vector3(0, 0, 30 + i * 12),
      occupied: false,
      respawnTimer: 0,
      fighterNode: null,
    });
  }

  return {
    root: { position: new Vector3() } as any,
    spawnPoint: new Vector3(0, 0, 5),
    fighterSlots: slots,
    gatePosition: new Vector3(0, 0, 200),
    gateDirection: new Vector3(0, 0, 1),
    colliders: [],
  };
}

// ── Хелпер: прогнать N кадров ────────────────────────────────────────────────

function tick(n: number, dt: number, hangar: HangarData, ai: HangarAIState): HangarPilot[] {
  const allLaunched: HangarPilot[] = [];
  for (let i = 0; i < n; i++) {
    allLaunched.push(...updateHangarAI(dt, hangar, ai));
  }
  return allLaunched;
}

// ══════════════════════════════════════════════════════════════════════════════

describe('Hangar AI', () => {
  let hangar: HangarData;
  let ai: HangarAIState;

  beforeEach(() => {
    hangar = createMockHangar(4);
    ai = createHangarAIState();
    mockRemoveFromScene.mockClear();
    mockSetEnabled.mockClear();
    // Фиксируем Math.random для предсказуемости
    jest.spyOn(Math, 'random').mockReturnValue(0.5);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  // ── Спавн ────────────────────────────────────────────────────────────────

  describe('spawnHangarPilot', () => {
    it('добавляет пилота в массив', () => {
      spawnHangarPilot(hangar.spawnPoint, 'Пилот-1', ai);

      expect(ai.pilots).toHaveLength(1);
      expect(ai.pilots[0].name).toBe('Пилот-1');
      expect(ai.pilots[0].phase).toBe('spawning');
    });

    it('пилот получает позицию около spawnPoint', () => {
      const pilot = spawnHangarPilot(hangar.spawnPoint, 'Test', ai);

      // При random=0.5 offset=(0,0,0), позиция = spawnPoint
      expect(pilot.position.x).toBeCloseTo(hangar.spawnPoint.x, 1);
      expect(pilot.position.z).toBeCloseTo(hangar.spawnPoint.z, 1);
    });

    it('несколько пилотов — все добавляются', () => {
      spawnHangarPilot(hangar.spawnPoint, 'A', ai);
      spawnHangarPilot(hangar.spawnPoint, 'B', ai);
      spawnHangarPilot(hangar.spawnPoint, 'C', ai);

      expect(ai.pilots).toHaveLength(3);
    });
  });

  // ── State machine: spawning → running ──────────────────────────────────

  describe('spawning → running', () => {
    it('пилот переходит в running после таймера', () => {
      const pilot = spawnHangarPilot(hangar.spawnPoint, 'Test', ai);
      const timer = pilot.timer;

      // Прогоняем чуть больше таймера
      tick(Math.ceil(timer / (1 / 60)) + 1, 1 / 60, hangar, ai);

      expect(pilot.phase).toBe('running');
      expect(pilot.targetSlot).toBeGreaterThanOrEqual(0);
    });

    it('слот резервируется при переходе в running', () => {
      const pilot = spawnHangarPilot(hangar.spawnPoint, 'Test', ai);
      const timer = pilot.timer;

      tick(Math.ceil(timer / (1 / 60)) + 1, 1 / 60, hangar, ai);

      expect(ai.reservedSlots.has(pilot.targetSlot)).toBe(true);
    });

    it('два пилота не бегут к одному слоту', () => {
      const p1 = spawnHangarPilot(hangar.spawnPoint, 'A', ai);
      const p2 = spawnHangarPilot(hangar.spawnPoint, 'B', ai);

      // Прогоняем достаточно, чтобы оба перешли в running
      tick(120, 1 / 60, hangar, ai);

      // Если оба в running — слоты разные
      if (p1.phase !== 'spawning' && p2.phase !== 'spawning') {
        expect(p1.targetSlot).not.toBe(p2.targetSlot);
      }
    });
  });

  // ── State machine: running → boarding ──────────────────────────────────

  describe('running → boarding', () => {
    it('пилот приходит к interactPoint и переходит в boarding', () => {
      const pilot = spawnHangarPilot(hangar.spawnPoint, 'Test', ai);

      // Прогоняем долго — должен добежать и начать посадку
      tick(600, 1 / 60, hangar, ai);

      // Он уже прошёл boarding, может быть в launching или flying_out
      expect(['boarding', 'launching', 'flying_out']).toContain(pilot.phase);
    });
  });

  // ── State machine: boarding → launching → flying_out ───────────────────

  describe('boarding → launching → flying_out', () => {
    it('полный цикл: spawning → flying_out → удалён', () => {
      spawnHangarPilot(hangar.spawnPoint, 'FullCycle', ai);

      // Прогоняем 30 секунд — более чем достаточно для полного цикла
      const launched = tick(30 * 60, 1 / 60, hangar, ai);

      // Пилот должен вылететь
      expect(launched).toHaveLength(1);
      expect(launched[0].name).toBe('FullCycle');
      // Убран из массива
      expect(ai.pilots).toHaveLength(0);
    });

    it('при boarding слот помечается occupied', () => {
      const pilot = spawnHangarPilot(hangar.spawnPoint, 'Test', ai);

      // Прогоняем до boarding+
      tick(600, 1 / 60, hangar, ai);

      const slotIdx = pilot.targetSlot;
      if (slotIdx >= 0) {
        expect(hangar.fighterSlots[slotIdx].occupied).toBe(true);
      }
    });

    it('при boarding вызывается setEnabled(false) — пилот скрыт', () => {
      spawnHangarPilot(hangar.spawnPoint, 'Test', ai);

      // Прогоняем до boarding
      tick(600, 1 / 60, hangar, ai);

      expect(mockSetEnabled).toHaveBeenCalledWith(false);
    });

    it('removeFromScene вызывается при вылете', () => {
      spawnHangarPilot(hangar.spawnPoint, 'Test', ai);

      tick(30 * 60, 1 / 60, hangar, ai);

      expect(mockRemoveFromScene).toHaveBeenCalled();
    });
  });

  // ── Нет свободных слотов ───────────────────────────────────────────────

  describe('нет свободных слотов', () => {
    it('пилот остаётся в spawning если все слоты заняты', () => {
      // Занимаем все слоты
      for (const slot of hangar.fighterSlots) {
        slot.occupied = true;
      }

      const pilot = spawnHangarPilot(hangar.spawnPoint, 'NoSlot', ai);
      // Прогоняем 2 секунды (spawn_delay точно пройдёт)
      tick(120, 1 / 60, hangar, ai);

      // Пилот в spawning — не может найти слот
      expect(pilot.phase).toBe('spawning');
      expect(pilot.targetSlot).toBe(-1);
    });
  });

  // ── Массовый спавн ─────────────────────────────────────────────────────

  describe('массовый спавн', () => {
    it('4 пилота → 4 слота → все вылетают', () => {
      // Разброс random для стаггера
      let callCount = 0;
      jest.spyOn(Math, 'random').mockImplementation(() => {
        return (callCount++ % 10) / 10;
      });

      for (let i = 0; i < 4; i++) {
        spawnHangarPilot(hangar.spawnPoint, `P${i}`, ai);
      }

      const launched = tick(60 * 60, 1 / 60, hangar, ai);

      expect(launched).toHaveLength(4);
      expect(ai.pilots).toHaveLength(0);
    });
  });

  // ── clearHangarAI ──────────────────────────────────────────────────────

  describe('clearHangarAI', () => {
    it('удаляет всех пилотов и очищает reservedSlots', () => {
      spawnHangarPilot(hangar.spawnPoint, 'A', ai);
      spawnHangarPilot(hangar.spawnPoint, 'B', ai);
      ai.reservedSlots.add(0);
      ai.reservedSlots.add(1);

      clearHangarAI(ai);

      expect(ai.pilots).toHaveLength(0);
      expect(ai.reservedSlots.size).toBe(0);
      expect(mockRemoveFromScene).toHaveBeenCalledTimes(2);
    });
  });

  // ── updateHangarAI возвращает вылетевших ───────────────────────────────

  describe('updateHangarAI return value', () => {
    it('возвращает пустой массив если никто не вылетел', () => {
      spawnHangarPilot(hangar.spawnPoint, 'Test', ai);

      const launched = updateHangarAI(1 / 60, hangar, ai);

      expect(launched).toHaveLength(0);
    });

    it('reservedSlots очищаются после вылета', () => {
      spawnHangarPilot(hangar.spawnPoint, 'Test', ai);

      tick(30 * 60, 1 / 60, hangar, ai);

      expect(ai.reservedSlots.size).toBe(0);
    });
  });
});
