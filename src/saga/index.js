import { all } from "redux-saga/effects";
import photSaga from "./photos";

function* rootSaga() {
  yield all([photSaga()]);
}

export default rootSaga;
