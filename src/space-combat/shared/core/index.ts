// ── Math types ──
export { Vector3 } from './vector3';
export { Quaternion } from './quaternion';
export { Color } from './color';
export { Matrix as Matrix4 } from '@babylonjs/core/Maths/math.vector';

// ── Scene graph types ──
export { TransformNode } from './transform-node';
export { EngineMesh } from './mesh';
export { EngineSprite } from './sprite';
export { EnginePoints } from './points';
export { EngineLine } from './line';

// ── Camera ──
export { PerspectiveCamera } from './camera';

// ── Materials ──
export {
  EngineMaterial,
  MeshPhongMaterial,
  MeshBasicMaterial,
  EngineSpriteMaterial,
  EnginePointsMaterial,
  EngineLineMaterial,
  type MaterialConfig,
} from './material';

// ── Geometry ──
export {
  EngineBufferAttribute,
  EngineBufferGeometry,
  SphereGeometry,
  CylinderGeometry,
  PlaneGeometry,
  RingGeometry,
  OctahedronGeometry,
  IcosahedronGeometry,
} from './geometry';

// ── Utilities ──
export { Clock } from './clock';
export { Raycaster, type Intersection } from './raycaster';

// ── Math helpers ──
export { vec3Project, vec3Unproject, type ProjectionCamera } from './math';

// ── Loader ──
export { loadModel, cloneModel, traverseNode, getChildByName, isEngineMesh } from './loader';

// ── Dispose ──
export { disposeNode } from './dispose';

// ── Factories ──
export {
  setFactoryScene,
  getFactoryScene,
  createTransformNode,
  createMesh,
  addToScene,
  removeFromScene,
  createSphereGeometry,
  createCylinderGeometry,
  createPlaneGeometry,
  createRingGeometry,
  createOctahedronGeometry,
  createIcosahedronGeometry,
  createBufferGeometry,
  createBufferAttribute,
  createPBRMaterial,
  createUnlitMaterial,
  createAdditiveMaterial,
  createSpriteMaterial,
  createPointsMaterial,
  createLine,
  createLineFromPoints,
  createSprite,
  createPoints,
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  createTextureFromCanvas,
  createAmbientLight,
  createPointLight,
} from './factories';

export type { Scene } from '@babylonjs/core/scene';
