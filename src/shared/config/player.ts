export const PLAYER_CONFIG = {
  // Flight model
  pitchSpeed: 2.2,
  rollSpeed: 3.0,
  yawSpeed: 1.5,
  mouseDeadZone: 0.05,
  rollFromMouse: 0.5,
  keyRollStrength: 2.0,

  // Speed (combat defaults, overridden per mode)
  defaultBaseSpeed: 80,
  defaultBoostSpeed: 160,
  accelerateRate: 120,
  decelerateRate: 100,
  minSpeed: 20,
  speedDecayRate: 2,

  // Exploration speed
  explorationAccelFraction: 0.15,

  // Rotation damping (per second)
  pitchDamping: 1.5,
  rollDamping: 2.0,
  yawDamping: 1.5,

  // Camera — combat mode
  combatCamBack: -10.5,
  combatCamUp: 3.75,
  combatLookAhead: 20,

  // Camera — exploration mode (dynamic: base + t * range)
  explCamBackBase: -16,
  explCamBackRange: -14,
  explCamUpBase: 5,
  explCamUpRange: 3,
  explLookBase: 10,
  explLookRange: 50,

  // Camera smoothing
  cameraSmoothBase: 5,
  cameraSmoothSpeedFactor: 0.1,
  cameraSmoothMin: 8,
  cameraUpLerp: 3,

  // Shooting
  shootCooldown: 0.1,

  // Survivability
  invulnDuration: 3,
  invulnBlinkRate: 10,
  healthRegenDelay: 5,
  healthRegenRate: 0.02,
  killHealthBonus: 0.1,
  damageFlashDuration: 0.3,
  deathExplosionSize: 6,

  // Exhaust visuals (base + speedRatio * range)
  exhaustOpacityBase: 0.4,
  exhaustOpacityRange: 0.6,
  exhaustScaleBase: 0.8,
  exhaustScaleRange: 0.6,
  glowOpacityBase: 0.1,
  glowOpacityRange: 0.3,
  glowScaleBase: 0.7,
  glowScaleRange: 0.8,
} as const;
