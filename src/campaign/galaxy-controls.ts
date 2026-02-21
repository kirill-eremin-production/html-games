import * as THREE from 'three';
import { camera } from '../scene/setup';
import { isTouchDevice } from '../ui/touch-controls';
import { STAR_SYSTEMS, getFuelCost, getSystem } from './data';
import {
  getStarMeshes,
  getStarPosition,
  highlightRoutes,
  selectSystem,
  setPlayerShipAt,
  updateContractMarker,
  updatePlayerShipPosition,
} from './galaxy-scene';
import { campaign, regenerateContracts, spendFuel, travelToSystem } from './state';

// ── State ────────────────────────────────────────────────────────────────────

let enabled = false;
let selectedSystemId: string | null = null;

// Orbit camera state
let orbitTheta = 0; // horizontal angle
let orbitPhi = Math.PI / 4; // vertical angle (from top)
let orbitRadius = 52;
let orbitTarget = new THREE.Vector3(0, 0, 0);

// Mouse drag
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let lastMouseX = 0;
let lastMouseY = 0;

// Touch state
let touchDragId: number | null = null;
let touchStartX = 0;
let touchStartY = 0;
let lastTouchX = 0;
let lastTouchY = 0;
let pinchStartDist = 0;
let pinchStartRadius = 0;
let isPinching = false;

// Travel animation
let traveling = false;
let travelFromPos = new THREE.Vector3();
let travelToPos = new THREE.Vector3();
let travelProgress = 0;
const TRAVEL_DURATION = 1.5; // seconds
let travelTargetId: string | null = null;
let travelIsContractTarget = false;
const _lerpPos = new THREE.Vector3();

// Callbacks
let onArriveAtStation: (() => void) | null = null;
let onStartCombat: (() => void) | null = null;

// ── HTML UI Elements ─────────────────────────────────────────────────────────

let galaxyHud: HTMLElement | null = null;
let infoPanel: HTMLElement | null = null;
let galaxyHint: HTMLElement | null = null;

function ensureUI(): void {
  galaxyHud = document.getElementById('galaxy-hud');
  infoPanel = document.getElementById('galaxy-info-panel');
  if (!galaxyHint) {
    galaxyHint = document.createElement('div');
    galaxyHint.id = 'galaxy-hint';
    galaxyHint.textContent = isTouchDevice()
      ? 'Нажмите на звезду для выбора  •  Проведите для вращения  •  Щипок — масштаб'
      : 'Нажмите на звезду для выбора  •  Перетаскивайте для вращения  •  Колёсико — масштаб';
    document.body.appendChild(galaxyHint);
  }
}

function updateGalaxyHud(): void {
  if (!galaxyHud) return;
  galaxyHud.innerHTML = `<span class="gal-money">${campaign.money}₵</span> <span class="gal-fuel">⛽ ${campaign.fuel}/${campaign.maxFuel}</span>`;
  if (campaign.activeContract) {
    const target = getSystem(campaign.activeContract.targetSystemId);
    galaxyHud.innerHTML += `<br><span class="gal-contract">Контракт → ${target.name}</span>`;
  }
}

function updateInfoPanel(): void {
  if (!infoPanel) return;
  if (!selectedSystemId) {
    infoPanel.style.display = 'none';
    return;
  }

  const sys = getSystem(selectedSystemId);
  const isCurrent = selectedSystemId === campaign.currentSystemId;
  const currentSys = getSystem(campaign.currentSystemId);
  const isConnected = currentSys.connections.includes(selectedSystemId);
  const fuelCost = isConnected ? getFuelCost(campaign.currentSystemId, selectedSystemId) : 0;
  const canTravel = isConnected && !isCurrent && campaign.fuel >= fuelCost;

  // Check if this is the contract target
  const isContractTarget = campaign.activeContract?.targetSystemId === selectedSystemId;

  let html = `<h3>${sys.name}</h3>`;
  if (isCurrent) {
    html += '<div class="gal-info-line">Вы здесь</div>';
    html += '<button class="gal-btn" id="gal-station-btn">НА СТАНЦИЮ</button>';
  } else if (isConnected) {
    html += `<div class="gal-info-line">Топливо: ${fuelCost} ед.</div>`;
    if (isContractTarget) {
      html += '<div class="gal-info-line gal-contract-marker">Цель контракта!</div>';
    }
    if (canTravel) {
      html += '<button class="gal-btn" id="gal-travel-btn">ЛЕТЕТЬ</button>';
    } else {
      html += '<div class="gal-info-line gal-no-fuel">Недостаточно топлива</div>';
    }
  } else {
    html += '<div class="gal-info-line gal-no-route">Нет прямого маршрута</div>';
  }

  infoPanel.innerHTML = html;
  infoPanel.style.display = 'block';

  // Bind buttons
  const stationBtn = document.getElementById('gal-station-btn');
  if (stationBtn) {
    stationBtn.addEventListener('click', () => {
      if (onArriveAtStation) onArriveAtStation();
    });
  }

  const travelBtn = document.getElementById('gal-travel-btn');
  if (travelBtn) {
    travelBtn.addEventListener('click', () => {
      if (!selectedSystemId || !isConnected || traveling) return;
      if (!spendFuel(fuelCost)) return;
      startTravelAnimation(selectedSystemId);
    });
  }
}

