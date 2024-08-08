import React from "react";
import "./Background.css";
import { Container } from "reactstrap";
import backGroundIamge from "../../assets/Image/backGroundImage.webp";
import "./Hero.css"
export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backGroundIamge})` }}
    >
      <Container className="d-flex justity-content-center align-items-center"></Container>
    </section>
  );
}
