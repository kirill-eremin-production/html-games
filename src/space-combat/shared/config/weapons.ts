export const WEAPON_CONFIG = {
  // Laser speeds
  playerLaserSpeed: 400,
  allyLaserSpeed: 400,
  enemyLaserSpeed: 250,

  // Damage per hit
  playerDamage: 15,
  allyDamage: 10,
  enemyDamage: 10,

  // Laser lifetime (seconds)
  laserLife: 2.0,

  // Laser geometry
  allyLaserRadius: 0.15,
  enemyLaserRadius: 0.18,
  laserLength: 5,
  laserSegments: 4,

  // Laser colors
  playerLaserColor: 0x00ffcc,
  allyLaserColor: 0x44ff88,
  enemyLaserColor: 0xff3300,

  // Fighter shot inaccuracy
  fighterShotSpread: 0.05,

  // Audio range for non-player shots
  audioDistSq: 300 * 300,

  // Bullet pool management
  maxBullets: 200,
  cleanupTarget: 160,
} as const;
