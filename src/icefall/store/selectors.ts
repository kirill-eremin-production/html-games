import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./index";
import { PRODS, PROJECTS, UPGRADES, MERCHANT_INTERVAL } from "../data";
import { warmthColor } from "../helpers";

/* ── Direct accessors ── */

export const selectUpg = (s: RootState) => s.upgrade.upg;
export const selectBuilt = (s: RootState) => s.world.built;
export const selectWarmth = (s: RootState) => s.world.warmth;
export const selectCust = (s: RootState) => s.customer.cust;
export const selectDay = (s: RootState) => s.core.day;
export const selectInv = (s: RootState) => s.inventory.inv;

/* ── Derived ── */

export const selectMaxTier = createSelector(selectUpg, (upg) =>
  1 + (upg.tent2 > 0 ? 1 : 0) + (upg.tent3 > 0 ? 1 : 0),
);

export const selectTipMult = createSelector(selectUpg, (upg) => 1 + upg.samovar);

export const selectWsMult = createSelector(selectUpg, (upg) => 1 - upg.wholesale * 0.12);

export const selectMaxCustPerDay = createSelector(selectUpg, (upg) => 3 + upg.crowd * 2);

export const selectHasAutoScan = createSelector(selectUpg, (upg) => upg.autoweigh > 0);
export const selectHasAutoChange = createSelector(selectUpg, (upg) => upg.arithmometer > 0);
export const selectHasFullAuto = createSelector(selectUpg, (upg) => upg.training > 0);
export const selectRoundLvl = createSelector(selectUpg, (upg) => upg.rounding);

export const selectWarmRate = createSelector(selectBuilt, (built) => {
  const baseWR = 0.18;
  const warmRed = built.reduce((s, pid) => {
    const p = PROJECTS.find((pr) => pr.id === pid);
    return s + (p?.warmR || 0);
  }, 0);
  return Math.max(0.02, baseWR + warmRed);
});

export const selectWC = createSelector(selectWarmth, warmthColor);

export const selectAllProds = createSelector(selectMaxTier, (maxTier) =>
  PRODS.filter((p) => p.tier <= maxTier),
);

export const selectTotalStock = createSelector(selectInv, (inv) =>
  Object.values(inv).reduce((s, v) => s + v.stock, 0),
);

export const selectNextProj = createSelector(selectBuilt, (built) =>
  PROJECTS.find((p) => !built.includes(p.id)),
);

export const selectChangeNeeded = createSelector(selectCust, (cust) =>
  cust ? cust.payWith - cust.total : 0,
);

export const selectPatProg = createSelector(selectCust, (cust) =>
  cust ? cust.patLeft / cust.patience : 0,
);

export const selectIsMerchantDay = createSelector(
  selectDay,
  (day) => (day - 1) % MERCHANT_INTERVAL === 0,
);

export const selectDaysUntilMerchant = createSelector(
  selectDay,
  (day) => (MERCHANT_INTERVAL - ((day - 1) % MERCHANT_INTERVAL)) % MERCHANT_INTERVAL,
);

export const selectNextDayIsMerchant = createSelector(
  selectDay,
  (day) => day % MERCHANT_INTERVAL === 0,
);

export const getUpgCost = (upg: Record<string, number>, u: (typeof UPGRADES)[number]) =>
  Math.floor(u.cost * Math.pow(u.cm, upg[u.id]));
