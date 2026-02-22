import * as THREE from 'three';
import { updateEngineHum } from '../../audio/sound';
import { camera } from '../../scene/setup';
import { state } from '../../state';
import { playerPlane, playerRotation } from '../../systems/player';

const _tmpVec = new THREE.Vector3();
const _tmpVec2 = new THREE.Vector3();
const _tmpVec3 = new THREE.Vector3();
const _tmpQuat = new THREE.Quaternion();

export function updateExplorationPlayer(dt: number): void {
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

  // Visual exhaust feedback
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

  // Camera follow
  const camOffset = _tmpVec2.set(-10.5, 3.75, 0).applyQuaternion(playerPlane.quaternion);
  const camTarget = _tmpVec3.copy(playerPlane.position).add(camOffset);
  camera.position.lerp(camTarget, 5 * dt);
  const lookTarget = _tmpVec2.copy(playerPlane.position).add(forward.multiplyScalar(20));
  const up = _tmpVec3.set(0, 1, 0).applyQuaternion(playerPlane.quaternion);
  camera.up.lerp(up, 3 * dt).normalize();
  camera.lookAt(lookTarget);
}
