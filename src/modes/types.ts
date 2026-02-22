import type { CombatConfig } from '../campaign/types';

// ── Typed mode contexts ─────────────────────────────────────────────────────
// Each mode declares its own context shape. Modes without context use `void`.

export interface CombatModeContext {
  combatConfig?: CombatConfig;
}

export interface ExplorationModeContext {
  systemId?: string;
  exitCallback?: () => void;
}

export interface GalaxyModeContext {
  resetCamera?: boolean;
  onStation?: () => void;
  onCombat?: () => void;
  onExploration?: () => void;
}

export interface StationModeContext {
  onBack?: () => void;
}

/** Union of all mode contexts — used by the generic registry */
export type ModeContext =
  | CombatModeContext
  | ExplorationModeContext
  | GalaxyModeContext
  | StationModeContext;

/** Generic handler — each mode specifies its own context type */
export interface GameModeHandler<TCtx = ModeContext> {
  update(dt: number): void;
  enter(context?: TCtx): void;
  exit(): void;
}
