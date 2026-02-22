import { ALLY_BASES, ENEMY_BASES } from './constants';
import type { GameState } from './types';

export let allyNameIdx = 0;
export let enemyNameIdx = 0;

export function resetNameCounters(): void {
  allyNameIdx = 0;
  enemyNameIdx = 0;
}

export function nextAllyName(): string {
  const base = ALLY_BASES[allyNameIdx % ALLY_BASES.length];
  const num = Math.floor(allyNameIdx / ALLY_BASES.length) + 1;
  allyNameIdx++;
  return `${base}-${num}`;
}

export function nextEnemyName(): string {
  const base = ENEMY_BASES[enemyNameIdx % ENEMY_BASES.length];
  const num = Math.floor(enemyNameIdx / ENEMY_BASES.length) + 1;
  enemyNameIdx++;
  return `${base}-${num}`;
}

export function createInitialState(): GameState {
  return {
    running: false,
    phase: 1,
    score: 0,
    lives: 5,
    playerHealth: 100,
    maxHealth: 100,
    speed: 80,
    baseSpeed: 80,
    boostSpeed: 160,
    invulnTimer: 0,
    totalEnemyKills: 0,
    lastAttacker: '',
    bullets: [],
    allyBullets: [],
    enemyBullets: [],
    allies: [],
    enemies: [],
    capitalShips: [],
    explosions: [],
    killFeed: [],
    keys: {},
    mouseX: 0,
    mouseY: 0,
    mouseActive: false,
    shootCooldown: 0,
    messageTimer: 0,
    damageFlash: 0,
    noDamageTimer: 0,
    flightModel: 'combat',
    respawnQueue: [],
    lockedTarget: null,
    hudFrameCounter: 0,
    explorationTime: 0,
  };
}

export const state = createInitialState();
