import type { DynamicTexture } from '@babylonjs/core/Materials/Textures/dynamicTexture';

import type { TransformNode } from '@/shared/core';
import {
  Color,
  createSprite,
  createSpriteMaterial,
  createTextureFromCanvas,
  createTransformNode,
} from '@/shared/core';

import { baseNebulaOpacities, nebulaMats } from './refs';

function createNebulaTexture(hue: number, saturation: number): DynamicTexture {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  const half = size / 2;
  const grad = ctx.createRadialGradient(half, half, 0, half, half, half);
  const c = new Color().setHSL(hue, saturation, 0.5);
  const r = Math.round(c.r * 255);
  const g = Math.round(c.g * 255);
  const b = Math.round(c.b * 255);
  grad.addColorStop(0, `rgba(${r},${g},${b},0.6)`);
  grad.addColorStop(0.3, `rgba(${r},${g},${b},0.2)`);
  grad.addColorStop(0.6, `rgba(${r},${g},${b},0.05)`);
  grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  return createTextureFromCanvas(canvas, false);
}

export function createGalaxyNebulae(): TransformNode {
  const group = createTransformNode();

  // Nebulae along spiral arms
  const nebulaConfigs: {
    hue: number;
    sat: number;
    pos: [number, number, number];
    scale: number;
    opacity: number;
  }[] = [
    // Arm nebulae — placed along spiral paths
    { hue: 0.6, sat: 0.8, pos: [25, 0.5, -18], scale: 20, opacity: 0.045 },
    { hue: 0.55, sat: 0.7, pos: [-22, -0.3, -25], scale: 25, opacity: 0.037 },
    { hue: 0.75, sat: 0.6, pos: [-35, 0.2, 15], scale: 22, opacity: 0.037 },
    { hue: 0.0, sat: 0.7, pos: [40, -0.5, 20], scale: 18, opacity: 0.03 },
    { hue: 0.85, sat: 0.5, pos: [10, 0.3, 40], scale: 24, opacity: 0.037 },
    // Core glow
    { hue: 0.12, sat: 0.6, pos: [0, 0, 0], scale: 30, opacity: 0.06 },
    { hue: 0.08, sat: 0.4, pos: [2, 0, -3], scale: 20, opacity: 0.045 },
    // Outer arm dust
    { hue: 0.58, sat: 0.9, pos: [50, 0, -30], scale: 28, opacity: 0.022 },
    { hue: 0.7, sat: 0.7, pos: [-45, 0, -35], scale: 22, opacity: 0.026 },
    { hue: 0.45, sat: 0.6, pos: [-30, 0, 45], scale: 26, opacity: 0.026 },
    { hue: 0.15, sat: 0.5, pos: [30, 0, 50], scale: 20, opacity: 0.022 },
    // Faint large background clouds
    { hue: 0.65, sat: 0.3, pos: [0, -1, 30], scale: 50, opacity: 0.015 },
    { hue: 0.5, sat: 0.3, pos: [-20, 0.5, -10], scale: 55, opacity: 0.015 },
  ];

  nebulaMats.length = 0;
  baseNebulaOpacities.length = 0;
  for (const cfg of nebulaConfigs) {
    const tex = createNebulaTexture(cfg.hue, cfg.sat);
    const mat = createSpriteMaterial({
      map: tex,
      transparent: true,
      opacity: cfg.opacity,
      additive: true,
      depthWrite: false,
    });
    nebulaMats.push(mat);
    baseNebulaOpacities.push(cfg.opacity);
    const sprite = createSprite(mat);
    sprite.position.set(...cfg.pos);
    sprite.scaling.setAll(cfg.scale);
    sprite.parent = group;
  }

  // Dark dust lanes — subtractive-looking patches (very dark, low opacity normal blending)
  const dustConfigs: { pos: [number, number, number]; scale: number; opacity: number }[] = [
    { pos: [15, 0, -8], scale: 15, opacity: 0.09 },
    { pos: [-12, 0, 10], scale: 18, opacity: 0.075 },
    { pos: [30, 0, 5], scale: 12, opacity: 0.067 },
    { pos: [-8, 0, -30], scale: 14, opacity: 0.06 },
    { pos: [5, 0, 25], scale: 16, opacity: 0.075 },
  ];

  const dustTex = createNebulaTexture(0, 0);
  for (const cfg of dustConfigs) {
    const mat = createSpriteMaterial({
      map: dustTex,
      transparent: true,
      opacity: cfg.opacity,
      color: 0x030308,
      depthWrite: false,
    });
    const sprite = createSprite(mat);
    sprite.position.set(...cfg.pos);
    sprite.scaling.setAll(cfg.scale);
    sprite.parent = group;
  }

  return group;
}
