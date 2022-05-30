import React from "react";
import styles from "../styles/Home.module.css";

const DisplayNewDrink = (props) => {
  return <li>NUMBER bottle of {props.ingredient.ingredient}, TOTALOZ</li>;
};

export default DisplayNewDrink;
