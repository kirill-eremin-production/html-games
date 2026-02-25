import type { GameSystem } from '@/shared/types';

/**
 * Управляет регистрацией, порядком и жизненным циклом систем.
 * Системы выполняются в порядке возрастания priority.
 */
export class SystemScheduler {
  private systems: Array<{ system: GameSystem; priority: number }> = [];
  private initialized = false;

  /**
   * Зарегистрировать систему.
   * @param system   — объект GameSystem
   * @param priority — чем меньше число, тем раньше выполняется (default: 0).
   *                   Системы с одинаковым priority выполняются в порядке добавления.
   */
  add(system: GameSystem, priority = 0): this {
    if (this.systems.some((s) => s.system.id === system.id)) {
      return this;
    }
    this.systems.push({ system, priority });
    this.systems.sort((a, b) => a.priority - b.priority);
    return this;
  }

  /**
   * Зарегистрировать массив систем с автоматическими приоритетами.
   * Первая система получает startPriority, каждая следующая +step.
   */
  addMany(systems: GameSystem[], startPriority = 0, step = 10): this {
    for (let i = 0; i < systems.length; i++) {
      this.add(systems[i], startPriority + i * step);
    }
    return this;
  }

  /** Удалить систему по id */
  remove(systemId: string): this {
    const idx = this.systems.findIndex((s) => s.system.id === systemId);
    if (idx !== -1) {
      this.systems[idx].system.cleanup?.();
      this.systems.splice(idx, 1);
    }
    return this;
  }

  /** Проверить, зарегистрирована ли система */
  has(systemId: string): boolean {
    return this.systems.some((s) => s.system.id === systemId);
  }

  /** Получить систему по id */
  get(systemId: string): GameSystem | undefined {
    return this.systems.find((s) => s.system.id === systemId)?.system;
  }

  /** Инициализировать все системы */
  init(): void {
    if (this.initialized) return;
    for (const { system } of this.systems) {
      system.init?.();
    }
    this.initialized = true;
  }

  /** Вызвать update(dt) всех систем в порядке priority */
  update(dt: number): void {
    for (const { system } of this.systems) {
      system.update(dt);
    }
  }

  /** Вызвать cleanup() всех систем и сбросить состояние */
  cleanup(): void {
    for (const { system } of this.systems) {
      system.cleanup?.();
    }
    this.initialized = false;
  }

  /** Удалить все системы (cleanup + clear) */
  clear(): void {
    this.cleanup();
    this.systems.length = 0;
  }

  /** Количество зарегистрированных систем */
  get count(): number {
    return this.systems.length;
  }

  /** Список id систем в порядке выполнения (для отладки) */
  get order(): string[] {
    return this.systems.map((s) => s.system.id);
  }
}
