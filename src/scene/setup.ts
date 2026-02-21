import * as THREE from 'three';

export const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0f1e);

export const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  8000,
);

export const renderer = new THREE.WebGLRenderer({
  antialias: false,
  powerPreference: 'high-performance',
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.shadowMap.enabled = false;
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0x556688, 0.9);
scene.add(ambientLight);

const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
sunLight.position.set(500, 300, -200);
scene.add(sunLight);

const fillLight = new THREE.DirectionalLight(0x4466cc, 0.6);
fillLight.position.set(-300, -100, 400);
scene.add(fillLight);

const hemiLight = new THREE.HemisphereLight(0x334466, 0x111122, 0.4);
scene.add(hemiLight);

export function handleResize(): void {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
