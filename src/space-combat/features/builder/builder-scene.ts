/**
 * Сцена конструктора: пол-сетка, освещение, коллайдеры.
 *
 * Пол рисуется линиями сетки для визуальной ориентации.
 * Коллайдер пола (y=0) не даёт игроку провалиться.
 */
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import type { Node } from '@babylonjs/core/node';

import { createPointLight, getFactoryScene } from '@/shared/core/factories';
import { MeshBasicMaterial } from '@/shared/core/material';
import { Vector3 } from '@/shared/core/vector3';

import type { AABB } from '@/entities/objects/hangar';

import { BLOCK_SIZE, GRID_SIZE } from './builder-state';

// ── Типы ────────────────────────────────────────────────────────────────────

export interface BuilderScene {
  /** AABB-коллайдеры для FPS-физики (пол) */
  colliders: AABB[];
  /** Очистить все объекты сцены конструктора */
  cleanup(): void;
}

// ── Создание ────────────────────────────────────────────────────────────────

export function createBuilderScene(): BuilderScene {
  const scene = getFactoryScene();
  const nodes: Node[] = [];
  const gridLen = GRID_SIZE * BLOCK_SIZE;

  // ── Пол-сетка (линии) ─────────────────────────────────────────────────

  const gridLines: Vector3[][] = [];

  // Линии вдоль X
  for (let z = 0; z <= GRID_SIZE; z++) {
    gridLines.push([new Vector3(0, 0, z * BLOCK_SIZE), new Vector3(gridLen, 0, z * BLOCK_SIZE)]);
  }
  // Линии вдоль Z
  for (let x = 0; x <= GRID_SIZE; x++) {
    gridLines.push([new Vector3(x * BLOCK_SIZE, 0, 0), new Vector3(x * BLOCK_SIZE, 0, gridLen)]);
  }

  const gridMesh = MeshBuilder.CreateLineSystem('builder-grid', { lines: gridLines }, scene);
  const gridMat = new MeshBasicMaterial(undefined, scene);
  gridMat.color.setHex(0x335566);
  gridMat.transparent = true;
  gridMat.opacity = 0.5;
  // LinesMesh не использует standard material — задаём цвет напрямую
  gridMesh.color.set(0.2, 0.33, 0.4);
  gridMesh.alpha = 0.5;
  nodes.push(gridMesh);

  // ── Освещение ─────────────────────────────────────────────────────────

  const center = gridLen / 2;
  const light1 = createPointLight(0xffffff, 3, gridLen * 2);
  light1.position.set(center, gridLen, center);
  nodes.push(light1);

  const light2 = createPointLight(0x6688aa, 1.5, gridLen * 2);
  light2.position.set(-10, gridLen * 0.5, center);
  nodes.push(light2);

  // ── Коллайдеры ────────────────────────────────────────────────────────

  // Пол: тонкий AABB на y=0
  const floorCollider: AABB = {
    min: new Vector3(-100, -1, -100),
    max: new Vector3(gridLen + 100, 0, gridLen + 100),
  };

  const colliders: AABB[] = [floorCollider];

  // ── Cleanup ───────────────────────────────────────────────────────────

  function cleanup(): void {
    for (const node of nodes) {
      node.dispose();
    }
    nodes.length = 0;
  }

  return { colliders, cleanup };
}
