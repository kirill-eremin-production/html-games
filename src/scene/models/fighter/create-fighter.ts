import * as THREE from 'three';
import {
  canopyGeo,
  exhaustGeo,
  fuselageGeo,
  glowHaloGeo,
  nacelleGeo,
  noseGeo,
  tailFinGeo,
  weaponPodGeo,
  wingGeo,
  wingletGeo,
} from './geometries';
import {
  canopyMat,
  createAccentMat,
  createBodyMat,
  createExhaustMat,
  createGlowHaloMat,
  noseMat,
} from './materials';

export function createFighter(color: number, teamColor: number): THREE.Group {
  const group = new THREE.Group();
  const bodyMat = createBodyMat(color);
  const accentMat = createAccentMat(color);
  const glowMat = createExhaustMat(teamColor);
  const haloMat = createGlowHaloMat(teamColor);

  // 1. Fuselage
  const body = new THREE.Mesh(fuselageGeo, bodyMat);
  group.add(body);

  // 2. Nose cone
  const nose = new THREE.Mesh(noseGeo, noseMat);
  nose.position.x = 4;
  group.add(nose);

  // 3. Cockpit canopy
  const canopy = new THREE.Mesh(canopyGeo, canopyMat);
  canopy.position.set(1.2, 0.3, 0);
  canopy.rotation.z = -Math.PI / 2;
  group.add(canopy);

  // 4-5. Wings
  const wingR = new THREE.Mesh(wingGeo, bodyMat);
  wingR.position.set(-0.3, 0, 2.4);
  wingR.rotation.y = -0.15;
  group.add(wingR);

  const wingL = new THREE.Mesh(wingGeo, bodyMat);
  wingL.position.set(-0.3, 0, -2.4);
  wingL.rotation.y = 0.15;
  group.add(wingL);

  // 6-7. Winglets (vertical tips)
  const wingletR = new THREE.Mesh(wingletGeo, accentMat);
  wingletR.position.set(-0.8, 0.15, 4.1);
  group.add(wingletR);

  const wingletL = new THREE.Mesh(wingletGeo, accentMat);
  wingletL.position.set(-0.8, 0.15, -4.1);
  group.add(wingletL);

  // 8-9. Under-wing weapon pods
  const podR = new THREE.Mesh(weaponPodGeo, accentMat);
  podR.position.set(0.2, -0.25, 2.0);
  group.add(podR);

  const podL = new THREE.Mesh(weaponPodGeo, accentMat);
  podL.position.set(0.2, -0.25, -2.0);
  group.add(podL);

  // 10. Dorsal tail fin
  const dorsalFin = new THREE.Mesh(tailFinGeo, bodyMat);
  dorsalFin.position.set(-2.2, 0.7, 0);
  group.add(dorsalFin);

  // 11. Ventral tail fin (smaller)
  const ventralFin = new THREE.Mesh(tailFinGeo, bodyMat);
  ventralFin.position.set(-2.2, -0.5, 0);
  ventralFin.scale.set(0.7, 0.6, 1);
  group.add(ventralFin);

  // 12-13. Engine nacelles
  const nacelleR = new THREE.Mesh(nacelleGeo, accentMat);
  nacelleR.position.set(-2.5, 0, 1.0);
  group.add(nacelleR);

  const nacelleL = new THREE.Mesh(nacelleGeo, accentMat);
  nacelleL.position.set(-2.5, 0, -1.0);
  group.add(nacelleL);

  // 14. Exhaust glow R (named 'exhaust' for player.ts getObjectByName)
  const exhaustR = new THREE.Mesh(exhaustGeo, glowMat);
  exhaustR.position.set(-3.3, 0, 1.0);
  exhaustR.name = 'exhaust';
  group.add(exhaustR);

  // 15. Exhaust glow L (shares same material instance — opacity syncs)
  const exhaustL = new THREE.Mesh(exhaustGeo, glowMat);
  exhaustL.position.set(-3.3, 0, -1.0);
  group.add(exhaustL);

  // 16. Glow halo R (named 'glow' for player.ts throttle animation)
  const haloR = new THREE.Mesh(glowHaloGeo, haloMat);
  haloR.position.set(-3.3, 0, 1.0);
  haloR.name = 'glow';
  group.add(haloR);

  // 17. Glow halo L (shares same material instance)
  const haloL = new THREE.Mesh(glowHaloGeo, haloMat);
  haloL.position.set(-3.3, 0, -1.0);
  group.add(haloL);

  return group;
}
