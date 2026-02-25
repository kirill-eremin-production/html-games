import type { TransformNode, Vector3 } from '@/shared/core';
import { world } from '@/shared/ecs/combat-world';
import type { EntityId } from '@/shared/ecs/types';

import { FighterAIComponent } from '@/entities/ai/fighter-ai';
import { CapitalShipComponent } from '@/entities/combat/capital-ship';
import { SubsystemComponent, type SubsystemType } from '@/entities/combat/subsystem';
import { WeaponComponent } from '@/entities/combat/weapon';
import { TransformComponent } from '@/entities/physics/transform';
import { VelocityComponent } from '@/entities/physics/velocity';
import { HealthBarComponent } from '@/entities/rendering/health-bar';
import { MeshComponent } from '@/entities/rendering/mesh';
import { DamageBufferComponent } from '@/entities/stats/damage-buffer';
import { HealthComponent } from '@/entities/stats/health';
import { NameComponent } from '@/entities/stats/name';
import { ParentEntityComponent } from '@/entities/stats/parent-entity';
import { TeamComponent } from '@/entities/stats/team';

/** Результат запроса истребителя — все компоненты доступны напрямую */
export interface FighterQueryResult {
  entity: EntityId;
  transform: TransformComponent;
  mesh: MeshComponent;
  health: HealthComponent;
  healthBar: HealthBarComponent;
  velocity: VelocityComponent;
  weapon: WeaponComponent;
  team: TeamComponent;
  ai: FighterAIComponent;
  name: NameComponent;
  damageBuffer: DamageBufferComponent;
}

/** Запросить всех истребителей из ECS World */
export function queryAllFighters(): FighterQueryResult[] {
  const raw = world.query(
    TransformComponent,
    MeshComponent,
    HealthComponent,
    HealthBarComponent,
    VelocityComponent,
    WeaponComponent,
    TeamComponent,
    FighterAIComponent,
    NameComponent,
    DamageBufferComponent,
  );

  const results: FighterQueryResult[] = [];
  for (const {
    entity,
    components: [
      transform,
      mesh,
      health,
      healthBar,
      velocity,
      weapon,
      team,
      ai,
      name,
      damageBuffer,
    ],
  } of raw) {
    results.push({
      entity,
      transform,
      mesh,
      health,
      healthBar,
      velocity,
      weapon,
      team,
      ai,
      name,
      damageBuffer,
    });
  }
  return results;
}

/** Запросить истребителей по команде */
export function queryFightersByTeam(teamFilter: 'ally' | 'enemy'): FighterQueryResult[] {
  return queryAllFighters().filter((f) => f.team.team === teamFilter);
}

/** Найти ближайшего истребителя из пула целей */
export function findNearestFighter(
  pos: Vector3,
  targets: FighterQueryResult[],
): FighterQueryResult | null {
  let best: FighterQueryResult | null = null;
  let bestDistSq = Infinity;
  for (const t of targets) {
    const dSq = pos.distanceToSquared(t.transform.position);
    if (dSq < bestDistSq) {
      bestDistSq = dSq;
      best = t;
    }
  }
  return best;
}

/** Минимальные данные истребителя для UI (без тяжёлых компонентов) */
export interface FighterMinimalData {
  entity: EntityId;
  position: Vector3;
  team: 'player' | 'ally' | 'enemy';
  name: string;
  health: number;
  maxHealth: number;
  mesh: TransformNode;
}

// ── Capital Ships ────────────────────────────────────────────────────────────

/** Результат запроса капитального корабля */
export interface CapitalShipQueryResult {
  entity: EntityId;
  transform: TransformComponent;
  mesh: MeshComponent;
  capitalShip: CapitalShipComponent;
}

/** Запросить все капитальные корабли */
export function queryAllCapitalShips(): CapitalShipQueryResult[] {
  const raw = world.query(TransformComponent, MeshComponent, CapitalShipComponent);
  const results: CapitalShipQueryResult[] = [];
  for (const {
    entity,
    components: [transform, mesh, capitalShip],
  } of raw) {
    results.push({ entity, transform, mesh, capitalShip });
  }
  return results;
}

/** Запросить живые капитальные корабли */
export function queryAliveCapitalShips(): CapitalShipQueryResult[] {
  return queryAllCapitalShips().filter((cs) => cs.capitalShip.alive);
}

// ── Subsystems ──────────────────────────────────────────────────────────────

/** Результат запроса подсистемы */
export interface SubsystemQueryResult {
  entity: EntityId;
  transform: TransformComponent;
  mesh: MeshComponent;
  subsystem: SubsystemComponent;
  health: HealthComponent;
  name: NameComponent;
  parent: ParentEntityComponent;
  damageBuffer: DamageBufferComponent;
}

/** Запросить все подсистемы */
export function queryAllSubsystems(): SubsystemQueryResult[] {
  const raw = world.query(
    TransformComponent,
    MeshComponent,
    SubsystemComponent,
    HealthComponent,
    NameComponent,
    ParentEntityComponent,
    DamageBufferComponent,
  );
  const results: SubsystemQueryResult[] = [];
  for (const {
    entity,
    components: [transform, mesh, subsystem, health, name, parent, damageBuffer],
  } of raw) {
    results.push({ entity, transform, mesh, subsystem, health, name, parent, damageBuffer });
  }
  return results;
}

/** Запросить живые подсистемы (health > 0) */
export function queryAliveSubsystems(): SubsystemQueryResult[] {
  return queryAllSubsystems().filter((s) => s.health.current > 0);
}

/** Запросить подсистемы конкретного корабля */
export function querySubsystemsByParent(parentId: EntityId): SubsystemQueryResult[] {
  return queryAllSubsystems().filter((s) => s.parent.parentId === parentId);
}

/** Запросить подсистему по типу для конкретного корабля */
export function querySubsystemByType(
  parentId: EntityId,
  type: SubsystemType,
): SubsystemQueryResult | null {
  return (
    queryAllSubsystems().find(
      (s) => s.parent.parentId === parentId && s.subsystem.subsystemType === type,
    ) ?? null
  );
}

// ── UI Helpers ──────────────────────────────────────────────────────────────

/** Запросить минимальные данные истребителей для UI */
export function queryFightersForUI(): FighterMinimalData[] {
  const raw = world.query(
    TransformComponent,
    MeshComponent,
    TeamComponent,
    NameComponent,
    HealthComponent,
  );

  const results: FighterMinimalData[] = [];
  for (const {
    entity,
    components: [transform, mesh, team, name, health],
  } of raw) {
    // Пропускаем игрока и подсистемы кораблей (у них теперь тоже есть TeamComponent)
    if (team.team === 'player') continue;
    if (world.hasComponent(entity, SubsystemComponent)) continue;
    results.push({
      entity,
      position: transform.position,
      team: team.team,
      name: name.name,
      health: health.current,
      maxHealth: health.max,
      mesh: mesh.mesh,
    });
  }
  return results;
}
