/**
 * HUD конструктора — DOM-оверлей.
 *
 * Содержит:
 * - Перекрестие (точка в центре)
 * - Палитра цветов (горизонтальная полоса внизу)
 * - Подсказки управления
 * - Счётчик блоков
 * - Панель сохранения/загрузки (по кнопке P)
 */
import { BLOCK_PALETTE, type BuilderState, GRID_SIZE } from '@/features/builder/builder-state';
import { deleteBlueprint, listBlueprints, saveBlueprint } from '@/features/builder/builder-storage';

// ── DOM-элементы ────────────────────────────────────────────────────────────

let root: HTMLDivElement | null = null;
let crosshairDot: HTMLDivElement | null = null;
let paletteContainer: HTMLDivElement | null = null;
let paletteItems: HTMLDivElement[] = [];
let blockCountEl: HTMLDivElement | null = null;
let hintsEl: HTMLDivElement | null = null;

// Save panel
let savePanel: HTMLDivElement | null = null;
let savePanelVisible = false;
let nameInput: HTMLInputElement | null = null;
let blueprintList: HTMLDivElement | null = null;

// Callbacks
let onLoadCallback: ((name: string) => void) | null = null;
let onCloseCallback: (() => void) | null = null;

// ── Создание / уничтожение ──────────────────────────────────────────────────

export function createBuilderHUD(onLoad: (name: string) => void, onClose: () => void): void {
  if (root) return;

  onLoadCallback = onLoad;
  onCloseCallback = onClose;

  root = document.createElement('div');
  root.id = 'builder-hud';

  // Перекрестие
  crosshairDot = document.createElement('div');
  crosshairDot.className = 'builder-crosshair';
  root.appendChild(crosshairDot);

  // Палитра цветов
  paletteContainer = document.createElement('div');
  paletteContainer.className = 'builder-palette';
  paletteItems = [];
  for (let i = 0; i < BLOCK_PALETTE.length; i++) {
    const item = document.createElement('div');
    item.className = 'builder-palette-item';
    item.style.backgroundColor = `#${BLOCK_PALETTE[i].toString(16).padStart(6, '0')}`;
    paletteContainer.appendChild(item);
    paletteItems.push(item);
  }
  root.appendChild(paletteContainer);

  // Подсказки
  hintsEl = document.createElement('div');
  hintsEl.className = 'builder-hints';
  hintsEl.innerHTML =
    '<b>Q/E</b> — цвет &nbsp; <b>ЛКМ</b> — поставить &nbsp; <b>ПКМ</b> — убрать &nbsp; <b>P</b> — сохранить &nbsp; <b>ESC</b> — выход';
  root.appendChild(hintsEl);

  // Счётчик блоков
  blockCountEl = document.createElement('div');
  blockCountEl.className = 'builder-block-count';
  root.appendChild(blockCountEl);

  // Панель сохранения (скрыта по умолчанию)
  savePanel = document.createElement('div');
  savePanel.className = 'builder-save-panel';
  savePanel.style.display = 'none';
  savePanel.innerHTML = `
    <h3>Сохранение / Загрузка</h3>
    <div class="builder-save-row">
      <input type="text" class="builder-name-input" placeholder="Имя чертежа..." />
      <button class="builder-save-btn">Сохранить</button>
    </div>
    <div class="builder-blueprint-list"></div>
    <button class="builder-close-btn">Закрыть</button>
  `;
  root.appendChild(savePanel);

  // Получаем ссылки на элементы панели
  nameInput = savePanel.querySelector('.builder-name-input');
  blueprintList = savePanel.querySelector('.builder-blueprint-list');
  const saveBtn = savePanel.querySelector('.builder-save-btn')!;
  const closeBtn = savePanel.querySelector('.builder-close-btn')!;

  saveBtn.addEventListener('click', handleSave);
  closeBtn.addEventListener('click', hideSavePanel);

  document.body.appendChild(root);
}

export function destroyBuilderHUD(): void {
  if (root) {
    root.remove();
    root = null;
    crosshairDot = null;
    paletteContainer = null;
    paletteItems = [];
    blockCountEl = null;
    hintsEl = null;
    savePanel = null;
    savePanelVisible = false;
    nameInput = null;
    blueprintList = null;
    onLoadCallback = null;
    onCloseCallback = null;
  }
}

// ── Обновление ──────────────────────────────────────────────────────────────

/** Обновить HUD конструктора каждый кадр */
export function updateBuilderHUD(state: BuilderState): void {
  if (!root) return;

  // Обновить выделение в палитре
  for (let i = 0; i < paletteItems.length; i++) {
    paletteItems[i].classList.toggle('active', i === state.currentColor);
  }

  // Счётчик блоков
  if (blockCountEl) {
    const max = GRID_SIZE * GRID_SIZE * GRID_SIZE;
    blockCountEl.textContent = `Блоки: ${state.blocks.size} / ${max}`;
  }
}

// ── Панель сохранения ───────────────────────────────────────────────────────

let currentState: BuilderState | null = null;

export function showSavePanel(state: BuilderState): void {
  if (!savePanel) return;

  currentState = state;
  savePanelVisible = true;
  savePanel.style.display = 'flex';

  if (nameInput) nameInput.value = state.name;

  refreshBlueprintList();
}

export function hideSavePanel(): void {
  if (!savePanel) return;

  savePanelVisible = false;
  savePanel.style.display = 'none';
  currentState = null;

  if (onCloseCallback) onCloseCallback();
}

export function isSavePanelVisible(): boolean {
  return savePanelVisible;
}

function handleSave(): void {
  if (!currentState || !nameInput) return;

  const name = nameInput.value.trim();
  if (!name) return;

  currentState.name = name;
  saveBlueprint(currentState);
  refreshBlueprintList();
}

function refreshBlueprintList(): void {
  if (!blueprintList) return;

  const names = listBlueprints();
  blueprintList.innerHTML = '';

  if (names.length === 0) {
    blueprintList.innerHTML = '<div class="builder-no-blueprints">Нет сохранённых чертежей</div>';
    return;
  }

  for (const name of names) {
    const row = document.createElement('div');
    row.className = 'builder-blueprint-row';

    const label = document.createElement('span');
    label.className = 'builder-blueprint-name';
    label.textContent = name;

    const loadBtn = document.createElement('button');
    loadBtn.className = 'builder-load-btn';
    loadBtn.textContent = 'Загрузить';
    loadBtn.addEventListener('click', () => {
      hideSavePanel();
      if (onLoadCallback) onLoadCallback(name);
    });

    const delBtn = document.createElement('button');
    delBtn.className = 'builder-del-btn';
    delBtn.textContent = 'Удалить';
    delBtn.addEventListener('click', () => {
      deleteBlueprint(name);
      refreshBlueprintList();
    });

    row.appendChild(label);
    row.appendChild(loadBtn);
    row.appendChild(delBtn);
    blueprintList.appendChild(row);
  }
}
