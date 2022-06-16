import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import IndexCSS from "../styles/index.module.css";
import { TiSocialInstagram } from "react-icons/ti";
import { BiSearchAlt2 } from "react-icons/bi";

export default function home({ IGData }) {
  // console.log(IGData.data[0]);
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a className={styles.mainHeader}>Bartender&#39;s Best Friend</a>
        </h1>

        <div className={styles.topnav}>
          <Link href="/">
            <a className={styles.active}>Home</a>
          </Link>
          <Link href="/drinkdatabase">
            <a>Database</a>
          </Link>
          <Link href="/aboutme">
            <a>About</a>
          </Link>
          <a
            href="https://www.instagram.com/lovenbooze_/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Social
          </a>
          <div className={styles.searchContainer}>
            <input type="text" placeholder="Search drink.." />
            <button type="submit">
              <BiSearchAlt2 />
            </button>
          </div>
        </div>

        <div className={IndexCSS.photoMain}>
          <img
            src={IGData.data[9].media_url}
            alt="cocktail photo"
            width="500px"
            height="500px"
          />
        </div>
        <p>{IGData.data[9].caption}</p>
        <a
          className={IndexCSS.viewPostLink}
          href={IGData.data[9].permalink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Post
        </a>
        <div className={styles.grid}>
          {/* <a href="/adddrink" className={styles.card}> */}
          <Link href="adddrink" className={styles.card}>
            <h2>Add a drink &rarr;</h2>
          </Link>
          <Link href="adddrink">
            <p>Add a drink and calculate batch-sized servings</p>
          </Link>
          {/* </a> */}

          <a href="drinkdatabase" className={styles.card}>
            <Link href="drinkdatabase">
              <h2>Drink database &rarr;</h2>
            </Link>
            <Link href="drinkdatabase">
              <p>View or search for previously made drinks!</p>
            </Link>
          </a>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.NEXT_IG_TOKEN}`;

  const data = await fetch(url);
  const IGData = await data.json();

  // console.log(IGData);

  return {
    props: {
      IGData,
    },
  };
};
