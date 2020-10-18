import React from "react";

import { ExamplePreview } from "components/ExamplePreview";
import * as S from "components/PageSection";

import previewImg from "./assets/card.png";

export const Task3 = () => (
  <S.Wrapper>
    <S.Content>
      <S.Header>
        <S.Title>Task #3</S.Title>
        <S.Description>
          It's almost over! So you've created the top navigation - now we'd like
          you to add a new, simple page.
        </S.Description>
        <S.BulletedList>
          <li>
            It should be accessible under <span>/my-profile</span> route.
          </li>
          <li>
            It should consist of the <span>{"<Header />"}</span> component and
            another component displaying info about a GitHub user.
          </li>
          <li>Ideally, you should use your own username for fetching data.</li>
          <li>
            The content should consist of two items - the <span>name</span> of
            the user and their <span>avatar_url</span>.
          </li>
          <li>
            You <span>must</span> use the GitHub users API (
            <a
              href="https://developer.github.com/v3/users/#get-a-single-user"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here to view the docs
            </a>
            ).
          </li>
          <li>
            The user data <span>must be fetched</span> from the API when the
            page is opened.
          </li>
          <li>
            You can install any dependency you need to accomplish this task.
          </li>
        </S.BulletedList>
        <br />
        <S.Description>
          This simple card should look as shown in the screen below.
        </S.Description>
        <ExamplePreview src={previewImg} />
        <S.Description>
          If you have some time left, you can add a loader!
        </S.Description>
      </S.Header>
    </S.Content>
  </S.Wrapper>
);
