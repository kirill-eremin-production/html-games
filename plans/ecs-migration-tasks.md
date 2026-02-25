# Задачи по миграции на ECS

Этот документ содержит конкретные технические задачи для завершения перехода проекта Space Combat на архитектуру Entity Component System.

## 1. Улучшение ядра (Infrastructure)
- [ ] **EntityHandle**: Реализовать в [`world.ts`](src/shared/ecs/world.ts) механизм поколений (generations) для ID сущностей. Это предотвратит ошибки при обращении к удалённым сущностям, чьи ID были переиспользованы.
- [ ] **System Manager**: Добавить в `World` поддержку регистрации систем и метод `update(dt)`, который будет вызывать их в строго заданном порядке.

## 2. Рефакторинг систем (Logic Migration)
- [ ] **BulletSystem**:
    - Переписать [`bullet-system.ts`](src/features/combat/bullet-system.ts) на использование `world.query(ProjectileComponent, TransformComponent)`.
    - Удалить массивы `state.bullets`, `state.allyBullets`, `state.enemyBullets`.
- [ ] **AISystem**:
    - Переписать [`ai-system.ts`](src/features/combat/ai-system.ts) на использование `world.query(FighterAIComponent, TransformComponent, TeamComponent)`.
    - Реализовать поиск целей через пространственные запросы или фильтрацию `world.query`.
    - Удалить массивы `state.allies`, `state.enemies`.

## 3. Визуализация и Рендеринг (Decoupling)
- [ ] **RenderSystem**: Создать систему, которая будет единственным местом синхронизации данных из `TransformComponent` в меши Babylon.js.
- [ ] **VFXSystem**: Перевести взрывы и эффекты на сущности с коротким временем жизни (`LifetimeComponent`).

## 4. Капитальные корабли (Complex Entities)
- [ ] **Subsystem Entities**: Представить подсистемы как отдельные сущности, связанные с родительским кораблем через `ParentComponent`.
- [ ] **CapitalShipSystem**: Переписать логику турелей и состояния корабля на работу с компонентами.

## 5. Завершение (Cleanup)
- [ ] **Удаление Адаптеров**: Удалить [`adapters.ts`](src/entities/ecs-adapters/adapters.ts) после того, как все системы перейдут на прямую работу с компонентами.
- [ ] **Очистка State**: Убрать из [`state.ts`](src/shared/state/index.ts) все ссылки на игровые объекты, оставив только глобальные примитивы (счёт, фаза).

---

### Рекомендуемый порядок выполнения:
1. `EntityHandle` + `System Manager` (фундамент).
2. `BulletSystem` (самая простая для миграции).
3. `RenderSystem` (отделение логики от визуала).
4. `AISystem` (основная игровая логика).
5. `CapitalShips`.
