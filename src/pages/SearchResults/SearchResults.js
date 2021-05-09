import React, { useState } from "react";
import classes from "./SearchResults.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import VenueCard from "../../components/VenueCard/VenueCard";
import {
  sortLowToHigh,
  sortHighToLow,
} from "../../utilityFunctions/sortResults";
import { resultsActions } from "../../store/reducers/searchResults";
import { IconContext } from "react-icons";
import { IoMdWine } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";

//Dummy Data
import data from "../../dummyData";

const SearchResults = () => {
  const results = useSelector((state) => state.results.results);
  const sortHighToLowStatus = useSelector((state) => state.results.highToLow);

  const dispatch = useDispatch();

  //local state
  const [showFilterOptions, setShowFilterOptions] = useState({
    showTypeFilter: false,
    showBudgetFilter: false,
    showCapacityFilter: false,
    showAdvancedFilter: false,
  });
  const [typeSelected, setTypeSelected] = useState({
    party: false,
    conference: false,
  });

  //change here to use either dummyData or results state
  const finalResults = results;

  const noResults = () => {
    return (
      <div className={classes.NoResults}>
        <p>We did not find any space that could meet your requirements.</p>
        <Link to="/" className={classes.homeButton}>
          Find Space
        </Link>
      </div>
    );
  };

  const showResults = () => {
    const changeSort = () => {
      dispatch(resultsActions.updateSort());
    };

    const filterShowHandler = (value) => {
      if (value === "type") {
        setShowFilterOptions({
          showTypeFilter: true,
          showBudgetFilter: false,
          showCapacityFilter: false,
          showAdvancedFilter: false,
        });
      }
    };

    const cancelFilterHandler = () => {
      setShowFilterOptions({
        showTypeFilter: false,
        showBudgetFilter: false,
        showCapacityFilter: false,
        showAdvancedFilter: false,
      });
    };

    const applyFilterHandler = (value) => {
      if (value === "type") {
        if (!typeSelected.party && !typeSelected.conference) {
          setShowFilterOptions({
            showTypeFilter: false,
            showBudgetFilter: false,
            showCapacityFilter: false,
            showAdvancedFilter: false,
          });
        } else if (typeSelected.party) {
          console.log("Its Party");
          setShowFilterOptions({
            showTypeFilter: false,
            showBudgetFilter: false,
            showCapacityFilter: false,
            showAdvancedFilter: false,
          });
        } else {
          console.log("Its Conference");
          setShowFilterOptions({
            showTypeFilter: false,
            showBudgetFilter: false,
            showCapacityFilter: false,
            showAdvancedFilter: false,
          });
        }
      }
    };

    const typeSelectHandler = (value) => {
      if (value === "party") {
        setTypeSelected({
          party: true,
          conference: false,
        });
      } else {
        setTypeSelected({
          party: false,
          conference: true,
        });
      }
    };

    return (
      <div className={classes.SearchResults}>
        <div className={classes.Results}>
          <p className={classes.GrayOut}>{data.length} Properties</p>
          <p>Places in Location</p>
          <div className={classes.FilterButtons}>
            {/* SORT FILTER */}
            <div className={classes.SortFilter}>
              <button onClick={changeSort} className={classes.Button}>
                Sort by: {sortHighToLowStatus ? "High To Low" : "Low To High"}
              </button>
            </div>

            {/* TYPE FILTER */}
            <div className={classes.TypeFilter}>
              <button
                className={classes.Button}
                onClick={() => filterShowHandler("type")}
              >
                Type
              </button>
              {showFilterOptions.showTypeFilter ? (
                <div
                  className={`${classes.FilterBox} ${classes.Type_Filter_Box}`}
                >
                  <div
                    className={
                      typeSelected.party
                        ? `${classes.PartyType} ${classes.Active}`
                        : `${classes.PartyType}`
                    }
                    onClick={() => typeSelectHandler("party")}
                  >
                    <div>
                      <IconContext.Provider
                        value={{ size: "32px", className: classes.PartyIcon }}
                      >
                        <IoMdWine />
                      </IconContext.Provider>
                    </div>
                    <p>Party</p>
                  </div>
                  <div
                    className={
                      typeSelected.conference
                        ? `${classes.ConferenceType} ${classes.Active}`
                        : `${classes.ConferenceType}`
                    }
                    onClick={() => typeSelectHandler("conference")}
                  >
                    <div>
                      <IconContext.Provider
                        value={{
                          size: "32px",
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
                    <button
                      className={classes.ApplyButton}
                      onClick={() => applyFilterHandler("type")}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              ) : null}
            </div>

            {/* BUDGET FILTER */}
            <div className={classes.BudgetFilter}>
              <button className={classes.Button}>Budget</button>
              {showFilterOptions.showBudgetFilter ? (
                <div className={classes.FilterBox}>Budget Filter</div>
              ) : null}
            </div>

            {/* CAPACITY FILTER */}
            <div className={classes.CapacityFilter}>
              <button className={classes.Button}>Capacity</button>
              {showFilterOptions.showCapacityFilter ? (
                <div className={classes.FilterBox}>Capacity Filter</div>
              ) : null}
            </div>

            {/* ADVANCED FILTER */}
            <div className={classes.AdvancedFilter}>
              <button className={classes.Button}>Advanced Filters</button>
            </div>
          </div>
          {(sortHighToLowStatus
            ? sortHighToLow(finalResults)
            : sortLowToHigh(finalResults)
          ).map((venue, index) => {
            const {
              features,
              images,
              name,
              pricing,
              capacity,
              detailedAddress,
              type,
            } = venue;
            return (
              <VenueCard
                key={index}
                venue={{
                  venueName: name,
                  image: images[0],
                  features,
                  capacity,
                  address: detailedAddress,
                  price: pricing,
                  tag: type,
                }}
              />
            );
          })}
        </div>
        <div className={classes.Map}>
          <h1>Map</h1>
        </div>
      </div>
    );
  };

  return <>{results.length === 0 ? noResults() : showResults()}</>;
};

export default SearchResults;
