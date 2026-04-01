/* ══════════ TYPES ══════════ */

export interface Denomination {
  v: number;
  l: string;
  c: string;
  bg: string;
  w: number;
  h: number;
}

export interface Product {
  id: string;
  n: string;
  i: string;
  fair: number;
  ws: number;
  tier: number;
}

export interface Customer {
  name: string;
  em: string;
  portrait?: string;
  tier: number;
  items: [number, number];
  tip: number;
  pat: number;
  desc: string;
}

export interface Upgrade {
  id: string;
  n: string;
  i: string;
  d: string;
  cost: number;
  cm: number;
  max: number;
  cat: string;
}

export interface Project {
  id: string;
  n: string;
  i: string;
  d: string;
  cost: number;
  warmR?: number;
  popC?: number;
  infirmary?: boolean;
  final?: boolean;
  story: string;
}

export interface GameEvent {
  text: string;
  type: "b" | "c";
  mult: number;
  warm: number;
}

export interface InvSlot {
  stock: number;
  price: number;
}

export interface CustItem extends Product {
  uid: string;
  hits: number;
  need: number;
  rp: number;
}

export interface ActiveCust extends Omit<Customer, "items"> {
  id: number;
  items: CustItem[];
  total: number;
  payWith: number;
  scanned: string[];
  phase: "scan" | "change" | "exact" | "empty" | "done";
  wanted: Product[];
  patience: number;
  patLeft: number;
}

export interface SaleResult {
  earned: number;
  tip: number;
  em: string;
  name: string;
}

export type Inventory = Record<string, InvSlot>;
export type UpgLevels = Record<string, number>;

/* ══════════ DENOMINATIONS ══════════ */

export const DENOMS: Denomination[] = [
  { v: 100, l: "100", c: "#5090c0", bg: "#102030", w: 74, h: 36 },
  { v: 50, l: "50", c: "#4aaa7a", bg: "#102a1a", w: 74, h: 36 },
  { v: 10, l: "10", c: "#7090d0", bg: "#151a30", w: 68, h: 34 },
  { v: 5, l: "5", c: "#a080c0", bg: "#1a1530", w: 68, h: 34 },
  { v: 1, l: "1", c: "#90a8c0", bg: "#151a22", w: 64, h: 32 },
];

/* ══════════ TIERS ══════════ */

export const TIER_NAMES: Record<number, string> = { 1: "Нужда", 2: "Достаток", 3: "Роскошь" };
export const TIER_COLORS: Record<number, string> = { 1: "#6a90b0", 2: "#70b0d8", 3: "#d4a830" };

/* ══════════ FUEL ══════════ */

export const FUEL = new Set(["coal", "firewood", "kerosene", "whale_oil", "candles"]);
export const WARMTH_BONUS: Record<string, number> = { coal: 4, firewood: 3, kerosene: 5, whale_oil: 6, candles: 2 };

/* ══════════ PRODUCTS ══════════ */

export const PRODS: Product[] = [
  // Tier 1
  { id: "coal", n: "Уголь", i: "⬛", fair: 12, ws: 6, tier: 1 },
  { id: "firewood", n: "Дрова", i: "🪵", fair: 8, ws: 3, tier: 1 },
  { id: "bread", n: "Сухари", i: "🍞", fair: 6, ws: 2, tier: 1 },
  { id: "candles", n: "Свечи", i: "🕯️", fair: 10, ws: 4, tier: 1 },
  { id: "rope", n: "Канат", i: "🪢", fair: 16, ws: 7, tier: 1 },
  { id: "preserves", n: "Консервы", i: "🥫", fair: 15, ws: 7, tier: 1 },
  // Tier 2
  { id: "tea", n: "Чай", i: "🍵", fair: 35, ws: 18, tier: 2 },
  { id: "venison", n: "Оленина", i: "🥩", fair: 22, ws: 11, tier: 2 },
  { id: "kerosene", n: "Керосин", i: "🏮", fair: 18, ws: 9, tier: 2 },
  { id: "whale_oil", n: "Китовый жир", i: "🛢️", fair: 28, ws: 14, tier: 2 },
  { id: "valenki", n: "Валенки", i: "🥾", fair: 30, ws: 14, tier: 2 },
  { id: "medicine", n: "Аптечка", i: "💊", fair: 42, ws: 20, tier: 2 },
  { id: "pipes", n: "Медные трубы", i: "🔧", fair: 38, ws: 18, tier: 2 },
  // Tier 3
  { id: "fur_coat", n: "Шуба", i: "🧥", fair: 85, ws: 42, tier: 3 },
  { id: "gears", n: "Шестерёнки", i: "⚙️", fair: 45, ws: 22, tier: 3 },
  { id: "lenses", n: "Линзы", i: "🔍", fair: 55, ws: 28, tier: 3 },
  { id: "gunpowder", n: "Порох", i: "💥", fair: 50, ws: 25, tier: 3 },
  { id: "spirit", n: "Спирт", i: "🧪", fair: 40, ws: 20, tier: 3 },
  { id: "heater", n: "Паровая грелка", i: "♨️", fair: 150, ws: 75, tier: 3 },
  { id: "chrono", n: "Хронометр", i: "⏱️", fair: 200, ws: 105, tier: 3 },
  { id: "mammoth", n: "Мамонтовая шуба", i: "🦣", fair: 350, ws: 180, tier: 3 },
];

