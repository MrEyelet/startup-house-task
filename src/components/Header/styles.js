import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import logoImg from "./assets/logo.svg"

export const Logo = () => (
  <Link to="/" className="logo">
    <img alt="Startup Development House" src={logoImg} />
  </Link>
)

export const Root = styled.header`
  height: 5rem;
`

export const Wrapper = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.size.contentWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .logo {
    display: flex;
    align-items: center;
  }
`
export const Menu = styled.div`
  min-width: 10rem;
  margin-left: auto;
  .menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5rem;
    margin: 0;
    padding-left: 0;
  }
  .menu__item {
    list-style-type: none;
    font-weight: bold;
  }
  .menu__link {
    text-decoration: none;
    color: #000;
    transition: opacity 0.35s ease-in-out;
    :hover {
      opacity: 0.5;
    }
  }
`
