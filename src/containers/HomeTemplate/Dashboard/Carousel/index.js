import { render } from "@testing-library/react";
import { extend } from "jquery";
import React from "react";
import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import "./index.css";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../images/img1.png" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/img2.png" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/img3.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/img4.jpg" alt="..." />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
