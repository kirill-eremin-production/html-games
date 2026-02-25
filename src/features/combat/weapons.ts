import { playLaserSound } from '@/shared/audio';
import { WEAPON_CONFIG } from '@/shared/config/weapons';
import { Quaternion, Vector3 } from '@/shared/core';
import { world } from '@/shared/ecs/combat-world';
import { addDirectionNoise } from '@/shared/lib/math';

import { ProjectileComponent } from '@/entities/combat/projectile';
import { destroyEntityWithVisuals } from '@/entities/ecs-adapters/entity-cleanup';
import { GUN_OFFSET_L, GUN_OFFSET_R } from '@/entities/objects/space-ships';
import { TransformComponent } from '@/entities/physics/transform';
import { VisualComponent } from '@/entities/rendering/visual';
import { LifetimeComponent } from '@/entities/stats/lifetime';
import { TeamComponent } from '@/entities/stats/team';

const W = WEAPON_CONFIG;

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
  const color = isPlayer ? W.playerLaserColor : isEnemy ? W.enemyLaserColor : W.allyLaserColor;

  _laserDir.copyFrom(direction).normalize();
  _laserQuat.setFromUnitVectors(_laserAxis, _laserDir);

  const speed = isEnemy ? W.enemyLaserSpeed : W.playerLaserSpeed;
  const velocity = new Vector3().copyFrom(_laserDir).scaleInPlace(speed);
  const damage = isPlayer ? W.playerDamage : isEnemy ? W.enemyDamage : W.allyDamage;

  const id = world.createEntity();
  world.addComponent(
    id,
    new TransformComponent(new Vector3().copyFrom(origin), new Quaternion().copyFrom(_laserQuat)),
  );
  world.addComponent(id, new VisualComponent('projectile', color, 0, isEnemy ? 'enemy' : 'ally'));
  world.addComponent(id, new ProjectileComponent(velocity, damage, shooterName || ''));
  world.addComponent(id, new LifetimeComponent(W.laserLife));
  world.addComponent(id, new TeamComponent(team));
}

/** Удаляет самые старые снаряды если превышен лимит */
export function cleanupExcessBullets(): void {
  const projectiles = world.query(ProjectileComponent);
  const total = projectiles.length;
  if (total > W.maxBullets) {
    const removeCount = total - W.cleanupTarget;
    for (let i = 0; i < removeCount && i < projectiles.length; i++) {
      destroyEntityWithVisuals(projectiles[i].entity);
    }
  }
}

const _fShootDir = new Vector3();
const _fBulletPos = new Vector3();
let _fGunToggle = false;

export function shootFromFighter(
  fighterTransform: TransformComponent,
  dirToTarget: Vector3,
  team: BulletTeam,
  name: string,
  playerPos: Vector3,
): void {
  _fShootDir.copyFrom(dirToTarget);
  addDirectionNoise(_fShootDir, W.fighterShotSpread);
  _fGunToggle = !_fGunToggle;
  const offset = _fGunToggle ? GUN_OFFSET_R : GUN_OFFSET_L;
  _fBulletPos
    .copyFrom(offset)
    .applyQuaternion(fighterTransform.quaternion)
    .add(fighterTransform.position);
  createLaser(_fBulletPos, _fShootDir, team, name);
  if (fighterTransform.position.distanceToSquared(playerPos) < W.audioDistSq) {
    playLaserSound(false);
  }
}
