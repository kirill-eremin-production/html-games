# FPS-режим в ангаре корабля-носителя

## Контекст

Текущий боевой режим (`combat`) сразу спавнит игрока в космосе на истребителе. Нужно добавить фазу "ангар" — полноценный FPS-режим от первого лица внутри корабля-носителя команды игрока. Игрок и ИИ-боты появляются в ангаре, бегут к истребителям, садятся и вылетают в бой. При гибели — возвращаются в ангар и повторяют цикл.

**Масштаб:** бои до **128 vs 128**. Ангар вмещает до 128 истребителей. Количество слотов берётся из `CombatConfig.allies`.

## Общая архитектура изменений

Боевой режим получает **две фазы внутри себя**: `hangar` и `flight`.
Также создаём отдельный GameMode — в будущем планируется создать также полностью самостоятельный FPS режим.

### Архитектурное решение: FPS как отдельный GameMode

FPS-логика оформляется как **самостоятельный `GameModeHandler`** (`fpsMode`), который:
- Может быть зарегистрирован в `mode-registry` как `'fps'`
- Имеет полный цикл `enter()` / `update()` / `exit()`
- Самодостаточен — содержит FPS-контроллер, ангар, ИИ-пилотов, HUD
- В будущем может использоваться независимо (отдельный FPS-режим без полёта)

В боевом режиме (`combat`) fpsMode используется как **делегат фазы ангара**:

```
Combat Mode enter()
  → state.combatPhase = 'hangar'
  → fpsMode.enter()  // делегируем FPS-режиму

Combat Mode update(dt)
  world.update(dt)                  // ECS ВСЕГДА работает (ИИ летают, снаряды, турели)
  if combatPhase === 'hangar':
    → fpsMode.update(dt)            // + FPS-контроллер, ангарные боты, HUD ангара
    → если игрок сел в истребитель → switchToFlight()
  // в flight: player-system уже внутри world.update
  // при гибели → switchToHangar() → fpsMode.enter()
```

### ВАЖНО: `combatPhase` — это фаза ИГРОКА, а не всего мира

`combatPhase` определяет что видит и делает **игрок** (камера, ввод, HUD):
- `'hangar'` → камера от 1-го лица, FPS-контроллер, pointer lock, fpsKeyMap
- `'flight'` → камера за истребителем, полётная физика, flightKeyMap

**ECS-мир (`world.update`) работает ВСЕГДА**, независимо от фазы. ИИ-боты в космосе
летают, стреляют и погибают даже когда игрок находится в ангаре. `player-system` внутри
`world` проверяет `combatPhase` и пропускает обновление, если игрок в ангаре.

### ВАЖНО: Физический вылет из ангара (не телепорт!)

Истребители **НЕ респавнятся в космосе**. И игрок, и ИИ-боты буквально **вылетают
из ангара через ворота** в космос. Цикл:

1. Пилот (бот/игрок) спавнится в ангаре как FPS-персонаж
2. Бежит к истребителю, садится в него
3. Истребитель запускает двигатели, разгоняется по ангару
4. Вылетает через ворота наружу → становится полноценной ECS-сущностью в космосе
5. При гибели → пилот снова появляется в ангаре (п.1)

Для ИИ-ботов весь цикл происходит внутри `hangar-ai`: бот бежит → садится → вылетает.
Вылет = создание ECS-истребителя с начальной позицией у ворот ангара + вектором скорости наружу.

**Файловая структура FPS-режима:**
```
src/pages/fps/                    ← отдельная "страница" (FSD layer: pages)
  index.ts                        ← GameModeHandler: fpsMode
  fps-controller.ts               ← FPS-контроллер (WASD + мышь + коллизии)
  hangar-scene.ts                 ← создание/управление 3D-ангаром
  hangar-ai.ts                    ← ИИ-пилоты в ангаре
  hangar-hud.ts                   ← HUD ангара

src/entities/objects/hangar/      ← фабрика 3D-ангара (FSD layer: entities)
  create-hangar.ts
  index.ts
```

