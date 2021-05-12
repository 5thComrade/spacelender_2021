import React, { useState } from "react";
import classes from "./BudgetFilter.module.css";

import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "../../store/reducers/ui";
import { resultsActions } from "../../store/reducers/searchResults";

const BudgetFilter = () => {
  //Local State
  const [showBudgetFilterBox, setShowBudgetFilterBox] = useState(false);

  //Global State
  const filterDisplayed = useSelector((state) => state.ui.filterDisplayed);

  const dispatch = useDispatch();

  const showBudgetFilter = () => {
    setShowBudgetFilterBox(true);
    dispatch(uiActions.updateFilterDisplayed());
  };

  const cancelFilterHandler = () => {
    setShowBudgetFilterBox(false);
    dispatch(uiActions.updateFilterDisplayed());
  };

  const budgetApplyHandler = () => {
    dispatch(resultsActions.updateFilterApplied(true));
    dispatch(resultsActions.updateBudgetFilterApplied(true));
    dispatch(resultsActions.updatePriceRange([20000, 25000]));
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
          <div className={classes.PriceRangeDisplay}></div>
          <div className={classes.PriceSlider}></div>
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
