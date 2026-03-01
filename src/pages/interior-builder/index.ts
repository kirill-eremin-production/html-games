/**
 * Interior Builder GameMode — редактор интерьеров от первого лица.
 *
 * Отдельный игровой режим, доступный из главного меню.
 * Переиспользует FPS-контроллер для движения.
 * Блоки размещаются через DDA raycast, рендерятся thin instances.
 * Новые типы блоков: стена, пол, потолок, дверь, лестница, маркеры.
 * Экспорт JSON для загрузки в Interior Scene.
 */
import { interiorBuilderKeyMap } from '@/shared/config/input';
import { defaultKeyMap } from '@/shared/config/input';
import { Vector3 } from '@/shared/core/vector3';
import { camera } from '@/shared/engine';
import { actions, setKeyMap, updateActions } from '@/shared/input';
import { GRID_SIZE, createInteriorBuilderState } from '@/shared/interior';
import type { InteriorBuilderState } from '@/shared/interior';
import { state } from '@/shared/state';
import type { GameModeHandler, InteriorBuilderModeContext } from '@/shared/types';

import {
  createFPSState,
  exitPointerLock,
  requestPointerLock,
  updateFPSController,
} from '@/features/fps';
import type { FPSState } from '@/features/fps';
import {
  createInteriorBuilderHUD,
  destroyInteriorBuilderHUD,
  hideExportPanel,
  isExportPanelVisible,
  showExportPanel,
  updateInteriorBuilderHUD,
} from '@/features/hud/interior-builder-hud';
import {
  type InteriorBuilderControllerState,
  type InteriorBuilderRenderer,
  type InteriorBuilderScene,
  createInteriorBuilderRenderer,
  createInteriorBuilderScene,
  createInteriorControllerState,
  updateInteriorBuilderController,
} from '@/features/interior-builder';

// ── Внутреннее состояние ─────────────────────────────────────────────────────

let builderState: InteriorBuilderState | null = null;
let fpsState: FPSState | null = null;
let builderScene: InteriorBuilderScene | null = null;
let renderer: InteriorBuilderRenderer | null = null;
let ctrlState: InteriorBuilderControllerState | null = null;
let onExitCallback: (() => void) | undefined;

// ── Helpers ─────────────────────────────────────────────────────────────────

function handleExportPanelClose(): void {
  requestPointerLock();
}

// ── GameModeHandler ──────────────────────────────────────────────────────────

export const interiorBuilderMode: GameModeHandler<InteriorBuilderModeContext> = {
  enter(context?: InteriorBuilderModeContext) {
    onExitCallback = context?.onExit;

    // 1. Создать сцену (пол-сетка, свет, коллайдеры)
    builderScene = createInteriorBuilderScene();

    // 2. Создать builder state
    builderState = createInteriorBuilderState();

    // 3. FPS state — спавн над центром сетки
    const center = GRID_SIZE / 2;
    const spawnPoint = new Vector3(center, 0, center);
    fpsState = createFPSState(spawnPoint);

    // 4. Рендерер
    renderer = createInteriorBuilderRenderer(builderState);

    // 5. Контроллер
    ctrlState = createInteriorControllerState();

    // 6. Input: переключаем на interior builder раскладку
    setKeyMap(interiorBuilderKeyMap);

    // 7. Pointer lock
    requestPointerLock();

    // 8. HUD
    createInteriorBuilderHUD(handleExportPanelClose);

    // 9. Скрываем стартовый экран
    const startScreen = document.getElementById('start-screen');
    if (startScreen) startScreen.style.display = 'none';
  },

  update(dt: number) {
    if (!builderState || !fpsState || !builderScene || !renderer || !ctrlState) return;

    // 1. Обновить input
    updateActions();

    // ESC — выход или закрыть панель
    if (state.keys['Escape']) {
      if (isExportPanelVisible()) {
        hideExportPanel();
        requestPointerLock();
      } else {
        if (onExitCallback) onExitCallback();
        return;
      }
    }

    // Если панель экспорта открыта — не обрабатываем игровой ввод
    if (isExportPanelVisible()) return;

    // 2. FPS-контроллер
    updateFPSController(dt, fpsState, builderScene.colliders, camera);

    // 3. Builder контроллер
    const result = updateInteriorBuilderController(
      dt,
      fpsState,
      builderState,
      ctrlState,
      actions.place,
      actions.remove,
      actions.nextColor,
      actions.prevColor,
      actions.nextBlockType,
      actions.prevBlockType,
      actions.save,
    );

    // 4. Ghost preview
    renderer.updateGhost(
      result.ghostX,
      result.ghostY,
      result.ghostZ,
      builderState.currentBlockType,
      builderState.currentColor,
    );

    // 5. Если блок изменился — пересобрать
    if (result.rebuildKey !== null) {
      renderer.rebuildByKey(result.rebuildKey);
    }

    // 6. Export panel
    if (result.showExportPanel && !isExportPanelVisible()) {
      exitPointerLock();
      showExportPanel(builderState);
    }

    // 7. HUD
    updateInteriorBuilderHUD(builderState);
  },

  exit() {
    if (renderer) {
      renderer.dispose();
      renderer = null;
    }

    if (builderScene) {
      builderScene.cleanup();
      builderScene = null;
    }

    destroyInteriorBuilderHUD();

    builderState = null;
    fpsState = null;
    ctrlState = null;

    exitPointerLock();
    setKeyMap(defaultKeyMap);

    const startScreen = document.getElementById('start-screen');
    if (startScreen) startScreen.style.display = 'flex';

    onExitCallback = undefined;
  },
};
