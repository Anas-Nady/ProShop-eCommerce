import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./components/screens/HomeScreen";
import ProductScreen from "./components/screens/ProductScreen";
import CartScreen from "./components/screens/CartScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
import UserListScreen from "./components/screens/UserListScreen";
import UserEditScreen from "./components/screens/UserEditScreen";
import ShippingScreen from "./components/screens/ShippingScreen";
import PaymentScreen from "./components/screens/PaymentScreen";
import PlaceOrderScreen from "./components/screens/PlaceOrderScreen";
import OrderScreen from "./components/screens/OrderScreen";
import ProductListScreen from "./components/screens/ProductListScreen";
import ProductEditScreen from "./components/screens/ProductEditScreen";
import OrderListScreen from "./components/screens/OrderListScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" Component={HomeScreen} exact />
            <Route path="/page/:pageNumber" Component={HomeScreen} exact />
            <Route path="/search/:keyword" Component={HomeScreen} exact />
            <Route
              path="/search/:keyword/page/:pageNumber"
              Component={HomeScreen}
            />
            <Route path="/register" Component={RegisterScreen} />
            <Route path="/login" Component={LoginScreen} />
            <Route path="/profile" Component={ProfileScreen} />
            <Route path="/admin/userList" Component={UserListScreen} />
            <Route path="/admin/user/:id/edit" Component={UserEditScreen} />
            <Route path="/product/:id" Component={ProductScreen} />
            <Route
              path="/admin/productList"
              Component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/productList/:pageNumber"
              Component={ProductListScreen}
              exact
            />
            <Route path="/admin/orderList" Component={OrderListScreen} />
            <Route
              path="/admin/productList/:id/edit"
              Component={ProductEditScreen}
            />
            <Route path="/cart/:id?" Component={CartScreen} />
            <Route path="/shipping" Component={ShippingScreen} />
            <Route path="/payment" Component={PaymentScreen} />
            <Route path="/placeOrder" Component={PlaceOrderScreen} />
            <Route path="/order/:id" Component={OrderScreen} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
