import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/products";

export interface productSlice {
  products: IProduct[];
}

const initialState: productSlice = {
  products: []
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state,action:PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {setProducts } = productSlice.actions;

export default productSlice.reducer;
