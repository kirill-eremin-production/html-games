import { FUEL_DISTANCE_RATIO } from './balance';
import type { Planet, PlanetType, StarSystem, SystemDetail } from './types';

// ── Seeded PRNG (mulberry32) ────────────────────────────────────────────────

export function mulberry32(seed: number): () => number {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Box-Muller with seeded rng
function seededGaussian(rng: () => number): number {
  return Math.sqrt(-2 * Math.log(rng() || 1e-4)) * Math.cos(2 * Math.PI * rng());
}

// ── Star names ──────────────────────────────────────────────────────────────

const REAL_STAR_NAMES = [
  'Альтаир',
  'Денеб',
  'Ригель',
  'Бетельгейзе',
  'Вега',
  'Антарес',
  'Процион',
  'Капелла',
  'Альдебаран',
  'Спика',
  'Поллукс',
  'Фомальгаут',
  'Мимоза',
  'Регул',
  'Адара',
  'Кастор',
  'Гакрукс',
  'Шаула',
  'Беллатрикс',
  'Эльнат',
  'Мирфак',
  'Алнилам',
  'Алиот',
  'Дубхе',
  'Мерак',
  'Канопус',
  'Ахернар',
  'Хадар',
  'Акрукс',
  'Атрия',
  'Сабик',
  'Менкалинан',
  'Тубан',
  'Арктур',
  'Нова',
  'Кассиопея',
  'Андромеда',
  'Орион',
  'Нептунус',
  'Ригель Кент',
  'Денебола',
  'Альгениб',
  'Альферац',
  'Мицар',
  'Алькор',
  'Расальхаг',
  'Сухаил',
  'Авиор',
  'Наос',
  'Альсуд',
  'Маркаб',
  'Шедар',
  'Мирах',
  'Алмаак',
  'Хамаль',
  'Шератан',
  'Мирцам',
  'Везен',
  'Арнеб',
  'Нихаль',
  'Курса',
  'Ментака',
  'Альнитак',
  'Саиф',
  'Пхад',
  'Мегрец',
  'Алиот',
  'Бенетнаш',
  'Кор Кароли',
  'Гемма',
  'Зубен',
  'Акраб',
  'Антарес',
  'Шаула',
  'Лезат',
  'Кархи',
  'Сариф',
  'Нунки',
  'Каус',
  'Альбирео',
  'Тараз',
  'Маркаб',
  'Садалмелик',
  'Садалсууд',
  'Скат',
  'Фомальгаут',
  'Дифда',
  'Менкар',
  'Альголь',
  'Мирфак',
  'Капелла',
  'Тейат',
  'Альхена',
  'Муфрид',
  'Сегин',
  'Рухба',
  'Дженах',
  'Минкар',
  'Гиена',
  'Завиява',
  'Порима',
  'Виндемиатрикс',
  'Хезе',
  'Зубен Хакраби',
  'Сирра',
  'Кейд',
  'Кафф',
  'Тених',
  'Данб',
  'Альрами',
  'Садира',
  'Кабиль',
  'Тират',
  'Захиль',
  'Мусик',
  'Альраид',
  'Садатони',
  'Боталин',
  'Завра',
  'Кремон',
  'Тилон',
  'Феркад',
  'Элтамин',
  'Растабан',
  'Граффиас',
  'Чара',
  'Ла Суперба',
  'Селаено',
  'Электра',
  'Майя',
  'Тайгета',
  'Стеропа',
  'Меропа',
  'Альциона',
  'Атлас',
  'Плейона',
  'Хиадес',
  'Никон',
  'Систри',
  'Гирлан',
  'Кемаш',
  'Тирок',
  'Навия',
  'Бестия',
  'Ферион',
  'Крестон',
  'Халлия',
  'Зефирус',
  'Иридан',
  'Латан',
  'Норикум',
  'Авента',
  'Керн',
  'Люмир',
  'Сольвет',
  'Армис',
  'Грантис',
  'Ксеон',
  'Вирай',
  'Тобрис',
  'Кандор',
  'Эверон',
  'Лорин',
  'Пилат',
  'Мирена',
  'Сафира',
  'Руттен',
  'Гальвер',
  'Истрон',
  'Найлус',
  'Рошан',
  'Крибель',
  'Остра',
  'Тамир',
  'Зирак',
  'Морвин',
  'Сельва',
  'Гриних',
  'Бальтор',
  'Кресто',
];

const GREEK_LETTERS = ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ'];

function generateName(index: number, rng: () => number): string {
  if (index < REAL_STAR_NAMES.length) {
    return REAL_STAR_NAMES[index];
  }
  const letterIdx = (index - REAL_STAR_NAMES.length) % GREEK_LETTERS.length;
  const sectorId = Math.floor(rng() * 900 + 100);
  return `${GREEK_LETTERS[letterIdx]}-${sectorId}`;
}

// ── Procedural generation ───────────────────────────────────────────────────

const GALAXY_SEED = 42;
const SYSTEM_COUNT = 1000;
const ARMS = 5;
const TWO_PI = 2 * Math.PI;
const MIN_RADIUS = 15; // no systems near galactic center (black hole)
const MAX_RADIUS = 75;
const MIN_SEPARATION = 3.5; // minimum distance between systems

function generateSystems(): StarSystem[] {
  const rng = mulberry32(GALAXY_SEED);
  const gr = () => seededGaussian(rng);

  const systems: StarSystem[] = [];
  const positions: [number, number, number][] = [];

  // Generate positions along spiral arms (same algorithm as createBackgroundStars)
  let attempts = 0;
  while (systems.length < SYSTEM_COUNT && attempts < SYSTEM_COUNT * 10) {
    attempts++;
    let x: number, z: number, y: number;

    if (rng() < 0.85) {
      // Spiral arm star (85%)
      const arm = Math.floor(rng() * ARMS);
      const t = 0.03 + rng() * 0.97;
      const angle = t * 4.2 + (arm * TWO_PI) / ARMS;
      const wobble = Math.sin(t * 12 + arm) * 0.3 + Math.sin(t * 5.7 + arm * 3) * 0.2;
      const r = t * MAX_RADIUS;
      const spread = (8 + r * 0.15) * (0.3 + rng() * 0.7);
      const perpA = angle + wobble + Math.PI / 2;
      const offset = gr() * spread * 0.4;

      x = r * Math.cos(angle + wobble) + offset * Math.cos(perpA) + gr() * 2.5;
      z = r * Math.sin(angle + wobble) + offset * Math.sin(perpA) + gr() * 2.5;
      y = gr() * 1.0 * (1 - t * 0.5);
    } else {
      // Inter-arm scattered (15%)
      const a = rng() * TWO_PI;
      const r = MIN_RADIUS + rng() * (MAX_RADIUS - MIN_RADIUS);
      x = r * Math.cos(a) + gr() * 5;
      z = r * Math.sin(a) + gr() * 5;
      y = gr() * 1.2;
    }

    // Enforce minimum radius from center (black hole zone)
    const distFromCenter = Math.sqrt(x * x + z * z);
    if (distFromCenter < MIN_RADIUS) continue;
    if (distFromCenter > MAX_RADIUS) continue;

    // Enforce minimum separation between systems
    let tooClose = false;
    for (let i = 0; i < positions.length; i++) {
      const dx = x - positions[i][0];
      const dy = y - positions[i][1];
      const dz2 = z - positions[i][2];
      if (dx * dx + dy * dy + dz2 * dz2 < MIN_SEPARATION * MIN_SEPARATION) {
        tooClose = true;
        break;
      }
    }
    if (tooClose) continue;

    const pos: [number, number, number] = [
      Math.round(x * 100) / 100,
      Math.round(y * 100) / 100,
      Math.round(z * 100) / 100,
    ];
    const idx = systems.length;
    const id = idx === 0 ? 'solaris' : `sys-${idx}`;
    const name = idx === 0 ? 'Солярис' : generateName(idx, rng);

    systems.push({ id, name, position: pos, connections: [] });
    positions.push(pos);
  }

  // ── Build connections (K-nearest neighbors) ──
  // For each system, find 5 nearest and connect to 2-4 of them
  const K = 5;
  const distCache: number[][] = [];

  // Precompute distances (only indices of K nearest)
  for (let i = 0; i < systems.length; i++) {
    const dists: { idx: number; dist: number }[] = [];
    for (let j = 0; j < systems.length; j++) {
      if (i === j) continue;
      const dx = positions[i][0] - positions[j][0];
      const dy = positions[i][1] - positions[j][1];
      const dz = positions[i][2] - positions[j][2];
      dists.push({ idx: j, dist: dx * dx + dy * dy + dz * dz });
    }
    dists.sort((a, b) => a.dist - b.dist);
    distCache[i] = dists.slice(0, K).map((d) => d.idx);
  }

  // Connect each system to 2-4 nearest
  const connectionSet = new Set<string>();
  for (let i = 0; i < systems.length; i++) {
    const nearest = distCache[i];
    const count = 2 + Math.floor(rng() * 3); // 2, 3, or 4
    for (let k = 0; k < Math.min(count, nearest.length); k++) {
      const j = nearest[k];
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!connectionSet.has(key)) {
        connectionSet.add(key);
        systems[i].connections.push(systems[j].id);
        systems[j].connections.push(systems[i].id);
      }
    }
  }

  // ── Ensure graph connectivity (BFS from solaris) ──
  const visited = new Set<number>();
  const queue = [0];
  visited.add(0);
  const idToIdx = new Map<string, number>();
  for (let i = 0; i < systems.length; i++) idToIdx.set(systems[i].id, i);

  while (queue.length > 0) {
    const curr = queue.shift()!;
    for (const connId of systems[curr].connections) {
      const ci = idToIdx.get(connId)!;
      if (!visited.has(ci)) {
        visited.add(ci);
        queue.push(ci);
      }
    }
  }

  // Connect unvisited components to nearest visited node
  if (visited.size < systems.length) {
    for (let i = 0; i < systems.length; i++) {
      if (visited.has(i)) continue;

      // Find nearest visited system
      let bestDist = Infinity;
      let bestIdx = 0;
      for (const vi of visited) {
        const dx = positions[i][0] - positions[vi][0];
        const dy = positions[i][1] - positions[vi][1];
        const dz = positions[i][2] - positions[vi][2];
        const d = dx * dx + dy * dy + dz * dz;
        if (d < bestDist) {
          bestDist = d;
          bestIdx = vi;
        }
      }

      // Connect
      const key = i < bestIdx ? `${i}-${bestIdx}` : `${bestIdx}-${i}`;
      if (!connectionSet.has(key)) {
        connectionSet.add(key);
        systems[i].connections.push(systems[bestIdx].id);
        systems[bestIdx].connections.push(systems[i].id);
      }

      // BFS from this newly connected node
      const subQueue = [i];
      visited.add(i);
      while (subQueue.length > 0) {
        const curr = subQueue.shift()!;
        for (const connId of systems[curr].connections) {
          const ci = idToIdx.get(connId)!;
          if (!visited.has(ci)) {
            visited.add(ci);
            subQueue.push(ci);
          }
        }
      }
    }
  }

  return systems;
}

