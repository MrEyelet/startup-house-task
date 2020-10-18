import React from "react"
import styled from "styled-components"
import slide1 from "./assets/slide-1.jpg"
import slide2 from "./assets/slide-2.jpg"
import slide3 from "./assets/slide-3.jpg"
import slide4 from "./assets/slide-4.jpg"
import slide5 from "./assets/slide-5.jpg"
import slide6 from "./assets/slide-6.jpg"

const Slideshow = styled.div`
  position: relative;
  overflow: hidden;
  .wrapper {
    display: flex;
    width: var(--marquee-width);
    margin: 0 auto 4rem;
    overflow: hidden;
    &::before,
    &:after {
      content: "";
      width: 20vw;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 10;
    }
    &:before {
      left: 0;
      background: linear-gradient(to right, #f8fafd 0%, transparent 100%);
    }
    &::after {
      left: unset;
      right: 0;
      background: linear-gradient(to left, #f8fafd 0%, transparent 100%);
    }
  }
  .slider {
    display: flex;
    animation: scroll var(--marquee-animation-dur) infinite linear;
    :hover {
      animation-play-state: paused;
    }
  }
  .slider__slide {
    flex-shrink: 0;
    width: calc(var(--marquee-el-width) - 1rem);
    margin-right: 1rem;
    img {
      width: 100%;
      border-radius: 0.5rem;
    }
  }
  @keyframes scroll {
    0% {
      transform: translateX(calc(-1 * var(--marquee-el-width) * var(--marquee-items)));
    }
    100% {
      transform: translateX(0);
    }
  }
`

export const Marquee = () => (
  <Slideshow>
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
        </div>
      </div>
    </div>
  </Slideshow>
)
