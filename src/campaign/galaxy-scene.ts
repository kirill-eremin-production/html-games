import * as THREE from 'three';
import { createFighter } from '../scene/models';
import { camera } from '../scene/setup';
import { setStarfieldVisible } from '../scene/starfield';
import { parseHexColor, settings } from '../settings';
import { STAR_SYSTEMS, getSystem } from './data';
import { campaign } from './state';

export const galaxyGroup = new THREE.Group();
galaxyGroup.visible = false;

// ── Internal refs ────────────────────────────────────────────────────────────

const starMeshes = new Map<string, THREE.Mesh>();
const starHalos = new Map<string, THREE.Sprite>();
const routeLines: THREE.Line[] = [];
let playerShipModel: THREE.Group | null = null;
let selectionRing: THREE.Mesh | null = null;
let contractMarker: THREE.Mesh | null = null;

const _pulse = { time: 0 };
const _projVec = new THREE.Vector3();

// Twinkle uniform for bright star overlay
let twinkleTimeUniform: { value: number } | null = null;

// Brightness control — materials tracked for dynamic adjustment
let mainStarsMat: THREE.PointsMaterial | null = null;
let brightStarsMat: THREE.PointsMaterial | null = null;
const nebulaMats: THREE.SpriteMaterial[] = [];
const BASE_MAIN_OPACITY = 0.34;
const BASE_BRIGHT_OPACITY = 0.13;
const baseNebulaOpacities: number[] = [];
let galaxyBrightness = 1.0;

let labelsContainer: HTMLElement | null = null;
const labelElements = new Map<string, HTMLElement>();

// ── Nearby systems (within N hops) — controls labels + star scale ────────────

const NEARBY_HOPS = 6;
const NEARBY_SCALE = 1.0;
const FAR_SCALE = 0.5;
const SCALE_LERP_SPEED = 3.0;

const nearbySystemIds = new Set<string>();
const starScaleCurrent = new Map<string, number>();

function recomputeNearby(): void {
  nearbySystemIds.clear();

  const queue: [string, number][] = [[campaign.currentSystemId, 0]];
  nearbySystemIds.add(campaign.currentSystemId);

  while (queue.length > 0) {
    const [id, depth] = queue.shift()!;
    if (depth >= NEARBY_HOPS) continue;

    const sys = getSystem(id);
    if (!sys) continue;
    for (const connId of sys.connections) {
      if (!nearbySystemIds.has(connId)) {
        nearbySystemIds.add(connId);
        queue.push([connId, depth + 1]);
      }
    }
  }
}

// Radial gradient texture for soft glow sprites (created once, shared)
function createGlowTexture(): THREE.CanvasTexture {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const half = size / 2;
  const grad = ctx.createRadialGradient(half, half, 0, half, half, half);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.15, 'rgba(255,255,255,0.6)');
  grad.addColorStop(0.4, 'rgba(255,255,255,0.15)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.generateMipmaps = false;
  tex.minFilter = THREE.LinearFilter;
  return tex;
}

let glowTexture: THREE.CanvasTexture | null = null;

// Round dot texture for point stars
function createDotTexture(): THREE.CanvasTexture {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const half = size / 2;
  const grad = ctx.createRadialGradient(half, half, 0, half, half, half);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.5, 'rgba(255,255,255,0.8)');
  grad.addColorStop(0.8, 'rgba(255,255,255,0.15)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.generateMipmaps = false;
  tex.minFilter = THREE.LinearFilter;
  return tex;
}

let dotTexture: THREE.CanvasTexture | null = null;

// Star colors by index for variety
const STAR_COLORS = [
  0x66ccff, // cyan-blue
  0xffaa44, // orange
  0x88ff66, // green
  0xff6688, // pink
  0xffdd44, // yellow
  0xaa88ff, // purple
  0x44ffcc, // teal
  0xff8844, // amber
];

// ── Spiral galaxy background ─────────────────────────────────────────────────

// Spectral region palettes — each is a dominant tint [r,g,b] for a color zone
const REGION_PALETTES: [number, number, number][] = [
  [0.55, 0.65, 1.0], // young blue OB association
  [0.7, 0.8, 1.0], // blue-white cluster
  [0.95, 0.92, 1.0], // hot white
  [1.0, 0.95, 0.8], // yellow-white population
  [1.0, 0.85, 0.55], // solar-yellow
  [1.0, 0.7, 0.4], // orange K-giant region
  [1.0, 0.5, 0.3], // red M-dwarf cloud
  [1.0, 0.6, 0.5], // dusty rose
  [0.8, 0.75, 1.0], // lavender
  [0.9, 0.95, 0.7], // pale green tint
];

