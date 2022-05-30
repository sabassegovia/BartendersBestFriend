import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import { TiSocialInstagram } from "react-icons/ti";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
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
        <Link href="/aboutme">My Story</Link>
      </footer>
    </div>
  );
}
