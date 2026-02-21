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
      const targets: THREE.Vector3[] = [];
      const shipPos = cs.mesh.position;
      if (shipPos.distanceTo(playerPlane.position) < 800)
        targets.push(playerPlane.position.clone());
      for (const a of state.allies) {
        if (shipPos.distanceTo(a.mesh.position) < 600) targets.push(a.mesh.position.clone());
      }
      if (targets.length === 0) {
        updateCapitalShipVisuals(cs, dt);
        continue;
      }

      const tgt = targets[Math.floor(Math.random() * targets.length)];
      const dir = tgt.sub(shipPos).normalize();
      const bridgeSub = cs.subsystems[1];
      const inaccuracy = bridgeSub.health <= 0 ? 0.4 : 0.15;
      dir.x += (Math.random() - 0.5) * inaccuracy;
      dir.y += (Math.random() - 0.5) * inaccuracy;
      dir.z += (Math.random() - 0.5) * inaccuracy;
      dir.normalize();

      const shipName = `Корабль-${cs.mesh.userData.index + 1}`;
      const shots = 2 + Math.floor(Math.random() * 2);
      for (let i = 0; i < shots; i++) {
        const offset = new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 20,
        );
        const origin = shipPos.clone().add(offset);
        const shotDir = dir.clone();
        shotDir.x += (Math.random() - 0.5) * 0.05;
        shotDir.y += (Math.random() - 0.5) * 0.05;
        shotDir.z += (Math.random() - 0.5) * 0.05;
        shotDir.normalize();
        createLaser(origin, shotDir, 'enemy', shipName);
      }
      if (shipPos.distanceTo(playerPlane.position) < 600) playLaserSound(false);
    }
    updateCapitalShipVisuals(cs, dt);
  }
}
