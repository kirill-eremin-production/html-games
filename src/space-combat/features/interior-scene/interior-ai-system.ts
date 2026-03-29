/**
 * ECS-система ИИ врагов в интерьере.
 *
 * State machine: patrol → chase → attack → dead.
 * Патруль: движение между waypoints.
 * Обнаружение: проверка расстояния + аналитический raycast через AABB стен.
 * Атака: по таймеру наносит урон игроку.
 */
import { Vector3 } from '@/shared/core/vector3';
import { world } from '@/shared/ecs/combat-world';
import { camera } from '@/shared/engine';
import type { GameSystem } from '@/shared/types';

import { InteriorAIComponent } from '@/entities/ai/interior-ai-component';
import { HealthComponent, MeshComponent, TransformComponent } from '@/entities/components';
import type { AABB } from '@/entities/objects/hangar';
import { HealthBarComponent } from '@/entities/rendering/health-bar';

import type { FPSState } from '@/features/fps';

// ── Константы ───────────────────────────────────────────────────────────────

const ENEMY_SPEED = 3; // м/с
const WAYPOINT_ARRIVE_DIST = 0.8; // м
const ALERT_DURATION = 5; // с

// ── Видимость ───────────────────────────────────────────────────────────────

/**
 * Аналитический raycast: проверяет, блокирует ли какой-либо AABB прямой
 * отрезок от A до B. Не использует Babylon.js pick — работает напрямую
 * с массивом AABB-коллайдеров.
 */
function canSeeTarget(from: Vector3, to: Vector3, colliders: AABB[]): boolean {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dz = to.z - from.z;
  const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
  if (dist < 0.01) return true;

  const invDx = dx !== 0 ? 1 / dx : Infinity;
  const invDy = dy !== 0 ? 1 / dy : Infinity;
  const invDz = dz !== 0 ? 1 / dz : Infinity;

  for (const box of colliders) {
    // Slab method — AABB ray intersection
    let tmin = ((invDx >= 0 ? box.min.x : box.max.x) - from.x) * invDx;
    let tmax = ((invDx >= 0 ? box.max.x : box.min.x) - from.x) * invDx;

    const tymin = ((invDy >= 0 ? box.min.y : box.max.y) - from.y) * invDy;
    const tymax = ((invDy >= 0 ? box.max.y : box.min.y) - from.y) * invDy;

    if (tmin > tymax || tymin > tmax) continue;
    if (tymin > tmin) tmin = tymin;
    if (tymax < tmax) tmax = tymax;

    const tzmin = ((invDz >= 0 ? box.min.z : box.max.z) - from.z) * invDz;
    const tzmax = ((invDz >= 0 ? box.max.z : box.min.z) - from.z) * invDz;

    if (tmin > tzmax || tzmin > tmax) continue;
    if (tzmin > tmin) tmin = tzmin;
    if (tzmax < tmax) tmax = tzmax;

    // Пересечение отрезка [0, 1] (нормализованного до dist)
    const segTmin = tmin / dist;
    const segTmax = tmax / dist;
    if (segTmax >= 0 && segTmin <= 1) {
      return false; // стена блокирует
    }
  }

  return true;
}

// ── Создание системы ────────────────────────────────────────────────────────

const _tempDir = new Vector3();

/**
 * Создать GameSystem для ИИ интерьерных врагов.
 * Принимает ссылки, которые фиксируются при создании.
 */
