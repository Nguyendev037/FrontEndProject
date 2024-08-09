import React from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container } from "reactstrap";
export default function Hero() {
  return (
    <section className="hero">
      <Container className="d-flex justity-content-center align-items-center">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      </Container>
    </section>
  );
}
