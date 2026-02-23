import type { ShaderMaterial } from '@babylonjs/core/Materials/shaderMaterial';
import type { Sprite as BJSSprite } from '@babylonjs/core/Sprites/sprite';
import type { ISpriteManager } from '@babylonjs/core/Sprites/spriteManager';

import type { EngineLine, EngineMesh, EngineSpriteMaterial, TransformNode } from '@/shared/core';
import { Vector3, createTransformNode } from '@/shared/core';

export const galaxyGroup = createTransformNode();
galaxyGroup.visible = false;

export const starMeshes = new Map<string, EngineMesh>();
export const starHalos = new Map<string, BJSSprite>();
export const rangeCircle = {
  mesh: null as EngineMesh | null,
  line: null as EngineLine | null,
};

export const labelElements = new Map<string, HTMLElement>();
export const nearbySystemIds = new Set<string>();
export const starScaleCurrent = new Map<string, number>();

export const nebulaMats: EngineSpriteMaterial[] = [];
export const baseNebulaOpacities: number[] = [];

export const refs = {
  playerShipModel: null as TransformNode | null,
  selectionRing: null as EngineMesh | null,
  contractMarker: null as EngineMesh | null,
  labelsContainer: null as HTMLElement | null,
  mainStarsMat: null as ShaderMaterial | null,
  brightStarsMat: null as ShaderMaterial | null,
  haloManager: null as ISpriteManager | null,
  galaxyBrightness: 1.0,
};

export const pulse = { time: 0 };
export const projVec = new Vector3();

// Constants
export const BASE_MAIN_OPACITY = 3.4;
export const BASE_BRIGHT_OPACITY = 1.3;
export const NEARBY_SCALE = 1.0;
export const FAR_SCALE = 0.5;
export const SCALE_LERP_SPEED = 3.0;
