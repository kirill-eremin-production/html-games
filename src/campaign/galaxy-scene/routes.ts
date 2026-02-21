import * as THREE from 'three';
import { getSystem } from '../data';
import { campaign } from '../state';
import { galaxyGroup, routeLines, starMeshes } from './refs';

export function rebuildRouteLines(): void {
  for (const line of routeLines) {
    galaxyGroup.remove(line);
    line.geometry.dispose();
    (line.material as THREE.LineBasicMaterial).dispose();
  }
  routeLines.length = 0;

  const currentSys = getSystem(campaign.currentSystemId);
  if (!currentSys) return;

  for (const connId of currentSys.connections) {
    const from = starMeshes.get(campaign.currentSystemId);
    const to = starMeshes.get(connId);
    if (!from || !to) continue;

    const points = [from.position, to.position];
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineBasicMaterial({
      color: 0x00ccff,
      transparent: true,
      opacity: 0.5,
    });
    const line = new THREE.Line(geo, mat);
    galaxyGroup.add(line);
    routeLines.push(line);
  }
}
