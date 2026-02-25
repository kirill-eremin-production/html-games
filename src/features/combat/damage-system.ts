import { COMBAT_CONSTANTS } from '@/shared/config/combat';
import { combatConfig } from '@/shared/config/combat-session';
import { PLAYER_CONFIG } from '@/shared/config/player';
import { Vector3, disposeNode, removeFromScene } from '@/shared/core';
import { world } from '@/shared/ecs/combat-world';
import { getEntityByMesh, unregisterMeshEntity } from '@/shared/ecs/entity-index';
import { emit, off, on } from '@/shared/events';
import type { EventMap } from '@/shared/events';
import { state } from '@/shared/state';
import type { Fighter } from '@/shared/types';
import type { GameSystem } from '@/shared/types';

import { SubsystemComponent } from '@/entities/combat/subsystem';
import { queryAllCapitalShips } from '@/entities/ecs-queries';
import { MeshComponent } from '@/entities/rendering/mesh';

import { showMessage } from '@/features/hud/hud';
import { addKillFeedEntry } from '@/features/hud/kill-feed';

import { createExplosion } from './explosions';

const C = COMBAT_CONSTANTS;

// ── Handlers ─────────────────────────────────────────────────────────────────

function handleFighterKilled(e: EventMap['fighter-killed']): void {
  const { victim, killerName, killerTeam, victimTeam, isPlayerKill } = e;

  createExplosion(victim.mesh.position.clone(), 3);

  // Уничтожаем ECS entity через EntityIndex (O(1)) — ДО unregister
  const entityId = getEntityByMesh(victim.mesh);
  unregisterMeshEntity(victim.mesh);
  if (entityId !== null) world.destroyEntity(entityId);

  disposeNode(victim.mesh);

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
    showMessage(`+${C.fighterKillScore} | +10% HP`, 1.5);
  }

  state.respawnQueue.push({
    team: victimTeam,
    timer: combatConfig.respawnDelay,
  });
}

function handleSubsystemDestroyed(e: EventMap['subsystem-destroyed']): void {
  const { subsystemEntity, parentEntity, subsystemName } = e;

  // Получаем мировую позицию подсистемы для взрыва
  const subComponent = world.getComponent(subsystemEntity, SubsystemComponent);
  const parentMesh = world.getComponent(parentEntity, MeshComponent);
  if (subComponent && parentMesh) {
    const worldPos = subComponent.center.clone().applyMatrix4(parentMesh.mesh.getWorldMatrix());
    createExplosion(worldPos, C.subsystemExplosionSize);
  }

  state.score += C.subsystemKillScore;
  showMessage(`${subsystemName} УНИЧТОЖЕНА! +${C.subsystemKillScore}`, 2);
}

function handleCapitalShipDestroyed(e: EventMap['capital-ship-destroyed']): void {
  const { shipEntity } = e;

  const shipMesh = world.getComponent(shipEntity, MeshComponent);
  if (!shipMesh) return;

  createExplosion(shipMesh.mesh.position.clone(), C.mainExplosionSize);
  for (let k = 0; k < C.secondaryExplosionCount; k++) {
    setTimeout(() => {
      if (!shipMesh.mesh.parent) return;
      const offset = new Vector3(
        (Math.random() - 0.5) * C.secondaryExplosionSpread.x,
        (Math.random() - 0.5) * C.secondaryExplosionSpread.y,
        (Math.random() - 0.5) * C.secondaryExplosionSpread.z,
      );
      createExplosion(shipMesh.mesh.position.clone().add(offset), C.secondaryExplosionSize);
    }, k * C.secondaryExplosionDelay);
  }
  setTimeout(() => {
    removeFromScene(shipMesh.mesh);
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
