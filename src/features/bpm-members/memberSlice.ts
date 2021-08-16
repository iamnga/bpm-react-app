import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Member } from "models";

export interface MemberState {
  loading: boolean;
  list: Member[];
}

const initialState: MemberState = {
  loading: false,
  list: [],
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    fetchMemberList(state) {
      state.loading = true;
    },
    fetchMemberSuccess(state, action: PayloadAction<Member[]>) {
      state.list = action.payload;
      state.loading = false;
    },
    fetchMemberListFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const memberActions = memberSlice.actions;

// Selectors
export const selectMemberList = (state: RootState) => state.member.list;
export const selectMemberLoading = (state: RootState) => state.member.loading;

// Reducer
const memberReducer = memberSlice.reducer;
export default memberReducer;
