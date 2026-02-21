import * as THREE from 'three';
import { refs } from './refs';
import { getDotTexture } from './textures';

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

export function createBackgroundStars(): THREE.Group {
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
  function getRegionColor(x: number, z: number, baseBrightness: number): [number, number, number] {
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
        return [
          x - dx * pull + gr() * clusterSize[i] * 0.3,
          z - dz * pull + gr() * clusterSize[i] * 0.3,
        ];
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
      const rawZ = (r * Math.sin(a)) / barStretch;
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
  const dotTex = getDotTexture();
  const matMain = new THREE.PointsMaterial({
    size: 0.25,
    map: dotTex,
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
  refs.mainStarsMat = matMain;
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
  refs.twinkleTimeUniform = timeUniform;
  const matBright = new THREE.PointsMaterial({
    size: 0.7,
    map: dotTex,
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
  refs.brightStarsMat = matBright;
  group.add(new THREE.Points(bGeo, matBright));

  return group;
}
