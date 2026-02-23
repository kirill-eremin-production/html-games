import { inputSystem } from '@/shared/input';
import type { GameSystem } from '@/shared/types';

import { bulletSystem } from '@/features/combat/bullet-system';
import { explosionSystem } from '@/features/combat/explosions';
import { playerSystem } from '@/features/flight/player-system';
import { starfieldSystem } from '@/features/flight/starfield';

// ── Reusable system presets ─────────────────────────────────────────────────
// Compose modes from these building blocks. Order matters — it defines
// the execution sequence within a single frame.

/** Core flight: input → player movement → starfield parallax */
export const flightCoreSystems: GameSystem[] = [inputSystem, playerSystem, starfieldSystem];

/** Weapons: bullet physics + hit detection, particle explosions */
export const weaponSystems: GameSystem[] = [bulletSystem, explosionSystem];
