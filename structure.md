# Project Structure

```
space-combat/
├── index.html              — HTML markup only (screens, HUD elements)
├── package.json            — scripts: dev, build, preview, format, typecheck
├── tsconfig.json           — strict: true, ESNext modules, bundler resolution
├── vite.config.ts          — base: './' (relative paths for GitHub Pages)
├── .prettierrc             — singleQuote, trailingComma, import sorting plugin
├── .gitignore              — node_modules
├── .husky/pre-commit       — npx lint-staged
├── game.html               — LEGACY: original monolithic file (1754 lines, kept for reference)
│
├── src/
│   ├── main.ts             — Entry point: init, input handlers, game loop, resetGame, startGame
│   ├── types.ts            — All interfaces: Fighter, CapitalShip, Subsystem, LaserData, GameState, etc.
│   ├── constants.ts        — Numeric constants (HP, counts, timers) and string arrays (names)
│   ├── state.ts            — GameState singleton, name generators (nextAllyName/nextEnemyName)
│   │
│   ├── audio/
│   │   └── sound.ts        — Web Audio API: laser, explosion, hit sounds (procedural synthesis)
│   │
│   ├── scene/
│   │   ├── setup.ts        — THREE.Scene, Camera, Renderer, lights, handleResize
│   │   ├── starfield.ts    — createStarfield (2500 points), createNebulae (5 planes)
│   │   └── models.ts       — createFighter, createCapitalShip (5 subsystems), addHealthBar
│   │
│   ├── systems/
│   │   ├── player.ts       — playerPlane, playerRotation, updatePlayer, playerDeath
│   │   ├── ai.ts           — Fighter AI (chase/evade/orbit), updateAllies, updateEnemies
│   │   ├── weapons.ts      — createLaser, cleanupExcessBullets, shootFromFighter
│   │   ├── bullets.ts      — updateBullets, hitTestFighters, hitTestCapitalShips
│   │   ├── capital-ships.ts— spawnCapitalShips, updateCapitalShips, turret AI
│   │   ├── spawner.ts      — spawnAlly, spawnEnemy, updateRespawnQueue
│   │   └── explosions.ts   — createExplosion, updateExplosions, destroyedSubMat
│   │
│   ├── ui/
│   │   ├── hud.ts          — updateHUD, showMessage, hideMessage, ship status panel
│   │   ├── minimap.ts      — drawMinimap (canvas 2D)
│   │   ├── kill-feed.ts    — addKillFeedEntry, updateKillFeed, clearKillFeed
│   │   ├── indicators.ts   — Edge-of-screen arrows pointing to off-screen capital ships
│   │   └── markers.ts      — Diamond markers on enemies and subsystems in view
│   │
│   └── styles/
│       └── main.css        — All styles (~446 lines)
│
├── dist/                   — Build output (gitignored? check .gitignore)
└── public/                 — Static assets (empty, for future textures/models)
```

## Module Dependency Flow
```
main.ts
  ├── state.ts (singleton)
  ├── constants.ts
  ├── audio/sound.ts
  ├── scene/setup.ts → exports scene, camera, renderer
  ├── scene/starfield.ts → uses scene
  ├── scene/models.ts → uses constants
  ├── systems/player.ts → uses state, scene/setup, audio, weapons, explosions
  ├── systems/ai.ts → uses state, weapons, camera
  ├── systems/bullets.ts → uses state, player, weapons, explosions, audio, ui
  ├── systems/capital-ships.ts → uses state, models, weapons, explosions, player
  ├── systems/spawner.ts → uses state, models, player
  ├── systems/explosions.ts → uses state, scene, audio
  └── ui/*.ts → uses state, camera, constants
```

## Game Phases
1. **Phase 1**: Destroy all 3 capital ships (each has 5 subsystems with 200 HP each)
2. **Phase 2**: Destroy 100 enemy fighters total (counted across both phases)
