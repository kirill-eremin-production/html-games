import * as THREE from 'three';
import { SUBSYSTEM_HP } from '../constants';

// Shared fighter geometry (reused for player, allies, enemies)
const fighterBodyGeo = new THREE.CylinderGeometry(0.3, 0.5, 5, 6);
fighterBodyGeo.rotateZ(Math.PI / 2);

const fighterNoseGeo = new THREE.ConeGeometry(0.35, 2, 6);
fighterNoseGeo.rotateZ(-Math.PI / 2);

const fighterWingGeo = new THREE.BoxGeometry(3, 0.08, 3.5);
const fighterExhaustGeo = new THREE.SphereGeometry(0.5, 4, 4);
const noseMat = new THREE.MeshPhongMaterial({
  color: 0xaabbcc,
  emissive: 0x334455,
  emissiveIntensity: 0.15,
});

export function createFighter(color: number, teamColor: number): THREE.Group {
  const group = new THREE.Group();
  const mat = new THREE.MeshPhongMaterial({ color, emissive: color, emissiveIntensity: 0.2 });

  const body = new THREE.Mesh(fighterBodyGeo, mat);
  group.add(body);

  const nose = new THREE.Mesh(fighterNoseGeo, noseMat);
  nose.position.x = 3.5;
  group.add(nose);

  const wingR = new THREE.Mesh(fighterWingGeo, mat);
  wingR.position.set(-0.3, 0, 2.2);
  wingR.rotation.y = -0.15;
  group.add(wingR);

  const wingL = new THREE.Mesh(fighterWingGeo, mat);
  wingL.position.set(-0.3, 0, -2.2);
  wingL.rotation.y = 0.15;
  group.add(wingL);

  const glowMat = new THREE.MeshBasicMaterial({
    color: teamColor,
    transparent: true,
    opacity: 0.9,
  });
  const glow = new THREE.Mesh(fighterExhaustGeo, glowMat);
  glow.position.x = -2.8;
  glow.name = 'exhaust';
  group.add(glow);

  return group;
}

