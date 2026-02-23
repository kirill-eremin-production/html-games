import { initAudio, isAudioInitialized, resumeAudio } from '../audio';

import { DEFAULT_COMBAT_CONFIG } from '../campaign/balance';
import {
  enterCampaignFromMenu,
  onCombatQuit,
  registerCombatCallbacks,
} from '../campaign/mode-manager';
import { isCampaignActive } from '../campaign/state';
import type { CombatConfig } from '../campaign/types';
import { switchMode } from '../modes/registry';
import { state } from '@/shared/state';

import { clock, pauseScreen, refs } from './refs';

// ── Pause ────────────────────────────────────────────────────────────────────

export function pauseGame(): void {
  if (!state.running || refs.paused) return;
  refs.paused = true;
  pauseScreen.style.display = 'flex';
  document.exitFullscreen?.();
}

export function resumeGame(): void {
  if (!refs.paused) return;
  document.documentElement.requestFullscreen?.();
  refs.paused = false;
  pauseScreen.style.display = 'none';
  clock.getDelta(); // discard elapsed time while paused
}

export function quitBattle(): void {
  refs.paused = false;
  pauseScreen.style.display = 'none';
  if (isCampaignActive) {
    onCombatQuit();
  } else {
    switchMode('menu');
    (document.getElementById('start-screen')! as HTMLElement).style.display = 'flex';
  }
}

// ── Start / Stop ─────────────────────────────────────────────────────────────

export function startQuickPlay(): void {
  document.documentElement.requestFullscreen?.();
  refs.paused = false;
  pauseScreen.style.display = 'none';
  (document.getElementById('start-screen')! as HTMLElement).style.display = 'none';
  (document.getElementById('game-over')! as HTMLElement).style.display = 'none';
  (document.getElementById('victory-screen')! as HTMLElement).style.display = 'none';
  switchMode('combat', { combatConfig: DEFAULT_COMBAT_CONFIG });
}

function startCampaignCombat(config: CombatConfig): void {
  document.documentElement.requestFullscreen?.();
  refs.paused = false;
  pauseScreen.style.display = 'none';
  switchMode('combat', { combatConfig: config });
}

function stopCombat(): void {
  switchMode('menu');
}

// Register callbacks for mode manager
registerCombatCallbacks(startCampaignCombat, stopCombat);

// ── Campaign ─────────────────────────────────────────────────────────────────

export function startCampaign(): void {
  (document.getElementById('start-screen')! as HTMLElement).style.display = 'none';
  if (!isAudioInitialized()) initAudio();
  resumeAudio();
  enterCampaignFromMenu();
}
