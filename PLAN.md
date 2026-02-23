# Рефакторинг файловой структуры по FSD для BabylonJS-игры

## Контекст

Проект — космическая 3D-игра на BabylonJS + TypeScript (~126 файлов, ~15K строк). Основные боли:

- `campaign/` смешивает UI, 3D-сцены, контролы, стейт и бизнес-логику в одной папке
- `systems/` содержит код, специфичный для конкретных режимов (combat-ui, exploration-hud)
- `shared/core/index.ts` реэкспортирует `scene/setup.ts` → циклическая зависимость
- Нет линтера для проверки направления импортов
- Сложно найти, где живёт логика конкретной фичи

---

## 1. Целевая структура

```
src/
├── app/                                    # СЛОЙ: Инициализация, оркестрация
│   ├── index.ts                            # Entry point (бывший src/index.ts)
│   ├── engine.ts                           # BabylonJS Engine + Scene singleton (бывший scene/setup.ts)
│   ├── game-loop.ts                        # RAF loop (бывший main/game-loop.ts)
│   ├── mode-registry.ts                    # Регистрация и переключение режимов (бывший modes/registry.ts)
│   ├── mode-manager.ts                     # Оркестрация переходов campaign (бывший campaign/mode-manager.ts)
│   ├── input-listeners.ts                  # Глобальные обработчики клавиш/мыши (бывший main/input.ts)
│   ├── pause.ts                            # Пауза/возобновление (бывший main/pause.ts)
│   └── start.ts                            # Запуск режимов (бывший main/start.ts)
│
├── pages/                                  # СЛОЙ: Игровые режимы (каждый — самодостаточный slice)
│   ├── combat/                             # Режим боя
│   │   ├── index.ts                        # Public API: combatMode handler
│   │   ├── systems.ts                      # Массив combatSystems (состав и порядок)
│   │   └── ui/                             # HUD боя
│   │       ├── combat-hud.ts               # (бывший systems/combat-ui.ts)
│   │       └── hud-templates.ts            # (бывший ui/hud-templates.ts)
│   │
│   ├── exploration/                        # Режим исследования
│   │   ├── index.ts                        # Public API: explorationMode handler
│   │   ├── systems.ts                      # explorationSystems
│   │   ├── scene/                          # 3D-сцена звёздной системы
│   │   │   ├── index.ts                    # (бывший campaign/exploration-scene/index.ts)
│   │   │   ├── hud.ts
│   │   │   ├── update.ts
│   │   │   ├── templates.ts
│   │   │   └── refs.ts
│   │   └── ui/
│   │       └── exploration-hud.ts          # (бывший systems/exploration-hud.ts)
│   │
│   ├── galaxy/                             # Режим карты галактики
│   │   ├── index.ts                        # Public API: galaxyMode handler
│   │   ├── scene/                          # 3D-сцена галактики
│   │   │   ├── index.ts                    # (бывший campaign/galaxy-scene/index.ts)
│   │   │   ├── background.ts
│   │   │   ├── brightness.ts
│   │   │   ├── labels.ts
│   │   │   ├── nearby.ts
│   │   │   ├── nebulae.ts
│   │   │   ├── routes.ts
│   │   │   ├── textures.ts
│   │   │   ├── update.ts
│   │   │   └── refs.ts
│   │   └── controls/                       # Управление камерой и взаимодействие
│   │       ├── index.ts                    # (бывший campaign/galaxy-controls/index.ts)
│   │       ├── camera.ts
│   │       ├── input.ts
│   │       ├── hud.ts
│   │       ├── travel.ts
│   │       └── templates.ts
│   │
│   ├── station/                            # Режим станции
│   │   ├── index.ts                        # Public API: stationMode handler
│   │   ├── station-ui.ts                   # (бывший campaign/station-ui.ts)
│   │   └── templates.ts                    # (бывший campaign/station-templates.ts)
│   │
│   ├── menu/                               # Главное меню
│   │   └── index.ts                        # Public API: menuMode handler
│   │
│   └── result/                             # Экран результата боя
│       ├── index.ts                        # Public API
│       ├── combat-result.ts                # (бывший campaign/combat-result.ts)
│       └── templates.ts                    # (бывший campaign/combat-result-templates.ts)
│
├── features/                               # СЛОЙ: Переиспользуемые фичи (cross-mode)
│   ├── campaign/                           # Кампания (прогрессия, контракты, persistence)
│   │   ├── index.ts                        # Public API
│   │   ├── state.ts                        # CampaignState singleton (бывший campaign/state.ts)
│   │   ├── balance.ts                      # Конфигурации сложности (бывший campaign/balance.ts)
│   │   ├── data.ts                         # Данные звёздных систем и контрактов
│   │   └── types.ts                        # CampaignState, Contract, StarSystem, CombatConfig
│   │
│   ├── flight/                             # Система полёта (используется в combat + exploration)
│   │   ├── index.ts                        # Public API
│   │   ├── player-system.ts                # (бывший systems/player.ts)
│   │   ├── flight-models.ts                # (бывший config/flight-models.ts)
│   │   └── starfield.ts                    # (бывший scene/starfield.ts)
│   │
│   ├── combat/                             # Боевые системы (используются в combat, потенциально exploration)
│   │   ├── index.ts                        # Public API
│   │   ├── ai-system.ts                    # (бывший systems/ai.ts)
│   │   ├── bullet-system.ts               # (бывший systems/bullets.ts)
│   │   ├── damage-system.ts               # (бывший systems/damage.ts)
│   │   ├── spawner-system.ts              # (бывший systems/spawner.ts)
│   │   ├── weapons.ts                      # (бывший systems/weapons.ts)
│   │   └── explosions.ts                   # (бывший systems/explosions.ts)
│   │
│   ├── hud/                                # Общие UI-компоненты для HUD
│   │   ├── index.ts
│   │   ├── hud.ts                          # (бывший ui/hud.ts)
│   │   ├── kill-feed.ts                    # (бывший ui/kill-feed.ts)
│   │   ├── minimap.ts                      # (бывший ui/minimap.ts)
│   │   ├── indicators.ts                   # (бывший ui/indicators.ts)
│   │   └── markers.ts                      # (бывший ui/markers.ts)
│   │
│   └── settings/                           # UI настроек
│       ├── index.ts
│       └── settings-ui.ts                  # (бывший ui/settings-ui.ts)
│
├── entities/                               # СЛОЙ: Игровые сущности (данные + создание)
│   ├── fighter/                            # Истребитель
│   │   ├── index.ts                        # Public API: createFighter, Fighter type
│   │   ├── create-fighter.ts               # (бывший scene/models/fighter/create-fighter.ts)
│   │   ├── instances.ts                    # (бывший scene/models/fighter/instances.ts)
│   │   ├── materials.ts                    # (бывший scene/models/fighter/materials.ts)
│   │   └── gun-offsets.ts                  # (бывший scene/models/fighter/gun-offsets.ts)
│   │
│   ├── capital-ship/                       # Крупный корабль
│   │   ├── index.ts                        # Public API: createCapitalShip, CapitalShip type
│   │   ├── create-capital-ship.ts          # (бывший scene/models/capital-ship/create-capital-ship.ts)
│   │   └── capital-ship-system.ts          # (бывший systems/capital-ships.ts)
│   │
│   └── bullet/                             # Лазерный снаряд
│       └── index.ts                        # LaserData type + createLaser helper
│
├── shared/                                 # СЛОЙ: Фундамент (ничего не знает о верхних слоях)
│   ├── core/                               # BabylonJS-абстракция (БЕЗ реэкспорта scene/setup!)
│   │   ├── index.ts                        # Vector3, Quaternion, Material, Mesh, factories...
│   │   ├── camera.ts
│   │   ├── color.ts
│   │   ├── dispose.ts
│   │   ├── factories.ts
│   │   ├── geometry.ts
│   │   ├── loader.ts
│   │   ├── material.ts
│   │   ├── math.ts
│   │   ├── mesh.ts
│   │   ├── points.ts
│   │   ├── quaternion.ts
│   │   ├── sprite.ts
│   │   ├── texture.ts
│   │   ├── transform-node.ts
│   │   ├── vector3.ts
│   │   ├── clock.ts
│   │   ├── line.ts
│   │   └── raycaster.ts
│   │
│   ├── audio/                              # Звуковая система
│   │   ├── index.ts
│   │   ├── context.ts
│   │   └── sounds/
│   │       ├── index.ts, laser.ts, explosion.ts, hit.ts
│   │       ├── engine-hum.ts, proximity-hum.ts
│   │
│   ├── config/                             # Конфигурация (константы, параметры)
│   │   ├── ai.ts
│   │   ├── combat.ts
│   │   ├── combat-session.ts
│   │   ├── player.ts
│   │   ├── exploration.ts
│   │   ├── input.ts
│   │   ├── ui.ts
│   │   └── weapons.ts
│   │
│   ├── events/                             # Pub/sub система событий
│   │   ├── index.ts
│   │   └── types.ts
│   │
│   ├── input/                              # Система ввода (actions, aim)
│   │   ├── index.ts
│   │   └── types.ts
│   │
│   ├── settings/                           # Пользовательские настройки (localStorage)
│   │   ├── index.ts
│   │   └── types.ts
│   │
│   ├── state/                              # Глобальный game state
│   │   └── index.ts
│   │
│   ├── types.ts                            # Глобальные типы (Fighter, LaserData, etc.)
│   ├── constants.ts                        # Имена, константы
│   │
│   ├── lib/                                # Утилиты
│   │   ├── math.ts
│   │   ├── dispose.ts
│   │   ├── dom-pool.ts
│   │   └── screen.ts
│   │
│   └── model-loader/                       # Загрузка 3D-моделей
│       ├── index.ts                        # (бывший scene/models/loader.ts)
│       └── shared.ts                       # (бывший scene/models/shared.ts)
│
└── styles/
    └── main.css
```

