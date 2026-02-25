/** Данные капитального корабля */
export class CapitalShipComponent {
  constructor(
    public alive: boolean,
    public turretTimer: number,
    public shipIndex: number = 0,
  ) {}
}
