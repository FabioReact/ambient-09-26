import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './features/counter/counterSlice';
import authSliceReducer from './features/auth/authSlice';
import battleSliceReducer from './features/battle/battleSlice';
import { apiSlice } from './features/apiSlice';

// Fonction pure
// add(1, 6) -> 7
// Math.random()

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    auth: authSliceReducer,
    battle: battleSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
