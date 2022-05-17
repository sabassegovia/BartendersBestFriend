import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { TiSocialInstagram } from "react-icons/ti";
import styles from "../styles/Home.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import ConfirmationComponent from "../components/ConfirmationComponent.js";

const Confirmation = () => {
  const confirmDrink = async () => {
    const response = await fetch("api/cocktails", {
      method: "post",
      body: JSON.stringify({
        body: "hello",
        created_on: Date.now(),
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
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
        <p className={styles.description}>Here&#39;s what we have&#58;</p>
        <p>
          We will calculate DRINK_NAME for GALLONS/OUNCES/SERVINGS, a single
          serving consists of&#58;<br></br>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#40;Make
          your final changes here&#41;
        </p>
        <ol>
          <ConfirmationComponent />
          <ConfirmationComponent />
          <ConfirmationComponent />
        </ol>
      </main>

      <div className={styles.lrButtons}>
        <Link href="/batching">
          <button className={styles.lButton}>Return</button>
        </Link>
        <Link href="/displaynewdrink">
          <button onClick={confirmDrink} className={styles.rButton}>
            Looks Good
          </button>
        </Link>
      </div>
    </>
  );
};

export default Confirmation;
