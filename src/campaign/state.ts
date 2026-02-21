import { MAX_FUEL, QUIT_PENALTY, REWARDS, STARTING_FUEL, STARTING_MONEY } from './balance';
import { generateContracts, getSystem } from './data';
import type { CampaignState, Contract, GameMode } from './types';

const STORAGE_KEY = 'space-combat-campaign';

// ── Campaign singleton ───────────────────────────────────────────────────────

export let currentMode: GameMode = 'menu';
export let isCampaignActive = false;

export const campaign: CampaignState = {
  money: STARTING_MONEY,
  fuel: STARTING_FUEL,
  maxFuel: MAX_FUEL,
  currentSystemId: 'solaris',
  activeContract: null,
  completedContracts: 0,
  lastCombatScore: 0,
};

// Current station contracts (regenerated on arrival)
export let stationContracts: Contract[] = [];

export function setMode(mode: GameMode): void {
  currentMode = mode;
}

export function setIsCampaignActive(value: boolean): void {
  isCampaignActive = value;
}

export function startCampaign(): void {
  isCampaignActive = true;
  campaign.money = STARTING_MONEY;
  campaign.fuel = STARTING_FUEL;
  campaign.maxFuel = MAX_FUEL;
  campaign.currentSystemId = 'solaris';
  campaign.activeContract = null;
  campaign.completedContracts = 0;
  campaign.lastCombatScore = 0;
  regenerateContracts();
  saveCampaign();
}

export function regenerateContracts(): void {
  const raw = generateContracts(campaign.currentSystemId);
  let nextId = campaign.completedContracts;
  stationContracts = raw.map((c) => {
    const rewards = REWARDS[c.difficulty];
    nextId++;
    return {
      id: `contract-${nextId}`,
      difficulty: c.difficulty,
      title: c.title,
      description: c.description,
      targetSystemId: c.targetSystemId,
      reward: rewards.base,
      scoreMultiplier: rewards.scoreMultiplier,
    };
  });
}

export function acceptContract(contract: Contract): void {
  campaign.activeContract = contract;
  saveCampaign();
}

export function completeContract(victory: boolean, combatScore: number): number {
  campaign.lastCombatScore = combatScore;
  if (!campaign.activeContract) return 0;

  const c = campaign.activeContract;
  let reward: number;
  if (victory) {
    reward = c.reward + Math.floor((combatScore * c.scoreMultiplier) / 100);
  } else {
    reward = Math.floor(c.reward * 0.3);
  }

  campaign.money += reward;
  campaign.activeContract = null;
  campaign.completedContracts++;
  saveCampaign();
  return reward;
}

export function failContract(): number {
  campaign.activeContract = null;
  const penalty = Math.min(QUIT_PENALTY, campaign.money);
  campaign.money -= penalty;
  saveCampaign();
  return penalty;
}

export function buyFuel(units: number): boolean {
  const maxBuy = campaign.maxFuel - campaign.fuel;
  const actual = Math.min(units, maxBuy);
  const cost = actual * 50;
  if (actual <= 0 || campaign.money < cost) return false;
  campaign.money -= cost;
  campaign.fuel += actual;
  saveCampaign();
  return true;
}

export function spendFuel(amount: number): boolean {
  if (campaign.fuel < amount) return false;
  campaign.fuel -= amount;
  saveCampaign();
  return true;
}

export function travelToSystem(systemId: string): void {
  campaign.currentSystemId = systemId;
  saveCampaign();
}

export function needsEmergencyFuel(): boolean {
  return campaign.fuel === 0 && campaign.money < 50;
}

export function grantEmergencyFuel(): void {
  campaign.fuel = 1;
  saveCampaign();
}

// ── Persistence ──────────────────────────────────────────────────────────────

export function saveCampaign(): void {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        money: campaign.money,
        fuel: campaign.fuel,
        maxFuel: campaign.maxFuel,
        currentSystemId: campaign.currentSystemId,
        activeContract: campaign.activeContract,
        completedContracts: campaign.completedContracts,
        lastCombatScore: campaign.lastCombatScore,
      }),
    );
  } catch {
    // Storage full or unavailable
  }
}

export function loadCampaign(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    campaign.money = data.money ?? STARTING_MONEY;
    campaign.fuel = data.fuel ?? STARTING_FUEL;
    campaign.maxFuel = data.maxFuel ?? MAX_FUEL;
    campaign.currentSystemId = data.currentSystemId ?? 'solaris';
    campaign.activeContract = data.activeContract ?? null;
    campaign.completedContracts = data.completedContracts ?? 0;
    campaign.lastCombatScore = data.lastCombatScore ?? 0;
    // Validate system exists
    if (!getSystem(campaign.currentSystemId)) {
      campaign.currentSystemId = 'solaris';
    }
    return true;
  } catch {
    return false;
  }
}

export function clearCampaign(): void {
  localStorage.removeItem(STORAGE_KEY);
}
