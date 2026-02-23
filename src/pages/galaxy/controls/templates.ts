export const GALAXY_TEMPLATES = {
  hint(isTouch: boolean): string {
    return isTouch
      ? 'Нажмите на звезду для выбора  •  Проведите для вращения  •  Щипок — масштаб'
      : 'Нажмите на звезду для выбора  •  Перетаскивайте для вращения  •  Колёсико — масштаб';
  },

  brightnessSlider(valuePct: number): string {
    return (
      `<label>Яркость</label>` +
      `<input type="range" min="0" max="200" value="${valuePct}" />` +
      `<span>${valuePct}%</span>`
    );
  },

  hud(
    money: number,
    fuel: number,
    maxFuel: number,
    engineRange: number,
    contractTarget?: string,
  ): string {
    let html = `<span class="gal-money">${money}₵</span> `;
    html += `<span class="gal-fuel">⛽ ${fuel}/${maxFuel}</span> `;
    html += `<span class="gal-range">⚡ ${engineRange}</span>`;
    if (contractTarget) {
      html += `<br><span class="gal-contract">Контракт → ${contractTarget}</span>`;
    }
    return html;
  },

  infoPanel(data: {
    name: string;
    isCurrent: boolean;
    isInRange: boolean;
    distance: number;
    fuelCost: number;
    canTravel: boolean;
    isContractTarget: boolean;
    hasStation: boolean;
  }): string {
    let html = `<h3>${data.name}</h3>`;
    if (data.isCurrent) {
      html += '<div class="gal-info-line">Вы здесь</div>';
      if (data.hasStation) {
        html += '<button class="gal-btn" id="gal-station-btn">НА СТАНЦИЮ</button>';
      }
      html += '<button class="gal-btn gal-btn-explore" id="gal-explore-btn">ИССЛЕДОВАТЬ</button>';
    } else if (data.isInRange) {
      html += `<div class="gal-info-line">Расстояние: ${data.distance.toFixed(1)}</div>`;
      html += `<div class="gal-info-line">Топливо: ${data.fuelCost} ед.</div>`;
      if (data.isContractTarget) {
        html += '<div class="gal-info-line gal-contract-marker">Цель контракта!</div>';
      }
      if (data.canTravel) {
        html += '<button class="gal-btn" id="gal-travel-btn">ЛЕТЕТЬ</button>';
      } else {
        html += '<div class="gal-info-line gal-no-fuel">Недостаточно топлива</div>';
      }
    } else {
      html += `<div class="gal-info-line">Расстояние: ${data.distance.toFixed(1)}</div>`;
      html += '<div class="gal-info-line gal-no-route">Вне зоны досягаемости</div>';
    }
    return html;
  },
};
