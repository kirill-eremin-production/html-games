import * as THREE from 'three';
import { playLaserSound, updateEngineHum } from '../audio/sound';
import { PLAYER_NAME } from '../constants';
import { GUN_OFFSET_L, GUN_OFFSET_R } from '../scene/models';
import { camera } from '../scene/setup';
import { state } from '../state';
import { showMessage } from '../ui/hud';
import { addKillFeedEntry } from '../ui/kill-feed';
import { createExplosion } from './explosions';
import { createLaser } from './weapons';

export const playerPlane = new THREE.Group();
export const playerRotation = { pitch: 0, yaw: 0, roll: 0 };

const _tmpVec = new THREE.Vector3();
const _tmpVec2 = new THREE.Vector3();
const _tmpVec3 = new THREE.Vector3();
const _tmpQuat = new THREE.Quaternion();
const _shootAim = new THREE.Vector3();
const _shootDir = new THREE.Vector3();
const _shootOrigin = new THREE.Vector3();

export function initPlayerModel(): void {
  // Player model is created externally and added to scene
}

export function updatePlayer(dt: number): void {
  const pitchSpeed = 2.2,
    rollSpeed = 3.0,
    yawSpeed = 1.5;
  const mx = state.mouseX,
    my = state.mouseY;
  const deadZone = 0.05;
  const applyDZ = (v: number) => {
    const a = Math.abs(v);
    return a < deadZone ? 0 : Math.sign(v) * ((a - deadZone) / (1 - deadZone));
  };
  const mxAdj = applyDZ(mx),
    myAdj = applyDZ(my);
  let pitchInput = -myAdj,
    yawInput = -mxAdj,
    rollInput = -mxAdj * 0.5;
  if (state.keys['KeyA']) rollInput -= 2.0;
  if (state.keys['KeyD']) rollInput += 2.0;

  if (state.keys['KeyW'] || state.keys['ShiftLeft'] || state.keys['ShiftRight']) {
    state.speed = Math.min(state.speed + 120 * dt, state.boostSpeed);
  } else if (state.keys['KeyS']) {
    state.speed = Math.max(state.speed - 100 * dt, 20);
  } else {
    state.speed += (state.baseSpeed - state.speed) * 2 * dt;
  }

  playerRotation.pitch += pitchInput * pitchSpeed * dt;
  playerRotation.roll += rollInput * rollSpeed * dt;
  playerRotation.yaw += yawInput * yawSpeed * dt;
  playerRotation.pitch *= 1 - 1.5 * dt;
  playerRotation.roll *= 1 - 2.0 * dt;
  playerRotation.yaw *= 1 - 1.5 * dt;

  playerPlane.quaternion.multiply(
    _tmpQuat.setFromAxisAngle(_tmpVec.set(0, 0, 1), playerRotation.pitch * dt),
  );
  playerPlane.quaternion.multiply(
    _tmpQuat.setFromAxisAngle(_tmpVec.set(0, 1, 0), playerRotation.yaw * dt),
  );
  playerPlane.quaternion.multiply(
    _tmpQuat.setFromAxisAngle(_tmpVec.set(1, 0, 0), playerRotation.roll * dt),
  );
  playerPlane.quaternion.normalize();

  const forward = _tmpVec.set(1, 0, 0).applyQuaternion(playerPlane.quaternion);
  playerPlane.position.addScaledVector(forward, state.speed * dt);

  const speedRatio = state.speed / state.boostSpeed;
  const exhaust = playerPlane.getObjectByName('exhaust') as THREE.Mesh | undefined;
  if (exhaust) {
    (exhaust.material as THREE.MeshBasicMaterial).opacity = 0.4 + speedRatio * 0.6;
    exhaust.scale.setScalar(0.8 + speedRatio * 0.6);
  }
  const glow = playerPlane.getObjectByName('glow') as THREE.Mesh | undefined;
  if (glow) {
    (glow.material as THREE.MeshBasicMaterial).opacity = 0.1 + speedRatio * 0.3;
    glow.scale.setScalar(0.7 + speedRatio * 0.8);
  }
  updateEngineHum(speedRatio);

  const camOffset = _tmpVec2.set(-14, 5, 0).applyQuaternion(playerPlane.quaternion);
  const camTarget = _tmpVec3.copy(playerPlane.position).add(camOffset);
  camera.position.lerp(camTarget, 5 * dt);
  const lookTarget = _tmpVec2.copy(playerPlane.position).add(forward.multiplyScalar(20));
  const up = _tmpVec3.set(0, 1, 0).applyQuaternion(playerPlane.quaternion);
  camera.up.lerp(up, 3 * dt).normalize();
  camera.lookAt(lookTarget);

  if (state.invulnTimer > 0) {
    state.invulnTimer -= dt;
    playerPlane.visible = Math.floor(state.invulnTimer * 10) % 2 === 0;
  } else {
    playerPlane.visible = true;
  }

  state.noDamageTimer += dt;
  if (state.noDamageTimer >= 5 && state.playerHealth < state.maxHealth) {
    state.playerHealth = Math.min(
      state.maxHealth,
      state.playerHealth + state.maxHealth * 0.02 * dt,
    );
  }

  state.shootCooldown -= dt;
  if ((state.keys['Space'] || state.keys['MouseLeft']) && state.shootCooldown <= 0) {
    state.shootCooldown = 0.1;
    _shootAim.set(state.mouseX, -state.mouseY, 0.5).unproject(camera);
    _shootDir.copy(_shootAim).sub(camera.position).normalize();
    // Right gun muzzle
    _shootOrigin
      .copy(GUN_OFFSET_R)
      .applyQuaternion(playerPlane.quaternion)
      .add(playerPlane.position);
    createLaser(_shootOrigin, _shootDir, 'player', PLAYER_NAME);
    // Left gun muzzle
    _shootOrigin
      .copy(GUN_OFFSET_L)
      .applyQuaternion(playerPlane.quaternion)
      .add(playerPlane.position);
    createLaser(_shootOrigin, _shootDir, 'player', PLAYER_NAME);
    playLaserSound(true);
  }
}

export function playerDeath(): void {
  createExplosion(playerPlane.position.clone(), 4);
  addKillFeedEntry(state.lastAttacker || '?', PLAYER_NAME, 'enemy', 'player');

  state.lives--;
  if (state.lives <= 0) {
    state.running = false;
    document.getElementById('final-score')!.textContent = `Счёт: ${state.score}`;
    (document.getElementById('game-over')! as HTMLElement).style.display = 'flex';
    return;
  }

  showMessage(`СБИТ! Жизней: ${state.lives}`, 2);
  playerPlane.position.set(0, 0, 0);
  playerPlane.quaternion.identity();
  playerRotation.pitch = 0;
  playerRotation.yaw = 0;
  playerRotation.roll = 0;
  state.playerHealth = state.maxHealth;
  state.speed = state.baseSpeed;
  state.invulnTimer = 3;
  state.damageFlash = 0;
  state.lastAttacker = '';
  camera.position.set(-14, 5, 0);
  camera.lookAt(playerPlane.position);
}
