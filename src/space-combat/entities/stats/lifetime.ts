/** Автоматическое удаление сущности через N секунд */
export class LifetimeComponent {
  constructor(public remaining: number) {}
}
