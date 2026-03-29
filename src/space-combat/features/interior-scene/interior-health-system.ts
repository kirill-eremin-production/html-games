/**
 * Система здоровья для интерьерных врагов.
 *
 * Применяет урон из DamageBufferComponent → HealthComponent.
 * При здоровье ≤ 0 — скрывает mesh.
 */
import { world } from '@/shared/ecs/combat-world';
import { unregisterMeshEntity } from '@/shared/ecs/entity-index';
import type { GameSystem } from '@/shared/types';

import { InteriorAIComponent } from '@/entities/ai/interior-ai-component';
import { DamageBufferComponent, HealthComponent, MeshComponent } from '@/entities/components';

export function createInteriorHealthSystem(): GameSystem {
  return {
    id: 'interior-health',

    update() {
      const entities = world.query(HealthComponent, DamageBufferComponent, MeshComponent);

      for (const {
        entity,
        components: [health, buf, meshComp],
      } of entities) {
        // Применить урон
        for (const hit of buf.hits) {
          health.current -= hit.amount;
        }
        buf.hits.length = 0;

        // Смерть
        if (health.current <= 0 && meshComp.mesh.isEnabled()) {
          meshComp.mesh.setEnabled(false);
          unregisterMeshEntity(meshComp.mesh);

          // Если есть AI-компонент — пометить dead
          const ai = world.getComponent(entity, InteriorAIComponent);
          if (ai) ai.state = 'dead';
        }
      }
    },
  };
}
