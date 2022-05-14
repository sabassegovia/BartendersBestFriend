import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { TiSocialInstagram } from "react-icons/ti";
import styles from "../styles/Home.module.css";

const DisplayNewDrink = () => {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/">
            <a className={styles.mainHeader}>Bartender&#39;s Best Friend</a>
          </Link>
        </h1>
        <p className={styles.code}>Photo from api call will go here</p>
        <p className={styles.description}>
          Get started by choosing an option below
        </p>
      </main>
      <div className={styles.lrButtons}>
        <Link href="/adddrink">
          <button className={styles.lButton}>Make Another</button>
        </Link>
        <Link href="/">
          <button className={styles.rButton}>Home</button>
        </Link>
      </div>
    </>
  );
};

export default DisplayNewDrink;
