/**
 * Процедурная фабрика 3D-ангара корабля-носителя.
 *
 * Генерирует длинный зал (палуба авианосца) с рядами стоек для истребителей,
 * взлётной полосой по центру и воротами в космос.
 *
 * Масштабируется до 128 истребителей через параметр `slotCount`.
 */
import { createBlueprintMesh } from '@/shared/blueprint-mesh';
import { loadBlueprint } from '@/shared/blueprint/blueprint-storage';
import {
  createMesh,
  createPBRMaterial,
  createPlaneGeometry,
  createPointLight,
  createSphereGeometry,
  createTransformNode,
  createUnlitMaterial,
} from '@/shared/core/factories';
import { Vector3 } from '@/shared/core/vector3';
import { parseHexColor, settings } from '@/shared/settings';

import { createFighter } from '@/entities/objects/space-ships';

import {
  CEILING_COLOR,
  CEILING_HEIGHT,
  FLOOR_COLOR,
  GATE_ZONE_LENGTH,
  LIGHT_COLOR,
  LIGHT_INTENSITY,
  LIGHT_SPACING,
  ROWS_PER_SIDE,
  ROW_SPACING,
  RUNWAY_COLOR,
  RUNWAY_WIDTH,
  SLOT_SPACING,
  SPAWN_ZONE_LENGTH,
  WALL_COLOR,
} from './constants';
import type { AABB, FighterSlot, HallDimensions, HangarData, HangarMaterials } from './types';

// ── Микро-функции генерации ──────────────────────────────────────────────────

function computeDimensions(slotCount: number): HallDimensions {
  const totalRows = ROWS_PER_SIDE * 2;
  const slotsPerRow = Math.ceil(slotCount / totalRows);
  const hallLength = slotsPerRow * SLOT_SPACING + SPAWN_ZONE_LENGTH + GATE_ZONE_LENGTH;
  const hallHalfWidth = RUNWAY_WIDTH / 2 + ROWS_PER_SIDE * ROW_SPACING + 4;
  return { hallLength, hallHalfWidth, slotsPerRow };
}

function createMaterials(): HangarMaterials {
  return {
    floor: createPBRMaterial({
      color: FLOOR_COLOR,
      emissive: FLOOR_COLOR,
      emissiveIntensity: 0.15,
      side: 2,
    }),
    wall: createPBRMaterial({
      color: WALL_COLOR,
      emissive: WALL_COLOR,
      emissiveIntensity: 0.1,
      side: 2,
    }),
    ceiling: createPBRMaterial({
      color: CEILING_COLOR,
      emissive: CEILING_COLOR,
      emissiveIntensity: 0.08,
      side: 2,
    }),
    runway: createPBRMaterial({
      color: RUNWAY_COLOR,
      emissive: RUNWAY_COLOR,
      emissiveIntensity: 0.2,
      side: 2,
    }),
  };
}

