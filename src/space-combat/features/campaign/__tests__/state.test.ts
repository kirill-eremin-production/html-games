import { MAX_FUEL, QUIT_PENALTY, STARTING_FUEL, STARTING_MONEY } from '../balance';
import {
  buyFuel,
  campaign,
  completeContract,
  failContract,
  grantEmergencyFuel,
  needsEmergencyFuel,
  spendFuel,
  startCampaign,
} from '../state';
import type { Contract } from '../types';

// Мокаем localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: jest.fn((key: string) => store[key] ?? null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: jest.fn((key: string) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();
Object.defineProperty(globalThis, 'localStorage', { value: localStorageMock });

function makeContract(overrides?: Partial<Contract>): Contract {
  return {
    id: 'contract-1',
    difficulty: 'medium',
    title: 'Тест',
    description: 'Тестовый контракт',
    targetSystemId: 'sys-1',
    reward: 2000,
    scoreMultiplier: 2,
    ...overrides,
  };
}

describe('campaign state', () => {
  beforeEach(() => {
    localStorageMock.clear();
    startCampaign();
  });

  describe('buyFuel', () => {
    it('покупает топливо и списывает деньги', () => {
      const moneyBefore = campaign.money;
      const fuelBefore = campaign.fuel;
      const result = buyFuel(2);

      expect(result).toBe(true);
      expect(campaign.fuel).toBe(fuelBefore + 2);
      expect(campaign.money).toBe(moneyBefore - 2 * 50);
    });

    it('не превышает maxFuel', () => {
      campaign.fuel = MAX_FUEL - 1;
      buyFuel(5);
      expect(campaign.fuel).toBe(MAX_FUEL);
    });

    it('отказ при нехватке денег', () => {
      campaign.money = 10;
      const result = buyFuel(1);
      expect(result).toBe(false);
      expect(campaign.money).toBe(10); // деньги не изменились
    });

    it('отказ при полном баке', () => {
      campaign.fuel = MAX_FUEL;
      const result = buyFuel(1);
      expect(result).toBe(false);
    });
  });

  describe('spendFuel', () => {
    it('списывает топливо', () => {
      campaign.fuel = 5;
      const result = spendFuel(3);
      expect(result).toBe(true);
      expect(campaign.fuel).toBe(2);
    });

    it('отказ при нехватке топлива', () => {
      campaign.fuel = 2;
      const result = spendFuel(5);
      expect(result).toBe(false);
      expect(campaign.fuel).toBe(2);
    });
  });

  describe('completeContract', () => {
    it('при победе: награда = base + floor(score * multiplier / 100)', () => {
      const contract = makeContract({
        reward: 2000,
        scoreMultiplier: 2,
      });
      campaign.activeContract = contract;
      campaign.money = 0;

      const reward = completeContract(true, 500);
      // reward = 2000 + floor(500 * 2 / 100) = 2000 + 10 = 2010
      expect(reward).toBe(2010);
      expect(campaign.money).toBe(2010);
    });

    it('при поражении: награда = floor(base * 0.3)', () => {
      const contract = makeContract({ reward: 2000 });
      campaign.activeContract = contract;
      campaign.money = 0;

      const reward = completeContract(false, 1000);
      expect(reward).toBe(Math.floor(2000 * 0.3));
      expect(campaign.money).toBe(600);
    });

    it('увеличивает счётчик completedContracts', () => {
      campaign.activeContract = makeContract();
      const before = campaign.completedContracts;
      completeContract(true, 100);
      expect(campaign.completedContracts).toBe(before + 1);
    });

    it('очищает activeContract после завершения', () => {
      campaign.activeContract = makeContract();
      completeContract(true, 0);
      expect(campaign.activeContract).toBeNull();
    });

    it('возвращает 0 если нет активного контракта', () => {
      campaign.activeContract = null;
      const reward = completeContract(true, 1000);
      expect(reward).toBe(0);
    });
  });

  describe('failContract', () => {
    it('списывает штраф (QUIT_PENALTY) и очищает контракт', () => {
      campaign.activeContract = makeContract();
      campaign.money = 5000;

      const penalty = failContract();

      expect(penalty).toBe(QUIT_PENALTY);
      expect(campaign.money).toBe(5000 - QUIT_PENALTY);
      expect(campaign.activeContract).toBeNull();
    });

    it('штраф не больше текущих денег', () => {
      campaign.activeContract = makeContract();
      campaign.money = 100;

      const penalty = failContract();

      expect(penalty).toBe(100);
      expect(campaign.money).toBe(0);
    });
  });

  describe('needsEmergencyFuel / grantEmergencyFuel', () => {
    it('needsEmergencyFuel: true при fuel=0 и money < 50', () => {
      campaign.fuel = 0;
      campaign.money = 0;
      expect(needsEmergencyFuel()).toBe(true);
    });

    it('needsEmergencyFuel: false при наличии топлива', () => {
      campaign.fuel = 1;
      campaign.money = 0;
      expect(needsEmergencyFuel()).toBe(false);
    });

    it('needsEmergencyFuel: false при наличии денег на покупку', () => {
      campaign.fuel = 0;
      campaign.money = 50;
      expect(needsEmergencyFuel()).toBe(false);
    });

    it('grantEmergencyFuel: устанавливает fuel = 1', () => {
      campaign.fuel = 0;
      grantEmergencyFuel();
      expect(campaign.fuel).toBe(1);
    });
  });

  describe('startCampaign', () => {
    it('сбрасывает состояние к начальным значениям', () => {
      campaign.money = 9999;
      campaign.fuel = 0;
      campaign.completedContracts = 50;
      startCampaign();
      expect(campaign.money).toBe(STARTING_MONEY);
      expect(campaign.fuel).toBe(STARTING_FUEL);
      expect(campaign.completedContracts).toBe(0);
      expect(campaign.currentSystemId).toBe('solaris');
    });
  });
});
