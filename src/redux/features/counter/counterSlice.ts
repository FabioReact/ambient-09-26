import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// slice -> panier
// slice -> user prefs
// slice -> theme
// slice -> liste de souhaits

// Define a type for the slice state
export interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0
}

// action: { type: 'counter/incrementByAmount', payload: 5 }

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
// action creators

export const { increment, decrement, incrementByAmount } = counterSlice.actions
// const increment = () => ({
//   type: 'counter/increment'
// })
// const decrement = () => ({
//   type: 'counter/decrement'
// })
// const incrementByAmount = (nb: number) => ({
//   type: 'counter/incrementByAmount',
//   payload: nb,
// })

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer