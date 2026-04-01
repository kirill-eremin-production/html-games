import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ActiveCust, Denomination, Product, SaleResult } from "../../data";

interface CustomerState {
  cust: ActiveCust | null;
  custIdx: number;
  served: number;
  dayServed: number;
  dayEarned: number;
  dayMissed: number;
  perfect: number;
  changeGiven: number;
  changeStack: (Denomination & { id: number })[];
  result: SaleResult | null;
  shakeCash: boolean;
  beepItems: string[];
  fled: boolean;
  missedItems: Product[];
}

const initialState: CustomerState = {
  cust: null,
  custIdx: 0,
  served: 0,
  dayServed: 0,
  dayEarned: 0,
  dayMissed: 0,
  perfect: 0,
  changeGiven: 0,
  changeStack: [],
  result: null,
  shakeCash: false,
  beepItems: [],
  fled: false,
  missedItems: [],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCust(state, action: PayloadAction<ActiveCust | null>) {
      state.cust = action.payload;
    },
    incrementCustIdx(state) {
      state.custIdx += 1;
    },
    incrementServed(state) {
      state.served += 1;
    },
    incrementDayServed(state) {
      state.dayServed += 1;
    },
    addDayEarned(state, action: PayloadAction<number>) {
      state.dayEarned += action.payload;
    },
    incrementDayMissed(state) {
      state.dayMissed += 1;
    },
    incrementPerfect(state) {
      state.perfect += 1;
    },
    setChangeGiven(state, action: PayloadAction<number>) {
      state.changeGiven = action.payload;
    },
    addChangeGiven(state, action: PayloadAction<number>) {
      state.changeGiven += action.payload;
    },
    setChangeStack(state, action: PayloadAction<(Denomination & { id: number })[]>) {
      state.changeStack = action.payload;
    },
    pushChangeStack(state, action: PayloadAction<Denomination & { id: number }>) {
      state.changeStack.push(action.payload);
    },
    setResult(state, action: PayloadAction<SaleResult | null>) {
      state.result = action.payload;
    },
    setShakeCash(state, action: PayloadAction<boolean>) {
      state.shakeCash = action.payload;
    },
    addBeepItem(state, action: PayloadAction<string>) {
      state.beepItems.push(action.payload);
    },
    removeBeepItem(state, action: PayloadAction<string>) {
      state.beepItems = state.beepItems.filter((x) => x !== action.payload);
    },
    setFled(state, action: PayloadAction<boolean>) {
      state.fled = action.payload;
    },
    setMissedItems(state, action: PayloadAction<Product[]>) {
      state.missedItems = action.payload;
    },
    decrementPatience(state) {
      if (state.cust && state.cust.phase !== "done") {
        state.cust.patLeft -= 1;
      }
    },
    customerFled(state) {
      if (state.cust) {
        state.cust.patLeft = 0;
        state.cust.phase = "done";
      }
      state.fled = true;
      state.dayMissed += 1;
    },
    clearFledCustomer(state) {
      state.cust = null;
      state.fled = false;
    },
    resetDay(state) {
      state.custIdx = 0;
      state.dayServed = 0;
      state.dayEarned = 0;
      state.dayMissed = 0;
      state.cust = null;
    },
    clearAfterSale(state) {
      state.cust = null;
      state.changeGiven = 0;
      state.changeStack = [];
      state.result = null;
      state.custIdx += 1;
    },
  },
});

export const customerActions = customerSlice.actions;
