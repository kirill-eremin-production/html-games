// ── Math types ──
export { Vector3 } from './vector3';
export { Vector2 } from './vector3';
export { Quaternion } from './quaternion';
export { Color } from './color';
export { Matrix as Matrix4 } from '@babylonjs/core/Maths/math.vector';

// ── Scene graph types ──
export { TransformNode } from './transform-node';
export { EngineMesh, type EngineNode } from './mesh';
export { EngineSprite } from './sprite';
export { EnginePoints } from './points';
export { EngineLine } from './line';

// ── Camera ──
export { PerspectiveCamera, EngineCamera, Camera } from './camera';

// ── Materials ──
export {
  EngineMaterial,
  Material,
  MeshPhongMaterial,
  MeshBasicMaterial,
  MeshStandardMaterial,
  EngineSpriteMaterial,
  EnginePointsMaterial,
  EngineLineMaterial,
  type MaterialConfig,
} from './material';

// ── Geometry ──
export {
  EngineBufferAttribute,
  EngineBufferGeometry,
  BufferAttribute,
  BufferGeometry,
  SphereGeometry,
  CylinderGeometry,
  PlaneGeometry,
  RingGeometry,
  OctahedronGeometry,
  IcosahedronGeometry,
} from './geometry';

// ── Utilities ──
export { Clock } from './clock';
export { CanvasTexture } from './texture';
export { Raycaster, type Intersection } from './raycaster';

// ── Math helpers ──
export {
  quatFromAxisAngle,
  quatFromUnitVectors,
  vec3DistSq,
  vec3Dist,
  vec3AddScaled,
  vec3TransformMatrix,
  vec3ApplyQuat,
  vec3Project,
  vec3Unproject,
  type ProjectionCamera,
} from './math';

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
  createStandardMaterial,
  createPBRMaterial,
  createUnlitMaterial,
  createAdditiveMaterial,
  createSpriteMaterial,
  createPointsMaterial,
  createLineMaterial,
  createLine,
  createLineFromPoints,
  createSprite,
  createPoints,
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  PointLight,
  setMaterialOpacity,
  setMaterialColor,
  createTextureFromCanvas,
  createAmbientLight,
  createDirectionalLight,
  createHemisphereLight,
  createPointLight,
} from './factories';

export type { Scene } from '@babylonjs/core/scene';
