import { clearEntityIndex } from './entity-index';
import { World } from './world';

/** Глобальный ECS-мир для боевого режима */
export let world = new World();

/** Пересоздать мир (при старте нового боя) */
export function resetWorld(): void {
  clearEntityIndex();
  world = new World();
}
