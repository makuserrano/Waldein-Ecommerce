import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carrousel = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    fade: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          fade: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>{children}</Slider>
    </>
  );
};

export default Carrousel;
