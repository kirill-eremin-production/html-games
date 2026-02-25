import { playLaserSound, updateEngineHum } from '@/shared/audio';
import { PLAYER_CONFIG } from '@/shared/config/player';
import { PLAYER_NAME } from '@/shared/constants';
import {
  EngineMesh,
  MeshBasicMaterial,
  Quaternion,
  Vector3,
  createTransformNode,
  getChildByName,
  vec3Unproject,
} from '@/shared/core';
import { world } from '@/shared/ecs/combat-world';
import { camera } from '@/shared/engine';
import { actions, aim } from '@/shared/input';
import { playerEntityId } from '@/shared/refs/player-entity';
import { state } from '@/shared/state';
import type { GameSystem } from '@/shared/types';

import { GUN_OFFSET_L, GUN_OFFSET_R } from '@/entities/objects/space-ships';
import { VelocityComponent } from '@/entities/physics/velocity';
import { HealthComponent } from '@/entities/stats/health';

import { createExplosion } from '@/features/combat/explosions';
import { createLaser } from '@/features/combat/weapons';
import { showMessage } from '@/features/hud/hud';
import { addKillFeedEntry } from '@/features/hud/kill-feed';

import { flightModels } from './flight-models';

export const playerPlane = createTransformNode();
export const playerRotation = { pitch: 0, yaw: 0, roll: 0 };

const _tmpVec = new Vector3();
const _tmpVec2 = new Vector3();
const _tmpVec3 = new Vector3();
const _tmpQuat = new Quaternion();
const _shootAim = new Vector3();
const _shootDir = new Vector3();
const _shootOrigin = new Vector3();

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
  const pitchInput = -myAdj,
    yawInput = -mxAdj;
  let rollInput = -mxAdj * P.rollFromMouse;
  if (actions.rollLeft) rollInput -= P.keyRollStrength;
  if (actions.rollRight) rollInput += P.keyRollStrength;

  const fm = flightModels[state.flightModel];
  const speedInput = actions.thrust || actions.boost ? 'thrust' : actions.brake ? 'brake' : 'none';
  state.speed = fm.updateSpeed(state.speed, state.baseSpeed, state.boostSpeed, speedInput, dt);

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
    const m = getChildByName(playerPlane, name) as EngineMesh | undefined;
    if (m) {
      (m.material as MeshBasicMaterial).opacity = exhaustOpacity;
      m.scaling.setAll(exhaustScale);
    }
  }
  for (const name of ['glow', 'glow_L'] as const) {
    const m = getChildByName(playerPlane, name) as EngineMesh | undefined;
    if (m) {
      (m.material as MeshBasicMaterial).opacity = glowOpacity;
      m.scaling.setAll(glowScale);
    }
  }
  updateEngineHum(speedRatio);

  const { back: camBack, up: camUp, lookAhead } = fm.cameraOffset(state.speed, state.boostSpeed);
  const camOffset = _tmpVec2.set(camBack, camUp, 0).applyQuaternion(playerPlane.quaternion);
  const camTarget = _tmpVec3.copyFrom(playerPlane.position).add(camOffset);
  const cameraSmoothing = Math.max(
    P.cameraSmoothMin,
    P.cameraSmoothBase + state.speed * P.cameraSmoothSpeedFactor,
  );
  camera.position.lerp(camTarget, 1 - Math.exp(-cameraSmoothing * dt));
  const lookTarget = _tmpVec2.copyFrom(playerPlane.position).add(forward.scaleInPlace(lookAhead));
  const up = _tmpVec3.set(0, 1, 0).applyQuaternion(playerPlane.quaternion);
  camera.upVector.lerp(up, P.cameraUpLerp * dt).normalize();
  camera.setTarget(lookTarget);

  if (state.invulnTimer > 0) {
    state.invulnTimer -= dt;
    playerPlane.setVisibleRecursive(Math.floor(state.invulnTimer * P.invulnBlinkRate) % 2 === 0);
  } else {
    playerPlane.setVisibleRecursive(true);
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
    vec3Unproject(_shootAim.set(aim.x, -aim.y, 0.5), camera);
    _shootDir.copyFrom(_shootAim).subtractInPlace(camera.position).normalize();
    _shootOrigin
      .copyFrom(GUN_OFFSET_R)
      .applyQuaternion(playerPlane.quaternion)
      .add(playerPlane.position);
    createLaser(_shootOrigin, _shootDir, 'player', PLAYER_NAME);
    _shootOrigin
      .copyFrom(GUN_OFFSET_L)
      .applyQuaternion(playerPlane.quaternion)
      .add(playerPlane.position);
    createLaser(_shootOrigin, _shootDir, 'player', PLAYER_NAME);
    playLaserSound(true);
  }

  // Синхронизируем state → ECS (регенерация, изменение скорости)
  if (playerEntityId !== 0 && world.isAlive(playerEntityId)) {
    const hc = world.getComponent(playerEntityId, HealthComponent);
    if (hc) {
      hc.current = state.playerHealth;
      hc.max = state.maxHealth;
    }
    const vc = world.getComponent(playerEntityId, VelocityComponent);
    if (vc) vc.speed = state.speed;
  }
}

// ── GameSystem adapter ──────────────────────────────────────────────────────

export const playerSystem: GameSystem = {
  id: 'player',
  update(dt) {
    updatePlayer(dt);
  },
};

/** Синхронизирует ECS HealthComponent → state.playerHealth (запускается после healthSystem) */
export const playerSyncSystem: GameSystem = {
  id: 'player-sync',
  update() {
    if (playerEntityId === 0 || !world.isAlive(playerEntityId)) return;
    const hc = world.getComponent(playerEntityId, HealthComponent);
    if (hc) state.playerHealth = hc.current;
  },
};

export function resetPlayerTransform(x = 0, y = 0, z = 0): void {
  playerPlane.position.set(x, y, z);
  playerPlane.quaternion.set(0, 0, 0, 1);
  playerRotation.pitch = 0;
  playerRotation.yaw = 0;
  playerRotation.roll = 0;
  playerPlane.setVisibleRecursive(true);
}

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
  resetPlayerTransform();
  state.playerHealth = state.maxHealth;
  state.speed = state.baseSpeed;
  state.invulnTimer = P.invulnDuration;
  state.damageFlash = 0;
  state.lastAttacker = '';
  camera.position.set(P.combatCamBack, P.combatCamUp, 0);
  camera.setTarget(playerPlane.position);

  // Синхронизируем сброс здоровья в ECS
  if (playerEntityId !== 0 && world.isAlive(playerEntityId)) {
    const hc = world.getComponent(playerEntityId, HealthComponent);
    if (hc) {
      hc.current = state.maxHealth;
      hc.max = state.maxHealth;
    }
  }
}
