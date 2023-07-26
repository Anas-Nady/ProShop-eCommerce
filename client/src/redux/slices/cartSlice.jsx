import { createSlice } from "@reduxjs/toolkit";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

  const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : {};

const initialState = {
  cartItems: cartItemsFromStorage,
  shippingAddress: shippingAddressFromStorage,
  paymentMethod: paymentMethodFromStorage
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartAddItem: (state, action) => {
      const item = action.payload;
      const exitItem = state.cartItems.find((x) => x.product === item.product);

      if (exitItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.product === exitItem.product ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
    },
    cartRemoveItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (x) => x.product !== action.payload
      );
    },
    cartSaveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    cartSavePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const { cartAddItem, cartRemoveItem, cartSaveShippingAddress , cartSavePaymentMethod} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
