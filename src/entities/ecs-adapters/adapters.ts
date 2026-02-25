import type { EngineMesh, TransformNode, Vector3 } from '@/shared/core';
import { registerMeshEntity } from '@/shared/ecs/entity-index';
import type { EntityId } from '@/shared/ecs/types';
import type { World } from '@/shared/ecs/world';
import type { SubsystemRawData } from '@/shared/model-loader';

import { FighterAIComponent } from '@/entities/ai/fighter-ai';
import { CapitalShipComponent } from '@/entities/combat/capital-ship';
import { ProjectileComponent } from '@/entities/combat/projectile';
import { SubsystemComponent } from '@/entities/combat/subsystem';
import { WeaponComponent } from '@/entities/combat/weapon';
import { TransformComponent } from '@/entities/physics/transform';
import { VelocityComponent } from '@/entities/physics/velocity';
import { HealthBarComponent } from '@/entities/rendering/health-bar';
import { MeshComponent } from '@/entities/rendering/mesh';
import { DamageBufferComponent } from '@/entities/stats/damage-buffer';
import { HealthComponent } from '@/entities/stats/health';
import { LifetimeComponent } from '@/entities/stats/lifetime';
import { NameComponent } from '@/entities/stats/name';
import { ParentEntityComponent } from '@/entities/stats/parent-entity';
import { TeamComponent } from '@/entities/stats/team';

// ── Fighter ─────────────────────────────────────────────────────────────────

/** Создать истребителя в ECS World. Возвращает EntityId. */
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
): EntityId {
  const id = w.createEntity();

  w.addComponent(id, new TransformComponent(mesh.position, mesh.quaternion));
  w.addComponent(id, new MeshComponent(mesh));
  w.addComponent(id, new NameComponent(name));
  w.addComponent(id, new HealthComponent(health, maxHealth));
  w.addComponent(id, new HealthBarComponent(healthBar, healthFill));
  w.addComponent(id, new VelocityComponent(speed));
  w.addComponent(id, new WeaponComponent(shootTimer));
  w.addComponent(id, new TeamComponent(team));
  w.addComponent(id, new FighterAIComponent('chase', 0, evadeDir, null));
  w.addComponent(id, new DamageBufferComponent());
  registerMeshEntity(mesh, id);

  return id;
}

// ── Projectile ──────────────────────────────────────────────────────────────

/** Создать снаряд в ECS World. Возвращает EntityId. */
export function createProjectileEntity(
  w: World,
  mesh: EngineMesh,
  velocity: Vector3,
  life: number,
  team: 'player' | 'ally' | 'enemy',
  damage: number,
  shooterName: string,
): EntityId {
  const id = w.createEntity();

  w.addComponent(
    id,
    new TransformComponent(
      (mesh as unknown as TransformNode).position,
      (mesh as unknown as TransformNode).quaternion,
    ),
  );
  w.addComponent(id, new MeshComponent(mesh as unknown as TransformNode));
  w.addComponent(id, new ProjectileComponent(velocity, damage, shooterName));
  w.addComponent(id, new LifetimeComponent(life));
  w.addComponent(id, new TeamComponent(team));
  registerMeshEntity(mesh as unknown as TransformNode, id);

  return id;
}

// ── Capital Ship ────────────────────────────────────────────────────────────

/** Создать капитальный корабль + его подсистемы как отдельные ECS-сущности. */
export function createCapitalShipEntity(
  w: World,
  mesh: TransformNode,
  subsystems: SubsystemRawData[],
  turretTimer: number,
): EntityId {
  const shipId = w.createEntity();

  w.addComponent(shipId, new TransformComponent(mesh.position, mesh.quaternion));
  w.addComponent(shipId, new MeshComponent(mesh));
  w.addComponent(shipId, new CapitalShipComponent(true, turretTimer));
  w.addComponent(shipId, new TeamComponent('enemy'));
  registerMeshEntity(mesh, shipId);

  // Создаём отдельную ECS-сущность для каждой подсистемы
  for (const sub of subsystems) {
    const subId = w.createEntity();
    const subMesh = sub.mesh ?? mesh; // fallback на меш корабля если нет меша подсистемы

    w.addComponent(subId, new TransformComponent(subMesh.position, subMesh.quaternion));
    w.addComponent(subId, new MeshComponent(subMesh));
    w.addComponent(subId, new SubsystemComponent(sub.type, sub.center, sub.radius));
    w.addComponent(subId, new HealthComponent(sub.health, sub.maxHealth));
    w.addComponent(subId, new NameComponent(sub.label));
    w.addComponent(subId, new ParentEntityComponent(shipId));
    w.addComponent(subId, new DamageBufferComponent());
    w.addComponent(subId, new TeamComponent('enemy'));
    if (sub.mesh) registerMeshEntity(sub.mesh, subId);
  }

  return shipId;
}
