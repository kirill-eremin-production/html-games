/**
 * ИИ-пилоты в ангаре: спавн, бег к истребителю, посадка, вылет.
 *
 * Пилоты — лёгкие объекты с state machine, не ECS-сущности.
 * ECS-истребитель создаётся только в момент вылета через ворота.
 *
 * Визуал: капсула (цилиндр + полусфера) с цветом команды.
 */
import {
  createCylinderGeometry,
  createMesh,
  createSphereGeometry,
  createTransformNode,
  createUnlitMaterial,
  removeFromScene,
} from '@/shared/core/factories';
import type { TransformNode } from '@/shared/core/transform-node';
import { Vector3 } from '@/shared/core/vector3';

import type { FighterSlot, HangarData } from '@/entities/objects/hangar';
import { SLOT_RESPAWN_TIME } from '@/entities/objects/hangar';

// ── Константы ────────────────────────────────────────────────────────────────

/** Скорость бега пилота (м/с) */
const PILOT_RUN_SPEED = 4;
/** Время «появления» после спавна (сек) */
const SPAWN_DELAY = 0.5;
/** Время посадки в истребитель (сек) */
const BOARD_DURATION = 1.5;
/** Время запуска двигателей перед вылетом (сек) */
const LAUNCH_DURATION = 1.0;
/** Скорость вылета через ангар к воротам (м/с) */
const FLY_OUT_SPEED = 30;
/** Расстояние, на котором пилот считается «дошёл» (м) */
const ARRIVE_THRESHOLD = 0.5;
/** Цвет капсулы союзника */
const ALLY_COLOR = 0x4488ff;
/** Высота пилота (для позиционирования) */
const PILOT_HEIGHT = 1.5;

// ── Типы ─────────────────────────────────────────────────────────────────────

export type PilotPhase = 'spawning' | 'running' | 'boarding' | 'launching' | 'flying_out';

export interface HangarPilot {
  /** Текущая фаза state machine */
  phase: PilotPhase;
  /** Позиция пилота (ноги) */
  position: Vector3;
  /** Таймер текущей фазы (сек) */
  timer: number;
  /** Индекс целевого слота */
  targetSlot: number;
  /** 3D-нода визуала пилота */
  mesh: TransformNode;
  /** Имя пилота (для ECS при вылете) */
  name: string;
}

// ── Создание визуала пилота ──────────────────────────────────────────────────

function createPilotMesh(color: number): TransformNode {
  const root = createTransformNode();

  // Тело — цилиндр
  const bodyGeo = createCylinderGeometry(0.2, 0.2, 1.0, 6);
  const mat = createUnlitMaterial({ color });
  const body = createMesh(bodyGeo, mat);
  body.position.set(0, 0.5, 0);
  body.parent = root;

  // Голова — сфера
  const headGeo = createSphereGeometry(0.2, 8, 8);
  const head = createMesh(headGeo, mat);
  head.position.set(0, 1.15, 0);
  head.parent = root;

  return root;
}

// ── Поиск ближайшего свободного слота ────────────────────────────────────────

function findNearestFreeSlot(
  pos: Vector3,
  slots: FighterSlot[],
  reservedSlots: Set<number>,
): number {
  let bestIdx = -1;
  let bestDist = Infinity;

  for (let i = 0; i < slots.length; i++) {
    if (slots[i].occupied || reservedSlots.has(i)) continue;

    const dx = slots[i].interactPoint.x - pos.x;
    const dz = slots[i].interactPoint.z - pos.z;
    const dist = dx * dx + dz * dz;

    if (dist < bestDist) {
      bestDist = dist;
      bestIdx = i;
    }
  }

  return bestIdx;
}

// ── Обновление одного пилота ─────────────────────────────────────────────────

const _dir = new Vector3();

