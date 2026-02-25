/**
 * HUD ангара — DOM-оверлей для FPS-режима.
 *
 * Элементы создаются программно при входе в ангар и уничтожаются при выходе.
 * Содержит:
 * - Перекрестие (точка в центре экрана)
 * - Подсказка «[E] Сесть в истребитель» (при приближении к свободному слоту)
 * - Счётчик доступных истребителей
 * - Жизни / счёт
 */
import { state } from '@/shared/state';

// ── DOM-элементы ────────────────────────────────────────────────────────────

let root: HTMLDivElement | null = null;
let interactHint: HTMLDivElement | null = null;
let fighterCount: HTMLDivElement | null = null;
let statsLine: HTMLDivElement | null = null;
let crosshairDot: HTMLDivElement | null = null;

// ── Создание / уничтожение ──────────────────────────────────────────────────

export function createHangarHUD(): void {
  if (root) return;

  root = document.createElement('div');
  root.id = 'hangar-hud';

  // Перекрестие — точка
  crosshairDot = document.createElement('div');
  crosshairDot.className = 'hangar-crosshair';
  root.appendChild(crosshairDot);

  // Подсказка взаимодействия
  interactHint = document.createElement('div');
  interactHint.className = 'hangar-interact-hint';
  interactHint.textContent = '[E] Сесть в истребитель';
  interactHint.style.opacity = '0';
  root.appendChild(interactHint);

  // Счётчик истребителей
  fighterCount = document.createElement('div');
  fighterCount.className = 'hangar-fighter-count';
  root.appendChild(fighterCount);

  // Жизни / счёт
  statsLine = document.createElement('div');
  statsLine.className = 'hangar-stats';
  root.appendChild(statsLine);

  document.body.appendChild(root);
}

export function destroyHangarHUD(): void {
  if (root) {
    root.remove();
    root = null;
    interactHint = null;
    fighterCount = null;
    statsLine = null;
    crosshairDot = null;
  }
}

// ── Обновление ──────────────────────────────────────────────────────────────

/**
 * Обновить HUD ангара.
 * @param nearSlot true если игрок рядом со свободным истребителем
 * @param freeSlots количество свободных слотов
 * @param totalSlots общее количество слотов
 */
export function updateHangarHUD(nearSlot: boolean, freeSlots: number, totalSlots: number): void {
  if (!root) return;

  // Подсказка взаимодействия
  if (interactHint) {
    interactHint.style.opacity = nearSlot ? '1' : '0';
  }

  // Счётчик
  if (fighterCount) {
    fighterCount.textContent = `Истребители: ${freeSlots}/${totalSlots}`;
  }

  // Статы
  if (statsLine) {
    statsLine.textContent = `Жизни: ${state.lives}  |  Счёт: ${state.score}`;
  }
}
