import { CounterActionTypes } from "../slices/counterSlice";

//action to get pan india summary
export const increment = () => ({
  type: CounterActionTypes.INCREMENT,
});

export const decrement = () => ({
  type: CounterActionTypes.DECREMENT,
});
