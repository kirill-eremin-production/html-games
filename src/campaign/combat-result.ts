import { COMBAT_RESULT_TEMPLATES } from './combat-result-templates';
import { campaign, completeContract } from './state';

let resultScreen: HTMLElement | null = null;
let onContinue: (() => void) | null = null;

function bindContinueButton(): void {
  const btn = document.getElementById('result-continue-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      if (onContinue) onContinue();
    });
  }
}

export function showCombatResult(
  victory: boolean,
  combatScore: number,
  continueCb: () => void,
): void {
  resultScreen = document.getElementById('combat-result');
  if (!resultScreen) return;
  onContinue = continueCb;

  const reward = completeContract(victory, combatScore);

  resultScreen.innerHTML = COMBAT_RESULT_TEMPLATES.victory({
    victory,
    combatScore,
    reward,
    money: campaign.money,
  });
  resultScreen.style.display = 'flex';
  bindContinueButton();
}

export function showCombatQuitResult(penalty: number, continueCb: () => void): void {
  resultScreen = document.getElementById('combat-result');
  if (!resultScreen) return;
  onContinue = continueCb;

  resultScreen.innerHTML = COMBAT_RESULT_TEMPLATES.desertion(penalty, campaign.money);
  resultScreen.style.display = 'flex';
  bindContinueButton();
}

export function hideCombatResult(): void {
  if (resultScreen) resultScreen.style.display = 'none';
}
