import { Engine } from '@babylonjs/core/Engines/engine';
import { Color4 } from '@babylonjs/core/Maths/math.color';
import { Scene as BScene } from '@babylonjs/core/scene';

import {
  AmbientLight,
  Color,
  DirectionalLight,
  type EngineMesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  type TransformNode,
  cloneModel,
  getFactoryScene,
  isEngineMesh,
  loadModel,
  setFactoryScene,
  traverseNode,
} from '@/shared/core';
import {
  type GameSettings,
  parseHexColor,
  resetSettings,
  saveSettings,
  settings,
} from '@/shared/settings';

let initialized = false;
let animationId = 0;
let screenEl: HTMLDivElement;

interface PreviewState {
  canvas: HTMLCanvasElement;
  engine: Engine;
  scene: BScene;
  camera: PerspectiveCamera;
  model: TransformNode | null;
  template: TransformNode | null;
}

let playerPreview: PreviewState;
let allyPreview: PreviewState;
let enemyPreview: PreviewState;
let capitalPreview: PreviewState;

// All input references for refreshing on reset
const colorInputs: { key: keyof GameSettings['colors']; input: HTMLInputElement }[] = [];
const sliderInputs: {
  key: keyof GameSettings['counts'];
  input: HTMLInputElement;
  label: HTMLSpanElement;
}[] = [];

function createPreviewState(width: number, height: number, cameraZ: number): PreviewState {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const engine = new Engine(canvas, true, {
    preserveDrawingBuffer: true,
    alpha: true,
  });
  engine.setHardwareScalingLevel(1 / Math.min(window.devicePixelRatio, 2));

  const scene = new BScene(engine);
  scene.clearColor = new Color4(0, 0, 0, 0);

  new AmbientLight(0x556688, 1.0, scene as any);
  const dir = new DirectionalLight(0xffffff, 1.5, scene as any);
  dir.position.set(5, 3, 2);

  const camera = new PerspectiveCamera(45, width / height, 0.1, 500, scene as any);
  camera.position.set(0, 2, cameraZ);
  camera.lookAt(0, 0, 0);
  scene.activeCamera = camera;

  return { canvas, engine, scene, camera, model: null, template: null };
}

/** Load a GLB template into a preview scene. */
async function loadPreviewTemplate(preview: PreviewState, url: string): Promise<void> {
  const original = getFactoryScene();
  setFactoryScene(preview.scene as any);
  preview.template = await loadModel(url);
  setFactoryScene(original);
}

/** Clone from the preview's own template (same WebGL context). */
function cloneFromPreview(preview: PreviewState): TransformNode {
  const original = getFactoryScene();
  setFactoryScene(preview.scene as any);
  const clone = cloneModel(preview.template!);
  clone.setEnabled(true);
  traverseNode(clone, (child) => {
    if ('setEnabled' in child) (child as TransformNode).setEnabled(true);
  });
  setFactoryScene(original);
  return clone;
}

function applyFighterMaterials(
  group: TransformNode,
  bodyColor: number,
  exhaustColor: number,
  scene: BScene,
): void {
  const bodyMat = new MeshPhongMaterial(
    { color: bodyColor, emissive: bodyColor, emissiveIntensity: 0.2 },
    scene,
  );
  const c = new Color(bodyColor);
  const accentMat = new MeshPhongMaterial(
    {
      color: c.clone().multiplyScalar(0.7),
      emissive: c,
      emissiveIntensity: 0.1,
    },
    scene,
  );
  const pNoseMat = new MeshPhongMaterial(
    { color: 0xaabbcc, emissive: 0x334455, emissiveIntensity: 0.15 },
    scene,
  );
  const pCanopyMat = new MeshPhongMaterial(
    {
      color: 0x4488cc,
      emissive: 0x224466,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.5,
      shininess: 100,
    },
    scene,
  );
  const glowMat = new MeshBasicMaterial(
    {
      color: exhaustColor,
      transparent: true,
      opacity: 0.9,
      blending: 2,
      depthWrite: false,
    },
    scene,
  );
  const haloMat = new MeshBasicMaterial(
    {
      color: exhaustColor,
      transparent: true,
      opacity: 0.25,
      blending: 2,
      depthWrite: false,
    },
    scene,
  );

  traverseNode(group, (child) => {
    if (!isEngineMesh(child)) return;
    const mesh = child as EngineMesh;
    const n = mesh.name;
    if (n.includes('body_')) mesh.material = bodyMat;
    else if (n.includes('accent_')) mesh.material = accentMat;
    else if (n.endsWith('nose') || n.endsWith('.nose')) mesh.material = pNoseMat;
    else if (n.endsWith('canopy') || n.endsWith('.canopy')) mesh.material = pCanopyMat;
    else if (n.endsWith('exhaust') || n.endsWith('exhaust_L')) mesh.material = glowMat;
    else if (n.endsWith('glow') || n.endsWith('glow_L')) mesh.material = haloMat;
  });
}

function rebuildFighterPreview(
  preview: PreviewState,
  bodyKey: keyof GameSettings['colors'],
  exhaustKey: keyof GameSettings['colors'],
): void {
  if (!preview.template) return;
  if (preview.model) preview.model.dispose();
  const model = cloneFromPreview(preview);
  applyFighterMaterials(
    model,
    parseHexColor(settings.colors[bodyKey]),
    parseHexColor(settings.colors[exhaustKey]),
    preview.scene,
  );
  model.scale.setAll(1.5);
  preview.model = model;
}

function rebuildCapitalPreview(): void {
  if (!capitalPreview.template) return;
  if (capitalPreview.model) capitalPreview.model.dispose();
  const model = cloneFromPreview(capitalPreview);
  model.scale.setAll(1.5);
  capitalPreview.model = model;
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

  card.appendChild(preview.canvas);

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

/** Load templates into each preview scene (once). */
async function loadPreviewTemplates(): Promise<void> {
  await Promise.all([
    loadPreviewTemplate(playerPreview, './models/fighter.glb'),
    loadPreviewTemplate(allyPreview, './models/fighter.glb'),
    loadPreviewTemplate(enemyPreview, './models/fighter.glb'),
    loadPreviewTemplate(capitalPreview, './models/capital-ship.glb'),
  ]);
}

function animate(): void {
  animationId = requestAnimationFrame(animate);
  const t = Date.now() * 0.001;
  for (const p of [playerPreview, allyPreview, enemyPreview, capitalPreview]) {
    if (p.model) p.model.rotation.y = t * 0.5;
    p.scene.render();
  }
}

export async function showSettingsScreen(): Promise<void> {
  if (!initialized) {
    buildDOM();
    initialized = true;
    await loadPreviewTemplates();
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
