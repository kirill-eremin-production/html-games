import { Vector3 } from '@/shared/core/vector3';

import {
  isTraveling,
  setOnStartCombat,
  startTravelAnimation,
  updateTravelAnimation,
} from '../travel';

// Мокаем зависимости
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

const mockSetPlayerShipAt = jest.fn();
const mockGetStarPosition = jest.fn();
const mockHighlightRoutes = jest.fn();
const mockUpdateContractMarker = jest.fn();
const mockUpdatePlayerShipPosition = jest.fn();

jest.mock('../../scene', () => ({
  getStarPosition: (...args: any[]) => mockGetStarPosition(...args),
  setPlayerShipAt: (...args: any[]) => mockSetPlayerShipAt(...args),
  highlightRoutes: (...args: any[]) => mockHighlightRoutes(...args),
  updateContractMarker: (...args: any[]) => mockUpdateContractMarker(...args),
  updatePlayerShipPosition: (...args: any[]) => mockUpdatePlayerShipPosition(...args),
}));

jest.mock('../camera', () => ({
  attachGalaxyInput: jest.fn(),
  detachGalaxyInput: jest.fn(),
  lerpOrbitTarget: jest.fn(),
  setOrbitTarget: jest.fn(),
}));

jest.mock('../hud', () => ({
  deselectSystem: jest.fn(),
  updateGalaxyHud: jest.fn(),
}));

jest.mock('@/features/campaign/data', () => ({
  getSystem: jest.fn(() => ({ position: [0, 0, 0] })),
}));

jest.mock('@/features/campaign/state', () => ({
  campaign: {
    currentSystemId: 'solaris',
    activeContract: null,
  },
  travelToSystem: jest.fn(),
  regenerateContracts: jest.fn(),
}));

describe('Travel System', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockGetStarPosition.mockImplementation((id: string) => {
      if (id === 'solaris') return new Vector3(0, 0, 0);
      if (id === 'alpha') return new Vector3(100, 0, 0);
      return null;
    });
  });

  describe('isTraveling', () => {
    it('по умолчанию false', () => {
      expect(isTraveling()).toBe(false);
    });
  });

  describe('startTravelAnimation', () => {
    it('не стартует если getStarPosition вернул null', () => {
      mockGetStarPosition.mockReturnValue(null);
      startTravelAnimation('unknown');
      expect(isTraveling()).toBe(false);
    });

    it('устанавливает traveling = true', () => {
      const { campaign } = jest.requireMock('@/features/campaign/state');
      campaign.currentSystemId = 'solaris';
      startTravelAnimation('alpha');
      expect(isTraveling()).toBe(true);
    });
  });

  describe('updateTravelAnimation', () => {
    it('ничего не делает если не путешествуем', () => {
      // Завершаем предыдущее путешествие если оно активно
      if (isTraveling()) updateTravelAnimation(100);
      jest.clearAllMocks();

      updateTravelAnimation(0.1);
      expect(mockSetPlayerShipAt).not.toHaveBeenCalled();
    });

    it('обновляет позицию корабля по easing', () => {
      const { campaign } = jest.requireMock('@/features/campaign/state');
      campaign.currentSystemId = 'solaris';
      campaign.activeContract = null;

      startTravelAnimation('alpha');
      updateTravelAnimation(0.5); // progress = 0.5/1.5 ≈ 0.33

      expect(mockSetPlayerShipAt).toHaveBeenCalled();
    });

    it('easing EaseInOut quad: t=0.5 → ease=0.5', () => {
      const { campaign } = jest.requireMock('@/features/campaign/state');
      campaign.currentSystemId = 'solaris';
      campaign.activeContract = null;

      startTravelAnimation('alpha');
      // TRAVEL_DURATION = 1.5, чтобы progress = 0.5 нужен dt = 0.75
      updateTravelAnimation(0.75); // progress = 0.75/1.5 = 0.5

      // При t=0.5, easeInOutQuad = 2*0.5*0.5 = 0.5
      // Позиция: lerp(0, 100, 0.5) = 50
      const calledWith = mockSetPlayerShipAt.mock.calls[0][0];
      expect(calledWith.x).toBeCloseTo(50, 0);
    });

    it('завершает путешествие при progress >= 1', () => {
      const { campaign, travelToSystem } = jest.requireMock('@/features/campaign/state');
      campaign.currentSystemId = 'solaris';
      campaign.activeContract = null;

      startTravelAnimation('alpha');
      updateTravelAnimation(2); // dt=2 > TRAVEL_DURATION=1.5

      expect(travelToSystem).toHaveBeenCalledWith('alpha');
      expect(isTraveling()).toBe(false);
    });

    it('вызывает onStartCombat если целевая система — цель контракта', () => {
      const { campaign } = jest.requireMock('@/features/campaign/state');
      campaign.currentSystemId = 'solaris';
      campaign.activeContract = { targetSystemId: 'alpha' };

      const onCombat = jest.fn();
      setOnStartCombat(onCombat);

      startTravelAnimation('alpha');
      updateTravelAnimation(2); // завершить путешествие

      expect(onCombat).toHaveBeenCalled();
    });

    it('regenerateContracts если целевая НЕ цель контракта', () => {
      const { campaign, regenerateContracts } = jest.requireMock('@/features/campaign/state');
      campaign.currentSystemId = 'solaris';
      campaign.activeContract = null;

      startTravelAnimation('alpha');
      updateTravelAnimation(2);

      expect(regenerateContracts).toHaveBeenCalled();
    });
  });
});
