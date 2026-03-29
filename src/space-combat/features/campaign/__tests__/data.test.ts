import {
  STAR_SYSTEMS,
  generateContracts,
  getDistanceBetween,
  getFuelCost,
  getSystem,
  getSystemDetail,
  mulberry32,
} from '../data';

describe('mulberry32', () => {
  it('детерминированная последовательность для одного сида', () => {
    const rng1 = mulberry32(42);
    const rng2 = mulberry32(42);
    const seq1 = Array.from({ length: 20 }, () => rng1());
    const seq2 = Array.from({ length: 20 }, () => rng2());
    expect(seq1).toEqual(seq2);
  });

  it('разные сиды дают разные последовательности', () => {
    const rng1 = mulberry32(1);
    const rng2 = mulberry32(2);
    const seq1 = Array.from({ length: 10 }, () => rng1());
    const seq2 = Array.from({ length: 10 }, () => rng2());
    expect(seq1).not.toEqual(seq2);
  });

  it('значения всегда в [0, 1)', () => {
    const rng = mulberry32(12345);
    for (let i = 0; i < 1000; i++) {
      const val = rng();
      expect(val).toBeGreaterThanOrEqual(0);
      expect(val).toBeLessThan(1);
    }
  });
});

describe('STAR_SYSTEMS', () => {
  it('генерирует значительное количество систем', () => {
    // Генератор пытается создать 1000, но часть отсеивается
    // из-за минимальной дистанции и радиусных ограничений
    expect(STAR_SYSTEMS.length).toBeGreaterThan(500);
    expect(STAR_SYSTEMS.length).toBeLessThanOrEqual(1000);
  });

  it('первая система — Солярис с id=solaris', () => {
    expect(STAR_SYSTEMS[0].id).toBe('solaris');
    expect(STAR_SYSTEMS[0].name).toBe('Солярис');
  });

  it('все системы имеют хотя бы одно соединение', () => {
    for (const sys of STAR_SYSTEMS) {
      expect(sys.connections.length).toBeGreaterThan(0);
    }
  });

  it('граф связен (BFS от solaris достигает всех)', () => {
    const visited = new Set<string>();
    const queue = ['solaris'];
    visited.add('solaris');
    while (queue.length > 0) {
      const curr = queue.shift()!;
      for (const connId of getSystem(curr).connections) {
        if (!visited.has(connId)) {
          visited.add(connId);
          queue.push(connId);
        }
      }
    }
    expect(visited.size).toBe(STAR_SYSTEMS.length);
  });
});

describe('getDistanceBetween / getFuelCost', () => {
  it('расстояние от системы до самой себя = 0', () => {
    expect(getDistanceBetween('solaris', 'solaris')).toBe(0);
  });

  it('расстояние симметрично', () => {
    const d1 = getDistanceBetween('solaris', 'sys-1');
    const d2 = getDistanceBetween('sys-1', 'solaris');
    expect(d1).toBeCloseTo(d2);
  });

  it('расстояние — это евклидово расстояние', () => {
    const a = getSystem('solaris');
    const b = getSystem('sys-1');
    const dx = a.position[0] - b.position[0];
    const dy = a.position[1] - b.position[1];
    const dz = a.position[2] - b.position[2];
    const expected = Math.sqrt(dx * dx + dy * dy + dz * dz);
    expect(getDistanceBetween('solaris', 'sys-1')).toBeCloseTo(expected);
  });

  it('стоимость топлива округляется вверх (ceil)', () => {
    const dist = getDistanceBetween('solaris', 'sys-1');
    const cost = getFuelCost('solaris', 'sys-1');
    // FUEL_DISTANCE_RATIO = 5
    expect(cost).toBe(Math.max(1, Math.ceil(dist / 5)));
  });

  it('стоимость топлива минимум 1', () => {
    expect(getFuelCost('solaris', 'solaris')).toBe(1);
  });
});

describe('getSystemDetail', () => {
  it('детерминированно генерирует планеты для системы', () => {
    const detail1 = getSystemDetail('sys-5');
    const detail2 = getSystemDetail('sys-5');
    expect(detail1.planets.length).toBe(detail2.planets.length);
    for (let i = 0; i < detail1.planets.length; i++) {
      expect(detail1.planets[i].name).toBe(detail2.planets[i].name);
      expect(detail1.planets[i].type).toBe(detail2.planets[i].type);
      expect(detail1.planets[i].size).toBe(detail2.planets[i].size);
    }
  });

  it('генерирует от 2 до 8 планет', () => {
    const detail = getSystemDetail('sys-10');
    expect(detail.planets.length).toBeGreaterThanOrEqual(2);
    expect(detail.planets.length).toBeLessThanOrEqual(8);
  });

  it('Солярис всегда имеет станцию', () => {
    const detail = getSystemDetail('solaris');
    expect(detail.hasStation).toBe(true);
  });

  it('разные системы генерируют разные детали', () => {
    const d1 = getSystemDetail('sys-1');
    const d2 = getSystemDetail('sys-2');
    // Маловероятно, что два разных сида дадут одинаковые планеты
    const names1 = d1.planets.map((p) => p.name).join(',');
    const names2 = d2.planets.map((p) => p.name).join(',');
    expect(names1).not.toBe(names2);
  });
});

describe('generateContracts', () => {
  it('генерирует 3 контракта разной сложности', () => {
    const contracts = generateContracts('solaris');
    expect(contracts.length).toBe(3);
    expect(contracts[0].difficulty).toBe('easy');
    expect(contracts[1].difficulty).toBe('medium');
    expect(contracts[2].difficulty).toBe('hard');
  });

  it('цели контрактов — существующие системы', () => {
    const contracts = generateContracts('solaris');
    for (const c of contracts) {
      expect(getSystem(c.targetSystemId)).toBeDefined();
    }
  });

  it('цели контрактов — не текущая система', () => {
    const contracts = generateContracts('solaris');
    for (const c of contracts) {
      expect(c.targetSystemId).not.toBe('solaris');
    }
  });
});
