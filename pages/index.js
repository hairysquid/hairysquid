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
export default function Home() {
  const contentDivRef = useRef(null);
  const homeRef = useRef(null);
  const ourApproachRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <NavBar
        sectionRefs={{
          home: homeRef,
          ourApproach: ourApproachRef,
          whoWeAre: whoWeAreRef,
          contact: contactRef,
        }}
      />
      <div className={styles.container}>
        <Head>
          <title>hairysquid Industries</title>
          <link
            rel="icon"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Raleway&display=swap"
            rel="stylesheet"
          />
        </Head>

        <main className={styles.main}>
          <div ref={homeRef} className={styles.screen}>
            <h1 className={styles.title}>Hairysquid Ltd.</h1>

            <h2 className={styles.description}>Need a website?</h2>
            <div className={styles.cardHolder}>
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
            </div>
          </div>
          <div ref={ourApproachRef} className={styles.screen}>
            <div className={styles.approach}>
              <Markdown source={approach} />
            </div>
          </div>
          <div ref={whoWeAreRef} className={styles.screen}>
            <h2 className={styles.title}>Who We Are</h2>
            <div className={styles.team}>
              <div>
                <Markdown source={andi} />
              </div>

              <div>
                <Markdown source={kinga} />
              </div>
            </div>
          </div>

          <div ref={contactRef} className={styles.screen}>
            <div className={styles.contact}>
              <Markdown source={contact} />
              <ContactForm />
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          &copy; copyright {new Date().getFullYear()} Hairysquid Ltd. all rights
          reserved.
        </footer>
      </div>
    </>
  );
}