---

## 2. Маппинг: старое → новое

### app/

| Старое                     | Новое                      | Почему                                                                       |
| -------------------------- | -------------------------- | ---------------------------------------------------------------------------- |
| `src/index.ts`             | `app/index.ts`             | Entry point — это app-уровень                                                |
| `scene/setup.ts`           | `app/engine.ts`            | Engine/Scene/Renderer — глобальные синглтоны, инициализируются на уровне app |
| `main/game-loop.ts`        | `app/game-loop.ts`         | Оркестрация RAF-цикла                                                        |
| `modes/registry.ts`        | `app/mode-registry.ts`     | Регистрация режимов — app-level                                              |
| `campaign/mode-manager.ts` | `app/mode-manager.ts`      | Оркестрация переходов между режимами — app-level                             |
| `main/input.ts`            | `app/input-listeners.ts`   | Глобальные обработчики DOM-событий                                           |
| `main/pause.ts`            | `app/pause.ts`             | Глобальная пауза                                                             |
| `main/start.ts`            | `app/start.ts`             | Запуск quickplay/campaign                                                    |
| `main/refs.ts`             | `app/refs.ts` (если нужен) | Shared refs                                                                  |

### pages/

| Старое                                | Новое                                     | Почему                                    |
| ------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `modes/combat/index.ts`               | `pages/combat/index.ts`                   | Режим боя — это "страница"                |
| `modes/exploration/index.ts`          | `pages/exploration/index.ts`              | Режим исследования                        |
| `modes/galaxy/index.ts`               | `pages/galaxy/index.ts`                   | Карта галактики                           |
| `modes/station/index.ts`              | `pages/station/index.ts`                  | Станция                                   |
| `modes/menu/index.ts`                 | `pages/menu/index.ts`                     | Главное меню                              |
| `campaign/galaxy-scene/*`             | `pages/galaxy/scene/*`                    | 3D-сцена привязана к конкретному режиму   |
| `campaign/galaxy-controls/*`          | `pages/galaxy/controls/*`                 | Управление привязано к конкретному режиму |
| `campaign/exploration-scene/*`        | `pages/exploration/scene/*`               | Сцена привязана к режиму                  |
| `campaign/station-ui.ts`              | `pages/station/station-ui.ts`             | UI станции                                |
| `campaign/station-templates.ts`       | `pages/station/templates.ts`              | Шаблоны станции                           |
| `campaign/combat-result.ts`           | `pages/result/combat-result.ts`           | Экран результата                          |
| `campaign/combat-result-templates.ts` | `pages/result/templates.ts`               | Шаблоны результата                        |
| `systems/combat-ui.ts`                | `pages/combat/ui/combat-hud.ts`           | HUD специфичен для режима боя             |
| `systems/exploration-hud.ts`          | `pages/exploration/ui/exploration-hud.ts` | HUD специфичен для exploration            |
| `ui/hud-templates.ts`                 | `pages/combat/ui/hud-templates.ts`        | HTML-шаблоны для combat HUD               |
| `ui/planet-markers.ts`                | `pages/exploration/ui/planet-markers.ts`  | Маркеры планет только в exploration       |

