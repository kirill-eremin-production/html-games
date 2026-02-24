import { Clock } from '../clock';

describe('Clock', () => {
  let originalPerformanceNow: () => number;

  beforeEach(() => {
    originalPerformanceNow = performance.now;
  });

  afterEach(() => {
    performance.now = originalPerformanceNow;
  });

  describe('getDelta', () => {
    it('первый вызов возвращает 0 (автостарт)', () => {
      performance.now = jest.fn(() => 1000);
      const clock = new Clock();
      expect(clock.getDelta()).toBe(0);
    });

    it('возвращает время в секундах между вызовами', () => {
      let time = 1000;
      performance.now = jest.fn(() => time);

      const clock = new Clock();
      clock.getDelta(); // auto-start, returns 0

      time = 1500; // 500ms later
      expect(clock.getDelta()).toBeCloseTo(0.5, 5);
    });

    it('корректно обновляет _lastTime при последовательных вызовах', () => {
      let time = 1000;
      performance.now = jest.fn(() => time);

      const clock = new Clock();
      clock.getDelta(); // auto-start

      time = 1100; // +100ms
      expect(clock.getDelta()).toBeCloseTo(0.1, 5);

      time = 1350; // +250ms
      expect(clock.getDelta()).toBeCloseTo(0.25, 5);
    });
  });

  describe('start', () => {
    it('после start первый getDelta возвращает малое значение', () => {
      let time = 1000;
      performance.now = jest.fn(() => time);

      const clock = new Clock();
      clock.start();

      time = 1016; // +16ms (один кадр)
      expect(clock.getDelta()).toBeCloseTo(0.016, 5);
    });

    it('повторный start сбрасывает отсчёт', () => {
      let time = 1000;
      performance.now = jest.fn(() => time);

      const clock = new Clock();
      clock.start();

      time = 2000; // +1000ms
      clock.start(); // перезапуск — _lastTime обновляется

      time = 2100; // +100ms после рестарта
      expect(clock.getDelta()).toBeCloseTo(0.1, 5);
    });
  });
});