Это позволяет:
1. Использовать `fpsMode` внутри combat mode как фазу
2. В будущем зарегистрировать `registerMode('fps', fpsMode)` для самостоятельного режима
3. Соблюсти FSD — pages зависят от features/entities/shared, но не друг от друга

## Этапы реализации

### ~~Этап 1: Новые типы и состояние~~ ✅ ГОТОВО

**Файл:** `src/shared/types.ts` ✅

- ✅ Добавлен `CombatPhase = 'hangar' | 'flight'` тип (после `FlightModelId`)
- ✅ Добавлено в `GameState` поле `combatPhase: CombatPhase`
- ✅ Добавлен `FPSModeContext` интерфейс с `onBoarded` callback
- ✅ Добавлен `FPSModeContext` в union `ModeContext`

**Файл:** `src/features/campaign/types.ts` ✅

- ✅ Добавлен `'fps'` в `GameMode` union type

**Файл:** `src/shared/state/index.ts` ✅

- ✅ Добавлено `combatPhase: 'hangar'` в `createInitialState()` (по умолчанию ангар, не полёт)

**Файл:** `src/shared/input/types.ts` ✅

- ✅ `Action` разбит на `FlightAction | FPSAction`
- ✅ Добавлены FPS-действия: `'moveForward' | 'moveBack' | 'strafeLeft' | 'strafeRight' | 'interact' | 'jump'`

**Файл:** `src/shared/input/index.ts` ✅

- ✅ Объект `actions` расширен FPS-действиями (moveForward, moveBack, strafeLeft, strafeRight, interact, jump)
- ✅ Экспортируются `FlightAction`, `FPSAction`

**Файл:** `src/shared/config/input.ts` ✅

- ✅ Создан `flightKeyMap` (бывший `defaultKeyMap`)
- ✅ Создан `fpsKeyMap` (KeyW→moveForward, KeyS→moveBack, KeyA→strafeLeft, KeyD→strafeRight, KeyE→interact, Space→jump)
- ✅ `defaultKeyMap` = `flightKeyMap` (по умолчанию полётный, переключение через `setKeyMap()` при смене фазы)

**`npm run typecheck` пройден** ✅

### Этап 2: Процедурный ангар (3D-сцена)

**Масштаб: до 128 истребителей** (бои 128 vs 128)

**Новый файл:** `src/entities/objects/hangar/create-hangar.ts`

Фабрика процедурного ангара из примитивов BabylonJS:

- `createHangarScene(slotCount: number)` → параметризованный ангар
- `slotCount` берётся из `CombatConfig.allies` (до 128)

**Структура ангара — масштабируемые ряды:**

Ангар — длинный зал с рядами истребителей, как палуба авианосца:
- Центральная **взлётная полоса** вдоль всего ангара (широкий коридор)
- По бокам — **ряды стоек** с истребителями (по 2 ряда с каждой стороны)
- Каждый ряд вмещает до 16 истребителей в линию
- Итого 4 ряда × 16 = 64 стойки на секцию
- При >64 — генерируется 2 секции (соединённые коридором)
- При >128 — 3 секции (масштабируется автоматически)
- В конце — **ворота в космос** (большой открытый проём)
- В начале — **зона спавна пилотов** (казарма/раздевалка)

```
  [Зона спавна]
       |
  ┌────┴────┐
  │ ■ ■ ■ ■ │  ← ряд стоек (истребители)
  │         │  ← взлётная полоса
  │ ■ ■ ■ ■ │  ← ряд стоек
  │         │
  │ ■ ■ ■ ■ │
  │         │
  │ ■ ■ ■ ■ │
  └────┬────┘
       |
  [Ворота → космос]
```

- Размеры масштабируются: `hallLength = slotCount / 4 * slotSpacing`
- Пол, потолок, стены — PlaneGeometry
- Освещение — PointLight через каждые N метров вдоль полосы
- Возвращает: `{ root: TransformNode, spawnPoint: Vector3, fighterSlots: FighterSlot[], gatePosition: Vector3, gateDirection: Vector3, colliders: AABB[] }`

