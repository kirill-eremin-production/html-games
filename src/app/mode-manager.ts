import { pauseScreen, refs } from '@/shared/refs/app-refs';

import { DIFFICULTY_CONFIGS } from '@/features/campaign/balance';
import {
  campaign,
  failContract,
  isCampaignActive,
  loadCampaign,
  regenerateContracts,
  setIsCampaignActive,
  startCampaign,
} from '@/features/campaign/state';
import type { CombatConfig } from '@/features/campaign/types';
import { setStarfieldVisible } from '@/features/flight/starfield';

import {
  buildExplorationScene,
  ensureExplorationGroup,
  showExploration,
} from '@/pages/exploration/scene/index';
import {
  hideCombatResult,
  showCombatQuitResult,
  showCombatResult,
} from '@/pages/result/combat-result';

import { switchMode } from './mode-registry';

// ── Helpers ──────────────────────────────────────────────────────────────────

function hideAllGameScreens(): void {
  const ids = ['start-screen', 'game-over', 'victory-screen', 'pause-screen'];
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  }
}

function startCampaignCombat(
  config: CombatConfig,
  onEnd: (victory: boolean, score: number) => void,
): void {
  document.documentElement.requestFullscreen?.();
  refs.paused = false;
  pauseScreen.style.display = 'none';
  switchMode('combat', { combatConfig: config, onCombatEnd: onEnd });
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

  startCampaignCombat(config, onCombatEnd);
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
