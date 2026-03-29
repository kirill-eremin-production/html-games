import { SUBSYSTEM_SHORT } from '@/shared/constants';

interface CapitalShipData {
  alive: boolean;
  index: number;
  subsystems: { name: string; health: number; maxHealth: number }[];
}

export const HUD_TEMPLATES = {
  shipStatus(capitalShips: CapitalShipData[]): string {
    let html = '<h3>КОРАБЛИ ПРОТИВНИКА</h3>';
    for (const cs of capitalShips) {
      if (!cs.alive) {
        html += `<div class="ship-entry"><div class="ship-name" style="color:#666;text-decoration:line-through;">Корабль ${cs.index + 1} — УНИЧТОЖЕН</div></div>`;
        continue;
      }
      html += `<div class="ship-entry"><div class="ship-name">Корабль ${cs.index + 1}</div><div class="subsystems">`;
      for (let s = 0; s < cs.subsystems.length; s++) {
        const sub = cs.subsystems[s];
        const alive = sub.health > 0;
        const pct = Math.ceil((sub.health / sub.maxHealth) * 100);
        html += `<div class="subsys-dot ${alive ? 'alive' : 'dead'}" title="${sub.name}: ${alive ? pct + '%' : 'уничтожена'}">${SUBSYSTEM_SHORT[s]}</div>`;
      }
      html += '</div></div>';
    }
    return html;
  },
};
