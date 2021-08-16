import memberSaga from "features/bpm-members/memberSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([memberSaga()]);
}
