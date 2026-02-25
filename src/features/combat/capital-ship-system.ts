import { playLaserSound } from '@/shared/audio';
import { COMBAT_CONSTANTS } from '@/shared/config/combat';
import { combatConfig } from '@/shared/config/combat-session';
import {
  EngineMesh,
  Vector3,
  addToScene,
  disposeNode,
  isEngineMesh,
  traverseNode,
} from '@/shared/core';
import { world } from '@/shared/ecs/combat-world';
import { unregisterMeshEntity } from '@/shared/ecs/entity-index';
import { addDirectionNoise } from '@/shared/lib/math';
import { parseHexColor, settings } from '@/shared/settings';
import type { GameSystem } from '@/shared/types';

import { CapitalShipComponent } from '@/entities/combat/capital-ship';
import { SubsystemComponent } from '@/entities/combat/subsystem';
import { createCapitalShipEntity } from '@/entities/ecs-adapters';
import {
  type CapitalShipQueryResult,
  queryAllCapitalShips,
  queryFightersByTeam,
  querySubsystemByType,
  querySubsystemsByParent,
} from '@/entities/ecs-queries';
import { createCapitalShip } from '@/entities/objects/space-ships/capital-ship/create-capital-ship';
import { MeshComponent } from '@/entities/rendering/mesh';
import { ParentEntityComponent } from '@/entities/stats/parent-entity';

import { playerPlane } from '../flight/player-system';

import { destroyedSubMat } from './explosions';
import { createLaser } from './weapons';

const C = COMBAT_CONSTANTS;

const SHIP_POSITIONS = C.shipPositions.map(([x, y, z]) => new Vector3(x, y, z));

export function spawnCapitalShips(): void {
  const count = settings.counts.capitalShips;
  const hullColor = parseHexColor(settings.colors.capitalHull);
  for (let i = 0; i < count; i++) {
    const ship = createCapitalShip(i, hullColor);
    ship.position.copyFrom(SHIP_POSITIONS[i]);
    ship.lookAt(new Vector3(0, 0, 0));
    addToScene(ship);
    createCapitalShipEntity(world, ship, ship.metadata.subsystems, 2 + Math.random() * 3);
  }
}

function updateCapitalShipVisuals(cs: CapitalShipQueryResult, dt: number): void {
  const subsystems = querySubsystemsByParent(cs.entity);
  for (const sub of subsystems) {
    if (!sub.mesh.mesh) continue;
    if (sub.health.current <= 0 && sub.mesh.mesh.isEnabled()) {
      traverseNode(sub.mesh.mesh, (child) => {
        if (isEngineMesh(child) && (child as EngineMesh).material) {
          (child as EngineMesh).material = destroyedSubMat;
        }
      });
    }
  }

  // Вращение корабля, если двигатели живы
  const engines = querySubsystemByType(cs.entity, 'engines');
  if (engines && engines.health.current > 0) {
    cs.mesh.mesh.rotation.y += C.shipRotationSpeed * dt;
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
      const shipPos = cs.mesh.mesh.position;
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

      const shipName = `Корабль-${cs.mesh.mesh.metadata.index + 1}`;
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
    const subsystems = world.query(SubsystemComponent, MeshComponent, ParentEntityComponent);
    for (const {
      entity,
      components: [, mesh],
    } of subsystems) {
      unregisterMeshEntity(mesh.mesh);
      world.destroyEntity(entity);
    }

    // Уничтожаем корабли
    const ships = world.query(CapitalShipComponent, MeshComponent);
    for (const {
      entity,
      components: [, mesh],
    } of ships) {
      unregisterMeshEntity(mesh.mesh);
      disposeNode(mesh.mesh);
      world.destroyEntity(entity);
    }
  },
};
