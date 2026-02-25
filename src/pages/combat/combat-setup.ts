import { combatConfig } from '@/shared/config/combat-session';
import { resetWorld } from '@/shared/ecs/combat-world';
import { camera } from '@/shared/engine';
import { refs } from '@/shared/refs/app-refs';
import { parseHexColor, settings } from '@/shared/settings';
import { resetNameCounters, state } from '@/shared/state';

import { createFighter } from '@/entities/objects/space-ships';

import { spawnCapitalShips } from '@/features/combat/capital-ship-system';
import { spawnAlly, spawnEnemy } from '@/features/combat/spawner-system';
import { playerPlane, resetPlayerTransform } from '@/features/flight/player-system';
import { resetCachedShipHTML } from '@/features/hud/hud';
import { clearKillFeed } from '@/features/hud/kill-feed';

export function resetCombatState(): void {
  resetWorld();
  state.killFeed = [];
  state.phase = 1;
  state.score = 0;
  state.lives = 5;
  state.playerHealth = 100;
  state.totalEnemyKills = 0;
  state.lastAttacker = '';
  state.baseSpeed = 80;
  state.boostSpeed = 160;
  state.flightModel = 'combat';
  state.speed = state.baseSpeed;
  state.shootCooldown = 0;
  state.messageTimer = 0;
  state.damageFlash = 0;
  state.noDamageTimer = 0;
  state.invulnTimer = 0;
  state.keys = {};
  state.mouseX = 0;
  state.mouseY = 0;
  state.lockedTarget = null;
  state.explorationTime = 0;
  resetCachedShipHTML();
  resetNameCounters();
  clearKillFeed();

  resetPlayerTransform();
  camera.position.set(-10.5, 3.75, 0);
  camera.setTarget(playerPlane.position);

  // Rebuild player model with current settings colors
  if (refs.playerModel) refs.playerModel.dispose();
  refs.playerModel = createFighter(
    parseHexColor(settings.colors.playerBody),
    parseHexColor(settings.colors.playerExhaust),
  );
  refs.playerModel.parent = playerPlane;
}

export function spawnCombatEntities(): void {
  const csCount = Math.min(combatConfig.capitalShips, 5);
  settings.counts.capitalShips = csCount;
  spawnCapitalShips();

  const allyCount = combatConfig.allies;
  for (let i = 0; i < allyCount; i++) spawnAlly(playerPlane.position);

  const enemyCount = combatConfig.enemies;
  for (let i = 0; i < enemyCount; i++) {
    const shipIdx = i % Math.max(1, state.capitalShips.length);
    spawnEnemy(state.capitalShips[shipIdx].mesh.position);
  }
}
