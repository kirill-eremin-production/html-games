import { initAudio, isAudioInitialized, resumeAudio } from '../audio';

import { DEFAULT_COMBAT_CONFIG } from '../campaign/balance';
import { enterCampaignFromMenu } from '../campaign/mode-manager';
import { switchMode } from '../modes/registry';

import { pauseScreen, refs } from './refs';

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
