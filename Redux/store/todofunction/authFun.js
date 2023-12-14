import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  useruid: null,
  username: "",
};

export const authSlice = createSlice({
  name: "authReducers",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.useruid = action.payload.useruid;
      state.username = action.payload.username;
    },
    // clearuser: (state, action) => {
    //     state.user = null
    //     state.username ="Duest"
    // }
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
