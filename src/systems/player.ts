import * as THREE from 'three';
import { playLaserSound, updateEngineHum } from '../audio/sound';
import { PLAYER_CONFIG } from '../config/player';
import { PLAYER_NAME } from '../constants';
import { actions, aim } from '../input';
import { GUN_OFFSET_L, GUN_OFFSET_R } from '../scene/models';
import { camera } from '../scene/setup';
import { state } from '../state';
import { showMessage } from '../ui/hud';
import { addKillFeedEntry } from '../ui/kill-feed';
import { createExplosion } from './explosions';
import type { GameSystem } from './types';
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
  const P = PLAYER_CONFIG;
  const mx = aim.x,
    my = aim.y;
  const applyDZ = (v: number) => {
    const a = Math.abs(v);
    return a < P.mouseDeadZone ? 0 : Math.sign(v) * ((a - P.mouseDeadZone) / (1 - P.mouseDeadZone));
  };
  const mxAdj = applyDZ(mx),
    myAdj = applyDZ(my);
  let pitchInput = -myAdj,
    yawInput = -mxAdj,
    rollInput = -mxAdj * P.rollFromMouse;
  if (actions.rollLeft) rollInput -= P.keyRollStrength;
  if (actions.rollRight) rollInput += P.keyRollStrength;

  if (state.speedDecay) {
    // Combat: accelerate/decelerate with decay to baseSpeed
    if (actions.thrust || actions.boost) {
      state.speed = Math.min(state.speed + P.accelerateRate * dt, state.boostSpeed);
    } else if (actions.brake) {
      state.speed = Math.max(state.speed - P.decelerateRate * dt, P.minSpeed);
    } else {
      state.speed += (state.baseSpeed - state.speed) * P.speedDecayRate * dt;
    }
  } else {
    // Exploration: speed maintained, no decay
    const accelRate = state.boostSpeed * P.explorationAccelFraction;
    if (actions.thrust || actions.boost) {
      state.speed = Math.min(state.speed + accelRate * dt, state.boostSpeed);
    } else if (actions.brake) {
      state.speed = Math.max(state.speed - accelRate * dt, 0);
    }
  }

  playerRotation.pitch += pitchInput * P.pitchSpeed * dt;
  playerRotation.roll += rollInput * P.rollSpeed * dt;
  playerRotation.yaw += yawInput * P.yawSpeed * dt;
  playerRotation.pitch *= 1 - P.pitchDamping * dt;
  playerRotation.roll *= 1 - P.rollDamping * dt;
  playerRotation.yaw *= 1 - P.yawDamping * dt;

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
  const exhaustOpacity = P.exhaustOpacityBase + speedRatio * P.exhaustOpacityRange;
  const exhaustScale = P.exhaustScaleBase + speedRatio * P.exhaustScaleRange;
  const glowOpacity = P.glowOpacityBase + speedRatio * P.glowOpacityRange;
  const glowScale = P.glowScaleBase + speedRatio * P.glowScaleRange;
  for (const name of ['exhaust', 'exhaust_L'] as const) {
    const m = playerPlane.getObjectByName(name) as THREE.Mesh | undefined;
    if (m) {
      (m.material as THREE.MeshBasicMaterial).opacity = exhaustOpacity;
      m.scale.setScalar(exhaustScale);
    }
  }
  for (const name of ['glow', 'glow_L'] as const) {
    const m = playerPlane.getObjectByName(name) as THREE.Mesh | undefined;
    if (m) {
      (m.material as THREE.MeshBasicMaterial).opacity = glowOpacity;
      m.scale.setScalar(glowScale);
    }
  }
  updateEngineHum(speedRatio);

  let camBack: number, camUp: number, lookAhead: number;
  if (state.speedDecay) {
    camBack = P.combatCamBack;
    camUp = P.combatCamUp;
    lookAhead = P.combatLookAhead;
  } else {
    const t = state.boostSpeed > 0 ? state.speed / state.boostSpeed : 0;
    camBack = P.explCamBackBase + t * P.explCamBackRange;
    camUp = P.explCamUpBase + t * P.explCamUpRange;
    lookAhead = P.explLookBase + t * P.explLookRange;
  }
  const camOffset = _tmpVec2.set(camBack, camUp, 0).applyQuaternion(playerPlane.quaternion);
  const camTarget = _tmpVec3.copy(playerPlane.position).add(camOffset);
  const cameraSmoothing = Math.max(
    P.cameraSmoothMin,
    P.cameraSmoothBase + state.speed * P.cameraSmoothSpeedFactor,
  );
  camera.position.lerp(camTarget, 1 - Math.exp(-cameraSmoothing * dt));
  const lookTarget = _tmpVec2.copy(playerPlane.position).add(forward.multiplyScalar(lookAhead));
  const up = _tmpVec3.set(0, 1, 0).applyQuaternion(playerPlane.quaternion);
  camera.up.lerp(up, P.cameraUpLerp * dt).normalize();
  camera.lookAt(lookTarget);

  if (state.invulnTimer > 0) {
    state.invulnTimer -= dt;
    playerPlane.visible = Math.floor(state.invulnTimer * P.invulnBlinkRate) % 2 === 0;
  } else {
    playerPlane.visible = true;
  }

  state.noDamageTimer += dt;
  if (state.noDamageTimer >= P.healthRegenDelay && state.playerHealth < state.maxHealth) {
    state.playerHealth = Math.min(
      state.maxHealth,
      state.playerHealth + state.maxHealth * P.healthRegenRate * dt,
    );
  }

  state.shootCooldown -= dt;
  if (actions.fire && state.shootCooldown <= 0) {
    state.shootCooldown = P.shootCooldown;
    _shootAim.set(aim.x, -aim.y, 0.5).unproject(camera);
    _shootDir.copy(_shootAim).sub(camera.position).normalize();
    _shootOrigin
      .copy(GUN_OFFSET_R)
      .applyQuaternion(playerPlane.quaternion)
      .add(playerPlane.position);
    createLaser(_shootOrigin, _shootDir, 'player', PLAYER_NAME);
    _shootOrigin
      .copy(GUN_OFFSET_L)
      .applyQuaternion(playerPlane.quaternion)
      .add(playerPlane.position);
    createLaser(_shootOrigin, _shootDir, 'player', PLAYER_NAME);
    playLaserSound(true);
  }
}

// ── GameSystem adapter ──────────────────────────────────────────────────────

export const playerSystem: GameSystem = {
  id: 'player',
  update(dt) {
    updatePlayer(dt);
  },
};

export function playerDeath(): void {
  const P = PLAYER_CONFIG;
  createExplosion(playerPlane.position.clone(), P.deathExplosionSize);
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
  state.invulnTimer = P.invulnDuration;
  state.damageFlash = 0;
  state.lastAttacker = '';
  camera.position.set(P.combatCamBack, P.combatCamUp, 0);
  camera.lookAt(playerPlane.position);
}
