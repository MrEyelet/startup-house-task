import styled from "styled-components"

export const Root = styled.div`
  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
  img {
    max-width: 15rem;
    width: 100%;
    border-radius: 0.5rem;
    -webkit-box-shadow: 0px 33px 86px -47px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 33px 86px -47px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 33px 86px -47px rgba(0, 0, 0, 0.75);
    transition: 0.5s ease-in-out;
    transition-property: box-shadow, transform;
    :hover {
      box-shadow: none;
      transform: scale(0.98);
    }
  }
`
export const Modal = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 20rem;
  box-shadow: 0px 33px 86px -47px rgba(0, 0, 0, 0.75);
  background-color: #fff;
`