// ── Travel animation ─────────────────────────────────────────────────────────

function startTravelAnimation(targetId: string): void {
  const fromPos = getStarPosition(campaign.currentSystemId);
  const toPos = getStarPosition(targetId);
  if (!fromPos || !toPos) return;

  travelFromPos.copy(fromPos);
  travelToPos.copy(toPos);
  travelProgress = 0;
  travelTargetId = targetId;
  travelIsContractTarget =
    campaign.activeContract?.targetSystemId === targetId;
  traveling = true;

  // Hide info panel during travel
  selectedSystemId = null;
  selectSystem(null);
  if (infoPanel) infoPanel.style.display = 'none';
  updateGalaxyHud();
}

export function updateTravelAnimation(dt: number): void {
  if (!traveling || !travelTargetId) return;

  travelProgress += dt / TRAVEL_DURATION;

  if (travelProgress >= 1) {
    travelProgress = 1;
    traveling = false;

    // Complete travel
    travelToSystem(travelTargetId);
    updatePlayerShipPosition();
    highlightRoutes();
    updateContractMarker();
    updateGalaxyHud();

    // Center camera on new system
    const sys = getSystem(travelTargetId);
    orbitTarget.set(...sys.position);
    updateCamera();

    if (travelIsContractTarget && campaign.activeContract) {
      if (onStartCombat) onStartCombat();
    } else {
      regenerateContracts();
    }
    return;
  }

  // EaseInOut quad
  const t = travelProgress;
  const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  // Move player ship along straight path
  _lerpPos.lerpVectors(travelFromPos, travelToPos, ease);
  setPlayerShipAt(_lerpPos);

  // Camera follows smoothly
  orbitTarget.lerpVectors(travelFromPos, travelToPos, ease);
  updateCamera();
}

// ── Camera ───────────────────────────────────────────────────────────────────

function updateCamera(): void {
  const x = orbitTarget.x + orbitRadius * Math.sin(orbitPhi) * Math.sin(orbitTheta);
  const y = orbitTarget.y + orbitRadius * Math.cos(orbitPhi);
  const z = orbitTarget.z + orbitRadius * Math.sin(orbitPhi) * Math.cos(orbitTheta);
  camera.position.set(x, y, z);
  camera.lookAt(orbitTarget);
}

export function setupGalaxyCamera(): void {
  // Reset camera up vector (combat modifies it via player quaternion)
  camera.up.set(0, 1, 0);
  // Center camera on current system
  const sys = getSystem(campaign.currentSystemId);
  orbitTarget.set(...sys.position);
  orbitTheta = 0;
  orbitPhi = Math.PI / 4;
  orbitRadius = 52;
  updateCamera();
}

// ── Event handlers ───────────────────────────────────────────────────────────

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

/** Check if event target is an HTML UI overlay (buttons, panels) */
function isUIElement(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return !!target.closest('#galaxy-info-panel, #galaxy-hud');
}

function onMouseDown(e: MouseEvent): void {
  if (!enabled || traveling) return;
  if (isUIElement(e.target)) return;
  if (e.button === 0) {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  }
}

function onMouseMove(e: MouseEvent): void {
  if (!enabled || traveling) return;
  if (isDragging) {
    const dx = e.clientX - lastMouseX;
    const dy = e.clientY - lastMouseY;
    orbitTheta -= dx * 0.005;
    orbitPhi = Math.max(0.2, Math.min(Math.PI / 2.2, orbitPhi - dy * 0.005));
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    updateCamera();
  }
}

function onMouseUp(e: MouseEvent): void {
  if (!enabled || traveling) return;
  if (isUIElement(e.target)) {
    isDragging = false;
    return;
  }
  if (e.button === 0) {
    const moved = Math.abs(e.clientX - dragStartX) > 3 || Math.abs(e.clientY - dragStartY) > 3;
    isDragging = false;
    if (!moved) {
      // Click → raycast to pick star
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      const meshes = Array.from(getStarMeshes().values());
      const hits = raycaster.intersectObjects(meshes);
      if (hits.length > 0) {
        const id = hits[0].object.userData.systemId as string;
        selectedSystemId = id;
        selectSystem(id);
      } else {
        selectedSystemId = null;
        selectSystem(null);
      }
      updateInfoPanel();
    }
  }
}

function onWheel(e: WheelEvent): void {
  if (!enabled || traveling) return;
  e.preventDefault();
  orbitRadius = Math.max(10, Math.min(120, orbitRadius + e.deltaY * 0.05));
  updateCamera();
}

