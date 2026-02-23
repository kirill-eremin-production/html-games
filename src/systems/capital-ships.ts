import { playLaserSound } from '../audio';

import { COMBAT_CONSTANTS } from '../config/combat';
import { combatConfig } from '../config/combat-session';
import { EngineMesh, Vector3, addToScene, isEngineMesh, removeFromScene } from '@/shared/core';
import { createCapitalShip } from '../scene/models';
import { parseHexColor, settings } from '@/shared/settings';
import { state } from '@/shared/state';
import { disposeObject } from '../shared/utils/dispose';
import { addDirectionNoise } from '../shared/utils/math';

import { destroyedSubMat } from './explosions';
import { playerPlane } from './player';
import type { GameSystem } from './types';
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
    state.capitalShips.push({
      mesh: ship,
      subsystems: ship.userData.subsystems,
      alive: true,
      turretTimer: 2 + Math.random() * 3,
    });
  }
}

function updateCapitalShipVisuals(cs: (typeof state.capitalShips)[number], dt: number): void {
  for (const sub of cs.subsystems) {
    if (sub.health <= 0 && sub.mesh.visible) {
      sub.mesh.traverse((child) => {
        if (isEngineMesh(child) && (child as EngineMesh).material) {
          (child as EngineMesh).material = destroyedSubMat;
        }
      });
    }
  }
  if (cs.subsystems[0].health > 0) cs.mesh.rotation.y += C.shipRotationSpeed * dt;
}

const _csTargets: Vector3[] = [];
const _csDir = new Vector3();
const _csOrigin = new Vector3();
const _csShotDir = new Vector3();

export function updateCapitalShips(dt: number): void {
  for (const cs of state.capitalShips) {
    if (!cs.alive) continue;
    const turretSub = cs.subsystems[2];
    if (turretSub.health <= 0) {
      updateCapitalShipVisuals(cs, dt);
      continue;
    }

    cs.turretTimer -= dt;
    if (cs.turretTimer <= 0) {
      cs.turretTimer =
        combatConfig.turretFireRateMin +
        Math.random() * (combatConfig.turretFireRateMax - combatConfig.turretFireRateMin);
      _csTargets.length = 0;
      const shipPos = cs.mesh.position;
      if (shipPos.distanceToSquared(playerPlane.position) < C.turretRangeSq)
        _csTargets.push(playerPlane.position);
      for (const a of state.allies) {
        if (shipPos.distanceToSquared(a.mesh.position) < C.allyTurretRangeSq)
          _csTargets.push(a.mesh.position);
      }
      if (_csTargets.length === 0) {
        updateCapitalShipVisuals(cs, dt);
        continue;
      }

      const tgt = _csTargets[Math.floor(Math.random() * _csTargets.length)];
      _csDir.copyFrom(tgt).subtractInPlace(shipPos).normalize();
      const bridgeSub = cs.subsystems[1];
      const inaccuracy =
        bridgeSub.health <= 0
          ? combatConfig.turretAccuracy * C.turretInaccuracyMultiplier
          : combatConfig.turretAccuracy;
      addDirectionNoise(_csDir, inaccuracy);

      const shipName = `Корабль-${cs.mesh.userData.index + 1}`;
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
    for (const cs of state.capitalShips) disposeObject(cs.mesh);
    state.capitalShips = [];
  },
};
