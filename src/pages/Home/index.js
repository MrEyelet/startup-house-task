import React from "react";

import { Footer } from "components/Footer";

import { Intro, RulesAndSuggestions, Task1, Task2, Task3 } from "./sections";

export const Home = () => (
  <div>
    <Intro />
    <Task1 />
    <Task2 />
    <Task3 />
    <RulesAndSuggestions />
    <Footer />
  </div>
);