**Тип** `FighterSlot`:

```ts
interface FighterSlot {
  position: Vector3;      // где стоит истребитель
  interactPoint: Vector3; // куда подойти чтобы сесть (перед истребителем)
  occupied: boolean;      // занят ли (пилот сел)
  fighterNode: TransformNode | null; // 3D-модель истребителя на стойке
}
```

**Оптимизация для 128 слотов:**
- Истребители далеко от игрока не рендерятся (frustum culling BabylonJS делает автоматически)
- Стены/пол — минимум мешей, по одному большому PlaneGeometry на секцию
- ИИ-пилоты далеко от камеры — без визуала (или упрощённый LOD)

**Коллайдеры:**

- Простые AABB (axis-aligned bounding box) для стен, пола, потолка
- Массив `{ min: Vector3, max: Vector3 }[]`
- Проверка коллизий — AABB vs point+radius (сфера персонажа)
- Коллайдеры **не на каждый истребитель** — только стены, пол, потолок (истребители можно обходить, а не врезаться)

### Этап 3: FPS-контроллер (система от первого лица)

**Новый файл:** `src/pages/fps/fps-controller.ts`

FPS-контроллер:

- Управляет позицией и вращением камеры от первого лица
- WASD — перемещение, мышь — обзор (через pointer lock)
- Гравитация (простая: если позиция выше пола → падаем)
- Прыжок (Space)
- Коллизии со стенами ангара (AABB проверки)
- Скорость ходьбы/бега

```ts
interface FPSState {
  position: Vector3;
  yaw: number;
  pitch: number;
  velocityY: number; // для гравитации/прыжков
  grounded: boolean;
}
```

- `updateFPSController(dt, state, colliders, camera)` — основная логика
- Pointer Lock: при входе в hangar-фазу — запрашивается pointer lock, при выходе — снимается

### Этап 4: ИИ-пилоты в ангаре

**Новый файл:** `src/pages/fps/hangar-ai.ts`

ECS-компонент и система для ИИ-пилотов в ангаре:

- `HangarPilotComponent` — данные пилота (цель: fighterSlot, состояние: 'spawning' | 'running' | 'boarding' | 'launching' | 'flying_out')
- Визуал: простая капсула/цилиндр с цветом команды
- Навигация: движение к ближайшему свободному FighterSlot (простой pathfinding — прямая линия с обходом стен)
- При достижении слота: анимация "посадки" (таймер 1-2 сек), затем **физический вылет**

**Физический вылет из ангара (не телепорт!):**
- После посадки бот НЕ телепортируется в космос
- Истребитель запускает двигатели, разгоняется по ангару к воротам
- Вылетает через ворота наружу
- В момент пересечения ворот: удаляется визуал из ангара, создаётся ECS-сущность в космосе
- Начальная позиция ECS-истребителя = позиция ворот ангара (в мировых координатах)
- Начальная скорость = вектор наружу от ворот

```ts
export function updateHangarAI(dt): void {
  // Для каждого пилота в ангаре:
  // 1. 'spawning'    → появление, пауза
  // 2. 'running'     → бежит к interactPoint ближайшего свободного слота
  // 3. 'boarding'    → таймер посадки (1-2 сек)
  // 4. 'launching'   → истребитель запускает двигатели
  // 5. 'flying_out'  → разгон к воротам, при пересечении → spawnAlly() с позицией у ворот
  //                     удалить пилота и визуал из ангара
}
```

### Этап 5: FPS GameMode + интеграция с боевым режимом

**Новый файл:** `src/pages/fps/index.ts`

Самостоятельный GameModeHandler:

```ts
export const fpsMode: GameModeHandler = {
  enter(context?) {
    // Создать ангар, запустить FPS-контроллер, заспавнить ИИ-пилотов
    // Настроить камеру от первого лица, pointer lock
  },
  update(dt) {
    // Обновить FPS-контроллер (перемещение, коллизии)
    // Обновить ИИ-пилотов
    // Обновить HUD ангара
    // Проверить взаимодействие (E рядом с истребителем)
    // Если игрок сел → вызвать callback onBoarded()
  },
  exit() {
    // Скрыть ангар, снять pointer lock, очистить ресурсы
  },
};
```

