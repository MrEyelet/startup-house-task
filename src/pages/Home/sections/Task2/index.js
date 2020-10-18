import React from "react";

import { ExamplePreview } from "components/ExamplePreview";
import * as Section from "components/PageSection";

import previewImg from "./assets/navbar.png";

export const Task2 = () => (
  <Section.Wrapper>
    <Section.Content>
      <Section.Header>
        <Section.Title>Task #2</Section.Title>
        <Section.Description>
          After the completion of the first task our home page is starting to look nice. But
          we're planning to add a few more pages in the future. Could you prepare a
          simple top navigation component, as shown in the screen below?
        </Section.Description>
        <ExamplePreview src={previewImg} />
        <Section.Description>
          It should consist of two items - <span>Start</span> and{" "}
          <span>My Profile</span>, and be located in the top-right corner.
        </Section.Description>
      </Section.Header>
    </Section.Content>
  </Section.Wrapper>
);
