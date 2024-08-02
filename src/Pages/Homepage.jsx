import React from "react";
import Header from "../Component/Header/Header";
import { Container } from "reactstrap";
import Background from "../Component/BackgroundImage/Background";
import Footer from "../Component/Footer/Footer";
export default function Homepage() {
  return (
    <>
      <Header />
      <Background />
      <Container></Container>
      <Footer />
    </>
  );
}
