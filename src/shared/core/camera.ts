import { FreeCamera } from '@babylonjs/core/Cameras/freeCamera';
import { Vector3 as BVector3 } from '@babylonjs/core/Maths/math.vector';
import type { Scene } from '@babylonjs/core/scene';

import { Vector3 } from './vector3';

let _camId = 0;

interface CameraOptions {
  /** Угол обзора по вертикали в градусах (по умолчанию 50). */
  fov?: number;
  /** Ближняя плоскость отсечения — объекты ближе не рисуются (по умолчанию 0.1). */
  near?: number;
  /** Дальняя плоскость отсечения — объекты дальше не рисуются (по умолчанию 2000). */
  far?: number;
  /** BJS-сцена, к которой привязывается камера. */
  scene?: Scene;
}

/**
 * Игровая камера на основе BJS `FreeCamera`.
 *
 * Отключает встроенное управление BJS (мышь, клавиатура) — игра двигает камеру сама.
 * Подставляет расширенный {@link Vector3} в `position` и `upVector`,
 * чтобы можно было писать `camera.position.lerp(...).normalize()` по цепочке.
 */
export class PerspectiveCamera extends FreeCamera {
  constructor({ fov = 50, near = 0.1, far = 2000, scene }: CameraOptions = {}) {
    super(`camera_${_camId++}`, BVector3.Zero(), scene ?? undefined);

    this.inputs.clear();

    this.minZ = near;
    this.maxZ = far;
    this.fov = (fov * Math.PI) / 180;

    // Заменяем BJS Vector3 на расширенный Vector3 для поддержки chaining
    this.position = new Vector3();
    this.upVector = new Vector3(0, 1, 0);
  }

  override get position(): Vector3 {
    return super.position as Vector3;
  }

  override set position(v: Vector3) {
    super.position = v;
  }

  override get upVector(): Vector3 {
    return super.upVector as Vector3;
  }

  override set upVector(v: Vector3) {
    super.upVector = v;
  }
}
