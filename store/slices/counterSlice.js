import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

export const CounterActionTypes = {
  INCREMENT: "counter/INCREMENT",
  DECREMENT: "counter/DECREMENT",
};
