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
