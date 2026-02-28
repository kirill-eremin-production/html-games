/**
 * FPS GameMode — от первого лица в ангаре корабля-носителя.
 *
 * Ангар персистентный: создаётся при enter(), живёт всё время боя.
 * ИИ-пилоты спавнятся и вылетают независимо от фазы игрока.
 *
 * enter()  → создаёт ангар, FPS-стейт, спавнит ИИ-пилотов, pointer lock
 * update(dt) → FPS-управление (только когда игрок в ангаре) + фоновые процессы (всегда)
 * suspend() → игрок сел в истребитель: отключает FPS-управление, но ангар и ИИ продолжают
 * resume()  → игрок вернулся: включает FPS-управление
 * exit()   → полная очистка (при выходе из combat mode)
 */
import { flightKeyMap, fpsKeyMap } from '@/shared/config/input';
import { addToScene, removeFromScene } from '@/shared/core/factories';
import { camera } from '@/shared/engine';
import { actions, setKeyMap, updateActions } from '@/shared/input';
import { state } from '@/shared/state';
import type { FPSModeContext, GameModeHandler } from '@/shared/types';

import { SLOT_RESPAWN_TIME, createHangar } from '@/entities/objects/hangar';
import type { HangarData } from '@/entities/objects/hangar';

import {
  clearHangarAI,
  createFPSState,
  createHangarAIState,
  exitPointerLock,
  requestPointerLock,
  spawnHangarPilot,
  updateFPSController,
  updateHangarAI,
} from '@/features/fps';
import type { FPSState, HangarAIState } from '@/features/fps';
import { createHangarHUD, destroyHangarHUD, updateHangarHUD } from '@/features/hud/hangar-hud';

// ── Константы ────────────────────────────────────────────────────────────────

/** Количество слотов по умолчанию (если не из CombatConfig) */
const DEFAULT_SLOT_COUNT = 8;
/** Расстояние взаимодействия с истребителем (м) */
const INTERACT_DISTANCE = 2.5;
/** Количество ИИ-пилотов для спавна (базовое) */
const AI_PILOT_COUNT = 4;
/** Интервал между спавнами ИИ-пилотов (сек) */
const AI_SPAWN_INTERVAL = 3;

// ── Внутреннее состояние ─────────────────────────────────────────────────────

let hangar: HangarData | null = null;
let fpsState: FPSState | null = null;
let aiState: HangarAIState | null = null;
let onBoardedCallback: (() => void) | undefined;
let onPilotLaunchedCallback: ((name: string) => void) | undefined;

/** Сколько ИИ-пилотов уже заспавнено */
let aiSpawned = 0;
/** Таймер автоспавна ИИ */
let aiSpawnTimer = 0;
/** Общее число ИИ-пилотов для текущей сессии */
let aiTotalToSpawn = AI_PILOT_COUNT;

/** Игрок сейчас в ангаре (FPS-управление активно) */
let playerInHangar = true;

// ── Проверка взаимодействия ──────────────────────────────────────────────────

/**
 * Проверяет, стоит ли игрок рядом со свободным истребителем и нажал E.
 * Возвращает индекс слота или -1.
 */
function checkInteraction(fps: FPSState, hData: HangarData): number {
  if (!actions.interact) return -1;

  const px = fps.position.x;
  const pz = fps.position.z;

  for (let i = 0; i < hData.fighterSlots.length; i++) {
    const slot = hData.fighterSlots[i];
    if (slot.occupied) continue;

    const dx = slot.interactPoint.x - px;
    const dz = slot.interactPoint.z - pz;
    const dist = Math.sqrt(dx * dx + dz * dz);

    if (dist < INTERACT_DISTANCE) {
      return i;
    }
  }

  return -1;
}

/** Проверяет, стоит ли игрок рядом со свободным слотом (без нажатия E) */
function isNearFreeSlot(fps: FPSState, hData: HangarData): boolean {
  const px = fps.position.x;
  const pz = fps.position.z;

  for (let i = 0; i < hData.fighterSlots.length; i++) {
    const slot = hData.fighterSlots[i];
    if (slot.occupied) continue;
    const dx = slot.interactPoint.x - px;
    const dz = slot.interactPoint.z - pz;
    if (dx * dx + dz * dz < INTERACT_DISTANCE * INTERACT_DISTANCE) return true;
  }
  return false;
}

/** Считает количество свободных слотов */
function countFreeSlots(hData: HangarData): number {
  let count = 0;
  for (const slot of hData.fighterSlots) {
    if (!slot.occupied) count++;
  }
  return count;
}

// ── Респавн истребителей на стойках ──────────────────────────────────────────

/** Занять слот: скрыть истребитель, запустить таймер респавна */
function occupySlot(hData: HangarData, slotIdx: number): void {
  const slot = hData.fighterSlots[slotIdx];
  slot.occupied = true;
  slot.respawnTimer = SLOT_RESPAWN_TIME;
  if (slot.fighterNode) {
    slot.fighterNode.setEnabled(false);
  }
}

/** Тикать таймеры респавна — при истечении показать истребитель, разблокировать слот */
function updateSlotRespawns(dt: number, hData: HangarData): void {
  for (const slot of hData.fighterSlots) {
    if (!slot.occupied || slot.respawnTimer <= 0) continue;
    slot.respawnTimer -= dt;
    if (slot.respawnTimer <= 0) {
      slot.occupied = false;
      slot.respawnTimer = 0;
      if (slot.fighterNode) {
        slot.fighterNode.setEnabled(true);
      }
    }
  }
}

// ── Автоспавн ИИ-пилотов ────────────────────────────────────────────────────

