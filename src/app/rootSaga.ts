import memberSaga from "features/bpm-members/memberSaga";
import srsSaga from "features/srs/srsSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([memberSaga(), srsSaga()]);
}
