import React from "react";
import styles from "../styles/Home.module.css";

const ConfirmationComponent = (props) => {
  return (
    <li>
      {props.ingredient.ounces}{" "}Oz. of {props.ingredient.ingredient}&#x2C; using a {props.ingredient.bottleSize}{props.ingredient.bottleType} bottle
    </li>
  );
};

export default ConfirmationComponent;
