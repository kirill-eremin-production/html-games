import type { Planet } from '../types';

const TYPE_LABELS: Record<string, string> = {
  rocky: 'Каменная',
  gas_giant: 'Газовый гигант',
  ice: 'Ледяная',
  desert: 'Пустынная',
  ocean: 'Океаническая',
  volcanic: 'Вулканическая',
  barren: 'Безжизненная',
};

export const EXPLORATION_TEMPLATES = {
  hud(systemName: string): string {
    return (
      `<div class="expl-system-name">${systemName}</div>` +
      `<button class="gal-btn expl-return-btn" id="expl-return-btn">НАЗАД К КАРТЕ</button>`
    );
  },

  planetInfo(planet: Planet): string {
    const water = planet.hasLiquidWater ? 'Есть' : 'Нет';
    const oxygen = planet.hasOxygen ? 'Есть' : 'Нет';
    const radiation =
      planet.radiationLevel < 0.2
        ? 'Низкая'
        : planet.radiationLevel < 0.5
          ? 'Средняя'
          : planet.radiationLevel < 0.8
            ? 'Высокая'
            : 'Критическая';
    const radColor =
      planet.radiationLevel < 0.2 ? '#44ff88' : planet.radiationLevel < 0.5 ? '#ffaa44' : '#ff4444';

    return (
      `<div class="expl-planet-card">` +
      `<h3>${planet.name}</h3>` +
      `<div class="expl-planet-type">${TYPE_LABELS[planet.type] || planet.type}</div>` +
      `<div class="expl-planet-stat">Размер: ${planet.size.toFixed(1)}</div>` +
      `<div class="expl-planet-stat">Вода: ${water}</div>` +
      `<div class="expl-planet-stat">Кислород: ${oxygen}</div>` +
      `<div class="expl-planet-stat" style="color:${radColor}">Радиация: ${radiation}</div>` +
      `</div>`
    );
  },

  noPlanetNearby(): string {
    return '<div class="expl-hint">Подлетите ближе к планете для информации</div>';
  },
};
