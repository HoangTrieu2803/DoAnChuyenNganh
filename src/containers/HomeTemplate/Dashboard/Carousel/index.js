import { render } from "@testing-library/react";
import { extend } from "jquery";
import React from "react";
import { Component } from "react";
import Slider from "react-slick";

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

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    };
    return (
      <div className="container pt-2">
        <Slider {...settings}>
          <div>
            <h3>
              <a href="#">
                <img
                  src="../images/img1.png"
                  alt="img1.png"
                  className="img-fluid"
                />
              </a>
            </h3>
          </div>
          <div>
            <h3>
              <a href="#">
                <img
                  src="../images/img2.png"
                  alt="img2.png"
                  className="img-fluid"
                />
              </a>
            </h3>
          </div>
          <div>
            <h3>
              <a href="#">
                <img
                  src="../images/img3.jpg"
                  alt="img3.png"
                  className="img-fluid"
                />
              </a>
            </h3>
          </div>
          <div>
            <h3>
              <a href="#">
                <img
                  src="../images/img4.jpg"
                  alt="img3.png"
                  className="img-fluid"
                />
              </a>
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
