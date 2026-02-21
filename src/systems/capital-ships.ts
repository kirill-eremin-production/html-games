import * as THREE from 'three';
import { playLaserSound } from '../audio/sound';
import { CAPITAL_SHIP_COUNT } from '../constants';
import { createCapitalShip } from '../scene/models';
import { scene } from '../scene/setup';
import { state } from '../state';
import { destroyedSubMat } from './explosions';
import { playerPlane } from './player';
import { createLaser } from './weapons';

export function spawnCapitalShips(): void {
  const positions = [
    new THREE.Vector3(2000, 100, 0),
    new THREE.Vector3(-1000, -200, 2200),
    new THREE.Vector3(-500, 300, -2500),
  ];
  for (let i = 0; i < CAPITAL_SHIP_COUNT; i++) {
    const ship = createCapitalShip(i);
    ship.position.copy(positions[i]);
    ship.lookAt(0, 0, 0);
    scene.add(ship);
    state.capitalShips.push({
      mesh: ship,
      subsystems: ship.userData.subsystems,
      alive: true,
      turretTimer: 2 + Math.random() * 3,
    });
  }
}

function updateCapitalShipVisuals(cs: (typeof state.capitalShips)[number], dt: number): void {
  for (const sub of cs.subsystems) {
    if (sub.health <= 0 && sub.mesh.visible) {
      sub.mesh.traverse((child) => {
        if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
          (child as THREE.Mesh).material = destroyedSubMat;
        }
      });
    }
  }
  if (cs.subsystems[0].health > 0) cs.mesh.rotation.y += 0.02 * dt;
}

const _csTargets: THREE.Vector3[] = [];
const _csDir = new THREE.Vector3();
const _csOrigin = new THREE.Vector3();
const _csShotDir = new THREE.Vector3();
const TURRET_RANGE_SQ = 800 * 800;
const ALLY_TURRET_RANGE_SQ = 600 * 600;
const AUDIO_CS_RANGE_SQ = 600 * 600;

export function updateCapitalShips(dt: number): void {
  for (const cs of state.capitalShips) {
    if (!cs.alive) continue;
    const turretSub = cs.subsystems[2];
    if (turretSub.health <= 0) {
      updateCapitalShipVisuals(cs, dt);
      continue;
    }

    cs.turretTimer -= dt;
    if (cs.turretTimer <= 0) {
      cs.turretTimer = 3 + Math.random() * 2;
      _csTargets.length = 0;
      const shipPos = cs.mesh.position;
      if (shipPos.distanceToSquared(playerPlane.position) < TURRET_RANGE_SQ)
        _csTargets.push(playerPlane.position);
      for (const a of state.allies) {
        if (shipPos.distanceToSquared(a.mesh.position) < ALLY_TURRET_RANGE_SQ)
          _csTargets.push(a.mesh.position);
      }
      if (_csTargets.length === 0) {
        updateCapitalShipVisuals(cs, dt);
        continue;
      }

      const tgt = _csTargets[Math.floor(Math.random() * _csTargets.length)];
      _csDir.copy(tgt).sub(shipPos).normalize();
      const bridgeSub = cs.subsystems[1];
      const inaccuracy = bridgeSub.health <= 0 ? 0.4 : 0.15;
      _csDir.x += (Math.random() - 0.5) * inaccuracy;
      _csDir.y += (Math.random() - 0.5) * inaccuracy;
      _csDir.z += (Math.random() - 0.5) * inaccuracy;
      _csDir.normalize();

      const shipName = `Корабль-${cs.mesh.userData.index + 1}`;
      const shots = 2 + Math.floor(Math.random() * 2);
      for (let i = 0; i < shots; i++) {
        _csOrigin.set(
          shipPos.x + (Math.random() - 0.5) * 20,
          shipPos.y + (Math.random() - 0.5) * 10,
          shipPos.z + (Math.random() - 0.5) * 20,
        );
        _csShotDir.copy(_csDir);
        _csShotDir.x += (Math.random() - 0.5) * 0.05;
        _csShotDir.y += (Math.random() - 0.5) * 0.05;
        _csShotDir.z += (Math.random() - 0.5) * 0.05;
        _csShotDir.normalize();
        createLaser(_csOrigin, _csShotDir, 'enemy', shipName);
      }
      if (shipPos.distanceToSquared(playerPlane.position) < AUDIO_CS_RANGE_SQ)
        playLaserSound(false);
    }
    updateCapitalShipVisuals(cs, dt);
  }
}
