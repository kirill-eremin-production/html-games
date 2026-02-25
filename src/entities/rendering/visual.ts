/** Тип визуального объекта */
export type VisualType = 'fighter' | 'projectile' | 'capital-ship';

/** Описание внешнего вида сущности (data-only, без ссылок на BJS) */
export class VisualComponent {
  constructor(
    public type: VisualType,
    public bodyColor: number = 0,
    public accentColor: number = 0,
    /** Вариант модели (напр. 'enemy'/'ally' для снарядов, index для кораблей) */
    public variant: string = '',
  ) {}
}
