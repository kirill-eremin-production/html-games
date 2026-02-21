import * as THREE from 'three';
import type { SubsystemBuildResult } from '../types';

// ── Engines (subsystem index 0) ─────────────────────────────────────────────
export function buildEngines(glowMat: THREE.MeshBasicMaterial): SubsystemBuildResult {
  const group = new THREE.Group();
  const engineMat = new THREE.MeshPhongMaterial({
    color: 0x8899aa,
    emissive: 0x334455,
    emissiveIntensity: 0.15,
  });

  for (let i = 0; i < 3; i++) {
    const z = (i - 1) * 6;

    // Engine cylinder
    const eng = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 3, 8, 6), engineMat);
    eng.rotation.z = Math.PI / 2;
    eng.position.set(-44, 0, z);
    group.add(eng);

    // Exhaust glow
    const engGlow = new THREE.Mesh(new THREE.SphereGeometry(2.5, 6, 4), glowMat.clone());
    engGlow.position.set(-48, 0, z);
    group.add(engGlow);

    // Intake cowling (front of engine)
    const cowling = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 2.5, 2, 6), engineMat);
    cowling.rotation.z = Math.PI / 2;
    cowling.position.set(-39.5, 0, z);
    group.add(cowling);

    // Exhaust nozzle ring
    const nozzle = new THREE.Mesh(new THREE.TorusGeometry(2.8, 0.3, 4, 8), engineMat);
    nozzle.rotation.y = Math.PI / 2;
    nozzle.position.set(-48.2, 0, z);
    group.add(nozzle);
  }

  return {
    group,
    center: new THREE.Vector3(-44, 0, 0),
    radius: 12,
  };
}

// ── Bridge (subsystem index 1) ──────────────────────────────────────────────
export function buildBridge(): SubsystemBuildResult {
  const group = new THREE.Group();
  const bridgeMat = new THREE.MeshPhongMaterial({
    color: 0x778899,
    emissive: 0x334455,
    emissiveIntensity: 0.15,
  });

  // Main bridge structure
  const bridge = new THREE.Mesh(new THREE.BoxGeometry(10, 8, 8), bridgeMat);
  bridge.position.set(25, 12, 0);
  group.add(bridge);

  // Bridge window
  const windowMat = new THREE.MeshBasicMaterial({
    color: 0x3366cc,
    transparent: true,
    opacity: 0.6,
  });
  const window = new THREE.Mesh(new THREE.BoxGeometry(6, 3, 9), windowMat);
  window.position.set(27, 13, 0);
  group.add(window);

  // Bridge deck floor
  const deck = new THREE.Mesh(new THREE.BoxGeometry(12, 1, 10), bridgeMat);
  deck.position.set(25, 8, 0);
  group.add(deck);

  // Antenna mast
  const mastMat = new THREE.MeshPhongMaterial({
    color: 0x99aabb,
    emissive: 0x445566,
    emissiveIntensity: 0.1,
  });
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 6, 4), mastMat);
  mast.position.set(25, 19, 0);
  group.add(mast);

  // Sensor dish on mast
  const dish = new THREE.Mesh(new THREE.ConeGeometry(1, 0.8, 6), mastMat);
  dish.position.set(25, 22.5, 0);
  dish.rotation.x = Math.PI;
  group.add(dish);

  return {
    group,
    center: new THREE.Vector3(25, 12, 0),
    radius: 8,
  };
}

// ── Turrets (subsystem index 2) ─────────────────────────────────────────────
export function buildTurrets(): SubsystemBuildResult {
  const group = new THREE.Group();
  const turretMat = new THREE.MeshPhongMaterial({
    color: 0xaa8855,
    emissive: 0x443322,
    emissiveIntensity: 0.15,
  });

  for (let side = -1; side <= 1; side += 2) {
    for (let k = 0; k < 3; k++) {
      const x = -10 + k * 15;
      const y = 7 * side;
      const z = 11 * side;

      // Turret base
      const turret = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 2, 6), turretMat);
      turret.position.set(x, y, z);
      group.add(turret);

      // Double barrels
      const barrelGeo = new THREE.CylinderGeometry(0.3, 0.3, 5, 4);
      const barrel1 = new THREE.Mesh(barrelGeo, turretMat);
      barrel1.rotation.z = Math.PI / 2;
      barrel1.position.set(x + 3, y, z + 0.5);
      group.add(barrel1);

      const barrel2 = new THREE.Mesh(barrelGeo, turretMat);
      barrel2.rotation.z = Math.PI / 2;
      barrel2.position.set(x + 3, y, z - 0.5);
      group.add(barrel2);

      // Turret shield plate
      const shield = new THREE.Mesh(new THREE.BoxGeometry(2, 1.5, 3), turretMat);
      shield.position.set(x - 1.2, y, z);
      group.add(shield);
    }
  }

  return {
    group,
    center: new THREE.Vector3(0, 0, 0),
    radius: 18,
  };
}

