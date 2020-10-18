import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

function Card() {
  const gitHubUserUrl = "https://api.github.com/users/mreyelet"
  const [userData, setUserData] = useState({})

  useEffect(() => {
    getGiHubUser()
  }, [])

  const getGiHubUser = async () => {
    try {
      console.log("everything ok")
      const response = await axios.get(gitHubUserUrl)
      setUserData(response.data)
    } catch {
      console.log("there was an error")
    }
  }

  return (
    <>
      <p>{userData.name}</p>
      <a href={userData.html_url} target="blank">
        <img src={userData.avatar_url} alt={userData.login} />
      </a>
    </>
  )
}

export default Card
