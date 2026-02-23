import { combatConfig } from '@/shared/config/combat-session';
import { settings } from '@/shared/settings';
import { state } from '@/shared/state';

import { HUD_TEMPLATES } from './hud-templates';

const hudEl = document.getElementById('hud')! as HTMLElement;
const scoreEl = document.getElementById('score')!;
const livesEl = document.getElementById('lives')!;
const healthBarEl = document.getElementById('health-bar')! as HTMLElement;
const allyCountEl = document.getElementById('ally-count')!;
const enemyCountEl = document.getElementById('enemy-count')!;
const speedEl = document.getElementById('speed-indicator')!;
const messageEl = document.getElementById('message')! as HTMLElement;
const mouseCursorEl = document.getElementById('mouse-cursor')! as HTMLElement;
const shipStatusEl = document.getElementById('ship-status')!;
const objectiveEl = document.getElementById('objective')!;
const killFeedEl = document.getElementById('kill-feed')! as HTMLElement;

let cachedShipHTML = '';

export function resetCachedShipHTML(): void {
  cachedShipHTML = '';
}

export function showMessage(text: string, duration = 2): void {
  messageEl.textContent = text;
  (messageEl as HTMLElement).style.opacity = '1';
  state.messageTimer = duration;
}

export function hideMessage(): void {
  (messageEl as HTMLElement).style.opacity = '0';
}

export function updateHUD(): void {
  scoreEl.textContent = String(state.score);
  livesEl.textContent = String(state.lives);
  healthBarEl.style.width = Math.max(0, (state.playerHealth / state.maxHealth) * 100) + '%';

  if (state.playerHealth < 30) {
    healthBarEl.style.background = 'linear-gradient(90deg, #f00, #a00)';
  } else if (state.playerHealth < 60) {
    healthBarEl.style.background = 'linear-gradient(90deg, #fa0, #a80)';
  } else {
    healthBarEl.style.background = 'linear-gradient(90deg, #0ff, #088)';
  }

  allyCountEl.textContent = String(state.allies.length);
  enemyCountEl.textContent = String(state.enemies.length);
  speedEl.textContent = `SPD: ${Math.floor(state.speed)}`;

  const cursorX = (state.mouseX * 0.5 + 0.5) * window.innerWidth;
  const cursorY = (state.mouseY * 0.5 + 0.5) * window.innerHeight;
  mouseCursorEl.style.left = cursorX + 'px';
  mouseCursorEl.style.top = cursorY + 'px';

  if (state.phase === 1) {
    const alive = state.capitalShips.filter((cs) => cs.alive).length;
    const total = settings.counts.capitalShips;
    objectiveEl.textContent = `Цель: уничтожить корабли [${total - alive}/${total}]`;
  } else {
    objectiveEl.textContent = `Цель: уничтожить истребителей [${state.totalEnemyKills}/${combatConfig.killTarget}]`;
  }

  if (state.phase === 1) {
    const html = HUD_TEMPLATES.shipStatus(
      state.capitalShips.map((cs) => ({
        alive: cs.alive,
        index: cs.mesh.userData.index as number,
        subsystems: cs.subsystems,
      })),
    );
    if (html !== cachedShipHTML) {
      cachedShipHTML = html;
      shipStatusEl.innerHTML = html;
    }
    (shipStatusEl as HTMLElement).style.display = 'block';
    killFeedEl.style.top = '';
  } else {
    (shipStatusEl as HTMLElement).style.display = 'none';
    killFeedEl.style.top = '20px';
  }
}

export function showHUD(): void {
  hudEl.style.display = 'block';
}

export function hideHUD(): void {
  hudEl.style.display = 'none';
}
