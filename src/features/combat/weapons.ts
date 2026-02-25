import { playLaserSound } from '@/shared/audio';
import { WEAPON_CONFIG } from '@/shared/config/weapons';
import {
  Quaternion,
  TransformNode,
  Vector3,
  addToScene,
  createAdditiveMaterial,
  createCylinderGeometry,
  createMesh,
} from '@/shared/core';
import { world } from '@/shared/ecs/combat-world';
import { unregisterMeshEntity } from '@/shared/ecs/entity-index';
import { addDirectionNoise } from '@/shared/lib/math';

import { ProjectileComponent } from '@/entities/combat/projectile';
import { createProjectileEntity } from '@/entities/ecs-adapters';
import { GUN_OFFSET_L, GUN_OFFSET_R } from '@/entities/objects/space-ships';
import { MeshComponent } from '@/entities/rendering/mesh';

const W = WEAPON_CONFIG;

const laserGeoAlly = createCylinderGeometry(
  W.allyLaserRadius,
  W.allyLaserRadius,
  W.laserLength,
  W.laserSegments,
);
laserGeoAlly.rotateZ(Math.PI / 2);

const laserGeoEnemy = createCylinderGeometry(
  W.enemyLaserRadius,
  W.enemyLaserRadius,
  W.laserLength,
  W.laserSegments,
);
laserGeoEnemy.rotateZ(Math.PI / 2);

const laserMatPlayer = createAdditiveMaterial({
  color: W.playerLaserColor,
  transparent: true,
});
const laserMatAlly = createAdditiveMaterial({
  color: W.allyLaserColor,
  transparent: true,
});
const laserMatEnemy = createAdditiveMaterial({
  color: W.enemyLaserColor,
  transparent: true,
});

const _laserAxis = new Vector3(1, 0, 0);
const _laserQuat = new Quaternion();
const _laserDir = new Vector3();

type BulletTeam = 'player' | 'ally' | 'enemy';

export function createLaser(
  origin: Vector3,
  direction: Vector3,
  team: BulletTeam,
  shooterName: string,
): void {
  const isEnemy = team === 'enemy';
  const isPlayer = team === 'player';
  const geo = isEnemy ? laserGeoEnemy : laserGeoAlly;
  const mat = isPlayer ? laserMatPlayer : isEnemy ? laserMatEnemy : laserMatAlly;

  const mesh = createMesh(geo, mat);
  mesh.renderingGroupId = 1;
  mesh.position.copyFrom(origin);
  _laserDir.copyFrom(direction).normalize();
  _laserQuat.setFromUnitVectors(_laserAxis, _laserDir);
  mesh.quaternion.copyFrom(_laserQuat);
  addToScene(mesh);

  const speed = isEnemy ? W.enemyLaserSpeed : W.playerLaserSpeed;
  const velocity = new Vector3().copyFrom(_laserDir).scaleInPlace(speed);
  const damage = isPlayer ? W.playerDamage : isEnemy ? W.enemyDamage : W.allyDamage;

  createProjectileEntity(world, mesh, velocity, W.laserLife, team, damage, shooterName || '');
}

/** Удаляет самые старые снаряды если превышен лимит */
export function cleanupExcessBullets(): void {
  const projectiles = world.query(ProjectileComponent, MeshComponent);
  const total = projectiles.length;
  if (total > W.maxBullets) {
    const removeCount = total - W.cleanupTarget;
    for (let i = 0; i < removeCount && i < projectiles.length; i++) {
      const {
        entity,
        components: [, mesh],
      } = projectiles[i];
      unregisterMeshEntity(mesh.mesh);
      mesh.mesh.dispose();
      world.destroyEntity(entity);
    }
  }
}

const _fShootDir = new Vector3();
const _fBulletPos = new Vector3();
let _fGunToggle = false;

export function shootFromFighter(
  fighter: TransformNode,
  dirToTarget: Vector3,
  team: BulletTeam,
  name: string,
  playerPlane: TransformNode,
): void {
  _fShootDir.copyFrom(dirToTarget);
  addDirectionNoise(_fShootDir, W.fighterShotSpread);
  _fGunToggle = !_fGunToggle;
  const offset = _fGunToggle ? GUN_OFFSET_R : GUN_OFFSET_L;
  _fBulletPos.copyFrom(offset).applyQuaternion(fighter.quaternion).add(fighter.position);
  createLaser(_fBulletPos, _fShootDir, team, name);
  if (fighter.position.distanceToSquared(playerPlane.position) < W.audioDistSq) {
    playLaserSound(false);
  }
}
