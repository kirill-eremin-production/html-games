/**
 * HUD редактора интерьеров — DOM-оверлей.
 *
 * Содержит:
 * - Перекрестие
 * - Палитра типов блоков (горизонтальная полоса вверху)
 * - Палитра цветов (внизу)
 * - Подсказки управления
 * - Счётчик блоков
 * - Export Panel (JSON + Copy to clipboard)
 */
import { INTERIOR_BLOCK_TYPES, INTERIOR_PALETTE } from '@/shared/interior';
import type { InteriorBuilderState } from '@/shared/interior';
import { stateToJSON } from '@/shared/interior';

// ── DOM-элементы ────────────────────────────────────────────────────────────

let root: HTMLDivElement | null = null;
let typeItems: HTMLDivElement[] = [];
let paletteItems: HTMLDivElement[] = [];
let blockCountEl: HTMLDivElement | null = null;

// Export panel
let exportPanel: HTMLDivElement | null = null;
let exportPanelVisible = false;
let nameInput: HTMLInputElement | null = null;
let jsonTextarea: HTMLTextAreaElement | null = null;

let onCloseCallback: (() => void) | null = null;

// ── Создание ────────────────────────────────────────────────────────────────

export function createInteriorBuilderHUD(onClose: () => void): void {
  if (root) return;
  onCloseCallback = onClose;

  root = document.createElement('div');
  root.id = 'interior-builder-hud';

  // Перекрестие
  const crosshair = document.createElement('div');
  crosshair.className = 'builder-crosshair';
  root.appendChild(crosshair);

  // Палитра типов блоков (вверху)
  const typeContainer = document.createElement('div');
  typeContainer.className = 'interior-type-palette';
  typeItems = [];
  for (const info of INTERIOR_BLOCK_TYPES) {
    const item = document.createElement('div');
    item.className = 'interior-type-item';
    const colorHex = `#${info.defaultColor.toString(16).padStart(6, '0')}`;
    item.style.borderColor = colorHex;
    item.textContent = info.label;
    if (info.isMarker) item.classList.add('marker');
    typeContainer.appendChild(item);
    typeItems.push(item);
  }
  root.appendChild(typeContainer);

  // Палитра цветов (внизу)
  const paletteContainer = document.createElement('div');
  paletteContainer.className = 'builder-palette';
  paletteItems = [];
  for (let i = 0; i < INTERIOR_PALETTE.length; i++) {
    const item = document.createElement('div');
    item.className = 'builder-palette-item';
    item.style.backgroundColor = `#${INTERIOR_PALETTE[i].toString(16).padStart(6, '0')}`;
    paletteContainer.appendChild(item);
    paletteItems.push(item);
  }
  root.appendChild(paletteContainer);

  // Подсказки
  const hints = document.createElement('div');
  hints.className = 'builder-hints';
  hints.innerHTML =
    '<b>T/G</b> — тип &nbsp; <b>Q/E</b> — цвет &nbsp; <b>ЛКМ</b> — поставить &nbsp; <b>ПКМ</b> — убрать &nbsp; <b>P</b> — экспорт &nbsp; <b>ESC</b> — выход';
  root.appendChild(hints);

  // Счётчик блоков
  blockCountEl = document.createElement('div');
  blockCountEl.className = 'builder-block-count';
  root.appendChild(blockCountEl);

  // Export Panel (скрыт)
  exportPanel = document.createElement('div');
  exportPanel.className = 'interior-export-panel';
  exportPanel.style.display = 'none';
  exportPanel.innerHTML = `
    <h3>Экспорт уровня</h3>
    <div class="interior-export-row">
      <input type="text" class="interior-name-input" placeholder="Имя уровня..." />
    </div>
    <textarea class="interior-json-output" readonly rows="12"></textarea>
    <div class="interior-export-buttons">
      <button class="interior-copy-btn">Copy to clipboard</button>
      <button class="interior-close-btn">Закрыть</button>
    </div>
  `;
  root.appendChild(exportPanel);

  nameInput = exportPanel.querySelector('.interior-name-input');
  jsonTextarea = exportPanel.querySelector('.interior-json-output');
  const copyBtn = exportPanel.querySelector('.interior-copy-btn')!;
  const closeBtn = exportPanel.querySelector('.interior-close-btn')!;

  copyBtn.addEventListener('click', handleCopy);
  closeBtn.addEventListener('click', hideExportPanel);

  document.body.appendChild(root);
}

export function destroyInteriorBuilderHUD(): void {
  if (root) {
    root.remove();
    root = null;
    typeItems = [];
    paletteItems = [];
    blockCountEl = null;
    exportPanel = null;
    exportPanelVisible = false;
    nameInput = null;
    jsonTextarea = null;
    onCloseCallback = null;
  }
}

// ── Обновление ──────────────────────────────────────────────────────────────

export function updateInteriorBuilderHUD(state: InteriorBuilderState): void {
  if (!root) return;

  // Подсветка типа
  for (let i = 0; i < typeItems.length; i++) {
    typeItems[i].classList.toggle(
      'active',
      INTERIOR_BLOCK_TYPES[i].type === state.currentBlockType,
    );
  }

  // Подсветка цвета
  for (let i = 0; i < paletteItems.length; i++) {
    paletteItems[i].classList.toggle('active', i === state.currentColor);
  }

  // Счётчик
  if (blockCountEl) {
    blockCountEl.textContent = `Блоки: ${state.blocks.size}`;
  }
}

// ── Export Panel ────────────────────────────────────────────────────────────

let currentState: InteriorBuilderState | null = null;

export function showExportPanel(state: InteriorBuilderState): void {
  if (!exportPanel) return;

  currentState = state;
  exportPanelVisible = true;
  exportPanel.style.display = 'flex';

  if (nameInput) nameInput.value = state.name;

  // Генерация JSON
  updateExportJSON();
}

function updateExportJSON(): void {
  if (!currentState || !jsonTextarea || !nameInput) return;
  currentState.name = nameInput.value.trim() || 'Untitled';
  const json = stateToJSON(currentState);
  jsonTextarea.value = JSON.stringify(json, null, 2);
}

export function hideExportPanel(): void {
  if (!exportPanel) return;
  exportPanelVisible = false;
  exportPanel.style.display = 'none';
  currentState = null;
  if (onCloseCallback) onCloseCallback();
}

export function isExportPanelVisible(): boolean {
  return exportPanelVisible;
}

function handleCopy(): void {
  if (!jsonTextarea) return;

  // Обновить JSON перед копированием
  updateExportJSON();

  navigator.clipboard.writeText(jsonTextarea.value).then(
    () => {
      const copyBtn = exportPanel?.querySelector('.interior-copy-btn');
      if (copyBtn) {
        copyBtn.textContent = 'Скопировано!';
        setTimeout(() => {
          copyBtn.textContent = 'Copy to clipboard';
        }, 1500);
      }
    },
    () => {
      // Fallback: выделить текст
      jsonTextarea!.select();
    },
  );
}
