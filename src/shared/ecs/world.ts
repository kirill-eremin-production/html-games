import type { ComponentClass, EntityId } from './types';

/**
 * ECS World — контейнер для сущностей и компонентов.
 *
 * Сущность — числовой ID.
 * Компонент — экземпляр класса, привязанный к сущности.
 * Хранилище: Map<ComponentClass, Map<EntityId, Component>>.
 */
export class World {
  private nextId = 1;
  private alive = new Set<EntityId>();
  private stores = new Map<ComponentClass, Map<EntityId, unknown>>();

  /** Создать новую сущность, вернуть уникальный ID */
  createEntity(): EntityId {
    const id = this.nextId++;
    this.alive.add(id);
    return id;
  }

  /** Удалить сущность и все её компоненты */
  destroyEntity(id: EntityId): void {
    this.alive.delete(id);
    for (const store of this.stores.values()) {
      store.delete(id);
    }
  }

  /** Жива ли сущность */
  isAlive(id: EntityId): boolean {
    return this.alive.has(id);
  }

  /** Добавить компонент к сущности */
  addComponent<T extends object>(entity: EntityId, component: T): void {
    const ctor = component.constructor as ComponentClass<T>;
    let store = this.stores.get(ctor);
    if (!store) {
      store = new Map();
      this.stores.set(ctor, store);
    }
    store.set(entity, component);
  }

  /** Получить компонент сущности по типу (undefined если нет) */
  getComponent<T>(entity: EntityId, type: ComponentClass<T>): T | undefined {
    return this.stores.get(type)?.get(entity) as T | undefined;
  }

  /** Удалить компонент у сущности */
  removeComponent<T>(entity: EntityId, type: ComponentClass<T>): void {
    this.stores.get(type)?.delete(entity);
  }

  /** Проверить, есть ли у сущности компонент данного типа */
  hasComponent<T>(entity: EntityId, type: ComponentClass<T>): boolean {
    return this.stores.get(type)?.has(entity) ?? false;
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
    let smallestStore: Map<EntityId, unknown> | undefined;
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

    for (const entityId of smallestStore!.keys()) {
      if (!this.alive.has(entityId)) continue;

      const components = new Array(types.length) as T;
      let match = true;

      for (let i = 0; i < types.length; i++) {
        if (i === smallestIdx) {
          components[i] = smallestStore!.get(entityId) as T[number];
          continue;
        }
        const val = this.stores.get(types[i])?.get(entityId);
        if (val === undefined) {
          match = false;
          break;
        }
        components[i] = val as T[number];
      }

      if (match) {
        results.push({ entity: entityId, components });
      }
    }

    return results;
  }

  /** Получить все живые сущности */
  getAliveEntities(): EntityId[] {
    return Array.from(this.alive);
  }

  /** Очистить мир — удалить все сущности и компоненты */
  clear(): void {
    this.alive.clear();
    this.stores.clear();
    this.nextId = 1;
  }
}
