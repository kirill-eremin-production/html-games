import { InstancedMesh } from '@babylonjs/core/Meshes/instancedMesh';
import { Mesh as BMesh } from '@babylonjs/core/Meshes/mesh';
import type { TransformNode as BTransformNode } from '@babylonjs/core/Meshes/transformNode';
import type { Node } from '@babylonjs/core/node';

import { AI_CONFIG } from '../../../config/ai';
import { TransformNode } from '../../../core';
import { cloneFighterModel } from '../loader';

// ── Team source cache ───────────────────────────────────────────────────────

interface TeamSource {
  root: TransformNode;
  exhaustMats: { alpha: number }[]; // shared exhaust materials for animation
}

const teamSourceCache = new Map<string, TeamSource>();
let instanceCounter = 0;

function teamKey(bodyColor: number, exhaustColor: number): string {
  return `${bodyColor}_${exhaustColor}`;
}

function ensureTeamSource(
  bodyColor: number,
  exhaustColor: number,
): TeamSource {
  const key = teamKey(bodyColor, exhaustColor);
  let entry = teamSourceCache.get(key);
  if (entry) return entry;

  // Create a reference model with team materials
  const root = cloneFighterModel(bodyColor, exhaustColor);

  // Collect exhaust/glow materials and hide all source meshes
  const exhaustMats: { alpha: number }[] = [];
  for (const desc of root.getDescendants(false)) {
    if (desc instanceof BMesh) {
      // Hide source mesh — instances will render instead
      desc.isVisible = false;
      const n = desc.name;
      if (
        (n === 'exhaust' || n === 'exhaust_L') &&
        desc.material
      ) {
        exhaustMats.push(desc.material as { alpha: number });
      }
    }
  }

  entry = { root, exhaustMats };
  teamSourceCache.set(key, entry);
  return entry;
}

// ── Instanced fighter creation ──────────────────────────────────────────────

/**
 * Recursively build an instanced hierarchy mirroring the source.
 * Renderable meshes become InstancedMesh; containers become TransformNode.
 */
function instanceChildren(source: Node, parent: Node): void {
  for (const child of source.getChildren()) {
    if (child instanceof BMesh && child.getTotalVertices() > 0) {
      // Renderable mesh — create instance
      const inst = child.createInstance(
        `${child.name}_i${instanceCounter++}`,
      );
      inst.parent = parent;
      inst.position.copyFrom(child.position);
      if (child.rotationQuaternion) {
        inst.rotationQuaternion = child.rotationQuaternion.clone();
      } else {
        inst.rotation.copyFrom(child.rotation);
      }
      inst.scaling.copyFrom(child.scaling);
      // Preserve name for getObjectByName lookups
      inst.name = child.name;
    } else {
      // Container node — create lightweight TransformNode, recurse
      const clone = new TransformNode(child.name);
      clone.parent = parent;
      if ('position' in child) {
        const src = child as BTransformNode;
        clone.position.copyFrom(src.position);
        if (src.rotationQuaternion) {
          clone.rotationQuaternion = src.rotationQuaternion.clone();
        } else {
          clone.rotation.copyFrom(src.rotation);
        }
        clone.scaling.copyFrom(src.scaling);
      }
      instanceChildren(child, clone);
    }
  }
}

/**
 * Create a fighter using InstancedMesh for all renderable sub-meshes.
 * All fighters of the same team share geometry + material → batched draw calls.
 */
export function createFighterInstanced(
  bodyColor: number,
  exhaustColor: number,
): TransformNode {
  const source = ensureTeamSource(bodyColor, exhaustColor);

  const root = new TransformNode(`fighter_i${instanceCounter++}`);
  // Match the 1.5× scale applied by cloneFighterModel
  root.scaling.setAll(1.5);

  // Build instanced hierarchy from source
  instanceChildren(source.root, root);

  return root;
}

// ── Global exhaust animation ────────────────────────────────────────────────

const A = AI_CONFIG;

/**
 * Animate exhaust glow opacity for all teams globally.
 * Called once per frame (replaces per-fighter exhaust animation).
 */
export function updateExhaustGlow(): void {
  const pulse = Math.sin(Date.now() * A.exhaustPulseSpeed) * 0.5 + 0.5;
  const opacity = A.exhaustOpacityBase + pulse * A.exhaustOpacityRange;
  for (const source of teamSourceCache.values()) {
    for (const mat of source.exhaustMats) {
      mat.alpha = opacity;
    }
  }
}

// ── Cleanup ─────────────────────────────────────────────────────────────────

/** Dispose all team source models. Call on combat exit. */
export function cleanupTeamSources(): void {
  for (const source of teamSourceCache.values()) {
    source.root.dispose(false, true);
  }
  teamSourceCache.clear();
  instanceCounter = 0;
}
