/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import MainContainer from "../../components/mainContainer";
import NavBar from "../../components/navBar";
import { useRef } from "react";
import ImageContainer from "../../components/imageContainer";

export default function Human() {
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
        HUMAN THREADS
        <div
          css={css`
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
          `}
        >
          <ImageContainer src="/img/human1.png" imgHeight="500px;">
            bla bla bla
          </ImageContainer>
          <ImageContainer src="/img/human2.png" imgHeight="500px;">
            bla bla bla
          </ImageContainer>
          <ImageContainer src="/img/human3.png" imgHeight="400px;">
            bla bla bla
          </ImageContainer>
          <ImageContainer src="/img/human7.png" imgHeight="400px;">
            bla bla bla
          </ImageContainer>
        </div>
      </MainContainer>
    </>
  );
}
