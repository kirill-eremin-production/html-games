import type { EventMap, Listener, Unsubscribe } from './types';

export type { EventMap, Listener, Unsubscribe } from './types';

const listeners = new Map<string, Set<Listener<unknown>>>();

/** Подписаться на событие. Возвращает функцию отписки */
export function on<K extends keyof EventMap>(
  event: K,
  listener: Listener<EventMap[K]>,
): Unsubscribe {
  let set = listeners.get(event);
  if (!set) {
    set = new Set();
    listeners.set(event, set);
  }
  set.add(listener as Listener<unknown>);
  return () => off(event, listener);
}

/** Отписаться от события */
export function off<K extends keyof EventMap>(event: K, listener: Listener<EventMap[K]>): void {
  listeners.get(event)?.delete(listener as Listener<unknown>);
}

/** Отправить событие всем подписчикам */
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

/** Удалить все подписки (вызывается при смене режима) */
export function clearAllListeners(): void {
  listeners.clear();
}
