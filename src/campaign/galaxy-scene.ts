import * as THREE from 'three';
import { createFighter } from '../scene/models';
import { parseHexColor, settings } from '../settings';
import { STAR_SYSTEMS } from './data';
import { campaign } from './state';

export const galaxyGroup = new THREE.Group();
galaxyGroup.visible = false;

// ── Internal refs ────────────────────────────────────────────────────────────

const starMeshes = new Map<string, THREE.Mesh>();
const starGlows = new Map<string, THREE.PointLight>();
const routeLines: THREE.Line[] = [];
let playerShipModel: THREE.Group | null = null;
let selectionRing: THREE.Mesh | null = null;
let contractMarker: THREE.Mesh | null = null;

const _pulse = { time: 0 };
const _projVec = new THREE.Vector3();

let labelsContainer: HTMLElement | null = null;
const labelElements = new Map<string, HTMLElement>();

// Star colors by index for variety
const STAR_COLORS = [
  0x66ccff, // cyan-blue
  0xffaa44, // orange
  0x88ff66, // green
  0xff6688, // pink
  0xffdd44, // yellow
  0xaa88ff, // purple
  0x44ffcc, // teal
  0xff8844, // amber
];

// ── Build scene ──────────────────────────────────────────────────────────────

export function buildGalaxyScene(): void {
  // Clear previous
  while (galaxyGroup.children.length > 0) {
    galaxyGroup.remove(galaxyGroup.children[0]);
  }
  starMeshes.clear();
  starGlows.clear();
  routeLines.length = 0;

  // Galaxy ambient light (dimmer than combat)
  const ambient = new THREE.AmbientLight(0x334466, 0.6);
  galaxyGroup.add(ambient);

  // Star systems
  for (let i = 0; i < STAR_SYSTEMS.length; i++) {
    const sys = STAR_SYSTEMS[i];
    const color = STAR_COLORS[i % STAR_COLORS.length];

    // Star sphere
    const geo = new THREE.SphereGeometry(1.2, 16, 16);
    const mat = new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: 0.8,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(...sys.position);
    mesh.userData.systemId = sys.id;
    galaxyGroup.add(mesh);
    starMeshes.set(sys.id, mesh);

    // Point light
    const light = new THREE.PointLight(color, 1.5, 15);
    light.position.set(...sys.position);
    galaxyGroup.add(light);
    starGlows.set(sys.id, light);
  }

  // Route lines (avoid duplicates)
  const drawnRoutes = new Set<string>();
  for (const sys of STAR_SYSTEMS) {
    for (const connId of sys.connections) {
      const key = [sys.id, connId].sort().join('-');
      if (drawnRoutes.has(key)) continue;
      drawnRoutes.add(key);

      const from = starMeshes.get(sys.id)!;
      const to = starMeshes.get(connId)!;
      const points = [from.position, to.position];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color: 0x0088aa,
        transparent: true,
        opacity: 0.25,
      });
      const line = new THREE.Line(geo, mat);
      galaxyGroup.add(line);
      routeLines.push(line);
    }
  }

  // Selection ring (hidden by default)
  const ringGeo = new THREE.RingGeometry(1.8, 2.2, 32);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    transparent: true,
    opacity: 0.7,
    side: THREE.DoubleSide,
  });
  selectionRing = new THREE.Mesh(ringGeo, ringMat);
  selectionRing.rotation.x = -Math.PI / 2;
  selectionRing.visible = false;
  galaxyGroup.add(selectionRing);

  // Contract target marker (red pulsing diamond)
  const diamondGeo = new THREE.OctahedronGeometry(0.6, 0);
  const diamondMat = new THREE.MeshStandardMaterial({
    color: 0xff3333,
    emissive: 0xff3333,
    emissiveIntensity: 0.6,
  });
  contractMarker = new THREE.Mesh(diamondGeo, diamondMat);
  contractMarker.visible = false;
  galaxyGroup.add(contractMarker);

  // Player ship model (small fighter at current system)
  playerShipModel = createFighter(
    parseHexColor(settings.colors.playerBody),
    parseHexColor(settings.colors.playerExhaust),
  );
  playerShipModel.scale.setScalar(0.3);
  galaxyGroup.add(playerShipModel);

  updatePlayerShipPosition();

  // Create HTML labels for each star system
  if (!labelsContainer) {
    labelsContainer = document.createElement('div');
    labelsContainer.id = 'galaxy-labels';
    document.body.appendChild(labelsContainer);
  }
  for (const el of labelElements.values()) el.remove();
  labelElements.clear();
  for (const sys of STAR_SYSTEMS) {
    const label = document.createElement('div');
    label.className = 'galaxy-label';
    label.textContent = sys.name;
    labelsContainer.appendChild(label);
    labelElements.set(sys.id, label);
  }
}

// ── Update ───────────────────────────────────────────────────────────────────

