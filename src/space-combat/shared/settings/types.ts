/** Настройки цветов юнитов и кораблей */
export interface ColorSettings {
  /** Цвет корпуса игрока */
  playerBody: string;
  /** Цвет выхлопа игрока */
  playerExhaust: string;
  /** Цвет корпуса союзников */
  allyBody: string;
  /** Цвет выхлопа союзников */
  allyExhaust: string;
  /** Цвет корпуса врагов */
  enemyBody: string;
  /** Цвет выхлопа врагов */
  enemyExhaust: string;
  /** Цвет обшивки капитальных кораблей */
  capitalHull: string;
}

/** Настройки количества юнитов */
export interface CountSettings {
  /** Количество капитальных кораблей */
  capitalShips: number;
  /** Количество союзных истребителей */
  allies: number;
  /** Количество вражеских истребителей */
  enemies: number;
}

/** Настройки выбранного чертежа корабля */
export interface BlueprintSettings {
  /** Имя выбранного blueprint (null = стандартный истребитель) */
  selectedId: string | null;
}

/** Полные игровые настройки */
export interface GameSettings {
  /** Цвета юнитов */
  colors: ColorSettings;
  /** Количество юнитов */
  counts: CountSettings;
  /** Чертёж корабля игрока */
  blueprint: BlueprintSettings;
}
