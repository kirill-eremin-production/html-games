/**
 * Создаёт Babylon.js TransformNode из voxel-данных blueprint.
 *
 * Использует thin instances (один draw call на цвет), центрирует по AABB,
 * масштабирует до нужного размера.
 *
 * Trick для скрытия base instance: первый слот буфера — матрица с нулевым scaling.
 * Остальные слоты — позиции блоков (в локальных coords root).
 */
import { Matrix } from '@babylonjs/core/Maths/math.vector';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';

import { BLOCK_PALETTE, BLOCK_SIZE, parseKey } from '@/shared/blueprint/blueprint-data';
import { createPBRMaterial, createTransformNode, getFactoryScene } from '@/shared/core/factories';

/**
 * Создать меш из voxel-данных blueprint.
 * @param blocks  Sparse Map из BuilderState (ключ "x,y,z" → colorIndex)
 * @param scale   Масштаб результата (default 0.13 ≈ размер стандартного fighter)
 * @returns TransformNode, пригодный для parent = playerPlane
 */
export function createBlueprintMesh(
  blocks: Map<string, number>,
  scale = 0.13,
): ReturnType<typeof createTransformNode> {
  const root = createTransformNode();

  if (blocks.size === 0) {
    return root;
  }

  const scene = getFactoryScene();
  const half = BLOCK_SIZE / 2;

  // ── Группируем блоки по цвету ───────────────────────────────────────────────

  const byColor = new Map<number, Array<[number, number, number]>>();
  for (const [key, colorIdx] of blocks) {
    const pos = parseKey(key);
    let arr = byColor.get(colorIdx);
    if (!arr) {
      arr = [];
      byColor.set(colorIdx, arr);
    }
    arr.push(pos);
  }

  // ── Вычисляем AABB для центрирования ────────────────────────────────────────

  let minX = Infinity,
    minY = Infinity,
    minZ = Infinity;
  let maxX = -Infinity,
    maxY = -Infinity,
    maxZ = -Infinity;
  for (const [key] of blocks) {
    const [x, y, z] = parseKey(key);
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
    if (z < minZ) minZ = z;
    if (z > maxZ) maxZ = z;
  }

  // Центр bounding box (с учётом половины блока)
  const cx = (minX + maxX) / 2 + half;
  const cy = (minY + maxY) / 2 + half;
  const cz = (minZ + maxZ) / 2 + half;

  // Матрица для скрытия base instance (нулевой масштаб)
  const zeroMatrix = Matrix.Scaling(0, 0, 0);

  // ── Thin instances для каждого цвета ────────────────────────────────────────

  for (const [colorIdx, positions] of byColor) {
    const hex = BLOCK_PALETTE[colorIdx] ?? 0xcccccc;
    const mesh = MeshBuilder.CreateBox(`bp_c${colorIdx}`, { size: BLOCK_SIZE }, scene);
    mesh.material = createPBRMaterial({ color: hex });
    mesh.parent = root;

    // +1 slot: первый слот — невидимый base instance (нулевой масштаб)
    const count = positions.length;
    const buf = new Float32Array((count + 1) * 16);

    // Слот 0 — base instance скрыт
    zeroMatrix.copyToArray(buf, 0);

    // Остальные слоты — позиции блоков в локальных coords root (центрированные)
    for (let i = 0; i < count; i++) {
      const [x, y, z] = positions[i];
      Matrix.Translation(x + half - cx, y + half - cy, z + half - cz).copyToArray(
        buf,
        (i + 1) * 16,
      );
    }

    mesh.thinInstanceSetBuffer('matrix', buf, 16, false);
    mesh.thinInstanceCount = count + 1;
  }

  // ── Масштаб root ─────────────────────────────────────────────────────────────

  root.scaling.setAll(scale);

  return root;
}
