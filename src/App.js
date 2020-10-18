import React from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import { Header } from "components/Header";
import { Home } from "pages/Home";

import { GlobalStyle, theme } from "./styles";

export const App = () => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    <Header />
    <Home />
  </ThemeProvider>
);
