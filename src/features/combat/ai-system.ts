import { AI_CONFIG } from '@/shared/config/ai';
import { PLAYER_NAME } from '@/shared/constants';
import { Quaternion, TransformNode, Vector3, disposeNode } from '@/shared/core';
import { world } from '@/shared/ecs/combat-world';
import { unregisterMeshEntity } from '@/shared/ecs/entity-index';
import { camera } from '@/shared/engine';
import type { GameSystem } from '@/shared/types';

import { FighterAIComponent } from '@/entities/ai/fighter-ai';
import {
  type FighterQueryResult,
  findNearestFighter,
  queryAliveCapitalShips,
  queryAllFighters,
} from '@/entities/ecs-queries';
import { cleanupTeamSources, updateExhaustGlow } from '@/entities/objects/space-ships';
import { MeshComponent } from '@/entities/rendering/mesh';

import { playerPlane } from '@/features/flight/player-system';

import { shootFromFighter } from './weapons';

const A = AI_CONFIG;

const _aiToTarget = new Vector3();
const _aiCurrentFwd = new Vector3();
const _aiCross = new Vector3();
const _aiRotQ = new Quaternion();
const _aiRollQ = new Quaternion();
const _aiFwd = new Vector3();
const _tmpVec = new Vector3();
const _aiOrbitDir = new Vector3();
const _aiSubWorldPos = new Vector3();

