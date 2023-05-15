import { combineReducers, configureStore } from "@reduxjs/toolkit";

import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { productAPI } from "./api/productAPI";

const reducer = combineReducers({
  product: productSlice,
  cart: cartSlice,
  [productAPI.reducerPath]: productAPI.reducer
});

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
