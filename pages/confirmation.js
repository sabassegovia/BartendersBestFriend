import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { TiSocialInstagram } from "react-icons/ti";
import styles from "../styles/Home.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import ConfirmationComponent from "../components/ConfirmationComponent.js";

const Confirmation = () => {
  const confirmDrink = async () => {
    let parsedData = JSON.parse(localStorage.getItem("dataArray"));
    let parsedName = JSON.parse(localStorage.getItem("drinkName"));

    // console.log(parsedData, parsedName);
    let ingredientsArray = [];
    let ouncesArray = [];
    let bottleSizeArray = [];
    let bottleTypeArray = [];
    parsedData.forEach((item, idx) => {
      ingredientsArray.push(item.ingredient);
      ouncesArray.push(item.ounces);
      bottleSizeArray.push(item.bottleSize);
      bottleTypeArray.push(item.bottleType);
    });

    const response = await fetch("api/cocktails", {
      method: "post",
      body: JSON.stringify({
          name: parsedName,
          ingredients: ingredientsArray,
          ounces: ouncesArray,
          bottleSize: bottleSizeArray,
          bottleType: bottleTypeArray,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    // console.log(data);
  };
  // const convertDatatoString = () => {
  //   console.log(JSON.parse(localStorage.getItem("dataArray")));
  // };
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
        <p className={styles.description}>Here&#39;s what we have&#58;</p>
        We will calculate {JSON.parse(
          localStorage.getItem("drinkName")
        )} for {JSON.parse(localStorage.getItem("quantity"))}{" "}
        {localStorage.getItem("unit")}, a single serving consists of&#58;
        <br></br>
        <ol>
          {JSON.parse(localStorage.getItem("dataArray")).map(
            (ingredient, i) => {
              return <ConfirmationComponent ingredient={ingredient} key={i} />;
            }
          )}
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
