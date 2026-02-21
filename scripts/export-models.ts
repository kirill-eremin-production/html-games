/**
 * Export script: builds fighter & capital-ship models with Three.js,
 * names every mesh for runtime color application, and writes .glb files.
 *
 * Run: npx tsx scripts/export-models.ts
 */
import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import * as fs from 'node:fs';
import * as path from 'node:path';

// Polyfill FileReader for Node.js (required by GLTFExporter binary mode)
if (typeof globalThis.FileReader === 'undefined') {
  globalThis.FileReader = class FileReader extends EventTarget {
    result: ArrayBuffer | string | null = null;
    onload: ((this: FileReader) => void) | null = null;
    onloadend: ((this: FileReader) => void) | null = null;
    private _done(result: ArrayBuffer | string): void {
      this.result = result;
      if (this.onload) this.onload.call(this);
      if (this.onloadend) this.onloadend.call(this);
      this.dispatchEvent(new Event('load'));
      this.dispatchEvent(new Event('loadend'));
    }
    readAsArrayBuffer(blob: Blob): void {
      blob.arrayBuffer().then((buf) => this._done(buf));
    }
    readAsDataURL(blob: Blob): void {
      blob.arrayBuffer().then((buf) => {
        const b64 = Buffer.from(buf).toString('base64');
        this._done(`data:application/octet-stream;base64,${b64}`);
      });
    }
  } as unknown as typeof FileReader;
}

const OUT_DIR = path.resolve(import.meta.dirname, '..', 'public', 'models');

// ─── Fighter ────────────────────────────────────────────────────────────────

