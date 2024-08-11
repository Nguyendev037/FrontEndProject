import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faCashRegister,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Container } from "reactstrap";
import { Images } from "../Images/Images";
import CountUp from "react-countup";
import "./Intro.css";
export default function Intro() {
  return (
    <>
      <section className="intro">
        <Container>
          <Row noGutters>
            <Col md={4} clasName="d-flex me-4">
              <div className="introInfor d-lg-flex animate__animated animate__fadeInUp">
                <div className="icon">
                  <FontAwesomeIcon icon={faHeadset} />
                </div>
                <div className="introDes">
                  <h2>ONLINE SUPPORT</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </Col>
            <Col
              md={4}
              clasName="d-flex me-4"
              style={{ backgroundColor: "#ab4227" }}
            >
              <div className="introInfor d-lg-flex animate__animated animate__fadeInUp">
                <div className="icon">
                  <FontAwesomeIcon icon={faCashRegister} />
                </div>
                <div className="introDes">
                  <h2>Money Back Guarantee</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} clasName="d-flex me-4">
              <div
                className="introInfor d-lg-flex animate__animated animate__fadeInUp"
                style={{ backgroundColor: "#a23f25" }}
              >
                <div className="icon">
                  <FontAwesomeIcon icon={faTruckFast} />
                </div>
                <div className="introDes">
                  <h2>Free Shipping & Return</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="intro-2">
        <Container>
          <Row>
            <Col
              md={6}
              className="intro-2-image"
              style={{
                backgroundImage: `url(${Images.imageHero["imageHero5"]})`,
              }}
            ></Col>
            <Col className="md-6 wrap-about py-5 ps-md-5  animate__animated  animate__fadeInUp">
              <div className="intro-2-heading">
                <span className="subHeading">Since 1905</span>
                <h2 className="mb-4">Desir Meets A New Taste</h2>
              </div>
              <p className="mb-2 text-secondary" style={{ fontSize: "16px" }}>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p className="mb-2 text-secondary" style={{ fontSize: "16px" }}>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country.
              </p>
              <p className="yearIntro-2">
                <strong className="number" data-number="115">
                  <CountUp start={-1} end={115} duration={6}></CountUp>
                </strong>
                <span>Years of Experience In Business</span>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="intro-3">
        <Container>
          <Row>
            <Col md={4} lg={2}>
              <div className="liquid-type w-100 text-center animate__animated  animate__fadeInUp">
                <div
                  className="kind-image"
                  style={{ backgroundImage: `url(${Images.kinds["kind1"]})` }}
                ></div>
                <h3>Brandy</h3>
              </div>
            </Col>

            <Col md={4} lg={2}>
              <div className="liquid-type w-100 text-center animate__animated  animate__fadeInUp">
                <div
                  className="kind-image"
                  style={{ backgroundImage: `url(${Images.kinds["kind2"]})` }}
                ></div>
                <h3>Gin</h3>
              </div>
            </Col>

            <Col md={4} lg={2}>
              <div className="liquid-type w-100 text-center animate__animated  animate__fadeInUp">
                <div
                  className="kind-image"
                  style={{ backgroundImage: `url(${Images.kinds["kind3"]})` }}
                ></div>
                <h3>Rum</h3>
              </div>
            </Col>

            <Col md={4} lg={2}>
              <div className="liquid-type w-100 text-center animate__animated  animate__fadeInUp">
                <div
                  className="kind-image"
                  style={{ backgroundImage: `url(${Images.kinds["kind4"]})` }}
                ></div>
                <h3>Tequila</h3>
              </div>
            </Col>

            <Col md={4} lg={2}>
              <div className="liquid-type w-100 text-center animate__animated  animate__fadeInUp">
                <div
                  className="kind-image"
                  style={{ backgroundImage: `url(${Images.kinds["kind5"]})` }}
                ></div>
                <h3>Vodka</h3>
              </div>
            </Col>

            <Col md={4} lg={2}>
              <div className="liquid-type w-100 text-center animate__animated  animate__fadeInUp">
                <div
                  className="kind-image"
                  style={{ backgroundImage: `url(${Images.kinds["kind6"]})` }}
                ></div>
                <h3>Whiskey</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
