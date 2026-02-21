export const COMBAT_RESULT_TEMPLATES = {
  victory(data: { victory: boolean; combatScore: number; reward: number; money: number }): string {
    const title = data.victory ? 'ПОБЕДА!' : 'ПОРАЖЕНИЕ';
    const titleColor = data.victory ? '#44ff88' : '#ff4444';

    let html = `
    <h1 style="color:${titleColor}">${title}</h1>
    <div class="result-stats">
      <div class="result-line">Очки: <span>${data.combatScore}</span></div>`;

    if (data.reward > 0) {
      const label = data.victory ? 'Награда' : 'Частичная награда';
      html += `
      <div class="result-line">${label}: <span class="result-reward">+${data.reward}₵</span></div>`;
    }

    html += `
      <div class="result-line result-total">Баланс: <span>${data.money}₵</span></div>
    </div>
    <button class="station-btn result-continue-btn" id="result-continue-btn">ПРОДОЛЖИТЬ</button>`;

    return html;
  },

  desertion(penalty: number, money: number): string {
    let html = `
    <h1 style="color:#ff8844">ДЕЗЕРТИРСТВО</h1>
    <div class="result-stats">
      <div class="result-line">Контракт провален</div>`;

    if (penalty > 0) {
      html += `
      <div class="result-line">Штраф: <span style="color:#ff4444">-${penalty}₵</span></div>`;
    }

    html += `
      <div class="result-line result-total">Баланс: <span>${money}₵</span></div>
    </div>
    <button class="station-btn result-continue-btn" id="result-continue-btn">ПРОДОЛЖИТЬ</button>`;

    return html;
  },
};
