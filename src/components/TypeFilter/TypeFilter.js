import React, { useState } from "react";
import classes from "./TypeFilter.module.css";

import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "../../store/reducers/ui";
import { resultsActions } from "../../store/reducers/searchResults";

import { IconContext } from "react-icons";
import { IoMdWine } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";

const TypeFilter = () => {
  //Local State
  const [showTypeFilterBox, setShowTypeFilterBox] = useState(false);
  const [typeSelected, setTypeSelected] = useState("");

  //Global State
  const filterDisplayed = useSelector((state) => state.ui.filterDisplayed);

  const dispatch = useDispatch();

  const showTypeFilter = () => {
    setShowTypeFilterBox(true);
    dispatch(uiActions.updateFilterDisplayed());
  };

  const typeSelectHandler = (value) => {
    setTypeSelected(value);
  };

  const cancelFilterHandler = () => {
    setShowTypeFilterBox(false);
    dispatch(uiActions.updateFilterDisplayed());
  };

  const typeApplyHandler = () => {
    if (typeSelected === "Party" || typeSelected === "Conference") {
      dispatch(resultsActions.updateFilterApplied(true));
      dispatch(resultsActions.updateTypeFilterApplied(true));
      dispatch(resultsActions.updateType(typeSelected));
    }
    setShowTypeFilterBox(false);
    dispatch(uiActions.updateFilterDisplayed());
  };

  return (
    <div className={classes.FilterButtonContainer}>
      <button
        onClick={showTypeFilter}
        className={classes.Button}
        disabled={filterDisplayed}
      >
        Type
      </button>
      {showTypeFilterBox ? (
        <div className={classes.TypeFilterBox}>
          <div
            className={
              typeSelected === "Party"
                ? `${classes.Party} ${classes.Active}`
                : `${classes.Party}`
            }
            onClick={() => typeSelectHandler("Party")}
          >
            <div>
              <IconContext.Provider
                value={{ size: "40px", className: classes.PartyIcon }}
              >
                <IoMdWine />
              </IconContext.Provider>
            </div>
            <p>Party</p>
          </div>
          <div
            className={
              typeSelected === "Conference"
                ? `${classes.Conference} ${classes.Active}`
                : `${classes.Conference}`
            }
            onClick={() => typeSelectHandler("Conference")}
          >
            <div>
              <IconContext.Provider
                value={{
                  size: "40px",
                  className: classes.ConferenceIcon,
                }}
              >
                <FaHandshake />
              </IconContext.Provider>
            </div>
            <p>Conference</p>
          </div>
          <div className={classes.ApplyCancelButton}>
            <button
              className={classes.CancelButton}
              onClick={cancelFilterHandler}
            >
              Cancel
            </button>
            <button className={classes.ApplyButton} onClick={typeApplyHandler}>
              Apply
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TypeFilter;
