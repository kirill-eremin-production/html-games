import { Quaternion as BQuaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';

import { Quaternion } from '@/shared/core/quaternion';

/** Сравнивает компоненты кватерниона с ожидаемыми значениями. */
function expectQuat(q: Quaternion, x: number, y: number, z: number, w: number) {
  expect(q.x).toBeCloseTo(x, 5);
  expect(q.y).toBeCloseTo(y, 5);
  expect(q.z).toBeCloseTo(z, 5);
  expect(q.w).toBeCloseTo(w, 5);
}

describe('Quaternion', () => {
  describe('constructor', () => {
    it('без аргументов создаёт единичный кватернион (0,0,0,1)', () => {
      const q = new Quaternion();
      expectQuat(q, 0, 0, 0, 1);
    });

    it('принимает произвольные компоненты', () => {
      const q = new Quaternion(1, 2, 3, 4);
      expectQuat(q, 1, 2, 3, 4);
    });

    it('является экземпляром BJS Quaternion', () => {
      const q = new Quaternion();
      expect(q).toBeInstanceOf(BQuaternion);
    });
  });

  describe('setFromAxisAngle', () => {
    it('поворот на 90° вокруг оси Y', () => {
      const q = new Quaternion();
      const axis = new Vector3(0, 1, 0);
      q.setFromAxisAngle(axis, Math.PI / 2);

      // sin(π/4) ≈ 0.7071, cos(π/4) ≈ 0.7071
      expectQuat(q, 0, Math.sin(Math.PI / 4), 0, Math.cos(Math.PI / 4));
    });

    it('поворот на 0 градусов даёт единичный кватернион', () => {
      const q = new Quaternion(1, 2, 3, 4);
      q.setFromAxisAngle(new Vector3(1, 0, 0), 0);
      expectQuat(q, 0, 0, 0, 1);
    });

    it('поворот на 180° вокруг оси Z', () => {
      const q = new Quaternion();
      q.setFromAxisAngle(new Vector3(0, 0, 1), Math.PI);
      // sin(π/2) = 1, cos(π/2) ≈ 0
      expectQuat(q, 0, 0, 1, 0);
    });

    it('возвращает this для chaining', () => {
      const q = new Quaternion();
      expect(q.setFromAxisAngle(new Vector3(1, 0, 0), 0.5)).toBe(q);
    });
  });

  describe('setFromUnitVectors', () => {
    it('из X в Y — поворот на 90° вокруг Z', () => {
      const q = new Quaternion();
      q.setFromUnitVectors(new Vector3(1, 0, 0), new Vector3(0, 1, 0));

      // Проверяем, что кватернион действительно поворачивает X в Y
      const v = new Vector3(1, 0, 0);
      v.applyRotationQuaternionInPlace(q);
      expect(v.x).toBeCloseTo(0);
      expect(v.y).toBeCloseTo(1);
      expect(v.z).toBeCloseTo(0);
    });

    it('одинаковые векторы — единичный кватернион', () => {
      const q = new Quaternion();
      q.setFromUnitVectors(new Vector3(1, 0, 0), new Vector3(1, 0, 0));
      expectQuat(q, 0, 0, 0, 1);
    });

    it('возвращает this для chaining', () => {
      const q = new Quaternion();
      expect(q.setFromUnitVectors(new Vector3(1, 0, 0), new Vector3(0, 1, 0))).toBe(q);
    });
  });

  describe('multiply', () => {
    it('мутирует this вместо создания нового объекта', () => {
      const q = new Quaternion();
      q.setFromAxisAngle(new Vector3(1, 0, 0), Math.PI / 2);
      const original = q;
      const r = new Quaternion();
      r.setFromAxisAngle(new Vector3(0, 1, 0), Math.PI / 2);

      q.multiply(r);
      expect(q).toBe(original); // тот же объект
    });

    it('умножение на единичный кватернион не меняет значение', () => {
      const q = new Quaternion();
      q.setFromAxisAngle(new Vector3(0, 1, 0), Math.PI / 4);
      const xBefore = q.x,
        yBefore = q.y,
        zBefore = q.z,
        wBefore = q.w;

      q.multiply(new Quaternion()); // единичный
      expectQuat(q, xBefore, yBefore, zBefore, wBefore);
    });

    it('два поворота по 90° вокруг Y дают 180°', () => {
      const q = new Quaternion();
      q.setFromAxisAngle(new Vector3(0, 1, 0), Math.PI / 2);
      const r = new Quaternion();
      r.setFromAxisAngle(new Vector3(0, 1, 0), Math.PI / 2);

      q.multiply(r);

      // Результат эквивалентен повороту на 180° вокруг Y
      const expected = new Quaternion();
      expected.setFromAxisAngle(new Vector3(0, 1, 0), Math.PI);
      expectQuat(q, expected.x, expected.y, expected.z, expected.w);
    });

    it('возвращает this для chaining', () => {
      const q = new Quaternion();
      const r = new Quaternion();
      expect(q.multiply(r)).toBe(q);
    });
  });

  describe('premultiply', () => {
    it('premultiply(q) эквивалентен q * this', () => {
      const a = new Quaternion();
      a.setFromAxisAngle(new Vector3(1, 0, 0), Math.PI / 3);
      const b = new Quaternion();
      b.setFromAxisAngle(new Vector3(0, 1, 0), Math.PI / 4);

      // Эталон: q * this через BJS
      const expected = BQuaternion.RotationAxis(new Vector3(1, 0, 0), Math.PI / 3).multiply(
        BQuaternion.RotationAxis(new Vector3(0, 1, 0), Math.PI / 4),
      );

      // premultiply: this = a * this, где this = b
      b.premultiply(a);
      expectQuat(b, expected.x, expected.y, expected.z, expected.w);
    });

    it('premultiply единичным кватернионом не меняет значение', () => {
      const q = new Quaternion();
      q.setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 6);
      const xBefore = q.x,
        yBefore = q.y,
        zBefore = q.z,
        wBefore = q.w;

      q.premultiply(new Quaternion());
      expectQuat(q, xBefore, yBefore, zBefore, wBefore);
    });

    it('multiply и premultiply — разные порядки', () => {
      const a = new Quaternion();
      a.setFromAxisAngle(new Vector3(1, 0, 0), Math.PI / 3);
      const b = new Quaternion();
      b.setFromAxisAngle(new Vector3(0, 1, 0), Math.PI / 4);

      const postMul = new Quaternion(a.x, a.y, a.z, a.w);
      postMul.multiply(b); // a * b

      const preMul = new Quaternion(b.x, b.y, b.z, b.w);
      preMul.premultiply(a); // a * b (через premultiply)

      // Оба должны дать одинаковый результат: a * b
      expectQuat(preMul, postMul.x, postMul.y, postMul.z, postMul.w);
    });

    it('возвращает this для chaining', () => {
      const q = new Quaternion();
      const r = new Quaternion();
      expect(q.premultiply(r)).toBe(q);
    });
  });

  describe('chaining', () => {
    it('setFromAxisAngle → multiply — реальный паттерн из player-system', () => {
      const plane = new Quaternion(); // единичный
      const tmp = new Quaternion();

      plane.multiply(tmp.setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 4));
      plane.multiply(tmp.setFromAxisAngle(new Vector3(0, 1, 0), Math.PI / 6));

      // Не единичный после поворотов
      expect(plane.w).not.toBeCloseTo(1);
      // Норма остаётся ~1 (unit quaternion)
      const norm = Math.sqrt(plane.x ** 2 + plane.y ** 2 + plane.z ** 2 + plane.w ** 2);
      expect(norm).toBeCloseTo(1);
    });
  });
});