function createBackgroundStars(): THREE.Group {
  const group = new THREE.Group();

  const ARMS = 5;
  const TOTAL = 1_000_000;
  // Distribution: 55% arm, 18% core/bar, 15% interarm, 8% disk fill, 4% halo
  const ARM_END = 550_000;
  const CORE_END = ARM_END + 180_000;
  const INTER_END = CORE_END + 150_000;
  const DISK_END = INTER_END + 80_000;
  // rest = halo

  const positions = new Float32Array(TOTAL * 3);
  const colors = new Float32Array(TOTAL * 3);
  let idx = 0;

  // Inline Box-Muller for performance (called ~3M times)
  const TWO_PI = 2 * Math.PI;
  function gr(): number {
    return Math.sqrt(-2 * Math.log(Math.random() || 1e-4)) * Math.cos(TWO_PI * Math.random());
  }

  // ── Color regions: ~120 seed points scattered through the galaxy ──
  // Each region has a position (x,z), radius, and dominant color palette
  const NUM_REGIONS = 120;
  const regionX = new Float32Array(NUM_REGIONS);
  const regionZ = new Float32Array(NUM_REGIONS);
  const regionR = new Float32Array(NUM_REGIONS);
  const regionPal = new Uint8Array(NUM_REGIONS);
  for (let i = 0; i < NUM_REGIONS; i++) {
    const a = Math.random() * TWO_PI;
    const d = 5 + Math.random() * 80;
    regionX[i] = d * Math.cos(a) + gr() * 5;
    regionZ[i] = d * Math.sin(a) + gr() * 5;
    regionR[i] = 5 + Math.random() * 15;
    regionPal[i] = Math.floor(Math.random() * REGION_PALETTES.length);
  }

  // Find nearest color region influence for a position
  function getRegionColor(
    x: number,
    z: number,
    baseBrightness: number,
  ): [number, number, number] {
    let bestDist = Infinity;
    let bestIdx = -1;
    let secondDist = Infinity;
    let secondIdx = -1;
    for (let i = 0; i < NUM_REGIONS; i++) {
      const dx = x - regionX[i];
      const dz = z - regionZ[i];
      const d = dx * dx + dz * dz;
      if (d < bestDist) {
        secondDist = bestDist;
        secondIdx = bestIdx;
        bestDist = d;
        bestIdx = i;
      } else if (d < secondDist) {
        secondDist = d;
        secondIdx = i;
      }
    }

    // Influence = how much the nearest region affects color (0 to ~0.7)
    const dist = Math.sqrt(bestDist);
    const influence = Math.max(0, 1 - dist / (regionR[bestIdx] * 1.5));

    if (influence > 0.05 && bestIdx >= 0) {
      const pal = REGION_PALETTES[regionPal[bestIdx]];
      // Blend with a second region for smoother transitions
      let r = pal[0],
        g = pal[1],
        b = pal[2];
      if (secondIdx >= 0 && influence < 0.5) {
        const pal2 = REGION_PALETTES[regionPal[secondIdx]];
        const t = influence * 2; // 0..1
        r = r * t + pal2[0] * (1 - t);
        g = g * t + pal2[1] * (1 - t);
        b = b * t + pal2[2] * (1 - t);
      }
      // Add individual variation
      const v = 0.9 + Math.random() * 0.2;
      return [r * baseBrightness * v, g * baseBrightness * v, b * baseBrightness * v];
    }

    // Default: generic mixed spectral color
    const tint = Math.random();
    const v = baseBrightness * (0.9 + Math.random() * 0.2);
    if (tint < 0.3) return [v, v * 0.7, v * 0.4]; // orange/brown
    if (tint < 0.55) return [v, v * 0.88, v * 0.6]; // yellow
    if (tint < 0.75) return [v * 0.9, v * 0.92, v]; // white-blue
    if (tint < 0.9) return [v * 0.7, v * 0.8, v]; // blue
    return [v, v * 0.95, v * 0.85]; // warm white
  }

  // ── Density clusters: extra concentrations of stars ──
  const NUM_CLUSTERS = 80;
  const clusterX = new Float32Array(NUM_CLUSTERS);
  const clusterZ = new Float32Array(NUM_CLUSTERS);
  const clusterSize = new Float32Array(NUM_CLUSTERS);
  for (let i = 0; i < NUM_CLUSTERS; i++) {
    const a = Math.random() * TWO_PI;
    const d = 3 + Math.random() * 75;
    clusterX[i] = d * Math.cos(a);
    clusterZ[i] = d * Math.sin(a);
    clusterSize[i] = 2 + Math.random() * 6;
  }

  // Check if point is near a density cluster, return extra offset or null
  function clusterPull(x: number, z: number): [number, number] | null {
    for (let i = 0; i < NUM_CLUSTERS; i++) {
      const dx = x - clusterX[i];
      const dz = z - clusterZ[i];
      const d2 = dx * dx + dz * dz;
      const r2 = clusterSize[i] * clusterSize[i] * 4;
      if (d2 < r2) {
        // Pull toward cluster center
        const pull = 0.3 + Math.random() * 0.4;
        return [x - dx * pull + gr() * clusterSize[i] * 0.3,
                z - dz * pull + gr() * clusterSize[i] * 0.3];
      }
    }
    return null;
  }

  // ── Generate stars ──

  for (let i = 0; i < TOTAL; i++) {
    let x: number, z: number, y: number, brightness: number;

    if (i < ARM_END) {
      // ── Spiral arm stars ──
      const arm = i % ARMS;
      const t = 0.03 + Math.random() * 0.97;
      const angle = t * 4.2 + (arm * TWO_PI) / ARMS;
      const wobble =
        Math.sin(t * 12 + arm) * 0.3 +
        Math.sin(t * 5.7 + arm * 3) * 0.2 +
        Math.sin(t * 23 + arm * 7) * 0.1;
      const r = t * 88;
      const spread = (10 + r * 0.18) * (0.4 + Math.random() * 0.6);
      const perpA = angle + wobble + Math.PI / 2;
      const offset = gr() * spread * 0.45;

      x = r * Math.cos(angle + wobble) + offset * Math.cos(perpA) + gr() * 3.5;
      z = r * Math.sin(angle + wobble) + offset * Math.sin(perpA) + gr() * 3.5;
      y = gr() * 1.5 * (1 - t * 0.5);
      brightness = 0.09 + Math.random() * 0.22;
    } else if (i < CORE_END) {
      // ── Core / central bar ──
      // Milky Way has a central bar ~2:1 aspect ratio
      const a = Math.random() * TWO_PI;
      const r = Math.abs(gr()) * 12;
      const barAngle = 0.45; // bar orientation
      const barStretch = 1.8;
      const rawX = r * Math.cos(a);
      const rawZ = r * Math.sin(a) / barStretch;
      // Rotate bar
      const cosB = Math.cos(barAngle);
      const sinB = Math.sin(barAngle);
      x = rawX * cosB - rawZ * sinB + gr() * 2;
      z = rawX * sinB + rawZ * cosB + gr() * 2;
      y = gr() * 1.5 * Math.max(0.15, 1 - r / 20);
      brightness = 0.15 + Math.random() * 0.26;
    } else if (i < INTER_END) {
      // ── Inter-arm / scattered field ──
      const a = Math.random() * TWO_PI;
      const r = 3 + Math.random() * 85;
      x = r * Math.cos(a) + gr() * 6;
      z = r * Math.sin(a) + gr() * 6;
      y = gr() * 2 * (1 - r / 120);
      brightness = 0.06 + Math.random() * 0.16;
    } else if (i < DISK_END) {
      // ── Thin disk fill — smooth background ──
      const a = Math.random() * TWO_PI;
      const r = Math.sqrt(Math.random()) * 90; // sqrt for uniform area distribution
      x = r * Math.cos(a) + gr() * 2;
      z = r * Math.sin(a) + gr() * 2;
      y = gr() * 0.8 * (1 - r / 100);
      brightness = 0.045 + Math.random() * 0.13;
    } else {
      // ── Halo — spheroidal, dim ──
      const a = Math.random() * TWO_PI;
      const r = 8 + Math.random() * 95;
      x = r * Math.cos(a) + gr() * 12;
      z = r * Math.sin(a) + gr() * 12;
      y = gr() * 5;
      brightness = 0.03 + Math.random() * 0.075;
    }

    // Apply density cluster pull (~15% of disk stars)
    if (i < DISK_END && Math.random() < 0.15) {
      const pull = clusterPull(x, z);
      if (pull) {
        x = pull[0];
        z = pull[1];
      }
    }

    positions[idx * 3] = x;
    positions[idx * 3 + 1] = y;
    positions[idx * 3 + 2] = z;

    const [cr, cg, cb] = getRegionColor(x, z, brightness);
    colors[idx * 3] = cr;
    colors[idx * 3 + 1] = cg;
    colors[idx * 3 + 2] = cb;
    idx++;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Main star field
  if (!dotTexture) dotTexture = createDotTexture();
  const matMain = new THREE.PointsMaterial({
    size: 0.25,
    map: dotTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.34,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  matMain.onBeforeCompile = (shader) => {
    // Cap point size to prevent oversized points near camera
    shader.vertexShader = shader.vertexShader.replace(
      '#include <clipping_planes_vertex>',
      'gl_PointSize = min(gl_PointSize, 64.0);\n#include <clipping_planes_vertex>',
    );
    // Enforce circular shape — prevents square artifacts on some GPUs
    shader.fragmentShader = shader.fragmentShader.replace(
      'void main() {',
      'void main() {\nif (length(gl_PointCoord - vec2(0.5)) > 0.5) discard;',
    );
  };
  mainStarsMat = matMain;
  group.add(new THREE.Points(geo, matMain));

  // Bright star overlay — 1500 larger glowing points with per-star twinkling
  const brightCount = 1500;
  const bPos = new Float32Array(brightCount * 3);
  const bCol = new Float32Array(brightCount * 3);
  const bPhase = new Float32Array(brightCount);
  for (let i = 0; i < brightCount; i++) {
    const src = Math.floor(Math.random() * TOTAL);
    bPos[i * 3] = positions[src * 3];
    bPos[i * 3 + 1] = positions[src * 3 + 1];
    bPos[i * 3 + 2] = positions[src * 3 + 2];
    // Brighten overlay stars
    bCol[i * 3] = Math.min(1, colors[src * 3] * 1.3);
    bCol[i * 3 + 1] = Math.min(1, colors[src * 3 + 1] * 1.3);
    bCol[i * 3 + 2] = Math.min(1, colors[src * 3 + 2] * 1.3);
    // Random phase for twinkling
    bPhase[i] = Math.random() * Math.PI * 2;
  }
  const bGeo = new THREE.BufferGeometry();
  bGeo.setAttribute('position', new THREE.BufferAttribute(bPos, 3));
  bGeo.setAttribute('color', new THREE.BufferAttribute(bCol, 3));
  bGeo.setAttribute('aPhase', new THREE.BufferAttribute(bPhase, 1));
  const timeUniform = { value: 0 };
  twinkleTimeUniform = timeUniform;
  const matBright = new THREE.PointsMaterial({
    size: 0.7,
    map: dotTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.13,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  matBright.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = timeUniform;
    // Inject phase attribute and varying into vertex shader
    shader.vertexShader = shader.vertexShader.replace(
      'void main() {',
      'attribute float aPhase;\nvarying float vTwinkle;\nvoid main() {',
    );
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      vTwinkle = 0.55 + 0.45 * sin(uTime * 1.8 + aPhase) * sin(uTime * 0.7 + aPhase * 2.3);`,
    );
    // Cap point size to prevent oversized points near camera
    shader.vertexShader = shader.vertexShader.replace(
      '#include <clipping_planes_vertex>',
      'gl_PointSize = min(gl_PointSize, 64.0);\n#include <clipping_planes_vertex>',
    );
    // Modulate alpha in fragment shader + enforce circular shape
    shader.fragmentShader = shader.fragmentShader.replace(
      'void main() {',
      'uniform float uTime;\nvarying float vTwinkle;\nvoid main() {\nif (length(gl_PointCoord - vec2(0.5)) > 0.5) discard;',
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <premultiplied_alpha_fragment>',
      'gl_FragColor.a *= vTwinkle;\n#include <premultiplied_alpha_fragment>',
    );
  };
  brightStarsMat = matBright;
  group.add(new THREE.Points(bGeo, matBright));

  return group;
}

// ── Nebulae & dust clouds ────────────────────────────────────────────────────

function createNebulaTexture(
  hue: number,
  saturation: number,
): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  const half = size / 2;
  const grad = ctx.createRadialGradient(half, half, 0, half, half, half);
  const c = new THREE.Color().setHSL(hue, saturation, 0.5);
  const r = Math.round(c.r * 255);
  const g = Math.round(c.g * 255);
  const b = Math.round(c.b * 255);
  grad.addColorStop(0, `rgba(${r},${g},${b},0.6)`);
  grad.addColorStop(0.3, `rgba(${r},${g},${b},0.2)`);
  grad.addColorStop(0.6, `rgba(${r},${g},${b},0.05)`);
  grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  const tex = new THREE.CanvasTexture(canvas);
  tex.generateMipmaps = false;
  tex.minFilter = THREE.LinearFilter;
  return tex;
}

function createGalaxyNebulae(): THREE.Group {
  const group = new THREE.Group();

  // Nebulae along spiral arms
  const nebulaConfigs: { hue: number; sat: number; pos: [number, number, number]; scale: number; opacity: number }[] = [
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
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      opacity: cfg.opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    nebulaMats.push(mat);
    baseNebulaOpacities.push(cfg.opacity);
    const sprite = new THREE.Sprite(mat);
    sprite.position.set(...cfg.pos);
    sprite.scale.setScalar(cfg.scale);
    group.add(sprite);
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
    const mat = new THREE.SpriteMaterial({
      map: dustTex,
      transparent: true,
      opacity: cfg.opacity,
      color: 0x030308,
      depthWrite: false,
    });
    const sprite = new THREE.Sprite(mat);
    sprite.position.set(...cfg.pos);
    sprite.scale.setScalar(cfg.scale);
    group.add(sprite);
  }

  return group;
}

// ── Build scene ──────────────────────────────────────────────────────────────

export function buildGalaxyScene(): void {
  // Clear previous
  while (galaxyGroup.children.length > 0) {
    galaxyGroup.remove(galaxyGroup.children[0]);
  }
  starMeshes.clear();
  starHalos.clear();
  routeLines.length = 0;

  // Galaxy ambient light (dimmer than combat)
  const ambient = new THREE.AmbientLight(0x334466, 0.6);
  galaxyGroup.add(ambient);

  // Background spiral galaxy
  galaxyGroup.add(createBackgroundStars());
  galaxyGroup.add(createGalaxyNebulae());

  // Shared geometry for all star systems (optimized for 1000 systems)
  const sharedStarGeo = new THREE.SphereGeometry(0.4, 8, 8);
  if (!glowTexture) glowTexture = createGlowTexture();

  // Star systems
  for (let i = 0; i < STAR_SYSTEMS.length; i++) {
    const sys = STAR_SYSTEMS[i];
    const color = STAR_COLORS[i % STAR_COLORS.length];

    // Star sphere (shared geometry, emissive — no PointLight needed)
    const mat = new THREE.MeshBasicMaterial({
      color,
    });
    const mesh = new THREE.Mesh(sharedStarGeo, mat);
    mesh.position.set(...sys.position);
    mesh.userData.systemId = sys.id;
    galaxyGroup.add(mesh);
    starMeshes.set(sys.id, mesh);

    // Soft glow sprite
    const spriteMat = new THREE.SpriteMaterial({
      map: glowTexture,
      color,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.position.set(...sys.position);
    sprite.scale.setScalar(2.5);
    galaxyGroup.add(sprite);
    starHalos.set(sys.id, sprite);
  }

  // Selection ring (hidden by default)
  const ringGeo = new THREE.RingGeometry(0.7, 0.9, 32);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    transparent: true,
    opacity: 0.7,
    side: THREE.DoubleSide,
  });
  selectionRing = new THREE.Mesh(ringGeo, ringMat);
  selectionRing.rotation.x = -Math.PI / 2;
  selectionRing.visible = false;
  galaxyGroup.add(selectionRing);

  // Contract target marker (red pulsing diamond)
  const diamondGeo = new THREE.OctahedronGeometry(0.5, 0);
  const diamondMat = new THREE.MeshBasicMaterial({
    color: 0xff3333,
  });
  contractMarker = new THREE.Mesh(diamondGeo, diamondMat);
  contractMarker.visible = false;
  galaxyGroup.add(contractMarker);

  // Player ship model (small fighter at current system)
  playerShipModel = createFighter(
    parseHexColor(settings.colors.playerBody),
    parseHexColor(settings.colors.playerExhaust),
  );
  playerShipModel.scale.setScalar(0.3);
  galaxyGroup.add(playerShipModel);

  updatePlayerShipPosition();
  recomputeNearby();

  // Set initial scales instantly (no animation on first build)
  for (const [id, mesh] of starMeshes) {
    const s = nearbySystemIds.has(id) ? NEARBY_SCALE : FAR_SCALE;
    starScaleCurrent.set(id, s);
    mesh.scale.setScalar(s);
    const halo = starHalos.get(id);
    if (halo) halo.scale.setScalar(2.5 * s);
  }

  rebuildRouteLines();
  rebuildLabels();
}

// ── Route lines (only from current system) ──────────────────────────────────

function rebuildRouteLines(): void {
  // Remove old route lines
  for (const line of routeLines) {
    galaxyGroup.remove(line);
    line.geometry.dispose();
    (line.material as THREE.LineBasicMaterial).dispose();
  }
  routeLines.length = 0;

  const currentSys = getSystem(campaign.currentSystemId);
  if (!currentSys) return;

  for (const connId of currentSys.connections) {
    const from = starMeshes.get(campaign.currentSystemId);
    const to = starMeshes.get(connId);
    if (!from || !to) continue;

    const points = [from.position, to.position];
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineBasicMaterial({
      color: 0x00ccff,
      transparent: true,
      opacity: 0.5,
    });
    const line = new THREE.Line(geo, mat);
    galaxyGroup.add(line);
    routeLines.push(line);
  }
}

// ── Labels (systems within NEARBY_HOPS) ─────────────────────────────────────

function rebuildLabels(): void {
  if (!labelsContainer) {
    labelsContainer = document.createElement('div');
    labelsContainer.id = 'galaxy-labels';
    document.body.appendChild(labelsContainer);
  }
  for (const el of labelElements.values()) el.remove();
  labelElements.clear();

  for (const id of nearbySystemIds) {
    const sys = getSystem(id);
    if (!sys) continue;
    const label = document.createElement('div');
    label.className = 'galaxy-label';
    label.textContent = sys.name;
    labelsContainer.appendChild(label);
    labelElements.set(sys.id, label);
  }
}

// ── Update ───────────────────────────────────────────────────────────────────

export function updateGalaxyScene(dt: number): void {
  _pulse.time += dt;

  // Update twinkle time for bright star overlay
  if (twinkleTimeUniform) twinkleTimeUniform.value = _pulse.time;

  // Current system halo pulse (opacity handled in the distance-fade loop below)
  const currentHalo = starHalos.get(campaign.currentSystemId);
  if (currentHalo) {
    const s = 3 + Math.sin(_pulse.time * 3) * 0.5;
    currentHalo.scale.setScalar(s);
  }

  // Contract marker animation
  if (contractMarker && contractMarker.visible) {
    contractMarker.rotation.y += dt * 2;
    contractMarker.position.y = contractMarker.userData.baseY + Math.sin(_pulse.time * 4) * 0.5;
  }

  // Rotate player ship model gently
  if (playerShipModel) {
    playerShipModel.rotation.y += dt * 0.5;
  }

  // Selection ring pulse
  if (selectionRing && selectionRing.visible) {
    const mat = selectionRing.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.5 + Math.sin(_pulse.time * 4) * 0.2;
  }

  // Animate star scales (nearby = full, far = half)
  // Also fade out halos when they're close to camera to prevent screen-filling rectangles
  const HALO_FADE_FAR = 10; // full opacity at this distance
  const HALO_FADE_NEAR = 5; // fully hidden at this distance
  const camPos = camera.position;

  for (const [id, mesh] of starMeshes) {
    const target = nearbySystemIds.has(id) ? NEARBY_SCALE : FAR_SCALE;
    const current = starScaleCurrent.get(id) ?? target;
    const diff = target - current;
    if (Math.abs(diff) > 0.005) {
      const next = current + diff * Math.min(1, dt * SCALE_LERP_SPEED);
      starScaleCurrent.set(id, next);
      mesh.scale.setScalar(next);
    } else if (current !== target) {
      starScaleCurrent.set(id, target);
      mesh.scale.setScalar(target);
    }

    // Distance-based halo fade — prevents giant sprite rectangles near camera
    const halo = starHalos.get(id);
    if (!halo) continue;
    const dist = camPos.distanceTo(mesh.position);
    const fade = Math.max(0, Math.min(1, (dist - HALO_FADE_NEAR) / (HALO_FADE_FAR - HALO_FADE_NEAR)));

    if (id === campaign.currentSystemId) {
      // Current system has its own pulse — modulate by fade
      (halo.material as THREE.SpriteMaterial).opacity =
        fade * (0.8 + Math.sin(_pulse.time * 3) * 0.2);
    } else {
      const s = starScaleCurrent.get(id) ?? target;
      halo.scale.setScalar(2.5 * s);
      (halo.material as THREE.SpriteMaterial).opacity = fade * 0.7;
    }
  }
}

// ── Label projection ─────────────────────────────────────────────────────────

export function updateGalaxyLabels(cam: THREE.Camera): void {
  if (!labelsContainer) return;
  const w = window.innerWidth;
  const h = window.innerHeight;

  for (const [id, label] of labelElements) {
    const mesh = starMeshes.get(id);
    if (!mesh) continue;

    _projVec.copy(mesh.position);
    _projVec.project(cam);

    // Behind camera
    if (_projVec.z > 1) {
      label.style.display = 'none';
      continue;
    }

    const x = (0.5 + _projVec.x / 2) * w;
    const y = (0.5 - _projVec.y / 2) * h;

    label.style.display = '';
    label.style.left = `${x}px`;
    label.style.top = `${y + 18}px`;

    // Highlight current system
    label.classList.toggle('current', id === campaign.currentSystemId);
    // Highlight contract target
    label.classList.toggle('contract-target', campaign.activeContract?.targetSystemId === id);
  }
}

// ── Helpers ──────────────────────────────────────────────────────────────────

export function updatePlayerShipPosition(): void {
  const sys = starMeshes.get(campaign.currentSystemId);
  if (sys && playerShipModel) {
    playerShipModel.position.copy(sys.position);
    playerShipModel.position.y += 2.5;
  }
}

export function getStarPosition(systemId: string): THREE.Vector3 | null {
  const mesh = starMeshes.get(systemId);
  return mesh ? mesh.position.clone() : null;
}

export function setPlayerShipAt(pos: THREE.Vector3): void {
  if (playerShipModel) {
    playerShipModel.position.set(pos.x, pos.y + 2.5, pos.z);
  }
}

export function selectSystem(systemId: string | null): void {
  if (!selectionRing) return;
  if (!systemId) {
    selectionRing.visible = false;
    return;
  }
  const mesh = starMeshes.get(systemId);
  if (mesh) {
    selectionRing.position.copy(mesh.position);
    selectionRing.position.y += 0.05;
    selectionRing.visible = true;
  }
}

export function updateContractMarker(): void {
  if (!contractMarker) return;
  if (campaign.activeContract) {
    const targetMesh = starMeshes.get(campaign.activeContract.targetSystemId);
    if (targetMesh) {
      contractMarker.position.copy(targetMesh.position);
      contractMarker.userData.baseY = targetMesh.position.y + 3.5;
      contractMarker.position.y = contractMarker.userData.baseY;
      contractMarker.visible = true;
      return;
    }
  }
  contractMarker.visible = false;
}

export function showGalaxy(): void {
  galaxyGroup.visible = true;
  setStarfieldVisible(false);
  // Increase near plane to clip sprites/points that are too close to camera
  camera.near = 5;
  camera.updateProjectionMatrix();
  if (labelsContainer) labelsContainer.style.display = 'block';
}

export function hideGalaxy(): void {
  galaxyGroup.visible = false;
  setStarfieldVisible(true);
  // Restore near plane for combat mode
  camera.near = 1;
  camera.updateProjectionMatrix();
  if (selectionRing) selectionRing.visible = false;
  if (labelsContainer) labelsContainer.style.display = 'none';
}

export function getStarMeshes(): Map<string, THREE.Mesh> {
  return starMeshes;
}

// ── Brightness control ────────────────────────────────────────────────────────

export function setGalaxyBrightness(value: number): void {
  galaxyBrightness = value;
  if (mainStarsMat) mainStarsMat.opacity = BASE_MAIN_OPACITY * value;
  if (brightStarsMat) brightStarsMat.opacity = BASE_BRIGHT_OPACITY * value;
  for (let i = 0; i < nebulaMats.length; i++) {
    nebulaMats[i].opacity = baseNebulaOpacities[i] * value;
  }
}

export function getGalaxyBrightness(): number {
  return galaxyBrightness;
}

// Rebuild routes, labels, and nearby set for current system
export function highlightRoutes(): void {
  recomputeNearby();
  rebuildRouteLines();
  rebuildLabels();
}
