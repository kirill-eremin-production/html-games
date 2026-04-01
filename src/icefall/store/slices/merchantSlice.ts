import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { generateMerchantStock } from "../../helpers";

interface MerchantState {
  merchantStock: string[] | null;
  showMerchantModal: boolean;
}

const initialState: MerchantState = {
  merchantStock: generateMerchantStock(1),
  showMerchantModal: false,
};

export const merchantSlice = createSlice({
  name: "merchant",
  initialState,
  reducers: {
    setMerchantStock(state, action: PayloadAction<string[] | null>) {
      state.merchantStock = action.payload;
    },
    openMerchantModal(state) {
      state.showMerchantModal = true;
    },
    dismissMerchant(state) {
      state.showMerchantModal = false;
      state.merchantStock = null;
    },
  },
});

export const merchantActions = merchantSlice.actions;
