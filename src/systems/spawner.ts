import * as THREE from 'three';
import { FIGHTER_HP } from '../constants';
import { addHealthBar, createFighter } from '../scene/models';
import { scene } from '../scene/setup';
import { nextAllyName, nextEnemyName, state } from '../state';
import { playerPlane } from './player';

export function spawnAlly(near: THREE.Vector3): void {
  const mesh = createFighter(0x33cc77, 0x00ffaa);
  scene.add(mesh);
  const offset = new THREE.Vector3(
    (Math.random() - 0.5) * 200,
    (Math.random() - 0.5) * 100,
    (Math.random() - 0.5) * 200,
  );
  mesh.position.copy(near).add(offset);
  mesh.quaternion.copy(playerPlane.quaternion);
  const hb = addHealthBar(mesh, 0x00ff44);
  const name = nextAllyName();
  state.allies.push({
    mesh,
    name,
    healthBar: hb.bar,
    healthFill: hb.fill,
    health: FIGHTER_HP,
    maxHealth: FIGHTER_HP,
    speed: 55 + Math.random() * 20,
    shootTimer: 1 + Math.random() * 2,
    ai: { state: 'chase', timer: 0, evadeDir: new THREE.Vector3(), target: null },
  });
}

export function spawnEnemy(near: THREE.Vector3): void {
  const colors = [0xdd3333, 0xcc2222, 0xbb4411, 0xee4422];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const mesh = createFighter(color, 0xff3300);
  scene.add(mesh);
  const offset = new THREE.Vector3(
    (Math.random() - 0.5) * 300,
    (Math.random() - 0.5) * 150,
    (Math.random() - 0.5) * 300,
  );
  mesh.position.copy(near).add(offset);
  const hb = addHealthBar(mesh, 0xff0000);
  const name = nextEnemyName();
  state.enemies.push({
    mesh,
    name,
    healthBar: hb.bar,
    healthFill: hb.fill,
    health: FIGHTER_HP,
    maxHealth: FIGHTER_HP,
    speed: 45 + Math.random() * 20,
    shootTimer: 2 + Math.random() * 3,
    ai: { state: 'chase', timer: 0, evadeDir: new THREE.Vector3(), target: null },
  });
}

export function updateRespawnQueue(dt: number): void {
  for (let i = state.respawnQueue.length - 1; i >= 0; i--) {
    state.respawnQueue[i].timer -= dt;
    if (state.respawnQueue[i].timer <= 0) {
      const entry = state.respawnQueue.splice(i, 1)[0];
      if (entry.team === 'ally') {
        spawnAlly(playerPlane.position);
      } else {
        let spawnPos = new THREE.Vector3(1500, 0, 0);
        const livingShips = state.capitalShips.filter((cs) => cs.alive);
        if (livingShips.length > 0) {
          spawnPos =
            livingShips[Math.floor(Math.random() * livingShips.length)].mesh.position.clone();
        }
        spawnEnemy(spawnPos);
      }
    }
  }
}
