import { Vector3 } from '@/shared/core/vector3';
import { actions } from '@/shared/input';
import { state } from '@/shared/state';

import type { AABB } from '@/entities/objects/hangar';
import { PILOT_EYE_HEIGHT } from '@/entities/objects/hangar';

import { updateFPSController } from '../fps-controller';
import { createFPSState } from '../fps-state';
import type { FPSState } from '../fps-state';

// Мокаем space-ships чтобы не тянуть StandardMaterial/model-loader без BJS-сцены
jest.mock('@/entities/objects/space-ships', () => ({
  createFighter: jest.fn(),
}));

// ── Мок камеры ───────────────────────────────────────────────────────────────

function createMockCamera() {
  return {
    position: new Vector3(),
    setTarget: jest.fn(),
    // PerspectiveCamera наследует FreeCamera, но в тестах нам нужны только эти поля
  } as any;
}

// ── Хелпер: сбросить input-состояние ─────────────────────────────────────────

function resetInput(): void {
  for (const key of Object.keys(actions) as (keyof typeof actions)[]) {
    actions[key] = false;
  }
  state.mouseDeltaX = 0;
  state.mouseDeltaY = 0;
}

// ── Хелпер: коллайдер-пол (y от -1 до 0, широкий по XZ) ─────────────────────

function floorCollider(): AABB {
  return {
    min: new Vector3(-100, -1, -100),
    max: new Vector3(100, 0, 100),
  };
}

// ══════════════════════════════════════════════════════════════════════════════

