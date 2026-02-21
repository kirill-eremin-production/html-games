import * as THREE from 'three';

// Shared across all fighters (team-independent)
export const canopyMat = new THREE.MeshPhongMaterial({
  color: 0x4488cc,
  emissive: 0x224466,
  emissiveIntensity: 0.3,
  transparent: true,
  opacity: 0.5,
  shininess: 100,
});

export const noseMat = new THREE.MeshPhongMaterial({
  color: 0xaabbcc,
  emissive: 0x334455,
  emissiveIntensity: 0.15,
});

// Per-team factories (each team gets unique material instances)
export function createBodyMat(color: number): THREE.MeshPhongMaterial {
  return new THREE.MeshPhongMaterial({ color, emissive: color, emissiveIntensity: 0.2 });
}

export function createAccentMat(color: number): THREE.MeshPhongMaterial {
  const c = new THREE.Color(color);
  return new THREE.MeshPhongMaterial({
    color: c.clone().multiplyScalar(0.7),
    emissive: c,
    emissiveIntensity: 0.1,
  });
}

export function createExhaustMat(teamColor: number): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({
    color: teamColor,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
}

export function createGlowHaloMat(teamColor: number): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({
    color: teamColor,
    transparent: true,
    opacity: 0.25,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
}
