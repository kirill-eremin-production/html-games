import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../data";

interface CoreState {
  phase: "intro" | "game" | "victory";
  money: number;
  earned: number;
  day: number;
  dayPhase: "shop" | "summary";
  tab: "register" | "warehouse" | "settlement" | "upgrades";
  introStep: number;
  infoModal: "warmth" | "pop" | null;
  prodModal: Product | null;
}

const initialState: CoreState = {
  phase: "intro",
  money: 200,
  earned: 0,
  day: 1,
  dayPhase: "shop",
  tab: "register",
  introStep: 0,
  infoModal: null,
  prodModal: null,
};

export const coreSlice = createSlice({
  name: "core",
  initialState,
  reducers: {
    setPhase(state, action: PayloadAction<CoreState["phase"]>) {
      state.phase = action.payload;
    },
    addMoney(state, action: PayloadAction<number>) {
      state.money += action.payload;
    },
    subtractMoney(state, action: PayloadAction<number>) {
      state.money -= action.payload;
    },
    addEarned(state, action: PayloadAction<number>) {
      state.earned += action.payload;
    },
    setDay(state, action: PayloadAction<number>) {
      state.day = action.payload;
    },
    setDayPhase(state, action: PayloadAction<CoreState["dayPhase"]>) {
      state.dayPhase = action.payload;
    },
    setTab(state, action: PayloadAction<CoreState["tab"]>) {
      state.tab = action.payload;
    },
    incrementIntroStep(state) {
      state.introStep += 1;
    },
    setInfoModal(state, action: PayloadAction<CoreState["infoModal"]>) {
      state.infoModal = action.payload;
    },
    setProdModal(state, action: PayloadAction<Product | null>) {
      state.prodModal = action.payload;
    },
  },
});

export const coreActions = coreSlice.actions;
