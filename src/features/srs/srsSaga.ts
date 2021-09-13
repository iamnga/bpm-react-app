// import { PayloadAction } from "@reduxjs/toolkit";
import srsApi from "api/srsApi";
import { SRSList } from "models";
import { call, put, takeLatest } from "redux-saga/effects";
import { srsActions } from "./srsSlice";

function* fetchSRSList() {
  try {
    const response: SRSList = yield call(srsApi.getAll);
    yield put(srsActions.fetchSRSSuccess(response));
  } catch (error) {
    console.log("Failed to fetch srs list", error);
    yield put(srsActions.fetchSRSListFailed());
  }
}

export default function* srsSaga() {
  yield takeLatest(srsActions.fetchSRSList, fetchSRSList);
}
