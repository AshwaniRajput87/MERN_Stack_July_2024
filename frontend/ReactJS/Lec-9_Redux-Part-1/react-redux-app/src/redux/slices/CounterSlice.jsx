import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },

  reducers: {
    // define you all methods here

    increment(state) {
      state.value += 1;
    },

    decrement(state) {
      state.value -= 1;
    },
  },
});

export default CounterSlice.reducer;

export const CounterAction = CounterSlice.actions;
