import React from "react";

const Slider = () => {
  return (
    <div className="container">
      <div id="carouselClimb" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="5000">
            <img
              src="https://climbing-shop.s3-eu-west-1.amazonaws.com/slider/slider1.jpg"
              className="d-block mx-auto"
              alt="climbing"
            />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img
              src="https://climbing-shop.s3-eu-west-1.amazonaws.com/slider/slider2.jpg"
              className="d-block mx-auto"
              alt="climbing"
            />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img
              src="https://climbing-shop.s3-eu-west-1.amazonaws.com/slider/slider3.jpg"
              className="d-block mx-auto"
              alt="climbing"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselClimb"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselClimb"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Slider;
