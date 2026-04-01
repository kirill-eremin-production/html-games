import { useState, useEffect, useCallback } from "react";
import {
  type ActiveCust,
  type CustItem,
  type Denomination,
  type GameEvent,
  type Inventory,
  type Product,
  type Project,
  type SaleResult,
  type UpgLevels,
  DENOMS,
  EVENTS,
  MERCHANT_INTERVAL,
  PRODS,
  PROJECTS,
  UPGRADES,
  WARMTH_BONUS,
} from "./data";
import {
  calcWarmthBonus,
  generateMerchantStock,
  initInv,
  makeCust,
  pickPay,
  roundTotal,
  warmthColor,
} from "./helpers";

export interface GameState {
  // Core state
  phase: "intro" | "game" | "victory";
  money: number;
  earned: number;
  day: number;
  dayPhase: "shop" | "summary";
  custIdx: number;
  served: number;
  dayServed: number;
  dayEarned: number;
  dayMissed: number;
  perfect: number;
  warmth: number;
  population: number;
  popCap: number;
  inv: Inventory;
  cust: ActiveCust | null;
  changeGiven: number;
  changeStack: (Denomination & { id: number })[];
  upg: UpgLevels;
  built: string[];
  tab: "register" | "warehouse" | "settlement" | "upgrades";
  result: SaleResult | null;
  shakeCash: boolean;
  beepItems: string[];
  prodModal: Product | null;
  activeEvent: GameEvent | null;
  eventMult: number;
  storyMsg: string | null;
  storyLog: { text: string; proj: string }[];
  hasInfirmary: boolean;
  introStep: number;
  missedItems: Product[];
  infoModal: "warmth" | "pop" | null;
  fled: boolean;
  merchantStock: string[] | null;
  showMerchantModal: boolean;

  // Derived
  maxTier: number;
  maxCustPerDay: number;
  warmRate: number;
  wC: string;
  allProds: Product[];
  totalStock: number;
  nextProj: Project | undefined;
  changeNeeded: number;
  patProg: number;
  wsMult: number;
  hasAutoScan: boolean;
  hasAutoChange: boolean;
  hasFullAuto: boolean;
  roundLvl: number;
  tipMult: number;
  isMerchantDay: boolean;
  daysUntilMerchant: number;
  nextDayIsMerchant: boolean;

  // Actions
  setPhase: (p: "intro" | "game" | "victory") => void;
  setIntroStep: React.Dispatch<React.SetStateAction<number>>;
  setTab: (t: "register" | "warehouse" | "settlement" | "upgrades") => void;
  setInfoModal: (m: "warmth" | "pop" | null) => void;
  setProdModal: (p: Product | null) => void;
  tapItem: (item: CustItem) => void;
  skipItem: (item: CustItem) => void;
  tapDenom: (d: Denomination) => void;
  buyStock: (prod: Product, qty: number) => void;
  setPrice: (pid: string, delta: number) => void;
  buyUpg: (u: (typeof UPGRADES)[number]) => void;
  buildProj: (p: Project) => void;
  openMerchantModal: () => void;
  dismissMerchant: () => void;
  nextDay: () => void;
  setDayPhase: (p: "shop" | "summary") => void;
  upgCost: (u: (typeof UPGRADES)[number]) => number;
}

