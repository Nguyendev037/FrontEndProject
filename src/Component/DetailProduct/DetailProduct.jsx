import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./DetailProduct.css";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Images } from "../Images/Images";
export default function DetailProduct({ item }) {
  console.log("item: ", item);
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
            <h3 className="detailName">Barcadi 151 Degree</h3>
            <div className="d-flex rating">
              <p className="text-left me-4 rating">
                <a href="" className="me-2">
                  5.0
                </a>
                <a href="" className="me-2 star">
                  <FontAwesomeIcon icon={faStar} />
                </a>
                <a href="" className="me-2 star">
                  <FontAwesomeIcon icon={faStar} />
                </a>
                <a href="" className="me-2 star">
                  <FontAwesomeIcon icon={faStar} />
                </a>
                <a href="" className="me-2 star">
                  <FontAwesomeIcon icon={faStar} />
                </a>
                <a href="" className="me-2 star">
                  <FontAwesomeIcon icon={faStar} />
                </a>
              </p>
              <p className="text-left me-2" style={{ color: "#000" }}>
                100
                <span className="star ms-2" style={{ color: "#bbb" }}>
                  rating
                </span>
              </p>
              <p className="text-left me-2" style={{ color: "#000" }}>
                500
                <span className="star ms-2" style={{ color: "#bbb" }}>
                  Sold
                </span>
              </p>
            </div>
            <p className="itemPrice">{item.price} $</p>

            <p className=" des des-1">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p className="des des-2">
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word "and" and the Little Blind Text should turn around and return
              to its own, safe country. But nothing the copy said could convince
              her and so it didn’t take long until a few insidious Copy Writers
              ambushed her, made her drunk with Longe and Parole and dragged her
              into their agency, where they abused her for their.
            </p>
          </Col>
          <Col md={12} className="d-flex justify-content-end">
            <p style={{ color: "#000" }}>{item.stock} available</p>
          </Col>
        </Row>
        <Row className="mt-5"></Row>
      </Container>
    </section>
  );
}
