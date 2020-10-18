import React from "react"
import styled from "styled-components"
import slide1 from "./assets/slide-1.jpg"
import slide2 from "./assets/slide-2.jpg"
import slide3 from "./assets/slide-3.jpg"
import slide4 from "./assets/slide-4.jpg"
import slide5 from "./assets/slide-5.jpg"
import slide6 from "./assets/slide-6.jpg"

const Root = styled.div`
  position: relative;
  overflow: hidden;
  .row {
    height: 17.5rem;
    position: relative;
    &::before,
    &:after {
      content: "";
      width: 25rem;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: red;
      z-index: 10;
      background: rgba(255, 255, 255, 1);
      background: -moz-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.42) 58%, rgba(255, 255, 255, 0) 100%);
      background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255, 255, 255, 1)), color-stop(58%, rgba(255, 255, 255, 0.42)), color-stop(100%, rgba(255, 255, 255, 0)));
      background: -webkit-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.42) 58%, rgba(255, 255, 255, 0) 100%);
      background: -o-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.42) 58%, rgba(255, 255, 255, 0) 100%);
      background: -ms-linear-gradient(left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.42) 58%, rgba(255, 255, 255, 0) 100%);
      background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.42) 58%, rgba(255, 255, 255, 0) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff', GradientType=1 );
    }
    &::after {
      left: unset;
      right: 0;
      transform: rotate(180deg);
    }
  }
  .wrapper {
    display: flex;
    position: absolute;
  }
  .slider {
    display: flex;
    &::before {
      content: "";
    }
  }
  .slider__slide {
    margin: 0 1rem;
    img {
      width: 25rem;
      border-radius: 0.5rem;
    }
  }
`

export const Slider = () => (
  <Root>
    <div className="row">
      <div className="wrapper">
        <div className="slider">
          <div className="slider__slide">
            <img src={slide1} alt="" />
          </div>
          <div className="slider__slide">
            <img src={slide2} alt="" />
          </div>
          <div className="slider__slide">
            <img src={slide3} alt="" />
          </div>
          <div className="slider__slide">
            <img src={slide4} alt="" />
          </div>
          <div className="slider__slide">
            <img src={slide5} alt="" />
          </div>
          <div className="slider__slide">
            <img src={slide6} alt="" />
          </div>
        </div>
        <div className="slider">
          <div className="slider__slide">
            <img src={slide1} alt="" />
          </div>
          <div className="slider__slide">
            <img src={slide2} alt="" />
          </div>
          <div className="slider__slide">
            <img src={slide3} alt="" />
          </div>
          <div className="slider__slide">
            <img src={slide4} alt="" />
          </div>
          <div className="slider__slide">
            <img src={slide5} alt="" />
          </div>
          <div className="slider__slide">
            <img src={slide6} alt="" />
          </div>
        </div>
      </div>
    </div>
  </Root>
)
