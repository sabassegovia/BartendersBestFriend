// import styles from "../styles/Home.module.css";
// import DrinkDatabaseCSS from "../styles/DrinkDatabase.module.css";
import React, { useState, useEffect } from "react";

const IndividualDrinkComponent = (props) => {
  return (
    <li href="#">
      name: {props.cocktail.name} ingredients: {props.cocktail.ingredients}
    </li>
  );
};

export default IndividualDrinkComponent;
