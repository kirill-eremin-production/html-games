import { KILL_FEED_DURATION, KILL_FEED_MAX } from '@/shared/constants';
import { state } from '@/shared/state';
import type { KillFeedEntry } from '@/shared/types';

const killFeedEl = document.getElementById('kill-feed')!;

export function addKillFeedEntry(
  killerName: string,
  victimName: string,
  killerTeam: KillFeedEntry['killerTeam'],
  victimTeam: KillFeedEntry['victimTeam'],
): void {
  state.killFeed.push({
    killer: killerName,
    victim: victimName,
    killerTeam,
    victimTeam,
    timer: KILL_FEED_DURATION,
  });
  if (state.killFeed.length > KILL_FEED_MAX) {
    state.killFeed.shift();
  }
  renderKillFeed();
}

function renderKillFeed(): void {
  let html = '';
  for (const entry of state.killFeed) {
    const kClass = 'kf-killer-' + entry.killerTeam;
    const vClass = 'kf-victim-' + entry.victimTeam;
    const opacity = Math.min(1, entry.timer / 1.5);
    html += `<div class="kf-entry" style="opacity:${opacity}"><span class="${kClass}">${entry.killer}</span><span class="kf-arrow"> \u25BA </span><span class="${vClass}">${entry.victim}</span></div>`;
  }
  killFeedEl.innerHTML = html;
}

export function updateKillFeed(dt: number): void {
  let changed = false;
  for (let i = state.killFeed.length - 1; i >= 0; i--) {
    state.killFeed[i].timer -= dt;
    if (state.killFeed[i].timer <= 0) {
      state.killFeed.splice(i, 1);
      changed = true;
    }
  }
  if (changed) renderKillFeed();
}

export function clearKillFeed(): void {
  killFeedEl.innerHTML = '';
}
