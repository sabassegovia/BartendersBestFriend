import React from "react";
import styles from "../styles/Home.module.css";
import BatchingCSS from "../styles/Batching.module.css";

const batchingComponent = () => {
  //freaks out when page is refreshed at this point. says localstorage is undefined
  let drinkName = localStorage.getItem("drinkName") || "";

  // const batchSelection = (e) => {
  //   console.log("in the batch selection");
  //   console.log(e.target.id);
  //   localStorage.setItem("unit", e.target.id);
  // };

  return (
    <label>
      I need{" "}
      <span className={BatchingCSS.drinkNameCSS}>{JSON.parse(drinkName)} </span>{" "}
      for&nbsp;&nbsp;
      <input
        min="1"
        type="number"
        onChange={(e) => localStorage.setItem("quantity", e.target.value)}
      />
      &nbsp;&nbsp;
      <div className={BatchingCSS.dropdown}>
        <button className={BatchingCSS.dropbtn}>Dropdown</button>
        <div className={BatchingCSS.dropdownContent}>
          <a
            href="#"
            id="gallons"
            onClick={(e) => localStorage.setItem("unit", e.target.id)}
          >
            Gallons
          </a>
          <a
            href="#"
            id="ounces"
            onClick={(e) => localStorage.setItem("unit", e.target.id)}
          >
            Ounces
          </a>
          <a
            href="#"
            id="servings"
            onClick={(e) => localStorage.setItem("unit", e.target.id)}
          >
            Servings/People
          </a>
        </div>
      </div>
    </label>
  );
};

export default batchingComponent;
