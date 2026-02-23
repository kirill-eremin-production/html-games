import type { CombatConfig } from '@/shared/types';

/** Mutable combat config — overridden per-battle in campaign mode */
export const combatConfig: CombatConfig = {
  enemies: 32,
  allies: 32,
  capitalShips: 3,
  killTarget: 100,
  fighterHP: 50,
  subsystemHP: 200,
  enemySpeedMin: 45,
  enemySpeedMax: 65,
  enemyFireRateMin: 2,
  enemyFireRateMax: 5,
  allySpeedMin: 55,
  allySpeedMax: 75,
  allyFireRateMin: 1,
  allyFireRateMax: 3,
  turretFireRateMin: 3,
  turretFireRateMax: 5,
  turretAccuracy: 0.15,
  respawnDelay: 5,
};

export function applyCombatConfig(cfg: CombatConfig): void {
  Object.assign(combatConfig, cfg);
}
