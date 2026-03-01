/**
 * Interior Scene GameMode — FPS-перестрелка в интерьере станции.
 *
 * Загружает уровень из JSON (захардкоженный или из контекста).
 * Использует FPS-контроллер для движения, hitscan для стрельбы,
 * ECS для врагов (AI, здоровье, урон).
 *
 * Условие победы: все враги уничтожены.
 * Смерть: respawn с восстановлением HP.
 */
import { defaultKeyMap, interiorFpsKeyMap } from '@/shared/config/input';
import { Vector3 } from '@/shared/core/vector3';
import { resetWorld, world } from '@/shared/ecs/combat-world';
import { camera } from '@/shared/engine';
import { actions, setKeyMap, updateActions } from '@/shared/input';
import { state } from '@/shared/state';
import type { GameModeHandler, GameSystem, InteriorSceneModeContext } from '@/shared/types';

import { InteriorAIComponent } from '@/entities/ai/interior-ai-component';
import { HealthComponent } from '@/entities/components';
import type { AABB } from '@/entities/objects/hangar';

import { lifetimeSystem } from '@/features/combat/lifetime-system';
import { projectileMovementSystem } from '@/features/combat/movement-system';
import {
  createFPSState,
  exitPointerLock,
  requestPointerLock,
  updateFPSController,
} from '@/features/fps';
import type { FPSState } from '@/features/fps';
import {
  createInteriorHUD,
  destroyInteriorHUD,
  showDeathScreen,
  showVictoryScreen,
  updateInteriorHUD,
} from '@/features/hud/interior-hud';
import {
  type InteriorSceneData,
  type InteriorWeaponState,
  type SpawnedEnemies,
  TEST_LEVEL,
  createInteriorAISystem,
  createInteriorCollisionSystem,
  createInteriorHealthSystem,
  createWeaponState,
  fireWeapon,
  loadInteriorFromJSON,
  spawnInteriorEnemies,
  updateWeapon,
} from '@/features/interior-scene';
import { renderSystem } from '@/features/rendering/render-system';

// ── Внутреннее состояние ─────────────────────────────────────────────────────

let sceneData: InteriorSceneData | null = null;
let fpsState: FPSState | null = null;
let weaponState: InteriorWeaponState | null = null;
let spawnedEnemies: SpawnedEnemies | null = null;
let aiSystem: GameSystem | null = null;
let healthSystem: GameSystem | null = null;
let collisionSystem: GameSystem | null = null;

let playerHP = 100;
const MAX_PLAYER_HP = 100;
let damageFlash = 0;
let totalEnemies = 0;
let isDead = false;
let isVictory = false;

let onCompleteCallback: ((victory: boolean) => void) | undefined;
let onExitCallback: (() => void) | undefined;

// Refs для передачи в системы
const fpsRef = { current: null as unknown as FPSState };
const collidersRef = { current: [] as AABB[] };

// ── Helpers ─────────────────────────────────────────────────────────────────

function handleEnemyAttack(damage: number): void {
  if (isDead) return;
  playerHP -= damage;
  damageFlash = 0.5;
  if (playerHP <= 0) {
    playerHP = 0;
    handlePlayerDeath();
  }
}

function handlePlayerDeath(): void {
  isDead = true;
  exitPointerLock();
  showDeathScreen(handleRespawn);
}

function handleRespawn(): void {
  if (!sceneData || !fpsState) return;
  isDead = false;
  playerHP = MAX_PLAYER_HP;
  damageFlash = 0;

  // Восстановить позицию
  const sp = sceneData.playerSpawn;
  fpsState.position.set(sp.x + 0.5, sp.y, sp.z + 0.5);
  fpsState.velocity.set(0, 0, 0);
  fpsState.yaw = 0;
  fpsState.pitch = 0;

  // Сбросить перегрев
  if (weaponState) {
    weaponState.heat = 0;
    weaponState.overheated = false;
    weaponState.cooldown = 0;
  }

  requestPointerLock();
}

function countAliveEnemies(): number {
  let alive = 0;
  const entities = world.query(InteriorAIComponent, HealthComponent);
  for (const {
    components: [, health],
  } of entities) {
    if (health.current > 0) alive++;
  }
  return alive;
}

