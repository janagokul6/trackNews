import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signedIn: false,
  userName: null,
  userEmail: null,
  userImage: null,
  searchText: null,
  userNameNormal: null,
  userPassword: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.signedIn = action.payload.signedIn;
      state.userImage = action.payload.userImage;
      state.searchText = action.payload.searchText;
      state.userNameNormal = action.payload.userNameNormal;
    },
    setUserLogout: (state) => {
      state.userName = null;
      state.userEmail = null;
      state.userImage = null;
      state.signedIn = null;
      state.searchText = null;
      state.userNameNormal = null;
    },
  },
});

export const { setActiveUser, setUserLogout } = userSlice.actions;

export const selectsearchText = (state) => state.user.searchText;
export const selectUserName = (state) => state.user.userName;
export const selectuserImage = (state) => state.user.userImage;
export const selectUserEmail = (state) => state.user.userEmail;
export const selectUserSign = (state) => state.user.signedIn;
export const selectuserNameNormal = (state) => state.user.userNameNormal;

export default userSlice.reducer;
