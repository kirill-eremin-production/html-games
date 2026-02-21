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

## Key Decisions
- `state.ts` exports a single mutable `state` object (not a class/store) — simple singleton pattern
- `playerPlane` is a `THREE.Group` (exported from `systems/player.ts`), the fighter model is added as a child in `main.ts`
- Shared geometries for fighters are created once at module level in `scene/models.ts`
- Sound is procedural (Web Audio API oscillators + noise buffers), no audio files
- Game loop is capped at 30 FPS via `requestAnimationFrame` + frame interval check
- HUD updates every 3rd frame for performance

## Commands
- `npm run dev` — dev server with HMR
- `npm run build` — tsc + vite build → `dist/`
- `npm run format` / `format:check` — prettier
- `npm run typecheck` — tsc --noEmit

## Deploy
GitHub Pages URL pattern: `https://<user>.github.io/html-games/dist/index.html`
