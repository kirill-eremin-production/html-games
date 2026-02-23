import { pauseScreen, refs } from '@/shared/refs/app-refs';

import { DEFAULT_COMBAT_CONFIG } from '@/features/campaign/balance';

import { initAudio, isAudioInitialized, resumeAudio } from '../shared/audio';

import { enterCampaignFromMenu } from './mode-manager';
import { switchMode } from './mode-registry';

export function startQuickPlay(): void {
  document.documentElement.requestFullscreen?.();
  refs.paused = false;
  pauseScreen.style.display = 'none';
  (document.getElementById('start-screen')! as HTMLElement).style.display = 'none';
  (document.getElementById('game-over')! as HTMLElement).style.display = 'none';
  (document.getElementById('victory-screen')! as HTMLElement).style.display = 'none';
  switchMode('combat', { combatConfig: DEFAULT_COMBAT_CONFIG });
}

export function startCampaign(): void {
  (document.getElementById('start-screen')! as HTMLElement).style.display = 'none';
  if (!isAudioInitialized()) initAudio();
  resumeAudio();
  enterCampaignFromMenu();
}
