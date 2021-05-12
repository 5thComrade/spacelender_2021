import React from "react";
import classes from "./SortFilter.module.css";

import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "../../store/reducers/ui";

const SortFilter = () => {
  const sortHighToLowStatus = useSelector((state) => state.ui.highToLow);
  const filterDisplayed = useSelector((state) => state.ui.filterDisplayed);
  const dispatch = useDispatch();

  const changeSort = () => {
    dispatch(uiActions.updateSort());
  };

  return (
    <div className={classes.FilterButtonContainer}>
      <button
        onClick={changeSort}
        className={classes.Button}
        disabled={filterDisplayed}
      >
        Sort by: {sortHighToLowStatus ? "High To Low" : "Low To High"}
      </button>
    </div>
  );
};

export default SortFilter;
