import type { EngineMesh, TransformNode, Vector3 } from '@/shared/core';
import type { CapitalShip, Fighter, FighterAI, LaserData, Subsystem } from '@/shared/types';

import { FighterAIComponent } from '@/entities/ai/fighter-ai';
import { CapitalShipComponent } from '@/entities/combat/capital-ship';
import { ProjectileComponent } from '@/entities/combat/projectile';
import { WeaponComponent } from '@/entities/combat/weapon';
import { TransformComponent } from '@/entities/physics/transform';
import { VelocityComponent } from '@/entities/physics/velocity';
import { HealthComponent } from '@/entities/stats/health';
import { NameComponent } from '@/entities/stats/name';
import { TeamComponent } from '@/entities/stats/team';

import type { EntityId } from './types';
import type { World } from './world';

// ── Fighter ─────────────────────────────────────────────────────────────────

/**
 * Создать истребителя в ECS World и вернуть Fighter-совместимый объект.
 * Fighter-объект содержит getter/setter, ведущие к ECS-компонентам —
 * единый источник истины.
 */
export function createFighterEntity(
  w: World,
  mesh: TransformNode,
  name: string,
  health: number,
  maxHealth: number,
  speed: number,
  shootTimer: number,
  team: 'ally' | 'enemy',
  healthBar: TransformNode,
  healthFill: EngineMesh,
  evadeDir: Vector3,
): { entityId: EntityId; fighter: Fighter } {
  const id = w.createEntity();

  const transformComp = new TransformComponent(mesh);
  const nameComp = new NameComponent(name);
  const healthComp = new HealthComponent(health, maxHealth, healthBar, healthFill);
  const velocityComp = new VelocityComponent(speed);
  const weaponComp = new WeaponComponent(shootTimer);
  const teamComp = new TeamComponent(team);
  const aiComp = new FighterAIComponent('chase', 0, evadeDir, null);

  w.addComponent(id, transformComp);
  w.addComponent(id, nameComp);
  w.addComponent(id, healthComp);
  w.addComponent(id, velocityComp);
  w.addComponent(id, weaponComp);
  w.addComponent(id, teamComp);
  w.addComponent(id, aiComp);

  const aiProxy: FighterAI = {
    get state() {
      return aiComp.state;
    },
    set state(v) {
      aiComp.state = v;
    },
    get timer() {
      return aiComp.timer;
    },
    set timer(v: number) {
      aiComp.timer = v;
    },
    get evadeDir() {
      return aiComp.evadeDir;
    },
    set evadeDir(v) {
      aiComp.evadeDir = v;
    },
    get target() {
      return aiComp.target;
    },
    set target(v) {
      aiComp.target = v;
    },
  };

  const fighter: Fighter = {
    mesh: transformComp.mesh,
    name: nameComp.name,
    healthBar: healthComp.healthBar,
    healthFill: healthComp.healthFill,
    get health() {
      return healthComp.current;
    },
    set health(v: number) {
      healthComp.current = v;
    },
    get maxHealth() {
      return healthComp.max;
    },
    set maxHealth(v: number) {
      healthComp.max = v;
    },
    get speed() {
      return velocityComp.speed;
    },
    set speed(v: number) {
      velocityComp.speed = v;
    },
    get shootTimer() {
      return weaponComp.shootTimer;
    },
    set shootTimer(v: number) {
      weaponComp.shootTimer = v;
    },
    ai: aiProxy,
  };

  return { entityId: id, fighter };
}

/** Найти EntityId по Fighter mesh */
export function findFighterEntity(w: World, fighter: Fighter): EntityId | null {
  const results = w.query(TransformComponent, FighterAIComponent);
  for (const { entity, components } of results) {
    if (components[0].mesh === fighter.mesh) return entity;
  }
  return null;
}

// ── Projectile ──────────────────────────────────────────────────────────────

/**
 * Создать снаряд в ECS World и вернуть LaserData-совместимый объект.
 */
export function createProjectileEntity(
  w: World,
  mesh: EngineMesh,
  velocity: Vector3,
  life: number,
  team: 'player' | 'ally' | 'enemy',
  damage: number,
  shooterName: string,
): { entityId: EntityId; laser: LaserData } {
  const id = w.createEntity();

  const transformComp = new TransformComponent(mesh as unknown as TransformNode);
  const projComp = new ProjectileComponent(velocity, life, damage, shooterName);
  const teamComp = new TeamComponent(team);

  w.addComponent(id, transformComp);
  w.addComponent(id, projComp);
  w.addComponent(id, teamComp);

  const laser: LaserData = {
    mesh: transformComp.mesh as unknown as EngineMesh,
    velocity: projComp.velocity,
    get life() {
      return projComp.life;
    },
    set life(v: number) {
      projComp.life = v;
    },
    team: teamComp.team,
    damage: projComp.damage,
    shooterName: projComp.shooterName,
  };

  return { entityId: id, laser };
}

/** Найти EntityId по LaserData mesh */
export function findProjectileEntity(w: World, laser: LaserData): EntityId | null {
  const results = w.query(TransformComponent, ProjectileComponent);
  for (const { entity, components } of results) {
    if (components[0].mesh === (laser.mesh as unknown as TransformNode)) return entity;
  }
  return null;
}

// ── Capital Ship ────────────────────────────────────────────────────────────

/**
 * Создать капитальный корабль в ECS World и вернуть CapitalShip-совместимый объект.
 */
export function createCapitalShipEntity(
  w: World,
  mesh: TransformNode,
  subsystems: Subsystem[],
  turretTimer: number,
): { entityId: EntityId; capitalShip: CapitalShip } {
  const id = w.createEntity();

  const transformComp = new TransformComponent(mesh);
  const csComp = new CapitalShipComponent(subsystems, true, turretTimer);

  w.addComponent(id, transformComp);
  w.addComponent(id, csComp);

  const capitalShip: CapitalShip = {
    mesh: transformComp.mesh,
    subsystems: csComp.subsystems,
    get alive() {
      return csComp.alive;
    },
    set alive(v: boolean) {
      csComp.alive = v;
    },
    get turretTimer() {
      return csComp.turretTimer;
    },
    set turretTimer(v: number) {
      csComp.turretTimer = v;
    },
  };

  return { entityId: id, capitalShip };
}

/** Найти EntityId по CapitalShip mesh */
export function findCapitalShipEntity(w: World, cs: CapitalShip): EntityId | null {
  const results = w.query(TransformComponent, CapitalShipComponent);
  for (const { entity, components } of results) {
    if (components[0].mesh === cs.mesh) return entity;
  }
  return null;
}
