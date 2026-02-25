import type { GameSystem } from '@/shared/types';

import { SystemScheduler } from '../system-scheduler';

function makeSystem(id: string, calls: string[]): GameSystem {
  return {
    id,
    init: () => calls.push(`${id}:init`),
    update: (dt) => calls.push(`${id}:update(${dt})`),
    cleanup: () => calls.push(`${id}:cleanup`),
  };
}

describe('SystemScheduler', () => {
  let scheduler: SystemScheduler;
  let calls: string[];

  beforeEach(() => {
    scheduler = new SystemScheduler();
    calls = [];
  });

  // ── add / update ──────────────────────────────────────────────────────

  describe('add / update', () => {
    it('вызывает update в порядке priority', () => {
      scheduler.add(makeSystem('c', calls), 30);
      scheduler.add(makeSystem('a', calls), 10);
      scheduler.add(makeSystem('b', calls), 20);

      scheduler.update(0.016);
      expect(calls).toEqual(['a:update(0.016)', 'b:update(0.016)', 'c:update(0.016)']);
    });

    it('системы с одинаковым priority сохраняют порядок добавления', () => {
      scheduler.add(makeSystem('x', calls), 0);
      scheduler.add(makeSystem('y', calls), 0);
      scheduler.add(makeSystem('z', calls), 0);

      scheduler.update(1);
      expect(calls).toEqual(['x:update(1)', 'y:update(1)', 'z:update(1)']);
    });

    it('не добавляет систему с дублирующим id', () => {
      scheduler.add(makeSystem('sys', calls));
      scheduler.add(makeSystem('sys', calls));
      expect(scheduler.count).toBe(1);
    });
  });

  // ── addMany ───────────────────────────────────────────────────────────

  describe('addMany', () => {
    it('создаёт автоматические приоритеты', () => {
      const systems = [makeSystem('a', calls), makeSystem('b', calls), makeSystem('c', calls)];
      scheduler.addMany(systems, 100, 10);
      scheduler.update(1);
      expect(calls).toEqual(['a:update(1)', 'b:update(1)', 'c:update(1)']);
    });

    it('позволяет вставить между группами', () => {
      scheduler.addMany([makeSystem('a', calls), makeSystem('b', calls)], 0, 10);
      scheduler.add(makeSystem('mid', calls), 5);
      scheduler.update(1);
      expect(calls).toEqual(['a:update(1)', 'mid:update(1)', 'b:update(1)']);
    });
  });

  // ── init ──────────────────────────────────────────────────────────────

  describe('init', () => {
    it('вызывает init() для всех систем', () => {
      scheduler.add(makeSystem('a', calls));
      scheduler.add(makeSystem('b', calls));
      scheduler.init();
      expect(calls).toEqual(['a:init', 'b:init']);
    });

    it('init вызывается только один раз', () => {
      scheduler.add(makeSystem('sys', calls));
      scheduler.init();
      scheduler.init();
      expect(calls.filter((c) => c.includes('init'))).toHaveLength(1);
    });

    it('работает с системами без init()', () => {
      const noInit: GameSystem = { id: 'no-init', update: () => {} };
      scheduler.add(noInit);
      expect(() => scheduler.init()).not.toThrow();
    });
  });

  // ── remove ────────────────────────────────────────────────────────────

  describe('remove', () => {
    it('удаляет систему и вызывает cleanup', () => {
      scheduler.add(makeSystem('sys', calls));
      scheduler.remove('sys');
      expect(calls).toContain('sys:cleanup');
      expect(scheduler.count).toBe(0);
    });

    it('не падает при удалении несуществующей системы', () => {
      expect(() => scheduler.remove('nonexistent')).not.toThrow();
    });

    it('удалённая система не вызывается при update', () => {
      scheduler.add(makeSystem('a', calls));
      scheduler.add(makeSystem('b', calls));
      scheduler.remove('a');
      calls.length = 0;
      scheduler.update(1);
      expect(calls).toEqual(['b:update(1)']);
    });
  });

  // ── has / get ─────────────────────────────────────────────────────────

  describe('has / get', () => {
    it('has возвращает true для зарегистрированной системы', () => {
      scheduler.add(makeSystem('sys', calls));
      expect(scheduler.has('sys')).toBe(true);
    });

    it('has возвращает false для отсутствующей', () => {
      expect(scheduler.has('nope')).toBe(false);
    });

    it('get возвращает систему по id', () => {
      const sys = makeSystem('sys', calls);
      scheduler.add(sys);
      expect(scheduler.get('sys')).toBe(sys);
    });

    it('get возвращает undefined для отсутствующей', () => {
      expect(scheduler.get('nope')).toBeUndefined();
    });
  });

  // ── cleanup / clear ───────────────────────────────────────────────────

  describe('cleanup / clear', () => {
    it('cleanup вызывает cleanup() для всех систем', () => {
      scheduler.add(makeSystem('a', calls));
      scheduler.add(makeSystem('b', calls));
      scheduler.cleanup();
      expect(calls).toContain('a:cleanup');
      expect(calls).toContain('b:cleanup');
    });

    it('после cleanup можно снова вызвать init', () => {
      scheduler.add(makeSystem('sys', calls));
      scheduler.init();
      scheduler.cleanup();
      calls.length = 0;
      scheduler.init();
      expect(calls).toEqual(['sys:init']);
    });

    it('clear вызывает cleanup и очищает список', () => {
      scheduler.add(makeSystem('a', calls));
      scheduler.add(makeSystem('b', calls));
      scheduler.clear();
      expect(calls).toContain('a:cleanup');
      expect(calls).toContain('b:cleanup');
      expect(scheduler.count).toBe(0);
    });
  });

  // ── order ─────────────────────────────────────────────────────────────

  describe('order', () => {
    it('возвращает id систем в порядке выполнения', () => {
      scheduler.add(makeSystem('c', calls), 30);
      scheduler.add(makeSystem('a', calls), 10);
      scheduler.add(makeSystem('b', calls), 20);
      expect(scheduler.order).toEqual(['a', 'b', 'c']);
    });
  });

  // ── chaining ──────────────────────────────────────────────────────────

  describe('chaining', () => {
    it('методы add/addMany/remove возвращают this', () => {
      const sys = makeSystem('sys', calls);
      const result = scheduler
        .add(sys)
        .remove('sys')
        .addMany([makeSystem('x', calls)]);
      expect(result).toBe(scheduler);
    });
  });
});
