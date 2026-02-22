export interface StarSystem {
  id: string;
  name: string;
  position: [number, number, number];
  connections: string[];
}

export interface Contract {
  id: string;
  difficulty: 'easy' | 'medium' | 'hard';
  title: string;
  description: string;
  targetSystemId: string;
  reward: number;
  scoreMultiplier: number;
}

export interface CombatConfig {
  enemies: number;
  allies: number;
  capitalShips: number;
  killTarget: number;
  fighterHP: number;
  subsystemHP: number;
  enemySpeedMin: number;
  enemySpeedMax: number;
  enemyFireRateMin: number;
  enemyFireRateMax: number;
  allySpeedMin: number;
  allySpeedMax: number;
  allyFireRateMin: number;
  allyFireRateMax: number;
  turretFireRateMin: number;
  turretFireRateMax: number;
  turretAccuracy: number;
  respawnDelay: number;
}

export interface CampaignState {
  money: number;
  fuel: number;
  maxFuel: number;
  currentSystemId: string;
  activeContract: Contract | null;
  completedContracts: number;
  lastCombatScore: number;
}

export type PlanetType = 'rocky' | 'gas_giant' | 'ice' | 'desert' | 'ocean' | 'volcanic' | 'barren';

export interface Planet {
  name: string;
  type: PlanetType;
  orbitalDistance: number;
  size: number;
  orbitalSpeed: number;
  initialAngle: number;
  hasLiquidWater: boolean;
  hasOxygen: boolean;
  radiationLevel: number;
  color: number;
  ringColor: number | null;
}

export interface SystemDetail {
  planets: Planet[];
  hasStation: boolean;
  asteroidBeltDistance: number | null;
  starColor: number;
  starSize: number;
}

export type GameMode = 'menu' | 'galaxy' | 'station' | 'combat' | 'result' | 'exploration';
