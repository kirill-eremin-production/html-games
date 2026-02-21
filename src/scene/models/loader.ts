import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { SUBSYSTEM_HP } from '../../constants';
import type { Subsystem } from '../../types';
import {
  canopyMat,
  createAccentMat,
  createBodyMat,
  createExhaustMat,
  createGlowHaloMat,
  noseMat,
} from './fighter/materials';

// ─── Templates (populated by preloadModels) ─────────────────────────────────

let fighterTemplate: THREE.Group | null = null;
let capitalShipTemplate: THREE.Group | null = null;

const loader = new GLTFLoader();

function load(url: string): Promise<THREE.Group> {
  return new Promise((resolve, reject) => {
    loader.load(
      url,
      (gltf) => resolve(gltf.scene),
      undefined,
      reject,
    );
  });
}

export async function preloadModels(): Promise<void> {
  const [fighter, capitalShip] = await Promise.all([
    load('./models/fighter.glb'),
    load('./models/capital-ship.glb'),
  ]);
  fighterTemplate = fighter;
  capitalShipTemplate = capitalShip;
}

// ─── Fighter cloning ────────────────────────────────────────────────────────

const SUBSYSTEM_NAMES = ['engines', 'bridge', 'turrets', 'comms', 'hangar'] as const;
const SUBSYSTEM_LABELS = ['Двигатели', 'Мостик', 'Турели', 'Связь', 'Ангар'] as const;

export function cloneFighterModel(
  bodyColor: number,
  exhaustColor: number,
): THREE.Group {
  const group = fighterTemplate!.clone();

  const bodyMat = createBodyMat(bodyColor);
  const accentMat = createAccentMat(bodyColor);
  const glowMat = createExhaustMat(exhaustColor);
  const haloMat = createGlowHaloMat(exhaustColor);

  group.traverse((child) => {
    if (!(child as THREE.Mesh).isMesh) return;
    const mesh = child as THREE.Mesh;
    const n = mesh.name;
    if (n.startsWith('body_')) mesh.material = bodyMat;
    else if (n.startsWith('accent_')) mesh.material = accentMat;
    else if (n === 'nose') mesh.material = noseMat;
    else if (n === 'canopy') mesh.material = canopyMat;
    else if (n === 'exhaust' || n === 'exhaust_L') mesh.material = glowMat;
    else if (n === 'glow' || n === 'glow_L') mesh.material = haloMat;
  });

  group.scale.setScalar(1.5);
  return group;
}

// ─── Capital Ship cloning ───────────────────────────────────────────────────

export function cloneCapitalShipModel(
  index: number,
  hullColor: number,
): THREE.Group {
  const group = capitalShipTemplate!.clone();

  // Apply hull colors to the hull group
  const hc = new THREE.Color(hullColor);
  const hullMat = new THREE.MeshPhongMaterial({
    color: hc,
    emissive: hc.clone().multiplyScalar(0.33),
    emissiveIntensity: 0.15,
  });
  const detailMat = new THREE.MeshPhongMaterial({
    color: hc.clone().multiplyScalar(0.82),
    emissive: hc.clone().multiplyScalar(0.33),
    emissiveIntensity: 0.1,
  });
  const bowMat = new THREE.MeshPhongMaterial({
    color: hc,
    emissive: hc.clone().multiplyScalar(0.5),
    emissiveIntensity: 0.2,
  });

  const hullGroup = group.getObjectByName('hull');
  if (hullGroup) {
    hullGroup.traverse((child) => {
      if (!(child as THREE.Mesh).isMesh) return;
      const mesh = child as THREE.Mesh;
      const n = mesh.name;
      if (n.startsWith('hull_')) mesh.material = n === 'hull_bow' ? bowMat : hullMat;
      else if (n.startsWith('detail_')) mesh.material = detailMat;
      // static_* meshes (shields, lights, stripes) keep their loaded materials
    });
  }

  // Build subsystem metadata from named groups
  const subsystems: Subsystem[] = SUBSYSTEM_NAMES.map((name, i) => {
    const subGroup = group.getObjectByName(name) as THREE.Group;
    const extras = subGroup?.userData ?? {};
    const c = extras.center ?? [0, 0, 0];
    return {
      name: SUBSYSTEM_LABELS[i],
      mesh: subGroup,
      health: SUBSYSTEM_HP,
      maxHealth: SUBSYSTEM_HP,
      center: new THREE.Vector3(c[0], c[1], c[2]),
      radius: (extras.radius ?? 10) * 1.5,
    };
  });

  group.userData.subsystems = subsystems;
  group.userData.index = index;
  group.scale.setScalar(1.5);
  return group;
}
