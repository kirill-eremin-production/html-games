export const AI_CONFIG = {
  // Target selection
  retargetChance: 0.01,
  enemyTargetPlayerChance: 0.5,
  allyTargetCapitalChance: 0.005,

  // State distance thresholds
  evadeDistance: 100,
  chaseDistance: 500,
  orbitDistance: 250,

  // State timers (seconds)
  evadeTimerBase: 2,
  evadeTimerRange: 2,
  chaseTimer: 3,
  orbitTimerBase: 3,
  orbitTimerRange: 3,

  // Evade noise
  evadeNoiseXZ: 0.8,
  evadeNoiseY: 0.4,
  orbitYNoise: 0.3,
  orbitCorrection: 0.3,

  // Steering
  turnRate: 1.5,
  rollRate: 1.5,

  // Shooting
  shootDistance: 400,
  shootTimerBase: 0.5,
  shootTimerRange: 0.7,

  // Exhaust animation
  exhaustPulseSpeed: 0.006,
  exhaustPulsePhaseMultiplier: 1.7,
  exhaustOpacityBase: 0.6,
  exhaustOpacityRange: 0.3,
  exhaustScaleBase: 0.9,
  exhaustScaleRange: 0.2,
} as const;
