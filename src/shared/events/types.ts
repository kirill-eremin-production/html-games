import type { EntityId } from '@/shared/ecs/types';
import type { Fighter } from '@/shared/types';

/** Команда юнита */
export type Team = 'player' | 'ally' | 'enemy';

/** Данные события уничтожения истребителя */
export interface FighterKilledEvent {
  /** Уничтоженный истребитель */
  victim: Fighter;
  /** Имя убийцы */
  killerName: string;
  /** Команда убийцы */
  killerTeam: Team;
  /** Команда жертвы */
  victimTeam: 'ally' | 'enemy';
  /** Убит ли игроком */
  isPlayerKill: boolean;
}

/** Данные события уничтожения подсистемы капитального корабля */
export interface SubsystemDestroyedEvent {
  /** EntityId уничтоженной подсистемы */
  subsystemEntity: EntityId;
  /** EntityId корабля-владельца */
  parentEntity: EntityId;
  /** Имя подсистемы (для HUD) */
  subsystemName: string;
  /** Имя убийцы */
  killerName: string;
}

/** Данные события уничтожения капитального корабля */
export interface CapitalShipDestroyedEvent {
  /** EntityId уничтоженного корабля */
  shipEntity: EntityId;
  /** Имя убийцы */
  killerName: string;
}

/** Данные события смены фазы боя */
export interface PhaseChangedEvent {
  /** Новая фаза: 1 — уничтожение кораблей, 2 — уничтожение истребителей */
  phase: 1 | 2;
}

/** Данные события попадания по игроку */
export interface PlayerHitEvent {
  /** Нанесённый урон */
  damage: number;
  /** Имя атакующего */
  attackerName: string;
}

/** Карта всех игровых событий */
export interface EventMap {
  /** Истребитель уничтожен */
  'fighter-killed': FighterKilledEvent;
  /** Подсистема капитального корабля уничтожена */
  'subsystem-destroyed': SubsystemDestroyedEvent;
  /** Капитальный корабль уничтожен */
  'capital-ship-destroyed': CapitalShipDestroyedEvent;
  /** Фаза боя изменилась */
  'phase-changed': PhaseChangedEvent;
  /** Игрок получил урон */
  'player-hit': PlayerHitEvent;
  /** Игрок погиб */
  'player-died': Record<string, never>;
}

/** Функция-обработчик события */
export type Listener<T> = (data: T) => void;

/** Функция отписки от события */
export type Unsubscribe = () => void;
