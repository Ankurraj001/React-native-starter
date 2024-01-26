import { put, takeLatest } from "redux-saga/effects";
import { CounterActionTypes, counterActions } from "../slices/counterSlice";

export const incrementCount = function* (action) {
  try {
    yield put(counterActions.increment());
  } catch (errors) {
    console.log("Error");
  } finally {
    console.log("first Finally");
  }
};

export const decrementCount = function* (action) {
  try {
    yield put(counterActions.decrement());
  } catch (errors) {
    console.log("Error");
  } finally {
    console.log("first Finally");
  }
};

export default function* counterSaga() {
  yield takeLatest(CounterActionTypes.INCREMENT, incrementCount);
  yield takeLatest(CounterActionTypes.DECREMENT, decrementCount);
}
