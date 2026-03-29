import { Quaternion } from '@babylonjs/core/Maths/math.vector';

import { Vector3 } from '../vector3';

describe('Vector3', () => {
  describe('distanceToSquared', () => {
    it('возвращает квадрат расстояния между двумя векторами', () => {
      const a = new Vector3(0, 0, 0);
      const b = new Vector3(3, 4, 0);
      expect(a.distanceToSquared(b)).toBe(25);
    });

    it('возвращает 0 для одинаковых точек', () => {
      const a = new Vector3(1, 2, 3);
      expect(a.distanceToSquared(a)).toBe(0);
    });
  });

  describe('distanceTo', () => {
    it('возвращает евклидово расстояние', () => {
      const a = new Vector3(0, 0, 0);
      const b = new Vector3(3, 4, 0);
      expect(a.distanceTo(b)).toBe(5);
    });
  });

  describe('lerp', () => {
    it('при t=0 оставляет вектор без изменений', () => {
      const a = new Vector3(1, 2, 3);
      const b = new Vector3(5, 6, 7);
      a.lerp(b, 0);
      expect(a.x).toBe(1);
      expect(a.y).toBe(2);
      expect(a.z).toBe(3);
    });

    it('при t=1 копирует целевой вектор', () => {
      const a = new Vector3(1, 2, 3);
      const b = new Vector3(5, 6, 7);
      a.lerp(b, 1);
      expect(a.x).toBe(5);
      expect(a.y).toBe(6);
      expect(a.z).toBe(7);
    });

    it('при t=0.5 возвращает середину', () => {
      const a = new Vector3(0, 0, 0);
      const b = new Vector3(10, 20, 30);
      a.lerp(b, 0.5);
      expect(a.x).toBe(5);
      expect(a.y).toBe(10);
      expect(a.z).toBe(15);
    });

    it('возвращает this для цепочки', () => {
      const a = new Vector3(0, 0, 0);
      const result = a.lerp(new Vector3(1, 1, 1), 0.5);
      expect(result).toBe(a);
    });
  });

  describe('addScaledVector', () => {
    it('прибавляет направление * скаляр', () => {
      const pos = new Vector3(10, 20, 30);
      const dir = new Vector3(1, 0, 0);
      pos.addScaledVector(dir, 5);
      expect(pos.x).toBe(15);
      expect(pos.y).toBe(20);
      expect(pos.z).toBe(30);
    });

    it('работает с отрицательным скаляром', () => {
      const pos = new Vector3(10, 0, 0);
      const dir = new Vector3(1, 0, 0);
      pos.addScaledVector(dir, -3);
      expect(pos.x).toBe(7);
    });

    it('возвращает this для цепочки', () => {
      const a = new Vector3();
      const result = a.addScaledVector(new Vector3(1, 0, 0), 1);
      expect(result).toBe(a);
    });
  });

  describe('applyQuaternion', () => {
    it('поворот (1,0,0) на 90° вокруг Y даёт (0,0,-1)', () => {
      const v = new Vector3(1, 0, 0);
      const q = Quaternion.RotationAxis(new Vector3(0, 1, 0), Math.PI / 2);
      v.applyQuaternion(q);
      expect(v.x).toBeCloseTo(0, 5);
      expect(v.y).toBeCloseTo(0, 5);
      expect(v.z).toBeCloseTo(-1, 5);
    });

    it('единичный кватернион не меняет вектор', () => {
      const v = new Vector3(3, 4, 5);
      const q = Quaternion.Identity();
      v.applyQuaternion(q);
      expect(v.x).toBeCloseTo(3, 5);
      expect(v.y).toBeCloseTo(4, 5);
      expect(v.z).toBeCloseTo(5, 5);
    });

    it('возвращает this для цепочки', () => {
      const v = new Vector3(1, 0, 0);
      const result = v.applyQuaternion(Quaternion.Identity());
      expect(result).toBe(v);
    });
  });

  describe('clone', () => {
    it('возвращает копию с теми же координатами', () => {
      const a = new Vector3(1, 2, 3);
      const b = a.clone();
      expect(b.x).toBe(1);
      expect(b.y).toBe(2);
      expect(b.z).toBe(3);
    });

    it('возвращает экземпляр расширенного Vector3', () => {
      const a = new Vector3(1, 2, 3);
      const b = a.clone();
      expect(b).toBeInstanceOf(Vector3);
      // Должен иметь расширенные методы
      expect(typeof b.distanceTo).toBe('function');
    });

    it('изменение клона не влияет на оригинал', () => {
      const a = new Vector3(1, 2, 3);
      const b = a.clone();
      b.x = 100;
      expect(a.x).toBe(1);
    });
  });

  describe('add', () => {
    it('мутирующее сложение двух векторов', () => {
      const a = new Vector3(1, 2, 3);
      const b = new Vector3(10, 20, 30);
      a.add(b);
      expect(a.x).toBe(11);
      expect(a.y).toBe(22);
      expect(a.z).toBe(33);
    });

    it('возвращает this для цепочки', () => {
      const a = new Vector3();
      const result = a.add(new Vector3(1, 1, 1));
      expect(result).toBe(a);
    });
  });

  describe('cross', () => {
    it('векторное произведение (1,0,0) × (0,1,0) = (0,0,1)', () => {
      const a = new Vector3(1, 0, 0);
      const b = new Vector3(0, 1, 0);
      a.cross(b);
      expect(a.x).toBeCloseTo(0, 10);
      expect(a.y).toBeCloseTo(0, 10);
      expect(a.z).toBeCloseTo(1, 10);
    });

    it('векторное произведение (0,1,0) × (1,0,0) = (0,0,-1)', () => {
      const a = new Vector3(0, 1, 0);
      const b = new Vector3(1, 0, 0);
      a.cross(b);
      expect(a.x).toBeCloseTo(0, 10);
      expect(a.y).toBeCloseTo(0, 10);
      expect(a.z).toBeCloseTo(-1, 10);
    });

    it('возвращает this для цепочки', () => {
      const a = new Vector3(1, 0, 0);
      const result = a.cross(new Vector3(0, 1, 0));
      expect(result).toBe(a);
    });
  });
});
