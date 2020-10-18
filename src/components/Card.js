import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"

const Root = styled.div`
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
  }
`

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
    }
  }

  return (
    <Root>
      <p>{userData.name}</p>
      <a href={userData.html_url} target="blank">
        <img src={userData.avatar_url} alt={userData.login} />
      </a>
    </Root>
  )
}

export default Card
