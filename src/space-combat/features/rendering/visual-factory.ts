import { WEAPON_CONFIG } from '@/shared/config/weapons';
import {
  type TransformNode,
  createAdditiveMaterial,
  createCylinderGeometry,
  createMesh,
} from '@/shared/core';
import type { EntityId } from '@/shared/ecs/types';
import type { World } from '@/shared/ecs/world';
import { addHealthBar } from '@/shared/model-loader/shared';

import { createCapitalShip, createFighterInstanced } from '@/entities/objects/space-ships';
import { HealthBarComponent } from '@/entities/rendering/health-bar';
import type { VisualComponent } from '@/entities/rendering/visual';
import { TeamComponent } from '@/entities/stats/team';

// ── Projectile geometry (cached) ────────────────────────────────────────────

const W = WEAPON_CONFIG;

const laserGeoAlly = createCylinderGeometry(
  W.allyLaserRadius,
  W.allyLaserRadius,
  W.laserLength,
  W.laserSegments,
);
laserGeoAlly.rotateZ(Math.PI / 2);

const laserGeoEnemy = createCylinderGeometry(
  W.enemyLaserRadius,
  W.enemyLaserRadius,
  W.laserLength,
  W.laserSegments,
);
laserGeoEnemy.rotateZ(Math.PI / 2);

// ── Factory ─────────────────────────────────────────────────────────────────

/**
 * Создаёт BJS TransformNode по данным VisualComponent.
 * Для fighter также создаёт HealthBar и добавляет HealthBarComponent.
 */
export function createNodeForVisual(
  visual: VisualComponent,
  entity: EntityId,
  w: World,
): TransformNode {
  switch (visual.type) {
    case 'fighter': {
      const node = createFighterInstanced(visual.bodyColor, visual.accentColor);
      const team = w.getComponent(entity, TeamComponent);
      const hbColor = team?.team === 'enemy' ? 0xff0000 : 0x00ff44;
      const hb = addHealthBar(node, hbColor);
      w.addComponent(entity, new HealthBarComponent(hb.bar, hb.fill));
      return node;
    }
    case 'capital-ship': {
      const index = Number(visual.variant) || 0;
      return createCapitalShip(index, visual.bodyColor);
    }
    case 'projectile': {
      const isEnemy = visual.variant === 'enemy';
      const geo = isEnemy ? laserGeoEnemy : laserGeoAlly;
      const mat = createAdditiveMaterial({ color: visual.bodyColor, transparent: true });
      const mesh = createMesh(geo, mat);
      mesh.renderingGroupId = 1;
      return mesh as unknown as TransformNode;
    }
  }
}
