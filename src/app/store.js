import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { cryptoApi } from "./cryptoApi";
import { cryptoNewsApi } from "./cryptoNewsApi";
import crypto from "./cryptoSlice";
const store = configureStore({
  reducer: {
    crypto,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cryptoApi.middleware)
      .concat(cryptoNewsApi.middleware),
});

setupListeners(store.dispatch);
export default store;
