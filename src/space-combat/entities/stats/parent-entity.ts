import type { EntityId } from '@/shared/ecs/types';

/** Ссылка на родительскую сущность (иерархия) */
export class ParentEntityComponent {
  constructor(public parentId: EntityId) {}
}
