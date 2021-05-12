import React, { useState } from "react";
import classes from "./CapacityFilter.module.css";

import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "../../store/reducers/ui";

const CapacityFilter = () => {
  //Local State
  const [showCapacityFilterBox, setShowCapacityFilterBox] = useState(false);

  //Global State
  const filterDisplayed = useSelector((state) => state.ui.filterDisplayed);

  const dispatch = useDispatch();

  const showCapacityFilter = () => {
    setShowCapacityFilterBox(true);
    dispatch(uiActions.updateFilterDisplayed());
  };

  const cancelFilterHandler = () => {
    setShowCapacityFilterBox(false);
    dispatch(uiActions.updateFilterDisplayed());
  };

  const capacityApplyHandler = () => {
    console.log("Capacity Applied");
    setShowCapacityFilterBox(false);
    dispatch(uiActions.updateFilterDisplayed());
  };

  return (
    <div className={classes.FilterButtonContainer}>
      <button
        onClick={showCapacityFilter}
        className={classes.Button}
        disabled={filterDisplayed}
      >
        Capacity
      </button>
      {showCapacityFilterBox ? (
        <div className={classes.CapacityFilterBox}>
          <div className={classes.CapacityRangeDisplay}></div>
          <div className={classes.CapacitySlider}></div>
          <div className={classes.ApplyCancelButton}>
            <button
              className={classes.CancelButton}
              onClick={cancelFilterHandler}
            >
              Cancel
            </button>
            <button
              className={classes.ApplyButton}
              onClick={capacityApplyHandler}
            >
              Apply
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CapacityFilter;
