import React, { useState } from "react";
import classes from "./BudgetFilter.module.css";

import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "../../store/reducers/ui";
import { resultsActions } from "../../store/reducers/searchResults";

const BudgetFilter = () => {
  //Global State
  const filterDisplayed = useSelector((state) => state.ui.filterDisplayed);
  const budgetRange = useSelector((state) => state.results.priceRange);

  //Local State
  const [showBudgetFilterBox, setShowBudgetFilterBox] = useState(false);
  const [minBudget, setMinBudget] = useState(0);
  const [maxBudget, setMaxBudget] = useState(0);

  const dispatch = useDispatch();

  const showBudgetFilter = () => {
    setMinBudget(budgetRange[0]);
    setMaxBudget(budgetRange[1]);
    setShowBudgetFilterBox(true);
    dispatch(uiActions.updateFilterDisplayed());
  };

  const sliderMinChangeHandler = (e) => {
    setMinBudget(+e.target.value);
  };

  const sliderMaxChangeHandler = (e) => {
    setMaxBudget(+e.target.value);
  };

  const cancelFilterHandler = () => {
    setShowBudgetFilterBox(false);
    dispatch(uiActions.updateFilterDisplayed());
  };

  const budgetApplyHandler = () => {
    dispatch(resultsActions.updateFilterApplied(true));
    dispatch(resultsActions.updateBudgetFilterApplied(true));
    dispatch(resultsActions.updatePriceRange([minBudget, maxBudget]));
    setShowBudgetFilterBox(false);
    dispatch(uiActions.updateFilterDisplayed());
  };

  return (
    <div className={classes.FilterButtonContainer}>
      <button
        onClick={showBudgetFilter}
        className={classes.Button}
        disabled={filterDisplayed}
      >
        Budget
      </button>
      {showBudgetFilterBox ? (
        <div className={classes.BudgetFilterBox}>
          <div className={classes.PriceRangeDisplay}>
            <p className={classes.Min}>Rs. {minBudget}</p>
            <span></span>
            <p className={classes.Max}>Rs. {maxBudget}</p>
          </div>
          <div className={classes.PriceSlider}>
            <div className={classes.Container}>
              <input
                type="range"
                min={budgetRange[0]}
                max={budgetRange[0] + (budgetRange[1] - budgetRange[0]) / 2}
                step="500"
                onChange={sliderMinChangeHandler}
                className={classes.Slider_One}
                value={minBudget}
              />
              <input
                type="range"
                min={budgetRange[0] + (budgetRange[1] - budgetRange[0]) / 2}
                max={budgetRange[1]}
                step="500"
                onChange={sliderMaxChangeHandler}
                className={classes.Slider_Two}
                value={maxBudget}
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
              onClick={budgetApplyHandler}
            >
              Apply
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default BudgetFilter;
