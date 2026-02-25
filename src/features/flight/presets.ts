import { inputSystem } from '@/shared/input';
import type { GameSystem } from '@/shared/types';

import { bulletSystem } from '@/features/combat/bullet-system';
import { collisionSystem } from '@/features/combat/collision-system';
import { explosionSystem } from '@/features/combat/explosions';
import { healthSystem } from '@/features/combat/health-system';
import { lifetimeSystem } from '@/features/combat/lifetime-system';
import { projectileMovementSystem } from '@/features/combat/movement-system';
import { playerSyncSystem, playerSystem } from '@/features/flight/player-system';
import { starfieldSystem } from '@/features/flight/starfield';

// ── Reusable system presets ─────────────────────────────────────────────────
// Compose modes from these building blocks. Order matters — it defines
// the execution sequence within a single frame.

/** Core flight: input → player movement → starfield parallax */
export const flightCoreSystems: GameSystem[] = [inputSystem, playerSystem, starfieldSystem];

/**
 * Weapons & combat physics:
 * projectile movement → collision detection → health/damage → lifetime cleanup → explosions
 * bulletSystem оставлен для cleanup при выходе из боя
 */
export const weaponSystems: GameSystem[] = [
  projectileMovementSystem,
  collisionSystem,
  healthSystem,
  playerSyncSystem,
  lifetimeSystem,
  bulletSystem,
  explosionSystem,
];
