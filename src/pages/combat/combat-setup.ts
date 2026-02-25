import { combatConfig } from '@/shared/config/combat-session';
import { Quaternion, Vector3 } from '@/shared/core';
import { world } from '@/shared/ecs/combat-world';
import { resetWorld } from '@/shared/ecs/combat-world';
import { camera } from '@/shared/engine';
import { refs } from '@/shared/refs/app-refs';
import { parseHexColor, settings } from '@/shared/settings';
import { resetNameCounters, state } from '@/shared/state';

import { CapitalShipComponent } from '@/entities/combat/capital-ship';
import { createFighter } from '@/entities/objects/space-ships';
import { TransformComponent } from '@/entities/physics/transform';
import { VisualComponent } from '@/entities/rendering/visual';
import { TeamComponent } from '@/entities/stats/team';

import { spawnCapitalShips } from '@/features/combat/capital-ship-system';
import { spawnEnemy } from '@/features/combat/spawner-system';
import { playerPlane, resetPlayerTransform } from '@/features/flight/player-system';
import { resetCachedShipHTML } from '@/features/hud/hud';
import { clearKillFeed } from '@/features/hud/kill-feed';

// ── Корабль-носитель ────────────────────────────────────────────────────────

/** Позиция союзного корабля-носителя в мировых координатах */
const CARRIER_POSITION = new Vector3(-500, 0, -500);

/** Направление «наружу» от ворот ангара (в мировых координатах) */
const CARRIER_GATE_DIR = new Vector3(1, 0, 1).normalize();

/**
 * Позиция ворот ангара в мировых координатах.
 * Игрок и ИИ-истребители вылетают из этой точки.
 */
export function getCarrierGatePosition(): Vector3 {
  return CARRIER_POSITION.clone().addScaledVector(CARRIER_GATE_DIR, 200);
}

/** Направление вылета из ворот ангара */
export function getCarrierGateDirection(): Vector3 {
  return CARRIER_GATE_DIR.clone();
}

/** Спавнит союзный корабль-носитель (визуал без боевой логики) */
function spawnAllyCarrier(): void {
  const id = world.createEntity();
  world.addComponent(
    id,
    new TransformComponent(new Vector3().copyFrom(CARRIER_POSITION), new Quaternion()),
  );
  // capital-ship визуал с цветом союзника, variant='carrier' для идентификации
  world.addComponent(
    id,
    new VisualComponent('capital-ship', parseHexColor(settings.colors.allyBody), 0, 'carrier'),
  );
  world.addComponent(id, new TeamComponent('ally'));
  // БЕЗ CapitalShipComponent — не участвует в боевой логике (не стреляет, не разрушается)
}

// ── Основные функции ────────────────────────────────────────────────────────

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
  playerPlane.setVisibleRecursive(false); // скрыт до вылета из ангара
  camera.position.set(-10.5, 3.75, 0);
  camera.setTarget(playerPlane.position);

  // Rebuild player model with current settings colors
  if (refs.playerModel) refs.playerModel.dispose();
  refs.playerModel = createFighter(
    parseHexColor(settings.colors.playerBody),
    parseHexColor(settings.colors.playerExhaust),
  );
  refs.playerModel.parent = playerPlane;

  // ECS-сущность игрока НЕ создаётся здесь — она создаётся в switchToFlight()
  // когда игрок садится в истребитель и вылетает из ангара
}

export function spawnCombatEntities(): void {
  // Вражеские капитальные корабли
  const csCount = Math.min(combatConfig.capitalShips, 5);
  settings.counts.capitalShips = csCount;
  spawnCapitalShips();

  // Союзный корабль-носитель (визуал в космосе)
  spawnAllyCarrier();

  // Союзники НЕ спавнятся сразу — они вылетают из ангара через ИИ-пилотов (hangar-ai).
  // TODO (Этап 9): связать launched пилотов → spawnAlly()

  // Враги
  const enemyCount = combatConfig.enemies;
  const ships = world.query(TransformComponent, CapitalShipComponent);
  for (let i = 0; i < enemyCount; i++) {
    const shipIdx = i % Math.max(1, ships.length);
    spawnEnemy(ships[shipIdx].components[0].position);
  }
}
