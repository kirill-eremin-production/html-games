import * as THREE from 'three';

export interface HullResult {
  group: THREE.Group;
  hullMat: THREE.MeshPhongMaterial;
  detailMat: THREE.MeshPhongMaterial;
  glowMat: THREE.MeshBasicMaterial;
}

export function buildHull(hullColor: number): HullResult {
  const group = new THREE.Group();
  const hc = hullColor;

  const hullMat = new THREE.MeshPhongMaterial({
    color: hc,
    emissive: new THREE.Color(hc).multiplyScalar(0.33),
    emissiveIntensity: 0.15,
  });
  const detailMat = new THREE.MeshPhongMaterial({
    color: new THREE.Color(hc).multiplyScalar(0.82),
    emissive: new THREE.Color(hc).multiplyScalar(0.33),
    emissiveIntensity: 0.1,
  });
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0xff4400,
    transparent: true,
    opacity: 0.7,
  });

  // Main hull body
  const hull = new THREE.Mesh(new THREE.BoxGeometry(80, 12, 20), hullMat);
  group.add(hull);

  // Top/bottom plates
  const plate1 = new THREE.Mesh(new THREE.BoxGeometry(60, 2, 22), detailMat);
  plate1.position.y = 7;
  group.add(plate1);
  const plate2 = new THREE.Mesh(new THREE.BoxGeometry(60, 2, 22), detailMat);
  plate2.position.y = -7;
  group.add(plate2);

  // Side armor plates
  const armorGeo = new THREE.BoxGeometry(50, 10, 2);
  const armorR = new THREE.Mesh(armorGeo, detailMat);
  armorR.position.set(0, 0, 12);
  group.add(armorR);
  const armorL = new THREE.Mesh(armorGeo, detailMat);
  armorL.position.set(0, 0, -12);
  group.add(armorL);

  // Keel ridge (bottom centerline)
  const keel = new THREE.Mesh(new THREE.BoxGeometry(70, 3, 4), detailMat);
  keel.position.y = -8;
  group.add(keel);

  // Bow wedge (pointed prow)
  const bowMat = new THREE.MeshPhongMaterial({
    color: hc,
    emissive: new THREE.Color(hc).multiplyScalar(0.5),
    emissiveIntensity: 0.2,
  });
  const bow = new THREE.Mesh(new THREE.ConeGeometry(8, 15, 4), bowMat);
  bow.rotation.z = -Math.PI / 2;
  bow.position.x = 47;
  group.add(bow);

  // Shield generator domes (translucent blue half-spheres)
  const shieldMat = new THREE.MeshPhongMaterial({
    color: 0x4488ff,
    emissive: 0x2244aa,
    emissiveIntensity: 0.4,
    transparent: true,
    opacity: 0.35,
  });
  const shieldGeo = new THREE.SphereGeometry(3, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2);
  const shieldR = new THREE.Mesh(shieldGeo, shieldMat);
  shieldR.position.set(10, 7.5, 0);
  group.add(shieldR);
  const shieldL = new THREE.Mesh(shieldGeo, shieldMat);
  shieldL.position.set(-5, 7.5, 0);
  group.add(shieldL);

  // Top running lights (original)
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

  // Side running lights (alternating red/green nav lights)
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

  // Hull accent stripes (thin lines along waterline)
  const stripeMat = new THREE.MeshBasicMaterial({ color: 0x446688 });
  const stripeGeo = new THREE.BoxGeometry(75, 0.3, 0.3);
  const stripeR = new THREE.Mesh(stripeGeo, stripeMat);
  stripeR.position.set(0, 0, 10.5);
  group.add(stripeR);
  const stripeL = new THREE.Mesh(stripeGeo, stripeMat);
  stripeL.position.set(0, 0, -10.5);
  group.add(stripeL);

  return { group, hullMat, detailMat, glowMat };
}
