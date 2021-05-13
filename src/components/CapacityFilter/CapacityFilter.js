import React, { useState } from "react";
import classes from "./CapacityFilter.module.css";

import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "../../store/reducers/ui";
import { resultsActions } from "../../store/reducers/searchResults";

const CapacityFilter = () => {
  //Local State
  const [showCapacityFilterBox, setShowCapacityFilterBox] = useState(false);
  const [minCapacity, setMinCapacity] = useState(0);
  const [maxCapacity, setMaxCapacity] = useState(0);

  //Global State
  const filterDisplayed = useSelector((state) => state.ui.filterDisplayed);
  const capacityRange = useSelector((state) => state.results.capacityRange);

  const dispatch = useDispatch();

  const showCapacityFilter = () => {
    setMinCapacity(capacityRange[0]);
    setMaxCapacity(capacityRange[1]);
    setShowCapacityFilterBox(true);
    dispatch(uiActions.updateFilterDisplayed());
  };

  const sliderMinChangeHandler = (e) => {
    setMinCapacity(+e.target.value);
  };

  const sliderMaxChangeHandler = (e) => {
    setMaxCapacity(+e.target.value);
  };

  const cancelFilterHandler = () => {
    setShowCapacityFilterBox(false);
    dispatch(uiActions.updateFilterDisplayed());
  };

  const capacityApplyHandler = () => {
    dispatch(resultsActions.updateFilterApplied(true));
    dispatch(resultsActions.updateCapacityFilterApplied(true));
    dispatch(resultsActions.updateCapacityRange([minCapacity, maxCapacity]));
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
          <div className={classes.CapacityRangeDisplay}>
            <p className={classes.Min}>{minCapacity}</p>
            <span></span>
            <p className={classes.Max}>{maxCapacity}</p>
          </div>
          <div className={classes.CapacitySlider}>
            <div className={classes.Container}>
              <input
                type="range"
                min={capacityRange[0]}
                max={
                  capacityRange[0] + (capacityRange[1] - capacityRange[0]) / 2
                }
                step="10"
                onChange={sliderMinChangeHandler}
                className={classes.Slider_One}
                value={minCapacity}
              />
              <input
                type="range"
                min={
                  capacityRange[0] + (capacityRange[1] - capacityRange[0]) / 2
                }
                max={capacityRange[1]}
                step="10"
                onChange={sliderMaxChangeHandler}
                className={classes.Slider_Two}
                value={maxCapacity}
              />
            </div>
          </div>
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