export function updateGalaxyScene(dt: number): void {
  _pulse.time += dt;

  // Current system pulse
  const currentMesh = starMeshes.get(campaign.currentSystemId);
  if (currentMesh) {
    const mat = currentMesh.material as THREE.MeshStandardMaterial;
    mat.emissiveIntensity = 0.8 + Math.sin(_pulse.time * 3) * 0.3;
  }
  const currentLight = starGlows.get(campaign.currentSystemId);
  if (currentLight) {
    currentLight.intensity = 1.5 + Math.sin(_pulse.time * 3) * 0.5;
  }

  // Contract marker animation
  if (contractMarker && contractMarker.visible) {
    contractMarker.rotation.y += dt * 2;
    contractMarker.position.y = contractMarker.userData.baseY + Math.sin(_pulse.time * 4) * 0.5;
    const mat = contractMarker.material as THREE.MeshStandardMaterial;
    mat.emissiveIntensity = 0.4 + Math.sin(_pulse.time * 5) * 0.3;
  }

  // Rotate player ship model gently
  if (playerShipModel) {
    playerShipModel.rotation.y += dt * 0.5;
  }

  // Selection ring pulse
  if (selectionRing && selectionRing.visible) {
    const mat = selectionRing.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.5 + Math.sin(_pulse.time * 4) * 0.2;
  }
}

// ── Label projection ─────────────────────────────────────────────────────────

export function updateGalaxyLabels(cam: THREE.Camera): void {
  if (!labelsContainer) return;
  const w = window.innerWidth;
  const h = window.innerHeight;

  for (const sys of STAR_SYSTEMS) {
    const mesh = starMeshes.get(sys.id);
    const label = labelElements.get(sys.id);
    if (!mesh || !label) continue;

    _projVec.copy(mesh.position);
    _projVec.project(cam);

    // Behind camera
    if (_projVec.z > 1) {
      label.style.display = 'none';
      continue;
    }

    const x = (0.5 + _projVec.x / 2) * w;
    const y = (0.5 - _projVec.y / 2) * h;

    label.style.display = '';
    label.style.left = `${x}px`;
    label.style.top = `${y + 18}px`;

    // Highlight current system
    label.classList.toggle('current', sys.id === campaign.currentSystemId);
    // Highlight contract target
    label.classList.toggle('contract-target', campaign.activeContract?.targetSystemId === sys.id);
  }
}

// ── Helpers ──────────────────────────────────────────────────────────────────

export function updatePlayerShipPosition(): void {
  const sys = starMeshes.get(campaign.currentSystemId);
  if (sys && playerShipModel) {
    playerShipModel.position.copy(sys.position);
    playerShipModel.position.y += 2.5;
  }
}

export function getStarPosition(systemId: string): THREE.Vector3 | null {
  const mesh = starMeshes.get(systemId);
  return mesh ? mesh.position.clone() : null;
}

export function setPlayerShipAt(pos: THREE.Vector3): void {
  if (playerShipModel) {
    playerShipModel.position.set(pos.x, pos.y + 2.5, pos.z);
  }
}

export function selectSystem(systemId: string | null): void {
  if (!selectionRing) return;
  if (!systemId) {
    selectionRing.visible = false;
    return;
  }
  const mesh = starMeshes.get(systemId);
  if (mesh) {
    selectionRing.position.copy(mesh.position);
    selectionRing.position.y += 0.05;
    selectionRing.visible = true;
  }
}

export function updateContractMarker(): void {
  if (!contractMarker) return;
  if (campaign.activeContract) {
    const targetMesh = starMeshes.get(campaign.activeContract.targetSystemId);
    if (targetMesh) {
      contractMarker.position.copy(targetMesh.position);
      contractMarker.userData.baseY = targetMesh.position.y + 3.5;
      contractMarker.position.y = contractMarker.userData.baseY;
      contractMarker.visible = true;
      return;
    }
  }
  contractMarker.visible = false;
}

export function showGalaxy(): void {
  galaxyGroup.visible = true;
  if (labelsContainer) labelsContainer.style.display = 'block';
}

export function hideGalaxy(): void {
  galaxyGroup.visible = false;
  if (selectionRing) selectionRing.visible = false;
  if (labelsContainer) labelsContainer.style.display = 'none';
}

export function getStarMeshes(): Map<string, THREE.Mesh> {
  return starMeshes;
}

// Highlight accessible routes from current system
export function highlightRoutes(): void {
  const currentSys = STAR_SYSTEMS.find((s) => s.id === campaign.currentSystemId);
  if (!currentSys) return;
  const connSet = new Set(currentSys.connections);

  for (const line of routeLines) {
    const mat = line.material as THREE.LineBasicMaterial;
    // Check if this line connects to current system
    const geo = line.geometry as THREE.BufferGeometry;
    const positions = geo.attributes.position;
    const p1 = new THREE.Vector3(positions.getX(0), positions.getY(0), positions.getZ(0));

    let isConnected = false;
    const currentMesh = starMeshes.get(campaign.currentSystemId);
    if (currentMesh && p1.distanceTo(currentMesh.position) < 0.1) {
      isConnected = true;
    } else if (currentMesh) {
      const p2 = new THREE.Vector3(positions.getX(1), positions.getY(1), positions.getZ(1));
      if (p2.distanceTo(currentMesh.position) < 0.1) {
        isConnected = true;
      }
    }

    if (isConnected) {
      mat.opacity = 0.6;
      mat.color.set(0x00ccff);
    } else {
      mat.opacity = 0.15;
      mat.color.set(0x0088aa);
    }
  }
}
