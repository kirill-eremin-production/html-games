/**
 * HUD для интерьерного FPS-боя.
 *
 * Содержит:
 * - Перекрестие (крест)
 * - Полоска здоровья
 * - Патроны
 * - Счётчик врагов
 * - Красная вспышка при уроне
 * - Белая вспышка при выстреле
 * - Экран смерти / победы
 */

let root: HTMLDivElement | null = null;
let healthBar: HTMLDivElement | null = null;
let healthText: HTMLDivElement | null = null;
let heatBarFill: HTMLDivElement | null = null;
let heatText: HTMLDivElement | null = null;
let enemyCountText: HTMLDivElement | null = null;
let damageOverlay: HTMLDivElement | null = null;
let muzzleOverlay: HTMLDivElement | null = null;
let deathScreen: HTMLDivElement | null = null;
let victoryScreen: HTMLDivElement | null = null;

// ── Создание ────────────────────────────────────────────────────────────────

export function createInteriorHUD(): void {
  if (root) return;

  root = document.createElement('div');
  root.id = 'interior-hud';

  // Перекрестие
  const crosshair = document.createElement('div');
  crosshair.className = 'interior-crosshair';
  crosshair.innerHTML =
    '<div class="ch-h"></div><div class="ch-v"></div><div class="ch-dot"></div>';
  root.appendChild(crosshair);

  // Здоровье (внизу слева)
  const healthContainer = document.createElement('div');
  healthContainer.className = 'interior-health';
  healthContainer.innerHTML = `
    <div class="interior-health-label">HP</div>
    <div class="interior-health-bar-bg">
      <div class="interior-health-bar-fill"></div>
    </div>
    <div class="interior-health-text">100</div>
  `;
  root.appendChild(healthContainer);
  healthBar = healthContainer.querySelector('.interior-health-bar-fill');
  healthText = healthContainer.querySelector('.interior-health-text');

  // Перегрев (внизу справа)
  const heatContainer = document.createElement('div');
  heatContainer.className = 'interior-heat';
  heatContainer.innerHTML = `
    <div class="interior-heat-label">HEAT</div>
    <div class="interior-heat-bar-bg">
      <div class="interior-heat-bar-fill"></div>
    </div>
    <div class="interior-heat-text">0%</div>
  `;
  root.appendChild(heatContainer);
  heatBarFill = heatContainer.querySelector('.interior-heat-bar-fill');
  heatText = heatContainer.querySelector('.interior-heat-text');

  // Счётчик врагов (вверху)
  enemyCountText = document.createElement('div');
  enemyCountText.className = 'interior-enemy-count';
  enemyCountText.textContent = 'Враги: 0 / 0';
  root.appendChild(enemyCountText);

  // Overlay: красная вспышка при уроне
  damageOverlay = document.createElement('div');
  damageOverlay.className = 'interior-damage-overlay';
  root.appendChild(damageOverlay);

  // Overlay: вспышка при выстреле
  muzzleOverlay = document.createElement('div');
  muzzleOverlay.className = 'interior-muzzle-overlay';
  root.appendChild(muzzleOverlay);

  // Экран смерти
  deathScreen = document.createElement('div');
  deathScreen.className = 'interior-death-screen';
  deathScreen.style.display = 'none';
  deathScreen.innerHTML = `
    <div class="interior-death-text">ВЫ ПОГИБЛИ</div>
    <button class="interior-respawn-btn">Respawn</button>
  `;
  root.appendChild(deathScreen);

  // Экран победы
  victoryScreen = document.createElement('div');
  victoryScreen.className = 'interior-victory-screen';
  victoryScreen.style.display = 'none';
  victoryScreen.innerHTML = `
    <div class="interior-victory-text">МИССИЯ ВЫПОЛНЕНА</div>
    <button class="interior-continue-btn">Продолжить</button>
  `;
  root.appendChild(victoryScreen);

  document.body.appendChild(root);
}

export function destroyInteriorHUD(): void {
  if (root) {
    root.remove();
    root = null;
    healthBar = null;
    healthText = null;
    heatBarFill = null;
    heatText = null;
    enemyCountText = null;
    damageOverlay = null;
    muzzleOverlay = null;
    deathScreen = null;
    victoryScreen = null;
  }
}

// ── Обновление ──────────────────────────────────────────────────────────────

export function updateInteriorHUD(
  health: number,
  maxHealth: number,
  heat: number,
  overheated: boolean,
  enemiesAlive: number,
  totalEnemies: number,
  damageFlash: number,
  muzzleFlash: number,
): void {
  if (!root) return;

  // Здоровье
  const pct = Math.max(0, Math.min(1, health / maxHealth));
  if (healthBar) healthBar.style.width = `${pct * 100}%`;
  if (healthText) healthText.textContent = `${Math.ceil(health)}`;

  // Перегрев
  if (heatBarFill) {
    heatBarFill.style.width = `${heat * 100}%`;
    heatBarFill.style.backgroundColor = overheated ? '#ff2222' : heat > 0.7 ? '#ffaa00' : '#00ccff';
  }
  if (heatText) {
    heatText.textContent = overheated ? 'OVERHEAT' : `${Math.round(heat * 100)}%`;
    heatText.style.color = overheated ? '#ff2222' : '';
  }

  // Враги
  if (enemyCountText) {
    const killed = totalEnemies - enemiesAlive;
    enemyCountText.textContent = `Враги: ${killed} / ${totalEnemies}`;
  }

  // Damage flash
  if (damageOverlay) {
    damageOverlay.style.opacity = `${Math.min(1, damageFlash)}`;
  }

  // Muzzle flash
  if (muzzleOverlay) {
    muzzleOverlay.style.opacity = `${Math.min(1, muzzleFlash * 10)}`;
  }
}

// ── Death / Victory ─────────────────────────────────────────────────────────

export function showDeathScreen(onRespawn: () => void): void {
  if (!deathScreen) return;
  deathScreen.style.display = 'flex';
  const btn = deathScreen.querySelector('.interior-respawn-btn');
  if (btn) {
    const handler = () => {
      btn.removeEventListener('click', handler);
      hideDeathScreen();
      onRespawn();
    };
    btn.addEventListener('click', handler);
  }
}

export function hideDeathScreen(): void {
  if (deathScreen) deathScreen.style.display = 'none';
}

export function showVictoryScreen(onContinue: () => void): void {
  if (!victoryScreen) return;
  victoryScreen.style.display = 'flex';
  const btn = victoryScreen.querySelector('.interior-continue-btn');
  if (btn) {
    const handler = () => {
      btn.removeEventListener('click', handler);
      hideVictoryScreen();
      onContinue();
    };
    btn.addEventListener('click', handler);
  }
}

export function hideVictoryScreen(): void {
  if (victoryScreen) victoryScreen.style.display = 'none';
}