### features/

| Старое                      | Новое                               | Почему                                    |
| --------------------------- | ----------------------------------- | ----------------------------------------- |
| `campaign/state.ts`         | `features/campaign/state.ts`        | Кампания — cross-mode фича                |
| `campaign/balance.ts`       | `features/campaign/balance.ts`      | Баланс кампании                           |
| `campaign/data.ts`          | `features/campaign/data.ts`         | Данные кампании                           |
| `campaign/types.ts`         | `features/campaign/types.ts`        | Типы кампании                             |
| `systems/player.ts`         | `features/flight/player-system.ts`  | Полёт используется в combat + exploration |
| `config/flight-models.ts`   | `features/flight/flight-models.ts`  | Модели полёта                             |
| `scene/starfield.ts`        | `features/flight/starfield.ts`      | Звёздное поле — часть полёта              |
| `systems/ai.ts`             | `features/combat/ai-system.ts`      | Боевая система                            |
| `systems/bullets.ts`        | `features/combat/bullet-system.ts`  | Боевая система                            |
| `systems/damage.ts`         | `features/combat/damage-system.ts`  | Боевая система                            |
| `systems/spawner.ts`        | `features/combat/spawner-system.ts` | Боевая система                            |
| `systems/weapons.ts`        | `features/combat/weapons.ts`        | Боевая система                            |
| `systems/explosions.ts`     | `features/combat/explosions.ts`     | Боевая система                            |
| `ui/hud.ts`                 | `features/hud/hud.ts`               | HUD используется в нескольких режимах     |
| `ui/kill-feed.ts`           | `features/hud/kill-feed.ts`         | Переиспользуемый UI                       |
| `ui/minimap.ts`             | `features/hud/minimap.ts`           | Переиспользуемый UI                       |
| `ui/indicators.ts`          | `features/hud/indicators.ts`        | Переиспользуемый UI                       |
| `ui/markers.ts`             | `features/hud/markers.ts`           | Переиспользуемый UI                       |
| `ui/settings-ui.ts`         | `features/settings/settings-ui.ts`  | Переиспользуемый UI                       |
| `ui/touch-controls.ts`      | `features/hud/touch-controls.ts`    | Переиспользуемый UI                       |
| `systems/presets.ts`        | `features/flight/presets.ts`        | Составление систем                        |
| `systems/common-updates.ts` | `features/combat/common-updates.ts` | Общие обновления                          |

