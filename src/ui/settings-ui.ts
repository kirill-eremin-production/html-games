import * as THREE from 'three';
import { createCapitalShip, createFighter } from '../scene/models';
import {
  DEFAULT_SETTINGS,
  type GameSettings,
  parseHexColor,
  resetSettings,
  saveSettings,
  settings,
} from '../settings';

let initialized = false;
let animationId = 0;
let screenEl: HTMLDivElement;

interface PreviewState {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  model: THREE.Group;
}

let playerPreview: PreviewState;
let allyPreview: PreviewState;
let enemyPreview: PreviewState;
let capitalPreview: PreviewState;

// All input references for refreshing on reset
let colorInputs: { key: keyof GameSettings['colors']; input: HTMLInputElement }[] = [];
let sliderInputs: {
  key: keyof GameSettings['counts'];
  input: HTMLInputElement;
  label: HTMLSpanElement;
}[] = [];

function createPreviewState(width: number, height: number, cameraZ: number): PreviewState {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0x556688, 1.0));
  const dir = new THREE.DirectionalLight(0xffffff, 1.5);
  dir.position.set(5, 3, 2);
  scene.add(dir);

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 500);
  camera.position.set(0, 2, cameraZ);
  camera.lookAt(0, 0, 0);

  const model = new THREE.Group();
  scene.add(model);

  return { renderer, scene, camera, model };
}

function replaceModel(preview: PreviewState, newModel: THREE.Group): void {
  preview.scene.remove(preview.model);
  preview.model = newModel;
  preview.scene.add(newModel);
}

function rebuildFighterPreview(
  preview: PreviewState,
  bodyKey: keyof GameSettings['colors'],
  exhaustKey: keyof GameSettings['colors'],
): void {
  const model = createFighter(
    parseHexColor(settings.colors[bodyKey]),
    parseHexColor(settings.colors[exhaustKey]),
  );
  replaceModel(preview, model);
}

function rebuildCapitalPreview(): void {
  const model = createCapitalShip(0, parseHexColor(settings.colors.capitalHull));
  replaceModel(capitalPreview, model);
}

function createColorInput(
  parent: HTMLElement,
  labelText: string,
  colorKey: keyof GameSettings['colors'],
  onChangeCallback: () => void,
): void {
  const label = document.createElement('label');
  label.textContent = labelText + ' ';
  const input = document.createElement('input');
  input.type = 'color';
  input.value = settings.colors[colorKey];
  input.addEventListener('input', () => {
    settings.colors[colorKey] = input.value;
    onChangeCallback();
  });
  input.addEventListener('change', () => {
    saveSettings();
  });
  label.appendChild(input);
  parent.appendChild(label);
  colorInputs.push({ key: colorKey, input });
}

function createSlider(
  parent: HTMLElement,
  labelText: string,
  countKey: keyof GameSettings['counts'],
  min: number,
  max: number,
  step: number,
): void {
  const row = document.createElement('div');
  row.className = 'slider-row';

  const label = document.createElement('label');
  const valueSpan = document.createElement('span');
  valueSpan.textContent = String(settings.counts[countKey]);
  label.textContent = labelText + ': ';
  label.appendChild(valueSpan);

  const input = document.createElement('input');
  input.type = 'range';
  input.min = String(min);
  input.max = String(max);
  input.step = String(step);
  input.value = String(settings.counts[countKey]);
  input.addEventListener('input', () => {
    const val = Number(input.value);
    settings.counts[countKey] = val;
    valueSpan.textContent = String(val);
    saveSettings();
  });

  row.appendChild(label);
  row.appendChild(input);
  parent.appendChild(row);
  sliderInputs.push({ key: countKey, input, label: valueSpan });
}

function createPreviewCard(
  parent: HTMLElement,
  title: string,
  preview: PreviewState,
  wide = false,
): { card: HTMLElement; colorContainer: HTMLElement } {
  const card = document.createElement('div');
  card.className = wide ? 'preview-card wide' : 'preview-card';

  const h3 = document.createElement('h3');
  h3.textContent = title;
  card.appendChild(h3);

  card.appendChild(preview.renderer.domElement);

  const colorContainer = document.createElement('div');
  colorContainer.className = 'color-pair';
  card.appendChild(colorContainer);

  parent.appendChild(card);
  return { card, colorContainer };
}