// ── Exported data (generated once at module load) ───────────────────────────

export const STAR_SYSTEMS: StarSystem[] = generateSystems();

// Fast lookup by id
const systemMap = new Map<string, StarSystem>();
for (const sys of STAR_SYSTEMS) systemMap.set(sys.id, sys);

export function getSystem(id: string): StarSystem {
  return systemMap.get(id)!;
}

export function getDistanceBetween(fromId: string, toId: string): number {
  const a = getSystem(fromId);
  const b = getSystem(toId);
  const dx = a.position[0] - b.position[0];
  const dy = a.position[1] - b.position[1];
  const dz = a.position[2] - b.position[2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

export function getFuelCost(fromId: string, toId: string): number {
  const dist = getDistanceBetween(fromId, toId);
  return Math.max(1, Math.ceil(dist / FUEL_DISTANCE_RATIO));
}

// ── Contracts ───────────────────────────────────────────────────────────────

const EASY_TITLES = ['Патрулирование', 'Перехват', 'Разведка боем'];
const MEDIUM_TITLES = ['Оборона станции', 'Прорыв обороны', 'Конвой'];
const HARD_TITLES = ['Штурм флота', 'Тотальное наступление', 'Зачистка сектора'];

const EASY_DESCS = [
  'Устранить угрозу в секторе',
  'Перехватить вражеские истребители',
  'Провести разведку и уничтожить патруль',
];
const MEDIUM_DESCS = [
  'Защитить станцию от атаки',
  'Прорвать вражескую блокаду',
  'Обеспечить безопасность конвоя',
];
const HARD_DESCS = [
  'Уничтожить вражеский флот',
  'Полномасштабное наступление на врага',
  'Очистить сектор от всех угроз',
];

/** Find systems within a given distance from start */
function findNearbySystemIds(startId: string): string[] {
  const center = getSystem(startId);
  const result: string[] = [];
  const radiusSq = 50 * 50;
  for (const sys of STAR_SYSTEMS) {
    if (sys.id === startId) continue;
    const dx = center.position[0] - sys.position[0];
    const dy = center.position[1] - sys.position[1];
    const dz = center.position[2] - sys.position[2];
    if (dx * dx + dy * dy + dz * dz <= radiusSq) {
      result.push(sys.id);
    }
  }
  return result;
}

// ── System detail (planets, station, asteroids) ─────────────────────────────

const PLANET_TYPES: PlanetType[] = [
  'rocky',
  'gas_giant',
  'ice',
  'desert',
  'ocean',
  'volcanic',
  'barren',
];

const PLANET_NAMES: Record<PlanetType, string[]> = {
  rocky: ['Ферра', 'Кремния', 'Петрос', 'Литос', 'Терракс'],
  gas_giant: ['Грандис', 'Колосс', 'Титанис', 'Нимбус', 'Циклон'],
  ice: ['Криос', 'Глация', 'Морозия', 'Фростис', 'Зимара'],
  desert: ['Арида', 'Дюна', 'Сирокко', 'Пустыня', 'Сахарис'],
  ocean: ['Аквария', 'Океания', 'Волна', 'Пелагос', 'Маринис'],
  volcanic: ['Вулкан', 'Магма', 'Пепельная', 'Инферно', 'Лавия'],
  barren: ['Пустошь', 'Серая', 'Нихиль', 'Дезола', 'Пепел'],
};

const PLANET_COLORS: Record<PlanetType, number[]> = {
  rocky: [0x8b7355, 0xa0522d, 0xcd853f],
  gas_giant: [0xdaa520, 0xe8a040, 0xc19a6b],
  ice: [0xadd8e6, 0xb0e0e6, 0x87ceeb],
  desert: [0xd2b48c, 0xf4a460, 0xedc9af],
  ocean: [0x1e90ff, 0x4169e1, 0x0077be],
  volcanic: [0x8b0000, 0xff4500, 0xcc3300],
  barren: [0x696969, 0x808080, 0xa9a9a9],
};

const STAR_COLOR_OPTIONS = [0xffff00, 0xffaa00, 0xff6600, 0xaaaaff, 0xffffff, 0xff4444];

function getSystemIndex(systemId: string): number {
  if (systemId === 'solaris') return 0;
  return parseInt(systemId.split('-')[1], 10);
}

const systemDetailCache = new Map<string, SystemDetail>();

export function getSystemDetail(systemId: string): SystemDetail {
  const cached = systemDetailCache.get(systemId);
  if (cached) return cached;

  const idx = getSystemIndex(systemId);
  const rng = mulberry32(GALAXY_SEED * 1000 + idx + 7919);

  const planetCount = 2 + Math.floor(rng() * 7); // 2-8
  const hasStation = systemId === 'solaris' || rng() < 0.25;
  const starColor = STAR_COLOR_OPTIONS[Math.floor(rng() * STAR_COLOR_OPTIONS.length)];
  const starSize = 0.8 + rng() * 1.2;
  const asteroidBeltDistance = rng() < 0.4 ? 1000000 + rng() * 1200000 : null;

  const planets: Planet[] = [];
  for (let i = 0; i < planetCount; i++) {
    const type = PLANET_TYPES[Math.floor(rng() * PLANET_TYPES.length)];
    const orbitalDistance = 300000 + i * 300000 + rng() * 150000;
    const size = type === 'gas_giant' ? 2.0 + rng() * 2.0 : 0.3 + rng() * 1.5;
    const names = PLANET_NAMES[type];
    const name = `${names[Math.floor(rng() * names.length)]}-${i + 1}`;
    const colors = PLANET_COLORS[type];
    const color = colors[Math.floor(rng() * colors.length)];

    planets.push({
      name,
      type,
      orbitalDistance,
      size,
      orbitalSpeed: (0.0005 + rng() * 0.002) / (1 + i * 0.3),
      initialAngle: rng() * Math.PI * 2,
      hasLiquidWater: type === 'ocean' || (type === 'rocky' && rng() < 0.2),
      hasOxygen: (type === 'ocean' || type === 'rocky') && rng() < 0.3,
      radiationLevel: type === 'volcanic' ? 0.6 + rng() * 0.4 : rng() * 0.5,
      color,
      ringColor: type === 'gas_giant' && rng() < 0.5 ? 0xccaa88 : null,
    });
  }

  const detail: SystemDetail = { planets, hasStation, asteroidBeltDistance, starColor, starSize };
  systemDetailCache.set(systemId, detail);
  return detail;
}

export function systemHasStation(systemId: string): boolean {
  if (systemId === 'solaris') return true;
  const idx = getSystemIndex(systemId);
  const rng = mulberry32(GALAXY_SEED * 1000 + idx + 7919);
  // Skip planetCount (same rng call sequence as getSystemDetail)
  rng(); // planetCount
  return rng() < 0.25;
}

// ── Contracts ───────────────────────────────────────────────────────────────

export function generateContracts(currentSystemId: string): {
  difficulty: 'easy' | 'medium' | 'hard';
  title: string;
  description: string;
  targetSystemId: string;
}[] {
  // Pick targets within 2-4 hops
  const nearby = findNearbySystemIds(currentSystemId);
  const shuffled = nearby.sort(() => Math.random() - 0.5);

  const pick = (i: number) =>
    shuffled[i % shuffled.length].length > 0 ? shuffled[i % shuffled.length] : STAR_SYSTEMS[1].id;

  return [
    {
      difficulty: 'easy',
      title: EASY_TITLES[Math.floor(Math.random() * EASY_TITLES.length)],
      description: EASY_DESCS[Math.floor(Math.random() * EASY_DESCS.length)],
      targetSystemId: pick(0),
    },
    {
      difficulty: 'medium',
      title: MEDIUM_TITLES[Math.floor(Math.random() * MEDIUM_TITLES.length)],
      description: MEDIUM_DESCS[Math.floor(Math.random() * MEDIUM_DESCS.length)],
      targetSystemId: pick(1),
    },
    {
      difficulty: 'hard',
      title: HARD_TITLES[Math.floor(Math.random() * HARD_TITLES.length)],
      description: HARD_DESCS[Math.floor(Math.random() * HARD_DESCS.length)],
      targetSystemId: pick(2),
    },
  ];
}
