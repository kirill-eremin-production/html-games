import { SUBSYSTEM_HP } from '@/shared/constants';
import {
  Color,
  type EngineMesh,
  MeshPhongMaterial,
  type TransformNode,
  Vector3,
  cloneModel,
  getChildByName,
  isEngineMesh,
  loadModel,
  traverseNode,
} from '@/shared/core';
// import {
//   canopyMat,
//   createAccentMat,
//   createBodyMat,
//   createExhaustMat,
//   createGlowHaloMat,
//   noseMat,
// } from '@/shared/materials/fighter-materials';
import type { SubsystemType } from '@/shared/types';

// ─── Templates (populated by preloadModels) ─────────────────────────────────

let fighterTemplate: TransformNode | null = null;
let capitalShipTemplate: TransformNode | null = null;

export async function preloadModels(): Promise<void> {
  const [fighter, capitalShip] = await Promise.all([
    loadModel('./models/StarfighterTest.glb'),
    loadModel('./models/capital-ship.glb'),
  ]);
  fighterTemplate = fighter;
  capitalShipTemplate = capitalShip;
}

// ─── Fighter cloning ────────────────────────────────────────────────────────

const SUBSYSTEM_NAMES: readonly SubsystemType[] = [
  'engines',
  'bridge',
  'turrets',
  'comms',
  'hangar',
];
const SUBSYSTEM_LABELS = ['Двигатели', 'Мостик', 'Турели', 'Связь', 'Ангар'] as const;

/** Raw subsystem data stored in mesh metadata (before ECS entity creation) */
export interface SubsystemRawData {
  type: SubsystemType;
  label: string;
  mesh: TransformNode | undefined;
  health: number;
  maxHealth: number;
  center: Vector3;
  radius: number;
}

export function cloneFighterModel(bodyColor: number, exhaustColor: number): TransformNode {
  void bodyColor;
  void exhaustColor;
  const group = cloneModel(fighterTemplate!);

  // Ensure clone is enabled (template is disabled)
  group.setEnabled(true);
  traverseNode(group, (child) => {
    if ('setEnabled' in child) (child as TransformNode).setEnabled(true);
  });

  // const bodyMat = createBodyMat(bodyColor);
  // const accentMat = createAccentMat(bodyColor);
  // const glowMat = createExhaustMat(exhaustColor);
  // const haloMat = createGlowHaloMat(exhaustColor);

  // traverseNode(group, (child) => {
  //   if (!isEngineMesh(child)) return;
  //   const mesh = child as EngineMesh;
  //   const n = mesh.name;
  //   if (n.includes('body_')) mesh.material = bodyMat;
  //   else if (n.includes('accent_')) mesh.material = accentMat;
  //   else if (n.endsWith('nose') || n.endsWith('.nose')) mesh.material = noseMat;
  //   else if (n.endsWith('canopy') || n.endsWith('.canopy')) mesh.material = canopyMat;
  //   else if (n.endsWith('exhaust') || n.endsWith('exhaust_L')) mesh.material = glowMat;
  //   else if (n.endsWith('glow') || n.endsWith('glow_L')) mesh.material = haloMat;
  // });

  group.scaling.setAll(1.5);
  return group;
}

/** Find a descendant whose name ends with the given suffix (e.g. '.engines'). */
function findDescendantBysuffix(node: TransformNode, suffix: string): TransformNode | undefined {
  return node.getDescendants(false).find((d) => d.name.endsWith(suffix)) as
    | TransformNode
    | undefined;
}

// ─── Capital Ship cloning ───────────────────────────────────────────────────

export function cloneCapitalShipModel(index: number, hullColor: number): TransformNode {
  const group = cloneModel(capitalShipTemplate!);

  // Ensure clone is enabled (template is disabled)
  group.setEnabled(true);
  traverseNode(group, (child) => {
    if ('setEnabled' in child) (child as TransformNode).setEnabled(true);
  });

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

  const hullGroup = findDescendantBysuffix(group, '.hull') ?? getChildByName(group, 'hull');
  if (hullGroup) {
    traverseNode(hullGroup, (child) => {
      if (!isEngineMesh(child)) return;
      const mesh = child as EngineMesh;
      const n = mesh.name;
      if (n.includes('hull_')) mesh.material = n.includes('hull_bow') ? bowMat : hullMat;
      else if (n.includes('detail_')) mesh.material = detailMat;
      // static_* meshes (shields, lights, stripes) keep their loaded materials
    });
  }

  // Build subsystem metadata from named groups.
  // Compute world matrices so bounding vectors are accurate.
  group.computeWorldMatrix(true);
  for (const desc of group.getDescendants(false)) {
    if ('computeWorldMatrix' in desc) (desc as TransformNode).computeWorldMatrix(true);
  }

  const subsystems: SubsystemRawData[] = SUBSYSTEM_NAMES.map((name, i) => {
    const subGroup = (findDescendantBysuffix(group, `.${name}`) ?? getChildByName(group, name)) as
      | TransformNode
      | undefined;
    if (!subGroup) {
      return {
        type: name,
        label: SUBSYSTEM_LABELS[i],
        mesh: undefined,
        health: SUBSYSTEM_HP,
        maxHealth: SUBSYSTEM_HP,
        center: new Vector3(),
        radius: 15,
      };
    }

    // Compute center from bounding box of child meshes
    const bounds = subGroup.getHierarchyBoundingVectors(true);
    const cx = (bounds.min.x + bounds.max.x) / 2;
    const cy = (bounds.min.y + bounds.max.y) / 2;
    const cz = (bounds.min.z + bounds.max.z) / 2;

    // Radius: half the largest bounding box dimension
    const dx = bounds.max.x - bounds.min.x;
    const dy = bounds.max.y - bounds.min.y;
    const dz = bounds.max.z - bounds.min.z;
    const autoRadius = Math.max(dx, dy, dz) / 2;

    return {
      type: name,
      label: SUBSYSTEM_LABELS[i],
      mesh: subGroup,
      health: SUBSYSTEM_HP,
      maxHealth: SUBSYSTEM_HP,
      center: new Vector3(cx, cy, cz),
      radius: Math.max(autoRadius, 5) * 1.5,
    };
  });

  group.metadata.subsystems = subsystems;
  group.metadata.index = index;
  group.scaling.setAll(1.5);
  return group;
}
