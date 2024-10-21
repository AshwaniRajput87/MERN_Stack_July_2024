import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    error: false,
    isLoading: false,
  },

  reducers: {
    userData(state, action) {
      state.userData = action.payload;
      console.log("user slice data", action.payload);
    },

    userError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    isUserLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
  },
});

export default UserSlice;
