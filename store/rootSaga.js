import { all, fork } from "redux-saga/effects";
import counterSaga from "./sagas/counterSaga";
import gallerySaga from "./sagas/gallerySaga";

export default function* rootSaga() {
  yield all([fork(counterSaga), fork(gallerySaga)]);
}
