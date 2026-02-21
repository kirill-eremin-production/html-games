import { FUEL_PRICE } from './balance';
import { getSystem } from './data';
import {
  acceptContract,
  buyFuel,
  campaign,
  grantEmergencyFuel,
  needsEmergencyFuel,
  stationContracts,
} from './state';
import type { Contract } from './types';

let stationScreen: HTMLElement | null = null;
let onGoToMap: (() => void) | null = null;

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

export function showStation(goToMapCb: () => void): void {
  stationScreen = document.getElementById('station-screen');
  if (!stationScreen) return;
  onGoToMap = goToMapCb;

  // Emergency fuel
  if (needsEmergencyFuel()) {
    grantEmergencyFuel();
  }

  renderStation();
  stationScreen.style.display = 'flex';
}

export function hideStation(): void {
  if (stationScreen) stationScreen.style.display = 'none';
}

function renderStation(): void {
  if (!stationScreen) return;
  const sys = getSystem(campaign.currentSystemId);

  let html = `
    <div class="station-header">
      <h1>СТАНЦИЯ «${sys.name}»</h1>
      <div class="station-balance">
        <span class="station-money">${campaign.money}₵</span>
        <span class="station-fuel">⛽ ${campaign.fuel}/${campaign.maxFuel}</span>
      </div>
    </div>
    <div class="station-body">
      <div class="station-section station-fuel-section">
        <h2>ТОПЛИВО</h2>
        <div class="fuel-price">${FUEL_PRICE}₵ за единицу</div>
        <div class="fuel-buttons">
          <button class="station-btn fuel-btn" data-amount="1">+1</button>
          <button class="station-btn fuel-btn" data-amount="5">+5</button>
          <button class="station-btn fuel-btn" data-amount="${campaign.maxFuel}">MAX</button>
        </div>
      </div>
      <div class="station-section station-contracts-section">
        <h2>КОНТРАКТЫ</h2>
        <div class="contracts-list">`;

  for (const c of stationContracts) {
    const targetSys = getSystem(c.targetSystemId);
    const isActive = campaign.activeContract?.id === c.id;
    const hasContract = campaign.activeContract !== null;
    const diffColor = DIFF_COLORS[c.difficulty];
    const diffLabel = DIFF_LABELS[c.difficulty];

    html += `
      <div class="contract-card ${c.difficulty}${isActive ? ' active' : ''}">
        <div class="contract-diff" style="color:${diffColor}">[${diffLabel}]</div>
        <div class="contract-title">${c.title}</div>
        <div class="contract-desc">${c.description}</div>
        <div class="contract-target">→ ${targetSys.name}</div>
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

  stationScreen.innerHTML = html;

  // Bind fuel buttons
  stationScreen.querySelectorAll('.fuel-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const amount = parseInt((btn as HTMLElement).dataset.amount || '1');
      buyFuel(amount);
      renderStation();
    });
  });

  // Bind contract accept buttons
  stationScreen.querySelectorAll('.contract-accept-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = (btn as HTMLElement).dataset.id;
      const contract = stationContracts.find((c) => c.id === id);
      if (contract) {
        acceptContract(contract);
        renderStation();
      }
    });
  });

  // Bind map button
  const mapBtn = document.getElementById('station-map-btn');
  if (mapBtn) {
    mapBtn.addEventListener('click', () => {
      if (onGoToMap) onGoToMap();
    });
  }
}
