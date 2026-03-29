/**
 * Оружие игрока для интерьерного режима — лазерные снаряды с перегревом.
 *
 * При выстреле создаёт ECS-сущность снаряда (как в космическом бою).
 * Движение и столкновения обрабатываются отдельными системами.
 *
 * Вместо патронов — система перегрева: каждый выстрел добавляет тепло,
 * при максимальном нагреве оружие блокируется до полного охлаждения.
 */
import { Quaternion, Vector3 } from '@/shared/core';
import { world } from '@/shared/ecs/combat-world';

import { ProjectileComponent } from '@/entities/combat/projectile';
import { PILOT_EYE_HEIGHT } from '@/entities/objects/hangar';
import { TransformComponent } from '@/entities/physics/transform';
import { VisualComponent } from '@/entities/rendering/visual';
import { LifetimeComponent } from '@/entities/stats/lifetime';
import { TeamComponent } from '@/entities/stats/team';

import { getViewDirection } from '@/features/fps';
import type { FPSState } from '@/features/fps';

import { playInteriorShotSound } from './interior-shot-sound';

// ── Константы ──────────────────────────────────────────────────────────────

const LASER_SPEED = 60;
const LASER_LIFETIME = 1.5;
const LASER_COLOR = 0x00ffcc;
const FIRE_RATE = 0.15;

/** Тепло за выстрел (0..1) */
const HEAT_PER_SHOT = 0.08;
/** Скорость охлаждения (в секунду, 0..1) */
const COOL_RATE = 0.15;
/** Скорость ускоренного охлаждения при перегреве */
const OVERHEAT_COOL_RATE = 0.25;

const _laserAxis = new Vector3(1, 0, 0);
const _laserQuat = new Quaternion();
const _laserDir = new Vector3();

// ── Состояние оружия ────────────────────────────────────────────────────────

export interface InteriorWeaponState {
  cooldown: number;
  heat: number;
  overheated: boolean;
  damage: number;
  flashTimer: number;
  prevFire: boolean;
}

export function createWeaponState(): InteriorWeaponState {
  return {
    cooldown: 0,
    heat: 0,
    overheated: false,
    damage: 25,
    flashTimer: 0,
    prevFire: false,
  };
}

// ── Стрельба ────────────────────────────────────────────────────────────────

/**
 * Создать снаряд-лазер из позиции глаз в направлении взгляда.
 */
export function fireWeapon(weapon: InteriorWeaponState, fps: FPSState): void {
  if (weapon.cooldown > 0) return;
  if (weapon.overheated) return;

  getViewDirection(fps, _laserDir);

  // Quaternion для ориентации mesh снаряда
  _laserQuat.setFromUnitVectors(_laserAxis, _laserDir);

  // Позиция глаз
  const origin = new Vector3(fps.position.x, fps.position.y + PILOT_EYE_HEIGHT, fps.position.z);

  const velocity = new Vector3().copyFrom(_laserDir).scaleInPlace(LASER_SPEED);

  // Создать ECS-сущность снаряда
  const id = world.createEntity();
  world.addComponent(id, new TransformComponent(origin, new Quaternion().copyFrom(_laserQuat)));
  world.addComponent(id, new VisualComponent('projectile', LASER_COLOR, 0, 'ally'));
  world.addComponent(id, new ProjectileComponent(velocity, weapon.damage, 'Player'));
  world.addComponent(id, new LifetimeComponent(LASER_LIFETIME));
  world.addComponent(id, new TeamComponent('player'));

  // Кулдаун и перегрев
  weapon.cooldown = FIRE_RATE;
  weapon.heat = Math.min(1, weapon.heat + HEAT_PER_SHOT);
  if (weapon.heat >= 1) {
    weapon.overheated = true;
  }
  weapon.flashTimer = 0.06;

  playInteriorShotSound();
}

/**
 * Обновить оружие за кадр: кулдаун, вспышка и охлаждение.
 */
export function updateWeapon(dt: number, weapon: InteriorWeaponState): void {
  weapon.cooldown = Math.max(0, weapon.cooldown - dt);
  weapon.flashTimer = Math.max(0, weapon.flashTimer - dt);

  // Охлаждение
  if (weapon.heat > 0) {
    const rate = weapon.overheated ? OVERHEAT_COOL_RATE : COOL_RATE;
    weapon.heat = Math.max(0, weapon.heat - rate * dt);
    if (weapon.overheated && weapon.heat <= 0) {
      weapon.overheated = false;
    }
  }
}