function updatePilot(
  pilot: HangarPilot,
  dt: number,
  hangar: HangarData,
  reservedSlots: Set<number>,
): boolean /* true = пилот вылетел, удалить */ {
  switch (pilot.phase) {
    // ─── Пауза после спавна ───
    case 'spawning':
      pilot.timer -= dt;
      if (pilot.timer <= 0) {
        // Ищем свободный слот
        const slotIdx = findNearestFreeSlot(pilot.position, hangar.fighterSlots, reservedSlots);
        if (slotIdx === -1) return false; // нет слотов — ждём
        pilot.targetSlot = slotIdx;
        reservedSlots.add(slotIdx);
        pilot.phase = 'running';
      }
      return false;

    // ─── Бежит к interactPoint слота ───
    case 'running': {
      const target = hangar.fighterSlots[pilot.targetSlot].interactPoint;
      _dir.set(target.x - pilot.position.x, 0, target.z - pilot.position.z);
      const dist = _dir.length();

      if (dist < ARRIVE_THRESHOLD) {
        pilot.phase = 'boarding';
        pilot.timer = BOARD_DURATION;
        return false;
      }

      _dir.scaleInPlace(1 / dist); // normalize
      pilot.position.x += _dir.x * PILOT_RUN_SPEED * dt;
      pilot.position.z += _dir.z * PILOT_RUN_SPEED * dt;

      // Обновляем меш
      pilot.mesh.position.set(pilot.position.x, pilot.position.y, pilot.position.z);
      return false;
    }

    // ─── Садится в истребитель ───
    case 'boarding':
      pilot.timer -= dt;
      if (pilot.timer <= 0) {
        const slot = hangar.fighterSlots[pilot.targetSlot];
        slot.occupied = true;
        slot.respawnTimer = SLOT_RESPAWN_TIME;
        if (slot.fighterNode) slot.fighterNode.setEnabled(false);

        pilot.phase = 'launching';
        pilot.timer = LAUNCH_DURATION;

        // Скрываем пилота — он «внутри» истребителя
        pilot.mesh.setEnabled(false);
      }
      return false;

    // ─── Запуск двигателей ───
    case 'launching':
      pilot.timer -= dt;
      if (pilot.timer <= 0) {
        // Перемещаем позицию на позицию истребителя
        const slot = hangar.fighterSlots[pilot.targetSlot];
        pilot.position.copyFrom(slot.position);
        pilot.phase = 'flying_out';
      }
      return false;

    // ─── Вылет к воротам ───
    case 'flying_out': {
      // Двигаемся вдоль gateDirection к gatePosition
      pilot.position.addScaledVector(hangar.gateDirection, FLY_OUT_SPEED * dt);

      // Проверяем — долетел ли до ворот (по Z, т.к. gateDirection = (0,0,1))
      if (pilot.position.z >= hangar.gatePosition.z) {
        return true; // вылетел — удаляем из ангара, ECS-спавн снаружи
      }
      return false;
    }
  }
}

// ── Публичный API ────────────────────────────────────────────────────────────

/** Управление всеми пилотами в ангаре */
export interface HangarAIState {
  pilots: HangarPilot[];
  /** Зарезервированные слоты (пилот бежит, но ещё не сел) — чтобы два бота не бежали к одному */
  reservedSlots: Set<number>;
}

export function createHangarAIState(): HangarAIState {
  return { pilots: [], reservedSlots: new Set() };
}

/**
 * Заспавнить нового пилота в ангаре.
 *
 * @param spawnPoint Начальная позиция (зона спавна)
 * @param name Имя пилота (для ECS при вылете)
 * @param ai Текущее AI-состояние
 */
export function spawnHangarPilot(
  spawnPoint: Vector3,
  name: string,
  ai: HangarAIState,
): HangarPilot {
  // Небольшой случайный разброс от точки спавна
  const offset = new Vector3((Math.random() - 0.5) * 6, 0, (Math.random() - 0.5) * 4);
  const pos = spawnPoint.clone().add(offset);

  const mesh = createPilotMesh(ALLY_COLOR);
  mesh.position.set(pos.x, pos.y, pos.z);

  const pilot: HangarPilot = {
    phase: 'spawning',
    position: pos,
    timer: SPAWN_DELAY + Math.random() * 0.5, // стаггер
    targetSlot: -1,
    mesh,
    name,
  };

  ai.pilots.push(pilot);
  return pilot;
}

/**
 * Обновить всех ИИ-пилотов в ангаре.
 *
 * @returns Массив пилотов, которые вылетели (для создания ECS-истребителей снаружи).
 */
export function updateHangarAI(dt: number, hangar: HangarData, ai: HangarAIState): HangarPilot[] {
  const launched: HangarPilot[] = [];

  for (let i = ai.pilots.length - 1; i >= 0; i--) {
    const pilot = ai.pilots[i];
    const done = updatePilot(pilot, dt, hangar, ai.reservedSlots);

    if (done) {
      // Пилот вылетел — убираем визуал, освобождаем резерв
      removeFromScene(pilot.mesh);
      ai.reservedSlots.delete(pilot.targetSlot);
      ai.pilots.splice(i, 1);
      launched.push(pilot);
    }
  }

  return launched;
}

/**
 * Очистить всех пилотов (при выходе из ангара).
 */
export function clearHangarAI(ai: HangarAIState): void {
  for (const pilot of ai.pilots) {
    removeFromScene(pilot.mesh);
  }
  ai.pilots.length = 0;
  ai.reservedSlots.clear();
}

/**
 * Высота пилота (для внешнего кода, если потребуется).
 */
export { PILOT_HEIGHT };
