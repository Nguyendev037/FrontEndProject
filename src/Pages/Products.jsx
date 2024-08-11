import React from "react";
import { Row, Col } from "reactstrap";
import ProductList from "../Component/ProductList/ProductList";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Hero from "../Component/Hero/Hero";
export default function Products() {
  return (
    <>
      <Header />
      <Hero variant="small" />
      <Row className="my-3">
        <Row>
          <Col md={2} lg={4}></Col>
          <Col md={10} lg={8}>
            <Row>
              <Col md={12} className="d-flex justify-content-between alingn-items-center"></Col>
            </Row>
            <Row>
              <ProductList />
            </Row>
          </Col>
        </Row>
      </Row>
      <Footer />
    </>
  );
}
