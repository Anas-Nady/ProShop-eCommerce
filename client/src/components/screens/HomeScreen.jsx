import React from "react";
import { Link } from "react-router-dom";
import Product from "./../Product";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";
import Loader from "../Loader";
import Message from "../Message";
import { useParams } from "react-router-dom";
import Paginate from "../Paginate";
import ProductCarousel from "../ProductCarousel";
import Meta from '../Meta'

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { pageNumber } = useParams() || 1;

  const productList = useSelector((state) => state.productList);
  const { loading, products: productsList, error, page, pages } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
    <Meta />
      {!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-light'>Go Back</Link>}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {productsList.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
            isAdmin={userInfo ? userInfo.isAdmin : false}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
