import { createSlice } from "@reduxjs/toolkit";

export const productListSlice = createSlice({
  name: "productList",
  initialState: { products: [] },
  reducers: {
    productListRequest: (state) => {
      state.loading = true;
    },
    productListSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
      state.pages = action.payload.pages;
      state.page = action.payload.page;
    },
    productListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { productListRequest, productListSuccess, productListFail } =
  productListSlice.actions;
export const productListReducer = productListSlice.reducer;

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: { product: { reviews: [] } },
  reducers: {
    productDetailsRequest: (state) => {
      state.loading = true;
    },
    productDetailsSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    productDetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  productDetailsRequest,
  productDetailsSuccess,
  productDetailsFail,
} = productDetailsSlice.actions;
export const productDetailsReducer = productDetailsSlice.reducer;

const productCreateSlice = createSlice({
  name: "productCreate",
  initialState: {},
  reducers: {
    productCreateRequest: (state) => {
      state.loading = true;
    },
    productCreateSuccess: (state) => {
      state.loading = false;
      state.success = true;
      state.product = action.payload;
    },
    productCreateFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    productCreateReset: (state) => {
      state = {};
    },
  },
});

export const {
  productCreateRequest,
  productCreateSuccess,
  productCreateFail,
  productCreateReset,
} = productCreateSlice.actions;
export const productCreateReducer = productCreateSlice.reducer;

const productUpdateSlice = createSlice({
  name: "productUpdate",
  initialState: { product: {} },
  reducers: {
    productUpdateRequest: (state) => {
      state.loading = true;
    },
    productUpdateSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.product = action.payload;
    },
    productUpdateFail: (state) => {
      state.loading = false;
      state.success = false;
    },
    productUpdateReset: (state) => {
      state.product = {};
      state.success = false;
    },
  },
});
export const {
  productUpdateRequest,
  productUpdateSuccess,
  productUpdateFail,
  productUpdateReset,
} = productUpdateSlice.actions;
export const productUpdateReducer = productUpdateSlice.reducer;

const productDeleteSlice = createSlice({
  name: "productDelete",
  initialState: {},
  reducers: {
    productDeleteRequest: (state) => {
      state.loading = true;
    },
    productDeleteSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    productDeleteFail: (state) => {
      state.loading = false;
      state.success = false;
    },
  },
});
export const { productDeleteRequest, productDeleteSuccess, productDeleteFail } =
  productDeleteSlice.actions;
export const productDeleteReducer = productDeleteSlice.reducer;

const productReviewCreateSlice = createSlice({
  name: "productReviewCreate",
  initialState: {},
  reducers: {
    productCreateReviewRequest: (state) => {
      state.loading = true;
    },
    productCreateReviewSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    productCreateReviewFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    productCreateReviewReset: (state) => {
      state = {};
      state.success = false;
    },
  },
});
export const {
  productCreateReviewRequest,
  productCreateReviewSuccess,
  productCreateReviewFail,
  productCreateReviewReset,
} = productReviewCreateSlice.actions;
export const productReviewCreateReducer = productReviewCreateSlice.reducer;

const productTopRatedSlice = createSlice({
  name: "productTopRated",
  initialState: { products: [] },
  reducers: {
    productTopRequest: (state) => {
      state.loading = true;
      state.products = [];
    },
    productTopSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    productTopFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { productTopRequest, productTopSuccess, productTopFail } =
  productTopRatedSlice.actions;
export const productTopRatedReducer = productTopRatedSlice.reducer;
