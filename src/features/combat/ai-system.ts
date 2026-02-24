import { AI_CONFIG } from '@/shared/config/ai';
import { PLAYER_NAME } from '@/shared/constants';
import { Quaternion, TransformNode, Vector3, disposeNode } from '@/shared/core';
import { camera } from '@/shared/engine';
import { state } from '@/shared/state';
import type { Fighter } from '@/shared/types';
import type { GameSystem } from '@/shared/types';

import { cleanupTeamSources, updateExhaustGlow } from '@/entities/fighter';

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

let _nearestTarget: Fighter | null = null;

function findNearestTarget(pos: Vector3, targets: Fighter[]): Fighter | null {
  _nearestTarget = null;
  let bestDistSq = Infinity;
  for (const t of targets) {
    const dSq = pos.distanceToSquared(t.mesh.position);
    if (dSq < bestDistSq) {
      bestDistSq = dSq;
      _nearestTarget = t;
    }
  }
  return _nearestTarget;
}

function updateFighterAI(
  fighter: Fighter,
  dt: number,
  enemies: Fighter[],
  shootTeam: 'ally' | 'enemy',
  playerPos: Vector3 | null,
  isEnemy: boolean,
  playerPlane: TransformNode,
): void {
  if (!fighter.ai.target || Math.random() < A.retargetChance) {
    if (isEnemy && Math.random() < A.enemyTargetPlayerChance && playerPos) {
      fighter.ai.target = { mesh: { position: playerPos }, name: PLAYER_NAME };
    } else {
      fighter.ai.target = findNearestTarget(fighter.mesh.position, enemies);
    }
  }

  if (!isEnemy && Math.random() < A.allyTargetCapitalChance) {
    for (const cs of state.capitalShips) {
      if (!cs.alive) continue;
      for (const sub of cs.subsystems) {
        if (sub.health > 0) {
          _aiSubWorldPos.copyFrom(sub.center).applyMatrix4(cs.mesh.getWorldMatrix());
          fighter.ai.target = {
            mesh: { position: _aiSubWorldPos.clone() },
            name: `Корабль-${cs.mesh.metadata.index + 1}`,
          };
          break;
        }
      }
      if (fighter.ai.target) break;
    }
  }

  const target = fighter.ai.target;
  if (!target) return;

  _aiToTarget.copyFrom(target.mesh.position).subtractInPlace(fighter.mesh.position);
  const dist = _aiToTarget.length();
  const dirToTarget = _aiToTarget.normalize();

  fighter.ai.timer -= dt;
  if (fighter.ai.timer <= 0) {
    if (dist < A.evadeDistance) {
      fighter.ai.state = 'evade';
      fighter.ai.evadeDir.copyFrom(dirToTarget).negate();
      fighter.ai.evadeDir.x += (Math.random() - 0.5) * A.evadeNoiseXZ;
      fighter.ai.evadeDir.y += (Math.random() - 0.5) * A.evadeNoiseY;
      fighter.ai.evadeDir.z += (Math.random() - 0.5) * A.evadeNoiseXZ;
      fighter.ai.evadeDir.normalize();
      fighter.ai.timer = A.evadeTimerBase + Math.random() * A.evadeTimerRange;
    } else if (dist > A.chaseDistance) {
      fighter.ai.state = 'chase';
      fighter.ai.timer = A.chaseTimer;
    } else {
      fighter.ai.state = 'orbit';
      fighter.ai.evadeDir
        .set(-dirToTarget.z, (Math.random() - 0.5) * A.orbitYNoise, dirToTarget.x)
        .normalize();
      if (Math.random() < 0.5) fighter.ai.evadeDir.negate();
      fighter.ai.timer = A.orbitTimerBase + Math.random() * A.orbitTimerRange;
    }
  }

  let targetDir: Vector3;
  switch (fighter.ai.state) {
    case 'chase':
      targetDir = dirToTarget;
      break;
    case 'evade':
      targetDir = fighter.ai.evadeDir;
      break;
    case 'orbit': {
      const correction = ((dist - A.orbitDistance) / A.orbitDistance) * A.orbitCorrection;
      _aiOrbitDir
        .copyFrom(fighter.ai.evadeDir)
        .addScaledVector(dirToTarget, correction)
        .normalize();
      targetDir = _aiOrbitDir;
      break;
    }
    default:
      targetDir = dirToTarget;
  }

  _aiCurrentFwd.set(1, 0, 0).applyQuaternion(fighter.mesh.quaternion);
  _aiCross.copyFrom(_aiCurrentFwd).cross(targetDir);
  const crossLen = _aiCross.length();
  if (crossLen > 0.001) {
    const angle = Math.asin(Math.min(1, crossLen)) * A.turnRate * dt;
    _aiCross.scaleInPlace(1 / crossLen);
    _aiRotQ.setFromAxisAngle(_aiCross, angle);
    fighter.mesh.quaternion.premultiply(_aiRotQ);
    fighter.mesh.quaternion.normalize();
  }

  _aiRollQ.setFromAxisAngle(_tmpVec.set(1, 0, 0), -_aiCross.y * A.rollRate * dt);
  fighter.mesh.quaternion.multiply(_aiRollQ);

  _aiFwd.set(1, 0, 0).applyQuaternion(fighter.mesh.quaternion);
  fighter.mesh.position.addScaledVector(_aiFwd, fighter.speed * dt);

  fighter.shootTimer -= dt;
  if (fighter.shootTimer <= 0 && dist < A.shootDistance) {
    fighter.shootTimer = A.shootTimerBase + Math.random() * A.shootTimerRange;
    shootFromFighter(fighter.mesh, dirToTarget, shootTeam, fighter.name, playerPlane);
  }

  fighter.healthBar.lookAt(camera.position);
  const hpRatio = fighter.health / fighter.maxHealth;
  fighter.healthFill.scaling.x = Math.max(0.01, hpRatio);
  fighter.healthFill.position.x = -(1 - hpRatio) * 2;
}

export function updateAllies(dt: number, playerPlane: TransformNode): void {
  for (const a of state.allies) {
    updateFighterAI(a, dt, state.enemies, 'ally', null, false, playerPlane);
  }
}

export function updateEnemies(dt: number, playerPlane: TransformNode): void {
  for (const e of state.enemies) {
    updateFighterAI(e, dt, state.allies, 'enemy', playerPlane.position, true, playerPlane);
  }
}

// ── GameSystem adapter ──────────────────────────────────────────────────────

export const aiSystem: GameSystem = {
  id: 'ai',
  update(dt) {
    updateAllies(dt, playerPlane);
    updateEnemies(dt, playerPlane);
    // Global exhaust pulse (shared material — one update per team)
    updateExhaustGlow();
  },
  cleanup() {
    for (const a of state.allies) disposeNode(a.mesh);
    for (const e of state.enemies) disposeNode(e.mesh);
    state.allies = [];
    state.enemies = [];
    cleanupTeamSources();
  },
};
