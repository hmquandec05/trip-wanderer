import React from "react";
import image1 from "../Asset/test/sea.jpg";
import image2 from "../Asset/test/micaela-parente-V97GBzRkqEg-unsplash.jpg";
import image3 from "../Asset/test/rowan-heuvel-iz8MNOJWW1c-unsplash.jpg";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const SlideContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
  position: relative;
`;

const SlideImageStyled = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const SlideImage = () => {
  return (
    <SlideContainer>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <SlideImageStyled src={image1} alt="" />
          </div>
          <div className="carousel-item">
            <SlideImageStyled src={image2} alt="" />
          </div>
          <div className="carousel-item">
            <SlideImageStyled src={image3} alt="" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </SlideContainer>
  );
};

export default SlideImage;