function handleVictory(): void {
  isVictory = true;
  exitPointerLock();
  showVictoryScreen(() => {
    if (onCompleteCallback) onCompleteCallback(true);
    else if (onExitCallback) onExitCallback();
  });
}

// ── GameModeHandler ──────────────────────────────────────────────────────────

export const interiorSceneMode: GameModeHandler<InteriorSceneModeContext> = {
  enter(context?: InteriorSceneModeContext) {
    onCompleteCallback = context?.onComplete;
    onExitCallback = context?.onExit;

    // 1. Загрузить JSON уровня
    const levelJSON = context?.levelJSON ?? TEST_LEVEL;

    // 2. Построить сцену
    sceneData = loadInteriorFromJSON(levelJSON);

    // 3. Reset ECS
    resetWorld();

    // 4. Создать FPS state
    const sp = sceneData.playerSpawn;
    fpsState = createFPSState(new Vector3(sp.x + 0.5, sp.y, sp.z + 0.5));
    fpsRef.current = fpsState;
    collidersRef.current = sceneData.colliders;

    // 5. Weapon
    weaponState = createWeaponState();

    // 6. Spawn enemies
    spawnedEnemies = spawnInteriorEnemies(sceneData.enemySpawns, levelJSON.spawns);
    totalEnemies = spawnedEnemies.entities.length;

    // 7. Register ECS systems
    aiSystem = createInteriorAISystem(fpsRef, collidersRef, handleEnemyAttack);
    healthSystem = createInteriorHealthSystem();
    collisionSystem = createInteriorCollisionSystem(collidersRef);

    // 8. Input
    setKeyMap(interiorFpsKeyMap);

    // 9. Pointer lock
    requestPointerLock();

    // 10. HUD
    createInteriorHUD();

    // 11. Reset state
    playerHP = MAX_PLAYER_HP;
    damageFlash = 0;
    isDead = false;
    isVictory = false;

    // 12. Hide start screen
    const startScreen = document.getElementById('start-screen');
    if (startScreen) startScreen.style.display = 'none';
  },

  update(dt: number) {
    if (!sceneData || !fpsState || !weaponState || !aiSystem || !healthSystem || !collisionSystem)
      return;

    // 1. Input
    updateActions();

    // ESC → выход
    if (state.keys['Escape']) {
      if (onExitCallback) onExitCallback();
      return;
    }

    if (isDead || isVictory) return;

    // 2. FPS-контроллер
    updateFPSController(dt, fpsState, sceneData.colliders, camera);

    // 3. Weapon update
    updateWeapon(dt, weaponState);

    // 4. Fire (hold = auto-fire) — создаёт ECS-снаряд
    if (actions.fire) {
      fireWeapon(weaponState, fpsState);
    }

    // 5. ECS systems
    aiSystem.update(dt);
    healthSystem.update(dt);

    // 6. Projectile pipeline: render → move → collide → lifetime
    renderSystem.update(dt);
    projectileMovementSystem.update(dt);
    collisionSystem.update(dt);
    lifetimeSystem.update(dt);

    // 7. Damage flash decay
    damageFlash = Math.max(0, damageFlash - dt * 2);

    // 8. Win condition
    const alive = countAliveEnemies();
    if (alive === 0 && totalEnemies > 0) {
      handleVictory();
    }

    // 9. HUD
    updateInteriorHUD(
      playerHP,
      MAX_PLAYER_HP,
      weaponState.heat,
      weaponState.overheated,
      alive,
      totalEnemies,
      damageFlash,
      weaponState.flashTimer,
    );
  },

  exit() {
    // Scene
    if (sceneData) {
      sceneData.dispose();
      sceneData = null;
    }

    // Projectile meshes
    renderSystem.cleanup!();

    // ECS
    resetWorld();
    aiSystem = null;
    healthSystem = null;
    collisionSystem = null;
    spawnedEnemies = null;

    // State
    fpsState = null;
    weaponState = null;

    // HUD
    destroyInteriorHUD();

    // Pointer lock
    exitPointerLock();

    // Keymap
    setKeyMap(defaultKeyMap);

    // Show start screen
    const startScreen = document.getElementById('start-screen');
    if (startScreen) startScreen.style.display = 'flex';

    onCompleteCallback = undefined;
    onExitCallback = undefined;
  },
};
