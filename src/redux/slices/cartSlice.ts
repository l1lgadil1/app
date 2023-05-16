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
    },
    addProductCount: (state, action: PayloadAction<number>) => {
      const findeItem = state.cart.find((item) => item.id === action.payload);
      if (findeItem) {
        findeItem.count && findeItem.count++;
      } else {
        return;
      }
    },
    deleteProduct:(state,action:PayloadAction<number>)=>{
      const findItem = state.cart.find((item)=>item.id === action.payload)
      if(findItem){
        state.cart = state.cart.filter((item)=>item.id!== action.payload);
      }else{
        return;
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { addToCart,deleteProduct,addProductCount } = cartSlice.actions;

export default cartSlice.reducer;
