# Events — шина игровых событий

Типизированный pub/sub для развязки модулей. Системы общаются через события, не зная друг о друге.

## API

```ts
import { clearAllListeners, emit, off, on } from '@/shared/events';
```

| Функция               | Описание                                         |
| --------------------- | ------------------------------------------------ |
| `on(event, fn)`       | Подписка. Возвращает функцию отписки             |
| `off(event, fn)`      | Ручная отписка                                   |
| `emit(event, data)`   | Отправка события всем подписчикам                |
| `clearAllListeners()` | Сброс всех подписок (при смене режима / cleanup) |

## Пример

```ts
// Подписка
const unsub = on('fighter-killed', (data) => {
  console.log(`${data.killerName} уничтожил ${data.victim.name}`);
});

// Отправка
emit('fighter-killed', {
  victim: fighter,
  killerName: 'Сокол-1',
  killerTeam: 'ally',
  victimTeam: 'enemy',
  isPlayerKill: false,
});

// Отписка
unsub();
```

## События

| Событие                  | Когда срабатывает                          |
| ------------------------ | ------------------------------------------ |
| `fighter-killed`         | Истребитель уничтожен                      |
| `subsystem-destroyed`    | Подсистема капитального корабля уничтожена |
| `capital-ship-destroyed` | Капитальный корабль уничтожен              |
| `phase-changed`          | Смена фазы боя (1 → 2)                     |
| `player-hit`             | Игрок получил урон                         |
| `player-died`            | Игрок погиб                                |

## Структура

- `types.ts` — типы событий и `EventMap`
- `index.ts` — реализация шины (`on`, `off`, `emit`)