export function useGameState(): GameState {
  const [phase, setPhase] = useState<"intro" | "game" | "victory">("intro");
  const [money, setMoney] = useState(200);
  const [earned, setEarned] = useState(0);
  const [day, setDay] = useState(1);
  const [dayPhase, setDayPhase] = useState<"shop" | "summary">("shop");
  const [custIdx, setCustIdx] = useState(0);
  const [served, setServed] = useState(0);
  const [dayServed, setDayServed] = useState(0);
  const [dayEarned, setDayEarned] = useState(0);
  const [dayMissed, setDayMissed] = useState(0);
  const [perfect, setPerfect] = useState(0);
  const [warmth, setWarmth] = useState(72);
  const [population, setPopulation] = useState(15);
  const [popCap, setPopCap] = useState(20);
  const [inv, setInv] = useState<Inventory>(initInv);
  const [cust, setCust] = useState<ActiveCust | null>(null);
  const [changeGiven, setChangeGiven] = useState(0);
  const [changeStack, setChangeStack] = useState<(Denomination & { id: number })[]>([]);
  const [upg, setUpg] = useState<UpgLevels>(() =>
    Object.fromEntries(UPGRADES.map((u) => [u.id, 0])),
  );
  const [built, setBuilt] = useState<string[]>([]);
  const [tab, setTab] = useState<"register" | "warehouse" | "settlement" | "upgrades">("register");
  const [result, setResult] = useState<SaleResult | null>(null);
  const [shakeCash, setShakeCash] = useState(false);
  const [beepItems, setBeepItems] = useState<string[]>([]);
  const [prodModal, setProdModal] = useState<Product | null>(null);
  const [activeEvent, setActiveEvent] = useState<GameEvent | null>(null);
  const [eventMult, setEventMult] = useState(1);
  const [storyMsg, setStoryMsg] = useState<string | null>(null);
  const [storyLog, setStoryLog] = useState<{ text: string; proj: string }[]>([]);
  const [hasInfirmary, setHasInfirmary] = useState(false);
  const [introStep, setIntroStep] = useState(0);
  const [missedItems, setMissedItems] = useState<Product[]>([]);
  const [infoModal, setInfoModal] = useState<"warmth" | "pop" | null>(null);
  const [fled, setFled] = useState(false);
  const [merchantStock, setMerchantStock] = useState<string[] | null>(() =>
    generateMerchantStock(1),
  );
  const [showMerchantModal, setShowMerchantModal] = useState(false);

  // Derived values
  const maxTier = 1 + (upg.tent2 > 0 ? 1 : 0) + (upg.tent3 > 0 ? 1 : 0);
  const tipMult = 1 + upg.samovar;
  const wsMult = 1 - upg.wholesale * 0.12;
  const maxCustPerDay = 3 + upg.crowd * 2;
  const hasAutoScan = upg.autoweigh > 0;
  const hasAutoChange = upg.arithmometer > 0;
  const hasFullAuto = upg.training > 0;
  const roundLvl = upg.rounding;
  const baseWR = 0.18;
  const warmRed = built.reduce((s, pid) => {
    const p = PROJECTS.find((pr) => pr.id === pid);
    return s + (p?.warmR || 0);
  }, 0);
  const warmRate = Math.max(0.02, baseWR + warmRed);
  const wC = warmthColor(warmth);
  const upgCost = (u: (typeof UPGRADES)[number]) =>
    Math.floor(u.cost * Math.pow(u.cm, upg[u.id]));
  const allProds = PRODS.filter((p) => p.tier <= maxTier);
  const totalStock = Object.values(inv).reduce((s, v) => s + v.stock, 0);
  const nextProj = PROJECTS.find((p) => !built.includes(p.id));
  const changeNeeded = cust ? cust.payWith - cust.total : 0;
  const patProg = cust ? cust.patLeft / cust.patience : 0;
  const isMerchantDay = (day - 1) % MERCHANT_INTERVAL === 0;
  const daysUntilMerchant = (MERCHANT_INTERVAL - ((day - 1) % MERCHANT_INTERVAL)) % MERCHANT_INTERVAL;
  const nextDayIsMerchant = day % MERCHANT_INTERVAL === 0;

  // ── Warmth decay ──
  useEffect(() => {
    if (phase !== "game" || dayPhase !== "shop") return;
    const iv = setInterval(() => {
      setWarmth((w) => Math.max(0, Math.min(100, +(w - warmRate).toFixed(2))));
    }, 1000);
    return () => clearInterval(iv);
  }, [phase, dayPhase, warmRate]);

  // ── Patience timer ──
  useEffect(() => {
    if (phase !== "game" || !cust || cust.phase === "empty") return;
    const iv = setInterval(() => {
      setCust((c) => {
        if (!c || c.phase === "done") return c;
        const nl = c.patLeft - 1;
        if (nl <= 0) {
          setFled(true);
          setDayMissed((m) => m + 1);
          setTimeout(() => {
            setCust(null);
            setFled(false);
          }, 1200);
          return { ...c, patLeft: 0, phase: "done" };
        }
        return { ...c, patLeft: nl };
      });
    }, 1000);
    return () => clearInterval(iv);
  }, [phase, cust?.id, cust?.phase]);

  // ── Random events ──
  useEffect(() => {
    if (phase !== "game") return;
    const iv = setInterval(() => {
      if (earned > 100 && !activeEvent && Math.random() < 0.06) {
        const ev = EVENTS[Math.floor(Math.random() * EVENTS.length)];
        setActiveEvent(ev);
        setEventMult(ev.mult);
        if (ev.warm) setWarmth((w) => Math.max(0, Math.min(100, w + ev.warm)));
        setTimeout(() => {
          setActiveEvent(null);
          setEventMult(1);
        }, 12000);
      }
    }, 6000);
    return () => clearInterval(iv);
  }, [phase, earned, activeEvent]);

  // ── Complete sale ──
  const completeSale = useCallback(
    (c: ActiveCust) => {
      if (!c) return;
      const tip = Math.round(c.tip * tipMult * eventMult);
      const e = Math.round((c.total + tip) * eventMult);
      setMoney((m) => m + e);
      setEarned((t) => t + e);
      setServed((n) => n + 1);
      setDayServed((n) => n + 1);
      setDayEarned((n) => n + e);
      const needed = c.payWith - c.total;
      if (Math.abs(changeGiven - needed) < 0.5 || needed <= 0) setPerfect((n) => n + 1);
      const bonus = calcWarmthBonus(c.items);
      if (bonus > 0) setWarmth((w) => Math.min(100, +(w + bonus).toFixed(2)));
      setResult({ earned: e, tip, em: c.em, name: c.name });
      setTimeout(() => {
        setCust(null);
        setChangeGiven(0);
        setChangeStack([]);
        setResult(null);
        setCustIdx((i) => i + 1);
      }, 1300);
    },
    [tipMult, eventMult, changeGiven],
  );

  // ── Spawn next customer ──
  const spawnNext = useCallback(() => {
    if (custIdx >= maxCustPerDay) {
      setDayPhase("summary");
      return;
    }
    const c = makeCust(inv, maxTier, upg.scales, upg.vip);
    if (c.phase === "empty") {
      setMissedItems(c.wanted);
      setCust(c);
      setTimeout(() => {
        setCust(null);
        setCustIdx((i) => i + 1);
        setMissedItems([]);
      }, 2500);
    } else {
      const rt = roundTotal(c.total, roundLvl);
      const adj = { ...c, total: rt, payWith: pickPay(rt) };
      setCust(adj);
    }
    setChangeGiven(0);
    setChangeStack([]);
  }, [custIdx, maxCustPerDay, inv, maxTier, upg.scales, upg.vip, roundLvl]);

  // ── Auto-spawn (blocked while merchant is visiting) ──
  useEffect(() => {
    if (phase === "game" && dayPhase === "shop" && !cust && custIdx < maxCustPerDay && !merchantStock) {
      const t = setTimeout(spawnNext, 800);
      return () => clearTimeout(t);
    }
  }, [phase, dayPhase, cust, custIdx, maxCustPerDay, spawnNext, merchantStock]);

  // ── Auto-scan ──
  useEffect(() => {
    if (!hasAutoScan || !cust || cust.phase !== "scan") return;
    const iv = setInterval(() => {
      setCust((c) => {
        if (!c || c.phase !== "scan") return c;
        const un = c.items.find((it) => !c.scanned.includes(it.uid));
        if (!un) return c;
        const ni = c.items.map((it) => (it.uid === un.uid ? { ...it, hits: it.need } : it));
        const ns = [...c.scanned, un.uid];
        setInv((prev) => ({
          ...prev,
          [un.id]: { ...prev[un.id], stock: Math.max(0, prev[un.id].stock - 1) },
        }));
        setBeepItems((p) => [...p, un.uid]);
        setTimeout(() => setBeepItems((p) => p.filter((x) => x !== un.uid)), 300);
        if (ns.length >= c.items.length) {
          const nd = c.payWith - c.total;
          if (nd <= 0) {
            setTimeout(() => completeSale(c), 400);
            return { ...c, items: ni, scanned: ns, phase: "exact" as const };
          }
          return { ...c, items: ni, scanned: ns, phase: "change" as const };
        }
        return { ...c, items: ni, scanned: ns };
      });
    }, 600);
    return () => clearInterval(iv);
  }, [hasAutoScan, cust?.phase, cust?.scanned?.length, completeSale]);

  // ── Auto-change ──
  useEffect(() => {
    if (!hasAutoChange || !cust || cust.phase !== "change") return;
    const needed = cust.payWith - cust.total;
    let rem = needed;
    const stk: (Denomination & { id: number })[] = [];
    for (const d of DENOMS) {
      while (rem >= d.v) {
        stk.push({ ...d, id: Date.now() + stk.length });
        rem -= d.v;
      }
    }
    let dl = 0;
    stk.forEach((d, i) => {
      setTimeout(() => {
        setChangeStack((p) => [...p, { ...d, id: Date.now() + i }]);
        setChangeGiven((p) => p + d.v);
      }, dl);
      dl += 150;
    });
    setTimeout(() => completeSale(cust), dl + 400);
  }, [hasAutoChange, cust?.phase, cust?.id, completeSale]);

  // ── Full auto ──
  useEffect(() => {
    if (!hasFullAuto || !cust || cust.phase !== "scan") return;
    const t = setTimeout(() => {
      setCust((c) => {
        if (!c) return c;
        c.items.forEach((it) => {
          setInv((prev) => ({
            ...prev,
            [it.id]: { ...prev[it.id], stock: Math.max(0, prev[it.id].stock - 1) },
          }));
        });
        const allU = c.items.map((it) => it.uid);
        const nd = c.payWith - c.total;
        if (nd <= 0) {
          setTimeout(() => completeSale(c), 300);
          return { ...c, scanned: allU, phase: "exact" as const };
        }
        setChangeGiven(nd);
        let rem = nd;
        const stk: (Denomination & { id: number })[] = [];
        for (const d of DENOMS) {
          while (rem >= d.v) {
            stk.push({ ...d, id: Date.now() + Math.random() });
            rem -= d.v;
          }
        }
        setChangeStack(stk);
        setTimeout(() => completeSale(c), 500);
        return { ...c, scanned: allU, phase: "change" as const };
      });
    }, 300);
    return () => clearTimeout(t);
  }, [hasFullAuto, cust?.id, cust?.phase, completeSale]);

  // ── Actions ──
  const tapItem = useCallback(
    (item: CustItem) => {
      if (!cust || cust.phase !== "scan" || cust.scanned.includes(item.uid)) return;
      setCust((c) => {
        if (!c) return c;
        const ni = c.items.map((it) =>
          it.uid === item.uid ? { ...it, hits: it.hits + 1 } : it,
        );
        const tapped = ni.find((it) => it.uid === item.uid)!;
        if (tapped.hits >= tapped.need) {
          const ns = [...c.scanned, item.uid];
          setInv((prev) => ({
            ...prev,
            [item.id]: { ...prev[item.id], stock: Math.max(0, prev[item.id].stock - 1) },
          }));
          setBeepItems((p) => [...p, item.uid]);
          setTimeout(() => setBeepItems((p) => p.filter((x) => x !== item.uid)), 400);
          if (ns.length >= c.items.length) {
            const nd = c.payWith - c.total;
            if (nd <= 0) {
              setTimeout(() => completeSale(c), 400);
              return { ...c, items: ni, scanned: ns, phase: "exact" as const };
            }
            return { ...c, items: ni, scanned: ns, phase: "change" as const };
          }
          return { ...c, items: ni, scanned: ns };
        }
        return { ...c, items: ni };
      });
    },
    [cust, completeSale],
  );

  const skipItem = useCallback(
    (item: CustItem) => {
      if (!cust || cust.phase !== "scan" || cust.scanned.includes(item.uid)) return;
      setCust((c) => {
        if (!c) return c;
        const ns = [...c.scanned, item.uid];
        const newTotal = Math.max(0, c.total - item.rp);

        if (ns.length >= c.items.length) {
          if (newTotal <= 0) {
            // All items out of stock — customer leaves
            setTimeout(() => {
              setCust(null);
              setCustIdx((i) => i + 1);
            }, 1500);
            return { ...c, scanned: ns, total: 0, payWith: 0, phase: "empty" as const };
          }
          const pw = pickPay(newTotal);
          if (pw - newTotal <= 0) {
            setTimeout(() => completeSale({ ...c, total: newTotal, payWith: pw, scanned: ns }), 400);
            return { ...c, scanned: ns, total: newTotal, payWith: pw, phase: "exact" as const };
          }
          return { ...c, scanned: ns, total: newTotal, payWith: pw, phase: "change" as const };
        }
        return { ...c, scanned: ns, total: newTotal };
      });
    },
    [cust, completeSale],
  );

  const tapDenom = useCallback(
    (d: Denomination) => {
      if (!cust || cust.phase !== "change") return;
      const needed = cust.payWith - cust.total;
      const nc = changeGiven + d.v;
      if (nc > needed + 0.5) {
        setShakeCash(true);
        setTimeout(() => setShakeCash(false), 400);
        return;
      }
      setChangeGiven(nc);
      setChangeStack((p) => [...p, { ...d, id: Date.now() + Math.random() }]);
      if (Math.abs(nc - needed) < 0.5) setTimeout(() => completeSale(cust), 500);
    },
    [cust, changeGiven, completeSale],
  );

  const buyStock = useCallback(
    (prod: Product, qty: number) => {
      if (!merchantStock?.includes(prod.id)) return;
      const cost = Math.round(prod.ws * wsMult) * qty;
      if (money < cost) return;
      setMoney((m) => m - cost);
      setInv((prev) => ({
        ...prev,
        [prod.id]: { ...prev[prod.id], stock: prev[prod.id].stock + qty },
      }));
    },
    [money, wsMult, merchantStock],
  );

  const setPriceAction = useCallback(
    (pid: string, delta: number) => {
      setInv((prev) => {
        const cur = prev[pid];
        const prod = PRODS.find((p) => p.id === pid)!;
        const np = Math.max(
          Math.floor(prod.ws * wsMult),
          Math.min(Math.floor(prod.fair * 2.5), cur.price + delta),
        );
        return { ...prev, [pid]: { ...cur, price: np } };
      });
    },
    [wsMult],
  );

  const buyUpg = useCallback(
    (u: (typeof UPGRADES)[number]) => {
      const c = upgCost(u);
      if (money < c || upg[u.id] >= u.max) return;
      setMoney((m) => m - c);
      setUpg((p) => ({ ...p, [u.id]: p[u.id] + 1 }));
    },
    [money, upg, upgCost],
  );

  const buildProj = useCallback(
    (p: Project) => {
      if (money < p.cost || built.includes(p.id)) return;
      setMoney((m) => m - p.cost);
      setBuilt((bp) => [...bp, p.id]);
      if (p.popC) setPopCap((c) => c + p.popC!);
      if (p.infirmary) setHasInfirmary(true);
      if (p.final) {
        setPhase("victory");
        return;
      }
      setStoryMsg(p.story);
      setStoryLog((l) => [{ text: p.story, proj: p.n }, ...l]);
      setTimeout(() => setStoryMsg(null), 5000);
    },
    [money, built],
  );

  const nextDayAction = useCallback(() => {
    const newDay = day + 1;
    setDay(newDay);
    setDayPhase("shop");
    setCustIdx(0);
    setDayServed(0);
    setDayEarned(0);
    setDayMissed(0);
    setCust(null);
    // Merchant arrives every MERCHANT_INTERVAL days (days 1, 4, 7, ...)
    if ((newDay - 1) % MERCHANT_INTERVAL === 0) {
      setMerchantStock(generateMerchantStock(maxTier));
    } else {
      setMerchantStock(null);
    }
    setPopulation((pop) => {
      if (warmth > 55 && pop < popCap && Math.random() < 0.3) return pop + 1;
      if (warmth < 25 && !hasInfirmary && pop > 5) return pop - 1;
      if (warmth < 10 && pop > 3) return pop - 1;
      return pop;
    });
    if (Math.random() < 0.25 && earned > 100) {
      const ev = EVENTS[Math.floor(Math.random() * EVENTS.length)];
      setActiveEvent(ev);
      setEventMult(ev.mult);
      if (ev.warm) setWarmth((w) => Math.max(0, Math.min(100, w + ev.warm)));
      setTimeout(() => {
        setActiveEvent(null);
        setEventMult(1);
      }, 12000);
    }
  }, [day, warmth, popCap, hasInfirmary, earned, maxTier]);

  const openMerchantModal = useCallback(() => {
    setShowMerchantModal(true);
  }, []);

  const dismissMerchant = useCallback(() => {
    setShowMerchantModal(false);
    setMerchantStock(null);
  }, []);

  return {
    phase,
    money,
    earned,
    day,
    dayPhase,
    custIdx,
    served,
    dayServed,
    dayEarned,
    dayMissed,
    perfect,
    warmth,
    population,
    popCap,
    inv,
    cust,
    changeGiven,
    changeStack,
    upg,
    built,
    tab,
    result,
    shakeCash,
    beepItems,
    prodModal,
    activeEvent,
    eventMult,
    storyMsg,
    storyLog,
    hasInfirmary,
    introStep,
    missedItems,
    infoModal,
    fled,
    merchantStock,
    showMerchantModal,
    // Derived
    maxTier,
    maxCustPerDay,
    warmRate,
    wC,
    allProds,
    totalStock,
    nextProj,
    changeNeeded,
    patProg,
    wsMult,
    hasAutoScan,
    hasAutoChange,
    hasFullAuto,
    roundLvl,
    tipMult,
    isMerchantDay,
    daysUntilMerchant,
    nextDayIsMerchant,
    // Actions
    setPhase,
    setIntroStep,
    setTab,
    setInfoModal,
    setProdModal,
    tapItem,
    skipItem,
    tapDenom,
    buyStock,
    setPrice: setPriceAction,
    buyUpg,
    buildProj,
    openMerchantModal,
    dismissMerchant,
    nextDay: nextDayAction,
    setDayPhase,
    upgCost,
  };
}
