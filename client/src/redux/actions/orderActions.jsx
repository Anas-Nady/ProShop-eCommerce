import {
  orderCreateRequest,
  orderCreateSuccess,
  orderCreateFail,
  orderDetailsRequest,
  orderDetailsSuccess,
  orderDetailsFail,
  orderPayRequest,
  orderPaySuccess,
  orderPayFail,
  orderDeliverRequest,
  orderDeliverSuccess,
  orderDeliverFail,
  orderListMyRequest,
  orderListMySuccess,
  orderListMyFail,
  orderListRequest,
  orderListSuccess,
  orderListFail,
} from "../slices/orderSlice";
import axios from "axios";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch(orderCreateRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/orders`, order, config);

    dispatch(orderCreateSuccess(data));
  } catch (error) {
    dispatch(
      orderCreateFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(orderDetailsRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/${id}`, config);

    dispatch(orderDetailsSuccess(data));
  } catch (error) {
    dispatch(
      orderDetailsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const payOrder =
  (orderId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch(orderPayRequest());

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/orders/${orderId}/pay`,
        paymentResult,
        config
      );

      dispatch(orderPaySuccess(data));
    } catch (error) {
      dispatch(
        orderPayFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };

export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch(orderListMyRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/myorders`, config);

    dispatch(orderListMySuccess(data));
  } catch (error) {
    dispatch(
      orderListMyFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch(orderListRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders`, config);

    dispatch(orderListSuccess(data));
  } catch (error) {
    dispatch(
      orderListFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch(orderDeliverRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/orders/${order}/deliver`,
      {},
      config
    );

    dispatch(orderDeliverSuccess(data));
  } catch (error) {
    dispatch(
      orderDeliverFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};
