/**
 * FPS-контроллер: движение от первого лица, обзор мышью, гравитация, прыжок, коллизии.
 *
 * Чистая логика — не знает ни про ECS, ни про GameMode.
 * Получает FPSState + AABB-коллайдеры + камеру, обновляет их каждый кадр.
 */
import type { PerspectiveCamera } from '@/shared/core/camera';
import { Vector3 } from '@/shared/core/vector3';
import { actions } from '@/shared/input';
import { state } from '@/shared/state';
import type { GameSystem } from '@/shared/types';

import { PILOT_EYE_HEIGHT } from '@/entities/objects/hangar';
import type { AABB } from '@/entities/objects/hangar';

import type { FPSState } from './fps-state';

// ── Константы ────────────────────────────────────────────────────────────────

/** Скорость ходьбы (м/с) */
const MOVE_SPEED = 6;
/** Скорость бега (м/с) */
const SPRINT_SPEED = 12;
/** Ускорение персонажа (м/с²) — как быстро набирает скорость */
const ACCELERATION = 40;
/** Коэффициент трения (торможение без ввода) */
const FRICTION = 10;
/** Гравитация (м/с²) */
const GRAVITY = 20;
/** Скорость прыжка (м/с) */
const JUMP_SPEED = 6;
/** Чувствительность мыши (рад/пиксель) */
const MOUSE_SENSITIVITY = 0.002;
/** Максимальный угол наклона камеры вверх/вниз (рад) */
const MAX_PITCH = Math.PI / 2 - 0.01;
/** Радиус капсулы персонажа для коллизий (м) */
const PLAYER_RADIUS = 0.3;

// ── Временные векторы (переиспользуем, чтобы не создавать мусор) ─────────────

const _forward = new Vector3();
const _right = new Vector3();
const _wishDir = new Vector3();

// ── Обзор мышью ──────────────────────────────────────────────────────────────

function updateLook(fps: FPSState): void {
  const dx = state.mouseDeltaX;
  const dy = state.mouseDeltaY;

  // Обнуляем дельту — мы её «забрали»
  state.mouseDeltaX = 0;
  state.mouseDeltaY = 0;

  if (dx === 0 && dy === 0) return;

  fps.yaw -= dx * MOUSE_SENSITIVITY;
  fps.pitch -= dy * MOUSE_SENSITIVITY;
  fps.pitch = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, fps.pitch));
}

// ── Движение ─────────────────────────────────────────────────────────────────

function updateMovement(fps: FPSState, dt: number): void {
  // Направление «вперёд» и «вправо» на плоскости XZ (без учёта pitch)
  const sinYaw = Math.sin(fps.yaw);
  const cosYaw = Math.cos(fps.yaw);

  _forward.set(sinYaw, 0, cosYaw);
  _right.set(-cosYaw, 0, sinYaw);

  // Желаемое направление движения
  _wishDir.set(0, 0, 0);
  if (actions.moveForward) _wishDir.addInPlace(_forward);
  if (actions.moveBack) _wishDir.addInPlace(_forward.scale(-1));
  if (actions.strafeRight) _wishDir.addInPlace(_right);
  if (actions.strafeLeft) _wishDir.addInPlace(_right.scale(-1));

  const wishLen = _wishDir.length();

  if (wishLen > 0.001) {
    // Нормализуем и применяем ускорение
    _wishDir.scaleInPlace(1 / wishLen);
    fps.velocity.x += _wishDir.x * ACCELERATION * dt;
    fps.velocity.z += _wishDir.z * ACCELERATION * dt;
  }

  // Горизонтальное трение
  const hSpeed = Math.sqrt(fps.velocity.x ** 2 + fps.velocity.z ** 2);
  if (hSpeed > 0.001) {
    const drop = Math.max(hSpeed, 1) * FRICTION * dt;
    const newSpeed = Math.max(0, hSpeed - drop) / hSpeed;
    fps.velocity.x *= newSpeed;
    fps.velocity.z *= newSpeed;
  }

  // Ограничение горизонтальной скорости (спринт по Shift)
  const maxSpeed = actions.sprint ? SPRINT_SPEED : MOVE_SPEED;
  const hSpeed2 = Math.sqrt(fps.velocity.x ** 2 + fps.velocity.z ** 2);
  if (hSpeed2 > maxSpeed) {
    const scale = maxSpeed / hSpeed2;
    fps.velocity.x *= scale;
    fps.velocity.z *= scale;
  }

  // Гравитация
  fps.velocity.y -= GRAVITY * dt;

  // Прыжок
  if (actions.jump && fps.grounded) {
    fps.velocity.y = JUMP_SPEED;
    fps.grounded = false;
  }

  // Применяем скорость к позиции
  fps.position.addScaledVector(fps.velocity, dt);
}

