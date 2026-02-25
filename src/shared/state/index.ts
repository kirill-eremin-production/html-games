import { ALLY_BASES, ENEMY_BASES } from '@/shared/constants';
import type { GameState } from '@/shared/types';

/** Счётчик имён союзников */
export let allyNameIdx = 0;

/** Счётчик имён врагов */
export let enemyNameIdx = 0;

/** Сбросить счётчики имён (при старте нового боя) */
export function resetNameCounters(): void {
  allyNameIdx = 0;
  enemyNameIdx = 0;
}

/** Сгенерировать следующее имя союзника (например, «Сокол-1») */
export function nextAllyName(): string {
  const base = ALLY_BASES[allyNameIdx % ALLY_BASES.length];
  const num = Math.floor(allyNameIdx / ALLY_BASES.length) + 1;
  allyNameIdx++;
  return `${base}-${num}`;
}

/** Сгенерировать следующее имя врага (например, «Фантом-1») */
export function nextEnemyName(): string {
  const base = ENEMY_BASES[enemyNameIdx % ENEMY_BASES.length];
  const num = Math.floor(enemyNameIdx / ENEMY_BASES.length) + 1;
  enemyNameIdx++;
  return `${base}-${num}`;
}

/** Создать начальное состояние игры */
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

/** Глобальное состояние игры (синглтон) */
export const state = createInitialState();
