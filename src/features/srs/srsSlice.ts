import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { SRSList } from "models";

export interface SrsState {
  loading: boolean;
  list: SRSList;
}

const initialState: SrsState = {
  loading: false,
  list: { "task-summary": [] },
};

const srsSlice = createSlice({
  name: "srs",
  initialState,
  reducers: {
    fetchSRSList(state) {
      state.loading = true;
    },
    fetchSRSSuccess(state, action: PayloadAction<SRSList>) {
      state.list = action.payload;
      state.loading = false;
      console.log(action.payload);
    },
    fetchSRSListFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const srsActions = srsSlice.actions;

// Selectors
export const selectSRSList = (state: RootState) => state.srs.list;
export const selectSRSLoading = (state: RootState) => state.srs.loading;

// Reducer
const srsReducer = srsSlice.reducer;
export default srsReducer;
