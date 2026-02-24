import { PLAYER_CONFIG } from '@/shared/config/player';

import { flightModels } from '../flight-models';

const P = PLAYER_CONFIG;
const combat = flightModels.combat;
const exploration = flightModels.exploration;

describe('combatFlight.updateSpeed', () => {
  const baseSpeed = 80;
  const boostSpeed = 160;
  const dt = 1 / 60;

  it('thrust: разгон, не превышая boostSpeed', () => {
    const newSpeed = combat.updateSpeed(80, baseSpeed, boostSpeed, 'thrust', dt);
    expect(newSpeed).toBeGreaterThan(80);
    expect(newSpeed).toBeLessThanOrEqual(boostSpeed);
  });

  it('thrust: при достижении boostSpeed не превышает', () => {
    const newSpeed = combat.updateSpeed(boostSpeed, baseSpeed, boostSpeed, 'thrust', dt);
    expect(newSpeed).toBe(boostSpeed);
  });

  it('brake: торможение, не ниже minSpeed', () => {
    const newSpeed = combat.updateSpeed(80, baseSpeed, boostSpeed, 'brake', dt);
    expect(newSpeed).toBeLessThan(80);
    expect(newSpeed).toBeGreaterThanOrEqual(P.minSpeed);
  });

  it('brake: не опускается ниже minSpeed', () => {
    const newSpeed = combat.updateSpeed(P.minSpeed, baseSpeed, boostSpeed, 'brake', dt);
    expect(newSpeed).toBe(P.minSpeed);
  });

  it('none: скорость затухает к baseSpeed (выше base → замедляется)', () => {
    const speed = 140;
    const newSpeed = combat.updateSpeed(speed, baseSpeed, boostSpeed, 'none', dt);
    expect(newSpeed).toBeLessThan(speed);
    expect(newSpeed).toBeGreaterThan(baseSpeed);
  });

  it('none: скорость затухает к baseSpeed (ниже base → ускоряется)', () => {
    const speed = 40;
    const newSpeed = combat.updateSpeed(speed, baseSpeed, boostSpeed, 'none', dt);
    expect(newSpeed).toBeGreaterThan(speed);
    expect(newSpeed).toBeLessThan(baseSpeed);
  });

  it('none: при speed === baseSpeed остаётся на месте', () => {
    const newSpeed = combat.updateSpeed(baseSpeed, baseSpeed, boostSpeed, 'none', dt);
    expect(newSpeed).toBeCloseTo(baseSpeed);
  });
});

describe('explorationFlight.updateSpeed', () => {
  const baseSpeed = 80;
  const boostSpeed = 160;
  const dt = 1 / 60;

  it('thrust: разгон, не превышая boostSpeed', () => {
    const newSpeed = exploration.updateSpeed(80, baseSpeed, boostSpeed, 'thrust', dt);
    expect(newSpeed).toBeGreaterThan(80);
    expect(newSpeed).toBeLessThanOrEqual(boostSpeed);
  });

  it('thrust: при boostSpeed не превышает', () => {
    const newSpeed = exploration.updateSpeed(boostSpeed, baseSpeed, boostSpeed, 'thrust', dt);
    expect(newSpeed).toBe(boostSpeed);
  });

  it('brake: торможение до 0', () => {
    const newSpeed = exploration.updateSpeed(80, baseSpeed, boostSpeed, 'brake', dt);
    expect(newSpeed).toBeLessThan(80);
    expect(newSpeed).toBeGreaterThanOrEqual(0);
  });

  it('brake: не опускается ниже 0', () => {
    const newSpeed = exploration.updateSpeed(0, baseSpeed, boostSpeed, 'brake', dt);
    expect(newSpeed).toBe(0);
  });

  it('none: скорость не изменяется (нет затухания)', () => {
    const speed = 100;
    const newSpeed = exploration.updateSpeed(speed, baseSpeed, boostSpeed, 'none', dt);
    expect(newSpeed).toBe(speed);
  });
});

describe('combatFlight.cameraOffset', () => {
  it('возвращает фиксированные значения', () => {
    const offset = combat.cameraOffset(100, 200);
    expect(offset.back).toBe(P.combatCamBack);
    expect(offset.up).toBe(P.combatCamUp);
    expect(offset.lookAhead).toBe(P.combatLookAhead);
  });
});

describe('explorationFlight.cameraOffset', () => {
  it('при speed=0 возвращает базовые значения', () => {
    const offset = exploration.cameraOffset(0, 160);
    expect(offset.back).toBeCloseTo(P.explCamBackBase);
    expect(offset.up).toBeCloseTo(P.explCamUpBase);
    expect(offset.lookAhead).toBeCloseTo(P.explLookBase);
  });

  it('при speed=boostSpeed возвращает base + range', () => {
    const offset = exploration.cameraOffset(160, 160);
    expect(offset.back).toBeCloseTo(P.explCamBackBase + P.explCamBackRange);
    expect(offset.up).toBeCloseTo(P.explCamUpBase + P.explCamUpRange);
    expect(offset.lookAhead).toBeCloseTo(P.explLookBase + P.explLookRange);
  });

  it('камера масштабируется линейно с соотношением speed/boostSpeed', () => {
    const offset = exploration.cameraOffset(80, 160); // t = 0.5
    expect(offset.back).toBeCloseTo(P.explCamBackBase + 0.5 * P.explCamBackRange);
    expect(offset.up).toBeCloseTo(P.explCamUpBase + 0.5 * P.explCamUpRange);
    expect(offset.lookAhead).toBeCloseTo(P.explLookBase + 0.5 * P.explLookRange);
  });

  it('при boostSpeed=0, t=0 → базовые значения', () => {
    const offset = exploration.cameraOffset(0, 0);
    expect(offset.back).toBeCloseTo(P.explCamBackBase);
    expect(offset.up).toBeCloseTo(P.explCamUpBase);
    expect(offset.lookAhead).toBeCloseTo(P.explLookBase);
  });
});
