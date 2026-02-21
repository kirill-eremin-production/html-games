import { KILL_TARGET, SUBSYSTEM_SHORT } from '../constants';
import { settings } from '../settings';
import { state } from '../state';

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
    objectiveEl.textContent = `Цель: уничтожить истребителей [${state.totalEnemyKills}/${KILL_TARGET}]`;
  }

  if (state.phase === 1) {
    let html = '<h3>КОРАБЛИ ПРОТИВНИКА</h3>';
    for (const cs of state.capitalShips) {
      if (!cs.alive) {
        html += `<div class="ship-entry"><div class="ship-name" style="color:#666;text-decoration:line-through;">Корабль ${cs.mesh.userData.index + 1} — УНИЧТОЖЕН</div></div>`;
        continue;
      }
      html += `<div class="ship-entry"><div class="ship-name">Корабль ${cs.mesh.userData.index + 1}</div><div class="subsystems">`;
      for (let s = 0; s < cs.subsystems.length; s++) {
        const sub = cs.subsystems[s];
        const alive = sub.health > 0;
        const pct = Math.ceil((sub.health / sub.maxHealth) * 100);
        html += `<div class="subsys-dot ${alive ? 'alive' : 'dead'}" title="${sub.name}: ${alive ? pct + '%' : 'уничтожена'}">${SUBSYSTEM_SHORT[s]}</div>`;
      }
      html += '</div></div>';
    }
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