export function createCapitalShip(index: number): THREE.Group {
  const group = new THREE.Group();
  const hullMat = new THREE.MeshPhongMaterial({
    color: 0x667788,
    emissive: 0x223344,
    emissiveIntensity: 0.15,
  });
  const detailMat = new THREE.MeshPhongMaterial({
    color: 0x556677,
    emissive: 0x1a2a3a,
    emissiveIntensity: 0.1,
  });
  const glowMat = new THREE.MeshBasicMaterial({ color: 0xff4400, transparent: true, opacity: 0.7 });

  const hull = new THREE.Mesh(new THREE.BoxGeometry(80, 12, 20), hullMat);
  group.add(hull);
  const plate1 = new THREE.Mesh(new THREE.BoxGeometry(60, 2, 22), detailMat);
  plate1.position.y = 7;
  group.add(plate1);
  const plate2 = new THREE.Mesh(new THREE.BoxGeometry(60, 2, 22), detailMat);
  plate2.position.y = -7;
  group.add(plate2);

  const lightMat = new THREE.MeshBasicMaterial({ color: 0xff2200 });
  for (let lx = -30; lx <= 30; lx += 20) {
    const l1 = new THREE.Mesh(new THREE.SphereGeometry(0.6, 4, 4), lightMat);
    l1.position.set(lx, 7.5, 11.5);
    group.add(l1);
    const l2 = new THREE.Mesh(new THREE.SphereGeometry(0.6, 4, 4), lightMat);
    l2.position.set(lx, 7.5, -11.5);
    group.add(l2);
  }

  const subsystems: {
    name: string;
    mesh: THREE.Group | THREE.Mesh;
    health: number;
    maxHealth: number;
    center: THREE.Vector3;
    radius: number;
  }[] = [];

  // Engines
  const engineGroup = new THREE.Group();
  const engineMat = new THREE.MeshPhongMaterial({
    color: 0x8899aa,
    emissive: 0x334455,
    emissiveIntensity: 0.15,
  });
  for (let i = 0; i < 3; i++) {
    const eng = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 3, 8, 6), engineMat);
    eng.rotation.z = Math.PI / 2;
    eng.position.set(-44, 0, (i - 1) * 6);
    engineGroup.add(eng);
    const engGlow = new THREE.Mesh(new THREE.SphereGeometry(2.5, 6, 4), glowMat.clone());
    engGlow.position.set(-48, 0, (i - 1) * 6);
    engineGroup.add(engGlow);
  }
  group.add(engineGroup);
  subsystems.push({
    name: 'Двигатели',
    mesh: engineGroup,
    health: SUBSYSTEM_HP,
    maxHealth: SUBSYSTEM_HP,
    center: new THREE.Vector3(-44, 0, 0),
    radius: 12,
  });

  // Bridge
  const bridge = new THREE.Mesh(
    new THREE.BoxGeometry(10, 8, 8),
    new THREE.MeshPhongMaterial({ color: 0x778899, emissive: 0x334455, emissiveIntensity: 0.15 }),
  );
  bridge.position.set(25, 12, 0);
  group.add(bridge);
  const bridgeWindow = new THREE.Mesh(
    new THREE.BoxGeometry(6, 3, 9),
    new THREE.MeshBasicMaterial({ color: 0x3366cc, transparent: true, opacity: 0.6 }),
  );
  bridgeWindow.position.set(27, 13, 0);
  group.add(bridgeWindow);
  subsystems.push({
    name: 'Мостик',
    mesh: bridge,
    health: SUBSYSTEM_HP,
    maxHealth: SUBSYSTEM_HP,
    center: new THREE.Vector3(25, 12, 0),
    radius: 8,
  });

  // Turrets
  const turretGroup = new THREE.Group();
  const turretMat = new THREE.MeshPhongMaterial({
    color: 0xaa8855,
    emissive: 0x443322,
    emissiveIntensity: 0.15,
  });
  for (let side = -1; side <= 1; side += 2) {
    for (let k = 0; k < 3; k++) {
      const turret = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 2, 6), turretMat);
      turret.position.set(-10 + k * 15, 7 * side, 11 * side);
      turretGroup.add(turret);
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 5, 4), turretMat);
      barrel.rotation.z = Math.PI / 2;
      barrel.position.set(-10 + k * 15 + 3, 7 * side, 11 * side);
      turretGroup.add(barrel);
    }
  }
  group.add(turretGroup);
  subsystems.push({
    name: 'Турели',
    mesh: turretGroup,
    health: SUBSYSTEM_HP,
    maxHealth: SUBSYSTEM_HP,
    center: new THREE.Vector3(0, 0, 0),
    radius: 18,
  });

  // Comms
  const commsGroup = new THREE.Group();
  const commsMat = new THREE.MeshPhongMaterial({
    color: 0x99bbdd,
    emissive: 0x446688,
    emissiveIntensity: 0.15,
  });
  const dish = new THREE.Mesh(new THREE.ConeGeometry(4, 2, 8), commsMat);
  dish.position.set(-15, 14, 0);
  dish.rotation.x = Math.PI;
  commsGroup.add(dish);
  const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 10, 4), commsMat);
  antenna.position.set(-15, 20, 0);
  commsGroup.add(antenna);
  const antenna2 = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 7, 4), commsMat);
  antenna2.position.set(-10, 17, 3);
  antenna2.rotation.z = 0.3;
  commsGroup.add(antenna2);
  const commsLight = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 4, 4),
    new THREE.MeshBasicMaterial({ color: 0x00ff88 }),
  );
  commsLight.position.set(-15, 25, 0);
  commsGroup.add(commsLight);
  group.add(commsGroup);
  subsystems.push({
    name: 'Связь',
    mesh: commsGroup,
    health: SUBSYSTEM_HP,
    maxHealth: SUBSYSTEM_HP,
    center: new THREE.Vector3(-15, 17, 0),
    radius: 10,
  });

  // Hangar
  const hangarGroup = new THREE.Group();
  const hangarMat = new THREE.MeshPhongMaterial({
    color: 0x778888,
    emissive: 0x223333,
    emissiveIntensity: 0.12,
  });
  const hangarBay = new THREE.Mesh(new THREE.BoxGeometry(20, 8, 16), hangarMat);
  hangarBay.position.set(-20, -10, 0);
  hangarGroup.add(hangarBay);
  const hangarOpen = new THREE.Mesh(
    new THREE.BoxGeometry(15, 6, 14),
    new THREE.MeshBasicMaterial({ color: 0x221133, transparent: true, opacity: 0.8 }),
  );
  hangarOpen.position.set(-18, -10, 0);
  hangarGroup.add(hangarOpen);
  const hangarLight = new THREE.Mesh(
    new THREE.SphereGeometry(0.8, 4, 4),
    new THREE.MeshBasicMaterial({ color: 0xffaa44 }),
  );
  hangarLight.position.set(-15, -10, 0);
  hangarGroup.add(hangarLight);
  group.add(hangarGroup);
  subsystems.push({
    name: 'Ангар',
    mesh: hangarGroup,
    health: SUBSYSTEM_HP,
    maxHealth: SUBSYSTEM_HP,
    center: new THREE.Vector3(-20, -10, 0),
    radius: 12,
  });

  group.userData.subsystems = subsystems;
  group.userData.index = index;
  return group;
}

// Shared health bar geometry
const healthBarBgGeo = new THREE.PlaneGeometry(4, 0.4);
const healthBarBgMat = new THREE.MeshBasicMaterial({ color: 0x220000, side: THREE.DoubleSide });

export function addHealthBar(
  group: THREE.Group,
  color: number,
): { bar: THREE.Group; fill: THREE.Mesh } {
  const barGroup = new THREE.Group();
  const bg = new THREE.Mesh(healthBarBgGeo, healthBarBgMat);
  barGroup.add(bg);
  const fg = new THREE.Mesh(
    new THREE.PlaneGeometry(4, 0.4),
    new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide }),
  );
  fg.name = 'healthFill';
  barGroup.add(fg);
  barGroup.position.y = 3;
  group.add(barGroup);
  return { bar: barGroup, fill: fg };
}
