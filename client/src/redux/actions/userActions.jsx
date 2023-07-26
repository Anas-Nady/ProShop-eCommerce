import axios from "axios";
import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
  userLogout,
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFail,
  userDetailsRequest,
  userDetailsSuccess,
  userDetailsFail,
  userDetailsReset,
  userListRequest,
  userListSuccess,
  userListFail,
  userListReset,
  userUpdateRequest,
  userUpdateSuccess,
  userUpdateFail,
  userDeleteRequest,
  userDeleteSuccess,
  userDeleteFail,
  userUpdateProfileRequest,
  userUpdateProfileSuccess,
  userUpdateProfileFail,
} from "./../slices/userSlice";
import { orderListMyReset } from "../slices/orderSlice";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(userLoginRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch(userLoginSuccess(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(
      userLoginFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch(userLogout());
  dispatch(userDetailsReset());
  dispatch(userListReset());
  dispatch(orderListMyReset());
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch(userRegisterRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );

    dispatch(userRegisterSuccess(data));
    dispatch(userLoginSuccess(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(
      userRegisterFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(userDetailsRequest());
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch(userDetailsSuccess(data));
  } catch (error) {
    dispatch(
      userDetailsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch(userUpdateProfileRequest());
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, user, config);

    dispatch(userUpdateProfileSuccess(data));
    dispatch(userLoginSuccess(data));
    localStorage.setItem('userInfo',JSON.stringify(data))
  } catch (error) {
    dispatch(
      userUpdateProfileFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch(userListRequest());
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users`, config);

    dispatch(userListSuccess(data));
  } catch (error) {
    dispatch(
      userListFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch(userUpdateRequest());
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/${user.id}`, user, config);

    dispatch(userUpdateSuccess());
    dispatch(userDetailsSuccess(data));
  } catch (error) {
    dispatch(
      userUpdateFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch(userDeleteRequest());
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/users/${id}`, config);

    dispatch(userDeleteSuccess());
  } catch (error) {
    dispatch(
      userDeleteFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};
