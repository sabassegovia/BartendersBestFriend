// import styles from "../styles/Home.module.css";
// import DrinkDatabaseCSS from "../styles/DrinkDatabase.module.css";
import React, { useState, useEffect } from "react";

const IndividualDrinkComponent = (props) => {
  return (
    <li href="#">
      name: {props.cocktail.name} <br></br>ingredients:{" "} {props.ingredients[0]}
      {props.ingredients[1] ? `, ${props.ingredients[1]}` : null}
      {props.ingredients[2] ? `, ${props.ingredients[2]}` : null}
      {props.ingredients[3] ? `, ${props.ingredients[3]}` : null}
      {props.ingredients[4] ? `, ${props.ingredients[4]}` : null}
      {props.ingredients[5] ? `, ${props.ingredients[5]}` : null}
      {props.ingredients[6] ? `, ${props.ingredients[6]}` : null}
      {props.ingredients[7] ? `, ${props.ingredients[7]}` : null}
      {props.ingredients[8] ? `, ${props.ingredients[8]}` : null}
      {props.ingredients[9] ? `, ${props.ingredients[9]}` : null}
    </li>
  );
};

export default IndividualDrinkComponent;
