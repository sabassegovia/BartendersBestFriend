// import styles from "../styles/Home.module.css";
import DrinkDatabaseCSS from "../styles/DrinkDatabase.module.css";
import React, { useState, useEffect } from "react";
import IndividualDrinkComponent from "./IndividualDrinkComponent.js";

const DrinkDatabaseComponent = (props) => {
  // const [dbInfo, setDBInfo] = useState([]);
  // const getDBList = async () => {
  //   const response = await fetch("/api/cocktails");
  //   const data = await response.json();
  //   console.log(data);
  //   setDBInfo([data.name]);
  // };
  return (
    //end up mapping these individually
    <ol className={DrinkDatabaseCSS.verticalMenu}>
      <li href="#" className={DrinkDatabaseCSS.active}>
        Log of previously batched drinks
      </li>
      {props.cocktails.map((item, idx) => {
        return (
          <IndividualDrinkComponent cocktail={item} key={idx + item.name} />
        );
      })}
    </ol>
  );
};

export default DrinkDatabaseComponent;
