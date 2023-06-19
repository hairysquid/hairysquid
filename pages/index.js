/** @jsx jsx */

import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navBar";
import Markdown from "react-markdown";
import andi from "../content/who-we-are-andi.md";
import kinga from "../content/who-we-are-kinga.md";
import contact from "../content/contact.md";
import approach from "../content/our-approach.md";
import { useRef } from "react";
import ContactForm from "./contact-form";
import ScreenContainer from "../components/screenContainer";
import CardHolder from "../components/cardHolder";
import MainContainer from "../components/mainContainer";
import TeamContainer from "../components/teamContainer";
import TitleText from "../components/titleText";
import ApproachContainer from "../components/approachContainer";
import ContactContainer from "../components/contactContainer";
import DescriptionText from "../components/descriptionText";
import Footer from "../components/footer";
import { css, jsx } from "@emotion/react";
import OurProjectsContainer from "../components/ourProjectsContainer";
import ContractCard from "../components/contractCard";
export default function Home() {
  const contentDivRef = useRef(null);
  const homeRef = useRef(null);
  const ourApproachRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const ourProjects = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <NavBar
        sectionRefs={{
          home: homeRef,
          ourApproach: ourApproachRef,
          whoWeAre: whoWeAreRef,
          ourProjects: ourProjects,
          contact: contactRef,
        }}
      />
      <div
        css={css`
          min-height: 100vh;
        `}
      >
        <Head>
          <title>hairysquid Industries</title>
          <link
            rel="icon"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Raleway&display=swap"
            rel="stylesheet"
          />
        </Head>

        <MainContainer>
          <ScreenContainer ref={homeRef}>
            <TitleText>
              <h1>Hairysquid Ltd.</h1>
            </TitleText>

            <DescriptionText>
              <h2>Need a website?</h2>
            </DescriptionText>
            <CardHolder>
              <button
                className={styles.button}
                style={{ marginTop: "1em" }}
                onClick={() => {
                  ourApproachRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                I sure do!
              </button>
            </CardHolder>
          </ScreenContainer>
          <ScreenContainer ref={ourApproachRef}>
            <ApproachContainer>
              <Markdown source={approach} />
            </ApproachContainer>
          </ScreenContainer>
          <ScreenContainer ref={whoWeAreRef}>
            <TitleText>
              <h2>Who We Are</h2>
            </TitleText>
            <TeamContainer>
              <div>
                <Markdown source={andi} />
              </div>

              <div>
                <Markdown source={kinga} />
              </div>
            </TeamContainer>
          </ScreenContainer>
          <ScreenContainer ref={ourProjects}>
            <TitleText>Our Projects</TitleText>
            <OurProjectsContainer>
              <ContractCard title="UKEF" link="/contracts/ukef">
                This was a puff piece for the brexit gov
              </ContractCard>
              <ContractCard title="Human Threads" link="/contracts/human">
                This was a contract for a welsh muesum during covid
              </ContractCard>
              <ContractCard title="I3" link="/contracts/i3">
                A project that less people seen than worked on for meta
              </ContractCard>
            </OurProjectsContainer>
          </ScreenContainer>

          <ScreenContainer ref={contactRef}>
            <ContactContainer>
              <Markdown source={contact} />
              <ContactForm />
            </ContactContainer>
          </ScreenContainer>
        </MainContainer>

        <Footer />
      </div>
    </>
  );
}
