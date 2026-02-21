import { getSystem } from '../data';
import { campaign } from '../state';
import { nearbySystemIds } from './refs';

const NEARBY_HOPS = 6;

export function recomputeNearby(): void {
  nearbySystemIds.clear();

  const queue: [string, number][] = [[campaign.currentSystemId, 0]];
  nearbySystemIds.add(campaign.currentSystemId);

  while (queue.length > 0) {
    const [id, depth] = queue.shift()!;
    if (depth >= NEARBY_HOPS) continue;

    const sys = getSystem(id);
    if (!sys) continue;
    for (const connId of sys.connections) {
      if (!nearbySystemIds.has(connId)) {
        nearbySystemIds.add(connId);
        queue.push([connId, depth + 1]);
      }
    }
  }
}
