import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface WorldState {
  built: string[];
  population: number;
  popCap: number;
  hasInfirmary: boolean;
  warmth: number;
  storyMsg: string | null;
  storyLog: { text: string; proj: string }[];
}

const initialState: WorldState = {
  built: [],
  population: 15,
  popCap: 20,
  hasInfirmary: false,
  warmth: 72,
  storyMsg: null,
  storyLog: [],
};

export const worldSlice = createSlice({
  name: "world",
  initialState,
  reducers: {
    addBuilt(state, action: PayloadAction<string>) {
      state.built.push(action.payload);
    },
    setPopulation(state, action: PayloadAction<number>) {
      state.population = action.payload;
    },
    addPopCap(state, action: PayloadAction<number>) {
      state.popCap += action.payload;
    },
    setHasInfirmary(state) {
      state.hasInfirmary = true;
    },
    addWarmth(state, action: PayloadAction<number>) {
      state.warmth = Math.max(0, Math.min(100, +(state.warmth + action.payload).toFixed(2)));
    },
    decayWarmth(state, action: PayloadAction<number>) {
      state.warmth = Math.max(0, Math.min(100, +(state.warmth - action.payload).toFixed(2)));
    },
    setStoryMsg(state, action: PayloadAction<string | null>) {
      state.storyMsg = action.payload;
    },
    addStoryLog(state, action: PayloadAction<{ text: string; proj: string }>) {
      state.storyLog.unshift(action.payload);
    },
  },
});

export const worldActions = worldSlice.actions;
