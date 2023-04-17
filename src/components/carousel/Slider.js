import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      centerPadding: "10%",
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplayspeed: 3000,
      focusOnSelect: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 956,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "20%",
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "20%",
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1420,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "20%",
            slidesToShow: 2,
          },
        },
      ],
    };
    return (
      <div className="slider">
        <div className="slider-title">
          <h1 id="screens"> Unique App Screens </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Repellendus dicta, repellat modi ratione sed vitae!
          </p>
        </div>
        <Slider {...settings} className="slider">
          <div>
            <img
              src="https://team11cricket.com/web/images/portfolio/2.jpg"
              alt="rrr"
            />
          </div>
          <div>
            <img
              src="https://team11cricket.com/web/images/portfolio/2.jpg"
              alt="rrr"
            />
          </div>
          <div>
            <img
              src="https://team11cricket.com/web/images/portfolio/2.jpg"
              alt="rrr"
            />
          </div>
          <div>
            <img
              src="https://team11cricket.com/web/images/portfolio/2.jpg"
              alt="rrr"
            />
          </div>
          <div>
            <img
              src="https://team11cricket.com/web/images/portfolio/2.jpg"
              alt="rrr"
            />
          </div>
          <div>
            <img
              src="https://team11cricket.com/web/images/portfolio/2.jpg"
              alt="rrr"
            />
          </div>
          <div>
            <img
              src="https://team11cricket.com/web/images/portfolio/2.jpg"
              alt="rrr"
            />
          </div>
          <div>
            <img
              src="https://team11cricket.com/web/images/portfolio/2.jpg"
              alt="rrr"
            />
          </div>
          <div>
            <img
              src="https://team11cricket.com/web/images/portfolio/2.jpg"
              alt="rrr"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
