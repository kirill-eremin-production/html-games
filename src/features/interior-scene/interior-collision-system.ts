/**
 * Система столкновений снарядов в интерьере.
 *
 * Проверяет distance-based попадания снарядов по врагам
 * и point-in-AABB столкновения со стенами.
 */
import { world } from '@/shared/ecs/combat-world';
import type { GameSystem } from '@/shared/types';

import { InteriorAIComponent } from '@/entities/ai/interior-ai-component';
import { ProjectileComponent } from '@/entities/combat/projectile';
import { DamageBufferComponent, HealthComponent } from '@/entities/components';
import { destroyEntityWithVisuals } from '@/entities/ecs-adapters/entity-cleanup';
import type { AABB } from '@/entities/objects/hangar';
import { TransformComponent } from '@/entities/physics/transform';
import { TeamComponent } from '@/entities/stats/team';

// ── Константы ───────────────────────────────────────────────────────────────

/** Квадрат радиуса попадания (размер capsule врага ~0.5м, даём запас) */
const HIT_RADIUS_SQ = 0.7 * 0.7;

// ── Helpers ─────────────────────────────────────────────────────────────────

function isInsideAABB(x: number, y: number, z: number, box: AABB): boolean {
  return (
    x >= box.min.x &&
    x <= box.max.x &&
    y >= box.min.y &&
    y <= box.max.y &&
    z >= box.min.z &&
    z <= box.max.z
  );
}

// ── Создание системы ────────────────────────────────────────────────────────

export function createInteriorCollisionSystem(collidersRef: { current: AABB[] }): GameSystem {
  return {
    id: 'interior-collision',

    update() {
      const colliders = collidersRef.current;

      // Собрать живых врагов
      const enemies = world.query(
        InteriorAIComponent,
        TransformComponent,
        DamageBufferComponent,
        HealthComponent,
      );

      // Собрать снаряды
      const projectiles = world.query(TransformComponent, ProjectileComponent, TeamComponent);

      for (const {
        entity: projEntity,
        components: [projTransform, proj, projTeam],
      } of projectiles) {
        if (!world.isAlive(projEntity)) continue;
        if (projTeam.team !== 'player') continue;

        const px = projTransform.position.x;
        const py = projTransform.position.y;
        const pz = projTransform.position.z;

        let hit = false;

        // Проверка попадания по врагам
        for (const {
          components: [ai, enemyTransform, dmgBuf, health],
        } of enemies) {
          if (health.current <= 0) continue;
          if (ai.state === 'dead') continue;

          const dx = px - enemyTransform.position.x;
          // Враг высотой ~1.5м, проверяем попадание по центру тела (y + 0.75)
          const dy = py - (enemyTransform.position.y + 0.75);
          const dz = pz - enemyTransform.position.z;
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < HIT_RADIUS_SQ) {
            dmgBuf.hits.push({
              amount: proj.damage,
              shooterName: proj.shooterName,
              shooterTeam: 'player',
            });
            hit = true;
            break;
          }
        }

        // Проверка столкновения со стенами
        if (!hit) {
          for (const box of colliders) {
            if (isInsideAABB(px, py, pz, box)) {
              hit = true;
              break;
            }
          }
        }

        if (hit) {
          destroyEntityWithVisuals(projEntity);
        }
      }
    },
  };
}
