import React, { useEffect } from "react"
import { Slideshow } from "./styles"

export const Marquee = () => {
  const array = ["slide-1", "slide-2", "slide-3", "slide-4", "slide-5", "slide-6"]

  const images = array.map(image => {
    return (
      <li key={image}>
        <img src={require(`./assets/${image}.jpg`)} alt={image} />
      </li>
    )
  })

  useEffect(() => {
    const root = document.documentElement
    const marqueeItemsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-display")
    const marquee = document.querySelector(".marquee")
    root.style.setProperty("--marquee-items", marquee.children.length)

    for (let i = 0; i < marqueeItemsDisplayed; i++) {
      marquee.appendChild(marquee.children[i].cloneNode(true))
    }
  })

  return (
    <Slideshow>
      <div>
        <ul className="marquee">{images}</ul>
      </div>
    </Slideshow>
  )
}
