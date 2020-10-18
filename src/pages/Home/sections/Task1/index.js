import React from "react";

import { ExamplePreview } from "components/ExamplePreview";
import * as Section from "components/PageSection";

import previewImg from "./assets/slider.gif";

export const Task1 = () => (
  <Section.Wrapper>
    <Section.Content>
      <Section.Header>
        <Section.Title>Task #1</Section.Title>
        <Section.Description>
          First task! We want you to make a slider. It should look
          (more or less) like on the gif.
        </Section.Description>
        <Section.Description>
          You will find all necessary assets in the <span>assets</span> folder in
          the root of the project.
          <br />
          And remember - <span>do not use</span> any external library for
          this task.
        </Section.Description>
        <ExamplePreview src={previewImg} />
        <Section.Description>
          It doesn't have to be identical - but do your best to make it look
          good!
        </Section.Description>
        <br />
        <Section.Description>
          Place your slider below this paragraph.
        </Section.Description>
      </Section.Header>
      {/* Please, put your `<Slider />` component here. */}
    </Section.Content>
  </Section.Wrapper>
);
