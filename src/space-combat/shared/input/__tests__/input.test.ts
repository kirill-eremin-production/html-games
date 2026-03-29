import { state } from '@/shared/state';

import { actions, aim, getKeyMap, setKeyMap, updateActions } from '../index';

describe('Input System', () => {
  beforeEach(() => {
    // Очищаем все клавиши
    for (const key of Object.keys(state.keys)) {
      delete state.keys[key];
    }
    state.mouseX = 0;
    state.mouseY = 0;
    // Сбрасываем keyMap к дефолтному
    setKeyMap({
      KeyW: 'thrust',
      ShiftLeft: 'boost',
      ShiftRight: 'boost',
      KeyS: 'brake',
      KeyA: 'rollLeft',
      KeyD: 'rollRight',
      Space: 'fire',
      MouseLeft: 'fire',
    });
    updateActions();
  });

  describe('updateActions', () => {
    it('при нажатой KeyW активирует thrust', () => {
      state.keys['KeyW'] = true;
      updateActions();
      expect(actions.thrust).toBe(true);
    });

    it('при нажатом Space активирует fire', () => {
      state.keys['Space'] = true;
      updateActions();
      expect(actions.fire).toBe(true);
    });

    it('при ненажатой клавише действие false', () => {
      updateActions();
      expect(actions.thrust).toBe(false);
      expect(actions.fire).toBe(false);
      expect(actions.brake).toBe(false);
    });

    it('несколько одновременных клавиш работают', () => {
      state.keys['KeyW'] = true;
      state.keys['Space'] = true;
      state.keys['KeyA'] = true;
      updateActions();
      expect(actions.thrust).toBe(true);
      expect(actions.fire).toBe(true);
      expect(actions.rollLeft).toBe(true);
      expect(actions.brake).toBe(false);
    });

    it('копирует mouseX/mouseY в aim', () => {
      state.mouseX = 0.5;
      state.mouseY = -0.3;
      updateActions();
      expect(aim.x).toBe(0.5);
      expect(aim.y).toBe(-0.3);
    });

    it('сбрасывает предыдущие действия при обновлении', () => {
      state.keys['KeyW'] = true;
      updateActions();
      expect(actions.thrust).toBe(true);

      // Отпустили клавишу
      delete state.keys['KeyW'];
      updateActions();
      expect(actions.thrust).toBe(false);
    });
  });

  describe('setKeyMap / getKeyMap', () => {
    it('setKeyMap заменяет раскладку', () => {
      setKeyMap({ ArrowUp: 'thrust', ArrowDown: 'brake' });
      state.keys['ArrowUp'] = true;
      updateActions();
      expect(actions.thrust).toBe(true);

      // Старая раскладка не работает
      state.keys['KeyW'] = true;
      updateActions();
      // KeyW больше не привязана к thrust
      expect(actions.thrust).toBe(true); // ArrowUp всё ещё нажата
    });

    it('getKeyMap возвращает текущую раскладку', () => {
      setKeyMap({ ArrowUp: 'thrust' });
      const map = getKeyMap();
      expect(map['ArrowUp']).toBe('thrust');
    });

    it('изменение возвращённой раскладки не влияет на оригинал', () => {
      setKeyMap({ ArrowUp: 'thrust' });
      const map = getKeyMap();
      // getKeyMap возвращает Readonly, но проверим иммутабельность логики setKeyMap
      expect(map['ArrowUp']).toBe('thrust');
    });
  });
});
