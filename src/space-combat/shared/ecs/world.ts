import { SystemScheduler } from './system-scheduler';
import type { ComponentClass, EntityId } from './types';
import { GENERATION_MASK, indexOfEntity, makeEntityId } from './types';

const DEFAULT_CAPACITY = 1024;

/**
 * ECS World — контейнер для сущностей и компонентов.
 *
 * Сущность — packed number (generation << 20 | index).
 * Компонент — экземпляр класса, привязанный к сущности.
 * Хранилище: Map<ComponentClass, Map<index, Component>>.
 *
 * Механизм поколений (generations) предотвращает ошибки при обращении
 * к удалённым сущностям, чьи index'ы были переиспользованы.
 */
export class World {
  private generations: Uint16Array;
  private aliveFlags: Uint8Array;
  private freeIndices: number[] = [];
  private nextIndex = 1; // index 0 зарезервирован (невалидный)
  private aliveCount = 0;
  private capacity: number;
  private stores = new Map<ComponentClass, Map<number, unknown>>();

  /** Планировщик систем */
  readonly scheduler = new SystemScheduler();

  constructor(initialCapacity = DEFAULT_CAPACITY) {
    this.capacity = initialCapacity;
    this.generations = new Uint16Array(initialCapacity);
    this.aliveFlags = new Uint8Array(initialCapacity);
  }

  /** Создать новую сущность, вернуть уникальный ID */
  createEntity(): EntityId {
    let index: number;
    if (this.freeIndices.length > 0) {
      index = this.freeIndices.pop()!;
    } else {
      index = this.nextIndex++;
      if (index >= this.capacity) this.grow();
    }
    this.aliveFlags[index] = 1;
    this.aliveCount++;
    return makeEntityId(index, this.generations[index]);
  }

  /** Удалить сущность и все её компоненты */
  destroyEntity(id: EntityId): void {
    const index = indexOfEntity(id);
    if (!this.aliveFlags[index]) return;
    // Проверяем generation — защита от stale handle
    if (this.generations[index] !== ((id >>> 20) & GENERATION_MASK)) return;

    this.aliveFlags[index] = 0;
    this.aliveCount--;
    this.generations[index] = (this.generations[index] + 1) & GENERATION_MASK;
    this.freeIndices.push(index);

    for (const store of this.stores.values()) {
      store.delete(index);
    }
  }

  /** Жива ли сущность */
  isAlive(id: EntityId): boolean {
    const index = indexOfEntity(id);
    return (
      index < this.capacity &&
      this.aliveFlags[index] === 1 &&
      this.generations[index] === ((id >>> 20) & GENERATION_MASK)
    );
  }

  /** Добавить компонент к сущности */
  addComponent<T extends object>(entity: EntityId, component: T): void {
    const index = indexOfEntity(entity);
    const ctor = component.constructor as ComponentClass<T>;
    let store = this.stores.get(ctor);
    if (!store) {
      store = new Map();
      this.stores.set(ctor, store);
    }
    store.set(index, component);
  }

  /** Получить компонент сущности по типу (undefined если нет) */
  getComponent<T>(entity: EntityId, type: ComponentClass<T>): T | undefined {
    const index = indexOfEntity(entity);
    return this.stores.get(type)?.get(index) as T | undefined;
  }

  /** Удалить компонент у сущности */
  removeComponent<T>(entity: EntityId, type: ComponentClass<T>): void {
    const index = indexOfEntity(entity);
    this.stores.get(type)?.delete(index);
  }

  /** Проверить, есть ли у сущности компонент данного типа */
  hasComponent<T>(entity: EntityId, type: ComponentClass<T>): boolean {
    const index = indexOfEntity(entity);
    return this.stores.get(type)?.has(index) ?? false;
  }

  /**
   * Запросить все живые сущности, у которых есть ВСЕ указанные компоненты.
   * Возвращает массив { entity, components: [comp1, comp2, ...] }.
   */
  query<T extends unknown[]>(
    ...types: { [K in keyof T]: ComponentClass<T[K]> }
  ): Array<{ entity: EntityId; components: T }> {
    if (types.length === 0) return [];

    // Начинаем с самого маленького хранилища для быстрой фильтрации
    let smallestStore: Map<number, unknown> | undefined;
    let smallestIdx = 0;
    let smallestSize = Infinity;

    for (let i = 0; i < types.length; i++) {
      const store = this.stores.get(types[i]);
      if (!store || store.size === 0) return [];
      if (store.size < smallestSize) {
        smallestSize = store.size;
        smallestStore = store;
        smallestIdx = i;
      }
    }

    const results: Array<{ entity: EntityId; components: T }> = [];

    for (const index of smallestStore!.keys()) {
      if (!this.aliveFlags[index]) continue;

      const components = new Array(types.length) as T;
      let match = true;

      for (let i = 0; i < types.length; i++) {
        if (i === smallestIdx) {
          components[i] = smallestStore!.get(index) as T[number];
          continue;
        }
        const val = this.stores.get(types[i])?.get(index);
        if (val === undefined) {
          match = false;
          break;
        }
        components[i] = val as T[number];
      }

      if (match) {
        results.push({
          entity: makeEntityId(index, this.generations[index]),
          components,
        });
      }
    }

    return results;
  }

  /** Получить все живые сущности */
  getAliveEntities(): EntityId[] {
    const result: EntityId[] = [];
    for (let i = 1; i < this.nextIndex; i++) {
      if (this.aliveFlags[i]) {
        result.push(makeEntityId(i, this.generations[i]));
      }
    }
    return result;
  }

  /** Обновить все зарегистрированные системы */
  update(dt: number): void {
    this.scheduler.update(dt);
  }

  /** Очистить мир — удалить все сущности, компоненты и системы */
  clear(): void {
    this.aliveFlags.fill(0);
    this.generations.fill(0);
    this.stores.clear();
    this.freeIndices.length = 0;
    this.nextIndex = 1;
    this.aliveCount = 0;
    this.scheduler.clear();
  }

  /** Удвоить capacity TypedArrays */
  private grow(): void {
    const newCapacity = this.capacity * 2;
    const newGenerations = new Uint16Array(newCapacity);
    newGenerations.set(this.generations);
    const newAlive = new Uint8Array(newCapacity);
    newAlive.set(this.aliveFlags);
    this.generations = newGenerations;
    this.aliveFlags = newAlive;
    this.capacity = newCapacity;
  }
}
