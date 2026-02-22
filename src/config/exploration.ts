export const EXPLORATION_CONFIG = {
  // Player start position
  startPosition: [250000, 0, 0] as readonly [number, number, number],

  // Speeds
  baseSpeed: 0,
  boostSpeed: 50000,
  initialSpeed: 5000,

  // Planet proximity
  planetInfoDistance: 200000,
  planetSlowdownMultiplier: 3,
  planetSlowdownMaxSpeed: 100,

  // Scene building
  starRadiusMultiplier: 50000,
  planetScale: 20000,
  asteroidCount: 400,
  orbitRingWidth: 2000,
  starGlowScale: 160000,
} as const;
