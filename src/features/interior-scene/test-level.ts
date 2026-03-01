/**
 * Захардкоженный тестовый уровень для Interior Scene.
 *
 * Комната 16×6×16 с несколькими перегородками,
 * 3 врагами и 1 спавном игрока.
 */
import type { InteriorLevelJSON } from '@/shared/interior/types';

function wall(x: number, y: number, z: number) {
  return { type: 'wall' as const, x, y, z, color: '#888888' };
}
function floor(x: number, y: number, z: number) {
  return { type: 'floor' as const, x, y, z, color: '#555555' };
}
function ceiling(x: number, y: number, z: number) {
  return { type: 'ceiling' as const, x, y, z, color: '#4a4a52' };
}
function door(x: number, y: number, z: number) {
  return { type: 'door' as const, x, y, z, color: '#8b4513' };
}

export const TEST_LEVEL: InteriorLevelJSON = (() => {
  const W = 16;
  const H = 6;
  const D = 16;
  const blocks: InteriorLevelJSON['blocks'] = [];

  // Пол
  for (let x = 0; x < W; x++) {
    for (let z = 0; z < D; z++) {
      blocks.push(floor(x, 0, z));
    }
  }

  // Потолок
  for (let x = 0; x < W; x++) {
    for (let z = 0; z < D; z++) {
      blocks.push(ceiling(x, H - 1, z));
    }
  }

  // Стены по периметру (y=1..H-2, чтобы не перекрывать пол и потолок)
  for (let y = 1; y < H - 1; y++) {
    for (let x = 0; x < W; x++) {
      blocks.push(wall(x, y, 0)); // передняя стена
      blocks.push(wall(x, y, D - 1)); // задняя стена
    }
    for (let z = 1; z < D - 1; z++) {
      blocks.push(wall(0, y, z)); // левая стена
      blocks.push(wall(W - 1, y, z)); // правая стена
    }
  }

  // Перегородка 1: горизонтальная стенка по центру с дверью
  for (let x = 1; x < W - 1; x++) {
    for (let y = 1; y < H - 1; y++) {
      if (x === 7 || x === 8) {
        // Дверной проём (пустота на y=1, дверь на y=1)
        if (y === 1) {
          blocks.push(door(x, y, 8));
        }
        // y=2 — проём (ничего)
      } else {
        blocks.push(wall(x, y, 8));
      }
    }
  }

  // Перегородка 2: небольшая стенка в верхней комнате
  for (let y = 1; y < H - 1; y++) {
    for (let z = 10; z < 13; z++) {
      blocks.push(wall(4, y, z));
    }
  }

  // Перегородка 3: укрытие в нижней комнате
  for (let y = 1; y < H - 1; y++) {
    for (let x = 10; x < 13; x++) {
      blocks.push(wall(x, y, 4));
    }
  }

  return {
    name: 'Test Station',
    version: 1,
    blocks,
    spawns: [
      { type: 'player', x: 2, y: 1, z: 2, rotation: 0 },
      { type: 'enemy', x: 13, y: 1, z: 2, rotation: 180 },
      { type: 'enemy', x: 3, y: 1, z: 12, rotation: 90 },
      { type: 'enemy', x: 12, y: 1, z: 13, rotation: 270 },
    ],
    meta: {
      size: { x: W, y: H, z: D },
      created: '2024-01-01',
    },
  };
})();
