import { clearAllListeners, emit, off, on } from '../index';

describe('Event System', () => {
  beforeEach(() => {
    clearAllListeners();
  });

  describe('on / emit', () => {
    it('данные доходят до подписчика', () => {
      const handler = jest.fn();
      on('player-hit', handler);

      emit('player-hit', { damage: 10, attackerName: 'Test' });

      expect(handler).toHaveBeenCalledWith({ damage: 10, attackerName: 'Test' });
    });

    it('несколько подписчиков получают одно событие', () => {
      const h1 = jest.fn();
      const h2 = jest.fn();
      on('player-hit', h1);
      on('player-hit', h2);

      emit('player-hit', { damage: 5, attackerName: 'A' });

      expect(h1).toHaveBeenCalledTimes(1);
      expect(h2).toHaveBeenCalledTimes(1);
    });

    it('подписчик не получает события другого типа', () => {
      const handler = jest.fn();
      on('player-hit', handler);

      emit('phase-changed', { phase: 2 });

      expect(handler).not.toHaveBeenCalled();
    });
  });

  describe('off', () => {
    it('после отписки обработчик не вызывается', () => {
      const handler = jest.fn();
      on('player-hit', handler);
      off('player-hit', handler);

      emit('player-hit', { damage: 10, attackerName: 'Test' });

      expect(handler).not.toHaveBeenCalled();
    });
  });

  describe('on → unsubscribe', () => {
    it('функция отписки, возвращённая из on, работает', () => {
      const handler = jest.fn();
      const unsub = on('player-hit', handler);

      unsub();
      emit('player-hit', { damage: 10, attackerName: 'Test' });

      expect(handler).not.toHaveBeenCalled();
    });
  });

  describe('clearAllListeners', () => {
    it('удаляет все подписки', () => {
      const h1 = jest.fn();
      const h2 = jest.fn();
      on('player-hit', h1);
      on('phase-changed', h2);

      clearAllListeners();

      emit('player-hit', { damage: 10, attackerName: 'Test' });
      emit('phase-changed', { phase: 2 });

      expect(h1).not.toHaveBeenCalled();
      expect(h2).not.toHaveBeenCalled();
    });
  });

  describe('error handling', () => {
    it('ошибка в одном обработчике не блокирует другие', () => {
      const errorHandler = jest.fn(() => {
        throw new Error('boom');
      });
      const normalHandler = jest.fn();

      // Подавляем console.error
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      on('player-hit', errorHandler);
      on('player-hit', normalHandler);

      emit('player-hit', { damage: 10, attackerName: 'Test' });

      expect(normalHandler).toHaveBeenCalledTimes(1);
      expect(consoleSpy).toHaveBeenCalled();

      consoleSpy.mockRestore();
    });
  });
});
