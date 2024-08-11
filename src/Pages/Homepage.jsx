import React from "react";
import Header from "../Component/Header/Header";
import { Container } from "reactstrap";
import Hero from "../Component/Hero/Hero";
import Footer from "../Component/Footer/Footer";
import Intro from "../Component/Introduction/Intro";
import IntroItem from "../Component/IntroItem/IntroItem";

export default function Homepage() {
  return (
    <>
      <Header />

      <Intro />
      <IntroItem />
      
      <Footer />
    </>
  );
}
