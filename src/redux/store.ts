import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from './features/counter/counterSlice'
import authSliceReducer from './features/auth/authSlice'
import battleSliceReducer from './features/battle/battleSlice'

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    auth: authSliceReducer,
    battle: battleSliceReducer,
  }
})

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store