Регистрируется в `mode-registry` для будущего самостоятельного использования:
```ts
registerMode('fps', fpsMode);
```

**Файл:** `src/pages/combat/index.ts`

Модифицировать `combatMode` — делегировать фазу ангара в `fpsMode`:

```ts
enter(context) {
  // ... существующая инициализация (reset, systems, etc.) ...
  state.combatPhase = 'hangar';
  fpsMode.enter({
    onBoarded: () => switchToFlight(),  // callback при посадке в истребитель
  });
}

update(dt) {
  world.update(dt);  // ECS ВСЕГДА работает — ИИ в космосе не замирают

  if (state.combatPhase === 'hangar') {
    fpsMode.update(dt);  // + FPS-контроллер, ангарные боты, HUD
  }
  // player-system внутри world проверяет combatPhase
  // и пропускает обновление игрока когда он в ангаре
  // ... win/lose checks ...
}

exit() {
  if (state.combatPhase === 'hangar') fpsMode.exit();
  // ... существующая очистка ...
}
```

**Новый файл:** `src/pages/combat/phase-switcher.ts`

Логика переключения фаз внутри combat mode:

- `switchToFlight()` — fpsMode.exit(), создание ECS-игрока, переключение камеры
- `switchToHangar()` — очистка ECS-игрока, fpsMode.enter(), восстановление pointer lock

**Файл:** `src/pages/combat/combat-setup.ts`

- Модифицировать `spawnCombatEntities()` — при FPS-режиме не спавнить союзников сразу

### Этап 6: Переключение ангар ↔ полёт

**Файл:** `src/pages/combat/phase-switcher.ts`

`switchToFlight()` (вызывается после физического вылета игрока через ворота):

1. `fpsMode.exit()` — скрыть ангар, снять pointer lock
2. Создать ECS-сущность игрока (реюз кода из combat-setup)
3. **Позиция = координаты ворот ангара** (в мировых координатах носителя)
4. **Начальная скорость = вектор наружу от ворот** (игрок вылетает, а не телепортируется)
5. Переключить камеру на 3rd person (как сейчас)
6. `state.combatPhase = 'flight'`

`switchToHangar()` (при гибели):

1. Удалить ECS-сущность истребителя игрока
2. `fpsMode.enter()` — показать ангар, pointer lock, сбросить FPS-позицию
3. `state.combatPhase = 'hangar'`

### Этап 7: Модификация респавна

**Файл:** `src/features/flight/player-system.ts`

Модифицировать `playerDeath()`:

- Вместо `resetPlayerTransform()` → вызывать `switchToHangar()`
- Не сбрасывать здоровье сразу — оно восстанавливается при посадке в новый истребитель

**Файл:** `src/features/combat/spawner-system.ts`

Модифицировать `updateRespawnQueue()`:

- Для союзников: вместо `spawnAlly()` → спавнить пилота в ангаре, который побежит к истребителю
- Пилот пройдёт полный цикл: спавн → бег → посадка → **физический вылет через ворота** → ECS-истребитель в космосе

### Этап 8: Корабль-носитель как 3D-объект

**Файл:** `src/pages/combat/combat-setup.ts`

Добавить спавн союзного корабля-носителя:

- Использовать существующую модель capital-ship (реюз `createCapitalShip`)
- Позиция: рядом с начальной точкой игрока
- Команда: 'ally', без подсистем атаки (неуязвимый)
- Ангар "внутри" — отдельная сцена, привязанная к позиции корабля

### Этап 9: UI ангара

**Файл:** `src/pages/fps/hangar-hud.ts` (новый)

HUD для фазы ангара:

- Перекрестие в центре экрана
- Подсказка "Нажмите E для посадки" при приближении к истребителю
- Индикатор количества доступных истребителей
- Создаётся/уничтожается вместе с fpsMode.enter()/exit()

### Этап 10: Input-система для ангара

**Файл:** `src/app/input-listeners.ts`

