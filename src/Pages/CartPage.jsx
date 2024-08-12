import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import Hero from "../Component/Hero/Hero";
import Cart from "../Component/Cart/Cart";
export default function CartPage() {
  return (
    <>
      <Header />
      <Hero variant="small" />
      <Cart />
      <Footer />
    </>
  );
}
