import {
  BASE_BRIGHT_OPACITY,
  BASE_MAIN_OPACITY,
  baseNebulaOpacities,
  nebulaMats,
  refs,
} from './refs';

export function setGalaxyBrightness(value: number): void {
  refs.galaxyBrightness = value;
  if (refs.mainStarsMat) refs.mainStarsMat.opacity = BASE_MAIN_OPACITY * value;
  if (refs.brightStarsMat) refs.brightStarsMat.opacity = BASE_BRIGHT_OPACITY * value;
  for (let i = 0; i < nebulaMats.length; i++) {
    nebulaMats[i].opacity = baseNebulaOpacities[i] * value;
  }
}

export function getGalaxyBrightness(): number {
  return refs.galaxyBrightness;
}
