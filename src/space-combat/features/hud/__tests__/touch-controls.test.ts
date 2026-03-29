// touch-controls.ts требует window/navigator для isTouchDevice.
// Мокаем globalThis.window и globalThis.navigator для node-окружения.

jest.mock('@/shared/audio', () => ({
  resumeAudio: jest.fn(),
}));

jest.mock('@/shared/core', () => {
  const { Vector3 } = jest.requireActual('@/shared/core/vector3');
  const { Quaternion } = jest.requireActual('@/shared/core/quaternion');
  return {
    Vector3,
    Quaternion,
    TransformNode: class {
      position = new Vector3();
      quaternion = new Quaternion();
    },
    createTransformNode: jest.fn(() => ({
      position: new Vector3(),
      quaternion: new Quaternion(),
    })),
  };
});

jest.mock('@/features/flight/player-system', () => {
  const { Vector3 } = jest.requireActual('@/shared/core/vector3');
  const { Quaternion } = jest.requireActual('@/shared/core/quaternion');
  return {
    playerPlane: {
      position: new Vector3(0, 0, 0),
      quaternion: new Quaternion(),
    },
  };
});

jest.mock('../markers', () => ({
  toggleTargetLock: jest.fn(),
}));

describe('Touch Controls', () => {
  describe('isTouchDevice', () => {
    let savedWindow: any;
    let savedNavigator: any;

    beforeEach(() => {
      savedWindow = (globalThis as any).window;
      savedNavigator = (globalThis as any).navigator;
    });

    afterEach(() => {
      if (savedWindow === undefined) {
        delete (globalThis as any).window;
      } else {
        (globalThis as any).window = savedWindow;
      }
      if (savedNavigator === undefined) {
        delete (globalThis as any).navigator;
      } else {
        (globalThis as any).navigator = savedNavigator;
      }
      jest.resetModules();
    });

    it('возвращает true если ontouchstart есть в window', async () => {
      (globalThis as any).window = { ontouchstart: null };
      (globalThis as any).navigator = { maxTouchPoints: 0 };
      const { isTouchDevice } = await import('../touch-controls');
      expect(isTouchDevice()).toBe(true);
    });

    it('возвращает true если maxTouchPoints > 0', async () => {
      (globalThis as any).window = {};
      (globalThis as any).navigator = { maxTouchPoints: 5 };
      const { isTouchDevice } = await import('../touch-controls');
      expect(isTouchDevice()).toBe(true);
    });

    it('возвращает false на десктопе без touch', async () => {
      (globalThis as any).window = {};
      (globalThis as any).navigator = { maxTouchPoints: 0 };
      const { isTouchDevice } = await import('../touch-controls');
      expect(isTouchDevice()).toBe(false);
    });
  });
});
