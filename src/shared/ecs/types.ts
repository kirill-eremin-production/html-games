/** Числовой идентификатор сущности */
export type EntityId = number;

/** Конструктор компонента — используется как ключ для хранилища */
export type ComponentClass<T = unknown> = new (...args: any[]) => T;
