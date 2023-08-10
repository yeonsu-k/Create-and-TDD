// core
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "src/store/authSlice";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  auth: authReducer,
});

// const persistConfig = {
//   key: "root",
//   storage: storage,
//   whitelist: ["auth"],
//   timeout: 1,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type rootState = ReturnType<typeof store.getState>;