### entities/

| Старое                        | Новое                                          | Почему                         |
| ----------------------------- | ---------------------------------------------- | ------------------------------ |
| `scene/models/fighter/*`      | `entities/fighter/*`                           | Истребитель — игровая сущность |
| `scene/models/capital-ship/*` | `entities/capital-ship/*`                      | Крупный корабль — сущность     |
| `systems/capital-ships.ts`    | `entities/capital-ship/capital-ship-system.ts` | Логика сущности                |

### shared/

| Старое                   | Новое                                             | Почему                                    |
| ------------------------ | ------------------------------------------------- | ----------------------------------------- |
| `shared/core/*`          | `shared/core/*`                                   | Остаётся, но убрать реэкспорт scene/setup |
| `shared/events/*`        | `shared/events/*`                                 | Остаётся                                  |
| `shared/input/*`         | `shared/input/*`                                  | Остаётся                                  |
| `shared/settings/*`      | `shared/settings/*`                               | Остаётся                                  |
| `shared/state/*`         | `shared/state/*`                                  | Остаётся                                  |
| `shared/types.ts`        | `shared/types.ts`                                 | Остаётся                                  |
| `shared/constants.ts`    | `shared/constants.ts`                             | Остаётся                                  |
| `shared/utils/*`         | `shared/lib/*`                                    | Переименование для FSD-конвенции          |
| `audio/*`                | `shared/audio/*`                                  | Аудио — shared-инфраструктура             |
| `config/*`               | `shared/config/*`                                 | Конфигурация — shared                     |
| `scene/models/loader.ts` | `shared/model-loader/index.ts`                    | Загрузчик — shared-утилита                |
| `scene/models/shared.ts` | `shared/model-loader/shared.ts`                   | Утилиты моделей                           |
| `modes/types.ts`         | `shared/types/modes.ts` или в `shared/types.ts`   | Интерфейс GameModeHandler — shared        |
| `systems/types.ts`       | `shared/types/systems.ts` или в `shared/types.ts` | Интерфейс GameSystem — shared             |

---

## 3. Правила слоёв для BabylonJS-игры

### `shared/` — Фундамент

