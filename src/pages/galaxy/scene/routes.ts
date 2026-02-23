import {
  Vector3,
  createLineFromPoints,
  createMesh,
  createRingGeometry,
  createUnlitMaterial,
} from '@/shared/core';
import { getSystem } from '@/features/campaign/data';
import { campaign } from '@/features/campaign/state';

import { galaxyGroup, rangeCircle } from './refs';

const CIRCLE_SEGMENTS = 64;

function buildCirclePoints(cx: number, cy: number, cz: number, radius: number): Vector3[] {
  const points: Vector3[] = [];
  for (let i = 0; i <= CIRCLE_SEGMENTS; i++) {
    const angle = (i / CIRCLE_SEGMENTS) * Math.PI * 2;
    points.push(
      new Vector3(cx + Math.cos(angle) * radius, cy + 0.05, cz + Math.sin(angle) * radius),
    );
  }
  return points;
}

export function rebuildRouteLines(): void {
  // Dispose old range circle
  if (rangeCircle.mesh) {
    if (rangeCircle.mesh.material) rangeCircle.mesh.material.dispose();
    rangeCircle.mesh.dispose();
    rangeCircle.mesh = null;
  }
  if (rangeCircle.line) {
    rangeCircle.line.dispose();
    rangeCircle.line = null;
  }

  const currentSys = getSystem(campaign.currentSystemId);
  if (!currentSys) return;

  const range = campaign.engineRange;
  const [cx, cy, cz] = currentSys.position;

  // Semi-transparent filled disc
  const discGeo = createRingGeometry(0, range, CIRCLE_SEGMENTS);
  const discMat = createUnlitMaterial({
    color: 0x00ccff,
    transparent: true,
    opacity: 0.06,
    side: 2,
  });
  rangeCircle.mesh = createMesh(discGeo, discMat);
  rangeCircle.mesh.position.set(cx, cy + 0.02, cz);
  rangeCircle.mesh.rotation.x = -Math.PI / 2;
  galaxyGroup.add(rangeCircle.mesh);

  // Circle outline
  const circlePoints = buildCirclePoints(cx, cy, cz, range);
  rangeCircle.line = createLineFromPoints(circlePoints, 0x00ccff, true, 0.5);
  rangeCircle.line.parent = galaxyGroup;
}
