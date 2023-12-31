import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {},
  logout: {},
  reducers: {
    login: (state, action) => {
      return (state = { ...action.payload });
    },
    logout: (state) => {
      return (state = {});
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
