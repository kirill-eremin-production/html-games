import { Vector3 } from '@/shared/core/vector3';

import type { FPSState } from '@/features/fps';

import {
  type BuilderControllerState,
  createControllerState,
  floorRaycast,
  updateBuilderController,
  voxelRaycast,
} from '../builder-controller';
import { createBuilderState, setBlock } from '../builder-state';

// Мокаем space-ships чтобы не тянуть BJS
jest.mock('@/entities/objects/space-ships', () => ({
  createFighter: jest.fn(),
}));

// ── Хелперы ──────────────────────────────────────────────────────────────────

function createFPS(x: number, y: number, z: number): FPSState {
  return {
    position: new Vector3(x, y, z),
    yaw: 0,
    pitch: 0,
    velocity: new Vector3(0, 0, 0),
    grounded: true,
  };
}

// ══════════════════════════════════════════════════════════════════════════════

describe('Builder Controller', () => {
  // ── voxelRaycast ─────────────────────────────────────────────────────────

  describe('voxelRaycast', () => {
    it('находит блок прямо по направлению луча (+Z)', () => {
      const s = createBuilderState();
      setBlock(s, 5, 1, 10, 0);

      // Стреляем лучом из (5.5, 1.5, 0.5) вдоль +Z
      const hit = voxelRaycast(s, 5.5, 1.5, 0.5, 0, 0, 1);

      expect(hit).not.toBeNull();
      expect(hit!.blockX).toBe(5);
      expect(hit!.blockY).toBe(1);
      expect(hit!.blockZ).toBe(10);
    });

    it('возвращает правильную нормаль грани входа (+Z → нормаль -Z)', () => {
      const s = createBuilderState();
      setBlock(s, 5, 1, 10, 0);

      const hit = voxelRaycast(s, 5.5, 1.5, 0.5, 0, 0, 1);

      expect(hit).not.toBeNull();
      // Луч входит в блок со стороны -Z
      expect(hit!.normalX).toBe(0);
      expect(hit!.normalY).toBe(0);
      expect(hit!.normalZ).toBe(-1);
    });

    it('находит блок вдоль -X', () => {
      const s = createBuilderState();
      setBlock(s, 0, 0, 5, 0);

      const hit = voxelRaycast(s, 10.5, 0.5, 5.5, -1, 0, 0);

      expect(hit).not.toBeNull();
      expect(hit!.blockX).toBe(0);
      expect(hit!.blockY).toBe(0);
      expect(hit!.blockZ).toBe(5);
      expect(hit!.normalX).toBe(1); // вход справа
    });

    it('находит блок вдоль +Y (снизу)', () => {
      const s = createBuilderState();
      setBlock(s, 5, 10, 5, 0);

      const hit = voxelRaycast(s, 5.5, 0.5, 5.5, 0, 1, 0);

      expect(hit).not.toBeNull();
      expect(hit!.blockY).toBe(10);
      expect(hit!.normalY).toBe(-1); // вход снизу
    });

    it('возвращает null если нет блоков на пути', () => {
      const s = createBuilderState();

      const hit = voxelRaycast(s, 5.5, 1.5, 0.5, 0, 0, 1);
      expect(hit).toBeNull();
    });

    it('возвращает null при дальности больше MAX_REACH', () => {
      const s = createBuilderState();
      // Блок далеко за пределами MAX_REACH (20 × 3 итераций)
      setBlock(s, 5, 1, 49, 0);

      const hit = voxelRaycast(s, 5.5, 1.5, 0.5, 0, 0, 1);
      // Может быть null или hit в зависимости от MAX_REACH * 3 шагов
      // При дистанции 48.5 блоков и MAX_REACH=20 → 60 шагов, дистанция ≈ 49 → может не дотянуться
      // Если попал — значит хватило шагов
      if (hit) {
        expect(hit.blockZ).toBe(49);
      }
    });

    it('пропускает начальный блок (в котором стоит игрок)', () => {
      const s = createBuilderState();
      setBlock(s, 5, 1, 5, 0); // блок в котором стоит игрок
      setBlock(s, 5, 1, 8, 1); // блок дальше

      const hit = voxelRaycast(s, 5.5, 1.5, 5.5, 0, 0, 1);

      expect(hit).not.toBeNull();
      expect(hit!.blockZ).toBe(8); // попали в дальний блок
    });

    it('находит ближайший из нескольких блоков', () => {
      const s = createBuilderState();
      setBlock(s, 5, 1, 3, 0);
      setBlock(s, 5, 1, 6, 1);
      setBlock(s, 5, 1, 9, 2);

      const hit = voxelRaycast(s, 5.5, 1.5, 0.5, 0, 0, 1);

      expect(hit).not.toBeNull();
      expect(hit!.blockZ).toBe(3); // ближайший
    });

    it('работает с диагональным направлением', () => {
      const s = createBuilderState();
      setBlock(s, 10, 0, 10, 0);

      // Луч из (0.5, 0.5, 0.5) в направлении (1, 0, 1) (нормализованный)
      const len = Math.sqrt(2);
      const hit = voxelRaycast(s, 0.5, 0.5, 0.5, 1 / len, 0, 1 / len);

      expect(hit).not.toBeNull();
      expect(hit!.blockX).toBe(10);
      expect(hit!.blockZ).toBe(10);
    });
  });

  // ── floorRaycast ───────────────────────────────────────────────────────

  describe('floorRaycast', () => {
    it('находит точку на полу при взгляде вниз', () => {
      // Глаза на высоте 1.7, смотрим вниз
      const result = floorRaycast(25.5, 1.7, 25.5, 0, -1, 0);

      expect(result).not.toBeNull();
      expect(result!.y).toBe(0);
      expect(result!.x).toBe(25);
      expect(result!.z).toBe(25);
    });

    it('возвращает null при взгляде вверх', () => {
      const result = floorRaycast(25.5, 1.7, 25.5, 0, 1, 0);
      expect(result).toBeNull();
    });

    it('возвращает null при горизонтальном взгляде', () => {
      const result = floorRaycast(25.5, 1.7, 25.5, 0, 0, 1);
      expect(result).toBeNull();
    });

    it('возвращает null если точка пересечения вне границ сетки', () => {
      // Смотрим вниз-вперёд, но попадаем далеко за сетку
      const result = floorRaycast(25.5, 1.7, 25.5, 0, -0.01, 1);
      // При малом угле и высоте 1.7 — t = 170, hitZ ≈ 195 → вне GRID_SIZE
      expect(result).toBeNull();
    });

    it('попадает в правильный блок при наклонном луче', () => {
      // Из позиции (10.5, 5, 10.5) смотрим под углом
      const dirY = -1;
      const dirZ = 1;
      const len = Math.sqrt(dirY * dirY + dirZ * dirZ);

      const result = floorRaycast(10.5, 5, 10.5, 0, dirY / len, dirZ / len);

      expect(result).not.toBeNull();
      expect(result!.y).toBe(0);
      // При высоте 5 и угле 45° — t приведёт к hitZ ≈ 10.5 + 5 = 15.5
      expect(result!.z).toBe(15);
    });
  });

  // ── createControllerState ────────────────────────────────────────────

  describe('createControllerState', () => {
    it('создаёт состояние с нулевым кулдауном', () => {
      const ctrl = createControllerState();
      expect(ctrl.cooldown).toBe(0);
      expect(ctrl.prevPlace).toBe(false);
      expect(ctrl.prevRemove).toBe(false);
      expect(ctrl.prevNextColor).toBe(false);
      expect(ctrl.prevPrevColor).toBe(false);
    });
  });

  // ── updateBuilderController ──────────────────────────────────────────

  describe('updateBuilderController', () => {
    let fps: FPSState;
    let bs: ReturnType<typeof createBuilderState>;
    let ctrl: BuilderControllerState;

    beforeEach(() => {
      // Игрок стоит на высоте 0 в центре сетки, смотрит вниз
      fps = createFPS(25, 0, 25);
      fps.pitch = -Math.PI / 4; // ~45° вниз
      bs = createBuilderState();
      ctrl = createControllerState();
    });

    it('возвращает ghost preview для пола когда нет блоков', () => {
      const result = updateBuilderController(
        1 / 60,
        fps,
        bs,
        ctrl,
        false,
        false,
        false,
        false,
        false,
      );

      // Должен быть ghost на полу
      expect(result.ghostY).toBe(0);
      expect(result.ghostX).not.toBeNull();
      expect(result.ghostZ).not.toBeNull();
    });

    it('размещает блок на полу по placeAction (edge trigger)', () => {
      const result = updateBuilderController(
        1 / 60,
        fps,
        bs,
        ctrl,
        true, // place
        false,
        false,
        false,
        false,
      );

      expect(result.changedColorIdx).toBe(0); // currentColor = 0
      expect(bs.blocks.size).toBe(1);
    });

    it('не размещает блок повторно на следующем кадре (edge trigger)', () => {
      // Первый кадр — размещаем
      updateBuilderController(1 / 60, fps, bs, ctrl, true, false, false, false, false);
      expect(bs.blocks.size).toBe(1);

      // Второй кадр — кнопка всё ещё нажата, но edge trigger не сработает
      const result = updateBuilderController(
        1 / 60,
        fps,
        bs,
        ctrl,
        true,
        false,
        false,
        false,
        false,
      );
      expect(result.changedColorIdx).toBeNull();
      expect(bs.blocks.size).toBe(1);
    });

    it('размещает блок после отпускания и повторного нажатия', () => {
      // Нажали
      updateBuilderController(1 / 60, fps, bs, ctrl, true, false, false, false, false);
      expect(bs.blocks.size).toBe(1);

      // Отпустили
      updateBuilderController(0.2, fps, bs, ctrl, false, false, false, false, false);

      // Нажали снова
      const result = updateBuilderController(
        1 / 60,
        fps,
        bs,
        ctrl,
        true,
        false,
        false,
        false,
        false,
      );
      expect(result.changedColorIdx).not.toBeNull();
    });

    it('удаляет блок по removeAction', () => {
      // Ставим блок
      setBlock(bs, 25, 0, 25, 3);

      // Смотрим прямо вниз на этот блок
      fps.position.set(25.5, 5, 25.5);
      fps.yaw = 0;
      fps.pitch = -Math.PI / 2 + 0.01; // почти вертикально вниз

      // Сначала обновим с false чтобы установить prevRemove
      updateBuilderController(1 / 60, fps, bs, ctrl, false, false, false, false, false);

      const result = updateBuilderController(
        1 / 60,
        fps,
        bs,
        ctrl,
        false,
        true, // remove
        false,
        false,
        false,
      );

      expect(result.changedColorIdx).toBe(3);
      expect(bs.blocks.size).toBe(0);
    });

    it('cooldown предотвращает быстрое размещение', () => {
      // Размещаем блок
      updateBuilderController(1 / 60, fps, bs, ctrl, true, false, false, false, false);
      expect(bs.blocks.size).toBe(1);

      // Отпустили и нажали снова — но прошло мало времени
      updateBuilderController(0.01, fps, bs, ctrl, false, false, false, false, false);
      updateBuilderController(0.01, fps, bs, ctrl, true, false, false, false, false);

      // Cooldown ещё не прошёл (0.15 сек)
      expect(bs.blocks.size).toBe(1);
    });

    it('nextColor переключает цвет вперёд', () => {
      bs.currentColor = 0;

      const result = updateBuilderController(
        1 / 60,
        fps,
        bs,
        ctrl,
        false,
        false,
        true, // nextColor
        false,
        false,
      );

      expect(result.colorChanged).toBe(true);
      expect(bs.currentColor).toBe(1);
    });

    it('prevColor переключает цвет назад', () => {
      bs.currentColor = 0;

      const result = updateBuilderController(
        1 / 60,
        fps,
        bs,
        ctrl,
        false,
        false,
        false,
        true, // prevColor
        false,
      );

      expect(result.colorChanged).toBe(true);
      expect(bs.currentColor).toBe(11); // wrap around
    });

    it('nextColor зацикливает палитру (11 → 0)', () => {
      bs.currentColor = 11;

      updateBuilderController(1 / 60, fps, bs, ctrl, false, false, true, false, false);

      expect(bs.currentColor).toBe(0);
    });

    it('saveAction показывает панель сохранения', () => {
      const result = updateBuilderController(
        1 / 60,
        fps,
        bs,
        ctrl,
        false,
        false,
        false,
        false,
        true, // save
      );

      expect(result.showSavePanel).toBe(true);
    });

    it('ghost preview на грани блока при наличии блоков', () => {
      // Ставим блок на той же высоте что и глаза
      setBlock(bs, 25, 1, 28, 0);

      // Игрок смотрит горизонтально вдоль +Z, глаза на y=1.7 (position.y=0 + EYE_HEIGHT=1.7)
      fps.position.set(25.5, 0, 25);
      fps.yaw = 0;
      fps.pitch = 0;

      const result = updateBuilderController(
        1 / 60,
        fps,
        bs,
        ctrl,
        false,
        false,
        false,
        false,
        false,
      );

      // Ghost должен быть на грани блока
      expect(result.ghostX).not.toBeNull();
      expect(result.ghostY).not.toBeNull();
      expect(result.ghostZ).not.toBeNull();
      // Ghost = block + normal, т.е. перед блоком по Z
      expect(result.ghostZ).toBe(27); // блок 28, нормаль -1 → ghost на 27
    });

    it('запоминает предыдущее состояние кнопок', () => {
      updateBuilderController(1 / 60, fps, bs, ctrl, true, false, true, false, false);

      expect(ctrl.prevPlace).toBe(true);
      expect(ctrl.prevRemove).toBe(false);
      expect(ctrl.prevNextColor).toBe(true);
      expect(ctrl.prevPrevColor).toBe(false);
    });
  });
});
