/**
 * Игровые часы — отмеряют время между кадрами (delta time).
 *
 * Используются в game loop для расчёта физики, анимаций и движения
 * независимо от частоты кадров.
 */
export class Clock {
  private _lastTime = 0;
  private _running = false;

  /** Запускает часы. Первый вызов `getDelta()` после старта вернёт 0. */
  start(): void {
    this._lastTime = performance.now() / 1000;
    this._running = true;
  }

  /** Время в секундах, прошедшее с предыдущего вызова `getDelta()`. */
  getDelta(): number {
    if (!this._running) {
      this.start();
      return 0;
    }
    const now = performance.now() / 1000;
    const delta = now - this._lastTime;
    this._lastTime = now;
    return delta;
  }
}
