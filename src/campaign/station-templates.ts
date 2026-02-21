import type { Contract } from './types';

const DIFF_LABELS: Record<string, string> = {
  easy: 'ПРОСТОЙ',
  medium: 'СРЕДНИЙ',
  hard: 'СЛОЖНЫЙ',
};
const DIFF_COLORS: Record<string, string> = {
  easy: '#44ff88',
  medium: '#ffaa44',
  hard: '#ff4444',
};

export const STATION_TEMPLATES = {
  page(data: {
    systemName: string;
    money: number;
    fuel: number;
    maxFuel: number;
    fuelPrice: number;
    contracts: Contract[];
    activeContractId: string | null;
    targetNames: Record<string, string>;
  }): string {
    let html = `
    <div class="station-header">
      <h1>СТАНЦИЯ «${data.systemName}»</h1>
      <div class="station-balance">
        <span class="station-money">${data.money}₵</span>
        <span class="station-fuel">⛽ ${data.fuel}/${data.maxFuel}</span>
      </div>
    </div>
    <div class="station-body">
      <div class="station-section station-fuel-section">
        <h2>ТОПЛИВО</h2>
        <div class="fuel-price">${data.fuelPrice}₵ за единицу</div>
        <div class="fuel-buttons">
          <button class="station-btn fuel-btn" data-amount="1">+1</button>
          <button class="station-btn fuel-btn" data-amount="5">+5</button>
          <button class="station-btn fuel-btn" data-amount="${data.maxFuel}">MAX</button>
        </div>
      </div>
      <div class="station-section station-contracts-section">
        <h2>КОНТРАКТЫ</h2>
        <div class="contracts-list">`;

    const hasContract = data.activeContractId !== null;

    for (const c of data.contracts) {
      const isActive = c.id === data.activeContractId;
      const diffColor = DIFF_COLORS[c.difficulty];
      const diffLabel = DIFF_LABELS[c.difficulty];
      const targetName = data.targetNames[c.targetSystemId] ?? c.targetSystemId;

      html += `
      <div class="contract-card ${c.difficulty}${isActive ? ' active' : ''}">
        <div class="contract-diff" style="color:${diffColor}">[${diffLabel}]</div>
        <div class="contract-title">${c.title}</div>
        <div class="contract-desc">${c.description}</div>
        <div class="contract-target">→ ${targetName}</div>
        <div class="contract-reward">${c.reward}₵</div>
        ${
          isActive
            ? '<div class="contract-status">ПРИНЯТ</div>'
            : hasContract
              ? ''
              : `<button class="station-btn contract-accept-btn" data-id="${c.id}">ВЗЯТЬ</button>`
        }
      </div>`;
    }

    html += `
        </div>
      </div>
    </div>
    <button class="station-btn station-map-btn" id="station-map-btn">НА КАРТУ</button>`;

    return html;
  },
};
