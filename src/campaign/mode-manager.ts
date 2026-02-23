import { pauseScreen, refs } from '../main/refs';
import { switchMode } from '../modes/registry';
import { setStarfieldVisible } from '../scene/starfield';

import { DIFFICULTY_CONFIGS } from './balance';
import { hideCombatResult, showCombatQuitResult, showCombatResult } from './combat-result';
import {
  buildExplorationScene,
  ensureExplorationGroup,
  showExploration,
} from './exploration-scene/index';
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

// ── Helpers ──────────────────────────────────────────────────────────────────

function hideAllGameScreens(): void {
  const ids = ['start-screen', 'game-over', 'victory-screen', 'pause-screen'];
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  }
}

function startCampaignCombat(config: CombatConfig): void {
  document.documentElement.requestFullscreen?.();
  refs.paused = false;
  pauseScreen.style.display = 'none';
  switchMode('combat', { combatConfig: config });
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
  // Previous mode's exit() handles its own cleanup (exploration scene, planet markers, etc.)

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

  startCampaignCombat(config);
}

export function onCombatEnd(victory: boolean, score: number): void {
  if (!isCampaignActive) return;

  switchMode('menu');
  // Combat mode's exit() cleans up exploration scene, planet markers, etc.

  switchMode('result');
  showCombatResult(victory, score, () => {
    hideCombatResult();
    regenerateContracts();
    enterStationMode();
  });
}

export function onCombatQuit(): void {
  if (!isCampaignActive) return;

  switchMode('menu');
  // Combat mode's exit() cleans up exploration scene, planet markers, etc.

  switchMode('result');
  const penalty = failContract();
  showCombatQuitResult(penalty, () => {
    hideCombatResult();
    regenerateContracts();
    enterStationMode();
  });
}
