import { SUBSYSTEM_HP } from '@/shared/constants';
import {
  Color,
  type EngineMesh,
  MeshPhongMaterial,
  type TransformNode,
  Vector3,
  cloneModel,
  isEngineMesh,
  loadModel,
  traverseNode,
} from '@/shared/core';
import type { Subsystem } from '@/shared/types';

import {
  canopyMat,
  createAccentMat,
  createBodyMat,
  createExhaustMat,
  createGlowHaloMat,
  noseMat,
} from './fighter/materials';

// ─── Templates (populated by preloadModels) ─────────────────────────────────

let fighterTemplate: TransformNode | null = null;
let capitalShipTemplate: TransformNode | null = null;

export async function preloadModels(): Promise<void> {
  const [fighter, capitalShip] = await Promise.all([
    loadModel('./models/fighter.glb'),
    loadModel('./models/capital-ship.glb'),
  ]);
  fighterTemplate = fighter;
  capitalShipTemplate = capitalShip;
}

// ─── Fighter cloning ────────────────────────────────────────────────────────

const SUBSYSTEM_NAMES = ['engines', 'bridge', 'turrets', 'comms', 'hangar'] as const;
const SUBSYSTEM_LABELS = ['Двигатели', 'Мостик', 'Турели', 'Связь', 'Ангар'] as const;

export function cloneFighterModel(bodyColor: number, exhaustColor: number): TransformNode {
  const group = cloneModel(fighterTemplate!);

  const bodyMat = createBodyMat(bodyColor);
  const accentMat = createAccentMat(bodyColor);
  const glowMat = createExhaustMat(exhaustColor);
  const haloMat = createGlowHaloMat(exhaustColor);

  traverseNode(group, (child) => {
    if (!isEngineMesh(child)) return;
    const mesh = child as EngineMesh;
    const n = mesh.name;
    if (n.startsWith('body_')) mesh.material = bodyMat;
    else if (n.startsWith('accent_')) mesh.material = accentMat;
    else if (n === 'nose') mesh.material = noseMat;
    else if (n === 'canopy') mesh.material = canopyMat;
    else if (n === 'exhaust' || n === 'exhaust_L') mesh.material = glowMat;
    else if (n === 'glow' || n === 'glow_L') mesh.material = haloMat;
  });

  group.scale.setAll(1.5);
  return group;
}

// ─── Capital Ship cloning ───────────────────────────────────────────────────

export function cloneCapitalShipModel(index: number, hullColor: number): TransformNode {
  const group = cloneModel(capitalShipTemplate!);

  // Apply hull colors to the hull group
  const hc = new Color(hullColor);
  const hullMat = new MeshPhongMaterial({
    color: hc,
    emissive: hc.clone().multiplyScalar(0.33),
    emissiveIntensity: 0.15,
  });
  const detailMat = new MeshPhongMaterial({
    color: hc.clone().multiplyScalar(0.82),
    emissive: hc.clone().multiplyScalar(0.33),
    emissiveIntensity: 0.1,
  });
  const bowMat = new MeshPhongMaterial({
    color: hc,
    emissive: hc.clone().multiplyScalar(0.5),
    emissiveIntensity: 0.2,
  });

  const hullGroup = group.getObjectByName('hull');
  if (hullGroup) {
    traverseNode(hullGroup, (child) => {
      if (!isEngineMesh(child)) return;
      const mesh = child as EngineMesh;
      const n = mesh.name;
      if (n.startsWith('hull_')) mesh.material = n === 'hull_bow' ? bowMat : hullMat;
      else if (n.startsWith('detail_')) mesh.material = detailMat;
      // static_* meshes (shields, lights, stripes) keep their loaded materials
    });
  }

  // Build subsystem metadata from named groups
  const subsystems: Subsystem[] = SUBSYSTEM_NAMES.map((name, i) => {
    const subGroup = group.getObjectByName(name) as TransformNode;
    const extras = subGroup?.userData ?? {};
    const c = extras.center ?? [0, 0, 0];
    return {
      name: SUBSYSTEM_LABELS[i],
      mesh: subGroup,
      health: SUBSYSTEM_HP,
      maxHealth: SUBSYSTEM_HP,
      center: new Vector3(c[0], c[1], c[2]),
      radius: (extras.radius ?? 10) * 1.5,
    };
  });

  group.userData.subsystems = subsystems;
  group.userData.index = index;
  group.scale.setAll(1.5);
  return group;
}
