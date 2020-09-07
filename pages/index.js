import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navBar";
import Markdown from "react-markdown";
import andi from "../content/who-we-are-andi.md";
import kinga from "../content/who-we-are-kinga.md";
import contact from "../content/contact.md";
import approach from "../content/our-approach.md";
import { useRef } from "react";
import ContactForm from "../content/contact-form";
export default function Home() {
  const contentDivRef = useRef(null);
  return (
    <>
      <NavBar />
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
          <div className={styles.team}>
            <div className={styles.screen}>
              <h1 className={styles.title}>hairysquid Industries</h1>

              <h2 className={styles.description}>Need a website?</h2>
              <div className={styles.cardHolder}>
                <button
                  className={styles.card}
                  onClick={() => {
                    contentDivRef.current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  I sure do!
                </button>
              </div>
            </div>
          </div>
          <div ref={contentDivRef} className={styles.screen}>
            <div className={styles.approach}>
              <Markdown source={approach} />
            </div>
          </div>
          <div className={styles.screen}>
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
          {/* <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div> */}
          <div className={styles.screen}>
            {" "}
            <Markdown source={contact} />
            <ContactForm />
          </div>
        </main>

        <footer className={styles.footer}>footer</footer>
      </div>
    </>
  );
}