**Что здесь:** Всё, что НЕ знает о конкретных игровых режимах и фичах.

- `core/` — обёртка BabylonJS: Vector3, Mesh, Material, factories. **НЕ содержит** конкретных сцен или объектов
- `audio/` — Web Audio API, звуковые эффекты
- `config/` — числовые параметры (скорости, размеры, урон)
- `events/` — pub/sub шина
- `input/` — абстракция ввода (actions, aim)
- `state/` — глобальный синглтон состояния
- `settings/` — пользовательские настройки
- `types.ts` — базовые типы данных (Fighter, LaserData, GameSystem, GameModeHandler)
- `lib/` — чистые утилиты (math, dispose, dom-pool)
- `model-loader/` — загрузка GLTF-моделей

**Правило:** shared/ импортирует ТОЛЬКО из node_modules. Никаких импортов из entities/, features/, pages/, app/.

### `entities/` — Игровые сущности

**Что такое entity в 3D-игре:** Это конкретный игровой объект с его данными, типом и фабрикой создания.

- `fighter/` — тип Fighter + createFighter() + материалы + меш-инстансы
- `capital-ship/` — тип CapitalShip + createCapitalShip() + система обновления
- `bullet/` — тип LaserData + createLaser()

**Правило:** entities/ импортирует только из shared/. Содержит **данные и создание**, но НЕ бизнес-логику (кого и когда спавнить — это features/).

### `features/` — Переиспользуемые фичи

**Что такое feature:** Законченная бизнес-функциональность, используемая в 1+ режимах.

- `flight/` — управление полётом игрока (используется в combat + exploration)
- `combat/` — боевые системы: AI, пули, урон, спавн (потенциально в нескольких режимах)
- `campaign/` — прогрессия: деньги, контракты, persistence
- `hud/` — общие UI-компоненты (minimap, kill-feed, indicators)
- `settings/` — UI настроек

**Widget vs Feature:** В FSD widget = составной UI из нескольких entities. В игровом контексте widget нам не нужен — используем `features/hud/` для составных UI-компонентов.

**Правило:** features/ импортирует из shared/ и entities/. НЕ импортирует из pages/ и app/.

### `pages/` — Игровые режимы (slices)

**Что такое page:** Самодостаточный игровой режим с его обработчиком enter/exit/update, собственной 3D-сценой и UI.

- Каждый режим = папка со своим `index.ts` (public API)
- Содержит `scene/` для режиме-специфичных 3D-объектов
- Содержит `ui/` для режиме-специфичного HUD
- Составляет systems из features/ в нужном порядке

**Правило:** pages/ импортирует из shared/, entities/, features/. НЕ импортирует из app/ и из других pages/.

### `app/` — Оркестрация

**Что здесь:** Всё, что связывает приложение воедино.

- Engine + Scene (BabylonJS синглтоны)
- Game loop (RAF)
- Mode registry + mode-manager (оркестрация переходов)
- Глобальные input listeners
- Entry point

**Где живут BabylonJS Engine, Scene, Assets?**

- `Engine` и `Scene` — в `app/engine.ts` (создаются один раз при старте)
- `Camera` — в `app/engine.ts` (основная) или в pages/ (если камера меняется для режима)
- `Assets` (модели) — загрузка в `shared/model-loader/`, конкретные модели в `entities/`
- `Materials, Meshes` — в `entities/` для конкретных объектов, в `shared/core/` для абстракций

**Правило:** app/ может импортировать из ВСЕХ слоёв. Это единственный слой, который знает обо всём.

---

## 4. Публичное API: пример для combat mode

```typescript
// src/pages/combat/index.ts
import { createFighter } from '@/entities/fighter';
import { aiSystem, damageSystem, spawnerSystem, weaponSystems } from '@/features/combat';
import { flightCoreSystems } from '@/features/flight';
import { initAudio, resumeAudio, startEngineHum, stopEngineHum } from '@/shared/audio';
import { applyCombatConfig } from '@/shared/config/combat-session';
import { resetNameCounters, state } from '@/shared/state';
import type { CombatModeContext, GameModeHandler } from '@/shared/types';
import { cleanupSystems, initSystems, updateSystems } from '@/shared/types';

import { combatHudSystem, damageEffectSystem, proximityAudioSystem } from './ui/combat-hud';

// Состав и порядок систем — приватная деталь этого режима
const combatSystems = [
  ...flightCoreSystems,
  ...weaponSystems,
  aiSystem,
  spawnerSystem,
  damageSystem,
  proximityAudioSystem,
  damageEffectSystem,
  combatHudSystem,
];

export const combatMode: GameModeHandler<CombatModeContext> = {
  enter(context) {
    if (context?.combatConfig) applyCombatConfig(context.combatConfig);
    initAudio();
    resumeAudio();
    startEngineHum();
    resetNameCounters();
    initSystems(combatSystems);
    // ... setup combat state
  },

  update(dt) {
    updateSystems(combatSystems, dt);
  },

  exit() {
    stopEngineHum();
    cleanupSystems(combatSystems);
  },
};
```

