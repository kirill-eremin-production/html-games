import { playHitSound } from '@/shared/audio';
import { PLAYER_CONFIG } from '@/shared/config/player';
import { world } from '@/shared/ecs/combat-world';
import { emit } from '@/shared/events';
import { state } from '@/shared/state';
import type { GameSystem } from '@/shared/types';

import { FighterAIComponent } from '@/entities/ai/fighter-ai';
import { CapitalShipComponent } from '@/entities/combat/capital-ship';
import { SubsystemComponent } from '@/entities/combat/subsystem';
import { querySubsystemsByParent } from '@/entities/ecs-queries';
import { MeshComponent } from '@/entities/rendering/mesh';
import { DamageBufferComponent } from '@/entities/stats/damage-buffer';
import { HealthComponent } from '@/entities/stats/health';
import { NameComponent } from '@/entities/stats/name';
import { ParentEntityComponent } from '@/entities/stats/parent-entity';
import { PlayerTagComponent } from '@/entities/stats/player-tag';
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

      // Игрок: применяем урон с учётом неуязвимости, не уничтожаем сущность
      if (world.hasComponent(entity, PlayerTagComponent)) {
        if (state.invulnTimer > 0) {
          buf.hits.length = 0;
          continue;
        }
        for (const hit of buf.hits) {
          health.current -= hit.amount;
          state.damageFlash = PLAYER_CONFIG.damageFlashDuration;
          state.noDamageTimer = 0;
          state.lastAttacker = hit.shooterName || '?';
          playHitSound();
          emit('player-hit', { damage: hit.amount, attackerName: hit.shooterName || '?' });
        }
        buf.hits.length = 0;
        continue;
      }

      for (const hit of buf.hits) {
        health.current -= hit.amount;

        if (health.current <= 0) {
          // Истребители обрабатываются через destroyFighter
          if (world.hasComponent(entity, FighterAIComponent)) {
            const victimTeam = team.team as 'ally' | 'enemy';
            const isPlayerKill = hit.shooterTeam === 'player';

            destroyFighter(
              { mesh: mesh.mesh, name: name.name } as Parameters<typeof destroyFighter>[0],
              hit.shooterName || '?',
              hit.shooterTeam,
              victimTeam === 'enemy',
              isPlayerKill,
            );
            break;
          }

          // Подсистемы кораблей обрабатываются отдельно
          if (world.hasComponent(entity, SubsystemComponent)) {
            health.current = 0;
            const parent = world.getComponent(entity, ParentEntityComponent);
            if (!parent) break;

            emit('subsystem-destroyed', {
              subsystemEntity: entity,
              parentEntity: parent.parentId,
              subsystemName: name.name,
              killerName: hit.shooterName || '?',
            });

            // Проверяем, все ли подсистемы мертвы → корабль уничтожен
            const siblings = querySubsystemsByParent(parent.parentId);
            if (siblings.every((s) => s.health.current <= 0)) {
              const capitalShip = world.getComponent(parent.parentId, CapitalShipComponent);
              if (capitalShip) {
                capitalShip.alive = false;
                emit('capital-ship-destroyed', {
                  shipEntity: parent.parentId,
                  killerName: hit.shooterName || '?',
                });
              }
            }
            break;
          }
        }
      }
      buf.hits.length = 0;
    }
  },
};
