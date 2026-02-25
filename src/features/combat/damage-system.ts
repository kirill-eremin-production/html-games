import { COMBAT_CONSTANTS } from '@/shared/config/combat';
import { combatConfig } from '@/shared/config/combat-session';
import { PLAYER_CONFIG } from '@/shared/config/player';
import { Vector3, removeFromScene } from '@/shared/core';
import { world } from '@/shared/ecs/combat-world';
import { emit, off, on } from '@/shared/events';
import type { EventMap } from '@/shared/events';
import { playerEntityId } from '@/shared/refs/player-entity';
import { state } from '@/shared/state';
import type { Fighter } from '@/shared/types';
import type { GameSystem } from '@/shared/types';

import { destroyEntityWithVisuals } from '@/entities/ecs-adapters/entity-cleanup';
import { queryAllCapitalShips } from '@/entities/ecs-queries';
import { TransformComponent } from '@/entities/physics/transform';
import { ViewComponent } from '@/entities/rendering/view';
import { HealthComponent } from '@/entities/stats/health';

import { showMessage } from '@/features/hud/hud';
import { addKillFeedEntry } from '@/features/hud/kill-feed';

import { createExplosion } from './explosions';

const C = COMBAT_CONSTANTS;

// ── Handlers ─────────────────────────────────────────────────────────────────

function handleFighterKilled(e: EventMap['fighter-killed']): void {
  const { victim, killerName, killerTeam, victimTeam, isPlayerKill } = e;

  const transform = world.getComponent(victim.entityId, TransformComponent);
  if (transform) createExplosion(transform.position.clone(), 3);

  destroyEntityWithVisuals(victim.entityId);

  addKillFeedEntry(killerName, victim.name, killerTeam, victimTeam);

  if (victimTeam === 'enemy') {
    state.totalEnemyKills++;
  }

  if (isPlayerKill) {
    state.score += C.fighterKillScore;
    state.playerHealth = Math.min(
      state.maxHealth,
      state.playerHealth + state.maxHealth * PLAYER_CONFIG.killHealthBonus,
    );

    // Синхронизируем бонус HP в ECS
    if (playerEntityId !== 0) {
      const hc = world.getComponent(playerEntityId, HealthComponent);
      if (hc) hc.current = state.playerHealth;
    }

    showMessage(`+${C.fighterKillScore} | +10% HP`, 1.5);
  }

  state.respawnQueue.push({
    team: victimTeam,
    timer: combatConfig.respawnDelay,
  });
}

function handleSubsystemDestroyed(e: EventMap['subsystem-destroyed']): void {
  const { subsystemEntity, subsystemName } = e;

  // transform.position уже содержит мировые координаты (обновлено hierarchy-system)
  const subTransform = world.getComponent(subsystemEntity, TransformComponent);
  if (subTransform) {
    createExplosion(subTransform.position.clone(), C.subsystemExplosionSize);
  }

  state.score += C.subsystemKillScore;
  showMessage(`${subsystemName} УНИЧТОЖЕНА! +${C.subsystemKillScore}`, 2);
}

function handleCapitalShipDestroyed(e: EventMap['capital-ship-destroyed']): void {
  const { shipEntity } = e;

  const shipTransform = world.getComponent(shipEntity, TransformComponent);
  const shipView = world.getComponent(shipEntity, ViewComponent);
  if (!shipTransform) return;

  createExplosion(shipTransform.position.clone(), C.mainExplosionSize);
  for (let k = 0; k < C.secondaryExplosionCount; k++) {
    setTimeout(() => {
      if (!shipView?.node.parent) return;
      const offset = new Vector3(
        (Math.random() - 0.5) * C.secondaryExplosionSpread.x,
        (Math.random() - 0.5) * C.secondaryExplosionSpread.y,
        (Math.random() - 0.5) * C.secondaryExplosionSpread.z,
      );
      createExplosion(shipTransform.position.clone().add(offset), C.secondaryExplosionSize);
    }, k * C.secondaryExplosionDelay);
  }
  setTimeout(() => {
    if (shipView) removeFromScene(shipView.node);
  }, C.shipRemoveDelay);

  state.score += C.capitalShipKillScore;
  showMessage(`КОРАБЛЬ УНИЧТОЖЕН! +${C.capitalShipKillScore}`, 3);

  if (state.phase === 1 && queryAllCapitalShips().every((cs) => !cs.capitalShip.alive)) {
    state.phase = 2;
    emit('phase-changed', { phase: 2 });
    setTimeout(() => {
      showMessage(
        `ВСЕ КОРАБЛИ УНИЧТОЖЕНЫ!\nУничтожьте ${combatConfig.killTarget} истребителей!`,
        4,
      );
    }, 3500);
  }
}

// ── Utility for bullets to call directly ─────────────────────────────────────

export function destroyFighter(
  victim: Fighter,
  killerName: string,
  killerTeam: 'player' | 'ally' | 'enemy',
  isEnemyVictim: boolean,
  isPlayerKill: boolean,
): void {
  emit('fighter-killed', {
    victim,
    killerName,
    killerTeam,
    victimTeam: isEnemyVictim ? 'enemy' : 'ally',
    isPlayerKill,
  });
}

// ── Setup / Teardown ─────────────────────────────────────────────────────────

export function setupDamageHandlers(): void {
  on('fighter-killed', handleFighterKilled);
  on('subsystem-destroyed', handleSubsystemDestroyed);
  on('capital-ship-destroyed', handleCapitalShipDestroyed);
}

export function teardownDamageHandlers(): void {
  off('fighter-killed', handleFighterKilled);
  off('subsystem-destroyed', handleSubsystemDestroyed);
  off('capital-ship-destroyed', handleCapitalShipDestroyed);
}

// ── GameSystem adapter ──────────────────────────────────────────────────────

export const damageSystem: GameSystem = {
  id: 'damage',
  init() {
    setupDamageHandlers();
  },
  update() {},
  cleanup() {
    teardownDamageHandlers();
  },
};