function buildFighter(): THREE.Group {
  const group = new THREE.Group();

  // Placeholder materials — will be swapped at runtime by mesh name prefix
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x888888 });
  const accentMat = new THREE.MeshStandardMaterial({ color: 0x666666 });
  const noseMat = new THREE.MeshStandardMaterial({
    color: 0xaabbcc,
    emissive: 0x334455,
    emissiveIntensity: 0.15,
  });
  const canopyMat = new THREE.MeshStandardMaterial({
    color: 0x4488cc,
    emissive: 0x224466,
    emissiveIntensity: 0.3,
    transparent: true,
    opacity: 0.5,
  });
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    transparent: true,
    opacity: 0.9,
  });
  const haloMat = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    transparent: true,
    opacity: 0.25,
  });

  // 1. Fuselage
  const fuselageGeo = new THREE.CylinderGeometry(0.25, 0.55, 5.5, 8);
  fuselageGeo.rotateZ(Math.PI / 2);
  const body = new THREE.Mesh(fuselageGeo, bodyMat);
  body.name = 'body_fuselage';
  group.add(body);

  // 2. Nose cone
  const noseGeo = new THREE.ConeGeometry(0.3, 2.5, 8);
  noseGeo.rotateZ(-Math.PI / 2);
  const nose = new THREE.Mesh(noseGeo, noseMat);
  nose.name = 'nose';
  nose.position.x = 4;
  group.add(nose);

  // 3. Cockpit canopy
  const canopyGeo = new THREE.SphereGeometry(0.35, 6, 4, 0, Math.PI * 2, 0, Math.PI / 2);
  const canopy = new THREE.Mesh(canopyGeo, canopyMat);
  canopy.name = 'canopy';
  canopy.position.set(1.2, 0.3, 0);
  canopy.rotation.z = -Math.PI / 2;
  group.add(canopy);

  // 4-5. Wings
  const wingGeo = new THREE.BoxGeometry(3.2, 0.06, 3.8);
  const wingR = new THREE.Mesh(wingGeo, bodyMat);
  wingR.name = 'body_wingR';
  wingR.position.set(-0.3, 0, 2.4);
  wingR.rotation.y = -0.15;
  group.add(wingR);

  const wingL = new THREE.Mesh(wingGeo, bodyMat);
  wingL.name = 'body_wingL';
  wingL.position.set(-0.3, 0, -2.4);
  wingL.rotation.y = 0.15;
  group.add(wingL);

  // 6-7. Winglets
  const wingletGeo = new THREE.BoxGeometry(0.4, 0.3, 0.15);
  const wingletR = new THREE.Mesh(wingletGeo, accentMat);
  wingletR.name = 'accent_wingletR';
  wingletR.position.set(-0.8, 0.15, 4.1);
  group.add(wingletR);

  const wingletL = new THREE.Mesh(wingletGeo, accentMat);
  wingletL.name = 'accent_wingletL';
  wingletL.position.set(-0.8, 0.15, -4.1);
  group.add(wingletL);

  // 8-9. Weapon pods
  const weaponPodGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.8, 4);
  weaponPodGeo.rotateZ(Math.PI / 2);
  const podR = new THREE.Mesh(weaponPodGeo, accentMat);
  podR.name = 'accent_podR';
  podR.position.set(0.2, -0.25, 2.0);
  group.add(podR);

  const podL = new THREE.Mesh(weaponPodGeo, accentMat);
  podL.name = 'accent_podL';
  podL.position.set(0.2, -0.25, -2.0);
  group.add(podL);

  // 10-11. Tail fins
  const tailFinGeo = new THREE.BoxGeometry(1.5, 1.2, 0.06);
  const dorsalFin = new THREE.Mesh(tailFinGeo, bodyMat);
  dorsalFin.name = 'body_dorsalFin';
  dorsalFin.position.set(-2.2, 0.7, 0);
  group.add(dorsalFin);

  const ventralFin = new THREE.Mesh(tailFinGeo, bodyMat);
  ventralFin.name = 'body_ventralFin';
  ventralFin.position.set(-2.2, -0.5, 0);
  ventralFin.scale.set(0.7, 0.6, 1);
  group.add(ventralFin);

  // 12-13. Engine nacelles
  const nacelleGeo = new THREE.CylinderGeometry(0.2, 0.3, 1.5, 6);
  nacelleGeo.rotateZ(Math.PI / 2);
  const nacelleR = new THREE.Mesh(nacelleGeo, accentMat);
  nacelleR.name = 'accent_nacelleR';
  nacelleR.position.set(-2.5, 0, 1.0);
  group.add(nacelleR);

  const nacelleL = new THREE.Mesh(nacelleGeo, accentMat);
  nacelleL.name = 'accent_nacelleL';
  nacelleL.position.set(-2.5, 0, -1.0);
  group.add(nacelleL);

  // 14-15. Exhaust glow
  const exhaustGeo = new THREE.SphereGeometry(0.25, 4, 4);
  const exhaustR = new THREE.Mesh(exhaustGeo, glowMat);
  exhaustR.name = 'exhaust';
  exhaustR.position.set(-3.3, 0, 1.0);
  group.add(exhaustR);

  const exhaustL = new THREE.Mesh(exhaustGeo, glowMat);
  exhaustL.name = 'exhaust_L';
  exhaustL.position.set(-3.3, 0, -1.0);
  group.add(exhaustL);

  // 16-17. Glow halos
  const glowHaloGeo = new THREE.SphereGeometry(0.6, 6, 6);
  const haloR = new THREE.Mesh(glowHaloGeo, haloMat);
  haloR.name = 'glow';
  haloR.position.set(-3.3, 0, 1.0);
  group.add(haloR);

  const haloL = new THREE.Mesh(glowHaloGeo, haloMat);
  haloL.name = 'glow_L';
  haloL.position.set(-3.3, 0, -1.0);
  group.add(haloL);

  return group;
}

// ─── Capital Ship ───────────────────────────────────────────────────────────

