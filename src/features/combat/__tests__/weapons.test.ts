import { WEAPON_CONFIG } from '@/shared/config/weapons';
import { state } from '@/shared/state';

import { cleanupExcessBullets } from '../weapons';

// Мокаем модули, требующие Babylon.js runtime
jest.mock('@/shared/core', () => {
  const { Vector3 } = jest.requireActual('@/shared/core/vector3');
  const { Quaternion } = jest.requireActual('@babylonjs/core/Maths/math.vector');
  return {
    Vector3,
    Quaternion,
    TransformNode: class {
      position = new Vector3();
      quaternion = new Quaternion();
    },
    addToScene: jest.fn(),
    createAdditiveMaterial: jest.fn(() => ({})),
    createCylinderGeometry: jest.fn(() => ({
      rotateZ: jest.fn(),
    })),
    createMesh: jest.fn(() => ({
      position: new Vector3(),
      quaternion: new Quaternion(),
      renderingGroupId: 0,
    })),
  };
});

jest.mock('@/shared/audio', () => ({
  playLaserSound: jest.fn(),
}));

jest.mock('@/entities/fighter', () => ({
  GUN_OFFSET_L: new (jest.requireActual('@/shared/core/vector3').Vector3)(0, 0, -1),
  GUN_OFFSET_R: new (jest.requireActual('@/shared/core/vector3').Vector3)(0, 0, 1),
}));

const W = WEAPON_CONFIG;

describe('cleanupExcessBullets', () => {
  beforeEach(() => {
    state.bullets = [];
    state.allyBullets = [];
    state.enemyBullets = [];
  });

  it('не удаляет, если общее число <= maxBullets', () => {
    for (let i = 0; i < 50; i++) {
      state.bullets.push({ mesh: { dispose: jest.fn() } } as any);
    }
    cleanupExcessBullets();
    expect(state.bullets.length).toBe(50);
  });

  it('удаляет старые снаряды из самого длинного массива при превышении maxBullets', () => {
    // Заполняем больше maxBullets
    const total = W.maxBullets + 20;
    for (let i = 0; i < total; i++) {
      state.bullets.push({ mesh: { dispose: jest.fn() } } as any);
    }

    cleanupExcessBullets();

    // Должно остаться cleanupTarget
    expect(state.bullets.length).toBe(W.cleanupTarget);
  });

  it('при cleanup вызывается dispose на удалённых мешах', () => {
    const disposeFns: jest.Mock[] = [];
    const total = W.maxBullets + 10;
    for (let i = 0; i < total; i++) {
      const fn = jest.fn();
      disposeFns.push(fn);
      state.bullets.push({ mesh: { dispose: fn } } as any);
    }

    cleanupExcessBullets();

    // Первые (total - cleanupTarget) должны быть удалены
    const removeCount = total - W.cleanupTarget;
    for (let i = 0; i < removeCount; i++) {
      expect(disposeFns[i]).toHaveBeenCalled();
    }
    // Оставшиеся — нет
    for (let i = removeCount; i < total; i++) {
      expect(disposeFns[i]).not.toHaveBeenCalled();
    }
  });

  it('удаляет из самого длинного массива', () => {
    // allyBullets самый длинный
    for (let i = 0; i < W.maxBullets; i++) {
      state.allyBullets.push({ mesh: { dispose: jest.fn() } } as any);
    }
    // добавляем в enemy, чтобы превысить лимит
    for (let i = 0; i < 10; i++) {
      state.enemyBullets.push({ mesh: { dispose: jest.fn() } } as any);
    }

    cleanupExcessBullets();

    // Удаление из allyBullets (самый длинный)
    expect(state.allyBullets.length).toBeLessThan(W.maxBullets);
    // enemy не тронут
    expect(state.enemyBullets.length).toBe(10);
  });
});
