import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./DetailProduct.css";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Images } from "../Images/Images";
export default function DetailProduct({ item }) {
    console.log('item: ', item);
  return (
    <section className="DetailProduct">
      <Container>
        <Row>
          <Col lg={6} className="mb-5 animate__animated animate__fadeInUp">
            <img
              className="imageProduct"
              src={`${Images.items[item.liquidImage]}`}
              alt=""
            />
          </Col>
          <Col
            lg={6}
            className="detailInfor animate__animated animate__fadeInUp"
          >
            <h3>Barcadi 151 Degree</h3>
            <div className="d-flex rating">
              <p className="text-left mr-4 rating">
                <a href="" className="mr-2">
                  5.0
                </a>
                <a href="" className="mr-2">
                  <FontAwesomeIcon icon={faStar} />
                </a>
                <a href="" className="mr-2">
                  <FontAwesomeIcon icon={faStar} />
                </a>
                <a href="" className="mr-2">
                  <FontAwesomeIcon icon={faStar} />
                </a>
                <a href="" className="mr-2">
                  <FontAwesomeIcon icon={faStar} />
                </a>
                <a href="" className="mr-2">
                  <FontAwesomeIcon icon={faStar} />
                </a>
              </p>
              <p className="text-left mr-4">

              </p>
              <p></p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5"></Row>
      </Container>
    </section>
  );
}
