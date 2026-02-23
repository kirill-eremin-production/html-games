import { clock, pauseScreen, refs } from '@/shared/refs/app-refs';
import { state } from '@/shared/state';

import { isCampaignActive } from '@/features/campaign/state';

import { onCombatQuit } from './mode-manager';
import { switchMode } from './mode-registry';

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
