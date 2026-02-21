import * as THREE from 'three';
import { playExplosionSound } from '../audio/sound';
import { scene } from '../scene/setup';
import { state } from '../state';

export const destroyedSubMat = new THREE.MeshBasicMaterial({
  color: 0x111111,
  transparent: true,
  opacity: 0.4,
});

// Shared geometry for all explosion particles (scaled via mesh.scale)
const explosionGeo = new THREE.SphereGeometry(1, 4, 3);
const explosionColors = [0xff4400, 0xff6600, 0xff8800, 0xffaa00, 0x00ccff, 0x444444];

// Object pool for explosion particle meshes
const particlePool: THREE.Mesh[] = [];

function acquireParticle(): THREE.Mesh {
  const mesh = particlePool.pop();
  if (mesh) {
    mesh.visible = true;
    (mesh.material as THREE.MeshBasicMaterial).opacity = 1;
    return mesh;
  }
  return new THREE.Mesh(
    explosionGeo,
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 1 }),
  );
}

function releaseParticle(mesh: THREE.Mesh): void {
  mesh.visible = false;
  scene.remove(mesh);
  particlePool.push(mesh);
}

export function createExplosion(position: THREE.Vector3, size = 1): void {
  playExplosionSound(size);
  const count = 3 + Math.floor(Math.random() * 3);
  const particles: { mesh: THREE.Mesh; velocity: THREE.Vector3; life: number }[] = [];
  for (let i = 0; i < count; i++) {
    const s = (0.5 + Math.random() * 1.5) * size;
    const m = acquireParticle();
    (m.material as THREE.MeshBasicMaterial).color.setHex(
      explosionColors[Math.floor(Math.random() * explosionColors.length)],
    );
    m.position.copy(position);
    m.scale.setScalar(s);
    scene.add(m);
    const vel = new THREE.Vector3(
      (Math.random() - 0.5) * 60 * size,
      (Math.random() - 0.5) * 60 * size,
      (Math.random() - 0.5) * 60 * size,
    );
    particles.push({ mesh: m, velocity: vel, life: 0.4 + Math.random() * 0.8 });
  }
  state.explosions.push({ particles, timer: 1.2 });
}

export function updateExplosions(dt: number): void {
  for (let i = state.explosions.length - 1; i >= 0; i--) {
    const exp = state.explosions[i];
    exp.timer -= dt;
    for (let j = exp.particles.length - 1; j >= 0; j--) {
      const p = exp.particles[j];
      p.mesh.position.addScaledVector(p.velocity, dt);
      p.velocity.multiplyScalar(1 - 2 * dt);
      p.life -= dt;
      (p.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, p.life);
      p.mesh.scale.multiplyScalar(1 - 0.5 * dt);
      if (p.life <= 0) {
        releaseParticle(p.mesh);
        exp.particles.splice(j, 1);
      }
    }
    if (exp.timer <= 0) {
      for (const p of exp.particles) {
        releaseParticle(p.mesh);
      }
      state.explosions.splice(i, 1);
    }
  }
}
