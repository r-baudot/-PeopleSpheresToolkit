import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../app/features/counter/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Counter {counter}</p>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default Counter;