function createFloor(
  root: ReturnType<typeof createTransformNode>,
  dims: HallDimensions,
  mat: HangarMaterials[keyof HangarMaterials],
): void {
  const geo = createPlaneGeometry(dims.hallHalfWidth * 2, dims.hallLength);
  const mesh = createMesh(geo, mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(0, 0, dims.hallLength / 2);
  mesh.parent = root;
}

function createRunway(
  root: ReturnType<typeof createTransformNode>,
  dims: HallDimensions,
  mat: HangarMaterials[keyof HangarMaterials],
): void {
  const geo = createPlaneGeometry(RUNWAY_WIDTH, dims.hallLength);
  const mesh = createMesh(geo, mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(0, 0.01, dims.hallLength / 2);
  mesh.parent = root;
}

function createCeiling(
  root: ReturnType<typeof createTransformNode>,
  dims: HallDimensions,
  mat: HangarMaterials[keyof HangarMaterials],
): void {
  const geo = createPlaneGeometry(dims.hallHalfWidth * 2, dims.hallLength);
  const mesh = createMesh(geo, mat);
  mesh.rotation.x = Math.PI / 2;
  mesh.position.set(0, CEILING_HEIGHT, dims.hallLength / 2);
  mesh.parent = root;
}

function createWalls(
  root: ReturnType<typeof createTransformNode>,
  dims: HallDimensions,
  mat: HangarMaterials[keyof HangarMaterials],
): void {
  const sideGeo = createPlaneGeometry(dims.hallLength, CEILING_HEIGHT);

  const left = createMesh(sideGeo, mat);
  left.rotation.y = Math.PI / 2;
  left.position.set(-dims.hallHalfWidth, CEILING_HEIGHT / 2, dims.hallLength / 2);
  left.parent = root;

  const right = createMesh(sideGeo, mat);
  right.rotation.y = -Math.PI / 2;
  right.position.set(dims.hallHalfWidth, CEILING_HEIGHT / 2, dims.hallLength / 2);
  right.parent = root;

  const backGeo = createPlaneGeometry(dims.hallHalfWidth * 2, CEILING_HEIGHT);
  const back = createMesh(backGeo, mat);
  back.position.set(0, CEILING_HEIGHT / 2, 0);
  back.parent = root;
}

function createLighting(root: ReturnType<typeof createTransformNode>, dims: HallDimensions): void {
  const count = Math.max(2, Math.floor(dims.hallLength / LIGHT_SPACING));
  for (let i = 0; i < count; i++) {
    const z =
      SPAWN_ZONE_LENGTH +
      (i / (count - 1)) * (dims.hallLength - SPAWN_ZONE_LENGTH - GATE_ZONE_LENGTH);
    const light = createPointLight(LIGHT_COLOR, LIGHT_INTENSITY);
    light.position.set(0, CEILING_HEIGHT - 1, z);
    light.parent = root;
  }
}

function generateFighterSlots(slotCount: number, slotsPerRow: number): FighterSlot[] {
  const slots: FighterSlot[] = [];
  let idx = 0;

  for (let side = -1; side <= 1; side += 2) {
    for (let row = 0; row < ROWS_PER_SIDE; row++) {
      const x = side * (RUNWAY_WIDTH / 2 + ROW_SPACING * (row + 0.5));

      for (let col = 0; col < slotsPerRow; col++) {
        if (idx >= slotCount) break;

        const z = SPAWN_ZONE_LENGTH + col * SLOT_SPACING + SLOT_SPACING / 2;
        const interactX = side * (RUNWAY_WIDTH / 2 + ROW_SPACING * row);

        slots.push({
          position: new Vector3(x, 0, z),
          interactPoint: new Vector3(interactX, 0, z),
          occupied: false,
          respawnTimer: 0,
          fighterNode: null,
        });
        idx++;
      }
      if (idx >= slotCount) break;
    }
    if (idx >= slotCount) break;
  }

  return slots;
}

function placeFightersOnSlots(
  root: ReturnType<typeof createTransformNode>,
  slots: FighterSlot[],
): void {
  const bodyColor = parseHexColor(settings.colors.allyBody);
  const exhaustColor = parseHexColor(settings.colors.allyExhaust);

  // Загружаем blueprint игрока один раз (слот #0)
  const selectedId = settings.blueprint.selectedId;
  const blueprintState = selectedId ? loadBlueprint(selectedId) : null;

  for (let i = 0; i < slots.length; i++) {
    const slot = slots[i];
    const fighter =
      i === 0 && blueprintState
        ? createBlueprintMesh(blueprintState.blocks)
        : createFighter(bodyColor, exhaustColor);

    fighter.position.set(slot.position.x, slot.position.y + 0.5, slot.position.z);
    // Истребитель смотрит к центру полосы (к ВПП) — поворот на 90° если слева, -90° если справа
    fighter.rotation.y = slot.position.x < 0 ? Math.PI / 2 : -Math.PI / 2;
    fighter.parent = root;
    slot.fighterNode = fighter;
  }
}

/** Светящийся маркер на полу у каждого interactPoint — показывает куда подойти */
function placeInteractMarkers(
  root: ReturnType<typeof createTransformNode>,
  slots: FighterSlot[],
): void {
  const markerMat = createUnlitMaterial({
    color: 0x00ffcc,
    transparent: true,
    opacity: 0.8,
  });
  const markerGeo = createSphereGeometry(0.25, 8, 8);

  for (const slot of slots) {
    const marker = createMesh(markerGeo, markerMat);
    marker.position.set(slot.interactPoint.x, 0.05, slot.interactPoint.z);
    marker.parent = root;
  }
}

function generateColliders(dims: HallDimensions): AABB[] {
  const { hallHalfWidth: hw, hallLength: hl } = dims;
  return [
    // Пол
    { min: new Vector3(-hw, -1, 0), max: new Vector3(hw, 0, hl) },
    // Потолок
    { min: new Vector3(-hw, CEILING_HEIGHT, 0), max: new Vector3(hw, CEILING_HEIGHT + 1, hl) },
    // Левая стена
    { min: new Vector3(-hw - 1, 0, 0), max: new Vector3(-hw, CEILING_HEIGHT, hl) },
    // Правая стена
    { min: new Vector3(hw, 0, 0), max: new Vector3(hw + 1, CEILING_HEIGHT, hl) },
    // Задняя стена
    { min: new Vector3(-hw, 0, -1), max: new Vector3(hw, CEILING_HEIGHT, 0) },
  ];
}

// ── Главная фабрика ──────────────────────────────────────────────────────────

/**
 * Создать процедурный ангар.
 *
 * @param slotCount Количество стоек для истребителей (макс ~128).
 *                  Берётся из CombatConfig.allies.
 */
export function createHangar(slotCount: number): HangarData {
  const root = createTransformNode();
  const dims = computeDimensions(slotCount);
  const mats = createMaterials();

  // Геометрия зала
  createFloor(root, dims, mats.floor);
  createRunway(root, dims, mats.runway);
  createCeiling(root, dims, mats.ceiling);
  createWalls(root, dims, mats.wall);
  createLighting(root, dims);

  // Данные
  const fighterSlots = generateFighterSlots(slotCount, dims.slotsPerRow);
  const spawnPoint = new Vector3(0, 0, SPAWN_ZONE_LENGTH / 2);
  const gatePosition = new Vector3(0, 0, dims.hallLength);
  const gateDirection = new Vector3(0, 0, 1);
  const colliders = generateColliders(dims);

  // Размещаем модели истребителей на стойках
  placeFightersOnSlots(root, fighterSlots);

  // Маркеры точек посадки (светящиеся шары на полу)
  placeInteractMarkers(root, fighterSlots);

  return { root, spawnPoint, fighterSlots, gatePosition, gateDirection, colliders };
}
