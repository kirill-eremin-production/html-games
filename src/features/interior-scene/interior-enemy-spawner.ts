/**
 * Спавнер врагов для интерьерного режима.
 *
 * Создаёт ECS-сущности с capsule-мешами для каждого вражеского спавна.
 */
import type { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import type { Mesh } from '@babylonjs/core/Meshes/mesh';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';

import { Quaternion, Vector3 } from '@/shared/core';
import type { TransformNode } from '@/shared/core';
import { createPBRMaterial, getFactoryScene } from '@/shared/core/factories';
import { world } from '@/shared/ecs/combat-world';
import { registerMeshEntity } from '@/shared/ecs/entity-index';
import type { EntityId } from '@/shared/ecs/types';
import type { SpawnPoint } from '@/shared/interior/types';
import { addHealthBar } from '@/shared/model-loader/shared';

import { InteriorAIComponent } from '@/entities/ai/interior-ai-component';
import {
  DamageBufferComponent,
  HealthComponent,
  MeshComponent,
  NameComponent,
  TeamComponent,
  TransformComponent,
} from '@/entities/components';
import { HealthBarComponent } from '@/entities/rendering/health-bar';

// ── Результат ───────────────────────────────────────────────────────────────

export interface SpawnedEnemies {
  entities: EntityId[];
  meshes: AbstractMesh[];
}

// ── Создание capsule mesh ───────────────────────────────────────────────────

function createEnemyCapsule(index: number): Mesh {
  const scene = getFactoryScene();

  // Тело: цилиндр
  const body = MeshBuilder.CreateCylinder(
    `enemy_body_${index}`,
    { height: 1.2, diameter: 0.5, tessellation: 8 },
    scene,
  );
  body.position.y = 0.6;
  const bodyMat = createPBRMaterial({ color: 0xcc4444 });
  body.material = bodyMat;

  // Голова: сфера
  const head = MeshBuilder.CreateSphere(
    `enemy_head_${index}`,
    { diameter: 0.4, segments: 6 },
    scene,
  );
  head.position.y = 1.4;
  const headMat = createPBRMaterial({ color: 0xee6666 });
  head.material = headMat;
  head.parent = body;

  return body;
}

// ── Спавн ───────────────────────────────────────────────────────────────────

/**
 * Создать врагов из spawn points.
 * Каждый враг получает ECS-компоненты и capsule-mesh.
 */
export function spawnInteriorEnemies(
  spawns: SpawnPoint[],
  allSpawns: SpawnPoint[],
): SpawnedEnemies {
  const entities: EntityId[] = [];
  const meshes: AbstractMesh[] = [];

  for (let i = 0; i < spawns.length; i++) {
    const spawn = spawns[i];
    const id = world.createEntity();

    const mesh = createEnemyCapsule(i);
    mesh.position.set(spawn.x + 0.5, spawn.y, spawn.z + 0.5);

    // Patrol points — используем позиции всех вражеских спавнов как waypoints
    const patrolPoints: Vector3[] = allSpawns
      .filter((s) => s.type === 'enemy')
      .map((s) => new Vector3(s.x + 0.5, s.y, s.z + 0.5));

    // Если нет waypoints — патрулировать вокруг своей позиции
    if (patrolPoints.length < 2) {
      patrolPoints.push(
        new Vector3(spawn.x + 3.5, spawn.y, spawn.z + 0.5),
        new Vector3(spawn.x + 0.5, spawn.y, spawn.z + 3.5),
      );
    }

    const spawnPos = new Vector3(spawn.x + 0.5, spawn.y, spawn.z + 0.5);

    world.addComponent(id, new TransformComponent(spawnPos, new Quaternion()));
    world.addComponent(id, new HealthComponent(100, 100));
    world.addComponent(id, new DamageBufferComponent());
    world.addComponent(id, new TeamComponent('enemy'));
    world.addComponent(id, new NameComponent(`Guard-${i + 1}`));
    world.addComponent(id, new MeshComponent(mesh as unknown as TransformNode));
    world.addComponent(
      id,
      new InteriorAIComponent(
        'patrol',
        patrolPoints,
        i % patrolPoints.length,
        15, // detectionRange
        12, // attackRange
        0, // attackCooldown (start ready)
        1.5, // attackRate
        10, // damage
        null, // lastKnownPlayerPos
        5, // alertTimer
      ),
    );

    // Health bar над головой
    const hb = addHealthBar(mesh as unknown as TransformNode, 0xff0000);
    hb.bar.position.y = 2;
    hb.bar.scaling.setAll(0.3);
    world.addComponent(id, new HealthBarComponent(hb.bar, hb.fill));

    registerMeshEntity(mesh as unknown as TransformNode, id);
    entities.push(id);
    meshes.push(mesh);
  }

  return { entities, meshes };
}
