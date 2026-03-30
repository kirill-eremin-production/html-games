import {
  type ActiveCust,
  type CustItem,
  type Inventory,
  type Product,
  CUSTS,
  PRODS,
  INITIAL_STOCK,
  WARMTH_BONUS,
} from "./data";

export const fmt = (n: number) => Math.floor(n).toLocaleString("ru") + " руб.";
export const fS = (n: number) => Math.floor(n).toLocaleString("ru");

export function roundTotal(total: number, lvl: number): number {
  if (lvl >= 3) return Math.round(total / 50) * 50 || 50;
  if (lvl >= 2) return Math.round(total / 10) * 10 || 10;
  if (lvl >= 1) return Math.round(total / 5) * 5 || 5;
  return total;
}

export function pickPay(total: number): number {
  const bs = [100, 50, 10, 5, 1];
  const v = bs.filter((b) => b >= total);
  if (!v.length) return Math.ceil(total / 100) * 100;
  if (Math.random() < 0.12) return total;
  return v[Math.floor(Math.random() * Math.min(3, v.length))];
}

export function makeCust(
  inv: Inventory,
  maxTier: number,
  scanLvl: number,
  vipLvl: number,
): ActiveCust {
  let pool = CUSTS.slice(0, 4).filter((c) => c.tier <= maxTier);
  if (vipLvl > 0) {
    const extra = [];
    for (let i = 0; i < vipLvl; i++) {
      const hi = pool.filter((c) => c.tier >= 2);
      if (hi.length) extra.push(hi[Math.floor(Math.random() * hi.length)]);
    }
    pool = [...pool, ...extra];
  }
  const t = pool[Math.floor(Math.random() * pool.length)];
  const prodPool = PRODS.filter((p) => p.tier <= t.tier);
  const avail = prodPool.filter((p) => {
    const s = inv[p.id];
    if (!s || s.stock <= 0) return false;
    const r = s.price / p.fair;
    return r <= 1.6 && (r <= 1.3 || Math.random() < 0.35);
  });
  const wanted = prodPool.filter((p) => {
    const s = inv[p.id];
    return !s || s.stock <= 0 || s.price / p.fair > 1.6;
  });
  const cnt = Math.min(
    avail.length || 1,
    t.items[0] + Math.floor(Math.random() * (t.items[1] - t.items[0] + 1)),
  );
  if (!avail.length) {
    return {
      ...t,
      id: Date.now() + Math.random(),
      items: [],
      total: 0,
      payWith: 0,
      scanned: [],
      phase: "empty",
      wanted: wanted.slice(0, 2),
      patience: t.pat,
      patLeft: t.pat,
    };
  }
  const shuffled = [...avail].sort(() => Math.random() - 0.5);
  const hN = Math.max(1, 4 - scanLvl);
  const items: CustItem[] = [];
  for (const p of shuffled.slice(0, cnt)) {
    items.push({
      ...p,
      uid: `${p.id}_${items.length}_${Date.now()}`,
      hits: 0,
      need: hN,
      rp: inv[p.id].price,
    });
  }
  const total = items.reduce((s, it) => s + it.rp, 0);
  return {
    ...t,
    id: Date.now() + Math.random(),
    items,
    total,
    payWith: pickPay(total),
    scanned: [],
    phase: "scan",
    wanted: wanted.slice(0, 2),
    patience: t.pat,
    patLeft: t.pat,
  };
}

export function initInv(): Inventory {
  const inv: Inventory = {};
  PRODS.forEach((p) => {
    inv[p.id] = { stock: 0, price: p.fair };
  });
  INITIAL_STOCK.forEach((id) => {
    inv[id].stock = 8;
  });
  return inv;
}

export function calcWarmthBonus(items: CustItem[]): number {
  let b = 0;
  items.forEach((it) => {
    if (WARMTH_BONUS[it.id]) b += WARMTH_BONUS[it.id];
  });
  return b;
}

export function warmthColor(w: number): string {
  if (w > 60) return "#4a90c0";
  if (w > 35) return "#c09040";
  if (w > 15) return "#c06040";
  return "#d03030";
}

export function priceColor(ratio: number): string {
  if (ratio > 1.4) return "#c05040";
  if (ratio > 1.15) return "#c09040";
  return "#5a9a7a";
}

export function priceLabel(ratio: number): { color: string; text: string } {
  if (ratio > 1.5) return { color: "#c05040", text: "😤 слишком дорого" };
  if (ratio > 1.25) return { color: "#c09040", text: "😐 выше рынка" };
  if (ratio > 1.0) return { color: "#5a9a7a", text: "😊 справедливо" };
  if (ratio >= 0.85) return { color: "#5a90b0", text: "😄 берут охотно" };
  return { color: "#c06060", text: "📉 убыток" };
}
