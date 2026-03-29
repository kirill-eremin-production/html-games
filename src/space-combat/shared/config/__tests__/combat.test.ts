import { COMBAT_CONSTANTS } from '@/shared/config/combat';

describe('COMBAT_CONSTANTS', () => {
  it('should have correct hit distances', () => {
    expect(COMBAT_CONSTANTS.fighterHitDistSq).toBe(144);
    expect(COMBAT_CONSTANTS.playerHitDistSq).toBe(36);
  });

  it('should have 5 ship positions', () => {
    expect(COMBAT_CONSTANTS.shipPositions).toHaveLength(5);
  });

  it('each ship position should be [x, y, z]', () => {
    for (const pos of COMBAT_CONSTANTS.shipPositions) {
      expect(pos).toHaveLength(3);
    }
  });
});
