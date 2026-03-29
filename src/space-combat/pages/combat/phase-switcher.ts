/**
 * Переключение фаз внутри combat mode: hangar ↔ flight.
 *
 * combatPhase — это фаза ИГРОКА:
 * - 'hangar' → FPS от первого лица в ангаре
 * - 'flight' → полёт на истребителе (3rd person)
 *
 * Ангар персистентный — живёт всё время боя.
 * ИИ-пилоты спавнятся и вылетают независимо от фазы игрока.
 * ECS-мир (world.update) работает ВСЕГДА, независимо от фазы.
 */
import { startEngineHum, stopEngineHum } from '@/shared/audio';
import { combatConfig } from '@/shared/config/combat-session';
import { world } from '@/shared/ecs/combat-world';
import { unregisterMeshEntity } from '@/shared/ecs/entity-index';
import { camera } from '@/shared/engine';
import {
  clearPlayerEntityId,
  playerEntityId,
  setPlayerEntityId,
} from '@/shared/refs/player-entity';
import { state } from '@/shared/state';

import { createPlayerEntity } from '@/entities/ecs-adapters';

import { setAllyRespawnCallback, spawnAlly } from '@/features/combat/spawner-system';
import {
  playerPlane,
  resetPlayerTransform,
  setPlayerDeathCallback,
} from '@/features/flight/player-system';
import { setStarfieldVisible } from '@/features/flight/starfield';
import { hideHUD, showHUD, showMessage } from '@/features/hud/hud';

import { fpsMode, resumeFPS, suspendFPS } from '@/pages/fps';

import { getCarrierGateDirection, getCarrierGatePosition } from './combat-setup';

// ── Инициализация ───────────────────────────────────────────────────────────

/**
 * Регистрирует callback на смерть игрока.
 * Вызывается один раз при enter() combat mode.
 */
export function initPhaseSwitcher(): void {
  setPlayerDeathCallback(() => switchToHangar());

  // Респавн союзников: вместо мгновенного появления рядом с игроком,
  // спавним у ворот корабля-носителя (как будто вылетели из ангара)
  setAllyRespawnCallback(() => {
    const gatePos = getCarrierGatePosition();
    spawnAlly(gatePos);
  });
}

/**
 * Запускает фазу ангара (FPS-режим).
 * Вызывается один раз из combat mode enter().
 */
export function enterHangarPhase(): void {
  fpsMode.enter({
    onBoarded: () => switchToFlight(),
    onPilotLaunched: () => {
      const gatePos = getCarrierGatePosition();
      spawnAlly(gatePos);
    },
    allyCount: combatConfig.allies,
  });
  state.combatPhase = 'hangar';
}

/**
 * Обновить ангар. Вызывается из combat update() КАЖДЫЙ КАДР,
 * независимо от фазы игрока.
 */
export function updateHangarPhase(dt: number): void {
  fpsMode.update(dt);
}

/** Полная очистка ангара. Вызывается из combat exit(). */
export function exitHangarPhase(): void {
  fpsMode.exit();
}

// ── switchToFlight ──────────────────────────────────────────────────────────

/**
 * Переключить игрока из ангара в полёт.
 * Вызывается когда игрок садится в истребитель (onBoarded callback).
 */
export function switchToFlight(): void {
  // 1. Приостанавливаем FPS-управление (ангар и ИИ продолжают работать)
  suspendFPS();

  // 2. Позиция игрока — у ворот ангара корабля-носителя
  const gatePos = getCarrierGatePosition();
  resetPlayerTransform(gatePos.x, gatePos.y, gatePos.z);

  // Ориентируем истребитель по направлению вылета
  const gateDir = getCarrierGateDirection();
  playerPlane.lookAt(gatePos.clone().add(gateDir));
  playerPlane.setVisibleRecursive(true);

  // 3. Создаём ECS-сущность игрока (если ещё нет)
  if (playerEntityId === 0 || !world.isAlive(playerEntityId)) {
    const id = createPlayerEntity(
      world,
      playerPlane,
      state.maxHealth,
      state.maxHealth,
      state.baseSpeed,
    );
    setPlayerEntityId(id);
  }

  // 4. Восстанавливаем health
  state.playerHealth = state.maxHealth;
  state.damageFlash = 0;
  state.noDamageTimer = 0;
  state.invulnTimer = 2; // 2 секунды неуязвимости после вылета
  state.speed = state.baseSpeed;

  // 5. Камера — 3rd person (следует за истребителем)
  camera.position.copyFrom(gatePos).addScaledVector(gateDir, -15);
  camera.position.y += 4;
  camera.setTarget(playerPlane.position);

  // 6. UI и аудио
  setStarfieldVisible(true);
  showHUD();
  startEngineHum();
  showMessage('ВЫЛЕТ!', 2);

  // 7. Фаза
  state.combatPhase = 'flight';
}

// ── switchToHangar ──────────────────────────────────────────────────────────

/**
 * Переключить игрока обратно в ангар (при гибели).
 */
export function switchToHangar(): void {
  // 1. Уничтожаем ECS-сущность игрока
  if (playerEntityId !== 0 && world.isAlive(playerEntityId)) {
    unregisterMeshEntity(playerPlane);
    world.destroyEntity(playerEntityId);
    clearPlayerEntityId();
  }

  // 2. Скрываем истребитель игрока
  playerPlane.setVisibleRecursive(false);

  // 3. UI и аудио
  hideHUD();
  stopEngineHum();

  // 4. Возобновляем FPS-управление (ангар уже существует)
  resumeFPS();
  state.combatPhase = 'hangar';

  showMessage('АНГАР — ПОДОЙДИ К ИСТРЕБИТЕЛЮ', 3);
}
