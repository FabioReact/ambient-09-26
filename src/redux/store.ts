import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from './features/counter/counterSlice'
import authSliceReducer from './features/counter/authSlice'

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    auth: authSliceReducer,
  }
})

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store