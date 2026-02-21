import * as THREE from 'three';
import { playLaserSound } from '../audio/sound';
import { GUN_OFFSET_L, GUN_OFFSET_R } from '../scene/models';
import { scene } from '../scene/setup';
import { state } from '../state';
import type { LaserData } from '../types';

const laserGeoAlly = new THREE.CylinderGeometry(0.15, 0.15, 5, 4);
laserGeoAlly.rotateZ(Math.PI / 2);

const laserGeoEnemy = new THREE.CylinderGeometry(0.18, 0.18, 5, 4);
laserGeoEnemy.rotateZ(Math.PI / 2);

const laserMatPlayer = new THREE.MeshBasicMaterial({
  color: 0x00ffcc,
  blending: THREE.AdditiveBlending,
  transparent: true,
});
const laserMatAlly = new THREE.MeshBasicMaterial({
  color: 0x44ff88,
  blending: THREE.AdditiveBlending,
  transparent: true,
});
const laserMatEnemy = new THREE.MeshBasicMaterial({
  color: 0xff3300,
  blending: THREE.AdditiveBlending,
  transparent: true,
});

const _laserAxis = new THREE.Vector3(1, 0, 0);
const _laserQuat = new THREE.Quaternion();
const _laserDir = new THREE.Vector3();

export function createLaser(
  origin: THREE.Vector3,
  direction: THREE.Vector3,
  team: LaserData['team'],
  shooterName: string,
): LaserData {
  const isEnemy = team === 'enemy';
  const isPlayer = team === 'player';
  const geo = isEnemy ? laserGeoEnemy : laserGeoAlly;
  const mat = isPlayer ? laserMatPlayer : isEnemy ? laserMatEnemy : laserMatAlly;

  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.copy(origin);
  _laserDir.copy(direction).normalize();
  _laserQuat.setFromUnitVectors(_laserAxis, _laserDir);
  mesh.quaternion.copy(_laserQuat);
  scene.add(mesh);

  const speed = isEnemy ? 250 : 400;
  const data: LaserData = {
    mesh,
    velocity: new THREE.Vector3().copy(_laserDir).multiplyScalar(speed),
    life: 2.0,
    team,
    damage: isPlayer ? 15 : isEnemy ? 10 : 10,
    shooterName: shooterName || '',
  };

  if (team === 'player') state.bullets.push(data);
  else if (team === 'ally') state.allyBullets.push(data);
  else state.enemyBullets.push(data);

  return data;
}

export function cleanupExcessBullets(): void {
  const total = state.bullets.length + state.allyBullets.length + state.enemyBullets.length;
  if (total > 200) {
    const arrays = [state.bullets, state.allyBullets, state.enemyBullets];
    arrays.sort((a, b) => b.length - a.length);
    const target = arrays[0];
    const removeCount = total - 160;
    const toRemove = Math.min(removeCount, target.length);
    for (let i = 0; i < toRemove; i++) {
      scene.remove(target[i].mesh);
    }
    target.splice(0, toRemove);
  }
}

const _fShootDir = new THREE.Vector3();
const _fBulletPos = new THREE.Vector3();
const AUDIO_DIST_SQ = 300 * 300;
let _fGunToggle = false;

export function shootFromFighter(
  fighter: THREE.Group,
  dirToTarget: THREE.Vector3,
  team: LaserData['team'],
  name: string,
  playerPlane: THREE.Group,
): void {
  _fShootDir.copy(dirToTarget);
  _fShootDir.x += (Math.random() - 0.5) * 0.05;
  _fShootDir.y += (Math.random() - 0.5) * 0.05;
  _fShootDir.z += (Math.random() - 0.5) * 0.05;
  _fShootDir.normalize();
  // Alternate between left and right gun pods
  _fGunToggle = !_fGunToggle;
  const offset = _fGunToggle ? GUN_OFFSET_R : GUN_OFFSET_L;
  _fBulletPos.copy(offset).applyQuaternion(fighter.quaternion).add(fighter.position);
  createLaser(_fBulletPos, _fShootDir, team, name);
  if (fighter.position.distanceToSquared(playerPlane.position) < AUDIO_DIST_SQ) {
    playLaserSound(false);
  }
}