function buildCapitalShipHull(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'hull';
  const hullMat = new THREE.MeshStandardMaterial({ color: 0x667788 });
  const detailMat = new THREE.MeshStandardMaterial({ color: 0x556677 });

  const hull = new THREE.Mesh(new THREE.BoxGeometry(80, 12, 20), hullMat);
  hull.name = 'hull_body';
  group.add(hull);

  const plate1 = new THREE.Mesh(new THREE.BoxGeometry(60, 2, 22), detailMat);
  plate1.name = 'detail_plateTop';
  plate1.position.y = 7;
  group.add(plate1);

  const plate2 = new THREE.Mesh(new THREE.BoxGeometry(60, 2, 22), detailMat);
  plate2.name = 'detail_plateBottom';
  plate2.position.y = -7;
  group.add(plate2);

  const armorGeo = new THREE.BoxGeometry(50, 10, 2);
  const armorR = new THREE.Mesh(armorGeo, detailMat);
  armorR.name = 'detail_armorR';
  armorR.position.set(0, 0, 12);
  group.add(armorR);

  const armorL = new THREE.Mesh(armorGeo, detailMat);
  armorL.name = 'detail_armorL';
  armorL.position.set(0, 0, -12);
  group.add(armorL);

  const keel = new THREE.Mesh(new THREE.BoxGeometry(70, 3, 4), detailMat);
  keel.name = 'detail_keel';
  keel.position.y = -8;
  group.add(keel);

  const bowMat = new THREE.MeshStandardMaterial({ color: 0x667788 });
  const bowGeo = new THREE.ConeGeometry(8, 15, 4);
  const bow = new THREE.Mesh(bowGeo, bowMat);
  bow.name = 'hull_bow';
  bow.rotation.z = -Math.PI / 2;
  bow.position.x = 47;
  group.add(bow);

  const shieldMat = new THREE.MeshStandardMaterial({
    color: 0x4488ff,
    emissive: 0x2244aa,
    emissiveIntensity: 0.4,
    transparent: true,
    opacity: 0.35,
  });
  const shieldGeo = new THREE.SphereGeometry(3, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2);
  const shieldR = new THREE.Mesh(shieldGeo, shieldMat);
  shieldR.name = 'static_shieldR';
  shieldR.position.set(10, 7.5, 0);
  group.add(shieldR);
  const shieldL = new THREE.Mesh(shieldGeo, shieldMat);
  shieldL.name = 'static_shieldL';
  shieldL.position.set(-5, 7.5, 0);
  group.add(shieldL);

  // Running lights
  const lightMat = new THREE.MeshBasicMaterial({ color: 0xff2200 });
  const lightGeo = new THREE.SphereGeometry(0.6, 4, 4);
  for (let lx = -30; lx <= 30; lx += 20) {
    const l1 = new THREE.Mesh(lightGeo, lightMat);
    l1.position.set(lx, 7.5, 11.5);
    group.add(l1);
    const l2 = new THREE.Mesh(lightGeo, lightMat);
    l2.position.set(lx, 7.5, -11.5);
    group.add(l2);
  }

  // Nav lights
  const navRedMat = new THREE.MeshBasicMaterial({ color: 0xff2200 });
  const navGreenMat = new THREE.MeshBasicMaterial({ color: 0x00ff44 });
  const navGeo = new THREE.SphereGeometry(0.4, 4, 4);
  for (let lx = -30; lx <= 30; lx += 15) {
    const sideR = new THREE.Mesh(navGeo, navGreenMat);
    sideR.position.set(lx, 0, 13.2);
    group.add(sideR);
    const sideL = new THREE.Mesh(navGeo, navRedMat);
    sideL.position.set(lx, 0, -13.2);
    group.add(sideL);
  }

  // Stripes
  const stripeMat = new THREE.MeshBasicMaterial({ color: 0x446688 });
  const stripeGeo = new THREE.BoxGeometry(75, 0.3, 0.3);
  const stripeR = new THREE.Mesh(stripeGeo, stripeMat);
  stripeR.position.set(0, 0, 10.5);
  group.add(stripeR);
  const stripeL = new THREE.Mesh(stripeGeo, stripeMat);
  stripeL.position.set(0, 0, -10.5);
  group.add(stripeL);

  return group;
}

interface SubMeta {
  center: [number, number, number];
  radius: number;
}

function buildEngines(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'engines';
  group.userData = { center: [-44, 0, 0], radius: 12 } satisfies SubMeta;

  const engineMat = new THREE.MeshStandardMaterial({
    color: 0x8899aa,
    emissive: 0x334455,
    emissiveIntensity: 0.15,
  });
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0xff4400,
    transparent: true,
    opacity: 0.7,
  });

  for (let i = 0; i < 3; i++) {
    const z = (i - 1) * 6;
    const eng = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 3, 8, 6), engineMat);
    eng.rotation.z = Math.PI / 2;
    eng.position.set(-44, 0, z);
    group.add(eng);

    const engGlow = new THREE.Mesh(new THREE.SphereGeometry(2.5, 6, 4), glowMat.clone());
    engGlow.position.set(-48, 0, z);
    group.add(engGlow);

    const cowling = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 2.5, 2, 6), engineMat);
    cowling.rotation.z = Math.PI / 2;
    cowling.position.set(-39.5, 0, z);
    group.add(cowling);

    const nozzle = new THREE.Mesh(new THREE.TorusGeometry(2.8, 0.3, 4, 8), engineMat);
    nozzle.rotation.y = Math.PI / 2;
    nozzle.position.set(-48.2, 0, z);
    group.add(nozzle);
  }
  return group;
}

