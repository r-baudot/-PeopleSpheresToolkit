import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 69,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      // action
      state.value += 1; // Il est ok de "muter" l'état ici grâce à immer
    },
    decrement(state) {
      // action
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer; // Le réducteur
