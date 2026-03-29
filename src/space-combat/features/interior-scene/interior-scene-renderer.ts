/**
 * Рендер интерьерной сцены из JSON.
 *
 * Самодостаточная функция loadInteriorFromJSON():
 * - Строит thin instances для блоков (wall, floor, ceiling, door, ladder)
 * - Генерирует AABB-коллайдеры для solid блоков
 * - Извлекает spawn points из JSON
 * - Создаёт освещение
 * - Маркеры (enemy_spawn, player_spawn) не рендерятся
 *
 * Не зависит от редактора.
 */
import { Matrix } from '@babylonjs/core/Maths/math.vector';
import type { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import type { Node } from '@babylonjs/core/node';

import { createPBRMaterial, createPointLight, getFactoryScene } from '@/shared/core/factories';
import { EngineMaterial } from '@/shared/core/material';
import { EngineMesh } from '@/shared/core/mesh';
import { Vector3 } from '@/shared/core/vector3';
import type { InteriorBlockType, InteriorLevelJSON, SpawnPoint } from '@/shared/interior/types';
import { INTERIOR_BLOCK_TYPES } from '@/shared/interior/types';

import type { AABB } from '@/entities/objects/hangar';

// ── Типы результата ────────────────────────────────────────────────────────

export interface InteriorSceneData {
  /** AABB-коллайдеры для FPS-физики */
  colliders: AABB[];
  /** Точки спавна врагов */
  enemySpawns: SpawnPoint[];
  /** Точка спавна игрока */
  playerSpawn: SpawnPoint;
  /** Все меши стен (для проверки видимости ИИ) */
  wallMeshes: AbstractMesh[];
  /** Очистить все объекты сцены */
  dispose(): void;
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function hexToNumber(hex: string): number {
  return parseInt(hex.replace('#', ''), 16);
}

function isMarkerType(type: InteriorBlockType): boolean {
  return INTERIOR_BLOCK_TYPES.find((t) => t.type === type)?.isMarker ?? false;
}

/** Solid-блоки генерируют коллайдеры */
function isSolidType(type: InteriorBlockType): boolean {
  return type === 'wall' || type === 'floor' || type === 'ceiling';
}

// ── Основная функция ────────────────────────────────────────────────────────

/**
 * Построить полную сцену из JSON.
 * Независима от редактора — принимает JSON и строит всё с нуля.
 */
export function loadInteriorFromJSON(json: InteriorLevelJSON): InteriorSceneData {
  const scene = getFactoryScene();
  const nodes: Node[] = [];
  const colliders: AABB[] = [];
  const wallMeshes: AbstractMesh[] = [];

  // Извлекаем spawn points
  const enemySpawns: SpawnPoint[] = json.spawns.filter((s) => s.type === 'enemy');
  const playerSpawnData = json.spawns.find((s) => s.type === 'player');
  const playerSpawn: SpawnPoint = playerSpawnData ?? {
    type: 'player',
    x: 2,
    y: 1,
    z: 2,
    rotation: 0,
  };

  // Группируем рендерабельные блоки по ключу "${type}_${color}"
  const groups = new Map<
    string,
    { type: InteriorBlockType; color: number; positions: number[][] }
  >();

  for (const block of json.blocks) {
    if (isMarkerType(block.type)) continue;

    const colorNum = hexToNumber(block.color);
    const key = `${block.type}_${colorNum}`;

    let group = groups.get(key);
    if (!group) {
      group = { type: block.type, color: colorNum, positions: [] };
      groups.set(key, group);
    }
    group.positions.push([block.x, block.y, block.z]);

    // AABB-коллайдер для solid-блоков
    if (isSolidType(block.type)) {
      colliders.push({
        min: new Vector3(block.x, block.y, block.z),
        max: new Vector3(block.x + 1, block.y + 1, block.z + 1),
      });
    }
  }

  // Пол-коллайдер (y=0) на всю область
  const sizeX = json.meta.size.x;
  const sizeZ = json.meta.size.z;
  colliders.push({
    min: new Vector3(-10, -1, -10),
    max: new Vector3(sizeX + 10, 0, sizeZ + 10),
  });

  // Thin instances per group
  for (const [key, group] of groups) {
    const bjsMesh = MeshBuilder.CreateBox(`interior_${key}`, { size: 1 }, scene);
    const mat = createPBRMaterial({ color: group.color });
    bjsMesh.material = mat;

    const matrices: Matrix[] = [];
    for (const [x, y, z] of group.positions) {
      matrices.push(Matrix.Translation(x + 0.5, y + 0.5, z + 0.5));
    }

    const buf = new Float32Array(matrices.length * 16);
    for (let i = 0; i < matrices.length; i++) {
      matrices[i].copyToArray(buf, i * 16);
    }

    bjsMesh.thinInstanceSetBuffer('matrix', buf, 16, false);
    bjsMesh.thinInstanceCount = matrices.length;
    bjsMesh.isVisible = true;

    nodes.push(bjsMesh);

    // Стены для видимости ИИ
    if (isSolidType(group.type)) {
      wallMeshes.push(bjsMesh);
    }
  }

  // Освещение — несколько PointLight по потолку
  const maxY = json.meta.size.y;
  const centerX = sizeX / 2;
  const centerZ = sizeZ / 2;

  const mainLight = createPointLight(0xffffff, 2.5, Math.max(sizeX, sizeZ) * 2);
  mainLight.position.set(centerX, maxY + 2, centerZ);
  nodes.push(mainLight);

  // Доп. свет по углам
  const cornerOffset = 3;
  const corners = [
    [cornerOffset, cornerOffset],
    [sizeX - cornerOffset, cornerOffset],
    [cornerOffset, sizeZ - cornerOffset],
    [sizeX - cornerOffset, sizeZ - cornerOffset],
  ];
  for (const [cx, cz] of corners) {
    if (cx > 0 && cz > 0 && cx < sizeX && cz < sizeZ) {
      const light = createPointLight(0x8899aa, 1.0, Math.max(sizeX, sizeZ));
      light.position.set(cx, maxY, cz);
      nodes.push(light);
    }
  }

  function dispose(): void {
    for (const node of nodes) {
      if ((node as EngineMesh).material) {
        ((node as EngineMesh).material as EngineMaterial).dispose();
      }
      node.dispose();
    }
    nodes.length = 0;
    colliders.length = 0;
    wallMeshes.length = 0;
  }

  return { colliders, enemySpawns, playerSpawn, wallMeshes, dispose };
}
