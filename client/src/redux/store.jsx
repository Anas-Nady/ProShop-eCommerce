import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { cartReducer } from "./slices/cartSlice";
import {
  productListReducer,
  productDetailsReducer,
} from "./slices/productListSlice";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userUpdateReducer,
  userDeleteReducer,
} from "./slices/userSlice";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderPayReducer,
  orderListReducer,
  orderDeliverReducer,
} from "./slices/orderSlice";

import {
  productCreateReducer,
  productUpdateReducer,
  productDeleteReducer,
  productReviewCreateReducer,
  productTopRatedReducer,
} from "./slices/productListSlice";

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userUpdate: userUpdateReducer,
    userDelete: userDeleteReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDeliverReducer,
    orderMyList: orderListMyReducer,
    orderList: orderListReducer,
  },
  // initialState,
  DevTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
