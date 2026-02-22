import * as THREE from 'three';
import { playExplosionSound } from '../audio/sound';
import { COMBAT_CONSTANTS } from '../config/combat';
import { scene } from '../scene/setup';
import { state } from '../state';
import type { GameSystem } from './types';

const C = COMBAT_CONSTANTS;

export const destroyedSubMat = new THREE.MeshBasicMaterial({
  color: 0x111111,
  transparent: true,
  opacity: 0.4,
});

// Shared geometry for all explosion particles (scaled via mesh.scale)
const explosionGeo = new THREE.SphereGeometry(1, 4, 3);

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
  const count = C.explosionParticleMin + Math.floor(Math.random() * C.explosionParticleRandomExtra);
  const particles: { mesh: THREE.Mesh; velocity: THREE.Vector3; life: number }[] = [];
  for (let i = 0; i < count; i++) {
    const s = (C.explosionScaleBase + Math.random() * C.explosionScaleRange) * size;
    const m = acquireParticle();
    (m.material as THREE.MeshBasicMaterial).color.setHex(
      C.explosionColors[Math.floor(Math.random() * C.explosionColors.length)],
    );
    m.position.copy(position);
    m.scale.setScalar(s);
    scene.add(m);
    const vel = new THREE.Vector3(
      (Math.random() - 0.5) * C.explosionVelocityFactor * size,
      (Math.random() - 0.5) * C.explosionVelocityFactor * size,
      (Math.random() - 0.5) * C.explosionVelocityFactor * size,
    );
    particles.push({
      mesh: m,
      velocity: vel,
      life: C.explosionLifeBase + Math.random() * C.explosionLifeRange,
    });
  }
  state.explosions.push({ particles, timer: C.explosionTimer });
}

export function updateExplosions(dt: number): void {
  for (let i = state.explosions.length - 1; i >= 0; i--) {
    const exp = state.explosions[i];
    exp.timer -= dt;
    for (let j = exp.particles.length - 1; j >= 0; j--) {
      const p = exp.particles[j];
      p.mesh.position.addScaledVector(p.velocity, dt);
      p.velocity.multiplyScalar(1 - C.explosionVelocityDecay * dt);
      p.life -= dt;
      (p.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, p.life);
      p.mesh.scale.multiplyScalar(1 - C.explosionScaleDecay * dt);
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

// ── GameSystem adapter ──────────────────────────────────────────────────────

export const explosionSystem: GameSystem = {
  id: 'explosions',
  update(dt) {
    updateExplosions(dt);
  },
  cleanup() {
    for (const exp of state.explosions) {
      for (const p of exp.particles) releaseParticle(p.mesh);
    }
    state.explosions = [];
  },
};