Модифицировать обработчики:

- Добавить `isHangarMode()` проверку
- В ангаре: pointer lock вместо обычного отслеживания мыши
- В ангаре: WASD для перемещения (не для полёта)

## Ключевые файлы для модификации

| Файл                                    | Изменения               |
| --------------------------------------- | ----------------------- |
| `src/shared/types.ts`                   | Новые типы CombatPhase  |
| `src/shared/state/index.ts`             | Поле combatPhase        |
| `src/shared/input/types.ts`             | FPS-действия            |
| `src/shared/input/index.ts`             | FPS actions + keymap    |
| `src/shared/config/input.ts`            | FPS keybindings         |
| `src/pages/combat/index.ts`             | Двухфазный update       |
| `src/pages/combat/combat-setup.ts`      | Спавн носителя          |
| `src/features/flight/player-system.ts`  | playerDeath → hangar    |
| `src/features/combat/spawner-system.ts` | Респавн через ангар     |
| `src/app/input-listeners.ts`            | Pointer lock для ангара |

## Новые файлы

| Файл                                           | Описание                          |
| ---------------------------------------------- | --------------------------------- |
| `src/entities/objects/hangar/create-hangar.ts`  | Процедурный 3D-ангар              |
| `src/entities/objects/hangar/index.ts`          | Re-export фабрики ангара          |
| `src/pages/fps/index.ts`                        | FPS GameModeHandler (самостоят.)  |
| `src/pages/fps/fps-controller.ts`               | FPS-контроллер (WASD+мышь)        |
| `src/pages/fps/hangar-scene.ts`                 | Управление 3D-сценой ангара       |
| `src/pages/fps/hangar-ai.ts`                    | ИИ-пилоты в ангаре                |
| `src/pages/fps/hangar-hud.ts`                   | HUD ангара                        |
| `src/pages/combat/phase-switcher.ts`            | Переключение hangar ↔ flight      |

## Существующие утилиты для реиспользования

- `createMesh()`, `createPlaneGeometry()`, `createCylinderGeometry()` из `src/shared/core/factories.ts` — для построения ангара
- `createFighter()` из `src/entities/objects/space-ships/fighter/create-fighter.ts` — для истребителей в ангаре
- `createCapitalShip()` из `src/entities/objects/space-ships/capital-ship/create-capital-ship.ts` — для корабля-носителя
- `PerspectiveCamera` из `src/shared/core/camera.ts` — камера (одна, просто переключаем позицию/режим)
- `addToScene()` / `removeFromScene()` из `src/shared/core/factories.ts`
- `createPointLight()` из `src/shared/core/factories.ts` — освещение ангара
- Существующие ECS компоненты: TransformComponent, VisualComponent, TeamComponent, HealthComponent

## Порядок реализации

1. **Типы и состояние** — CombatPhase, FPSModeContext, GameMode union
2. **FPS input** — расширение input-системы (WASD + E + Space)
3. **Процедурный ангар** — фабрика 3D-сцены из примитивов
4. **FPS-контроллер** — перемещение + коллизии + pointer lock
5. **FPS GameMode** — `src/pages/fps/index.ts`, самостоятельный GameModeHandler
6. **Интеграция в combat** — делегирование фазы ангара в fpsMode
7. **Переключение фаз** — phase-switcher.ts (hangar ↔ flight)
8. **ИИ-пилоты** — боты в ангаре
9. **Корабль-носитель** — внешний вид в космосе
10. **Респавн через ангар** — модификация гибели
11. **HUD ангара** — UI

## Проверка

1. `npm run typecheck` — после каждого этапа
2. `npm run dev` — визуальная проверка:
   - При старте боя камера должна быть от первого лица в ангаре
   - WASD перемещает, мышь вращает обзор
   - Видны истребители на стойках
   - ИИ-боты бегут к истребителям
   - Нажатие E рядом с истребителем → переключение в полёт
   - При гибели → возврат в ангар
3. `npm run lint` — проверка FSD-правил (boundaries)
4. `npm run build` — финальная сборка
