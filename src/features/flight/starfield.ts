/**
 * @module starfield
 *
 * Фоновое звёздное поле для боевого и исследовательского режимов.
 *
 * Создаёт облако из 2 500 точек, равномерно распределённых по сфере
 * радиусом 2 500–7 000 единиц. Каждая звезда получает случайный оттенок
 * (тёплый / холодный) и яркость. Поле следует за позицией игрока,
 * создавая эффект параллакса.
 */
import {
  type EnginePoints,
  type Vector3,
  addToScene,
  createBufferAttribute,
  createBufferGeometry,
  createPoints,
  createPointsMaterial,
} from '@/shared/core';
import { playerPlane } from '@/features/flight/player-system';
import type { GameSystem } from '@/shared/types';

/** Ссылка на меш звёздного поля; `null` до вызова {@link createStarfield}. */
let starfieldPoints: EnginePoints | null = null;

/**
 * Создаёт звёздное поле и добавляет его на сцену.
 *
 * Генерирует 2 500 звёзд со сферическим распределением.
 * Позиции вычисляются через сферические координаты (r, θ, φ),
 * а цвета варьируются по яркости (0.3–0.5) и случайному оттенку.
 *
 * Материал — точки фиксированного экранного размера (1.5 px)
 * без перспективного масштабирования (`sizeAttenuation: false`).
 */
export function createStarfield(): void {
  const count = 2500;
  const geo = createBufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 2500 + Math.random() * 4500;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
    const brightness = 0.5 + Math.random() * 0.35;
    const tint = Math.random();
    colors[i * 3] = brightness * (tint > 0.7 ? 1.0 : 0.85);
    colors[i * 3 + 1] = brightness * (tint > 0.3 ? 1.0 : 0.85);
    colors[i * 3 + 2] = brightness;
  }
  geo.setAttribute('position', createBufferAttribute(positions, 3));
  geo.setAttribute('color', createBufferAttribute(colors, 3));
  const mat = createPointsMaterial({
    size: 1.5,
    vertexColors: true,
    sizeAttenuation: false,
    transparent: true,
    opacity: 0.85,
  });
  starfieldPoints = createPoints(geo, mat);
  addToScene(starfieldPoints);
}

/**
 * Показывает или скрывает звёздное поле.
 * @param visible — `true` для отображения, `false` для скрытия.
 */
export function setStarfieldVisible(visible: boolean): void {
  if (starfieldPoints) starfieldPoints.visible = visible;
}

/**
 * Перемещает звёздное поле в указанную позицию.
 * Вызывается каждый кадр для создания эффекта параллакса —
 * поле следует за кораблём игрока.
 * @param position — целевая позиция (как правило, позиция игрока).
 */
export function updateStarfieldPosition(position: Vector3): void {
  if (starfieldPoints) starfieldPoints.position.copyFrom(position);
}

// ── GameSystem adapter ──────────────────────────────────────────────────────

/**
 * Игровая система звёздного поля.
 *
 * Каждый кадр синхронизирует позицию звёздного поля
 * с текущей позицией корабля игрока ({@link playerPlane}).
 */
export const starfieldSystem: GameSystem = {
  id: 'starfield',
  update() {
    updateStarfieldPosition(playerPlane.position);
  },
};
