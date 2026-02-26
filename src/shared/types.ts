import type { EntityId } from '@/shared/ecs/types';

// ── Types shared across layers ──────────────────────────────────────────────

/** Тип подсистемы капитального корабля */
export type SubsystemType = 'engines' | 'bridge' | 'turrets' | 'comms' | 'hangar';

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

export type FlightModelId = 'combat' | 'exploration';

/** Фаза внутри боевого режима: ангар (FPS) или полёт */
export type CombatPhase = 'hangar' | 'flight';

/** Минимальное описание истребителя (для событий и UI) */
export interface Fighter {
  /** ECS-идентификатор сущности */
  entityId: EntityId;
  /** Уникальное имя (например, «Сокол-3») */
  name: string;
}

/** Запись в ленте уничтожений */
export interface KillFeedEntry {
  /** Имя убийцы */
  killer: string;
  /** Имя жертвы */
  victim: string;
  /** Команда убийцы */
  killerTeam: 'player' | 'ally' | 'enemy';
  /** Команда жертвы */
  victimTeam: 'player' | 'ally' | 'enemy';
  /** Оставшееся время отображения (сек) */
  timer: number;
}

/** Запись очереди респавна */
export interface RespawnEntry {
  /** Команда возрождаемого */
  team: 'ally' | 'enemy';
  /** Оставшееся время до респавна (сек) */
  timer: number;
}

/** Захваченная цель игрока — истребитель или подсистема корабля */
export type LockedTarget =
  | { kind: 'fighter'; entityId: EntityId; fighter: Fighter }
  | { kind: 'subsystem'; subsystemEntity: EntityId; parentEntity: EntityId };

/** Глобальное состояние игры */
export interface GameState {
  /** Идёт ли бой */
  running: boolean;
  /** Текущая фаза: 1 — уничтожение кораблей, 2 — уничтожение истребителей */
  phase: 1 | 2;
  /** Набранные очки */
  score: number;
  /** Оставшиеся жизни игрока */
  lives: number;
  /** Текущее здоровье игрока */
  playerHealth: number;
  /** Максимальное здоровье игрока */
  maxHealth: number;
  /** Текущая скорость полёта */
  speed: number;
  /** Базовая скорость (без ускорения) */
  baseSpeed: number;
  /** Скорость при ускорении (boost) */
  boostSpeed: number;
  /** Таймер неуязвимости после респавна (сек) */
  invulnTimer: number;
  /** Общее число уничтоженных врагов */
  totalEnemyKills: number;
  /** Имя последнего атаковавшего игрока */
  lastAttacker: string;
  /** Лента уничтожений */
  killFeed: KillFeedEntry[];
  /** Состояние клавиш (нажата/отпущена) */
  keys: Record<string, boolean>;
  /** Смещение мыши по X (для управления) */
  mouseX: number;
  /** Смещение мыши по Y (для управления) */
  mouseY: number;
  /** Дельта мыши по X за текущий кадр (пиксели, для pointer lock) */
  mouseDeltaX: number;
  /** Дельта мыши по Y за текущий кадр (пиксели, для pointer lock) */
  mouseDeltaY: number;
  /** Активен ли ввод мышью */
  mouseActive: boolean;
  /** Таймер перезарядки стрельбы игрока (сек) */
  shootCooldown: number;
  /** Таймер отображения сообщения на экране (сек) */
  messageTimer: number;
  /** Интенсивность красной вспышки при получении урона (0–1) */
  damageFlash: number;
  /** Таймер отсутствия урона (для регенерации) */
  noDamageTimer: number;
  /** Текущая модель полёта */
  flightModel: FlightModelId;
  /** Очередь респавна */
  respawnQueue: RespawnEntry[];
  /** Захваченная цель (null — нет захвата) */
  lockedTarget: LockedTarget | null;
  /** Счётчик кадров для пропуска обновлений HUD */
  hudFrameCounter: number;
  /** Время в режиме исследования (сек) */
  explorationTime: number;
  /** Текущая фаза боевого режима (ангар или полёт) */
  combatPhase: CombatPhase;
}

// ── Game Mode types (from modes/types.ts) ───────────────────────────────────

export interface CombatModeContext {
  combatConfig?: CombatConfig;
  onCombatEnd?: (victory: boolean, score: number) => void;
}

export interface ExplorationModeContext {
  systemId?: string;
  exitCallback?: () => void;
}

export interface GalaxyModeContext {
  resetCamera?: boolean;
  onStation?: () => void;
  onCombat?: () => void;
  onExploration?: () => void;
}

export interface StationModeContext {
  onBack?: () => void;
}

/** Контекст FPS-режима — передаётся из combat mode при делегировании фазы ангара */
export interface FPSModeContext {
  /** Callback, вызываемый когда игрок садится в истребитель */
  onBoarded?: () => void;
  /** Callback, вызываемый когда ИИ-пилот вылетает из ангара (для создания ECS-истребителя) */
  onPilotLaunched?: (pilotName: string) => void;
  /** Количество ИИ-пилотов для автоспавна (по умолчанию 4) */
  allyCount?: number;
}

/** Контекст режима конструктора — передаётся при входе в builder mode */
export interface BuilderModeContext {
  /** Имя чертежа для загрузки (если не указан — новый чертёж) */
  blueprintId?: string;
  /** Callback при выходе из конструктора (ESC) */
  onExit?: () => void;
}

/** Union of all mode contexts — used by the generic registry */
export type ModeContext =
  | CombatModeContext
  | ExplorationModeContext
  | GalaxyModeContext
  | StationModeContext
  | FPSModeContext
  | BuilderModeContext;

/** Generic handler — each mode specifies its own context type */
export interface GameModeHandler<TCtx = ModeContext> {
  update(dt: number): void;
  enter(context?: TCtx): void;
  exit(): void;
}

// ── Game System types (from systems/types.ts) ───────────────────────────────

export interface GameSystem {
  readonly id: string;
  init?(): void;
  update(dt: number): void;
  cleanup?(): void;
}

export function initSystems(systems: GameSystem[]): void {
  for (const s of systems) s.init?.();
}

export function updateSystems(systems: GameSystem[], dt: number): void {
  for (const s of systems) s.update(dt);
}

export function cleanupSystems(systems: GameSystem[]): void {
  for (const s of systems) s.cleanup?.();
}
