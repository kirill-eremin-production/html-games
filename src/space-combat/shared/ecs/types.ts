/** Числовой идентификатор сущности (packed: generation << 20 | index) */
export type EntityId = number;

/** Конструктор компонента — используется как ключ для хранилища */
export type ComponentClass<T = unknown> = new (...args: any[]) => T;

// ── EntityId bit layout ──────────────────────────────────────────────────────

export const INDEX_BITS = 20;
export const INDEX_MASK = (1 << INDEX_BITS) - 1; // 0xFFFFF — до 1 048 576 сущностей
export const GENERATION_MASK = 0xfff; // 12 бит — до 4096 поколений

/** Извлечь index из packed EntityId */
export function indexOfEntity(id: EntityId): number {
  return id & INDEX_MASK;
}

/** Извлечь generation из packed EntityId */
export function generationOfEntity(id: EntityId): number {
  return (id >>> INDEX_BITS) & GENERATION_MASK;
}

/** Создать packed EntityId из index и generation */
export function makeEntityId(index: number, generation: number): EntityId {
  return ((generation & GENERATION_MASK) << INDEX_BITS) | (index & INDEX_MASK);
}
