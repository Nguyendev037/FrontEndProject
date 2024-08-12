import React from "react";
import Header from "../Component/Header/Header";
import Hero from "../Component/Hero/Hero";
import Footer from "../Component/Footer/Footer";
import Intro from "../Component/Introduction/Intro";
import IntroItem from "../Component/IntroItem/IntroItem";
import ItemCard from "../Component/ItemCard/ItemCard"
export default function Homepage() {
  return (
    <>
      <Header />
      <Hero/>
      <Intro />
      <IntroItem />
      <Footer />
    </>
  );
}
