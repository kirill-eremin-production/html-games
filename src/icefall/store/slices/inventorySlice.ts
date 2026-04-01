import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Inventory } from "../../data";
import { initInv } from "../../helpers";

interface InventoryState {
  inv: Inventory;
}

const initialState: InventoryState = {
  inv: initInv(),
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    decrementStock(state, action: PayloadAction<string>) {
      const pid = action.payload;
      if (state.inv[pid]) {
        state.inv[pid].stock = Math.max(0, state.inv[pid].stock - 1);
      }
    },
    addStock(state, action: PayloadAction<{ pid: string; qty: number }>) {
      const { pid, qty } = action.payload;
      if (state.inv[pid]) {
        state.inv[pid].stock += qty;
      }
    },
    setPrice(state, action: PayloadAction<{ pid: string; price: number }>) {
      const { pid, price } = action.payload;
      if (state.inv[pid]) {
        state.inv[pid].price = price;
      }
    },
  },
});

export const inventoryActions = inventorySlice.actions;