// ── Touch handlers ────────────────────────────────────────────────────────────

function getTouchDist(e: TouchEvent): number {
  const t0 = e.touches[0];
  const t1 = e.touches[1];
  const dx = t0.clientX - t1.clientX;
  const dy = t0.clientY - t1.clientY;
  return Math.sqrt(dx * dx + dy * dy);
}

function onTouchStart(e: TouchEvent): void {
  if (!enabled || traveling) return;
  if (isUIElement(e.target)) return;

  if (e.touches.length === 2) {
    // Start pinch zoom
    isPinching = true;
    touchDragId = null;
    pinchStartDist = getTouchDist(e);
    pinchStartRadius = orbitRadius;
    e.preventDefault();
    return;
  }

  if (e.touches.length === 1) {
    const t = e.touches[0];
    touchDragId = t.identifier;
    touchStartX = t.clientX;
    touchStartY = t.clientY;
    lastTouchX = t.clientX;
    lastTouchY = t.clientY;
    e.preventDefault();
  }
}

function onTouchMove(e: TouchEvent): void {
  if (!enabled || traveling) return;

  if (isPinching && e.touches.length >= 2) {
    e.preventDefault();
    const dist = getTouchDist(e);
    const scale = pinchStartDist / dist;
    orbitRadius = Math.max(10, Math.min(120, pinchStartRadius * scale));
    updateCamera();
    return;
  }

  if (touchDragId === null) return;
  for (let i = 0; i < e.changedTouches.length; i++) {
    const t = e.changedTouches[i];
    if (t.identifier === touchDragId) {
      e.preventDefault();
      const dx = t.clientX - lastTouchX;
      const dy = t.clientY - lastTouchY;
      orbitTheta -= dx * 0.005;
      orbitPhi = Math.max(0.2, Math.min(Math.PI / 2.2, orbitPhi - dy * 0.005));
      lastTouchX = t.clientX;
      lastTouchY = t.clientY;
      updateCamera();
    }
  }
}

function onTouchEnd(e: TouchEvent): void {
  if (!enabled || traveling) return;

  if (isPinching) {
    if (e.touches.length < 2) isPinching = false;
    return;
  }

  for (let i = 0; i < e.changedTouches.length; i++) {
    const t = e.changedTouches[i];
    if (t.identifier !== touchDragId) continue;
    touchDragId = null;

    const moved =
      Math.abs(t.clientX - touchStartX) > 8 || Math.abs(t.clientY - touchStartY) > 8;
    if (moved) return;

    // Tap → raycast to pick star
    mouse.x = (t.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(t.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const meshes = Array.from(getStarMeshes().values());
    const hits = raycaster.intersectObjects(meshes);
    if (hits.length > 0) {
      const id = hits[0].object.userData.systemId as string;
      selectedSystemId = id;
      selectSystem(id);
    } else {
      selectedSystemId = null;
      selectSystem(null);
    }
    updateInfoPanel();
  }
}

// ── Enable / Disable ─────────────────────────────────────────────────────────

export function enableGalaxyControls(
  stationCb: () => void,
  combatCb: () => void,
  resetCamera = true,
): void {
  ensureUI();
  enabled = true;
  selectedSystemId = null;
  onArriveAtStation = stationCb;
  onStartCombat = combatCb;

  window.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
  window.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('touchstart', onTouchStart, { passive: false });
  window.addEventListener('touchmove', onTouchMove, { passive: false });
  window.addEventListener('touchend', onTouchEnd);
  window.addEventListener('touchcancel', onTouchEnd);

  if (resetCamera) {
    setupGalaxyCamera();
  } else {
    // Re-center on current system but keep orbit angles and zoom
    const sys = getSystem(campaign.currentSystemId);
    orbitTarget.set(...sys.position);
    camera.up.set(0, 1, 0);
    updateCamera();
  }
  highlightRoutes();
  updateContractMarker();
  updateGalaxyHud();
  selectSystem(null);
  if (infoPanel) infoPanel.style.display = 'none';
  if (galaxyHud) galaxyHud.style.display = 'block';
  if (galaxyHint) galaxyHint.style.display = 'block';

  // Show cursor for galaxy map via CSS class
  document.body.classList.add('galaxy-mode');
}

export function disableGalaxyControls(): void {
  enabled = false;
  window.removeEventListener('mousedown', onMouseDown);
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', onMouseUp);
  window.removeEventListener('wheel', onWheel);
  window.removeEventListener('touchstart', onTouchStart);
  window.removeEventListener('touchmove', onTouchMove);
  window.removeEventListener('touchend', onTouchEnd);
  window.removeEventListener('touchcancel', onTouchEnd);

  if (galaxyHud) galaxyHud.style.display = 'none';
  if (infoPanel) infoPanel.style.display = 'none';
  if (galaxyHint) galaxyHint.style.display = 'none';

  // Restore cursor
  document.body.classList.remove('galaxy-mode');
}
