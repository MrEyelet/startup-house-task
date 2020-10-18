import React from "react";

import * as Section from "components/PageSection";

export const RulesAndSuggestions = () => (
  <Section.Wrapper>
    <Section.Content>
      <Section.Header>
        <Section.Title>General rules and suggestions</Section.Title>
        <Section.BulletedList>
          <li>
            If you get stuck on any task - describe what question you'd ask a
            senior developer to get unstuck.
          </li>
          <li>
            You don't need to take care of mobile resolutions - let's assume we
            want to <span>support 1440px or wider screens</span>.
          </li>
          <li>
            Upload your solution to GitHub/GitLab/Bitbucket, and remember to
            carefully plan your <span>git commit history</span> - try to be as
            descriptive as you can.
          </li>
          <li>
            You will get <span>bonus points</span> for deployoing the app to
            Heroku (or Firebase or something similar - you can choose)!
          </li>
        </Section.BulletedList>
      </Section.Header>
    </Section.Content>
  </Section.Wrapper>
);