// ── Коллизии с AABB ─────────────────────────────────────────────────────────

function resolveCollisions(fps: FPSState, colliders: AABB[]): void {
  const p = fps.position;
  const r = PLAYER_RADIUS;
  const eyeH = PILOT_EYE_HEIGHT;

  for (const box of colliders) {
    // Расширяем AABB наружу на радиус персонажа (Minkowski sum для solid-объекта)
    const eMinX = box.min.x - r;
    const eMaxX = box.max.x + r;
    const eMinZ = box.min.z - r;
    const eMaxZ = box.max.z + r;

    // Проверяем пересечение точки (ноги) с расширенным AABB
    if (p.x < eMinX || p.x > eMaxX || p.z < eMinZ || p.z > eMaxZ) continue;
    // Вертикальная проверка (ноги .. голова)
    if (p.y > box.max.y || p.y + eyeH < box.min.y) continue;

    // Есть пересечение — выталкиваем по минимальной оси
    // Расстояние до каждой грани расширенного бокса (знак = направление выталкивания)
    const candidates = [
      { axis: 'x' as const, val: eMinX - p.x }, // вытолкнуть влево
      { axis: 'x' as const, val: eMaxX - p.x }, // вытолкнуть вправо
      { axis: 'z' as const, val: eMinZ - p.z }, // вытолкнуть назад
      { axis: 'z' as const, val: eMaxZ - p.z }, // вытолкнуть вперёд
      { axis: 'y' as const, val: box.max.y - p.y }, // вытолкнуть вверх (пол)
      { axis: 'y' as const, val: box.min.y - eyeH - p.y }, // вытолкнуть вниз (потолок)
    ];

    let best = candidates[0];
    for (let i = 1; i < candidates.length; i++) {
      if (Math.abs(candidates[i].val) < Math.abs(best.val)) {
        best = candidates[i];
      }
    }

    p[best.axis] += best.val;

    // Обнуляем скорость по оси выталкивания
    fps.velocity[best.axis] = 0;

    // Если вытолкнуло вверх (пол) — стоим на земле
    if (best.axis === 'y' && best.val > 0) {
      fps.grounded = true;
    }
  }
}

// ── Камера ───────────────────────────────────────────────────────────────────

function updateCamera(fps: FPSState, camera: PerspectiveCamera): void {
  // Позиция камеры = ноги + высота глаз
  camera.position.set(fps.position.x, fps.position.y + PILOT_EYE_HEIGHT, fps.position.z);

  // Направление взгляда из yaw + pitch
  const cosPitch = Math.cos(fps.pitch);
  const targetX = fps.position.x + Math.sin(fps.yaw) * cosPitch;
  const targetY = fps.position.y + PILOT_EYE_HEIGHT + Math.sin(fps.pitch);
  const targetZ = fps.position.z + Math.cos(fps.yaw) * cosPitch;

  camera.setTarget(new Vector3(targetX, targetY, targetZ));
}

// ── Pointer Lock API ─────────────────────────────────────────────────────────

export function requestPointerLock(): void {
  document.body.requestPointerLock();
}

export function exitPointerLock(): void {
  if (document.pointerLockElement) {
    document.exitPointerLock();
  }
}

// ── Главная функция обновления ───────────────────────────────────────────────

/**
 * Обновить FPS-контроллер за один кадр.
 *
 * Вызывается из GameModeHandler.update() при фазе 'hangar'.
 */
export function updateFPSController(
  dt: number,
  fps: FPSState,
  colliders: AABB[],
  cam: PerspectiveCamera,
): void {
  updateLook(fps);
  updateMovement(fps, dt);
  resolveCollisions(fps, colliders);
  updateCamera(fps, cam);
}

// ── GameSystem-адаптер ───────────────────────────────────────────────────────

/**
 * Создать GameSystem для FPS-контроллера.
 *
 * Зависимости (стейт, коллайдеры, камера) фиксируются при создании —
 * они известны только при инициализации фазы ангара.
 */
export function createFPSSystem(
  fps: FPSState,
  colliders: AABB[],
  cam: PerspectiveCamera,
): GameSystem {
  return {
    id: 'fps-controller',
    init() {
      requestPointerLock();
    },
    update(dt: number) {
      updateFPSController(dt, fps, colliders, cam);
    },
    cleanup() {
      exitPointerLock();
      // Обнуляем дельту, чтобы при возврате в ангар не было рывка
      state.mouseDeltaX = 0;
      state.mouseDeltaY = 0;
    },
  };
}
