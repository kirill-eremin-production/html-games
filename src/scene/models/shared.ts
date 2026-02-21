import * as THREE from 'three';

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
