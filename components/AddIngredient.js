import React, { useState } from "react";
import AddDrinkCSS from "../styles/AddDrink.module.css";

const AddIngredient = (props) => {
  const updateIngredient = (e) => {
    // e.preventDefault();
    console.log("index:", props.index);
    console.log("value:", e.target.value);
    let newArr = [...props.ingredient];
    newArr[props.index][e.target.id] = e.target.value;
    props.setDrinkInfo(newArr);
  };

  const updateOunces = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    let newArr = [...props.ingredient];
    newArr[props.index].ounces = e.target.value;
    props.setDrinkInfo(newArr);
  };
  const updateDecimalOunces = (e) => {
    e.preventDefault();
    let decimalOunces = Number(e.target.id / 100);
    let newArr = [...props.ingredient];
    let truncNum = Math.floor(newArr[props.index].ounces);
    newArr[props.index].ounces = truncNum + decimalOunces;
    props.setDrinkInfo(newArr);
  };

  const updateBottleVolume = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    let newArr = [...props.ingredient];
    newArr[props.index].bottleSize = e.target.value;
    props.setDrinkInfo(newArr);
  };

  const updateBottleType = (e) => {
    e.preventDefault();
    let newArr = [...props.ingredient];
    newArr[props.index].bottleType = e.target.id;
    props.setDrinkInfo(newArr);
  };

  return (
    <li>
      <label>
        Ingredient&#58;&nbsp;
        <input
          type="text"
          placeholder="name of ingredient..."
          id="ingredient"
          onChange={updateIngredient}
          // value={props.ingredient[props.index].ingredient || ""}
        />
      </label>

      <label>
        &nbsp;&nbsp;&nbsp;Ounces&#58;&nbsp;
        <input
          type="number"
          placeholder="enter a number"
          id="ounces"
          onChange={updateOunces}
          value={props.ingredient[props.index].ounces}
        />
        <div className={AddDrinkCSS.dropdown}>
          <button className={AddDrinkCSS.dropbtn}>Fraction</button>
          <div className={AddDrinkCSS.dropdownContent}>
            <a href="#" id="00" onClick={updateDecimalOunces}>
              &#46;00
            </a>
            <a href="#" id="25" onClick={updateDecimalOunces}>
              &#46;25
            </a>
            <a href="#" id="50" onClick={updateDecimalOunces}>
              &#46;50
            </a>
            <a href="#" id="75" onClick={updateDecimalOunces}>
              &#46;75
            </a>
          </div>
        </div>
      </label>

      <label>
        &nbsp;&nbsp;&nbsp;Bottle Size&#58;&nbsp;
        <input
          type="number"
          placeholder="size of bottle..."
          onChange={updateBottleVolume}
          id="bottleSize"
        />
        <div className={AddDrinkCSS.dropdown}>
          <button className={AddDrinkCSS.dropbtn}>Size</button>
          <div className={AddDrinkCSS.dropdownContent}>
            <a href="#" id="mL" onClick={updateBottleType}>
              mL
            </a>
            <a href="#" id="L" onClick={updateBottleType}>
              L
            </a>
            <a href="#" id="Gal" onClick={updateBottleType}>
              Gal
            </a>
          </div>
        </div>
      </label>
    </li>
  );
};

export default AddIngredient;
