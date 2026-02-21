import * as THREE from 'three';

// Fuselage — sleeker taper, 8 sides
export const fuselageGeo = new THREE.CylinderGeometry(0.25, 0.55, 5.5, 8);
fuselageGeo.rotateZ(Math.PI / 2);

// Nose — longer, sharper
export const noseGeo = new THREE.ConeGeometry(0.3, 2.5, 8);
noseGeo.rotateZ(-Math.PI / 2);

// Cockpit canopy — half-sphere
export const canopyGeo = new THREE.SphereGeometry(0.35, 6, 4, 0, Math.PI * 2, 0, Math.PI / 2);

// Wings
export const wingGeo = new THREE.BoxGeometry(3.2, 0.06, 3.8);

// Winglet — vertical tip on each wing
export const wingletGeo = new THREE.BoxGeometry(0.4, 0.3, 0.15);

// Under-wing weapon pod
export const weaponPodGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.8, 4);
weaponPodGeo.rotateZ(Math.PI / 2);

// Tail fin (dorsal + ventral)
export const tailFinGeo = new THREE.BoxGeometry(1.5, 1.2, 0.06);

// Engine nacelle
export const nacelleGeo = new THREE.CylinderGeometry(0.2, 0.3, 1.5, 6);
nacelleGeo.rotateZ(Math.PI / 2);

// Exhaust glow inside nacelle
export const exhaustGeo = new THREE.SphereGeometry(0.25, 4, 4);
