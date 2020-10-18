import React from "react"
import { Link } from "react-router-dom"

export const Nav = () => (
  <ul className="menu">
    <li className="menu__item">
      <Link to="/start" className="menu__link">
        Start
      </Link>
    </li>
    <li className="menu__item">
      <Link to="/profile" className="menu__link">
        My Profile
      </Link>
    </li>
  </ul>
)
