# Архитектура: Feature-Sliced Design

## Правила импортов (enforced by eslint-plugin-boundaries)

```
app      → pages, features, entities, shared
pages    → features, entities, shared
features → features, entities, shared
entities → entities, shared
shared   → shared (только)
```

**Исключение:** `pages/combat` может импортировать из `pages/exploration` (использует exploration-сцену как фон).

## Структура слоёв

### `src/app/` — оркестрация

- `index.ts` — точка входа, регистрация режимов, init
- `game-loop.ts` — RAF-цикл, вызов activeMode.update(dt)
- `mode-registry.ts` — реестр режимов (registerMode/switchMode)
- `mode-manager.ts` — переходы между режимами кампании (galaxy→station→combat→result)
- `input-listeners.ts` — глобальные обработчики (resize, pointer lock)
- `pause.ts` — пауза/возобновление/выход из боя
- `start.ts` — startQuickPlay, startCampaign

### `src/pages/` — игровые режимы (GameModeHandler: enter/update/exit)

- `combat/` — боевой режим (системы, HUD, win/lose)
- `exploration/` — исследование звёздной системы (3D-сцена, HUD, planet markers)
- `galaxy/` — галактическая карта (3D-сцена, контроллер камеры, маршруты)
- `station/` — станция (UI торговли/контрактов)
- `menu/` — главное меню
- `result/` — экран результата боя

### `src/features/` — переиспользуемые фичи

- `flight/` — система полёта (playerPlane, starfield, flight models, presets)
- `combat/` — боевые системы (AI, пули, урон, спавн, взрывы, common-updates)
- `campaign/` — кампания (state, data, balance, types)
- `hud/` — HUD-элементы (minimap, indicators, markers, kill-feed, touch-controls, hud-templates)
- `settings/` — экран настроек

### `src/entities/` — игровые сущности

- `fighter/` — создание истребителя (create-fighter, instances, gun-offsets)
- `capital-ship/` — создание капитального корабля (create, system)

### `src/shared/` — фундамент (без зависимостей на верхние слои)

- `core/` — абстракции BabylonJS (Vector3, Material, Mesh, Camera, фабрики)
- `engine/` — Engine/Scene/Camera синглтоны (бывший app/engine.ts)
- `audio/` — Web Audio API, звуки
- `config/` — параметры (combat, player, exploration, ai, ui, input)
- `events/` — pub/sub система
- `input/` — система ввода (actions, aim)
- `settings/` — пользовательские настройки (цвета, числа)
- `state/` — глобальный GameState singleton
- `refs/` — глобальные ссылки (app-refs: paused/playerModel, exploration-refs: planetMeshes)
- `materials/` — материалы (fighter-materials)
- `model-loader/` — загрузка и клонирование GLTF-моделей
- `lib/` — утилиты (math, dispose, dom-pool, screen)
- `types.ts` — все игровые типы/интерфейсы
- `constants.ts` — магические числа и строки

## Паттерны

### GameModeHandler (pages)

```typescript
interface GameModeHandler<TCtx> {
  enter(context?: TCtx): void;
  update(dt: number): void;
  exit(): void;
}
```

### GameSystem (features/entities)

```typescript
interface GameSystem {
  readonly id: string;
  init?(): void;
  update(dt: number): void;
  cleanup?(): void;
}
```

Режим (page) собирает массив систем и вызывает `initSystems/updateSystems/cleanupSystems`.

### Callback-паттерн для обратных вызовов (pages → app)

Вместо прямого импорта из app/ в pages/, callbacks передаются через context:

```typescript
interface CombatModeContext {
  combatConfig?: CombatConfig;
  onCombatEnd?: (victory: boolean, score: number) => void;
}
```

## ESLint конфигурация

Файл: `eslint.config.js` (flat config)

- `eslint-plugin-boundaries` — правило `boundaries/element-types` на уровне `error`
- `typescript-eslint` — парсер TypeScript, остальные TS-правила отключены (контролирует tsc)
- Исключение: `pages/combat → pages/exploration` разрешено через capture groups
