import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { GameEvent } from "../../data";

interface EventState {
  activeEvent: GameEvent | null;
  eventMult: number;
}

const initialState: EventState = {
  activeEvent: null,
  eventMult: 1,
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEvent(state, action: PayloadAction<GameEvent>) {
      state.activeEvent = action.payload;
      state.eventMult = action.payload.mult;
    },
    clearEvent(state) {
      state.activeEvent = null;
      state.eventMult = 1;
    },
  },
});

export const eventActions = eventSlice.actions;