---

## 5. План миграции по шагам

### Принцип: снизу вверх, от shared к app

Каждый шаг — отдельный PR/коммит. Проект компилируется и работает после каждого шага.

---

### Шаг 0: Настройка инфраструктуры

**Что делаем:**

1. Установить `eslint` + `@feature-sliced/eslint-config` (или `eslint-plugin-boundaries`)
2. Настроить правила импортов (пока в warn-режиме)
3. Обновить `tsconfig.json` paths если нужно (алиас `@/*` уже настроен, достаточно)

**Проверка:** `npm run typecheck` проходит, eslint запускается.

---

### Шаг 1: Разделить shared/core и scene/setup (убрать циклическую зависимость)

**Что делаем:**

1. Убрать из `shared/core/index.ts` реэкспорт `camera`, `renderer`, `scene`, `handleResize` из `scene/setup.ts`
2. Все файлы, которые импортировали `camera`/`scene`/`renderer` из `@/shared/core`, исправить на прямой импорт из `@/scene/setup` (временно)
3. `shared/core/` становится чистым — только абстракции BabylonJS

**Проверка:** `npm run typecheck`, `npm run dev` — игра работает.

**Ключевые файлы для изменения импортов:**

- `systems/player.ts` — `camera`
- `systems/combat-ui.ts` — `camera`
- `ui/minimap.ts` — `camera`
- `ui/indicators.ts` — `camera`
- `campaign/galaxy-controls/camera.ts` — `camera`
- И все другие файлы, импортирующие camera/scene/renderer из shared/core

---

### Шаг 2: Переместить shared/utils → shared/lib

**Что делаем:**

1. `mv src/shared/utils src/shared/lib`
2. Обновить все импорты `@/shared/utils/` → `@/shared/lib/`

**Проверка:** `npm run typecheck`

---

### Шаг 3: Переместить audio/ и config/ в shared/

**Что делаем:**

1. `mv src/audio src/shared/audio`
2. `mv src/config src/shared/config`
3. Обновить импорты: `@/audio/` → `@/shared/audio/`, `@/config/` → `@/shared/config/`

**Проверка:** `npm run typecheck`, `npm run dev`

---

### Шаг 4: Перенести types в shared

**Что делаем:**

1. Перенести `modes/types.ts` и `systems/types.ts` в `shared/types.ts` (объединить с существующим)
2. Обновить импорты

**Проверка:** `npm run typecheck`

---

### Шаг 5: Создать entities/

**Что делаем:**

1. `mkdir -p src/entities/fighter src/entities/capital-ship src/entities/bullet`
2. Переместить `scene/models/fighter/*` → `entities/fighter/`
3. Переместить `scene/models/capital-ship/*` → `entities/capital-ship/`
4. Переместить `scene/models/loader.ts`, `scene/models/shared.ts` → `shared/model-loader/`
5. Создать `entities/fighter/index.ts`, `entities/capital-ship/index.ts` с public API
6. Перенести `systems/capital-ships.ts` → `entities/capital-ship/capital-ship-system.ts`
7. Обновить импорты

**Проверка:** `npm run typecheck`, `npm run dev`

---

### Шаг 6: Создать features/flight

**Что делаем:**

1. `mkdir -p src/features/flight`
2. Переместить `systems/player.ts` → `features/flight/player-system.ts`
3. Переместить `config/flight-models.ts` → `features/flight/flight-models.ts` (уже в shared/config после шага 3, но flight-models — это feature-level)
4. Переместить `scene/starfield.ts` → `features/flight/starfield.ts`
5. Переместить `systems/presets.ts` → `features/flight/presets.ts`
6. Создать `features/flight/index.ts`
7. Обновить импорты

**Проверка:** `npm run typecheck`, `npm run dev`

---

### Шаг 7: Создать features/combat

