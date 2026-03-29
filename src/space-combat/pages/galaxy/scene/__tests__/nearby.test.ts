import { NEARBY_RADIUS_MULTIPLIER } from '@/features/campaign/balance';
import { STAR_SYSTEMS } from '@/features/campaign/data';
import { campaign } from '@/features/campaign/state';

import { recomputeNearby } from '../nearby';
import { nearbySystemIds } from '../refs';

// Мокаем @/shared/core чтобы createTransformNode не требовал BJS Scene
jest.mock('@/shared/core', () => {
  const { Vector3 } = jest.requireActual('@/shared/core/vector3');
  return {
    Vector3,
    createTransformNode: jest.fn(() => ({
      position: new Vector3(),
      setEnabled: jest.fn(),
    })),
  };
});

describe('recomputeNearby', () => {
  beforeEach(() => {
    nearbySystemIds.clear();
  });

  it('всегда включает текущую систему', () => {
    campaign.currentSystemId = 'solaris';
    recomputeNearby();
    expect(nearbySystemIds.has('solaris')).toBe(true);
  });

  it('включает ближайшие системы в пределах engineRange * NEARBY_RADIUS_MULTIPLIER', () => {
    campaign.currentSystemId = 'solaris';
    campaign.engineRange = 15;
    recomputeNearby();

    const center = STAR_SYSTEMS.find((s) => s.id === 'solaris')!;
    const nearbyRadius = campaign.engineRange * NEARBY_RADIUS_MULTIPLIER;
    const nearbyRadiusSq = nearbyRadius * nearbyRadius;

    for (const id of nearbySystemIds) {
      if (id === 'solaris') continue;
      const sys = STAR_SYSTEMS.find((s) => s.id === id)!;
      const dx = center.position[0] - sys.position[0];
      const dy = center.position[1] - sys.position[1];
      const dz = center.position[2] - sys.position[2];
      const distSq = dx * dx + dy * dy + dz * dz;
      expect(distSq).toBeLessThanOrEqual(nearbyRadiusSq);
    }
  });

  it('НЕ включает системы за пределами радиуса', () => {
    campaign.currentSystemId = 'solaris';
    campaign.engineRange = 15;
    recomputeNearby();

    const center = STAR_SYSTEMS.find((s) => s.id === 'solaris')!;
    const nearbyRadius = campaign.engineRange * NEARBY_RADIUS_MULTIPLIER;
    const nearbyRadiusSq = nearbyRadius * nearbyRadius;

    for (const sys of STAR_SYSTEMS) {
      if (sys.id === 'solaris') continue;
      const dx = center.position[0] - sys.position[0];
      const dy = center.position[1] - sys.position[1];
      const dz = center.position[2] - sys.position[2];
      const distSq = dx * dx + dy * dy + dz * dz;

      if (distSq > nearbyRadiusSq) {
        expect(nearbySystemIds.has(sys.id)).toBe(false);
      }
    }
  });

  it('при малом engineRange меньше систем в nearby', () => {
    campaign.currentSystemId = 'solaris';

    campaign.engineRange = 5;
    recomputeNearby();
    const smallCount = nearbySystemIds.size;

    campaign.engineRange = 50;
    recomputeNearby();
    const largeCount = nearbySystemIds.size;

    expect(largeCount).toBeGreaterThan(smallCount);
  });

  it('очищает предыдущие результаты при повторном вызове', () => {
    campaign.currentSystemId = 'solaris';
    campaign.engineRange = 15;
    recomputeNearby();

    const otherSystem = STAR_SYSTEMS.find((s) => s.id !== 'solaris');
    if (otherSystem) {
      campaign.currentSystemId = otherSystem.id;
      recomputeNearby();
      expect(nearbySystemIds.has(otherSystem.id)).toBe(true);
    }
  });
});
