import type { AppThunk } from "../index";
import type { ActiveCust, CustItem, Denomination } from "../../data";
import { DENOMS } from "../../data";
import { calcWarmthBonus, pickPay } from "../../helpers";
import { coreActions } from "../slices/coreSlice";
import { customerActions } from "../slices/customerSlice";
import { inventoryActions } from "../slices/inventorySlice";
import { worldActions } from "../slices/worldSlice";

/* ── Complete sale ── */

export const completeSale =
  (c: ActiveCust): AppThunk =>
  (dispatch, getState) => {
    const state = getState();
    const tipMult = 1 + state.upgrade.upg.samovar;
    const eventMult = state.event.eventMult;
    const changeGiven = state.customer.changeGiven;

    const tip = Math.round(c.tip * tipMult * eventMult);
    const e = Math.round((c.total + tip) * eventMult);

    dispatch(coreActions.addMoney(e));
    dispatch(coreActions.addEarned(e));
    dispatch(customerActions.incrementServed());
    dispatch(customerActions.incrementDayServed());
    dispatch(customerActions.addDayEarned(e));

    const needed = c.payWith - c.total;
    if (Math.abs(changeGiven - needed) < 0.5 || needed <= 0) {
      dispatch(customerActions.incrementPerfect());
    }

    const bonus = calcWarmthBonus(c.items);
    if (bonus > 0) dispatch(worldActions.addWarmth(bonus));

    dispatch(customerActions.setResult({ earned: e, tip, em: c.em, name: c.name }));

    setTimeout(() => {
      dispatch(customerActions.clearAfterSale());
    }, 1300);
  };

/* ── Tap item (manual scan) ── */

export const tapItem =
  (item: CustItem): AppThunk =>
  (dispatch, getState) => {
    const cust = getState().customer.cust;
    if (!cust || cust.phase !== "scan" || cust.scanned.includes(item.uid)) return;

    const ni = cust.items.map((it) =>
      it.uid === item.uid ? { ...it, hits: it.hits + 1 } : it,
    );
    const tapped = ni.find((it) => it.uid === item.uid)!;

    if (tapped.hits < tapped.need) {
      dispatch(customerActions.setCust({ ...cust, items: ni }));
      return;
    }

    const ns = [...cust.scanned, item.uid];
    dispatch(inventoryActions.decrementStock(item.id));
    dispatch(customerActions.addBeepItem(item.uid));
    setTimeout(() => dispatch(customerActions.removeBeepItem(item.uid)), 400);

    if (ns.length >= cust.items.length) {
      const nd = cust.payWith - cust.total;
      if (nd <= 0) {
        dispatch(customerActions.setCust({ ...cust, items: ni, scanned: ns, phase: "exact" }));
        setTimeout(() => dispatch(completeSale({ ...cust, items: ni, scanned: ns })), 400);
      } else {
        dispatch(customerActions.setCust({ ...cust, items: ni, scanned: ns, phase: "change" }));
      }
    } else {
      dispatch(customerActions.setCust({ ...cust, items: ni, scanned: ns }));
    }
  };

/* ── Skip item (out of stock) ── */

export const skipItem =
  (item: CustItem): AppThunk =>
  (dispatch, getState) => {
    const cust = getState().customer.cust;
    if (!cust || cust.phase !== "scan" || cust.scanned.includes(item.uid)) return;

    const ns = [...cust.scanned, item.uid];
    const newTotal = Math.max(0, cust.total - item.rp);

    if (ns.length >= cust.items.length) {
      if (newTotal <= 0) {
        dispatch(customerActions.setCust({ ...cust, scanned: ns, total: 0, payWith: 0, phase: "empty" }));
        setTimeout(() => {
          dispatch(customerActions.setCust(null));
          dispatch(customerActions.incrementCustIdx());
        }, 1500);
        return;
      }
      const pw = pickPay(newTotal);
      if (pw - newTotal <= 0) {
        const updated = { ...cust, scanned: ns, total: newTotal, payWith: pw, phase: "exact" as const };
        dispatch(customerActions.setCust(updated));
        setTimeout(() => dispatch(completeSale(updated)), 400);
      } else {
        dispatch(customerActions.setCust({ ...cust, scanned: ns, total: newTotal, payWith: pw, phase: "change" }));
      }
    } else {
      dispatch(customerActions.setCust({ ...cust, scanned: ns, total: newTotal }));
    }
  };