**Что делаем:**

1. `mkdir -p src/features/combat`
2. Переместить: `systems/ai.ts`, `systems/bullets.ts`, `systems/damage.ts`, `systems/spawner.ts`, `systems/weapons.ts`, `systems/explosions.ts`, `systems/common-updates.ts`
3. Создать `features/combat/index.ts`
4. Обновить импорты

**Проверка:** `npm run typecheck`, `npm run dev`

---

### Шаг 8: Создать features/campaign

**Что делаем:**

1. `mkdir -p src/features/campaign`
2. Переместить: `campaign/state.ts`, `campaign/balance.ts`, `campaign/data.ts`, `campaign/types.ts`
3. Создать `features/campaign/index.ts`
4. Обновить импорты

**Проверка:** `npm run typecheck`, `npm run dev`

---

### Шаг 9: Создать features/hud и features/settings

**Что делаем:**

1. `mkdir -p src/features/hud src/features/settings`
2. Переместить: `ui/hud.ts`, `ui/kill-feed.ts`, `ui/minimap.ts`, `ui/indicators.ts`, `ui/markers.ts`, `ui/touch-controls.ts` → `features/hud/`
3. Переместить: `ui/settings-ui.ts` → `features/settings/`
4. Обновить импорты

**Проверка:** `npm run typecheck`, `npm run dev`

---

### Шаг 10: Создать pages/

**Что делаем:**

1. Создать папки для каждого режима
2. Переместить `modes/combat/index.ts` → `pages/combat/index.ts`
3. Переместить `systems/combat-ui.ts` → `pages/combat/ui/combat-hud.ts`
4. Переместить `ui/hud-templates.ts` → `pages/combat/ui/hud-templates.ts`
5. Переместить `modes/exploration/index.ts` → `pages/exploration/index.ts`
6. Переместить `campaign/exploration-scene/*` → `pages/exploration/scene/`
7. Переместить `systems/exploration-hud.ts` → `pages/exploration/ui/`
8. Переместить `modes/galaxy/index.ts` → `pages/galaxy/index.ts`
9. Переместить `campaign/galaxy-scene/*` → `pages/galaxy/scene/`
10. Переместить `campaign/galaxy-controls/*` → `pages/galaxy/controls/`
11. Переместить `modes/station/index.ts` → `pages/station/index.ts`
12. Переместить `campaign/station-ui.ts`, `campaign/station-templates.ts` → `pages/station/`
13. Переместить `modes/menu/index.ts` → `pages/menu/index.ts`
14. Создать `pages/result/` с `combat-result.ts` и `templates.ts`
15. Обновить ВСЕ импорты

**Проверка:** `npm run typecheck`, `npm run dev` — каждый режим работает.

---

### Шаг 11: Создать app/

**Что делаем:**

1. `mkdir src/app`
2. Переместить `scene/setup.ts` → `app/engine.ts`
3. Переместить `main/game-loop.ts` → `app/game-loop.ts`
4. Переместить `modes/registry.ts` → `app/mode-registry.ts`
5. Переместить `campaign/mode-manager.ts` → `app/mode-manager.ts`
6. Переместить `main/input.ts` → `app/input-listeners.ts`
7. Переместить `main/pause.ts` → `app/pause.ts`
8. Переместить `main/start.ts` → `app/start.ts`
9. Обновить `src/index.ts` → `app/index.ts` (и `index.html` точку входа)
10. Обновить ВСЕ импорты (camera, scene, renderer теперь из `@/app/engine`)

**Проверка:** `npm run typecheck`, `npm run dev`, полный прогон всех режимов.

---

### Шаг 12: Удалить старые пустые папки, включить eslint rules в error-режиме

**Что делаем:**

1. Удалить пустые `modes/`, `campaign/`, `systems/`, `scene/`, `ui/`, `main/`
2. Переключить eslint-правила импортов из warn → error
3. Убрать старый `shared/index.ts` если он стал не нужен

**Проверка:** `npm run typecheck`, `npm run build`, `eslint .`

---

## 6. Риски

### Высокий риск

1. **Циклическая зависимость shared/core ↔ scene/setup**
   - `shared/core/index.ts:111` реэкспортирует `camera`, `scene`, `renderer` из `@/scene/setup`
   - `scene/setup.ts:6-11` импортирует `AmbientLight, DirectionalLight, HemisphereLight, PerspectiveCamera, setFactoryScene` из `@/shared/core`
   - Это реальный цикл: shared/core → scene/setup → shared/core
   - **Решение:** Шаг 1 — убрать строку 111 из `shared/core/index.ts`. Camera/scene/renderer переезжают в `app/engine.ts`, shared/core становится чистым. Все 20+ файлов, импортирующие camera из `@/shared/core`, переписываются на `@/app/engine`

