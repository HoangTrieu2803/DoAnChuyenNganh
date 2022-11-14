import React, { useEffect } from "react";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { actFetchListMovie } from "./modules/action";
import { EffectCoverflow, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Movie() {
  //call api
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchListMovie());
  }, []);
  const data = useSelector((state) => state.listMovieReducer.data);
  console.log(data);
  const Movie = data?.map((movies, key) => {
    return (
      <SwiperSlide key={key}>
        <Link to={`/detail/${movies._id}`}>
          <img
            src={`./images/movie/${movies.img}`}
            alt={movies.name}
            className="box"
          />
          <h5 className="images pt-1">{movies.name}</h5>
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
      {/* <iframe
        width="560"
        height="315"
        src="../Aquaman.mp4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
    </div>
  );
}