/* ══════════ CUSTOMERS ══════════ */

export const CUSTS: Customer[] = [
  { name: "Прасковья", em: "👵", tier: 1, items: [2, 3], tip: 0, pat: 40, desc: "Травница", portrait: 'https://storage.yandexcloud.net/k-ai-public/icefall-market/backgrounds/proskovia.png' },
  { name: "Каторжник Фёдор", em: "⛓️", tier: 1, items: [1, 2], tip: 0, pat: 25, desc: "Бежал с этапа", portrait: "https://storage.yandexcloud.net/k-ai-public/icefall-market/characters/convict-fyodor.webp" },
  { name: "Матушка Агафья", em: "🧶", tier: 1, items: [2, 4], tip: 2, pat: 45, desc: "С тремя детьми", portrait: "https://storage.yandexcloud.net/k-ai-public/icefall-market/characters/mother-agafya.webp" },
  { name: "Юнга Тимофей", em: "👦", tier: 1, items: [1, 2], tip: 0, pat: 30, desc: "С парохода", portrait: "https://storage.yandexcloud.net/k-ai-public/icefall-market/characters/cabin-boy-timofey.webp" },
  { name: "Инженер Краузе", em: "🔧", tier: 2, items: [3, 5], tip: 3, pat: 30, desc: "Чинит локомотивы" },
  { name: "Охотник Дерсу", em: "🏹", tier: 2, items: [3, 5], tip: 1, pat: 25, desc: "Таёжный следопыт" },
  { name: "Доктор Вернер", em: "🩺", tier: 2, items: [2, 4], tip: 4, pat: 35, desc: "Лечит кого может" },
  { name: "Гувернантка Мари", em: "👒", tier: 2, items: [1, 3], tip: 6, pat: 20, desc: "Мёрзнет, но держится" },
  { name: "Штабс-капитан Воронов", em: "🎖️", tier: 3, items: [2, 4], tip: 8, pat: 20, desc: "Защитник станции" },
  { name: "Купец Строганов", em: "💰", tier: 3, items: [4, 7], tip: 15, pat: 25, desc: "Промышленник" },
  { name: "Поручик Ржевский", em: "⚔️", tier: 3, items: [2, 4], tip: 12, pat: 18, desc: "Гусар" },
];

/* ══════════ MERCHANT ══════════ */

export const MERCHANT = {
  name: "Обозник Савелий",
  em: "🐴",
  portrait: "https://storage.yandexcloud.net/k-ai-public/icefall-market/characters/merchant-savely.webp",
  desc: "Привозит припасы из-за перевала",
} as const;

/* ══════════ UPGRADES ══════════ */

export const UPGRADES: Upgrade[] = [
  { id: "scales", n: "Паровые весы", i: "⚖️", d: "−1 клик для взвешивания", cost: 80, cm: 2.2, max: 5, cat: "shop" },
  { id: "autoweigh", n: "Мех. помощник", i: "🤖", d: "Взвешивает товары сам", cost: 1000, cm: 3, max: 1, cat: "shop" },
  { id: "arithmometer", n: "Арифмометр", i: "🔢", d: "Считает сдачу автоматически", cost: 2000, cm: 3, max: 1, cat: "shop" },
  { id: "training", n: "Приказчики", i: "📋", d: "Полная автоматизация кассы", cost: 12000, cm: 3, max: 1, cat: "shop" },
  { id: "tent2", n: "Утеплённая палатка", i: "⛺", d: "Открывает товары и покупателей 2 уровня", cost: 150, cm: 1, max: 1, cat: "tent" },
  { id: "tent3", n: "Деревянная лавка", i: "🏚️", d: "Открывает товары и покупателей 3 уровня", cost: 600, cm: 1, max: 1, cat: "tent" },
  { id: "crowd", n: "Телеграф", i: "📡", d: "+2 покупателя в день", cost: 200, cm: 2, max: 5, cat: "day" },
  { id: "vip", n: "Репутация", i: "⭐", d: "Чаще приходят богатые покупатели", cost: 300, cm: 2.2, max: 3, cat: "day" },
  { id: "samovar", n: "Самовар у входа", i: "☕", d: "Чаевые ×2", cost: 250, cm: 2, max: 3, cat: "day" },
  { id: "wholesale", n: "Контракт с обозом", i: "📜", d: "Закупки −15% к цене", cost: 350, cm: 2.5, max: 3, cat: "day" },
  { id: "rounding", n: "Округление", i: "🔄", d: "Итого округляется: →5 руб, →10 руб, →50 руб", cost: 100, cm: 3, max: 3, cat: "shop" },
];

