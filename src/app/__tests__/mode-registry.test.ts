import type { GameModeHandler } from '@/shared/types';

import { getCurrentModeName, registerMode, switchMode, updateCurrentMode } from '../mode-registry';

function createMockHandler(): GameModeHandler {
  return {
    enter: jest.fn(),
    update: jest.fn(),
    exit: jest.fn(),
  };
}

describe('Mode Registry', () => {
  let menuHandler: GameModeHandler;
  let combatHandler: GameModeHandler;
  let galaxyHandler: GameModeHandler;

  beforeEach(() => {
    // Создаём свежие моки для каждого теста
    menuHandler = createMockHandler();
    combatHandler = createMockHandler();
    galaxyHandler = createMockHandler();
    registerMode('menu', menuHandler);
    registerMode('combat', combatHandler);
    registerMode('galaxy', galaxyHandler);
    // Сбрасываем currentHandler, переключаясь на menu
    switchMode('menu');
    jest.clearAllMocks();
  });

  describe('switchMode', () => {
    it('вызывает enter у нового режима', () => {
      switchMode('combat');
      expect(combatHandler.enter).toHaveBeenCalledTimes(1);
    });

    it('вызывает exit у старого режима при переключении', () => {
      switchMode('combat');
      switchMode('galaxy');
      expect(combatHandler.exit).toHaveBeenCalledTimes(1);
      expect(galaxyHandler.enter).toHaveBeenCalledTimes(1);
    });

    it('передаёт контекст в enter', () => {
      const ctx = { combatConfig: undefined, onCombatEnd: jest.fn() };
      switchMode('combat', ctx);
      expect(combatHandler.enter).toHaveBeenCalledWith(ctx);
    });

    it('обновляет текущий режим', () => {
      switchMode('galaxy');
      expect(getCurrentModeName()).toBe('galaxy');
    });
  });

  describe('updateCurrentMode', () => {
    it('вызывает update с dt у текущего режима', () => {
      switchMode('combat');
      updateCurrentMode(0.016);
      expect(combatHandler.update).toHaveBeenCalledWith(0.016);
    });
  });

  describe('getCurrentModeName', () => {
    it('по умолчанию — menu', () => {
      // Начальное значение currentName — 'menu'
      // (но при switchMode('combat') оно изменится)
      switchMode('menu');
      expect(getCurrentModeName()).toBe('menu');
    });
  });
});
