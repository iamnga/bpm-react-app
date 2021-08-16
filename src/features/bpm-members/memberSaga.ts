// import { PayloadAction } from "@reduxjs/toolkit";
import memberApi from "api/memberApi";
import { Member } from "models";
import { call, put, takeLatest } from "redux-saga/effects";
import { memberActions } from "./memberSlice";

function* fetchMemberList() {
  try {
    const response: Member[] = yield call(memberApi.getAll);
    yield put(memberActions.fetchMemberSuccess(response));
  } catch (error) {
    console.log("Failed to fetch member list", error);
    yield put(memberActions.fetchMemberListFailed());
  }
}

export default function* memberSaga() {
  yield takeLatest(memberActions.fetchMemberList, fetchMemberList);
}
