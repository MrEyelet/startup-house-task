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
