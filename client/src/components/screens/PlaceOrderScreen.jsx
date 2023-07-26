import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Image, Card, ListGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Message from "../Message";
import CheckoutSteps from "../CheckoutSteps";
import { createOrder } from "../../redux/actions/orderActions";

const PlaceOrderScreen = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const cart = useSelector((state) => state.cart);

  const itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const shippingPrice = itemsPrice > 100 ? 0 : 100;
  const taxPrice = Number((0.15 * itemsPrice).toFixed(2));
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const updatedCart = {
    ...cart,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  };

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      navigateTo(`/order/${order._id}`);
    }
  }, [navigateTo, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: updatedCart.cartItems,
        shippingAddress: updatedCart.shippingAddress,
        paymentMethod: updatedCart.paymentMethod,
        itemsPrice: updatedCart.itemsPrice,
        shippingPrice: updatedCart.shippingPrice,
        taxPrice: updatedCart.taxPrice,
        totalPrice: updatedCart.totalPrice,
      })
    );
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {updatedCart.shippingAddress.address},{" "}
                {updatedCart.shippingAddress.city},{" "}
                {updatedCart.shippingAddress.postalCode},{" "}
                {updatedCart.shippingAddress.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method:</strong>
              {updatedCart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {updatedCart.cartItems.length == 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {updatedCart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>${updatedCart.itemsPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>${updatedCart.shippingPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                    <Col>${updatedCart.taxPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Total</Col>
                    <Col>${updatedCart.totalPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  {error && <Message variant="danger">{error}</Message>}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn-block"
                    disabled={updatedCart.cartItems === 0}
                    onClick={placeOrderHandler}
                  >
                    Place Order
                  </Button>
                </ListGroup.Item>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
