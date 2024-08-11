import React from "react";
import "./Hero.css";
import "animate.css";
import { Container, Row, Col, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import classNames from "classnames"; 
export default function Hero({ variant  }) {
  return (
    <section className={classNames("hero", { "hero-2": variant === "small" })}>
      <div className="overlayer"></div>
      <Container className="hero-content">
        <Row className="algin-items-center justify-content-center">
          <Col md={8}>
            <div className="d-flex algin-items-end  animate__animated animate__fadeInUp ">
              <div class="text w-100 text-center">
                <h1 class="mb-4">
                  Good <span>Drink</span> for Good <span>Moments</span> .
                </h1>
                <p>
                  <NavLink to="/product">
                    <Button className="buttonHero btn  py-2 px-4 me-2">
                      Shop Now
                    </Button>
                  </NavLink>
                  <NavLink to="/contact">
                    <Button
                      style={{ backgroundColor: "transparent" }}
                      className="buttonHero-White btn btn-white btn-outline-white py-2 px-4 ms-2"
                    >
                      Read More
                    </Button>
                  </NavLink>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
