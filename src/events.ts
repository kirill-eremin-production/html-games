import type { CapitalShip, Fighter, Subsystem } from './types';

type Team = 'player' | 'ally' | 'enemy';

export interface EventMap {
  'fighter-killed': {
    victim: Fighter;
    killerName: string;
    killerTeam: Team;
    victimTeam: 'ally' | 'enemy';
    isPlayerKill: boolean;
  };
  'subsystem-destroyed': { subsystem: Subsystem; ship: CapitalShip; killerName: string };
  'capital-ship-destroyed': { ship: CapitalShip; killerName: string };
  'phase-changed': { phase: 1 | 2 };
  'player-hit': { damage: number; attackerName: string };
  'player-died': Record<string, never>;
}

type Listener<T> = (data: T) => void;

const listeners = new Map<string, Set<Listener<unknown>>>();

export function on<K extends keyof EventMap>(event: K, listener: Listener<EventMap[K]>): void {
  let set = listeners.get(event);
  if (!set) {
    set = new Set();
    listeners.set(event, set);
  }
  set.add(listener as Listener<unknown>);
}

export function off<K extends keyof EventMap>(event: K, listener: Listener<EventMap[K]>): void {
  listeners.get(event)?.delete(listener as Listener<unknown>);
}

export function emit<K extends keyof EventMap>(event: K, data: EventMap[K]): void {
  const set = listeners.get(event);
  if (set) {
    for (const fn of set) {
      try {
        fn(data);
      } catch (e) {
        console.error(`Event "${event}" handler error:`, e);
      }
    }
  }
}

export function clearAllListeners(): void {
  listeners.clear();
}
