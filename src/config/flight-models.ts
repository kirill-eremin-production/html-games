import { PLAYER_CONFIG } from './player';

export type FlightModelId = 'combat' | 'exploration';

export interface FlightModel {
  updateSpeed(
    speed: number,
    baseSpeed: number,
    boostSpeed: number,
    input: 'thrust' | 'brake' | 'none',
    dt: number,
  ): number;
  cameraOffset(speed: number, boostSpeed: number): { back: number; up: number; lookAhead: number };
}

const P = PLAYER_CONFIG;

const combatFlight: FlightModel = {
  updateSpeed(speed, baseSpeed, boostSpeed, input, dt) {
    if (input === 'thrust') return Math.min(speed + P.accelerateRate * dt, boostSpeed);
    if (input === 'brake') return Math.max(speed - P.decelerateRate * dt, P.minSpeed);
    return speed + (baseSpeed - speed) * P.speedDecayRate * dt;
  },
  cameraOffset() {
    return { back: P.combatCamBack, up: P.combatCamUp, lookAhead: P.combatLookAhead };
  },
};

const explorationFlight: FlightModel = {
  updateSpeed(speed, _baseSpeed, boostSpeed, input, dt) {
    const accelRate = boostSpeed * P.explorationAccelFraction;
    if (input === 'thrust') return Math.min(speed + accelRate * dt, boostSpeed);
    if (input === 'brake') return Math.max(speed - accelRate * dt, 0);
    return speed;
  },
  cameraOffset(speed, boostSpeed) {
    const t = boostSpeed > 0 ? speed / boostSpeed : 0;
    return {
      back: P.explCamBackBase + t * P.explCamBackRange,
      up: P.explCamUpBase + t * P.explCamUpRange,
      lookAhead: P.explLookBase + t * P.explLookRange,
    };
  },
};

export const flightModels: Record<FlightModelId, FlightModel> = {
  combat: combatFlight,
  exploration: explorationFlight,
};
