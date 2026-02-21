import * as THREE from 'three';
import { scene } from './setup';

export function createStarfield(): void {
  const count = 2500;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 2500 + Math.random() * 4500;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
    const brightness = 0.3 + Math.random() * 0.2;
    const tint = Math.random();
    colors[i * 3] = brightness * (tint > 0.7 ? 1.0 : 0.85);
    colors[i * 3 + 1] = brightness * (tint > 0.3 ? 1.0 : 0.85);
    colors[i * 3 + 2] = brightness;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const mat = new THREE.PointsMaterial({
    size: 1.5,
    vertexColors: true,
    sizeAttenuation: false,
    transparent: true,
    opacity: 0.85,
  });
  scene.add(new THREE.Points(geo, mat));
}

export function createNebulae(): void {
  for (let i = 0; i < 5; i++) {
    const s = 1500 + Math.random() * 2000;
    const geo = new THREE.PlaneGeometry(s, s);
    const hue = Math.random();
    const color = new THREE.Color().setHSL(hue, 0.7, 0.2);
    const mat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.12 + Math.random() * 0.08,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geo, mat);
    const dist = 2200 + Math.random() * 2000;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    mesh.position.set(
      dist * Math.sin(phi) * Math.cos(theta),
      dist * Math.cos(phi),
      dist * Math.sin(phi) * Math.sin(theta),
    );
    mesh.lookAt(0, 0, 0);
    mesh.rotation.z = Math.random() * Math.PI;
    scene.add(mesh);
  }
}
