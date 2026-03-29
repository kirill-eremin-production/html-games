import { playLaserSound } from '@/shared/audio';
import { COMBAT_CONSTANTS } from '@/shared/config/combat';
import { combatConfig } from '@/shared/config/combat-session';
import { EngineMesh, Quaternion, Vector3, isEngineMesh, traverseNode } from '@/shared/core';
import { world } from '@/shared/ecs/combat-world';
import { addDirectionNoise } from '@/shared/lib/math';
import { parseHexColor, settings } from '@/shared/settings';
import type { GameSystem } from '@/shared/types';

import { CapitalShipComponent } from '@/entities/combat/capital-ship';
import { SubsystemComponent } from '@/entities/combat/subsystem';
import { destroyEntityWithVisuals } from '@/entities/ecs-adapters/entity-cleanup';
import {
  type CapitalShipQueryResult,
  queryAllCapitalShips,
  queryFightersByTeam,
  querySubsystemByType,
  querySubsystemsByParent,
} from '@/entities/ecs-queries';
import { TransformComponent } from '@/entities/physics/transform';
import { ViewComponent } from '@/entities/rendering/view';
import { VisualComponent } from '@/entities/rendering/visual';
import { ParentEntityComponent } from '@/entities/stats/parent-entity';
import { TeamComponent } from '@/entities/stats/team';

import { playerPlane } from '../flight/player-system';

import { destroyedSubMat } from './explosions';
import { createLaser } from './weapons';

const C = COMBAT_CONSTANTS;

const SHIP_POSITIONS = C.shipPositions.map(([x, y, z]) => new Vector3(x, y, z));

export function spawnCapitalShips(): void {
  const count = settings.counts.capitalShips;
  const hullColor = parseHexColor(settings.colors.capitalHull);
  for (let i = 0; i < count; i++) {
    const id = world.createEntity();
    world.addComponent(
      id,
      new TransformComponent(new Vector3().copyFrom(SHIP_POSITIONS[i]), new Quaternion()),
    );
    world.addComponent(id, new VisualComponent('capital-ship', hullColor, 0, String(i)));
    world.addComponent(id, new CapitalShipComponent(true, 2 + Math.random() * 3, i));
    world.addComponent(id, new TeamComponent('enemy'));
  }
}

function updateCapitalShipVisuals(cs: CapitalShipQueryResult, dt: number): void {
  const subsystems = querySubsystemsByParent(cs.entity);
  for (const sub of subsystems) {
    const subView = world.getComponent(sub.entity, ViewComponent);
    if (!subView) continue;
    if (sub.health.current <= 0 && subView.node.isEnabled()) {
      traverseNode(subView.node, (child) => {
        if (isEngineMesh(child) && (child as EngineMesh).material) {
          (child as EngineMesh).material = destroyedSubMat;
        }
      });
    }
  }

  // Вращение корабля, если двигатели живы
  const engines = querySubsystemByType(cs.entity, 'engines');
  if (engines && engines.health.current > 0) {
    const shipView = world.getComponent(cs.entity, ViewComponent);
    if (shipView) shipView.node.rotation.y += C.shipRotationSpeed * dt;
  }
}

const _csTargets: Vector3[] = [];
const _csDir = new Vector3();
const _csOrigin = new Vector3();
const _csShotDir = new Vector3();

export function updateCapitalShips(dt: number): void {
  const ships = queryAllCapitalShips();
  for (const cs of ships) {
    if (!cs.capitalShip.alive) continue;

    // Проверяем, живы ли турели
    const turretSub = querySubsystemByType(cs.entity, 'turrets');
    if (!turretSub || turretSub.health.current <= 0) {
      updateCapitalShipVisuals(cs, dt);
      continue;
    }

    cs.capitalShip.turretTimer -= dt;
    if (cs.capitalShip.turretTimer <= 0) {
      cs.capitalShip.turretTimer =
        combatConfig.turretFireRateMin +
        Math.random() * (combatConfig.turretFireRateMax - combatConfig.turretFireRateMin);
      _csTargets.length = 0;
      const shipPos = cs.transform.position;
      if (shipPos.distanceToSquared(playerPlane.position) < C.turretRangeSq)
        _csTargets.push(playerPlane.position);
      const allies = queryFightersByTeam('ally');
      for (const a of allies) {
        if (shipPos.distanceToSquared(a.transform.position) < C.allyTurretRangeSq)
          _csTargets.push(a.transform.position);
      }
      if (_csTargets.length === 0) {
        updateCapitalShipVisuals(cs, dt);
        continue;
      }

      const tgt = _csTargets[Math.floor(Math.random() * _csTargets.length)];
      _csDir.copyFrom(tgt).subtractInPlace(shipPos).normalize();

      // Проверяем, жив ли мостик (влияет на точность)
      const bridgeSub = querySubsystemByType(cs.entity, 'bridge');
      const inaccuracy =
        !bridgeSub || bridgeSub.health.current <= 0
          ? combatConfig.turretAccuracy * C.turretInaccuracyMultiplier
          : combatConfig.turretAccuracy;
      addDirectionNoise(_csDir, inaccuracy);

      const shipName = `Корабль-${cs.capitalShip.shipIndex + 1}`;
      const shots = C.turretBurstMin + Math.floor(Math.random() * C.turretBurstRandomExtra);
      for (let i = 0; i < shots; i++) {
        _csOrigin.set(
          shipPos.x + (Math.random() - 0.5) * C.turretOriginSpreadXZ,
          shipPos.y + (Math.random() - 0.5) * C.turretOriginSpreadY,
          shipPos.z + (Math.random() - 0.5) * C.turretOriginSpreadXZ,
        );
        _csShotDir.copyFrom(_csDir);
        addDirectionNoise(_csShotDir, C.turretShotSpread);
        createLaser(_csOrigin, _csShotDir, 'enemy', shipName);
      }
      if (shipPos.distanceToSquared(playerPlane.position) < C.audioRangeSq) playLaserSound(false);
    }
    updateCapitalShipVisuals(cs, dt);
  }
}

// ── GameSystem adapter ──────────────────────────────────────────────────────

export const capitalShipSystem: GameSystem = {
  id: 'capital-ships',
  update(dt) {
    updateCapitalShips(dt);
  },
  cleanup() {
    // Уничтожаем подсистемы (дочерние сущности)
    const subsystems = world.query(SubsystemComponent, ParentEntityComponent);
    for (const { entity } of subsystems) {
      destroyEntityWithVisuals(entity);
    }

    // Уничтожаем корабли
    const ships = world.query(CapitalShipComponent);
    for (const { entity } of ships) {
      destroyEntityWithVisuals(entity);
    }
  },
};
