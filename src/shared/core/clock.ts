export class Clock {
  private _startTime = 0;
  private _lastTime = 0;
  private _running = false;

  start(): void {
    this._startTime = performance.now() / 1000;
    this._lastTime = this._startTime;
    this._running = true;
  }

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

  getElapsedTime(): number {
    return performance.now() / 1000 - this._startTime;
  }
}
