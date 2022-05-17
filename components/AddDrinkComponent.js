import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import AddDrinkCSS from "../styles/AddDrink.module.css";
import AddIngredient from "./AddIngredient.js";

const AddDrinkComponent = () => {
  const [drinkName, setDrinkName] = useState("");
  const [drinkInfo, setDrinkInfo] = useState([
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
    {
      ingredient: "",
      ounces: 0,
      bottleSize: "",
      bottleType: "",
    },
  ]);
  const MAX_INGREDIENTS = 10;
  const rowsToDisplay = () => {
    let row = [];
    for (let i = 0; i < MAX_INGREDIENTS; i++) {
      row.push(
        <>
          <AddIngredient
            ingredient={drinkInfo}
            index={i}
            setDrinkInfo={setDrinkInfo}
            key={i}
          />
        </>
      );
    }
    return row;
  };
  return (
    <>
      <label>
        Name of drink&#58;&nbsp;
        <input
          type="text"
          placeholder="name of drink..."
          onChange={(e) => setDrinkName(e.target.value)}
          value={drinkName}
        />
      </label>
      <ol>{rowsToDisplay()}</ol>
      {/* <p>&#43;&nbsp;Add another&nbsp;&#43;</p> */}
      {/* <button onClick={validateAndPostData}>submit data</button> */}
    </>
  );
};

export default AddDrinkComponent;
