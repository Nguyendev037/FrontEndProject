import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="col-sm-12 col-md footer-item-infor">
            <div>
              <h2>
                <span className="footer-item mx-2">LIQUIOR</span>
                <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>Store</span>
              </h2>

              <span>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries
                </p>
              </span>
              <ul className="footer-list">
                <li className="animate__animated animate__fadeInUp">
                  <a href="" className="mx-2 footer-icon">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li className="animate__animated animate__fadeInUp ">
                  <a href="" className="footer-icon mx-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="animate__animated animate__fadeInUp ">
                  <a href="" className="footer-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="col-sm-12 col-md"></Col>
          <Col className="col-sm-12 col-md"></Col>
          <Col className="col-sm-12 col-md"></Col>
          <Col className="col-sm-12 col-md"></Col>
        </Row>
      </Container>
    </div>
  );
}
