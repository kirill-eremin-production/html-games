import * as THREE from 'three';

export const galaxyGroup = new THREE.Group();
galaxyGroup.visible = false;

export const starMeshes = new Map<string, THREE.Mesh>();
export const starHalos = new Map<string, THREE.Sprite>();
export const routeLines: THREE.Line[] = [];

export const labelElements = new Map<string, HTMLElement>();
export const nearbySystemIds = new Set<string>();
export const starScaleCurrent = new Map<string, number>();

export const nebulaMats: THREE.SpriteMaterial[] = [];
export const baseNebulaOpacities: number[] = [];

export const refs = {
  playerShipModel: null as THREE.Group | null,
  selectionRing: null as THREE.Mesh | null,
  contractMarker: null as THREE.Mesh | null,
  labelsContainer: null as HTMLElement | null,
  twinkleTimeUniform: null as { value: number } | null,
  mainStarsMat: null as THREE.PointsMaterial | null,
  brightStarsMat: null as THREE.PointsMaterial | null,
  galaxyBrightness: 1.0,
};

export const pulse = { time: 0 };
export const projVec = new THREE.Vector3();

// Constants
export const BASE_MAIN_OPACITY = 0.34;
export const BASE_BRIGHT_OPACITY = 0.13;
export const NEARBY_SCALE = 1.0;
export const FAR_SCALE = 0.5;
export const SCALE_LERP_SPEED = 3.0;
