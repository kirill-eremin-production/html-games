import type { Vector3 } from '@/shared/core';

/** Состояние ИИ истребителя */
export class FighterAIComponent {
  constructor(
    public state: 'chase' | 'evade' | 'orbit',
    public timer: number,
    public evadeDir: Vector3,
    public target: { mesh: { position: Vector3 }; name: string } | null,
  ) {}
}
