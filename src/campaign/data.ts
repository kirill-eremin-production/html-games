import type { StarSystem } from './types';

export const STAR_SYSTEMS: StarSystem[] = [
  {
    id: 'solaris',
    name: 'Солярис',
    position: [0, 0, 0],
    connections: ['nova', 'cassiopeia', 'vega'],
  },
  {
    id: 'nova',
    name: 'Нова',
    position: [20, 3, -15],
    connections: ['solaris', 'cassiopeia', 'orion'],
  },
  {
    id: 'cassiopeia',
    name: 'Кассиопея',
    position: [-18, -2, -20],
    connections: ['solaris', 'nova', 'andromeda'],
  },
  {
    id: 'andromeda',
    name: 'Андромеда',
    position: [-30, 4, 8],
    connections: ['cassiopeia', 'neptunus'],
  },
  {
    id: 'orion',
    name: 'Орион',
    position: [15, -3, 22],
    connections: ['nova', 'vega', 'sirius'],
  },
  {
    id: 'vega',
    name: 'Вега',
    position: [35, 2, 10],
    connections: ['solaris', 'orion'],
  },
  {
    id: 'sirius',
    name: 'Сириус',
    position: [5, -4, 35],
    connections: ['orion', 'neptunus'],
  },
  {
    id: 'neptunus',
    name: 'Нептунус',
    position: [-25, 3, 30],
    connections: ['andromeda', 'sirius'],
  },
];

export function getSystem(id: string): StarSystem {
  return STAR_SYSTEMS.find((s) => s.id === id)!;
}

export function getFuelCost(fromId: string, toId: string): number {
  const a = getSystem(fromId);
  const b = getSystem(toId);
  const dx = a.position[0] - b.position[0];
  const dy = a.position[1] - b.position[1];
  const dz = a.position[2] - b.position[2];
  const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
  return dist < 25 ? 1 : 2;
}

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

export function generateContracts(currentSystemId: string): {
  difficulty: 'easy' | 'medium' | 'hard';
  title: string;
  description: string;
  targetSystemId: string;
}[] {
  const otherSystems = STAR_SYSTEMS.filter((s) => s.id !== currentSystemId);
  const shuffled = otherSystems.sort(() => Math.random() - 0.5);

  const pick = (i: number) => shuffled[i % shuffled.length].id;

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
