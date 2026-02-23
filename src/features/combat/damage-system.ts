import { COMBAT_CONSTANTS } from '@/shared/config/combat';
import { combatConfig } from '@/shared/config/combat-session';
import { PLAYER_CONFIG } from '@/shared/config/player';
import { Vector3, removeFromScene } from '@/shared/core';
import { emit, off, on } from '@/shared/events';
import type { EventMap } from '@/shared/events';
import { state } from '@/shared/state';
import type { CapitalShip, Fighter, Subsystem } from '@/shared/types';
import { showMessage } from '@/features/hud/hud';
import { addKillFeedEntry } from '@/features/hud/kill-feed';
import { disposeObject } from '@/shared/lib/dispose';

import { createExplosion } from './explosions';
import type { GameSystem } from '@/shared/types';

const C = COMBAT_CONSTANTS;

// ── Handlers ─────────────────────────────────────────────────────────────────

function handleFighterKilled(e: EventMap['fighter-killed']): void {
  const { victim, killerName, killerTeam, victimTeam, isPlayerKill } = e;

  createExplosion(victim.mesh.position.clone(), 3);
  disposeObject(victim.mesh);

  // Remove from array
  const arr = victimTeam === 'enemy' ? state.enemies : state.allies;
  const idx = arr.indexOf(victim);
  if (idx !== -1) arr.splice(idx, 1);

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
  const { subsystem, ship } = e;

  createExplosion(
    subsystem.center.clone().applyMatrix4(ship.mesh.matrixWorld),
    C.subsystemExplosionSize,
  );
  state.score += C.subsystemKillScore;
  showMessage(`${subsystem.name} УНИЧТОЖЕНА! +${C.subsystemKillScore}`, 2);

  // Check if whole ship is dead
  if (ship.subsystems.every((s) => s.health <= 0)) {
    ship.alive = false;
    emit('capital-ship-destroyed', { ship, killerName: e.killerName });
  }
}

function handleCapitalShipDestroyed(e: EventMap['capital-ship-destroyed']): void {
  const { ship } = e;

  createExplosion(ship.mesh.position.clone(), C.mainExplosionSize);
  for (let k = 0; k < C.secondaryExplosionCount; k++) {
    setTimeout(() => {
      if (!ship.mesh.parent) return;
      const offset = new Vector3(
        (Math.random() - 0.5) * C.secondaryExplosionSpread.x,
        (Math.random() - 0.5) * C.secondaryExplosionSpread.y,
        (Math.random() - 0.5) * C.secondaryExplosionSpread.z,
      );
      createExplosion(ship.mesh.position.clone().add(offset), C.secondaryExplosionSize);
    }, k * C.secondaryExplosionDelay);
  }
  setTimeout(() => {
    removeFromScene(ship.mesh);
  }, C.shipRemoveDelay);

  state.score += C.capitalShipKillScore;
  showMessage(`КОРАБЛЬ УНИЧТОЖЕН! +${C.capitalShipKillScore}`, 3);

  if (state.phase === 1 && state.capitalShips.every((c) => !c.alive)) {
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

export function destroySubsystem(
  subsystem: Subsystem,
  ship: CapitalShip,
  killerName: string,
): void {
  emit('subsystem-destroyed', { subsystem, ship, killerName });
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
