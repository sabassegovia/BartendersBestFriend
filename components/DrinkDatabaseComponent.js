// import styles from "../styles/Home.module.css";
import DrinkDatabaseCSS from "../styles/DrinkDatabase.module.css";
import React, { useState, useEffect } from "react";
import IndividualDrinkComponent from "./IndividualDrinkComponent.js";

const DrinkDatabaseComponent = (props) => {
  return (
    //end up mapping these individually
    <ol className={DrinkDatabaseCSS.verticalMenu}>
      <li href="#" className={DrinkDatabaseCSS.active}>
        Log of previously batched drinks
      </li>
      {props.cocktails.map((item, idx) => {
        return (
          <IndividualDrinkComponent cocktail={item} key={idx + item.name} ingredients={item.ingredients}/>
        );
      })}
    </ol>
  );
};

export default DrinkDatabaseComponent;
