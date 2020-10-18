import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"

import { Header } from "components/Header"
import { Home } from "pages/Home"
import { Start } from "pages/Start"
import { Profile } from "pages/Profile"

import { GlobalStyle, theme } from "./styles"

export const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/start">
          <Start />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
)
