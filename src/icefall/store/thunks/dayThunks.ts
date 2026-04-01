import type { AppThunk } from "../index";
import { EVENTS, MERCHANT_INTERVAL } from "../../data";
import { generateMerchantStock, makeCust, pickPay, roundTotal } from "../../helpers";
import { coreActions } from "../slices/coreSlice";
import { customerActions } from "../slices/customerSlice";
import { merchantActions } from "../slices/merchantSlice";
import { eventActions } from "../slices/eventSlice";
import { worldActions } from "../slices/worldSlice";

/* ── Next day ── */

export const nextDay = (): AppThunk => (dispatch, getState) => {
  const state = getState();
  const newDay = state.core.day + 1;
  const upg = state.upgrade.upg;
  const maxTier = 1 + (upg.tent2 > 0 ? 1 : 0) + (upg.tent3 > 0 ? 1 : 0);

  dispatch(coreActions.setDay(newDay));
  dispatch(coreActions.setDayPhase("shop"));
  dispatch(customerActions.resetDay());

  // Merchant
  if ((newDay - 1) % MERCHANT_INTERVAL === 0) {
    dispatch(merchantActions.setMerchantStock(generateMerchantStock(maxTier)));
  } else {
    dispatch(merchantActions.setMerchantStock(null));
  }

  // Population
  const { warmth, popCap, hasInfirmary, population } = state.world;
  if (warmth > 55 && population < popCap && Math.random() < 0.3) {
    dispatch(worldActions.setPopulation(population + 1));
  } else if (warmth < 25 && !hasInfirmary && population > 5) {
    dispatch(worldActions.setPopulation(population - 1));
  } else if (warmth < 10 && population > 3) {
    dispatch(worldActions.setPopulation(population - 1));
  }

  // Random event
  if (Math.random() < 0.25 && state.core.earned > 100) {
    const ev = EVENTS[Math.floor(Math.random() * EVENTS.length)];
    dispatch(eventActions.setEvent(ev));
    if (ev.warm) dispatch(worldActions.addWarmth(ev.warm));
    setTimeout(() => dispatch(eventActions.clearEvent()), 12000);
  }
};

/* ── Spawn next customer ── */

export const spawnNext = (): AppThunk => (dispatch, getState) => {
  const state = getState();
  const upg = state.upgrade.upg;
  const maxCustPerDay = 3 + upg.crowd * 2;
  const maxTier = 1 + (upg.tent2 > 0 ? 1 : 0) + (upg.tent3 > 0 ? 1 : 0);
  const roundLvl = upg.rounding;

  if (state.customer.custIdx >= maxCustPerDay) {
    dispatch(coreActions.setDayPhase("summary"));
    return;
  }

  const c = makeCust(state.inventory.inv, maxTier, upg.scales, upg.vip);

  if (c.phase === "empty") {
    dispatch(customerActions.setMissedItems(c.wanted));
    dispatch(customerActions.setCust(c));
    setTimeout(() => {
      dispatch(customerActions.setCust(null));
      dispatch(customerActions.incrementCustIdx());
      dispatch(customerActions.setMissedItems([]));
    }, 2500);
  } else {
    const rt = roundTotal(c.total, roundLvl);
    const adj = { ...c, total: rt, payWith: pickPay(rt) };
    dispatch(customerActions.setCust(adj));
  }

  dispatch(customerActions.setChangeGiven(0));
  dispatch(customerActions.setChangeStack([]));
};

/* ── Patience tick ── */

export const tickPatience = (): AppThunk => (dispatch, getState) => {
  const cust = getState().customer.cust;
  if (!cust || cust.phase === "done") return;

  if (cust.patLeft <= 1) {
    dispatch(customerActions.customerFled());
    setTimeout(() => dispatch(customerActions.clearFledCustomer()), 1200);
  } else {
    dispatch(customerActions.decrementPatience());
  }
};
