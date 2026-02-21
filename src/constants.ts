import type { CombatConfig } from './campaign/types';

export const ALLY_COUNT = 32;
export const ENEMY_COUNT = 32;
export const CAPITAL_SHIP_COUNT = 3;
export const SUBSYSTEM_HP = 200;
export const FIGHTER_HP = 50;
export const RESPAWN_DELAY = 5;
export const KILL_TARGET = 100;
export const KILL_FEED_MAX = 7;

// Mutable combat config — overridden per-battle in campaign mode
export const combatConfig: CombatConfig = {
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

export function applyCombatConfig(cfg: CombatConfig): void {
  Object.assign(combatConfig, cfg);
}
export const KILL_FEED_DURATION = 6;
export const CURSOR_PROXIMITY_FACTOR = 0.3;
export const CAPITAL_CLOSE_RANGE_SQ = 550 * 550;
export const LOCK_PICK_RADIUS = 80;

export const PLAYER_NAME = 'Ас';

export const SUBSYSTEM_NAMES = ['Двигатели', 'Мостик', 'Турели', 'Связь', 'Ангар'];
export const SUBSYSTEM_SHORT = ['Д', 'М', 'Т', 'С', 'А'];

export const ALLY_BASES = [
  'Сокол',
  'Орёл',
  'Буран',
  'Молния',
  'Гром',
  'Вихрь',
  'Астра',
  'Искра',
  'Титан',
  'Зенит',
  'Пульсар',
  'Каскад',
  'Рубин',
  'Стрела',
  'Импульс',
  'Атлас',
];

export const ENEMY_BASES = [
  'Фантом',
  'Тень',
  'Коршун',
  'Кобра',
  'Скорпион',
  'Хищник',
  'Шакал',
  'Гадюка',
  'Ворон',
  'Клинок',
  'Мрак',
  'Призрак',
  'Ехидна',
  'Химера',
  'Оса',
  'Демон',
];
