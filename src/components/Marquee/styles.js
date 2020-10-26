import styled from "styled-components"

export const Slideshow = styled.div`
  position: relative;
  overflow: hidden;
  div {
    display: flex;
    width: var(--marquee-width);
    margin: 0 auto 4rem;
    &::before,
    &::after {
      content: "";
      width: 20vw;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 10;
    }
    &::before {
      left: 0;
      background: linear-gradient(to right, #f8fafd 0%, transparent 100%);
    }
    &::after {
      left: unset;
      right: 0;
      background: linear-gradient(to left, #f8fafd 0%, transparent 100%);
    }
  }
  ul {
    display: flex;
    margin: 0;
    animation: scroll var(--marquee-animation-dur) infinite linear;
    :hover {
      animation-play-state: paused;
      img {
        opacity: 0.5;
        transition: 0.25s opacity ease-in-out;
      }
    }
  }
  li {
    flex-shrink: 0;
    width: calc(var(--marquee-el-width) - 1rem);
    margin-right: 1rem;
    list-style-type: none;
    img {
      width: 100%;
      border-radius: 0.5rem;
      :hover {
        opacity: 1;
      }
    }
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-1 * var(--marquee-el-width) * var(--marquee-items)));
    }
  }
`