export function createInteriorAISystem(
  fpsRef: { current: FPSState },
  collidersRef: { current: AABB[] },
  onEnemyAttack: (damage: number) => void,
): GameSystem {
  return {
    id: 'interior-ai',

    update(dt: number) {
      const fps = fpsRef.current;
      const wallColliders = collidersRef.current;
      const playerPos = new Vector3(fps.position.x, fps.position.y + 0.8, fps.position.z);

      const entities = world.query(
        InteriorAIComponent,
        TransformComponent,
        HealthComponent,
        MeshComponent,
      );

      for (const {
        entity,
        components: [ai, transform, health, meshComp],
      } of entities) {
        if (health.current <= 0) {
          ai.state = 'dead';
          // Скрыть healthbar при смерти
          const hb = world.getComponent(entity, HealthBarComponent);
          if (hb) hb.healthBar.setEnabled(false);
          continue;
        }

        const pos = transform.position;
        const eyePos = new Vector3(pos.x, pos.y + 0.8, pos.z);
        const distToPlayer = eyePos.distanceTo(playerPos);
        const canSee =
          distToPlayer <= ai.detectionRange && canSeeTarget(eyePos, playerPos, wallColliders);

        switch (ai.state) {
          case 'patrol': {
            // Движение к текущему waypoint
            if (ai.patrolPoints.length > 0) {
              const target = ai.patrolPoints[ai.currentPointIdx];
              _tempDir.set(target.x - pos.x, 0, target.z - pos.z);
              const hDist = Math.sqrt(_tempDir.x ** 2 + _tempDir.z ** 2);

              if (hDist > WAYPOINT_ARRIVE_DIST) {
                _tempDir.scaleInPlace(1 / hDist);
                pos.x += _tempDir.x * ENEMY_SPEED * dt;
                pos.z += _tempDir.z * ENEMY_SPEED * dt;

                // Повернуть mesh к цели
                const angle = Math.atan2(_tempDir.x, _tempDir.z);
                meshComp.mesh.rotation.y = angle;
              } else {
                // Следующий waypoint
                ai.currentPointIdx = (ai.currentPointIdx + 1) % ai.patrolPoints.length;
              }
            }

            // Обнаружение игрока
            if (canSee) {
              ai.state = 'chase';
              ai.lastKnownPlayerPos = playerPos.clone();
              ai.alertTimer = ALERT_DURATION;
            }
            break;
          }

          case 'chase': {
            if (canSee) {
              ai.lastKnownPlayerPos = playerPos.clone();
              ai.alertTimer = ALERT_DURATION;

              if (distToPlayer <= ai.attackRange) {
                ai.state = 'attack';
                ai.attackCooldown = ai.attackRate * 0.5;
              }
            } else {
              ai.alertTimer -= dt;
              if (ai.alertTimer <= 0) {
                ai.state = 'patrol';
                break;
              }
            }

            // Движение к последней известной позиции
            if (ai.lastKnownPlayerPos) {
              _tempDir.set(ai.lastKnownPlayerPos.x - pos.x, 0, ai.lastKnownPlayerPos.z - pos.z);
              const hDist = Math.sqrt(_tempDir.x ** 2 + _tempDir.z ** 2);
              if (hDist > 1) {
                _tempDir.scaleInPlace(1 / hDist);
                pos.x += _tempDir.x * ENEMY_SPEED * dt;
                pos.z += _tempDir.z * ENEMY_SPEED * dt;
                meshComp.mesh.rotation.y = Math.atan2(_tempDir.x, _tempDir.z);
              }
            }
            break;
          }

          case 'attack': {
            if (!canSee || distToPlayer > ai.attackRange) {
              ai.state = canSee ? 'chase' : 'chase';
              ai.alertTimer = ALERT_DURATION;
              break;
            }

            // Смотреть на игрока
            _tempDir.set(playerPos.x - pos.x, 0, playerPos.z - pos.z);
            const hDist = Math.sqrt(_tempDir.x ** 2 + _tempDir.z ** 2);
            if (hDist > 0.01) {
              meshComp.mesh.rotation.y = Math.atan2(_tempDir.x, _tempDir.z);
            }

            // Атака по таймеру
            ai.attackCooldown -= dt;
            if (ai.attackCooldown <= 0) {
              ai.attackCooldown = ai.attackRate;
              onEnemyAttack(ai.damage);
            }
            break;
          }

          case 'dead':
            break;
        }

        // Синхронизация mesh position
        meshComp.mesh.position.set(pos.x, pos.y, pos.z);

        // Обновление HealthBar
        const hb = world.getComponent(entity, HealthBarComponent);
        if (hb) {
          hb.healthBar.lookAt(camera.position);
          const ratio = health.current / health.max;
          hb.healthFill.scaling.x = Math.max(0.01, ratio);
          hb.healthFill.position.x = -(1 - ratio) * 2;
        }
      }
    },
  };
}
