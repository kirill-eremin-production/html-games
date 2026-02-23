export const COMBAT_CONSTANTS = {
  // Hit detection (distance squared)
  fighterHitDistSq: 12 * 12,
  playerHitDistSq: 6 * 6,

  // Scoring
  fighterKillScore: 100,
  subsystemKillScore: 500,
  capitalShipKillScore: 2000,

  // Capital ship spawn positions
  shipPositions: [
    [2000, 100, 0],
    [-1000, -200, 2200],
    [-500, 300, -2500],
    [1500, -300, -1800],
    [-2000, 200, 1000],
  ] as readonly (readonly [number, number, number])[],

  // Capital ship turrets
  turretRangeSq: 800 * 800,
  allyTurretRangeSq: 600 * 600,
  audioRangeSq: 600 * 600,
  turretInaccuracyMultiplier: 2.5,
  turretBurstMin: 2,
  turretBurstRandomExtra: 2,
  turretOriginSpreadXZ: 30,
  turretOriginSpreadY: 15,
  turretShotSpread: 0.05,
  shipRotationSpeed: 0.02,

  // Spawner
  allySpawnSpread: { x: 200, y: 100, z: 200 },
  enemySpawnSpread: { x: 300, y: 150, z: 300 },
  defaultEnemySpawnPos: [1500, 0, 0] as readonly [number, number, number],

  // Explosion particles
  explosionParticleMin: 3,
  explosionParticleRandomExtra: 3,
  explosionScaleBase: 0.5,
  explosionScaleRange: 1.5,
  explosionVelocityFactor: 60,
  explosionLifeBase: 0.4,
  explosionLifeRange: 0.8,
  explosionVelocityDecay: 2,

  // Capital ship destruction
  secondaryExplosionCount: 5,
  secondaryExplosionDelay: 300,
  shipRemoveDelay: 1800,
  secondaryExplosionSpread: { x: 90, y: 30, z: 45 },
  secondaryExplosionSize: 6,
  mainExplosionSize: 12,
  subsystemExplosionSize: 4.5,
  hitExplosionSize: 0.3,
  hitCapitalExplosionSize: 0.5,
} as const;