// ── Communications (subsystem index 3) ──────────────────────────────────────
export function buildComms(): SubsystemBuildResult {
  const group = new THREE.Group();
  const commsMat = new THREE.MeshPhongMaterial({
    color: 0x99bbdd,
    emissive: 0x446688,
    emissiveIntensity: 0.15,
  });

  // Main dish
  const dish = new THREE.Mesh(new THREE.ConeGeometry(4, 2, 8), commsMat);
  dish.position.set(-15, 14, 0);
  dish.rotation.x = Math.PI;
  group.add(dish);

  // Secondary dish (smaller)
  const dish2 = new THREE.Mesh(new THREE.ConeGeometry(2, 1.2, 6), commsMat);
  dish2.position.set(-12, 13, 4);
  dish2.rotation.x = Math.PI;
  group.add(dish2);

  // Main antenna
  const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 10, 4), commsMat);
  antenna.position.set(-15, 20, 0);
  group.add(antenna);

  // Side antenna
  const antenna2 = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 7, 4), commsMat);
  antenna2.position.set(-10, 17, 3);
  antenna2.rotation.z = 0.3;
  group.add(antenna2);

  // Sensor array — 3 vertical rods
  const rodGeo = new THREE.CylinderGeometry(0.1, 0.1, 4, 3);
  for (let i = 0; i < 3; i++) {
    const rod = new THREE.Mesh(rodGeo, commsMat);
    rod.position.set(-18 + i * 2, 15, -3);
    group.add(rod);
  }

  // Main antenna light (green)
  const greenLight = new THREE.MeshBasicMaterial({ color: 0x00ff88 });
  const commsLight = new THREE.Mesh(new THREE.SphereGeometry(0.5, 4, 4), greenLight);
  commsLight.position.set(-15, 25, 0);
  group.add(commsLight);

  // Extra lights at antenna tips (amber)
  const amberLight = new THREE.MeshBasicMaterial({ color: 0xffaa22 });
  const lightGeo = new THREE.SphereGeometry(0.3, 4, 4);
  const tip1 = new THREE.Mesh(lightGeo, amberLight);
  tip1.position.set(-10, 20.5, 3);
  group.add(tip1);
  const tip2 = new THREE.Mesh(lightGeo, greenLight);
  tip2.position.set(-12, 13.8, 4);
  group.add(tip2);

  return {
    group,
    center: new THREE.Vector3(-15, 17, 0),
    radius: 10,
  };
}

// ── Hangar (subsystem index 4) ──────────────────────────────────────────────
export function buildHangar(): SubsystemBuildResult {
  const group = new THREE.Group();
  const hangarMat = new THREE.MeshPhongMaterial({
    color: 0x778888,
    emissive: 0x223333,
    emissiveIntensity: 0.12,
  });

  // Main hangar bay
  const hangarBay = new THREE.Mesh(new THREE.BoxGeometry(20, 8, 16), hangarMat);
  hangarBay.position.set(-20, -10, 0);
  group.add(hangarBay);

  // Hangar opening (dark interior)
  const openMat = new THREE.MeshBasicMaterial({
    color: 0x221133,
    transparent: true,
    opacity: 0.8,
  });
  const hangarOpen = new THREE.Mesh(new THREE.BoxGeometry(15, 6, 14), openMat);
  hangarOpen.position.set(-18, -10, 0);
  group.add(hangarOpen);

  // Interior light
  const orangeLight = new THREE.MeshBasicMaterial({ color: 0xffaa44 });
  const hangarLight = new THREE.Mesh(new THREE.SphereGeometry(0.8, 4, 4), orangeLight);
  hangarLight.position.set(-15, -10, 0);
  group.add(hangarLight);

  // Landing deck (extends from hangar opening)
  const deckMat = new THREE.MeshPhongMaterial({
    color: 0x556666,
    emissive: 0x112222,
    emissiveIntensity: 0.1,
  });
  const deck = new THREE.Mesh(new THREE.BoxGeometry(18, 0.5, 20), deckMat);
  deck.position.set(-20, -14.5, 0);
  group.add(deck);

  // Guide lights along deck edges (amber)
  const guideMat = new THREE.MeshBasicMaterial({ color: 0xffaa22 });
  const guideGeo = new THREE.SphereGeometry(0.35, 4, 4);
  const guidePositions = [
    [-12, -14, 9],
    [-20, -14, 9],
    [-28, -14, 9],
    [-12, -14, -9],
    [-20, -14, -9],
    [-28, -14, -9],
  ] as const;
  for (const [gx, gy, gz] of guidePositions) {
    const guide = new THREE.Mesh(guideGeo, guideMat);
    guide.position.set(gx, gy, gz);
    group.add(guide);
  }

  // Interior glow strip
  const glowStrip = new THREE.Mesh(
    new THREE.BoxGeometry(14, 0.5, 0.5),
    new THREE.MeshBasicMaterial({ color: 0xffaa44, transparent: true, opacity: 0.6 }),
  );
  glowStrip.position.set(-18, -7.5, 0);
  group.add(glowStrip);

  return {
    group,
    center: new THREE.Vector3(-20, -10, 0),
    radius: 12,
  };
}
