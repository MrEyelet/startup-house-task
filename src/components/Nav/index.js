import React from "react"
import { Link } from "react-router-dom"
import { Menu } from "./styles"

export const Nav = () => (
  <Menu>
    <ul>
      <li>
        <Link to="/start">Start</Link>
      </li>
      <li>
        <Link to="/profile">My Profile</Link>
      </li>
    </ul>
  </Menu>
)
