import { World } from '../world';

class Position {
  constructor(
    public x: number,
    public y: number,
  ) {}
}

class Health {
  constructor(
    public current: number,
    public max: number,
  ) {}
}

class Velocity {
  constructor(public speed: number) {}
}

describe('World', () => {
  let world: World;

  beforeEach(() => {
    world = new World();
  });

  // ── createEntity ──────────────────────────────────────────────────────

  describe('createEntity', () => {
    it('возвращает уникальные ID', () => {
      const a = world.createEntity();
      const b = world.createEntity();
      const c = world.createEntity();
      expect(a).not.toBe(b);
      expect(b).not.toBe(c);
    });

    it('новая сущность считается живой', () => {
      const id = world.createEntity();
      expect(world.isAlive(id)).toBe(true);
    });
  });

  // ── addComponent / getComponent ───────────────────────────────────────

  describe('addComponent / getComponent', () => {
    it('добавляет и читает компонент', () => {
      const id = world.createEntity();
      world.addComponent(id, new Position(10, 20));
      const pos = world.getComponent(id, Position);
      expect(pos).toBeDefined();
      expect(pos!.x).toBe(10);
      expect(pos!.y).toBe(20);
    });

    it('возвращает undefined для отсутствующего компонента', () => {
      const id = world.createEntity();
      expect(world.getComponent(id, Position)).toBeUndefined();
    });

    it('перезаписывает компонент того же типа', () => {
      const id = world.createEntity();
      world.addComponent(id, new Position(1, 2));
      world.addComponent(id, new Position(3, 4));
      expect(world.getComponent(id, Position)!.x).toBe(3);
    });

    it('разные типы компонентов не конфликтуют', () => {
      const id = world.createEntity();
      world.addComponent(id, new Position(1, 2));
      world.addComponent(id, new Health(100, 100));
      expect(world.getComponent(id, Position)!.x).toBe(1);
      expect(world.getComponent(id, Health)!.current).toBe(100);
    });
  });

  // ── removeComponent ───────────────────────────────────────────────────

  describe('removeComponent', () => {
    it('удаляет компонент', () => {
      const id = world.createEntity();
      world.addComponent(id, new Position(1, 2));
      world.removeComponent(id, Position);
      expect(world.getComponent(id, Position)).toBeUndefined();
    });

    it('не падает при удалении несуществующего компонента', () => {
      const id = world.createEntity();
      expect(() => world.removeComponent(id, Position)).not.toThrow();
    });
  });

  // ── hasComponent ──────────────────────────────────────────────────────

  describe('hasComponent', () => {
    it('true если компонент есть', () => {
      const id = world.createEntity();
      world.addComponent(id, new Position(0, 0));
      expect(world.hasComponent(id, Position)).toBe(true);
    });

    it('false если компонента нет', () => {
      const id = world.createEntity();
      expect(world.hasComponent(id, Position)).toBe(false);
    });
  });

  // ── destroyEntity ────────────────────────────────────────────────────

  describe('destroyEntity', () => {
    it('помечает сущность как мёртвую', () => {
      const id = world.createEntity();
      world.destroyEntity(id);
      expect(world.isAlive(id)).toBe(false);
    });

    it('удаляет все компоненты сущности', () => {
      const id = world.createEntity();
      world.addComponent(id, new Position(1, 2));
      world.addComponent(id, new Health(50, 50));
      world.destroyEntity(id);
      expect(world.getComponent(id, Position)).toBeUndefined();
      expect(world.getComponent(id, Health)).toBeUndefined();
    });

    it('не влияет на другие сущности', () => {
      const a = world.createEntity();
      const b = world.createEntity();
      world.addComponent(a, new Position(1, 2));
      world.addComponent(b, new Position(3, 4));
      world.destroyEntity(a);
      expect(world.getComponent(b, Position)!.x).toBe(3);
      expect(world.isAlive(b)).toBe(true);
    });
  });

  // ── query ─────────────────────────────────────────────────────────────

  describe('query', () => {
    it('возвращает сущности со всеми указанными компонентами', () => {
      const a = world.createEntity();
      world.addComponent(a, new Position(1, 2));
      world.addComponent(a, new Health(50, 50));

      const b = world.createEntity();
      world.addComponent(b, new Position(3, 4));
      // b не имеет Health

      const results = world.query(Position, Health);
      expect(results).toHaveLength(1);
      expect(results[0].entity).toBe(a);
      const [pos, hp] = results[0].components;
      expect(pos.x).toBe(1);
      expect(hp.current).toBe(50);
    });

    it('возвращает пустой массив если нет совпадений', () => {
      const id = world.createEntity();
      world.addComponent(id, new Position(1, 2));
      const results = world.query(Health);
      expect(results).toHaveLength(0);
    });

    it('возвращает пустой массив для пустого запроса', () => {
      expect(world.query()).toHaveLength(0);
    });

    it('не включает мёртвые сущности', () => {
      const a = world.createEntity();
      world.addComponent(a, new Position(1, 2));
      world.destroyEntity(a);

      const results = world.query(Position);
      expect(results).toHaveLength(0);
    });

    it('запрос по одному компоненту', () => {
      const a = world.createEntity();
      world.addComponent(a, new Position(1, 2));
      const b = world.createEntity();
      world.addComponent(b, new Position(3, 4));

      const results = world.query(Position);
      expect(results).toHaveLength(2);
    });

    it('запрос по трём компонентам', () => {
      const a = world.createEntity();
      world.addComponent(a, new Position(1, 2));
      world.addComponent(a, new Health(50, 50));
      world.addComponent(a, new Velocity(10));

      const b = world.createEntity();
      world.addComponent(b, new Position(3, 4));
      world.addComponent(b, new Health(30, 30));
      // b не имеет Velocity

      const results = world.query(Position, Health, Velocity);
      expect(results).toHaveLength(1);
      expect(results[0].entity).toBe(a);
    });
  });

  // ── getAliveEntities ──────────────────────────────────────────────────

  describe('getAliveEntities', () => {
    it('возвращает все живые сущности', () => {
      const a = world.createEntity();
      const b = world.createEntity();
      world.destroyEntity(a);

      const alive = world.getAliveEntities();
      expect(alive).toContain(b);
      expect(alive).not.toContain(a);
    });
  });

  // ── clear ─────────────────────────────────────────────────────────────

  describe('clear', () => {
    it('удаляет все сущности и компоненты', () => {
      const a = world.createEntity();
      world.addComponent(a, new Position(1, 2));
      world.clear();

      expect(world.isAlive(a)).toBe(false);
      expect(world.getAliveEntities()).toHaveLength(0);
    });

    it('после clear можно создавать новые сущности', () => {
      world.createEntity();
      world.clear();
      const id = world.createEntity();
      expect(world.isAlive(id)).toBe(true);
    });
  });

  // ── мутация компонентов ───────────────────────────────────────────────

  describe('мутация компонентов', () => {
    it('компоненты мутабельны — изменения сохраняются', () => {
      const id = world.createEntity();
      world.addComponent(id, new Health(100, 100));
      const hp = world.getComponent(id, Health)!;
      hp.current = 50;
      expect(world.getComponent(id, Health)!.current).toBe(50);
    });

    it('query возвращает те же экземпляры — мутация через query работает', () => {
      const id = world.createEntity();
      world.addComponent(id, new Position(0, 0));
      world.addComponent(id, new Health(100, 100));

      const results = world.query(Position, Health);
      results[0].components[1].current = 25;
      expect(world.getComponent(id, Health)!.current).toBe(25);
    });
  });
});
