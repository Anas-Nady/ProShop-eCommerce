import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo: userInfoFromStorage,
  loading: false,
  error: null,
};

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    userLoginRequest: (state) => {
      state.loading = true;
    },
    userLoginSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    userLoginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userLogout: (state) => {
      state.userInfo = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { userLoginRequest, userLoginSuccess, userLoginFail, userLogout } =
  userLoginSlice.actions;
export const userLoginReducer = userLoginSlice.reducer;

const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState,
  reducers: {
    userRegisterRequest: (state) => {
      state.loading = true;
    },
    userRegisterSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    userRegisterFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { userRegisterRequest, userRegisterSuccess, userRegisterFail } =
  userRegisterSlice.actions;
export const userRegisterReducer = userRegisterSlice.reducer;

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: { user: {} },
  reducers: {
    userDetailsRequest: (state) => {
      state.loading = true;
    },
    userDetailsSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    userDetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userDetailsReset: (state) => {
      state.loading = false;
      state.error = null;
      state.user = {};
    },
  },
});

export const { userDetailsRequest, userDetailsSuccess, userDetailsFail, userDetailsReset } =
  userDetailsSlice.actions;
export const userDetailsReducer = userDetailsSlice.reducer;

const userUpdateProfileSlice = createSlice({
  name: "userUpdate",
  initialState: {},
  reducers: {
    userUpdateProfileRequest: (state) => {
      state.loading = true;
    },
    userUpdateProfileSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.userInfo = action.payload;
    },
    userUpdateProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userUpdateProfileReset: (state) => {
      state = {}
    }
  },
});

export const {
  userUpdateProfileRequest,
  userUpdateProfileSuccess,
  userUpdateProfileFail,
  userUpdateProfileReset,
} = userUpdateProfileSlice.actions;
export const userUpdateProfileReducer = userUpdateProfileSlice.reducer;


const userListSlice = createSlice({
  name: "userList",
  initialState: { users: [] },
  reducers: {
    userListRequest: (state) => {
      state.loading = true;
    },
    userListSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    userListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userListReset: (state) => {
      state.users = []
    }
  },
});

export const { userListRequest, userListSuccess, userListFail, userListReset } =
  userListSlice.actions;
export const userListReducer = userListSlice.reducer;


const userUpdateSlice = createSlice({
  name: "userUpdate",
  initialState: { user: {} },
  reducers: {
    userUpdateRequest: (state) => {
      state.loading = true;
    },
    userUpdateSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    userUpdateFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userUpdateReset: (state) => {
      state.user = {}
    }
  },
});

export const { userUpdateRequest, userUpdateSuccess, userUpdateFail, userUpdateReset } =
  userUpdateSlice.actions;
export const userUpdateReducer = userUpdateSlice.reducer;



const userDeleteSlice = createSlice({
  name: "userDelete",
  initialState: {  },
  reducers: {
    userDeleteRequest: (state) => {
      state.loading = true;
    },
    userDeleteSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    userDeleteFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { userDeleteRequest, userDeleteSuccess, userDeleteFail } =
  userDeleteSlice.actions;
export const userDeleteReducer = userDeleteSlice.reducer;
