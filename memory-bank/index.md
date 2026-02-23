# Space Combat — Memory Bank

## Архитектура: Feature-Sliced Design (FSD)

Проект использует FSD с 5 слоями. Подробности в [architecture.md](architecture.md).

## Ключевые файлы

- **Точка входа:** `src/app/index.ts` → `index.html` (`/src/app/index.ts`)
- **Типы:** `src/shared/types.ts` — все игровые интерфейсы (Fighter, GameState, CombatConfig, FlightModelId, GameModeHandler, GameSystem)
- **Engine синглтоны:** `src/shared/engine/index.ts` — camera, scene, renderer, engine, canvas
- **Конфиг:** `src/shared/config/` — combat, player, exploration, ai, ui параметры

## Инструменты

- **Сборка:** Vite 7 + TypeScript 5.9 (moduleResolution: bundler)
- **Alias:** `@/*` → `src/*` (tsconfig paths)
- **Линтинг:** ESLint + eslint-plugin-boundaries (FSD-правила), Prettier + sort-imports
- **Pre-commit:** Husky + lint-staged (prettier → eslint → tsc)
- **Скрипты:** `npm run dev/build/typecheck/lint/lint:fix/format`
