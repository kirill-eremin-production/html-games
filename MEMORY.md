# Space Combat — Project Memory

## What is this
3D space combat game (Three.js) — destroy 3 capital ships, then 100 enemy fighters. 32 AI allies fight alongside the player.

## Tech Stack
- **Vite** (dev server + build), **TypeScript** (strict: true), **Three.js**
- **Prettier** + `@trivago/prettier-plugin-sort-imports` for formatting
- **Husky** + **lint-staged** for pre-commit (prettier + tsc)
- Deploy: GitHub Pages, `base: './'` in vite.config for relative asset paths

## Project Structure
See [structure.md](structure.md) for full file tree and module responsibilities.

## Architecture (after refactoring)
- **GameSystem interface** (`src/systems/types.ts`): `{ id, init?, update, cleanup? }` — each mechanic is a self-contained system with lifecycle; modes compose systems via arrays; `initSystems()`/`updateSystems()`/`cleanupSystems()` runners
- **System adapters**: `playerSystem`, `inputSystem`, `starfieldSystem`, `damageSystem`, `bulletSystem`, `explosionSystem`, `aiSystem`, `capitalShipSystem`, `spawnerSystem` — each exports a `GameSystem` object alongside existing functions
- **System presets** (`src/systems/presets.ts`): `flightCoreSystems` (input+player+starfield), `weaponSystems` (bullets+explosions) — reusable building blocks for modes
- **Event bus** (`src/events.ts`): typed `on()/off()/emit()` with try-catch error protection — decouples systems
- **Damage system** (`src/systems/damage.ts`): handles fighter/subsystem/ship destruction via events; `bullets.ts` only does hit detection + emits
- **Input actions** (`src/input.ts`): configurable keymap from `config/input.ts`; `setKeyMap()`/`getKeyMap()` for runtime changes; exports `inputSystem`
- **Mode lifecycle**: `enter(context?)`/`exit()` in each mode; modes compose systems via `updateSystems(allSystems, dt)`
- **Typed ModeContext** (`src/modes/types.ts`): `CombatModeContext`, `ExplorationModeContext`, `GalaxyModeContext`, `StationModeContext` — type-safe context per mode
- **Common updates** (`src/systems/common-updates.ts`): `updateFlightHUD()`, `updateMessageTimer()` — shared UI helpers
- **Dispose utility** (`src/utils/dispose.ts`): `disposeObject()` recursively disposes geometry+materials — used by system cleanup
- **mode-manager.ts** is now a thin orchestrator — delegates init/cleanup to mode handlers

## Key Decisions
- `state.ts` exports a single mutable `state` object (not a class/store) — simple singleton pattern
- `playerPlane` is a `THREE.Group` (exported from `systems/player.ts`), the fighter model is added as a child in `main.ts`
- Shared geometries for fighters are created once at module level in `scene/models.ts`
- Sound is procedural (Web Audio API oscillators + noise buffers), no audio files
- Game loop is capped at 60 FPS via `requestAnimationFrame` + frame interval check
- HUD updates every 2nd frame for performance

## Commands
- `npm run dev` — dev server with HMR
- `npm run build` — tsc + vite build → `dist/`
- `npm run format` / `format:check` — prettier
- `npm run typecheck` — tsc --noEmit

## Deploy
GitHub Pages URL pattern: `https://<user>.github.io/html-games/dist/index.html`
