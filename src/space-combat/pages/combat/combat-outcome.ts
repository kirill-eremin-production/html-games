import { combatConfig } from '@/shared/config/combat-session';
import { state } from '@/shared/state';

import { isCampaignActive } from '@/features/campaign/state';
import { playerDeath as playerDeathOriginal } from '@/features/flight/player-system';

let _onCombatEnd: ((victory: boolean, score: number) => void) | undefined;

export function setOnCombatEnd(cb?: (victory: boolean, score: number) => void): void {
  _onCombatEnd = cb;
}

export function checkVictory(): void {
  if (state.phase === 1) return;
  if (state.phase === 2 && state.totalEnemyKills >= combatConfig.killTarget) {
    state.running = false;
    if (isCampaignActive && _onCombatEnd) {
      _onCombatEnd(true, state.score);
    } else if (!isCampaignActive) {
      document.getElementById('victory-score')!.textContent =
        `Счёт: ${state.score} | Уничтожено: ${state.totalEnemyKills}`;
      (document.getElementById('victory-screen')! as HTMLElement).style.display = 'flex';
    }
  }
}

export function playerDeath(): void {
  playerDeathOriginal();
  if (state.lives <= 0 && isCampaignActive && !state.running) {
    (document.getElementById('game-over')! as HTMLElement).style.display = 'none';
    _onCombatEnd?.(false, state.score);
  }
}
