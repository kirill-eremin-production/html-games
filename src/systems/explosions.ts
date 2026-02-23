import { Color4 } from '@babylonjs/core/Maths/math.color';
import { Vector3 as BVector3 } from '@babylonjs/core/Maths/math.vector';
import { ParticleSystem } from '@babylonjs/core/Particles/particleSystem';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { playExplosionSound } from '../audio/sound';
import { COMBAT_CONSTANTS } from '../config/combat';
import { type Vector3, createUnlitMaterial } from '../core';
import { scene } from '../scene/setup';
import type { GameSystem } from './types';

const C = COMBAT_CONSTANTS;

export const destroyedSubMat = createUnlitMaterial({
  color: 0x111111,
  transparent: true,
  opacity: 0.4,
});

// ── Shared particle texture (radial gradient circle) ─────────────────────

let _tex: Texture | null = null;

function particleTexture(): Texture {
  if (_tex) return _tex;
  const sz = 64;
  const cvs = document.createElement('canvas');
  cvs.width = sz;
  cvs.height = sz;
  const ctx = cvs.getContext('2d')!;
  const h = sz / 2;
  const g = ctx.createRadialGradient(h, h, 0, h, h, h);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.4, 'rgba(255,255,255,0.8)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, sz, sz);
  _tex = new Texture(cvs.toDataURL(), scene);
  return _tex;
}

// ── Active particle systems (for cleanup on mode exit) ───────────────────

const active = new Set<ParticleSystem>();

// ── Public API ───────────────────────────────────────────────────────────

export function createExplosion(position: Vector3, size = 1): void {
  playExplosionSound(size);

  const count =
    C.explosionParticleMin + Math.floor(Math.random() * C.explosionParticleRandomExtra);

  const ps = new ParticleSystem('explosion', count + 2, scene);
  ps.particleTexture = particleTexture();

  // Emit from a point
  ps.emitter = new BVector3(position.x, position.y, position.z);
  ps.minEmitBox = BVector3.Zero();
  ps.maxEmitBox = BVector3.Zero();

  // Real-time seconds (default 0.01 runs ~60× slower)
  ps.updateSpeed = 1 / 60;

  // Particle size
  ps.minSize = C.explosionScaleBase * size;
  ps.maxSize = (C.explosionScaleBase + C.explosionScaleRange) * size;

  // Lifetime (seconds)
  ps.minLifeTime = C.explosionLifeBase;
  ps.maxLifeTime = C.explosionLifeBase + C.explosionLifeRange;

  // Velocity: each axis independently random in [-v, v] units/s
  const v = (C.explosionVelocityFactor / 2) * size;
  ps.direction1 = new BVector3(-v, -v, -v);
  ps.direction2 = new BVector3(v, v, v);
  ps.minEmitPower = 1;
  ps.maxEmitPower = 1;

  // Colors: warm start → transparent end
  ps.color1 = new Color4(1, 0.27, 0, 1); // orange-red
  ps.color2 = new Color4(1, 0.67, 0, 1); // amber
  ps.colorDead = new Color4(0.27, 0.27, 0.27, 0); // gray, transparent

  // Additive blending for glow
  ps.blendMode = ParticleSystem.BLENDMODE_ADD;

  // Velocity drag (matches original velocity *= 1 - 2*dt)
  ps.addDragGradient(0, C.explosionVelocityDecay);
  ps.addDragGradient(1, C.explosionVelocityDecay);

  // No gravity (space)
  ps.gravity = BVector3.Zero();

  // Burst emit, then auto-stop & auto-dispose
  ps.emitRate = 0;
  ps.manualEmitCount = count;
  ps.targetStopDuration = 0.1;
  ps.disposeOnStop = true;

  active.add(ps);
  ps.onDisposeObservable.addOnce(() => active.delete(ps));

  ps.start();
}

// ── GameSystem adapter ──────────────────────────────────────────────────

export const explosionSystem: GameSystem = {
  id: 'explosions',
  update() {
    // BJS ParticleSystem updates automatically via scene.render()
  },
  cleanup() {
    for (const ps of active) ps.dispose();
    active.clear();
  },
};
