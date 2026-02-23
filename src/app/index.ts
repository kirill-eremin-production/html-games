import { SceneOptimizer, SceneOptimizerOptions } from '@babylonjs/core/Misc/sceneOptimizer';

import { addToScene } from '@/shared/core';
import { camera } from '@/shared/engine';
import { parseHexColor, settings } from '@/shared/settings';

import { pauseGame, quitBattle, resumeGame } from './pause';
import { startCampaign, startQuickPlay } from './start';
import { gameLoop } from './game-loop';
import { setupInputListeners } from './input-listeners';
import { clock, refs } from '@/shared/refs/app-refs';
import { combatMode } from '@/pages/combat';
import { explorationMode } from '@/pages/exploration';
import { galaxyMode } from '@/pages/galaxy';
import { menuMode } from '@/pages/menu';
import { registerMode } from './mode-registry';
import { stationMode } from '@/pages/station';
import { createFighter } from '@/entities/fighter';
import { preloadModels } from '@/shared/model-loader';
import { scene } from '@/shared/engine';
import { createStarfield } from '@/features/flight/starfield';
import '../styles/main.css';
import { playerPlane } from '@/features/flight/player-system';
import { showSettingsScreen } from '@/features/settings/settings-ui';
import { initTouchControls } from '@/features/hud/touch-controls';

async function init(): Promise<void> {
  // Register game modes
  registerMode('menu', menuMode);
  registerMode('result', menuMode);
  registerMode('galaxy', galaxyMode);
  registerMode('station', stationMode);
  registerMode('exploration', explorationMode);
  registerMode('combat', combatMode);

  // Load GLTF models before anything else
  await preloadModels();

  // Build player model
  refs.playerModel = createFighter(
    parseHexColor(settings.colors.playerBody),
    parseHexColor(settings.colors.playerExhaust),
  );
  playerPlane.add(refs.playerModel);
  addToScene(playerPlane);
  playerPlane.position.set(0, 0, 0);

  // Init
  createStarfield();
  camera.position.set(-10.5, 3.75, 0);
  camera.lookAt(0, 0, 0);

  // Event listeners
  setupInputListeners();

  document.getElementById('resume-btn')!.addEventListener('click', resumeGame);
  document.getElementById('quit-btn')!.addEventListener('click', quitBattle);
  document.getElementById('start-btn')!.addEventListener('click', startQuickPlay);
  document.getElementById('restart-btn')!.addEventListener('click', startQuickPlay);
  document.getElementById('victory-restart-btn')!.addEventListener('click', startQuickPlay);
  document.getElementById('campaign-btn')!.addEventListener('click', startCampaign);
  document.getElementById('settings-btn')!.addEventListener('click', showSettingsScreen);

  initTouchControls(pauseGame);

  // Auto-optimize scene when FPS drops
  SceneOptimizer.OptimizeAsync(scene, SceneOptimizerOptions.ModerateDegradationAllowed(60));

  clock.start();
  gameLoop();
}

init();
