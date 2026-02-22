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
- **GameSystem interface** (`src/systems/types.ts`): `{ id, init?, update, cleanup? }` — each mechanic is a self-contained system with lifecycle
- **FlightModel strategy** (`src/config/flight-models.ts`): `FlightModelId = 'combat' | 'exploration'` — pluggable speed/camera behavior per mode, eliminates if/else branching in player.ts
- **Combat session config** (`src/config/combat-session.ts`): mutable `combatConfig` separated from true constants
- **System presets** (`src/systems/presets.ts`): `flightCoreSystems`, `weaponSystems` — reusable building blocks
- **Combat UI systems** (`src/systems/combat-ui.ts`): `damageEffectSystem`, `proximityAudioSystem`, `combatHudSystem` — reusable across combat-like modes
- **Exploration systems** (`src/systems/exploration-hud.ts`): `explorationSceneSystem`, `explorationHudSystem`
- **Event bus** (`src/events.ts`): typed `on()/off()/emit()` with `Unsubscribe` returns — `on()` returns disposer function
- **Generic GameModeHandler** (`src/modes/types.ts`): `GameModeHandler<TCtx>` — type-safe context per mode
- **Player utilities** (`src/systems/player.ts`): `resetPlayerTransform()` eliminates transform reset duplication
- **Mode cleanup**: each mode's `exit()` owns full cleanup (exploration scene, HUD, audio, etc.)
- **Thin refs** (`src/main/refs.ts`): only `paused` + `playerModel`; `hudFrameCounter`/`explorationTime` moved to state

## Key Decisions
- `state.ts` exports a single mutable `state` object (not a class/store) — simple singleton pattern
- `playerPlane` is a `THREE.Group` (exported from `systems/player.ts`), the fighter model is added as a child in `main.ts`
- `constants.ts` is pure constants only — mutable config is in `config/combat-session.ts`
- Each mode composes systems as arrays and delegates all per-frame work to `updateSystems()`
- Sound is procedural (Web Audio API oscillators + noise buffers), no audio files
- Game loop is capped at 60 FPS; HUD updates every 2nd frame for performance

## Commands
- `npm run dev` — dev server with HMR
- `npm run build` — tsc + vite build → `dist/`
- `npm run format` / `format:check` — prettier
- `npm run typecheck` — tsc --noEmit

## Deploy
GitHub Pages URL pattern: `https://<user>.github.io/html-games/dist/index.html`