function buildDOM(): void {
  screenEl = document.createElement('div');
  screenEl.id = 'settings-screen';

  const h1 = document.createElement('h1');
  h1.textContent = 'НАСТРОЙКИ';
  screenEl.appendChild(h1);

  const content = document.createElement('div');
  content.className = 'settings-content';

  // — FIGHTERS section —
  const fighterSection = document.createElement('div');
  fighterSection.className = 'settings-section';
  const fighterH2 = document.createElement('h2');
  fighterH2.textContent = 'ТЕХНИКА';
  fighterSection.appendChild(fighterH2);

  const fighterRow = document.createElement('div');
  fighterRow.className = 'preview-row';

  // Player
  playerPreview = createPreviewState(120, 120, 12);
  const { colorContainer: playerColors } = createPreviewCard(fighterRow, 'ИГРОК', playerPreview);
  createColorInput(playerColors, 'Корпус', 'playerBody', () =>
    rebuildFighterPreview(playerPreview, 'playerBody', 'playerExhaust'),
  );
  createColorInput(playerColors, 'Двигатель', 'playerExhaust', () =>
    rebuildFighterPreview(playerPreview, 'playerBody', 'playerExhaust'),
  );

  // Ally
  allyPreview = createPreviewState(120, 120, 12);
  const { colorContainer: allyColors } = createPreviewCard(fighterRow, 'СОЮЗНИК', allyPreview);
  createColorInput(allyColors, 'Корпус', 'allyBody', () =>
    rebuildFighterPreview(allyPreview, 'allyBody', 'allyExhaust'),
  );
  createColorInput(allyColors, 'Двигатель', 'allyExhaust', () =>
    rebuildFighterPreview(allyPreview, 'allyBody', 'allyExhaust'),
  );

  // Enemy
  enemyPreview = createPreviewState(120, 120, 12);
  const { colorContainer: enemyColors } = createPreviewCard(fighterRow, 'ПРОТИВНИК', enemyPreview);
  createColorInput(enemyColors, 'Корпус', 'enemyBody', () =>
    rebuildFighterPreview(enemyPreview, 'enemyBody', 'enemyExhaust'),
  );
  createColorInput(enemyColors, 'Двигатель', 'enemyExhaust', () =>
    rebuildFighterPreview(enemyPreview, 'enemyBody', 'enemyExhaust'),
  );

  fighterSection.appendChild(fighterRow);

  // Capital ship row
  const capitalRow = document.createElement('div');
  capitalRow.className = 'preview-row';
  capitalRow.style.marginTop = '20px';

  capitalPreview = createPreviewState(200, 150, 120);
  const { colorContainer: capitalColors } = createPreviewCard(
    capitalRow,
    'БОЕВОЙ КОРАБЛЬ',
    capitalPreview,
    true,
  );
  createColorInput(capitalColors, 'Корпус', 'capitalHull', rebuildCapitalPreview);

  fighterSection.appendChild(capitalRow);
  content.appendChild(fighterSection);

  // — COUNTS section —
  const countsSection = document.createElement('div');
  countsSection.className = 'settings-section';
  const countsH2 = document.createElement('h2');
  countsH2.textContent = 'КОЛИЧЕСТВО';
  countsSection.appendChild(countsH2);

  createSlider(countsSection, 'Боевые корабли', 'capitalShips', 1, 5, 1);
  createSlider(countsSection, 'Союзники', 'allies', 8, 64, 4);
  createSlider(countsSection, 'Противники', 'enemies', 8, 64, 4);

  content.appendChild(countsSection);

  // — Buttons —
  const buttons = document.createElement('div');
  buttons.className = 'settings-buttons';

  const resetBtn = document.createElement('button');
  resetBtn.id = 'settings-reset';
  resetBtn.textContent = 'СБРОС';
  resetBtn.addEventListener('click', () => {
    resetSettings();
    refreshAllInputs();
    refreshAllPreviews();
  });
  buttons.appendChild(resetBtn);

  const backBtn = document.createElement('button');
  backBtn.id = 'settings-back';
  backBtn.textContent = 'НАЗАД';
  backBtn.addEventListener('click', () => {
    hideSettingsScreen();
  });
  buttons.appendChild(backBtn);

  content.appendChild(buttons);
  screenEl.appendChild(content);
  document.body.appendChild(screenEl);
}

function refreshAllInputs(): void {
  for (const { key, input } of colorInputs) {
    input.value = settings.colors[key];
  }
  for (const { key, input, label } of sliderInputs) {
    input.value = String(settings.counts[key]);
    label.textContent = String(settings.counts[key]);
  }
}

function refreshAllPreviews(): void {
  rebuildFighterPreview(playerPreview, 'playerBody', 'playerExhaust');
  rebuildFighterPreview(allyPreview, 'allyBody', 'allyExhaust');
  rebuildFighterPreview(enemyPreview, 'enemyBody', 'enemyExhaust');
  rebuildCapitalPreview();
}

function animate(): void {
  animationId = requestAnimationFrame(animate);
  const t = Date.now() * 0.001;
  for (const p of [playerPreview, allyPreview, enemyPreview, capitalPreview]) {
    p.model.rotation.y = t * 0.5;
    p.renderer.render(p.scene, p.camera);
  }
}

export function showSettingsScreen(): void {
  if (!initialized) {
    buildDOM();
    initialized = true;
  }
  refreshAllInputs();
  refreshAllPreviews();
  screenEl.style.display = 'flex';
  (document.getElementById('start-screen')! as HTMLElement).style.display = 'none';
  animate();
}

export function hideSettingsScreen(): void {
  cancelAnimationFrame(animationId);
  screenEl.style.display = 'none';
  (document.getElementById('start-screen')! as HTMLElement).style.display = 'flex';
}