function buildBridge(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'bridge';
  group.userData = { center: [25, 12, 0], radius: 8 } satisfies SubMeta;

  const bridgeMat = new THREE.MeshStandardMaterial({
    color: 0x778899,
    emissive: 0x334455,
    emissiveIntensity: 0.15,
  });
  const bridge = new THREE.Mesh(new THREE.BoxGeometry(10, 8, 8), bridgeMat);
  bridge.position.set(25, 12, 0);
  group.add(bridge);

  const windowMat = new THREE.MeshBasicMaterial({
    color: 0x3366cc,
    transparent: true,
    opacity: 0.6,
  });
  const win = new THREE.Mesh(new THREE.BoxGeometry(6, 3, 9), windowMat);
  win.position.set(27, 13, 0);
  group.add(win);

  const deck = new THREE.Mesh(new THREE.BoxGeometry(12, 1, 10), bridgeMat);
  deck.position.set(25, 8, 0);
  group.add(deck);

  const mastMat = new THREE.MeshStandardMaterial({
    color: 0x99aabb,
    emissive: 0x445566,
    emissiveIntensity: 0.1,
  });
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 6, 4), mastMat);
  mast.position.set(25, 19, 0);
  group.add(mast);

  const dish = new THREE.Mesh(new THREE.ConeGeometry(1, 0.8, 6), mastMat);
  dish.position.set(25, 22.5, 0);
  dish.rotation.x = Math.PI;
  group.add(dish);

  return group;
}

function buildTurrets(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'turrets';
  group.userData = { center: [0, 0, 0], radius: 18 } satisfies SubMeta;

  const turretMat = new THREE.MeshStandardMaterial({
    color: 0xaa8855,
    emissive: 0x443322,
    emissiveIntensity: 0.15,
  });

  for (let side = -1; side <= 1; side += 2) {
    for (let k = 0; k < 3; k++) {
      const x = -10 + k * 15;
      const y = 7 * side;
      const z = 11 * side;

      const turret = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 2, 6), turretMat);
      turret.position.set(x, y, z);
      group.add(turret);

      const barrelGeo = new THREE.CylinderGeometry(0.3, 0.3, 5, 4);
      const barrel1 = new THREE.Mesh(barrelGeo, turretMat);
      barrel1.rotation.z = Math.PI / 2;
      barrel1.position.set(x + 3, y, z + 0.5);
      group.add(barrel1);

      const barrel2 = new THREE.Mesh(barrelGeo, turretMat);
      barrel2.rotation.z = Math.PI / 2;
      barrel2.position.set(x + 3, y, z - 0.5);
      group.add(barrel2);

      const shield = new THREE.Mesh(new THREE.BoxGeometry(2, 1.5, 3), turretMat);
      shield.position.set(x - 1.2, y, z);
      group.add(shield);
    }
  }
  return group;
}

function buildComms(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'comms';
  group.userData = { center: [-15, 17, 0], radius: 10 } satisfies SubMeta;

  const commsMat = new THREE.MeshStandardMaterial({
    color: 0x99bbdd,
    emissive: 0x446688,
    emissiveIntensity: 0.15,
  });

  const dish = new THREE.Mesh(new THREE.ConeGeometry(4, 2, 8), commsMat);
  dish.position.set(-15, 14, 0);
  dish.rotation.x = Math.PI;
  group.add(dish);

  const dish2 = new THREE.Mesh(new THREE.ConeGeometry(2, 1.2, 6), commsMat);
  dish2.position.set(-12, 13, 4);
  dish2.rotation.x = Math.PI;
  group.add(dish2);

  const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 10, 4), commsMat);
  antenna.position.set(-15, 20, 0);
  group.add(antenna);

  const antenna2 = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 7, 4), commsMat);
  antenna2.position.set(-10, 17, 3);
  antenna2.rotation.z = 0.3;
  group.add(antenna2);

  const rodGeo = new THREE.CylinderGeometry(0.1, 0.1, 4, 3);
  for (let i = 0; i < 3; i++) {
    const rod = new THREE.Mesh(rodGeo, commsMat);
    rod.position.set(-18 + i * 2, 15, -3);
    group.add(rod);
  }

  const greenLight = new THREE.MeshBasicMaterial({ color: 0x00ff88 });
  const commsLight = new THREE.Mesh(new THREE.SphereGeometry(0.5, 4, 4), greenLight);
  commsLight.position.set(-15, 25, 0);
  group.add(commsLight);

  const amberLight = new THREE.MeshBasicMaterial({ color: 0xffaa22 });
  const lightGeo = new THREE.SphereGeometry(0.3, 4, 4);
  const tip1 = new THREE.Mesh(lightGeo, amberLight);
  tip1.position.set(-10, 20.5, 3);
  group.add(tip1);
  const tip2 = new THREE.Mesh(lightGeo, greenLight);
  tip2.position.set(-12, 13.8, 4);
  group.add(tip2);

  return group;
}

