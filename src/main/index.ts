import { SceneOptimizer, SceneOptimizerOptions } from '@babylonjs/core/Misc/sceneOptimizer';
import { addToScene, camera } from '../core';
import { combatMode } from '../modes/combat';
import { explorationMode } from '../modes/exploration';
import { galaxyMode } from '../modes/galaxy';
import { menuMode } from '../modes/menu';
import { registerMode } from '../modes/registry';
import { stationMode } from '../modes/station';
import { createFighter, preloadModels } from '../scene/models';
import { scene } from '../scene/setup';
import { createStarfield } from '../scene/starfield';
import { parseHexColor, settings } from '../settings';
import '../styles/main.css';
import { playerPlane } from '../systems/player';
import { showSettingsScreen } from '../ui/settings-ui';
import { initTouchControls } from '../ui/touch-controls';
import { pauseGame, quitBattle, resumeGame, startCampaign, startQuickPlay } from './combat';
import { gameLoop } from './game-loop';
import { setupInputListeners } from './input';
import { clock, refs } from './refs';

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
  SceneOptimizer.OptimizeAsync(
    scene,
    SceneOptimizerOptions.ModerateDegradationAllowed(60),
  );

  clock.start();
  gameLoop();
}

init();
