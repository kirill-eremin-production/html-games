import { configureStore, type ThunkAction, type Action } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { coreSlice } from "./slices/coreSlice";
import { customerSlice } from "./slices/customerSlice";
import { inventorySlice } from "./slices/inventorySlice";
import { upgradeSlice } from "./slices/upgradeSlice";
import { worldSlice } from "./slices/worldSlice";
import { merchantSlice } from "./slices/merchantSlice";
import { eventSlice } from "./slices/eventSlice";

export const store = configureStore({
  reducer: {
    core: coreSlice.reducer,
    customer: customerSlice.reducer,
    inventory: inventorySlice.reducer,
    upgrade: upgradeSlice.reducer,
    world: worldSlice.reducer,
    merchant: merchantSlice.reducer,
    event: eventSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<R = void> = ThunkAction<R, RootState, unknown, Action>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
