import { Vector3 as BVector3, Matrix } from '@babylonjs/core/Maths/math.vector';

import { type ProjectionCamera, vec3Project, vec3Unproject } from '@/shared/core/math';
import { Vector3 } from '@/shared/core/vector3';

/**
 * Создаёт mock-камеру с фиксированными матрицами вида и проекции.
 *
 * View-матрица: камера в позиции `eye`, смотрит на `target`, up = Y.
 * Projection-матрица: перспективная проекция с заданным FOV и соотношением сторон.
 */
function createMockCamera(
  eye: BVector3,
  target: BVector3,
  fov = Math.PI / 4,
  aspect = 2, // 1920/960 ≈ 2
  near = 0.1,
  far = 1000,
): ProjectionCamera {
  const view = Matrix.LookAtLH(eye, target, BVector3.Up());
  const proj = Matrix.PerspectiveFovLH(fov, aspect, near, far);
  return {
    getViewMatrix: () => view,
    getProjectionMatrix: () => proj,
  };
}

const W = 1920;
const H = 960;

describe('vec3Project', () => {
  it('точка перед камерой проецируется в центр экрана', () => {
    const cam = createMockCamera(new BVector3(0, 0, 0), new BVector3(0, 0, 1));
    const worldPos = new Vector3(0, 0, 10);
    const tmp = new Vector3();

    const scr = vec3Project(worldPos, cam, W, H, tmp);

    expect(scr.x).toBeCloseTo(W / 2);
    expect(scr.y).toBeCloseTo(H / 2);
    expect(scr.z).toBeLessThan(1);
  });

  it('точка правее центра проецируется в правую половину экрана', () => {
    const cam = createMockCamera(new BVector3(0, 0, 0), new BVector3(0, 0, 1));
    const worldPos = new Vector3(2, 0, 10);
    const tmp = new Vector3();

    const scr = vec3Project(worldPos, cam, W, H, tmp);

    expect(scr.x).toBeGreaterThan(W / 2);
    expect(scr.y).toBeCloseTo(H / 2, 0);
  });

  it('точка выше центра проецируется в верхнюю половину экрана', () => {
    const cam = createMockCamera(new BVector3(0, 0, 0), new BVector3(0, 0, 1));
    const worldPos = new Vector3(0, 2, 10);
    const tmp = new Vector3();

    const scr = vec3Project(worldPos, cam, W, H, tmp);

    expect(scr.x).toBeCloseTo(W / 2, 0);
    expect(scr.y).toBeLessThan(H / 2); // экранный Y инвертирован
  });

  it('точка за камерой имеет z > 1', () => {
    const cam = createMockCamera(new BVector3(0, 0, 0), new BVector3(0, 0, 1));
    const worldPos = new Vector3(0, 0, -10);
    const tmp = new Vector3();

    const scr = vec3Project(worldPos, cam, W, H, tmp);

    expect(scr.z).toBeGreaterThan(1);
  });

  it('не мутирует входной worldPos', () => {
    const cam = createMockCamera(new BVector3(0, 0, 0), new BVector3(0, 0, 1));
    const worldPos = new Vector3(3, 4, 5);
    const tmp = new Vector3();

    vec3Project(worldPos, cam, W, H, tmp);

    expect(worldPos.x).toBe(3);
    expect(worldPos.y).toBe(4);
    expect(worldPos.z).toBe(5);
  });
});

describe('vec3Unproject', () => {
  it('unproject(0,0,0.5) для камеры по +Z возвращает точку перед камерой', () => {
    const cam = createMockCamera(new BVector3(0, 0, 0), new BVector3(0, 0, 1));
    const ndc = new Vector3(0, 0, 0.5);

    const result = vec3Unproject(ndc, cam);

    expect(result.x).toBeCloseTo(0);
    expect(result.y).toBeCloseTo(0);
    expect(result.z).toBeGreaterThan(0);
  });

  it('мутирует входной вектор и возвращает его же', () => {
    const cam = createMockCamera(new BVector3(0, 0, 0), new BVector3(0, 0, 1));
    const vec = new Vector3(0, 0, 0.5);

    const result = vec3Unproject(vec, cam);

    expect(result).toBe(vec);
  });

  it('project → unproject — roundtrip возвращает исходную точку', () => {
    const cam = createMockCamera(new BVector3(0, 0, 0), new BVector3(0, 0, 1));
    const original = new Vector3(3, 2, 15);
    const tmp = new Vector3();

    // Project: world → screen
    const scr = vec3Project(original, cam, W, H, tmp);

    // Screen → NDC
    const ndc = new Vector3((scr.x / W) * 2 - 1, -((scr.y / H) * 2 - 1), scr.z);

    // Unproject: NDC → world
    vec3Unproject(ndc, cam);

    expect(ndc.x).toBeCloseTo(original.x, 3);
    expect(ndc.y).toBeCloseTo(original.y, 3);
    expect(ndc.z).toBeCloseTo(original.z, 3);
  });

  it('roundtrip работает для смещённой камеры', () => {
    const cam = createMockCamera(new BVector3(10, 5, -20), new BVector3(10, 5, 0));
    const original = new Vector3(12, 7, -5);
    const tmp = new Vector3();

    const scr = vec3Project(original, cam, W, H, tmp);

    const ndc = new Vector3((scr.x / W) * 2 - 1, -((scr.y / H) * 2 - 1), scr.z);
    vec3Unproject(ndc, cam);

    expect(ndc.x).toBeCloseTo(original.x, 3);
    expect(ndc.y).toBeCloseTo(original.y, 3);
    expect(ndc.z).toBeCloseTo(original.z, 3);
  });
});
