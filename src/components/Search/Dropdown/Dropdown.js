import React from "react";
import classes from "./Dropdown.module.css";

const Dropdown = (props) => {
  const { showDropDown, matchedData, handleClick } = props;
  return (
    <ul className={classes.List}>
      {showDropDown &&
        matchedData.slice(0, 5).map((element) => {
          return (
            <button
              key={element.item.key}
              onClick={() => handleClick(element.item.value)}
            >
              {element.item.value}
            </button>
          );
        })}
    </ul>
  );
};

export default Dropdown;
