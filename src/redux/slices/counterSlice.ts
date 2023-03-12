import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CounterState {
  value: number;
}

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { value: 0 } as CounterState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    reset(state) {
      state.value = 0;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export const selectCounter = (state: RootState) => state.counterSlice
export default counterSlice.reducer
