import { FUEL_PRICE } from '@/features/campaign/balance';
import { getSystem } from '@/features/campaign/data';
import {
  acceptContract,
  buyFuel,
  campaign,
  grantEmergencyFuel,
  needsEmergencyFuel,
  stationContracts,
} from '@/features/campaign/state';

import { STATION_TEMPLATES } from './templates';

let stationScreen: HTMLElement | null = null;
let onGoToMap: (() => void) | null = null;

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

  const targetNames: Record<string, string> = {};
  for (const c of stationContracts) {
    targetNames[c.targetSystemId] = getSystem(c.targetSystemId).name;
  }

  stationScreen.innerHTML = STATION_TEMPLATES.page({
    systemName: sys.name,
    money: campaign.money,
    fuel: campaign.fuel,
    maxFuel: campaign.maxFuel,
    fuelPrice: FUEL_PRICE,
    contracts: stationContracts,
    activeContractId: campaign.activeContract?.id ?? null,
    targetNames,
  });

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
