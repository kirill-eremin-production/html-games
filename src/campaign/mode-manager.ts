import { applyCombatConfig } from '../constants';
import { scene } from '../scene/setup';
import { playerPlane } from '../systems/player';
import { hideHUD, showHUD } from '../ui/hud';
import { DIFFICULTY_CONFIGS } from './balance';
import { hideCombatResult, showCombatResult } from './combat-result';
import { disableGalaxyControls, enableGalaxyControls } from './galaxy-controls';
import {
  buildGalaxyScene,
  galaxyGroup,
  hideGalaxy,
  highlightRoutes,
  showGalaxy,
  updateContractMarker,
  updatePlayerShipPosition,
} from './galaxy-scene';
import {
  campaign,
  isCampaignActive,
  loadCampaign,
  regenerateContracts,
  setIsCampaignActive,
  setMode,
  startCampaign,
} from './state';
import { hideStation, showStation } from './station-ui';
import type { CombatConfig } from './types';

// Callbacks set by main.ts
let startCombatFn: ((config: CombatConfig) => void) | null = null;
let stopCombatFn: (() => void) | null = null;

export function registerCombatCallbacks(
  start: (config: CombatConfig) => void,
  stop: () => void,
): void {
  startCombatFn = start;
  stopCombatFn = stop;
}

// ── Init ─────────────────────────────────────────────────────────────────────

let galaxyBuilt = false;

function ensureGalaxyBuilt(): void {
  if (!galaxyBuilt) {
    buildGalaxyScene();
    scene.add(galaxyGroup);
    galaxyBuilt = true;
  }
}

// ── Mode transitions ─────────────────────────────────────────────────────────

export function enterCampaignFromMenu(): void {
  // Try to load saved campaign, otherwise start fresh
  const loaded = loadCampaign();
  if (!loaded) {
    startCampaign();
  } else {
    // Mark campaign as active when loading saved state
    setIsCampaignActive(true);
    regenerateContracts();
  }

  ensureGalaxyBuilt();
  enterGalaxyMode();
}

export function enterGalaxyMode(resetCamera = true): void {
  setMode('galaxy');

  // Hide other screens
  hideStation();
  hideCombatResult();
  hideHUD();
  hideAllGameScreens();

  // Hide combat player model on galaxy map
  playerPlane.visible = false;

  // Show galaxy
  showGalaxy();
  updatePlayerShipPosition();
  updateContractMarker();
  highlightRoutes();
  enableGalaxyControls(
    () => enterStationMode(),
    () => enterCombatFromContract(),
    resetCamera,
  );
}

export function enterStationMode(): void {
  setMode('station');
  disableGalaxyControls();
  hideGalaxy();
  hideHUD();
  hideAllGameScreens();

  showStation(() => enterGalaxyMode(false));
}

function enterCombatFromContract(): void {
  if (!campaign.activeContract) return;
  const difficulty = campaign.activeContract.difficulty;
  const config = DIFFICULTY_CONFIGS[difficulty];

  setMode('combat');
  disableGalaxyControls();
  hideGalaxy();
  hideStation();
  hideCombatResult();
  hideAllGameScreens();
  showHUD();
  playerPlane.visible = true;

  applyCombatConfig(config);
  if (startCombatFn) startCombatFn(config);
}

export function onCombatEnd(victory: boolean, score: number): void {
  if (!isCampaignActive) return;

  setMode('result');
  hideHUD();
  if (stopCombatFn) stopCombatFn();

  showCombatResult(victory, score, () => {
    hideCombatResult();
    regenerateContracts();
    enterStationMode();
  });
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function hideAllGameScreens(): void {
  const ids = ['start-screen', 'game-over', 'victory-screen', 'pause-screen'];
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  }
}
