import type { AppThunk } from "../index";
import type { Product, Project, Upgrade } from "../../data";
import { PRODS } from "../../data";
import { coreActions } from "../slices/coreSlice";
import { inventoryActions } from "../slices/inventorySlice";
import { upgradeActions } from "../slices/upgradeSlice";
import { worldActions } from "../slices/worldSlice";

/* ── Buy stock from merchant ── */

export const buyStock =
  (prod: Product, qty: number): AppThunk =>
  (dispatch, getState) => {
    const state = getState();
    if (!state.merchant.merchantStock?.includes(prod.id)) return;

    const wsMult = 1 - state.upgrade.upg.wholesale * 0.12;
    const cost = Math.round(prod.ws * wsMult) * qty;
    if (state.core.money < cost) return;

    dispatch(coreActions.subtractMoney(cost));
    dispatch(inventoryActions.addStock({ pid: prod.id, qty }));
  };

/* ── Set price ── */

export const setPriceAction =
  (pid: string, delta: number): AppThunk =>
  (dispatch, getState) => {
    const state = getState();
    const wsMult = 1 - state.upgrade.upg.wholesale * 0.12;
    const cur = state.inventory.inv[pid];
    const prod = PRODS.find((p) => p.id === pid)!;
    const np = Math.max(
      Math.floor(prod.ws * wsMult),
      Math.min(Math.floor(prod.fair * 2.5), cur.price + delta),
    );
    dispatch(inventoryActions.setPrice({ pid, price: np }));
  };

/* ── Buy upgrade ── */

export const buyUpg =
  (u: Upgrade): AppThunk =>
  (dispatch, getState) => {
    const state = getState();
    const upg = state.upgrade.upg;
    const cost = Math.floor(u.cost * Math.pow(u.cm, upg[u.id]));
    if (state.core.money < cost || upg[u.id] >= u.max) return;

    dispatch(coreActions.subtractMoney(cost));
    dispatch(upgradeActions.incrementUpg(u.id));
  };

/* ── Build project ── */

export const buildProj =
  (p: Project): AppThunk =>
  (dispatch, getState) => {
    const state = getState();
    if (state.core.money < p.cost || state.world.built.includes(p.id)) return;

    dispatch(coreActions.subtractMoney(p.cost));
    dispatch(worldActions.addBuilt(p.id));
    if (p.popC) dispatch(worldActions.addPopCap(p.popC));
    if (p.infirmary) dispatch(worldActions.setHasInfirmary());

    if (p.final) {
      dispatch(coreActions.setPhase("victory"));
      return;
    }

    dispatch(worldActions.setStoryMsg(p.story));
    dispatch(worldActions.addStoryLog({ text: p.story, proj: p.n }));
    setTimeout(() => dispatch(worldActions.setStoryMsg(null)), 5000);
  };
