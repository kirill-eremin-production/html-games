import type { EngineLineMaterial } from '../../core';
import { createBufferGeometry, createLine, createLineMaterial } from '../../core';
import { getSystem } from '../data';
import { campaign } from '../state';

import { galaxyGroup, routeLines, starMeshes } from './refs';

export function rebuildRouteLines(): void {
  for (const line of routeLines) {
    line.parent = null;
    line.geometry?.dispose();
    (line.material as EngineLineMaterial).dispose();
  }
  routeLines.length = 0;

  const currentSys = getSystem(campaign.currentSystemId);
  if (!currentSys) return;

  for (const connId of currentSys.connections) {
    const from = starMeshes.get(campaign.currentSystemId);
    const to = starMeshes.get(connId);
    if (!from || !to) continue;

    const points = [from.position, to.position];
    const geo = createBufferGeometry().setFromPoints(points);
    const mat = createLineMaterial(0x00ccff, true, 0.5);
    const line = createLine(geo, mat);
    line.parent = galaxyGroup;
    routeLines.push(line);
  }
}
