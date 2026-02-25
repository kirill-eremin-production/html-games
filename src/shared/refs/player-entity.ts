import type { EntityId } from '@/shared/ecs/types';

/** ECS-сущность игрока. Устанавливается при старте боя, сбрасывается при выходе. */
export let playerEntityId: EntityId = 0;

export function setPlayerEntityId(id: EntityId): void {
  playerEntityId = id;
}

export function clearPlayerEntityId(): void {
  playerEntityId = 0;
}
