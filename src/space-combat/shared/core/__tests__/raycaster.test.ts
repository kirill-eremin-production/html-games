import { Raycaster } from '../raycaster';

describe('Raycaster', () => {
  describe('setFromCamera', () => {
    it('конвертирует NDC координаты в пиксели canvas', () => {
      const raycaster = new Raycaster();
      const mockCanvas = { clientWidth: 800, clientHeight: 600 };
      const mockScene = {
        getEngine: () => ({ getRenderingCanvas: () => mockCanvas }),
        pick: jest.fn(() => ({ hit: false })),
      };
      const mockCamera = { getScene: () => mockScene };

      // NDC (0, 0) → центр canvas
      raycaster.setFromCamera({ x: 0, y: 0 }, mockCamera as any);
      raycaster.intersectObjects([], false);

      // Вызываем pick чтобы проверить координаты
      // NDC x=0 → (0+1)/2 * 800 = 400
      // NDC y=0 → (-0+1)/2 * 600 = 300
      expect(mockScene.pick).toHaveBeenCalledWith(400, 300, expect.any(Function));
    });

    it('NDC (-1, -1) → нижний-левый угол', () => {
      const raycaster = new Raycaster();
      const mockCanvas = { clientWidth: 800, clientHeight: 600 };
      const mockScene = {
        getEngine: () => ({ getRenderingCanvas: () => mockCanvas }),
        pick: jest.fn(() => ({ hit: false })),
      };
      const mockCamera = { getScene: () => mockScene };

      raycaster.setFromCamera({ x: -1, y: -1 }, mockCamera as any);
      raycaster.intersectObjects([], false);

      // NDC x=-1 → (-1+1)/2 * 800 = 0
      // NDC y=-1 → (1+1)/2 * 600 = 600
      expect(mockScene.pick).toHaveBeenCalledWith(0, 600, expect.any(Function));
    });
  });

  describe('intersectObjects', () => {
    it('возвращает null если сцена не установлена', () => {
      const raycaster = new Raycaster();
      expect(raycaster.intersectObjects([])).toBeNull();
    });

    it('возвращает null если ничего не попало', () => {
      const raycaster = new Raycaster();
      const mockScene = {
        getEngine: () => ({ getRenderingCanvas: () => ({ clientWidth: 800, clientHeight: 600 }) }),
        pick: jest.fn(() => ({ hit: false })),
      };
      raycaster.setFromCamera({ x: 0, y: 0 }, { getScene: () => mockScene } as any);

      expect(raycaster.intersectObjects([])).toBeNull();
    });

    it('возвращает объект и расстояние при попадании', () => {
      const obj: any = {
        getDescendants: jest.fn(() => []),
      };
      const raycaster = new Raycaster();
      const mockScene = {
        getEngine: () => ({ getRenderingCanvas: () => ({ clientWidth: 800, clientHeight: 600 }) }),
        pick: jest.fn(() => ({
          hit: true,
          pickedMesh: obj,
          distance: 42,
        })),
      };
      raycaster.setFromCamera({ x: 0, y: 0 }, { getScene: () => mockScene } as any);

      const result = raycaster.intersectObjects([obj], false);
      expect(result).toEqual({ object: obj, distance: 42 });
    });

    it('с recursive=true маппит дочерний меш к родителю', () => {
      const child: any = { name: 'wing' };
      const parentObj: any = {
        getDescendants: jest.fn(() => [child]),
      };
      const raycaster = new Raycaster();
      const mockScene = {
        getEngine: () => ({ getRenderingCanvas: () => ({ clientWidth: 800, clientHeight: 600 }) }),
        pick: jest.fn((_x: number, _y: number, predicate: (mesh: any) => boolean) => {
          // Симулируем клик по дочернему мешу
          if (predicate(child)) {
            return { hit: true, pickedMesh: child, distance: 10 };
          }
          return { hit: false };
        }),
      };
      raycaster.setFromCamera({ x: 0, y: 0 }, { getScene: () => mockScene } as any);

      const result = raycaster.intersectObjects([parentObj], true);
      // Клик по дочернему мешу — возвращает родителя
      expect(result?.object).toBe(parentObj);
      expect(result?.distance).toBe(10);
    });

    it('без recursive дочерние меши не засчитываются', () => {
      const child: any = { name: 'wing' };
      const parentObj: any = {
        getDescendants: jest.fn(() => [child]),
      };
      const raycaster = new Raycaster();
      const mockScene = {
        getEngine: () => ({ getRenderingCanvas: () => ({ clientWidth: 800, clientHeight: 600 }) }),
        pick: jest.fn((_x: number, _y: number, predicate: (mesh: any) => boolean) => {
          // predicate не принимает child (recursive=false)
          if (predicate(child)) {
            return { hit: true, pickedMesh: child, distance: 10 };
          }
          return { hit: false };
        }),
      };
      raycaster.setFromCamera({ x: 0, y: 0 }, { getScene: () => mockScene } as any);

      const result = raycaster.intersectObjects([parentObj], false);
      expect(result).toBeNull();
    });
  });
});
