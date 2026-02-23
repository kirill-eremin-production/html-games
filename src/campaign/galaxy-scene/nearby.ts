import { NEARBY_RADIUS_MULTIPLIER } from '../balance';
import { STAR_SYSTEMS, getSystem } from '../data';
import { campaign } from '../state';

import { nearbySystemIds } from './refs';

export function recomputeNearby(): void {
  nearbySystemIds.clear();

  const center = getSystem(campaign.currentSystemId);
  if (!center) return;

  const nearbyRadius = campaign.engineRange * NEARBY_RADIUS_MULTIPLIER;
  const nearbyRadiusSq = nearbyRadius * nearbyRadius;

  nearbySystemIds.add(campaign.currentSystemId);

  for (const sys of STAR_SYSTEMS) {
    if (sys.id === campaign.currentSystemId) continue;
    const dx = center.position[0] - sys.position[0];
    const dy = center.position[1] - sys.position[1];
    const dz = center.position[2] - sys.position[2];
    if (dx * dx + dy * dy + dz * dz <= nearbyRadiusSq) {
      nearbySystemIds.add(sys.id);
    }
  }
}
