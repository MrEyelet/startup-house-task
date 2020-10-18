import React from "react"
import { Nav } from "components/Nav"

import { Root, Wrapper, Logo, Menu } from "./styles"

export const Header = () => (
  <Root>
    <Wrapper>
      <Logo />
      <Menu>
        <Nav />
      </Menu>
    </Wrapper>
  </Root>
)
