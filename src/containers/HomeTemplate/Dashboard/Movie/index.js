import React from "react";
import movie from "../Movie/movie.json";
import { Component } from "react";
import Slider from "react-slick";
import "./index.css"

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="../images/nextbutton.png"
      onClick={onClick}
      style={{ ...style, display: "block" }}
      className={className}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="../images/prevbutton.png"
      onClick={onClick}
      style={{ ...style, display: "block" }}
      className={className}
    />
  );
}

export default class Movie extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    };
    return (
      <div className="container col-md-8 ">
        <h2 className="text-center">Phim Đang Chiếu</h2>
        <Slider {...settings}>
          {movie.map((item) => (
            <div
              className="card border-light text-center px-2"
              style={{ width: "18rem" }}
            >
              <div className="card-header">
                <a href="#">
                  <img src={item.hinhAnh} alt={item.tenPhim} className="box"/>
                </a>
              </div>
              <div className="card-body">
                <h3>{item.tenPhim}</h3>
                <h4>{item.nam}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
