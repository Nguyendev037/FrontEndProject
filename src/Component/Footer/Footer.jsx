import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faChevronRight,
  faMap,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row className="g-lg-4 g-3">
          <Col className="footer-item-infor col-sm-6 col-lg-3">
            <div>
              <h3>
                <span className="footer-item mx-2">LIQUIOR</span>
                <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>Store</span>
              </h3>

              <span>
                <p style={{ fontSize: "12px" }}>
                  Far far away, behind the word mountains, far from the
                  countries
                </p>
              </span>
              <ul className="footer-list">
                <li className="animate__animated animate__fadeInUp">
                  <a href="" className="mr-2 footer-icon">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li className="animate__animated animate__fadeInUp ">
                  <a href="" className="footer-icon mx-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="animate__animated animate__fadeInUp ">
                  <a href="" className="footer-icon mt-2">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="col-sm-6 col-lg-3">
            <div style={{ color: "#BDBDBD" }}>
              <h3>Useful links</h3>
            </div>

            <div className=" mt-2">
              <NavLink to="/" className="footer-link">
                <span
                  style={{
                    marginRight: "5px",
                  }}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
                Angostura Champions
              </NavLink>
            </div>
            <div className="mt-2 ">
              <NavLink to="/" className="footer-link">
                <span
                  style={{
                    marginRight: "5px",
                  }}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
                Seller/Distributors
              </NavLink>
            </div>
            <div className="mt-2 ">
              <NavLink to="/" className="footer-link">
                <span
                  style={{
                    marginRight: "5px",
                  }}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
                Privacy
              </NavLink>
            </div>
            <div className="mt-2">
              <NavLink to="/" className="footer-link">
                <span
                  style={{
                    marginRight: "5px",
                  }}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
                Term & Conditions
              </NavLink>
            </div>
          </Col>
          <Col className="col-sm-6 col-lg-3">
            <div style={{ color: "#BDBDBD" }}>
              <h3>Information</h3>
            </div>

            <div className="mt-2">
              <NavLink to="/" className="footer-link">
                <span
                  style={{
                    marginRight: "5px",
                  }}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
                About us
              </NavLink>
            </div>

            <div className="mt-2">
              <NavLink to="/" className="footer-link">
                <span
                  style={{
                    marginRight: "5px",
                  }}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
                Catalog
              </NavLink>
            </div>
            <div className="mt-2">
              <NavLink to="/contact" className="footer-link">
                <span
                  style={{
                    marginRight: "5px",
                  }}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
                Contact
              </NavLink>
            </div>
          </Col>
          <Col className="col-sm-6 col-lg-3 footer-location">
            <div style={{ color: "#BDBDBD" }}>
              <h3>Have a Question ?</h3>
            </div>

            <div className="text d-flex flex-row align-items-center">
              <span className=" me-3">
                <FontAwesomeIcon icon={faMap} />
              </span>
              <p className="fs-6">
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
            </div>

            <div className="footer-link  d-flex flex-row align-items-center">
              <span className="me-3">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <p className="">+89 392 3929 210</p>
            </div>

            <div className="footer-link  d-flex flex-row align-items-center">
              <span className=" me-3">
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>
              <p className="">bestLiquid@gmail.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
