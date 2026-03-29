import type { EngineMaterial } from '@/shared/core/material';
import type { TransformNode } from '@/shared/core/transform-node';
import type { Vector3 } from '@/shared/core/vector3';

/** Стойка для истребителя в ангаре */
export interface FighterSlot {
  /** Мировая позиция истребителя на стойке */
  position: Vector3;
  /** Точка, к которой подходит пилот для посадки (перед истребителем) */
  interactPoint: Vector3;
  /** Занят ли слот (пилот сел / ожидает респавна) */
  occupied: boolean;
  /** Таймер респавна истребителя (сек). >0 = слот на кулдауне, истребитель скрыт */
  respawnTimer: number;
  /** 3D-нода истребителя на стойке (подставляется позже, при заполнении ангара) */
  fighterNode: TransformNode | null;
}

/** Набор материалов, создаётся один раз и реюзится всеми мешами */
export interface HangarMaterials {
  floor: EngineMaterial;
  wall: EngineMaterial;
  ceiling: EngineMaterial;
  runway: EngineMaterial;
}

/** Вычисленные размеры зала */
export interface HallDimensions {
  hallLength: number;
  hallHalfWidth: number;
  slotsPerRow: number;
}

/** AABB-коллайдер (стены, пол, потолок) */
export interface AABB {
  min: Vector3;
  max: Vector3;
}

/** Результат создания ангара */
export interface HangarData {
  /** Корневая нода всей геометрии ангара */
  root: TransformNode;
  /** Точка спавна пилотов (начало зала) */
  spawnPoint: Vector3;
  /** Массив стоек для истребителей */
  fighterSlots: FighterSlot[];
  /** Позиция ворот (выход в космос) */
  gatePosition: Vector3;
  /** Направление вылета (нормаль наружу от ворот) */
  gateDirection: Vector3;
  /** Коллайдеры стен/пола/потолка для FPS-физики */
  colliders: AABB[];
}