describe('FPS Controller', () => {
  let fps: FPSState;
  let cam: ReturnType<typeof createMockCamera>;

  beforeEach(() => {
    fps = createFPSState(new Vector3(0, 0, 0));
    cam = createMockCamera();
    resetInput();
  });

  // ── Обзор мышью ──────────────────────────────────────────────────────────

  describe('updateLook', () => {
    it('поворачивает yaw при горизонтальной дельте мыши', () => {
      state.mouseDeltaX = 100;
      updateFPSController(1 / 60, fps, [], cam);

      expect(fps.yaw).not.toBe(0);
      // Движение мыши вправо (positive deltaX) → yaw уменьшается (поворот вправо)
      expect(fps.yaw).toBeLessThan(0);
    });

    it('поворачивает pitch при вертикальной дельте мыши', () => {
      state.mouseDeltaY = -100; // мышь вверх
      updateFPSController(1 / 60, fps, [], cam);

      // Движение мыши вверх → pitch увеличивается (смотрим вверх)
      expect(fps.pitch).toBeGreaterThan(0);
    });

    it('ограничивает pitch до ±~90°', () => {
      state.mouseDeltaY = -100000; // огромная дельта вверх
      updateFPSController(1 / 60, fps, [], cam);

      expect(fps.pitch).toBeLessThan(Math.PI / 2);
      expect(fps.pitch).toBeGreaterThan(Math.PI / 2 - 0.02);
    });

    it('обнуляет mouseDelta после чтения', () => {
      state.mouseDeltaX = 50;
      state.mouseDeltaY = 30;
      updateFPSController(1 / 60, fps, [], cam);

      expect(state.mouseDeltaX).toBe(0);
      expect(state.mouseDeltaY).toBe(0);
    });
  });

  // ── Движение ─────────────────────────────────────────────────────────────

  describe('movement', () => {
    it('moveForward увеличивает позицию вдоль Z (при yaw=0)', () => {
      actions.moveForward = true;
      const dt = 1 / 60;

      // Несколько кадров для набора скорости
      for (let i = 0; i < 60; i++) {
        updateFPSController(dt, fps, [floorCollider()], cam);
      }

      expect(fps.position.z).toBeGreaterThan(0);
    });

    it('moveBack уменьшает позицию вдоль Z (при yaw=0)', () => {
      actions.moveBack = true;
      const dt = 1 / 60;

      for (let i = 0; i < 60; i++) {
        updateFPSController(dt, fps, [floorCollider()], cam);
      }

      expect(fps.position.z).toBeLessThan(0);
    });

    it('strafeRight двигает вправо по X', () => {
      // При yaw=0 forward=(0,0,1), yaw убывает при движении мыши вправо,
      // поэтому «вправо» в мировых координатах = -X
      actions.strafeRight = true;
      const dt = 1 / 60;

      for (let i = 0; i < 60; i++) {
        updateFPSController(dt, fps, [floorCollider()], cam);
      }

      expect(fps.position.x).toBeLessThan(0);
    });

    it('strafeLeft двигает влево по X', () => {
      actions.strafeLeft = true;
      const dt = 1 / 60;

      for (let i = 0; i < 60; i++) {
        updateFPSController(dt, fps, [floorCollider()], cam);
      }

      expect(fps.position.x).toBeGreaterThan(0);
    });

    it('без ввода персонаж замедляется (трение)', () => {
      // Даём начальную скорость
      fps.velocity.set(5, 0, 0);
      const dt = 1 / 60;

      for (let i = 0; i < 120; i++) {
        updateFPSController(dt, fps, [floorCollider()], cam);
      }

      // После 2 секунд трения — скорость почти нулевая
      const hSpeed = Math.sqrt(fps.velocity.x ** 2 + fps.velocity.z ** 2);
      expect(hSpeed).toBeLessThan(0.01);
    });

    it('горизонтальная скорость ограничена MOVE_SPEED (6 м/с)', () => {
      actions.moveForward = true;
      const dt = 1 / 60;

      // Долго держим W
      for (let i = 0; i < 300; i++) {
        updateFPSController(dt, fps, [floorCollider()], cam);
      }

      const hSpeed = Math.sqrt(fps.velocity.x ** 2 + fps.velocity.z ** 2);
      expect(hSpeed).toBeLessThanOrEqual(6.01); // с небольшим допуском
    });
  });

  // ── Гравитация и прыжок ──────────────────────────────────────────────────

  describe('gravity & jump', () => {
    it('гравитация тянет вниз без пола', () => {
      fps.grounded = false;
      const startY = fps.position.y;

      updateFPSController(1 / 60, fps, [], cam);

      expect(fps.position.y).toBeLessThan(startY);
      expect(fps.velocity.y).toBeLessThan(0);
    });

    it('пол останавливает падение', () => {
      fps.position.set(0, -0.5, 0); // проваливается в пол
      fps.velocity.y = -5;
      fps.grounded = false;

      updateFPSController(1 / 60, fps, [floorCollider()], cam);

      expect(fps.position.y).toBeGreaterThanOrEqual(0);
      expect(fps.grounded).toBe(true);
      expect(fps.velocity.y).toBe(0);
    });

    it('прыжок даёт положительную вертикальную скорость', () => {
      fps.grounded = true;
      actions.jump = true;

      updateFPSController(1 / 60, fps, [floorCollider()], cam);

      expect(fps.velocity.y).toBeGreaterThan(0);
      expect(fps.grounded).toBe(false);
    });

    it('нельзя прыгнуть в воздухе', () => {
      fps.grounded = false;
      fps.velocity.y = -2;
      actions.jump = true;

      updateFPSController(1 / 60, fps, [], cam);

      // Скорость должна стать ещё отрицательнее из-за гравитации, а не положительной
      expect(fps.velocity.y).toBeLessThan(0);
    });
  });

  // ── Коллизии ─────────────────────────────────────────────────────────────

  describe('collisions', () => {
    it('стена слева не пускает персонажа', () => {
      const leftWall: AABB = {
        min: new Vector3(-11, -1, -100),
        max: new Vector3(-10, 12, 100),
      };

      // Расширенный AABB: minX=-11.3, maxX=-9.7
      // Ставим персонажа внутри расширенного бокса, ближе к maxX (правой грани)
      fps.position.set(-10.1, 1, 0);
      fps.velocity.set(-5, 0, 0);
      fps.grounded = true;

      updateFPSController(1 / 60, fps, [leftWall], cam);

      // Вытолкнут вправо за расширенную границу maxX = -9.7
      expect(fps.position.x).toBeGreaterThanOrEqual(-9.7 - 0.01);
      expect(fps.velocity.x).toBe(0);
    });

    it('потолок не пускает выше', () => {
      const ceiling: AABB = {
        min: new Vector3(-100, 12, -100),
        max: new Vector3(100, 13, 100),
      };

      fps.position.set(0, 12 - PILOT_EYE_HEIGHT + 0.1, 0); // голова упирается в потолок
      fps.velocity.set(0, 5, 0);

      updateFPSController(1 / 60, fps, [ceiling], cam);

      expect(fps.position.y + PILOT_EYE_HEIGHT).toBeLessThanOrEqual(12.01);
    });
  });

  // ── Камера ───────────────────────────────────────────────────────────────

  describe('camera', () => {
    it('камера на высоте глаз', () => {
      fps.position.set(5, 0, 10);
      updateFPSController(1 / 60, fps, [floorCollider()], cam);

      expect(cam.position.x).toBeCloseTo(5, 1);
      expect(cam.position.y).toBeCloseTo(PILOT_EYE_HEIGHT, 1);
      expect(cam.position.z).toBeCloseTo(10, 1);
    });

    it('setTarget вызывается каждый кадр', () => {
      updateFPSController(1 / 60, fps, [], cam);
      expect(cam.setTarget).toHaveBeenCalled();
    });

    it('target направлен вперёд при yaw=0', () => {
      fps.position.set(0, 0, 0);
      fps.yaw = 0;
      fps.pitch = 0;

      updateFPSController(1 / 60, fps, [], cam);

      const target: Vector3 = cam.setTarget.mock.calls[0][0];
      // При yaw=0, pitch=0: target должен быть по +Z
      expect(target.z).toBeGreaterThan(0);
      expect(Math.abs(target.x)).toBeLessThan(0.01);
    });
  });
});
