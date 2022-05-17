import React from "react";
import styles from "../styles/Home.module.css";
import BatchingCSS from "../styles/batching.module.css";

const batchingComponent = () => {
  return (
    <label>
      I need NAME_OF_DRINK for&nbsp;&nbsp;
      <input type="number" />
      &nbsp;&nbsp;
      <div className={BatchingCSS.dropdown}>
        <button className={BatchingCSS.dropbtn}>Dropdown</button>
        <div className={BatchingCSS.dropdownContent}>
          <a href="#">Gallons</a>
          <a href="#">Ounces</a>
          <a href="#">Servings/People</a>
        </div>
      </div>
    </label>
  );
};

export default batchingComponent;
