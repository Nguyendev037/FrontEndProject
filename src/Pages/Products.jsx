import React from "react";
import { Row, Col } from "reactstrap";
import ProductList from "../Component/ProductList/ProductList"
export default function Products() {
  return (
    <Row>
      <Col></Col>
      <Row>
        <Col lg={3}></Col>
        <Col lg={9}>
          <ProductList/>
        </Col>
      </Row>
    </Row>
  );
}
