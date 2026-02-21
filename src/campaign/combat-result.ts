import { campaign, completeContract } from './state';

let resultScreen: HTMLElement | null = null;
let onContinue: (() => void) | null = null;

export function showCombatResult(
  victory: boolean,
  combatScore: number,
  continueCb: () => void,
): void {
  resultScreen = document.getElementById('combat-result');
  if (!resultScreen) return;
  onContinue = continueCb;

  const reward = completeContract(victory, combatScore);

  const title = victory ? 'ПОБЕДА!' : 'ПОРАЖЕНИЕ';
  const titleColor = victory ? '#44ff88' : '#ff4444';

  let html = `
    <h1 style="color:${titleColor}">${title}</h1>
    <div class="result-stats">
      <div class="result-line">Очки: <span>${combatScore}</span></div>`;

  if (reward > 0) {
    if (victory) {
      const base = campaign.activeContract ? 0 : reward; // contract already cleared by completeContract
      html += `
      <div class="result-line">Награда: <span class="result-reward">+${reward}₵</span></div>`;
    } else {
      html += `
      <div class="result-line">Частичная награда: <span class="result-reward">+${reward}₵</span></div>`;
    }
  }

  html += `
      <div class="result-line result-total">Баланс: <span>${campaign.money}₵</span></div>
    </div>
    <button class="station-btn result-continue-btn" id="result-continue-btn">ПРОДОЛЖИТЬ</button>`;

  resultScreen.innerHTML = html;
  resultScreen.style.display = 'flex';

  const btn = document.getElementById('result-continue-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      if (onContinue) onContinue();
    });
  }
}

export function showCombatQuitResult(penalty: number, continueCb: () => void): void {
  resultScreen = document.getElementById('combat-result');
  if (!resultScreen) return;
  onContinue = continueCb;

  let html = `
    <h1 style="color:#ff8844">ДЕЗЕРТИРСТВО</h1>
    <div class="result-stats">
      <div class="result-line">Контракт провален</div>`;

  if (penalty > 0) {
    html += `
      <div class="result-line">Штраф: <span style="color:#ff4444">-${penalty}₵</span></div>`;
  }

  html += `
      <div class="result-line result-total">Баланс: <span>${campaign.money}₵</span></div>
    </div>
    <button class="station-btn result-continue-btn" id="result-continue-btn">ПРОДОЛЖИТЬ</button>`;

  resultScreen.innerHTML = html;
  resultScreen.style.display = 'flex';

  const btn = document.getElementById('result-continue-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      if (onContinue) onContinue();
    });
  }
}

export function hideCombatResult(): void {
  if (resultScreen) resultScreen.style.display = 'none';
}
