import React from "react";
import Header from "../Component/Header/Header";
import { Container } from "reactstrap";
import Hero from "../Component/Hero/Hero";
import Footer from "../Component/Footer/Footer";
export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <Container></Container>
      <Footer />
    </>
  );
}
