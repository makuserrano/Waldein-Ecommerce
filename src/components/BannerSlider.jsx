import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../sass/components/BannerSlider.scss";
import img1 from "../assets/img/responsive/BannerSlider/main-first.webp";
import img2 from "../assets/img/responsive/BannerSlider/main-second.webp";
import img3 from "../assets/img/responsive/BannerSlider/main-third.webp";
import { ReactComponent as Logo } from "../assets/logo/logo-sinfondo.svg";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          fade: true,
        },
      },
    ],
  };

  return (
    <main className="slider">
      <Slider className="slider__content" {...settings}>
        <div className="slider__img">
          <h2 className="slider__title"> NEW COLLECTION</h2>
          <h4 className="slider__title__h4">2024</h4>
          <img src={img1} className="slider__img__1" alt="img-slider-1" />
        </div>
        <div className="slider__img">
          <img src={img2} className="slider__img__2" alt="img-slider-2" />
          <button className="slider__img__2__btn">SHOP NOW</button>
        </div>
        <div className="slider__img">
          <img src={img3} className="slider__img__3" alt="img-slider-3" />
          <Logo className="slider__img__3__logo" />
        </div>
      </Slider>
    </main>
  );
};

export default SimpleSlider;
