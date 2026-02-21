import * as THREE from 'three';
import { createFighter } from '../../scene/models';
import { camera } from '../../scene/setup';
import { setStarfieldVisible } from '../../scene/starfield';
import { parseHexColor, settings } from '../../settings';
import { STAR_SYSTEMS } from '../data';
import { campaign } from '../state';
import { createBackgroundStars } from './background';
import { rebuildLabels, updateGalaxyLabels } from './labels';
import { recomputeNearby } from './nearby';
import { createGalaxyNebulae } from './nebulae';
import {
  FAR_SCALE,
  NEARBY_SCALE,
  galaxyGroup,
  nearbySystemIds,
  refs,
  starHalos,
  starMeshes,
  starScaleCurrent,
} from './refs';
import { rebuildRouteLines } from './routes';
import { STAR_COLORS, getGlowTexture } from './textures';
import { updateGalaxyScene } from './update';

export { galaxyGroup } from './refs';
export { updateGalaxyScene } from './update';
export { updateGalaxyLabels } from './labels';
export { setGalaxyBrightness, getGalaxyBrightness } from './brightness';

// ── Build scene ──────────────────────────────────────────────────────────────

export function buildGalaxyScene(): void {
  // Clear previous
  while (galaxyGroup.children.length > 0) {
    galaxyGroup.remove(galaxyGroup.children[0]);
  }
  starMeshes.clear();
  starHalos.clear();

  // Galaxy ambient light (dimmer than combat)
  const ambient = new THREE.AmbientLight(0x334466, 0.6);
  galaxyGroup.add(ambient);

  // Background spiral galaxy
  galaxyGroup.add(createBackgroundStars());
  galaxyGroup.add(createGalaxyNebulae());

  // Shared geometry for all star systems (optimized for 1000 systems)
  const sharedStarGeo = new THREE.SphereGeometry(0.4, 8, 8);
  const glowTexture = getGlowTexture();

  // Star systems
  for (let i = 0; i < STAR_SYSTEMS.length; i++) {
    const sys = STAR_SYSTEMS[i];
    const color = STAR_COLORS[i % STAR_COLORS.length];

    // Star sphere (shared geometry, emissive — no PointLight needed)
    const mat = new THREE.MeshBasicMaterial({
      color,
    });
    const mesh = new THREE.Mesh(sharedStarGeo, mat);
    mesh.position.set(...sys.position);
    mesh.userData.systemId = sys.id;
    galaxyGroup.add(mesh);
    starMeshes.set(sys.id, mesh);

    // Soft glow sprite
    const spriteMat = new THREE.SpriteMaterial({
      map: glowTexture,
      color,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.position.set(...sys.position);
    sprite.scale.setScalar(2.5);
    galaxyGroup.add(sprite);
    starHalos.set(sys.id, sprite);
  }

  // Selection ring (hidden by default)
  const ringGeo = new THREE.RingGeometry(0.7, 0.9, 32);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    transparent: true,
    opacity: 0.7,
    side: THREE.DoubleSide,
  });
  refs.selectionRing = new THREE.Mesh(ringGeo, ringMat);
  refs.selectionRing.rotation.x = -Math.PI / 2;
  refs.selectionRing.visible = false;
  galaxyGroup.add(refs.selectionRing);

  // Contract target marker (red pulsing diamond)
  const diamondGeo = new THREE.OctahedronGeometry(0.5, 0);
  const diamondMat = new THREE.MeshBasicMaterial({
    color: 0xff3333,
  });
  refs.contractMarker = new THREE.Mesh(diamondGeo, diamondMat);
  refs.contractMarker.visible = false;
  galaxyGroup.add(refs.contractMarker);

  // Player ship model (small fighter at current system)
  refs.playerShipModel = createFighter(
    parseHexColor(settings.colors.playerBody),
    parseHexColor(settings.colors.playerExhaust),
  );
  refs.playerShipModel.scale.setScalar(0.3);
  galaxyGroup.add(refs.playerShipModel);

  updatePlayerShipPosition();
  recomputeNearby();

  // Set initial scales instantly (no animation on first build)
  for (const [id, mesh] of starMeshes) {
    const s = nearbySystemIds.has(id) ? NEARBY_SCALE : FAR_SCALE;
    starScaleCurrent.set(id, s);
    mesh.scale.setScalar(s);
    const halo = starHalos.get(id);
    if (halo) halo.scale.setScalar(2.5 * s);
  }

  rebuildRouteLines();
  rebuildLabels();
}

// ── Helpers ──────────────────────────────────────────────────────────────────

export function updatePlayerShipPosition(): void {
  const sys = starMeshes.get(campaign.currentSystemId);
  if (sys && refs.playerShipModel) {
    refs.playerShipModel.position.copy(sys.position);
    refs.playerShipModel.position.y += 2.5;
  }
}

export function getStarPosition(systemId: string): THREE.Vector3 | null {
  const mesh = starMeshes.get(systemId);
  return mesh ? mesh.position.clone() : null;
}

export function setPlayerShipAt(pos: THREE.Vector3): void {
  if (refs.playerShipModel) {
    refs.playerShipModel.position.set(pos.x, pos.y + 2.5, pos.z);
  }
}

export function selectSystem(systemId: string | null): void {
  if (!refs.selectionRing) return;
  if (!systemId) {
    refs.selectionRing.visible = false;
    return;
  }
  const mesh = starMeshes.get(systemId);
  if (mesh) {
    refs.selectionRing.position.copy(mesh.position);
    refs.selectionRing.position.y += 0.05;
    refs.selectionRing.visible = true;
  }
}

export function updateContractMarker(): void {
  if (!refs.contractMarker) return;
  if (campaign.activeContract) {
    const targetMesh = starMeshes.get(campaign.activeContract.targetSystemId);
    if (targetMesh) {
      refs.contractMarker.position.copy(targetMesh.position);
      refs.contractMarker.userData.baseY = targetMesh.position.y + 3.5;
      refs.contractMarker.position.y = refs.contractMarker.userData.baseY;
      refs.contractMarker.visible = true;
      return;
    }
  }
  refs.contractMarker.visible = false;
}

export function showGalaxy(): void {
  galaxyGroup.visible = true;
  setStarfieldVisible(false);
  // Increase near plane to clip sprites/points that are too close to camera
  camera.near = 5;
  camera.updateProjectionMatrix();
  if (refs.labelsContainer) refs.labelsContainer.style.display = 'block';
}

export function hideGalaxy(): void {
  galaxyGroup.visible = false;
  setStarfieldVisible(true);
  // Restore near plane for combat mode
  camera.near = 1;
  camera.updateProjectionMatrix();
  if (refs.selectionRing) refs.selectionRing.visible = false;
  if (refs.labelsContainer) refs.labelsContainer.style.display = 'none';
}

export function getStarMeshes(): Map<string, THREE.Mesh> {
  return starMeshes;
}

// Rebuild routes, labels, and nearby set for current system
export function highlightRoutes(): void {
  recomputeNearby();
  rebuildRouteLines();
  rebuildLabels();
}
