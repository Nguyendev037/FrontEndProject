import React from "react";
import { Row, Col } from "reactstrap";
import ProductList from "../Component/ProductList/ProductList";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
export default function Products() {
  return (
    <>
      <Header />
      <Row>
        <Col></Col>
        <Row>
          <Col lg={3}></Col>
          <Col lg={9}>
            <ProductList />
          </Col>
        </Row>
      </Row>
      <Footer />
    </>
  );
}
