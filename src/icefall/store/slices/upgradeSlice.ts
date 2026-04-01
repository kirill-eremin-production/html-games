import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UpgLevels } from "../../data";
import { UPGRADES } from "../../data";

interface UpgradeState {
  upg: UpgLevels;
}

const initialState: UpgradeState = {
  upg: Object.fromEntries(UPGRADES.map((u) => [u.id, 0])),
};

export const upgradeSlice = createSlice({
  name: "upgrade",
  initialState,
  reducers: {
    incrementUpg(state, action: PayloadAction<string>) {
      state.upg[action.payload] += 1;
    },
  },
});

export const upgradeActions = upgradeSlice.actions;
