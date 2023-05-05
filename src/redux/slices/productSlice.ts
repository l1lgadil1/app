import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/products";

export interface productSlice {
  value: number;
  products: IProduct[];
}

const initialState: productSlice = {
  value: 0,
  products: []
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setProducts: (state,action:PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,setProducts } = productSlice.actions;

export default productSlice.reducer;
