import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { TiSocialInstagram } from "react-icons/ti";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Bartender&#39;s Best Friend</title>
        <meta
          name="description"
          content="To help bartenders make drinks in batches"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />

      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/lovenbooze_/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TiSocialInstagram />
          lovenbooze_
          <span className={styles.logo}></span>
        </a>
        <a href="/aboutme">My Story</a>
      </footer>
    </div>
  );
}

export default MyApp;
