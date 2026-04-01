import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./index";
import {
  selectHasAutoScan,
  selectHasAutoChange,
  selectHasFullAuto,
  selectMaxCustPerDay,
  selectWarmRate,
} from "./selectors";
import { worldActions } from "./slices/worldSlice";
import { eventActions } from "./slices/eventSlice";
import { autoScanTick, autoChangeTick, fullAutoTick } from "./thunks/saleThunks";
import { spawnNext, tickPatience } from "./thunks/dayThunks";
import { EVENTS } from "../data";

/* ── Warmth decay ── */

export function useWarmthDecay() {
  const dispatch = useAppDispatch();
  const phase = useAppSelector((s) => s.core.phase);
  const dayPhase = useAppSelector((s) => s.core.dayPhase);
  const warmRate = useAppSelector(selectWarmRate);

  useEffect(() => {
    if (phase !== "game" || dayPhase !== "shop") return;
    const iv = setInterval(() => dispatch(worldActions.decayWarmth(warmRate)), 1000);
    return () => clearInterval(iv);
  }, [phase, dayPhase, warmRate, dispatch]);
}

/* ── Patience timer ── */

export function usePatienceTimer() {
  const dispatch = useAppDispatch();
  const phase = useAppSelector((s) => s.core.phase);
  const custId = useAppSelector((s) => s.customer.cust?.id);
  const custPhase = useAppSelector((s) => s.customer.cust?.phase);

  useEffect(() => {
    if (phase !== "game" || !custId || custPhase === "empty") return;
    const iv = setInterval(() => dispatch(tickPatience()), 1000);
    return () => clearInterval(iv);
  }, [phase, custId, custPhase, dispatch]);
}

/* ── Random events ── */

export function useRandomEvents() {
  const dispatch = useAppDispatch();
  const phase = useAppSelector((s) => s.core.phase);
  const earned = useAppSelector((s) => s.core.earned);
  const activeEvent = useAppSelector((s) => s.event.activeEvent);

  useEffect(() => {
    if (phase !== "game") return;
    const iv = setInterval(() => {
      if (earned > 100 && !activeEvent && Math.random() < 0.06) {
        const ev = EVENTS[Math.floor(Math.random() * EVENTS.length)];
        dispatch(eventActions.setEvent(ev));
        if (ev.warm) dispatch(worldActions.addWarmth(ev.warm));
        setTimeout(() => dispatch(eventActions.clearEvent()), 12000);
      }
    }, 6000);
    return () => clearInterval(iv);
  }, [phase, earned, activeEvent, dispatch]);
}

/* ── Auto-spawn next customer ── */

export function useCustomerSpawn() {
  const dispatch = useAppDispatch();
  const phase = useAppSelector((s) => s.core.phase);
  const dayPhase = useAppSelector((s) => s.core.dayPhase);
  const cust = useAppSelector((s) => s.customer.cust);
  const custIdx = useAppSelector((s) => s.customer.custIdx);
  const maxCustPerDay = useAppSelector(selectMaxCustPerDay);
  const merchantStock = useAppSelector((s) => s.merchant.merchantStock);

  useEffect(() => {
    if (phase === "game" && dayPhase === "shop" && !cust && custIdx < maxCustPerDay && !merchantStock) {
      const t = setTimeout(() => dispatch(spawnNext()), 800);
      return () => clearTimeout(t);
    }
  }, [phase, dayPhase, cust, custIdx, maxCustPerDay, merchantStock, dispatch]);
}

/* ── Auto-scan ── */

export function useAutoScan() {
  const dispatch = useAppDispatch();
  const hasAutoScan = useAppSelector(selectHasAutoScan);
  const custPhase = useAppSelector((s) => s.customer.cust?.phase);
  const scannedLength = useAppSelector((s) => s.customer.cust?.scanned?.length);

  useEffect(() => {
    if (!hasAutoScan || custPhase !== "scan") return;
    const iv = setInterval(() => dispatch(autoScanTick()), 600);
    return () => clearInterval(iv);
  }, [hasAutoScan, custPhase, scannedLength, dispatch]);
}

/* ── Auto-change ── */

export function useAutoChange() {
  const dispatch = useAppDispatch();
  const hasAutoChange = useAppSelector(selectHasAutoChange);
  const custPhase = useAppSelector((s) => s.customer.cust?.phase);
  const custId = useAppSelector((s) => s.customer.cust?.id);

  useEffect(() => {
    if (!hasAutoChange || custPhase !== "change") return;
    dispatch(autoChangeTick());
  }, [hasAutoChange, custPhase, custId, dispatch]);
}

/* ── Full auto ── */

export function useFullAuto() {
  const dispatch = useAppDispatch();
  const hasFullAuto = useAppSelector(selectHasFullAuto);
  const custId = useAppSelector((s) => s.customer.cust?.id);
  const custPhase = useAppSelector((s) => s.customer.cust?.phase);

  useEffect(() => {
    if (!hasFullAuto || custPhase !== "scan") return;
    const t = setTimeout(() => dispatch(fullAutoTick()), 300);
    return () => clearTimeout(t);
  }, [hasFullAuto, custId, custPhase, dispatch]);
}