function buildHangar(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'hangar';
  group.userData = { center: [-20, -10, 0], radius: 12 } satisfies SubMeta;

  const hangarMat = new THREE.MeshStandardMaterial({
    color: 0x778888,
    emissive: 0x223333,
    emissiveIntensity: 0.12,
  });

  const hangarBay = new THREE.Mesh(new THREE.BoxGeometry(20, 8, 16), hangarMat);
  hangarBay.position.set(-20, -10, 0);
  group.add(hangarBay);

  const openMat = new THREE.MeshBasicMaterial({ color: 0x221133, transparent: true, opacity: 0.8 });
  const hangarOpen = new THREE.Mesh(new THREE.BoxGeometry(15, 6, 14), openMat);
  hangarOpen.position.set(-18, -10, 0);
  group.add(hangarOpen);

  const orangeLight = new THREE.MeshBasicMaterial({ color: 0xffaa44 });
  const hangarLight = new THREE.Mesh(new THREE.SphereGeometry(0.8, 4, 4), orangeLight);
  hangarLight.position.set(-15, -10, 0);
  group.add(hangarLight);

  const deckMat = new THREE.MeshStandardMaterial({
    color: 0x556666,
    emissive: 0x112222,
    emissiveIntensity: 0.1,
  });
  const deck = new THREE.Mesh(new THREE.BoxGeometry(18, 0.5, 20), deckMat);
  deck.position.set(-20, -14.5, 0);
  group.add(deck);

  const guideMat = new THREE.MeshBasicMaterial({ color: 0xffaa22 });
  const guideGeo = new THREE.SphereGeometry(0.35, 4, 4);
  const guidePositions: [number, number, number][] = [
    [-12, -14, 9],
    [-20, -14, 9],
    [-28, -14, 9],
    [-12, -14, -9],
    [-20, -14, -9],
    [-28, -14, -9],
  ];
  for (const [gx, gy, gz] of guidePositions) {
    const guide = new THREE.Mesh(guideGeo, guideMat);
    guide.position.set(gx, gy, gz);
    group.add(guide);
  }

  const glowStrip = new THREE.Mesh(
    new THREE.BoxGeometry(14, 0.5, 0.5),
    new THREE.MeshBasicMaterial({ color: 0xffaa44, transparent: true, opacity: 0.6 }),
  );
  glowStrip.position.set(-18, -7.5, 0);
  group.add(glowStrip);

  return group;
}

function buildCapitalShip(): THREE.Group {
  const group = new THREE.Group();
  group.add(buildCapitalShipHull());
  group.add(buildEngines());
  group.add(buildBridge());
  group.add(buildTurrets());
  group.add(buildComms());
  group.add(buildHangar());
  return group;
}

// ─── Export ─────────────────────────────────────────────────────────────────

async function exportGLB(object: THREE.Object3D, filename: string): Promise<void> {
  const exporter = new GLTFExporter();
  const glb = (await exporter.parseAsync(object, { binary: true })) as ArrayBuffer;
  const outPath = path.join(OUT_DIR, filename);
  fs.writeFileSync(outPath, Buffer.from(glb));
  const kb = (fs.statSync(outPath).size / 1024).toFixed(1);
  console.log(`  ${filename} → ${kb} KB`);
}

async function main(): Promise<void> {
  console.log('Exporting models...');
  fs.mkdirSync(OUT_DIR, { recursive: true });
  await exportGLB(buildFighter(), 'fighter.glb');
  await exportGLB(buildCapitalShip(), 'capital-ship.glb');
  console.log('Done.');
}

main();
