import type { CombatConfig } from './types';

// ── Economy ──────────────────────────────────────────────────────────────────

export const STARTING_MONEY = 1000;
export const STARTING_FUEL = 5;
export const MAX_FUEL = 10;
export const FUEL_PRICE = 50;
export const DEFEAT_REWARD_FRACTION = 0.3;

// ── Difficulty presets ───────────────────────────────────────────────────────

export const DIFFICULTY_CONFIGS: Record<'easy' | 'medium' | 'hard', CombatConfig> = {
  easy: {
    enemies: 16,
    allies: 40,
    capitalShips: 1,
    killTarget: 30,
    fighterHP: 40,
    subsystemHP: 150,
    enemySpeedMin: 35,
    enemySpeedMax: 55,
    enemyFireRateMin: 3,
    enemyFireRateMax: 6,
    allySpeedMin: 60,
    allySpeedMax: 80,
    allyFireRateMin: 0.8,
    allyFireRateMax: 2,
    turretFireRateMin: 5,
    turretFireRateMax: 8,
    turretAccuracy: 0.08,
    respawnDelay: 7,
  },
  medium: {
    enemies: 32,
    allies: 32,
    capitalShips: 3,
    killTarget: 60,
    fighterHP: 50,
    subsystemHP: 200,
    enemySpeedMin: 45,
    enemySpeedMax: 65,
    enemyFireRateMin: 2,
    enemyFireRateMax: 4,
    allySpeedMin: 55,
    allySpeedMax: 75,
    allyFireRateMin: 1,
    allyFireRateMax: 3,
    turretFireRateMin: 3,
    turretFireRateMax: 5,
    turretAccuracy: 0.15,
    respawnDelay: 5,
  },
  hard: {
    enemies: 48,
    allies: 20,
    capitalShips: 4,
    killTarget: 80,
    fighterHP: 60,
    subsystemHP: 250,
    enemySpeedMin: 55,
    enemySpeedMax: 80,
    enemyFireRateMin: 1,
    enemyFireRateMax: 3,
    allySpeedMin: 45,
    allySpeedMax: 60,
    allyFireRateMin: 1.5,
    allyFireRateMax: 4,
    turretFireRateMin: 2,
    turretFireRateMax: 4,
    turretAccuracy: 0.25,
    respawnDelay: 3,
  },
};

export const REWARDS: Record<
  'easy' | 'medium' | 'hard',
  { base: number; scoreMultiplier: number }
> = {
  easy: { base: 500, scoreMultiplier: 1 },
  medium: { base: 2000, scoreMultiplier: 2 },
  hard: { base: 5000, scoreMultiplier: 3 },
};

// ── Default combat config (for quick play, matches current game) ────────────

export const DEFAULT_COMBAT_CONFIG: CombatConfig = {
  enemies: 32,
  allies: 32,
  capitalShips: 3,
  killTarget: 100,
  fighterHP: 50,
  subsystemHP: 200,
  enemySpeedMin: 45,
  enemySpeedMax: 65,
  enemyFireRateMin: 2,
  enemyFireRateMax: 5,
  allySpeedMin: 55,
  allySpeedMax: 75,
  allyFireRateMin: 1,
  allyFireRateMax: 3,
  turretFireRateMin: 3,
  turretFireRateMax: 5,
  turretAccuracy: 0.15,
  respawnDelay: 5,
};
