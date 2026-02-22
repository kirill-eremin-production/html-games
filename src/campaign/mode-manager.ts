import { refs } from '../main/refs';
import { switchMode } from '../modes/registry';
import { scene } from '../scene/setup';
import { setStarfieldVisible } from '../scene/starfield';
import { hidePlanetMarkers } from '../ui/planet-markers';
import { DIFFICULTY_CONFIGS } from './balance';
import { hideCombatResult, showCombatQuitResult, showCombatResult } from './combat-result';
import {
  buildExplorationScene,
  clearExplorationScene,
  hideExploration,
  showExploration,
} from './exploration-scene/index';
import { explorationGroup } from './exploration-scene/refs';
import {
  campaign,
  failContract,
  isCampaignActive,
  loadCampaign,
  regenerateContracts,
  setIsCampaignActive,
  startCampaign,
} from './state';
import type { CombatConfig } from './types';

// Callbacks set by main/combat.ts
let startCombatFn: ((config: CombatConfig) => void) | null = null;
let stopCombatFn: (() => void) | null = null;

export function registerCombatCallbacks(
  start: (config: CombatConfig) => void,
  stop: () => void,
): void {
  startCombatFn = start;
  stopCombatFn = stop;
}

let explorationAdded = false;

function ensureExplorationGroup(): void {
  if (!explorationAdded) {
    scene.add(explorationGroup);
    explorationAdded = true;
  }
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function hideAllGameScreens(): void {
  const ids = ['start-screen', 'game-over', 'victory-screen', 'pause-screen'];
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  }
}

// ── Mode transitions ─────────────────────────────────────────────────────────

export function enterCampaignFromMenu(): void {
  const loaded = loadCampaign();
  if (!loaded) {
    startCampaign();
  } else {
    setIsCampaignActive(true);
    regenerateContracts();
  }

  enterGalaxyMode();
}

export function enterGalaxyMode(resetCamera = true): void {
  hideAllGameScreens();
  hideCombatResult();
  hidePlanetMarkers();
  clearExplorationScene();
  hideExploration();

  switchMode('galaxy', {
    resetCamera,
    onStation: () => enterStationMode(),
    onCombat: () => enterCombatFromContract(),
    onExploration: () => enterExplorationMode(),
  });
}

export function enterStationMode(): void {
  hideAllGameScreens();
  switchMode('station', {
    onBack: () => enterGalaxyMode(false),
  });
}

export function enterExplorationMode(): void {
  hideAllGameScreens();
  hideCombatResult();

  switchMode('exploration', {
    systemId: campaign.currentSystemId,
    exitCallback: () => exitExplorationMode(),
  });
}

export function exitExplorationMode(): void {
  enterGalaxyMode(false);
}

function enterCombatFromContract(): void {
  if (!campaign.activeContract) return;
  const difficulty = campaign.activeContract.difficulty;
  const config = DIFFICULTY_CONFIGS[difficulty];

  hideAllGameScreens();
  hideCombatResult();

  // Build star system as combat backdrop
  ensureExplorationGroup();
  buildExplorationScene(campaign.currentSystemId);
  showExploration();
  setStarfieldVisible(true);
  refs.explorationTime = 0;

  if (startCombatFn) startCombatFn(config);
}

export function onCombatEnd(victory: boolean, score: number): void {
  if (!isCampaignActive) return;

  if (stopCombatFn) stopCombatFn();
  hidePlanetMarkers();
  clearExplorationScene();
  hideExploration();

  switchMode('result');
  showCombatResult(victory, score, () => {
    hideCombatResult();
    regenerateContracts();
    enterStationMode();
  });
}

export function onCombatQuit(): void {
  if (!isCampaignActive) return;

  if (stopCombatFn) stopCombatFn();
  hidePlanetMarkers();
  clearExplorationScene();
  hideExploration();

  switchMode('result');
  const penalty = failContract();
  showCombatQuitResult(penalty, () => {
    hideCombatResult();
    regenerateContracts();
    enterStationMode();
  });
}
