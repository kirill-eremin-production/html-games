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
- **Event bus** (`src/events.ts`): typed `on()/off()/emit()` — decouples systems
- **Damage system** (`src/systems/damage.ts`): handles fighter/subsystem/ship destruction via events; `bullets.ts` only does hit detection + emits
- **Input actions** (`src/input.ts`): `actions.thrust`, `actions.fire`, `aim.x/y` — abstracts raw key codes from game logic
- **Mode lifecycle**: `enter(context?)`/`exit()` in each mode; `switchMode('combat', { combatConfig })` passes data
- **Common updates** (`src/systems/common-updates.ts`): `updateFlightSystems()`, `updateFlightHUD()`, `updateMessageTimer()` — shared by combat & exploration
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
