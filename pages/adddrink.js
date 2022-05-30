import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { TiSocialInstagram } from "react-icons/ti";
import styles from "../styles/Home.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import AddDrinkComponent from "../components/AddDrinkComponent.js";
import React, { useState } from "react";

const AddDrink = () => {
  const [lockNextPage, setlockNextPage] = useState(true);
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/">
            <a className={styles.mainHeader}>Bartender&#39;s Best Friend</a>
          </Link>
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

        <p className={styles.description}>Lets add a drink!</p>

        <AddDrinkComponent setlockNextPage={setlockNextPage} />
      </main>
      <div className={styles.lrButtons}>
        <Link href="/">
          <button className={styles.lButton}>Home</button>
        </Link>
        <Link href="/batching">
          <button
            className={styles.rButton}
            disabled={lockNextPage}
            // onClick={setlockNextPage}
          >
            Continue
          </button>
        </Link>
      </div>
    </>
  );
};

export default AddDrink;
