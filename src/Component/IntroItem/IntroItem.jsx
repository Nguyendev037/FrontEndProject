import React from "react";
import { Row, Col, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./IntroItem.css";
export default function IntroItem() {
  return (
    <>
      <Container className="introItem ">
        <Row className="pb-5 text-center">
          <div className="introItemHeader ">
            <div>
              <p className="introItemHeader-text">Our Delightful offerings</p>
            </div>
            <h2>Tastefully Yours</h2>
          </div>
        </Row>
        <Row>
            {
                <Col md={3} d-flex>
                </Col>
            }
        </Row>
      </Container>
    </>
  );
}
