import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { TiSocialInstagram } from "react-icons/ti";
export default function home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a className={styles.mainHeader}>Bartender&#39;s Best Friend</a>
        </h1>
        <p className={styles.code}>Photo from api call will go here</p>
        <p className={styles.description}>
          Get started by choosing an option below
        </p>

        <div className={styles.grid}>
          <a href="/adddrink" className={styles.card}>
            <Link href="adddrink">
              <h2>Add a drink &rarr;</h2>
            </Link>
            <Link href="adddrink">
              <p>Add a drink and calculate batch-sized servings</p>
            </Link>
          </a>

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
