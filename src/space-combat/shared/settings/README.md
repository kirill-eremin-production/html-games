# Settings — игровые настройки

Управление пользовательскими настройками с сохранением в localStorage.

## API

```ts
import {
  settings,
  DEFAULT_SETTINGS,
  loadSettings,
  saveSettings,
  resetSettings,
  parseHexColor,
} from '@/shared/settings';
```

| Экспорт            | Описание                                  |
| ------------------ | ----------------------------------------- |
| `settings`         | Текущие настройки (мутабельный объект)     |
| `DEFAULT_SETTINGS` | Значения по умолчанию                     |
| `loadSettings()`   | Загрузить из localStorage                 |
| `saveSettings()`   | Сохранить в localStorage                  |
| `resetSettings()`  | Сбросить к значениям по умолчанию         |
| `parseHexColor()`  | Преобразовать `#rrggbb` в число           |

## Настройки

| Группа   | Поле           | Описание                     |
| -------- | -------------- | ---------------------------- |
| `colors` | `playerBody`   | Цвет корпуса игрока          |
|          | `playerExhaust`| Цвет выхлопа игрока          |
|          | `allyBody`     | Цвет корпуса союзников       |
|          | `allyExhaust`  | Цвет выхлопа союзников       |
|          | `enemyBody`    | Цвет корпуса врагов          |
|          | `enemyExhaust` | Цвет выхлопа врагов          |
|          | `capitalHull`  | Цвет обшивки кап. кораблей   |
| `counts` | `capitalShips` | Количество кап. кораблей     |
|          | `allies`       | Количество союзников         |
|          | `enemies`      | Количество врагов            |

## Структура

- `types.ts` — `GameSettings`, `ColorSettings`, `CountSettings`
- `index.ts` — хранение, загрузка/сохранение, утилиты