/* ── Tap denomination (give change) ── */

export const tapDenom =
  (d: Denomination): AppThunk =>
  (dispatch, getState) => {
    const state = getState();
    const cust = state.customer.cust;
    if (!cust || cust.phase !== "change") return;

    const needed = cust.payWith - cust.total;
    const nc = state.customer.changeGiven + d.v;

    if (nc > needed + 0.5) {
      dispatch(customerActions.setShakeCash(true));
      setTimeout(() => dispatch(customerActions.setShakeCash(false)), 400);
      return;
    }

    dispatch(customerActions.setChangeGiven(nc));
    dispatch(customerActions.pushChangeStack({ ...d, id: Date.now() + Math.random() }));
    if (Math.abs(nc - needed) < 0.5) setTimeout(() => dispatch(completeSale(cust)), 500);
  };

/* ── Auto-scan tick ── */

export const autoScanTick = (): AppThunk => (dispatch, getState) => {
  const cust = getState().customer.cust;
  if (!cust || cust.phase !== "scan") return;

  const un = cust.items.find((it) => !cust.scanned.includes(it.uid));
  if (!un) return;

  const ni = cust.items.map((it) => (it.uid === un.uid ? { ...it, hits: it.need } : it));
  const ns = [...cust.scanned, un.uid];

  dispatch(inventoryActions.decrementStock(un.id));
  dispatch(customerActions.addBeepItem(un.uid));
  setTimeout(() => dispatch(customerActions.removeBeepItem(un.uid)), 300);

  if (ns.length >= cust.items.length) {
    const nd = cust.payWith - cust.total;
    if (nd <= 0) {
      dispatch(customerActions.setCust({ ...cust, items: ni, scanned: ns, phase: "exact" }));
      setTimeout(() => dispatch(completeSale(cust)), 400);
    } else {
      dispatch(customerActions.setCust({ ...cust, items: ni, scanned: ns, phase: "change" }));
    }
  } else {
    dispatch(customerActions.setCust({ ...cust, items: ni, scanned: ns }));
  }
};

/* ── Auto-change tick ── */

export const autoChangeTick = (): AppThunk => (dispatch, getState) => {
  const cust = getState().customer.cust;
  if (!cust || cust.phase !== "change") return;

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
      dispatch(customerActions.pushChangeStack({ ...d, id: Date.now() + i }));
      dispatch(customerActions.addChangeGiven(d.v));
    }, dl);
    dl += 150;
  });
  setTimeout(() => dispatch(completeSale(cust)), dl + 400);
};

/* ── Full auto tick ── */

export const fullAutoTick = (): AppThunk => (dispatch, getState) => {
  const cust = getState().customer.cust;
  if (!cust) return;

  cust.items.forEach((it) => {
    dispatch(inventoryActions.decrementStock(it.id));
  });

  const allU = cust.items.map((it) => it.uid);
  const nd = cust.payWith - cust.total;

  if (nd <= 0) {
    dispatch(customerActions.setCust({ ...cust, scanned: allU, phase: "exact" }));
    setTimeout(() => dispatch(completeSale(cust)), 300);
  } else {
    dispatch(customerActions.setChangeGiven(nd));
    let rem = nd;
    const stk: (Denomination & { id: number })[] = [];
    for (const d of DENOMS) {
      while (rem >= d.v) {
        stk.push({ ...d, id: Date.now() + Math.random() });
        rem -= d.v;
      }
    }
    dispatch(customerActions.setChangeStack(stk));
    dispatch(customerActions.setCust({ ...cust, scanned: allU, phase: "change" }));
    setTimeout(() => dispatch(completeSale(cust)), 500);
  }
};
