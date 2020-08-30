import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navBar";
import Markdown from "react-markdown";
import whoWeAre from "../content/who-we-are.md";
import { useRef } from "react";
export default function Home() {
  const contentDivRef = useRef(null);
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Head>
          <title>HairySquid Industries</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.screen}>
            <h1 className={styles.title}>hairysquid Industries</h1>

            <h2 className={styles.description}>Need a website?</h2>
            <div className={styles.cardHolder}>
              <button
                className={styles.card}
                onClick={() => {
                  contentDivRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                I sure do!
              </button>
            </div>
          </div>
          <div ref={contentDivRef} className={styles.screen}>
            Work we do
          </div>
          <div className={styles.screen}>
            <Markdown source={whoWeAre} />
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
        </main>

        <footer className={styles.footer}>
          <div className={styles.gridFooter}>
            <div>Copyright HairySquid Industries 2020</div>
            <div>
              Contact <br />
              <ul>
                <li>Email</li>
                <li>Mastodon</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
