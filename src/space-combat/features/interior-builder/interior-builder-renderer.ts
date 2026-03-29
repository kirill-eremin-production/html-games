/**
 * Рендеринг блоков интерьера через Babylon.js thin instances.
 *
 * Группирует блоки по ключу "${type}_${colorIdx}".
 * Маркеры (enemy_spawn, player_spawn) рендерятся полупрозрачно.
 */
import { Matrix } from '@babylonjs/core/Maths/math.vector';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';

import { createPBRMaterial, getFactoryScene } from '@/shared/core/factories';
import { EngineMaterial, MeshBasicMaterial } from '@/shared/core/material';
import { EngineMesh } from '@/shared/core/mesh';
import { BLOCK_SIZE, parseKey } from '@/shared/interior';
import type { InteriorBuilderState } from '@/shared/interior';
import { INTERIOR_BLOCK_TYPES, INTERIOR_PALETTE } from '@/shared/interior';
import type { InteriorBlockType } from '@/shared/interior';

// ── Типы ────────────────────────────────────────────────────────────────────

export interface InteriorBuilderRenderer {
  rebuildAll(): void;
  rebuildByKey(key: string): void;
  updateGhost(
    x: number | null,
    y: number | null,
    z: number | null,
    type: InteriorBlockType,
    colorIdx: number,
  ): void;
  dispose(): void;
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function getBlockTypeInfo(type: InteriorBlockType) {
  return INTERIOR_BLOCK_TYPES.find((t) => t.type === type);
}

function getColorHex(type: InteriorBlockType, colorIdx: number): number {
  const info = getBlockTypeInfo(type);
  if (info?.isMarker) return info.defaultColor;
  return INTERIOR_PALETTE[colorIdx] ?? 0xcccccc;
}

// ── Создание ────────────────────────────────────────────────────────────────

export function createInteriorBuilderRenderer(
  state: InteriorBuilderState,
): InteriorBuilderRenderer {
  const scene = getFactoryScene();
  const half = BLOCK_SIZE / 2;

  // Базовые меши по ключу "${type}_${colorIdx}"
  const meshMap = new Map<string, EngineMesh>();

  function getOrCreateMesh(key: string, type: InteriorBlockType, colorIdx: number): EngineMesh {
    let mesh = meshMap.get(key);
    if (mesh) return mesh;

    const hex = getColorHex(type, colorIdx);
    const bjsMesh = MeshBuilder.CreateBox(`iblock_${key}`, { size: BLOCK_SIZE }, scene);
    const info = getBlockTypeInfo(type);

    if (info?.isMarker) {
      // Маркеры — полупрозрачные
      const mat = new MeshBasicMaterial(undefined, scene);
      mat.color.setHex(hex);
      mat.transparent = true;
      mat.opacity = 0.5;
      mat.depthWrite = false;
      bjsMesh.material = mat;
    } else {
      const mat = createPBRMaterial({ color: hex });
      bjsMesh.material = mat;
    }

    bjsMesh.isVisible = false;
    mesh = bjsMesh as unknown as EngineMesh;
    meshMap.set(key, mesh);
    return mesh;
  }

  // Ghost preview
  const ghostMesh = MeshBuilder.CreateBox('ighost', { size: BLOCK_SIZE }, scene);
  const ghostMat = new MeshBasicMaterial(undefined, scene);
  ghostMat.color.setHex(0xffffff);
  ghostMat.transparent = true;
  ghostMat.opacity = 0.35;
  ghostMat.depthWrite = false;
  ghostMesh.material = ghostMat;
  ghostMesh.isVisible = false;

  // ── Rebuild ───────────────────────────────────────────────────────────────

  function rebuildByKey(targetKey: string): void {
    // Парсим ключ
    const sep = targetKey.lastIndexOf('_');
    const type = targetKey.substring(0, sep) as InteriorBlockType;
    const colorIdx = parseInt(targetKey.substring(sep + 1));

    const mesh = getOrCreateMesh(targetKey, type, colorIdx);

    const matrices: Matrix[] = [];
    for (const [posKeyStr, block] of state.blocks) {
      const blockKey = `${block.type}_${block.colorIdx}`;
      if (blockKey !== targetKey) continue;
      const [x, y, z] = parseKey(posKeyStr);
      matrices.push(Matrix.Translation(x + half, y + half, z + half));
    }

    if (matrices.length === 0) {
      mesh.isVisible = false;
      mesh.thinInstanceCount = 0;
      return;
    }

    const buf = new Float32Array(matrices.length * 16);
    for (let i = 0; i < matrices.length; i++) {
      matrices[i].copyToArray(buf, i * 16);
    }

    mesh.thinInstanceSetBuffer('matrix', buf, 16, false);
    mesh.thinInstanceCount = matrices.length;
    mesh.isVisible = true;
  }

  function rebuildAll(): void {
    for (const [, mesh] of meshMap) {
      mesh.thinInstanceCount = 0;
      mesh.isVisible = false;
    }

    // Собираем уникальные ключи
    const usedKeys = new Set<string>();
    for (const block of state.blocks.values()) {
      usedKeys.add(`${block.type}_${block.colorIdx}`);
    }

    for (const key of usedKeys) {
      rebuildByKey(key);
    }
  }

  function updateGhost(
    x: number | null,
    y: number | null,
    z: number | null,
    type: InteriorBlockType,
    colorIdx: number,
  ): void {
    if (x === null || y === null || z === null) {
      ghostMesh.isVisible = false;
      return;
    }

    ghostMesh.position.set(x + half, y + half, z + half);
    const hex = getColorHex(type, colorIdx);
    ghostMat.color.setHex(hex);
    ghostMesh.isVisible = true;
  }

  function dispose(): void {
    for (const [, mesh] of meshMap) {
      if (mesh.material) (mesh.material as EngineMaterial).dispose();
      mesh.dispose();
    }
    meshMap.clear();
    ghostMat.dispose();
    ghostMesh.dispose();
  }

  return { rebuildAll, rebuildByKey, updateGhost, dispose };
}
