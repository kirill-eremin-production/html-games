import { inputSystem } from '../input';
import { starfieldSystem } from '../scene/starfield';
import { bulletSystem } from './bullets';
import { explosionSystem } from './explosions';
import { playerSystem } from './player';
import type { GameSystem } from './types';

// ── Reusable system presets ─────────────────────────────────────────────────
// Compose modes from these building blocks. Order matters — it defines
// the execution sequence within a single frame.

/** Core flight: input → player movement → starfield parallax */
export const flightCoreSystems: GameSystem[] = [inputSystem, playerSystem, starfieldSystem];

/** Weapons: bullet physics + hit detection, particle explosions */
export const weaponSystems: GameSystem[] = [bulletSystem, explosionSystem];
