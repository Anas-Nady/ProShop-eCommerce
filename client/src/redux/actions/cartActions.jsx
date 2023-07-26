import axios from "axios";
import { cartAddItem, cartRemoveItem, cartSaveShippingAddress, cartSavePaymentMethod } from "../slices/cartSlice";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch(
    cartAddItem({
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    })
  );
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch(cartRemoveItem(id));
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => async (dispatch) => {
  dispatch(cartSaveShippingAddress(data));
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => async (dispatch) => {
  dispatch(cartSavePaymentMethod(data));
  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