function updateFighterAI(
  f: FighterQueryResult,
  dt: number,
  enemyPool: FighterQueryResult[],
  playerPos: Vector3 | null,
  isEnemy: boolean,
  pPlane: TransformNode,
): void {
  const pos = f.transform.position;
  const quat = f.transform.quaternion;

  // ── Выбор цели ─────────────────────────────────────────────────────────
  if (!f.ai.target || Math.random() < A.retargetChance) {
    if (isEnemy && Math.random() < A.enemyTargetPlayerChance && playerPos) {
      f.ai.target = { mesh: { position: playerPos }, name: PLAYER_NAME };
    } else {
      const nearest = findNearestFighter(pos, enemyPool);
      f.ai.target = nearest
        ? { mesh: { position: nearest.transform.position }, name: nearest.name.name }
        : null;
    }
  }

  // Союзники могут целиться в подсистемы кораблей
  if (!isEnemy && Math.random() < A.allyTargetCapitalChance) {
    const ships = queryAliveCapitalShips();
    for (const cs of ships) {
      for (const sub of cs.capitalShip.subsystems) {
        if (sub.health > 0) {
          _aiSubWorldPos.copyFrom(sub.center).applyMatrix4(cs.mesh.mesh.getWorldMatrix());
          f.ai.target = {
            mesh: { position: _aiSubWorldPos.clone() },
            name: `Корабль-${cs.mesh.mesh.metadata.index + 1}`,
          };
          break;
        }
      }
      if (f.ai.target) break;
    }
  }

  const target = f.ai.target;
  if (!target) return;

  // ── Навигация ──────────────────────────────────────────────────────────
  _aiToTarget.copyFrom(target.mesh.position).subtractInPlace(pos);
  const dist = _aiToTarget.length();
  const dirToTarget = _aiToTarget.normalize();

  f.ai.timer -= dt;
  if (f.ai.timer <= 0) {
    if (dist < A.evadeDistance) {
      f.ai.state = 'evade';
      f.ai.evadeDir.copyFrom(dirToTarget).negate();
      f.ai.evadeDir.x += (Math.random() - 0.5) * A.evadeNoiseXZ;
      f.ai.evadeDir.y += (Math.random() - 0.5) * A.evadeNoiseY;
      f.ai.evadeDir.z += (Math.random() - 0.5) * A.evadeNoiseXZ;
      f.ai.evadeDir.normalize();
      f.ai.timer = A.evadeTimerBase + Math.random() * A.evadeTimerRange;
    } else if (dist > A.chaseDistance) {
      f.ai.state = 'chase';
      f.ai.timer = A.chaseTimer;
    } else {
      f.ai.state = 'orbit';
      f.ai.evadeDir
        .set(-dirToTarget.z, (Math.random() - 0.5) * A.orbitYNoise, dirToTarget.x)
        .normalize();
      if (Math.random() < 0.5) f.ai.evadeDir.negate();
      f.ai.timer = A.orbitTimerBase + Math.random() * A.orbitTimerRange;
    }
  }

  let targetDir: Vector3;
  switch (f.ai.state) {
    case 'chase':
      targetDir = dirToTarget;
      break;
    case 'evade':
      targetDir = f.ai.evadeDir;
      break;
    case 'orbit': {
      const correction = ((dist - A.orbitDistance) / A.orbitDistance) * A.orbitCorrection;
      _aiOrbitDir.copyFrom(f.ai.evadeDir).addScaledVector(dirToTarget, correction).normalize();
      targetDir = _aiOrbitDir;
      break;
    }
    default:
      targetDir = dirToTarget;
  }

  // ── Поворот ────────────────────────────────────────────────────────────
  _aiCurrentFwd.set(1, 0, 0).applyQuaternion(quat);
  _aiCross.copyFrom(_aiCurrentFwd).cross(targetDir);
  const crossLen = _aiCross.length();
  if (crossLen > 0.001) {
    const angle = Math.asin(Math.min(1, crossLen)) * A.turnRate * dt;
    _aiCross.scaleInPlace(1 / crossLen);
    _aiRotQ.setFromAxisAngle(_aiCross, angle);
    quat.premultiply(_aiRotQ);
    quat.normalize();
  }

  _aiRollQ.setFromAxisAngle(_tmpVec.set(1, 0, 0), -_aiCross.y * A.rollRate * dt);
  quat.multiply(_aiRollQ);

  // ── Движение ───────────────────────────────────────────────────────────
  _aiFwd.set(1, 0, 0).applyQuaternion(quat);
  pos.addScaledVector(_aiFwd, f.velocity.speed * dt);

  // ── Стрельба ───────────────────────────────────────────────────────────
  f.weapon.shootTimer -= dt;
  if (f.weapon.shootTimer <= 0 && dist < A.shootDistance) {
    f.weapon.shootTimer = A.shootTimerBase + Math.random() * A.shootTimerRange;
    shootFromFighter(
      f.mesh.mesh,
      dirToTarget,
      f.team.team as 'ally' | 'enemy',
      f.name.name,
      pPlane,
    );
  }

  // ── Обновление health bar ─────────────────────────────────────────────
  f.healthBar.healthBar.lookAt(camera.position);
  const hpRatio = f.health.current / f.health.max;
  f.healthBar.healthFill.scaling.x = Math.max(0.01, hpRatio);
  f.healthBar.healthFill.position.x = -(1 - hpRatio) * 2;
}

// ── GameSystem ──────────────────────────────────────────────────────────────

export const aiSystem: GameSystem = {
  id: 'ai',
  update(dt) {
    const allFighters = queryAllFighters();
    const allies = allFighters.filter((f) => f.team.team === 'ally');
    const enemies = allFighters.filter((f) => f.team.team === 'enemy');

    for (const a of allies) {
      updateFighterAI(a, dt, enemies, null, false, playerPlane);
    }
    for (const e of enemies) {
      updateFighterAI(e, dt, allies, playerPlane.position, true, playerPlane);
    }

    updateExhaustGlow();
  },
  cleanup() {
    const fighters = world.query(FighterAIComponent, MeshComponent);
    for (const {
      entity,
      components: [, mesh],
    } of fighters) {
      unregisterMeshEntity(mesh.mesh);
      disposeNode(mesh.mesh);
      world.destroyEntity(entity);
    }
    cleanupTeamSources();
  },
};
