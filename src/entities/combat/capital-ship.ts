import type { Subsystem } from '@/shared/types';

/** Данные капитального корабля */
export class CapitalShipComponent {
  constructor(
    public subsystems: Subsystem[],
    public alive: boolean,
    public turretTimer: number,
  ) {}
}