function updateAISpawner(dt: number): void {
  if (!hangar || !aiState) return;
  if (aiSpawned >= aiTotalToSpawn) return;

  aiSpawnTimer -= dt;
  if (aiSpawnTimer <= 0) {
    const name = `Pilot-${aiSpawned + 1}`;
    spawnHangarPilot(hangar.spawnPoint, name, aiState);
    aiSpawned++;
    aiSpawnTimer = AI_SPAWN_INTERVAL;
  }
}

// ── Фоновое обновление (работает всегда, даже когда игрок в полёте) ─────────

function updateBackground(dt: number): void {
  if (!hangar || !aiState) return;

  // ИИ-пилоты (state machine: бежать → садиться → вылетать)
  updateAISpawner(dt);
  const launched = updateHangarAI(dt, hangar, aiState);

  // Launched пилоты → создать ECS-истребители в космосе
  for (const pilot of launched) {
    if (onPilotLaunchedCallback) onPilotLaunchedCallback(pilot.name);
  }

  // Респавн слотов (таймеры)
  updateSlotRespawns(dt, hangar);
}

// ── Suspend / Resume (игрок сел / вернулся) ─────────────────────────────────

/**
 * Игрок сел в истребитель — отключить FPS-управление.
 * Ангар остаётся видимым, ИИ продолжает работать.
 */
export function suspendFPS(): void {
  playerInHangar = false;

  // Снимаем pointer lock
  exitPointerLock();

  // Восстанавливаем полётную раскладку
  setKeyMap(flightKeyMap);

  // Скрываем HUD ангара
  destroyHangarHUD();
}

/**
 * Игрок вернулся в ангар — включить FPS-управление.
 */
export function resumeFPS(): void {
  if (!hangar || !fpsState) return;

  playerInHangar = true;

  // Сбрасываем позицию на точку спавна
  fpsState.position.copyFrom(hangar.spawnPoint);
  fpsState.velocity.set(0, 0, 0);
  fpsState.yaw = 0;
  fpsState.pitch = 0;
  fpsState.grounded = false;

  // Сбрасываем накопленную дельту мыши (остатки от полётного режима)
  state.mouseDeltaX = 0;
  state.mouseDeltaY = 0;

  // Сбрасываем ориентацию камеры: BJS FreeCamera хранит крен в camera.rotation.z
  // и пересчитывает upVector из него каждый кадр — сброс только upVector недостаточен
  camera.rotation.set(0, 0, 0);
  camera.rotationQuaternion = null;

  // Переключаем на FPS-раскладку
  setKeyMap(fpsKeyMap);

  // Pointer lock
  requestPointerLock();

  // HUD ангара
  createHangarHUD();
}

// ── GameModeHandler ──────────────────────────────────────────────────────────

export const fpsMode: GameModeHandler<FPSModeContext> = {
  enter(context?: FPSModeContext) {
    onBoardedCallback = context?.onBoarded;
    onPilotLaunchedCallback = context?.onPilotLaunched;

    // Создаём ангар
    hangar = createHangar(DEFAULT_SLOT_COUNT);
    addToScene(hangar.root);

    // FPS-стейт (спавн в начале ангара)
    fpsState = createFPSState(hangar.spawnPoint);

    // ИИ-пилоты
    aiState = createHangarAIState();
    aiSpawned = 0;
    aiSpawnTimer = 1; // первый спавн через 1 сек
    aiTotalToSpawn = context?.allyCount ?? AI_PILOT_COUNT;

    // Игрок начинает в ангаре
    playerInHangar = true;

    // Сбрасываем накопленную дельту мыши и ориентацию камеры:
    // BJS FreeCamera хранит крен в camera.rotation.z и пересчитывает upVector из него
    state.mouseDeltaX = 0;
    state.mouseDeltaY = 0;
    camera.rotation.set(0, 0, 0);
    camera.rotationQuaternion = null;

    // Input: переключаем на FPS-раскладку
    setKeyMap(fpsKeyMap);

    // Pointer lock
    requestPointerLock();

    // HUD ангара
    createHangarHUD();
  },

  update(dt: number) {
    if (!hangar || !aiState) return;

    // Фоновые процессы работают ВСЕГДА (ИИ-пилоты, респавн слотов)
    updateBackground(dt);

    // FPS-управление — только когда игрок в ангаре
    if (!playerInHangar || !fpsState) return;

    // 1. Обновить input
    updateActions();

    // 2. FPS-контроллер (движение, коллизии, камера)
    updateFPSController(dt, fpsState, hangar.colliders, camera);

    // 3. Проверка взаимодействия (E рядом с истребителем)
    const slotIdx = checkInteraction(fpsState, hangar);
    if (slotIdx >= 0) {
      // Игрок садится в истребитель — скрыть модель, запустить респавн
      occupySlot(hangar, slotIdx);
      if (onBoardedCallback) onBoardedCallback();
    }

    // 4. HUD ангара
    updateHangarHUD(
      isNearFreeSlot(fpsState, hangar),
      countFreeSlots(hangar),
      hangar.fighterSlots.length,
    );
  },

  exit() {
    // Очищаем ИИ-пилотов
    if (aiState) {
      clearHangarAI(aiState);
      aiState = null;
    }

    // Убираем ангар со сцены
    if (hangar) {
      removeFromScene(hangar.root);
      hangar = null;
    }

    // Убираем HUD ангара
    destroyHangarHUD();

    // Сбрасываем FPS-стейт
    fpsState = null;
    playerInHangar = false;

    // Снимаем pointer lock
    exitPointerLock();

    // Восстанавливаем полётную раскладку
    setKeyMap(flightKeyMap);

    onBoardedCallback = undefined;
    onPilotLaunchedCallback = undefined;
  },
};
