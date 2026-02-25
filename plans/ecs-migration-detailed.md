# Детальный план перехода на архитектуру Pure ECS

Этот документ описывает технические шаги по рефакторингу проекта Space Combat для перехода от гибридной модели к "чистой" ECS (Entity Component System).

## 1. Анализ текущего состояния
- **Ядро ECS**: Готово (World, SystemScheduler, EntityId).
- **Компоненты**: Описаны базовые классы, но требуют рефакторинга.
- **Логика**: Завязана на адаптеры (`Fighter`, `LaserData`) и глобальные массивы в `state.ts`.
- **Оценка**: 45/100 (фундамент есть, но системы не используют возможности ECS).

## 2. Целевая архитектура
Все игровые сущности управляются исключительно через `world.query()`. Глобальный `state.ts` больше не хранит списки объектов.

### Схема взаимодействия систем
```mermaid
graph TD
    subgraph ECS_World
        subgraph Systems_Loop
            S1[AISystem] --> S2[MovementSystem]
            S2 --> S3[CollisionSystem]
            S3 --> S4[HealthSystem]
            S4 --> S5[WeaponSystem]
            S5 --> S6[LifetimeSystem]
            S6 --> S7[RenderSystem]
        end

        subgraph Components
            C1[Transform: pos, quat]
            C2[Velocity: speed, dir]
            C3[Health: current, max]
            C4[Mesh: ref to BJS node]
            C5[FighterAI: state, target]
            C6[Projectile: damage, owner]
            C7[DamageBuffer: array of hits]
            C8[Lifetime: seconds]
        end
    end

    S1 -- query --> C5 & C1
    S2 -- query --> C1 & C2
    S3 -- query --> C1 & C6
    S3 -- adds --> C7
    S4 -- query --> C3 & C7
    S7 -- query --> C1 & C4
    S7 -- updates --> BJS[Babylon.js Engine]
```

## 3. Этапы реализации

### Этап 1: Рефакторинг компонентов
1.  **`TransformComponent`**: Удалить ссылку на `mesh`. Хранить только `position: Vector3` и `quaternion: Quaternion`.
2.  **`MeshComponent`**: Создать компонент для хранения ссылки на `TransformNode` Babylon.js.
3.  **`DamageBufferComponent`**: Создать компонент для накопления урона за кадр (массив объектов `{ amount, source }`).
4.  **`LifetimeComponent`**: Создать компонент для автоматического удаления сущностей (снаряды, эффекты).

### Этап 2: Реализация атомарных систем
Заменить текущие "мега-системы" на специализированные:
- **`MovementSystem`**: Интеграция скорости в позицию.
- **`AISystem`**: Логика выбора целей и управления вектором направления.
- **`CollisionSystem`**: Проверка пересечений сфер/лучей.
- **`WeaponSystem`**: Обработка таймеров перезарядки и спавн сущностей-снарядов.
- **`HealthSystem`**: Применение урона из буфера и удаление сущностей при HP <= 0.
- **`RenderSystem`**: Синхронизация `Transform` компонентов с мешами Babylon.js.

### Этап 3: Удаление Legacy-слоя
1.  Удалить `src/entities/ecs-adapters/`.
2.  Очистить `GameState` от массивов `allies`, `enemies`, `bullets` и т.д.
3.  Переписать `spawner-system.ts` на прямой вызов `world.createEntity()`.

### Этап 4: Обновление UI
1.  **Minimap**: Переписать на использование `world.query(TransformComponent, TeamComponent)`.
2.  **Markers**: Переписать на использование `world.query(TransformComponent, HealthComponent)`.

## 4. Ожидаемый результат
- **Масштабируемость**: Возможность обрабатывать 1000+ объектов без изменения кода систем.
- **Чистота**: Полное разделение данных (компоненты) и логики (системы).
- **Надежность**: Использование `EntityId` с генерациями исключает ошибки при обращении к удаленным объектам.
