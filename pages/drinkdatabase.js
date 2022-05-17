import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { TiSocialInstagram } from "react-icons/ti";
import styles from "../styles/Home.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import DrinkDatabaseComponent from "../components/DrinkDatabaseComponent.js";
import React, { useState, useEffect } from "react";
import db from "../mongoose/db.js";
import Cocktail from "../mongoose/models.js";

export default function DrinkDatabase({ cocktails }) {
  //map these to list
  console.log(cocktails);
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

        {/* <p className={styles.code}>Photo from api call will go here</p> */}
        <p className={styles.description}>Drink Almanac</p>

        <DrinkDatabaseComponent cocktails={cocktails} />
      </main>
      <div className={styles.lrButtons}>
        <Link href="/">
          <button className={styles.lButton}>Home</button>
        </Link>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    await db();
    const tempCocktails = await Cocktail.find();
    let cocktails = JSON.parse(JSON.stringify(tempCocktails));
    return {
      props: { cocktails },
    };
  } catch (error) {
    console.log("error");
    return {
      notFound: true,
    };
  }
};
