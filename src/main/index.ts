import { createFighter, preloadModels } from '../scene/models';
import { camera, scene } from '../scene/setup';
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
  // Load GLTF models before anything else
  await preloadModels();

  // Build player model
  refs.playerModel = createFighter(
    parseHexColor(settings.colors.playerBody),
    parseHexColor(settings.colors.playerExhaust),
  );
  playerPlane.add(refs.playerModel);
  scene.add(playerPlane);
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

  clock.start();
  gameLoop();
}

init();
