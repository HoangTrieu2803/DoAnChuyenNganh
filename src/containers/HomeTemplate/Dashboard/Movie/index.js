import React from "react";
import movie from "../Movie/movie.json";
import "./index.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function Movie() {
  const local = localStorage.getItem("detail")
  console.log(local)
  const Movie = movie.map((movies) => {
    return (
      <SwiperSlide>
        <Link to={`/detail/${local}`} onClick={() => {localStorage.setItem("detail",movies.id)}}  >
          <img src={movies.hinhAnh} alt={movies.tenPhim} className="box" />
          <h5 className="images pt-1">{movies.tenPhim}</h5>
        </Link>
      </SwiperSlide>
    );
  });
  return (
    <div className="container col-md-8">
      <h2 className="text-center text-white pt-2">Phim Đang Chiếu</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"4"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        {Movie}
      </Swiper>
    </div>
  );
}
