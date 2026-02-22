export const UI_CONFIG = {
  // HUD update frequency (every Nth frame)
  hudUpdateInterval: 2,

  // Minimap
  minimap: {
    size: 180,
    center: 90,
    scale: 0.025,
    playerDotRadius: 4,
    dotRadius: 2,
    dirLineLength: 15,
    capitalShipMarkerSize: 4,
    borderRadius: 88,
    padding: 3,
  },

  // Off-screen indicators
  indicators: {
    margin: 40,
    opacity: 0.9,
  },

  // Planet markers
  planetMarkers: {
    margin: 50,
  },

  // Target markers
  targetMarkers: {
    enemyRangeSq: 800 * 800,
    shipRangeSq: 1500 * 1500,
    offScreenMargin: 20,
    lockPickMargin: 40,
  },

  // Damage visual effect
  damageEffect: {
    flashGlowSize: 80,
    lowHealthThreshold: 30,
    lowHealthPulseSpeed: 0.01,
    lowHealthGlowSize: 30,
    lowHealthGlowOpacity: 0.3,
  },
} as const;
