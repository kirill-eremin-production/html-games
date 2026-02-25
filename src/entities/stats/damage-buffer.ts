export interface DamageHit {
  amount: number;
  shooterName: string;
  shooterTeam: 'player' | 'ally' | 'enemy';
}

/** Буфер урона — накапливает хиты за кадр */
export class DamageBufferComponent {
  hits: DamageHit[] = [];
}
