import { ALLY_BASES, ENEMY_BASES } from '@/shared/constants';

import { createInitialState, nextAllyName, nextEnemyName, resetNameCounters } from '../index';

describe('nextAllyName', () => {
  beforeEach(() => {
    resetNameCounters();
  });

  it('первое имя — первая база с номером 1', () => {
    expect(nextAllyName()).toBe(`${ALLY_BASES[0]}-1`);
  });

  it('последовательно перебирает все базы', () => {
    const names: string[] = [];
    for (let i = 0; i < ALLY_BASES.length; i++) {
      names.push(nextAllyName());
    }
    for (let i = 0; i < ALLY_BASES.length; i++) {
      expect(names[i]).toBe(`${ALLY_BASES[i]}-1`);
    }
  });

  it('после прохождения массива добавляет суффикс -2', () => {
    for (let i = 0; i < ALLY_BASES.length; i++) {
      nextAllyName();
    }
    expect(nextAllyName()).toBe(`${ALLY_BASES[0]}-2`);
  });

  it('третий цикл — суффикс -3', () => {
    for (let i = 0; i < ALLY_BASES.length * 2; i++) {
      nextAllyName();
    }
    expect(nextAllyName()).toBe(`${ALLY_BASES[0]}-3`);
  });
});

describe('nextEnemyName', () => {
  beforeEach(() => {
    resetNameCounters();
  });

  it('первое имя — первая база с номером 1', () => {
    expect(nextEnemyName()).toBe(`${ENEMY_BASES[0]}-1`);
  });

  it('последовательно перебирает все базы', () => {
    const names: string[] = [];
    for (let i = 0; i < ENEMY_BASES.length; i++) {
      names.push(nextEnemyName());
    }
    for (let i = 0; i < ENEMY_BASES.length; i++) {
      expect(names[i]).toBe(`${ENEMY_BASES[i]}-1`);
    }
  });

  it('после прохождения массива добавляет суффикс -2', () => {
    for (let i = 0; i < ENEMY_BASES.length; i++) {
      nextEnemyName();
    }
    expect(nextEnemyName()).toBe(`${ENEMY_BASES[0]}-2`);
  });
});

describe('resetNameCounters', () => {
  it('сброс возвращает генерацию к начальным значениям', () => {
    nextAllyName();
    nextAllyName();
    nextEnemyName();
    resetNameCounters();
    expect(nextAllyName()).toBe(`${ALLY_BASES[0]}-1`);
    expect(nextEnemyName()).toBe(`${ENEMY_BASES[0]}-1`);
  });
});

describe('createInitialState', () => {
  it('создаёт состояние с правильными начальными значениями', () => {
    const s = createInitialState();
    expect(s.running).toBe(false);
    expect(s.phase).toBe(1);
    expect(s.score).toBe(0);
    expect(s.playerHealth).toBe(100);
    expect(s.maxHealth).toBe(100);
    expect(s.speed).toBe(80);
    expect(s.flightModel).toBe('combat');
  });

  it('создаёт пустые массивы', () => {
    const s = createInitialState();
    expect(s.killFeed).toEqual([]);
    expect(s.respawnQueue).toEqual([]);
  });

  it('каждый вызов создаёт независимый объект', () => {
    const s1 = createInitialState();
    const s2 = createInitialState();
    expect(s1).not.toBe(s2);
    expect(s1.killFeed).not.toBe(s2.killFeed);
  });
});
