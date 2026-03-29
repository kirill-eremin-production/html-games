/**
 * ECS-компонент ИИ для интерьерных врагов.
 *
 * Простой state machine: patrol → chase → attack.
 * Враги патрулируют между точками, обнаруживают игрока через raycast,
 * атакуют по таймеру.
 */
import { Vector3 } from '@/shared/core/vector3';

export type InteriorAIState = 'patrol' | 'chase' | 'attack' | 'dead';

export class InteriorAIComponent {
  constructor(
    /** Текущее состояние ИИ */
    public state: InteriorAIState,
    /** Точки патрулирования */
    public patrolPoints: Vector3[],
    /** Индекс текущей точки патруля */
    public currentPointIdx: number,
    /** Дальность обнаружения игрока (м) */
    public detectionRange: number,
    /** Дальность атаки (м) */
    public attackRange: number,
    /** Текущий кулдаун атаки */
    public attackCooldown: number,
    /** Интервал между атаками (с) */
    public attackRate: number,
    /** Урон за атаку */
    public damage: number,
    /** Последняя известная позиция игрока */
    public lastKnownPlayerPos: Vector3 | null,
    /** Таймер преследования после потери видимости (с) */
    public alertTimer: number,
  ) {}
}