/* ══════════ PROJECTS ══════════ */

export const PROJECTS: Project[] = [
  { id: "tent", n: "Укрепить палатку", i: "⛺", d: "Ветрозащита. Тепло: −0.3°/сек", cost: 40, warmR: -0.03, story: "Парусина натянута. Ветер больше не задувает огонь." },
  { id: "boiler1", n: "Починить котёл", i: "🔥", d: "Тепло: −0.5°/сек", cost: 120, warmR: -0.05, story: "Котёл гудит. Тёплый пар ползёт по трубам." },
  { id: "shelter1", n: "Барак", i: "🏠", d: "+10 мест для людей", cost: 100, popC: 10, story: "Стены из брёвен. Люди не спят на снегу." },
  { id: "infirmary", n: "Лазарет", i: "🩺", d: "Люди не гибнут при t>10°. Без него гибнут при t<25°.", cost: 200, infirmary: true, story: "«Наконец-то я могу не только утешать» — говорит Вернер." },
  { id: "shelter2", n: "Второй барак", i: "🏠", d: "+10 мест", cost: 180, popC: 10, story: "Кто-то назвал это место «домом»." },
  { id: "boiler2", n: "Паровой котёл", i: "⚙️", d: "Тепло: −0.5°/сек", cost: 350, warmR: -0.05, story: "Горячий пар согревает каждый барак." },
  { id: "tele", n: "Телеграф", i: "📡", d: "+5 мест. Связь с Империей.", cost: 500, popC: 5, story: "████ ДЕРЖИТЕСЬ ████ ПОМОЩЬ ИДЁТ ████" },
  { id: "shelter3", n: "Казармы", i: "🏛️", d: "+20 мест", cost: 600, popC: 20, story: "Настоящие стены. Станция «Полярная» на картах." },
  { id: "boiler3", n: "Мощный котёл", i: "🔥", d: "Тепло: −0.6°/сек", cost: 1000, warmR: -0.06, story: "Столб пара виден за километры." },
  { id: "exp_fund", n: "Экспедиционный фонд", i: "🧭", d: "Подготовка к походу", cost: 3000, story: "Карты разложены. Маршрут проложен." },
  { id: "expedition", n: "Экспедиция к Котлу", i: "🦅", d: "Последняя надежда", cost: 5000, final: true, story: "VICTORY" },
];

/* ══════════ EVENTS ══════════ */

export const EVENTS: GameEvent[] = [
  { text: "🌨️ Метель! Покупатели платят вдвое", type: "b", mult: 2, warm: -8 },
  { text: "🚂 Экспресс из Петербурга!", type: "b", mult: 2.5, warm: 0 },
  { text: "🧊 Трубы замёрзли! Тепло падает", type: "c", mult: 0.7, warm: -15 },
  { text: "🐺 Волки! Спрос растёт", type: "b", mult: 1.5, warm: -5 },
];

/* ══════════ INTRO TEXTS ══════════ */

export const INTRO_TEXTS = [
  "Зима 1863 года. Великий Мороз пришёл и не ушёл.",
  "Последний поезд привёз вас на станцию «Полярная».",
  "Здесь 15 душ. Они мёрзнут. Они голодны.",
  "Где-то в тундре — Большой Котёл, древняя машина. Он сломан.",
  "У вас палатка, товар и 200 рублей.\nВсё остальное — в ваших руках.",
];

/* ══════════ MERCHANT ══════════ */

export const MERCHANT_INTERVAL = 3; // every 3 days
export const MERCHANT_STOCK_RATIO = 0.6; // carries ~60% of available products

/* ══════════ INITIAL STOCK ══════════ */

export const INITIAL_STOCK = ["coal", "bread", "candles", "firewood", "preserves", "rope"];
