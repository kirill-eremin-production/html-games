/**
 * Рендеринг блоков через Babylon.js thin instances.
 *
 * Один базовый Box mesh создаётся для каждого использованного цвета.
 * Все блоки одного цвета рисуются за один draw call через thinInstanceSetBuffer.
 * При изменении (place/remove) пересобирается буфер только для затронутого цвета.
 *
 * Ghost preview — отдельный полупрозрачный куб, перемещается каждый кадр.
 */
import { Matrix } from '@babylonjs/core/Maths/math.vector';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';

import { createPBRMaterial, getFactoryScene } from '@/shared/core/factories';
import { EngineMaterial, MeshBasicMaterial } from '@/shared/core/material';
import { EngineMesh } from '@/shared/core/mesh';

import { BLOCK_PALETTE, BLOCK_SIZE, type BuilderState, parseKey } from './builder-state';

// ── Типы ────────────────────────────────────────────────────────────────────

export interface BuilderRenderer {
  /** Пересобрать thin instances для одного цвета */
  rebuildColor(colorIdx: number): void;
  /** Пересобрать все thin instances (при загрузке чертежа) */
  rebuildAll(): void;
  /** Обновить позицию ghost preview. Передать null чтобы скрыть. */
  updateGhost(x: number | null, y: number | null, z: number | null, colorIdx: number): void;
  /** Очистить все меши */
  dispose(): void;
}

// ── Создание ────────────────────────────────────────────────────────────────

export function createBuilderRenderer(state: BuilderState): BuilderRenderer {
  const scene = getFactoryScene();
  const half = BLOCK_SIZE / 2;

  // Базовые меши для каждого цвета (создаются лениво)
  const colorMeshes = new Map<number, EngineMesh>();

  /** Получить или создать base mesh для цвета */
  function getOrCreateMesh(colorIdx: number): EngineMesh {
    let mesh = colorMeshes.get(colorIdx);
    if (mesh) return mesh;

    const hex = BLOCK_PALETTE[colorIdx] ?? 0xcccccc;
    const bjsMesh = MeshBuilder.CreateBox(`block_c${colorIdx}`, { size: BLOCK_SIZE }, scene);

    // Создаём PBR-материал с данным цветом
    const mat = createPBRMaterial({ color: hex });
    bjsMesh.material = mat;

    // Отключаем основной инстанс — видны только thin instances
    bjsMesh.isVisible = false;

    mesh = bjsMesh as unknown as EngineMesh;
    colorMeshes.set(colorIdx, mesh);
    return mesh;
  }

  // ── Ghost preview ─────────────────────────────────────────────────────────

  const ghostMesh = MeshBuilder.CreateBox('ghost', { size: BLOCK_SIZE }, scene);
  const ghostMat = new MeshBasicMaterial(undefined, scene);
  ghostMat.color.setHex(0xffffff);
  ghostMat.transparent = true;
  ghostMat.opacity = 0.35;
  ghostMat.depthWrite = false;
  ghostMesh.material = ghostMat;
  ghostMesh.isVisible = false;

  // ── Rebuild ───────────────────────────────────────────────────────────────

  function rebuildColor(colorIdx: number): void {
    const mesh = getOrCreateMesh(colorIdx);

    // Собираем все блоки с данным цветом
    const matrices: Matrix[] = [];
    for (const [key, cIdx] of state.blocks) {
      if (cIdx !== colorIdx) continue;
      const [x, y, z] = parseKey(key);
      matrices.push(Matrix.Translation(x + half, y + half, z + half));
    }

    // Очищаем thin instances
    // Если нет блоков этого цвета — скрываем mesh
    if (matrices.length === 0) {
      mesh.isVisible = false;
      mesh.thinInstanceCount = 0;
      return;
    }

    // Собираем Float32Array из матриц
    const buf = new Float32Array(matrices.length * 16);
    for (let i = 0; i < matrices.length; i++) {
      matrices[i].copyToArray(buf, i * 16);
    }

    mesh.isVisible = false; // base mesh скрыт
    mesh.thinInstanceSetBuffer('matrix', buf, 16, false);
    mesh.thinInstanceCount = matrices.length;

    // Для thin instances mesh должен быть «видим» чтобы они рисовались
    mesh.isVisible = true;
    // Но сам base mesh не рисуется — thin instances заменяют его
    mesh.isVisible = false;

    // В BJS thin instances рендерятся если mesh.isVisible = true
    // Но base box всё равно рисуется. Используем другой подход:
    // Ставим isVisible = true и делаем base instance невидимым через scaling.
    // Проще: используем staticBuffer и просто оставим isVisible = true
    mesh.isVisible = true;
  }

  function rebuildAll(): void {
    // Сначала сбрасываем все существующие thin instances
    for (const [, mesh] of colorMeshes) {
      mesh.thinInstanceCount = 0;
      mesh.isVisible = false;
    }

    // Собираем множество используемых цветов
    const usedColors = new Set<number>();
    for (const colorIdx of state.blocks.values()) {
      usedColors.add(colorIdx);
    }

    // Пересобираем для каждого использованного цвета
    for (const colorIdx of usedColors) {
      rebuildColor(colorIdx);
    }
  }

  function updateGhost(
    x: number | null,
    y: number | null,
    z: number | null,
    colorIdx: number,
  ): void {
    if (x === null || y === null || z === null) {
      ghostMesh.isVisible = false;
      return;
    }

    ghostMesh.position.set(x + half, y + half, z + half);
    const hex = BLOCK_PALETTE[colorIdx] ?? 0xffffff;
    ghostMat.color.setHex(hex);
    ghostMesh.isVisible = true;
  }

  function dispose(): void {
    for (const [, mesh] of colorMeshes) {
      if (mesh.material) (mesh.material as EngineMaterial).dispose();
      mesh.dispose();
    }
    colorMeshes.clear();

    ghostMat.dispose();
    ghostMesh.dispose();
  }

  return { rebuildColor, rebuildAll, updateGhost, dispose };
}
