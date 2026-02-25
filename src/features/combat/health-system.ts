import { world } from '@/shared/ecs/combat-world';
import type { GameSystem } from '@/shared/types';

import { FighterAIComponent } from '@/entities/ai/fighter-ai';
import { MeshComponent } from '@/entities/rendering/mesh';
import { DamageBufferComponent } from '@/entities/stats/damage-buffer';
import { HealthComponent } from '@/entities/stats/health';
import { NameComponent } from '@/entities/stats/name';
import { TeamComponent } from '@/entities/stats/team';

import { destroyFighter } from './damage-system';

/** Применяет накопленный урон из DamageBuffer и обрабатывает смерть */
export const healthSystem: GameSystem = {
  id: 'health',
  update() {
    const entities = world.query(
      HealthComponent,
      DamageBufferComponent,
      MeshComponent,
      TeamComponent,
      NameComponent,
    );

    for (const {
      entity,
      components: [health, buf, mesh, team, name],
    } of entities) {
      if (buf.hits.length === 0) continue;

      for (const hit of buf.hits) {
        health.current -= hit.amount;

        if (health.current <= 0) {
          // Только истребители обрабатываются через destroyFighter
          if (!world.hasComponent(entity, FighterAIComponent)) continue;

          const victimTeam = team.team as 'ally' | 'enemy';
          const isPlayerKill = hit.shooterTeam === 'player';

          // Создаём минимальный Fighter-like для совместимости с damageSystem
          destroyFighter(
            { mesh: mesh.mesh, name: name.name } as Parameters<typeof destroyFighter>[0],
            hit.shooterName || '?',
            hit.shooterTeam,
            victimTeam === 'enemy',
            isPlayerKill,
          );
          break;
        }
      }
      buf.hits.length = 0;
    }
  },
};