2. **Глобальный state singleton**
   - `state` используется ВЕЗДЕ — systems, modes, UI, input
   - Перемещать его опасно — может сломать 50+ файлов одновременно
   - **Решение:** state остаётся в `shared/state/` и НЕ переносится. Это правильно по FSD — state доступен всем слоям

3. **combat → mode-manager — кольцевая зависимость**
   - `modes/combat/index.ts:12-13` импортирует `onCombatEnd` из `campaign/mode-manager` и `isCampaignActive` из `campaign/state`
   - `campaign/mode-manager.ts:2` импортирует `switchMode` из `modes/registry`
   - Цикл: modes/combat → campaign/mode-manager → modes/registry → modes/combat
   - **Решение:** Уже частично решено — mode-manager передаёт коллбэки через контекст (`onStation`, `onCombat`). Нужно добавить `onCombatEnd` в `CombatModeContext` как коллбэк, либо эмитить событие `'combat:end'` через `shared/events/`. mode-manager переезжает в `app/` и подписывается на это событие

### Средний риск

4. **Много файлов импортируют camera/scene напрямую**
   - После переезда в `app/engine.ts` нужно обновить 20+ файлов
   - **Решение:** Делаем за один шаг (шаг 11), используем search & replace. Альтернативно — оставить реэкспорт-прокси на время миграции

5. **systems/player.ts экспортирует playerPlane — глобальный объект**
   - Используется в UI (minimap, indicators), в камере, в combat-mode
   - **Решение:** playerPlane остаётся в `features/flight/` — это нормально, фича экспортирует свои данные

6. **features/combat/bullet-system.ts** зависит от entities/fighter (hitTest)
   - Потенциально features/ → entities/ — это нормальное направление импорта (сверху вниз)
   - Но если bullet зависит от capital-ship тоже, это ок

### Низкий риск

7. **Именование файлов** — при mv могут потеряться git-blame
   - **Решение:** Использовать `git mv` для сохранения истории

8. **Path aliases** — `@/*` уже настроен, менять не нужно

---

## 7. ESLint: правила импортов между слоями

### Установка

```bash
npm i -D eslint @typescript-eslint/eslint-plugin eslint-plugin-boundaries
```

### Конфигурация eslint (eslint.config.js)

```javascript
import boundaries from 'eslint-plugin-boundaries';

export default [
  {
    plugins: { boundaries },
    settings: {
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app/*' },
        { type: 'pages', pattern: 'src/pages/*' },
        { type: 'features', pattern: 'src/features/*' },
        { type: 'entities', pattern: 'src/entities/*' },
        { type: 'shared', pattern: 'src/shared/*' },
      ],
    },
    rules: {
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            // app может импортировать всё
            { from: 'app', allow: ['pages', 'features', 'entities', 'shared'] },
            // pages → features, entities, shared
            { from: 'pages', allow: ['features', 'entities', 'shared'] },
            // features → entities, shared
            { from: 'features', allow: ['entities', 'shared'] },
            // entities → shared
            { from: 'entities', allow: ['shared'] },
            // shared → ничего (только node_modules)
            { from: 'shared', allow: [] },
          ],
        },
      ],
      // Запрет cross-imports между слайсами одного слоя
      'boundaries/entry-point': [
        'error',
        {
          default: 'disallow',
          rules: [
            // Импортировать из слайса можно только через его index.ts
            { target: ['pages', 'features', 'entities'], allow: 'index.ts' },
          ],
        },
      ],
    },
  },
];
```

### Дополнительное правило: запрет cross-slice импортов

Одна page не может импортировать из другой page. Это обеспечивается через `boundaries/element-types` — pages разрешён импорт из features/entities/shared, но НЕ из pages.

---

## Верификация

После каждого шага:

1. `npm run typecheck` — TypeScript компилируется
2. `npm run dev` — игра запускается в браузере
3. Проверить каждый режим: меню → quickplay → бой → результат → станция → галактика → exploration
4. `npx eslint src/` — проверить, что правила импортов не нарушены (после шага 0)
5. `npm run build` — production-сборка работает (финальная проверка)
