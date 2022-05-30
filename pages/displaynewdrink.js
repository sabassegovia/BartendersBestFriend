import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { TiSocialInstagram } from "react-icons/ti";
import styles from "../styles/Home.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import DisplayNewDrinkComponent from "../components/DisplayNewDrinkComponent.js";

const DisplayNewDrink = () => {
  const clearLocalStorage = () => {
    localStorage.clear();
  };
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/">
            <a onClick={clearLocalStorage} className={styles.mainHeader}>
              Bartender&#39;s Best Friend
            </a>
          </Link>
        </h1>

        <div className={styles.topnav}>
          <Link href="/">
            <a onClick={clearLocalStorage} className={styles.active}>
              Home
            </a>
          </Link>
          <Link href="/drinkdatabase">
            <a onClick={clearLocalStorage}>Database</a>
          </Link>
          <Link href="/aboutme">
            <a onClick={clearLocalStorage}>About</a>
          </Link>
          <a
            onClick={clearLocalStorage}
            href="https://www.instagram.com/lovenbooze_/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Social
          </a>
          <div className={styles.searchContainer}>
            <input type="text" placeholder="Search drink.." />
            <button onClick={clearLocalStorage} type="submit">
              <BiSearchAlt2 />
            </button>
          </div>
        </div>

        {/* <p className={styles.code}>Photo from api call will go here</p> */}
        <p className={styles.description}>
          Here&#39;s what you&#39;ll need to make{" "}
          {JSON.parse(localStorage.getItem("drinkName"))}
        </p>
        <ol>
          {JSON.parse(localStorage.getItem("dataArray")).map(
            (ingredient, i) => {
              return (
                <DisplayNewDrinkComponent ingredient={ingredient} key={i} />
              );
            }
          )}
        </ol>
      </main>
      <div className={styles.lrButtons}>
        <Link href="/adddrink">
          <button onClick={clearLocalStorage} className={styles.lButton}>
            Make Another
          </button>
        </Link>
        <Link href="/">
          <button onClick={clearLocalStorage} className={styles.rButton}>
            Home
          </button>
        </Link>
        <Link href="/drinkdatabase">
          <button onClick={clearLocalStorage} className={styles.rButton}>
            Drink&#39;s Archive
          </button>
        </Link>
      </div>
    </>
  );
};

export default DisplayNewDrink;
