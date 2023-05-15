import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/products";

export interface cartSlice {
  cart: IProduct[];
}

const initialState: cartSlice = {
  cart: []
};

export const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const findItem = state.cart.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count && findItem.count++;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
