/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import MainContainer from "../../components/mainContainer";
import NavBar from "../../components/navBar";
import { useRef } from "react";
import ImageContainer from "../../components/imageContainer";

export default function I3() {
  const contentDivRef = useRef(null);
  const homeRef = useRef(null);
  const ourApproachRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const ourProjects = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <NavBar
        link
        sectionRefs={{
          home: homeRef,
          ourApproach: ourApproachRef,
          whoWeAre: whoWeAreRef,
          ourProjects: ourProjects,
          contact: contactRef,
        }}
      />
      <MainContainer>
        I3
        <div
          css={css`
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
          `}
        >
          <ImageContainer src="/img/i3home.png" imgHeight="500px;">
            bla bla bla
          </ImageContainer>
          <ImageContainer src="/img/i3c.png" imgHeight="500px;">
            bla bla bla
          </ImageContainer>
          <ImageContainer src="/img/i3.png" imgHeight="500px;">
            bla bla bla
          </ImageContainer>
          <ImageContainer src="/img/i3b.png" imgHeight="500px;">
            bla bla bla
          </ImageContainer>
        </div>
      </MainContainer>
    </>
  );
}
