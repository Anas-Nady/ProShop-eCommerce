import { createSlice } from "@reduxjs/toolkit";

const orderCreateSlice = createSlice({
  name: "orderCreate",
  initialState: {},
  reducers: {
    orderCreateRequest: (state) => {
      state.loading = true;
    },
    orderCreateSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.order = action.payload;
    },
    orderCreateFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { orderCreateRequest, orderCreateSuccess, orderCreateFail } =
  orderCreateSlice.actions;
export const orderCreateReducer = orderCreateSlice.reducer;

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState: { loading: true, orderItems: [], shippingAddress: {} },
  reducers: {
    orderDetailsRequest: (state) => {
      state.loading = true;
    },
    orderDetailsSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    orderDetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { orderDetailsRequest, orderDetailsSuccess, orderDetailsFail } =
  orderDetailsSlice.actions;
export const orderDetailsReducer = orderDetailsSlice.reducer;

const orderPaySlice = createSlice({
  name: "orderPay",
  initialState: {},
  reducers: {
    orderPayRequest: (state) => {
      state.loading = true;
    },
    orderPaySuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    orderPayFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    orderPayReset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
});

export const { orderPayRequest, orderPaySuccess, orderPayFail, orderPayReset } =
  orderPaySlice.actions;
export const orderPayReducer = orderPaySlice.reducer;

const orderListMySlice = createSlice({
  name: "orderMyList",
  initialState: { orders: [] },
  reducers: {
    orderListMyRequest: (state) => {
      state.loading = true;
    },
    orderListMySuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    orderListMyFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    orderListMyReset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    }
  },
});

export const { orderListMyRequest, orderListMySuccess, orderListMyFail, orderListMyReset } =
  orderListMySlice.actions;
export const orderListMyReducer = orderListMySlice.reducer;



const orderListSlice = createSlice({
  name: "orderList",
  initialState: { orders: [] },
  reducers: {
    orderListRequest: (state) => {
      state.loading = true;
    },
    orderListSuccess: (state,action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    orderListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  },
});

export const { orderListRequest, orderListSuccess, orderListFail } =
  orderListSlice.actions;
export const orderListReducer = orderListSlice.reducer;



const orderDeliverSlice = createSlice({
  name: "orderDeliver",
  initialState: { },
  reducers: {
    orderDeliverRequest: (state) => {
      state.loading = true;
    },
    orderDeliverSuccess: (state) => {
      state.loading = false;
      state.success = true
    },
    orderDeliverFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    orderDeliverReset: (state) => {
      state = {}
    }
  },
});

export const { orderDeliverRequest, orderDeliverSuccess, orderDeliverFail,orderDeliverReset } =
  orderDeliverSlice.actions;
export const orderDeliverReducer = orderDeliverSlice.reducer;
