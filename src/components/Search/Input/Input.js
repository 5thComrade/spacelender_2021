import React, { useState } from "react";
import classes from "./Input.module.css";
import Fuse from "fuse.js";
import { useDispatch } from "react-redux";
import { searchActions } from "../../../store/reducers/searchFor";
import Dropdown from "../Dropdown/Dropdown";

const Input = (props) => {
  const { placeholder, searchData, value, name } = props;

  const dispatch = useDispatch();

  const [matchedData, setMatchedData] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);

  const fuseOptions = {
    keys: ["value"],
    threshold: 0.4,
  };

  const handleChange = (e) => {
    const fuse = new Fuse(searchData, fuseOptions);
    setMatchedData(fuse.search(e.target.value));
    if (name === "Occassion") {
      dispatch(searchActions.updateOccassion(e.target.value));
    } else if (name === "Location") {
      dispatch(searchActions.updateLocation(e.target.value));
    } else if (name === "Venue") {
      dispatch(searchActions.updateVenue(e.target.value));
    }
  };

  const handleFocus = () => {
    setShowDropDown(true);
  };

  const handleClick = (value) => {
    if (name === "Occassion") {
      dispatch(searchActions.updateOccassion(value));
    } else if (name === "Location") {
      dispatch(searchActions.updateLocation(value));
    } else if (name === "Venue") {
      dispatch(searchActions.updateVenue(value));
    }
    setShowDropDown(false);
  };

  return (
    <div className={classes.Container}>
      <input
        type="text"
        onChange={handleChange}
        className={classes.Input}
        placeholder={placeholder}
        onFocus={handleFocus}
        value={value}
      />
      <Dropdown
        showDropDown={showDropDown}
        matchedData={matchedData}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Input;
