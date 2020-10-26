import React, { useState, useEffect } from "react"
import { Root, Modal } from "./styles"
import axios from "axios"

function Card() {
  const gitHubUserUrl = "https://api.github.com/users/mreyelet"
  const [userData, setUserData] = useState({})

  useEffect(() => {
    getGiHubUser()
  }, [])

  const getGiHubUser = async () => {
    try {
      // console.log("everything ok")
      const response = await axios.get(gitHubUserUrl)
      setUserData(response.data)
    } catch {
      // console.log("there was an error")

      const error = document.querySelector(".modal")
      setUserData((error.style.display = "flex"))
    }
  }

  return (
    <Root>
      <p>{userData.name}</p>
      <a href={userData.html_url} target="blank">
        <img src={userData.avatar_url} alt={userData.login} />
      </a>
      <Modal className="modal">
        <p>There was a problem with a server and the content could not be displayed.</p>
      </Modal>
    </Root>
  )
}

export default Card
