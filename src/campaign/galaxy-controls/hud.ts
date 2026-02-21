import { isTouchDevice } from '../../ui/touch-controls';
import { getFuelCost, getSystem } from '../data';
import { selectSystem, setGalaxyBrightness } from '../galaxy-scene';
import { campaign, spendFuel } from '../state';
import { GALAXY_TEMPLATES } from './templates';

// ── State ────────────────────────────────────────────────────────────────────

let galaxyHud: HTMLElement | null = null;
let infoPanel: HTMLElement | null = null;
let galaxyHint: HTMLElement | null = null;
let brightnessSlider: HTMLElement | null = null;

let selectedSystemId: string | null = null;

let onTravelRequest: ((targetId: string) => void) | null = null;
let onStationRequest: (() => void) | null = null;

const LS_BRIGHTNESS_KEY = 'galaxyBrightness';

// ── Selected system ──────────────────────────────────────────────────────────

export function getSelectedSystemId(): string | null {
  return selectedSystemId;
}

export function setSelectedSystemId(id: string | null): void {
  selectedSystemId = id;
}

// ── Callbacks (set by index.ts orchestrator) ─────────────────────────────────

export function setHudCallbacks(travelCb: (targetId: string) => void, stationCb: () => void): void {
  onTravelRequest = travelCb;
  onStationRequest = stationCb;
}

// ── UI creation ──────────────────────────────────────────────────────────────

export function ensureUI(): void {
  galaxyHud = document.getElementById('galaxy-hud');
  infoPanel = document.getElementById('galaxy-info-panel');
  if (!galaxyHint) {
    galaxyHint = document.createElement('div');
    galaxyHint.id = 'galaxy-hint';
    galaxyHint.textContent = GALAXY_TEMPLATES.hint(isTouchDevice());
    document.body.appendChild(galaxyHint);
  }
  if (!brightnessSlider) {
    const saved = localStorage.getItem(LS_BRIGHTNESS_KEY);
    const initial = saved !== null ? parseFloat(saved) : 1.0;
    setGalaxyBrightness(initial);

    brightnessSlider = document.createElement('div');
    brightnessSlider.id = 'galaxy-brightness';
    brightnessSlider.innerHTML = GALAXY_TEMPLATES.brightnessSlider(Math.round(initial * 100));
    document.body.appendChild(brightnessSlider);

    const input = brightnessSlider.querySelector('input')!;
    const span = brightnessSlider.querySelector('span')!;
    input.addEventListener('input', () => {
      const v = parseInt(input.value, 10) / 100;
      setGalaxyBrightness(v);
      span.textContent = `${input.value}%`;
      localStorage.setItem(LS_BRIGHTNESS_KEY, String(v));
    });
  }
}

// ── HUD updates ──────────────────────────────────────────────────────────────

export function updateGalaxyHud(): void {
  if (!galaxyHud) return;
  const contractTarget = campaign.activeContract
    ? getSystem(campaign.activeContract.targetSystemId).name
    : undefined;
  galaxyHud.innerHTML = GALAXY_TEMPLATES.hud(
    campaign.money,
    campaign.fuel,
    campaign.maxFuel,
    contractTarget,
  );
}

export function updateInfoPanel(): void {
  if (!infoPanel) return;
  if (!selectedSystemId) {
    infoPanel.style.display = 'none';
    return;
  }

  const sys = getSystem(selectedSystemId);
  const isCurrent = selectedSystemId === campaign.currentSystemId;
  const currentSys = getSystem(campaign.currentSystemId);
  const isConnected = currentSys.connections.includes(selectedSystemId);
  const fuelCost = isConnected ? getFuelCost(campaign.currentSystemId, selectedSystemId) : 0;
  const canTravel = isConnected && !isCurrent && campaign.fuel >= fuelCost;
  const isContractTarget = campaign.activeContract?.targetSystemId === selectedSystemId;

  infoPanel.innerHTML = GALAXY_TEMPLATES.infoPanel({
    name: sys.name,
    isCurrent,
    isConnected,
    fuelCost,
    canTravel,
    isContractTarget: !!isContractTarget,
  });
  infoPanel.style.display = 'block';

  const stationBtn = document.getElementById('gal-station-btn');
  if (stationBtn) {
    stationBtn.addEventListener('click', () => {
      if (onStationRequest) onStationRequest();
    });
  }

  const travelBtn = document.getElementById('gal-travel-btn');
  if (travelBtn) {
    const sid = selectedSystemId;
    travelBtn.addEventListener('click', () => {
      if (!sid) return;
      if (!spendFuel(fuelCost)) return;
      if (onTravelRequest) onTravelRequest(sid);
    });
  }
}

// ── Visibility ───────────────────────────────────────────────────────────────

export function hideInfoPanel(): void {
  if (infoPanel) infoPanel.style.display = 'none';
}

export function showHud(): void {
  if (galaxyHud) galaxyHud.style.display = 'block';
  if (galaxyHint) galaxyHint.style.display = 'block';
  if (brightnessSlider) brightnessSlider.style.display = 'flex';
}

export function hideHud(): void {
  if (galaxyHud) galaxyHud.style.display = 'none';
  if (infoPanel) infoPanel.style.display = 'none';
  if (galaxyHint) galaxyHint.style.display = 'none';
  if (brightnessSlider) brightnessSlider.style.display = 'none';
}

export function deselectSystem(): void {
  selectedSystemId = null;
  selectSystem(null);
  hideInfoPanel();
}
