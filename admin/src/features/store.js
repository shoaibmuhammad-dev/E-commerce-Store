import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authApi/authApi";
import { productApi } from "../services/productApi/productApi";
import { userApi } from "../services/userApi/userApi";
import { categoryApi } from "../services/categoryApi/categoryApi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      productApi.middleware,
      userApi.middleware,
      categoryApi.middleware,
    ),
});

setupListeners(store.dispatch);

export default store;
