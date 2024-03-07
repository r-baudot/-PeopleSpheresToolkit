import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query"; // used for caching

import { productsApi } from "./service/dummyData";

import counterReducer from "./features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer, // oldWay
    [productsApi.reducerPath]: productsApi.reducer, // products
  },
  middleware: (
    getDefaultMiddleware // outside the reducer obj
  ) => getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;

setupListeners(store.dispatch);
