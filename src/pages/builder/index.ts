/**
 * Builder GameMode — блочный конструктор от первого лица.
 *
 * Отдельный игровой режим, доступный из главного меню.
 * Переиспользует FPS-контроллер для движения.
 * Блоки размещаются через DDA raycast, рендерятся thin instances.
 *
 * enter()  → создаёт сцену, стейт, рендерер, HUD
 * update(dt) → FPS-движение + raycast + place/remove + HUD
 * exit()   → очистка всего
 */
import { builderKeyMap } from '@/shared/config/input';
import { defaultKeyMap } from '@/shared/config/input';
import { Vector3 } from '@/shared/core/vector3';
import { camera } from '@/shared/engine';
import { actions, setKeyMap, updateActions } from '@/shared/input';
import { state } from '@/shared/state';
import type { BuilderModeContext, GameModeHandler } from '@/shared/types';

import {
  type BuilderControllerState,
  type BuilderRenderer,
  type BuilderScene,
  type BuilderState,
  GRID_SIZE,
  createBuilderRenderer,
  createBuilderScene,
  createBuilderState,
  createControllerState,
  loadBlueprint,
} from '@/features/builder';
import { updateBuilderController } from '@/features/builder';
import {
  createFPSState,
  exitPointerLock,
  requestPointerLock,
  updateFPSController,
} from '@/features/fps';
import type { FPSState } from '@/features/fps';
import {
  createBuilderHUD,
  destroyBuilderHUD,
  hideSavePanel,
  isSavePanelVisible,
  showSavePanel,
  updateBuilderHUD,
} from '@/features/hud/builder-hud';

// ── Внутреннее состояние ─────────────────────────────────────────────────────

let builderState: BuilderState | null = null;
let fpsState: FPSState | null = null;
let builderScene: BuilderScene | null = null;
let renderer: BuilderRenderer | null = null;
let ctrlState: BuilderControllerState | null = null;
let onExitCallback: (() => void) | undefined;

// ── Helpers ─────────────────────────────────────────────────────────────────

function handleLoad(name: string): void {
  const loaded = loadBlueprint(name);
  if (!loaded || !renderer) return;

  // Заменяем state
  builderState!.blocks = loaded.blocks;
  builderState!.name = loaded.name;
  builderState!.currentColor = 0;

  // Пересобрать рендер
  renderer.rebuildAll();

  // Вернуть pointer lock
  requestPointerLock();
}

function handleSavePanelClose(): void {
  // Вернуть pointer lock после закрытия панели
  requestPointerLock();
}

// ── GameModeHandler ──────────────────────────────────────────────────────────

export const builderMode: GameModeHandler<BuilderModeContext> = {
  enter(context?: BuilderModeContext) {
    onExitCallback = context?.onExit;

    // 1. Создать сцену конструктора (пол-сетка, свет, коллайдеры)
    builderScene = createBuilderScene();

    // 2. Создать или загрузить builder state
    if (context?.blueprintId) {
      builderState = loadBlueprint(context.blueprintId) ?? createBuilderState();
    } else {
      builderState = createBuilderState();
    }

    // 3. FPS state — спавн над центром сетки
    const center = GRID_SIZE / 2;
    const spawnPoint = new Vector3(center, 0, center);
    fpsState = createFPSState(spawnPoint);

    // 4. Создать рендерер
    renderer = createBuilderRenderer(builderState);
    if (builderState.blocks.size > 0) {
      renderer.rebuildAll();
    }

    // 5. Контроллер
    ctrlState = createControllerState();

    // 6. Input: переключаем на builder раскладку
    setKeyMap(builderKeyMap);

    // 7. Pointer lock
    requestPointerLock();

    // 8. HUD
    createBuilderHUD(handleLoad, handleSavePanelClose);

    // 9. Скрываем стартовый экран
    const startScreen = document.getElementById('start-screen');
    if (startScreen) startScreen.style.display = 'none';
  },

  update(dt: number) {
    if (!builderState || !fpsState || !builderScene || !renderer || !ctrlState) return;

    // 1. Обновить input
    updateActions();

    // ESC — выход в меню (если панель сохранения не открыта)
    if (state.keys['Escape']) {
      if (isSavePanelVisible()) {
        hideSavePanel();
        requestPointerLock();
      } else {
        if (onExitCallback) onExitCallback();
        return;
      }
    }

    // Если панель сохранения открыта — не обрабатываем игровой ввод
    if (isSavePanelVisible()) return;

    // 2. FPS-контроллер (движение, коллизии, камера)
    updateFPSController(dt, fpsState, builderScene.colliders, camera);

    // 3. Builder контроллер (raycast, place/remove, color)
    const result = updateBuilderController(
      dt,
      fpsState,
      builderState,
      ctrlState,
      actions.place,
      actions.remove,
      actions.nextColor,
      actions.prevColor,
      actions.save,
    );

    // 4. Ghost preview
    renderer.updateGhost(result.ghostX, result.ghostY, result.ghostZ, builderState.currentColor);

    // 5. Если блок изменился — пересобрать thin instances для этого цвета
    if (result.changedColorIdx !== null) {
      renderer.rebuildColor(result.changedColorIdx);
    }

    // 6. Панель сохранения
    if (result.showSavePanel && !isSavePanelVisible()) {
      exitPointerLock();
      showSavePanel(builderState);
    }

    // 7. Обновить HUD
    updateBuilderHUD(builderState);
  },

  exit() {
    // Очистить рендерер
    if (renderer) {
      renderer.dispose();
      renderer = null;
    }

    // Очистить сцену
    if (builderScene) {
      builderScene.cleanup();
      builderScene = null;
    }

    // Убрать HUD
    destroyBuilderHUD();

    // Сбросить state
    builderState = null;
    fpsState = null;
    ctrlState = null;

    // Снять pointer lock
    exitPointerLock();

    // Восстановить раскладку
    setKeyMap(defaultKeyMap);

    // Показать стартовый экран
    const startScreen = document.getElementById('start-screen');
    if (startScreen) startScreen.style.display = 'flex';

    onExitCallback = undefined;
  },
};
