import { Constants } from '@babylonjs/core/Engines/constants';
import { Color4 } from '@babylonjs/core/Maths/math.color';
import { Sprite as BJSSprite } from '@babylonjs/core/Sprites/sprite';
import { SpriteManager } from '@babylonjs/core/Sprites/spriteManager';
import '@babylonjs/core/Sprites/spriteSceneComponent';

import type { EngineMesh } from '@/shared/core';
import {
  Vector3,
  createAmbientLight,
  createMesh,
  createOctahedronGeometry,
  createRingGeometry,
  createSphereGeometry,
  createUnlitMaterial,
} from '@/shared/core';
import { camera } from '@/shared/engine';
import { scene } from '@/shared/engine';
import { parseHexColor, settings } from '@/shared/settings';

import { createFighter } from '@/entities/fighter';

import { STAR_SYSTEMS } from '@/features/campaign/data';
import { campaign } from '@/features/campaign/state';
import { setStarfieldVisible } from '@/features/flight/starfield';

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
import { STAR_COLORS } from './textures';
import { updateGalaxyScene } from './update';

export { galaxyGroup } from './refs';
export { updateGalaxyScene } from './update';
export { updateGalaxyLabels } from './labels';
export { setGalaxyBrightness, getGalaxyBrightness } from './brightness';

// ── Glow texture data URL for SpriteManager ──────────────────────────────────

function createGlowDataUrl(): string {
  const size = 128;
  const cvs = document.createElement('canvas');
  cvs.width = size;
  cvs.height = size;
  const ctx = cvs.getContext('2d')!;
  const h = size / 2;
  const g = ctx.createRadialGradient(h, h, 0, h, h, h);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.15, 'rgba(255,255,255,0.6)');
  g.addColorStop(0.4, 'rgba(255,255,255,0.15)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return cvs.toDataURL();
}

function hexToColor4(hex: number, alpha: number): Color4 {
  return new Color4(
    ((hex >> 16) & 0xff) / 255,
    ((hex >> 8) & 0xff) / 255,
    (hex & 0xff) / 255,
    alpha,
  );
}

// ── Build scene ──────────────────────────────────────────────────────────────

export function buildGalaxyScene(): void {
  // Clear previous
  while (galaxyGroup.children.length > 0) {
    galaxyGroup.remove(galaxyGroup.children[0]);
  }
  starMeshes.clear();
  starHalos.clear();

  // Dispose old halo SpriteManager
  if (refs.haloManager) {
    refs.haloManager.dispose();
    refs.haloManager = null;
  }

  // Galaxy ambient light (dimmer than combat)
  const ambient = createAmbientLight(0x334466, 0.6);
  galaxyGroup.add(ambient);

  // Background spiral galaxy
  galaxyGroup.add(createBackgroundStars());
  galaxyGroup.add(createGalaxyNebulae());

  // Shared geometry for all star systems (optimized for 1000 systems)
  const sharedStarGeo = createSphereGeometry(0.4, 8, 8);

  // SpriteManager for star glow halos (single draw call for all 1000)
  const haloMgr = new SpriteManager(
    'starHalos',
    createGlowDataUrl(),
    STAR_SYSTEMS.length,
    128,
    scene,
  );
  haloMgr.blendMode = Constants.ALPHA_ADD;
  refs.haloManager = haloMgr;

  // Star systems
  for (let i = 0; i < STAR_SYSTEMS.length; i++) {
    const sys = STAR_SYSTEMS[i];
    const color = STAR_COLORS[i % STAR_COLORS.length];

    // Star sphere (shared geometry, emissive — no PointLight needed)
    const mat = createUnlitMaterial({
      color,
    });
    const mesh = createMesh(sharedStarGeo, mat);
    mesh.position.set(...sys.position);
    mesh.userData.systemId = sys.id;
    galaxyGroup.add(mesh);
    starMeshes.set(sys.id, mesh);

    // Soft glow sprite (BJS native — batched by SpriteManager)
    const sprite = new BJSSprite('halo_' + sys.id, haloMgr);
    sprite.position.set(...sys.position);
    sprite.color = hexToColor4(color, 0.7);
    sprite.size = 2.5;
    starHalos.set(sys.id, sprite);
  }

  // Selection ring (hidden by default)
  const ringGeo = createRingGeometry(0.7, 0.9, 32);
  const ringMat = createUnlitMaterial({
    color: 0xffff00,
    transparent: true,
    opacity: 0.7,
    side: 2,
  });
  refs.selectionRing = createMesh(ringGeo, ringMat);
  refs.selectionRing.rotation.x = -Math.PI / 2;
  refs.selectionRing.visible = false;
  galaxyGroup.add(refs.selectionRing);

  // Contract target marker (red pulsing diamond)
  const diamondGeo = createOctahedronGeometry(0.5, 0);
  const diamondMat = createUnlitMaterial({
    color: 0xff3333,
  });
  refs.contractMarker = createMesh(diamondGeo, diamondMat);
  refs.contractMarker.visible = false;
  galaxyGroup.add(refs.contractMarker);

  // Player ship model (small fighter at current system)
  refs.playerShipModel = createFighter(
    parseHexColor(settings.colors.playerBody),
    parseHexColor(settings.colors.playerExhaust),
  );
  refs.playerShipModel.scale.setAll(0.3);
  galaxyGroup.add(refs.playerShipModel);

  updatePlayerShipPosition();
  recomputeNearby();

  // Set initial scales instantly (no animation on first build)
  for (const [id, mesh] of starMeshes) {
    const s = nearbySystemIds.has(id) ? NEARBY_SCALE : FAR_SCALE;
    starScaleCurrent.set(id, s);
    mesh.scale.setAll(s);
    const halo = starHalos.get(id);
    if (halo) halo.size = 2.5 * s;
  }

  // Hide halos initially (galaxy starts hidden)
  setHaloManagerVisible(false);

  rebuildRouteLines();
  rebuildLabels();
}

