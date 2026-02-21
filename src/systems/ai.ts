import * as THREE from 'three';
import { PLAYER_NAME } from '../constants';
import { camera } from '../scene/setup';
import { state } from '../state';
import type { Fighter } from '../types';
import { shootFromFighter } from './weapons';

const _aiToTarget = new THREE.Vector3();
const _aiCurrentFwd = new THREE.Vector3();
const _aiCross = new THREE.Vector3();
const _aiRotQ = new THREE.Quaternion();
const _aiRollQ = new THREE.Quaternion();
const _aiFwd = new THREE.Vector3();
const _tmpVec = new THREE.Vector3();
const _aiOrbitDir = new THREE.Vector3();
const _aiSubWorldPos = new THREE.Vector3();

let _nearestTarget: Fighter | null = null;

function findNearestTarget(pos: THREE.Vector3, targets: Fighter[]): Fighter | null {
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
  playerPos: THREE.Vector3 | null,
  isEnemy: boolean,
  playerPlane: THREE.Group,
): void {
  if (!fighter.ai.target || Math.random() < 0.01) {
    if (isEnemy && Math.random() < 0.5 && playerPos) {
      fighter.ai.target = { mesh: { position: playerPos }, name: PLAYER_NAME };
    } else {
      fighter.ai.target = findNearestTarget(fighter.mesh.position, enemies);
    }
  }

  if (!isEnemy && Math.random() < 0.005) {
    for (const cs of state.capitalShips) {
      if (!cs.alive) continue;
      for (const sub of cs.subsystems) {
        if (sub.health > 0) {
          _aiSubWorldPos.copy(sub.center).applyMatrix4(cs.mesh.matrixWorld);
          fighter.ai.target = {
            mesh: { position: _aiSubWorldPos.clone() },
            name: `Корабль-${cs.mesh.userData.index + 1}`,
          };
          break;
        }
      }
      if (fighter.ai.target) break;
    }
  }

  const target = fighter.ai.target;
  if (!target) return;

  _aiToTarget.copy(target.mesh.position).sub(fighter.mesh.position);
  const dist = _aiToTarget.length();
  const dirToTarget = _aiToTarget.normalize();

  fighter.ai.timer -= dt;
  if (fighter.ai.timer <= 0) {
    if (dist < 100) {
      fighter.ai.state = 'evade';
      fighter.ai.evadeDir.copy(dirToTarget).negate();
      fighter.ai.evadeDir.x += (Math.random() - 0.5) * 0.8;
      fighter.ai.evadeDir.y += (Math.random() - 0.5) * 0.4;
      fighter.ai.evadeDir.z += (Math.random() - 0.5) * 0.8;
      fighter.ai.evadeDir.normalize();
      fighter.ai.timer = 2 + Math.random() * 2;
    } else if (dist > 500) {
      fighter.ai.state = 'chase';
      fighter.ai.timer = 3;
    } else {
      fighter.ai.state = 'orbit';
      fighter.ai.evadeDir
        .set(-dirToTarget.z, (Math.random() - 0.5) * 0.3, dirToTarget.x)
        .normalize();
      if (Math.random() < 0.5) fighter.ai.evadeDir.negate();
      fighter.ai.timer = 3 + Math.random() * 3;
    }
  }

  let targetDir: THREE.Vector3;
  switch (fighter.ai.state) {
    case 'chase':
      targetDir = dirToTarget;
      break;
    case 'evade':
      targetDir = fighter.ai.evadeDir;
      break;
    case 'orbit': {
      const correction = ((dist - 250) / 250) * 0.3;
      _aiOrbitDir.copy(fighter.ai.evadeDir).addScaledVector(dirToTarget, correction).normalize();
      targetDir = _aiOrbitDir;
      break;
    }
    default:
      targetDir = dirToTarget;
  }

  _aiCurrentFwd.set(1, 0, 0).applyQuaternion(fighter.mesh.quaternion);
  _aiCross.copy(_aiCurrentFwd).cross(targetDir);
  const crossLen = _aiCross.length();
  if (crossLen > 0.001) {
    const angle = Math.asin(Math.min(1, crossLen)) * 1.5 * dt;
    _aiCross.divideScalar(crossLen); // normalize without re-computing length
    _aiRotQ.setFromAxisAngle(_aiCross, angle);
    fighter.mesh.quaternion.premultiply(_aiRotQ);
    fighter.mesh.quaternion.normalize();
  }

  _aiRollQ.setFromAxisAngle(_tmpVec.set(1, 0, 0), -_aiCross.y * 1.5 * dt);
  fighter.mesh.quaternion.multiply(_aiRollQ);

  _aiFwd.set(1, 0, 0).applyQuaternion(fighter.mesh.quaternion);
  fighter.mesh.position.addScaledVector(_aiFwd, fighter.speed * dt);

  fighter.shootTimer -= dt;
  if (fighter.shootTimer <= 0 && dist < 400) {
    fighter.shootTimer = 0.5 + Math.random() * 0.7;
    shootFromFighter(fighter.mesh, dirToTarget, shootTeam, fighter.name, playerPlane);
  }

  // Exhaust glow pulse
  const pulse = Math.sin(Date.now() * 0.006 + fighter.mesh.id * 1.7) * 0.5 + 0.5;
  const exh = fighter.mesh.getObjectByName('exhaust') as THREE.Mesh | undefined;
  if (exh) {
    (exh.material as THREE.MeshBasicMaterial).opacity = 0.6 + pulse * 0.3;
    exh.scale.setScalar(0.9 + pulse * 0.2);
  }

  fighter.healthBar.lookAt(camera.position);
  const hpRatio = fighter.health / fighter.maxHealth;
  fighter.healthFill.scale.x = Math.max(0.01, hpRatio);
  fighter.healthFill.position.x = -(1 - hpRatio) * 2;
}

export function updateAllies(dt: number, playerPlane: THREE.Group): void {
  for (const a of state.allies) {
    updateFighterAI(a, dt, state.enemies, 'ally', null, false, playerPlane);
  }
}

export function updateEnemies(dt: number, playerPlane: THREE.Group): void {
  for (const e of state.enemies) {
    updateFighterAI(e, dt, state.allies, 'enemy', playerPlane.position, true, playerPlane);
  }
}
