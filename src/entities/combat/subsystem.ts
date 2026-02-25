import type { Vector3 } from '@/shared/core';
import type { SubsystemType } from '@/shared/types';

export type { SubsystemType } from '@/shared/types';

/** Данные подсистемы капитального корабля */
export class SubsystemComponent {
  constructor(
    public subsystemType: SubsystemType,
    /** Центр подсистемы в локальных координатах корабля */
    public center: Vector3,
    /** Радиус хитбокса */
    public radius: number,
  ) {}
}