// ── Halo manager visibility ──────────────────────────────────────────────────

function setHaloManagerVisible(visible: boolean): void {
  if (!refs.haloManager || !scene.spriteManagers) return;
  const idx = scene.spriteManagers.indexOf(refs.haloManager);
  if (visible && idx < 0) {
    scene.spriteManagers.push(refs.haloManager);
  } else if (!visible && idx >= 0) {
    scene.spriteManagers.splice(idx, 1);
  }
}

// ── Helpers ──────────────────────────────────────────────────────────────────

export function updatePlayerShipPosition(): void {
  const sys = starMeshes.get(campaign.currentSystemId);
  if (sys && refs.playerShipModel) {
    refs.playerShipModel.position.copyFrom(sys.position);
    refs.playerShipModel.position.y += 2.5;
  }
}

export function getStarPosition(systemId: string): Vector3 | null {
  const mesh = starMeshes.get(systemId);
  return mesh ? mesh.position.clone() : null;
}

export function setPlayerShipAt(pos: Vector3): void {
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
    refs.selectionRing.position.copyFrom(mesh.position);
    refs.selectionRing.position.y += 0.05;
    refs.selectionRing.visible = true;
  }
}

export function updateContractMarker(): void {
  if (!refs.contractMarker) return;
  if (campaign.activeContract) {
    const targetMesh = starMeshes.get(campaign.activeContract.targetSystemId);
    if (targetMesh) {
      refs.contractMarker.position.copyFrom(targetMesh.position);
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
  setHaloManagerVisible(true);
  // Increase near plane to clip sprites/points that are too close to camera
  camera.near = 5;
  camera.updateProjectionMatrix();
  if (refs.labelsContainer) refs.labelsContainer.style.display = 'block';
}

export function hideGalaxy(): void {
  galaxyGroup.visible = false;
  setStarfieldVisible(true);
  setHaloManagerVisible(false);
  // Restore near plane for combat mode
  camera.near = 1;
  camera.updateProjectionMatrix();
  if (refs.selectionRing) refs.selectionRing.visible = false;
  if (refs.labelsContainer) refs.labelsContainer.style.display = 'none';
}

export function getStarMeshes(): Map<string, EngineMesh> {
  return starMeshes;
}

// Rebuild routes, labels, and nearby set for current system
export function highlightRoutes(): void {
  recomputeNearby();
  rebuildRouteLines();
  rebuildLabels();
}
