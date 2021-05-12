import React, { useState, useEffect } from "react";
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
  const currentAPIBody = useSelector((state) => state.results.currentAPIBody);
  const priceRange = useSelector((state) => state.results.priceRange);
  const duplicateResults = useSelector(
    (state) => state.results.duplicateResults
  );

  //The previous api post request body
  console.log(currentAPIBody);

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

  const [minBudget, setMinBudget] = useState(0);
  const [maxBudget, setMaxBudget] = useState(0);

  //change here to use either dummyData or results state
  const finalResults = results;

  useEffect(() => {
    if (finalResults.length > 0) {
      const newArray = sortLowToHigh(finalResults);
      dispatch(resultsActions.updateDuplicateResults(newArray));
      setMinBudget(newArray[0].pricing);
      setMaxBudget(newArray[newArray.length - 1].pricing);
      dispatch(
        resultsActions.updatePriceRange([
          newArray[0].pricing,
          newArray[newArray.length - 1].pricing,
        ])
      );
    }
    // eslint-disable-next-line
  }, []);

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

    if (value === "budget") {
      setShowFilterOptions({
        showTypeFilter: false,
        showBudgetFilter: true,
        showCapacityFilter: false,
        showAdvancedFilter: false,
      });
    }

    if (value === "capacity") {
      setShowFilterOptions({
        showTypeFilter: false,
        showBudgetFilter: false,
        showCapacityFilter: true,
        showAdvancedFilter: false,
      });
    }

    if (value === "advanced") {
      setShowFilterOptions({
        showTypeFilter: false,
        showBudgetFilter: false,
        showCapacityFilter: false,
        showAdvancedFilter: true,
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

    if (value === "budget") {
      console.log("Budget Baby");
      const newArr = duplicateResults.filter((venue) => {
        return venue.pricing >= minBudget && venue.pricing <= maxBudget;
      });
      dispatch(resultsActions.updateResults(newArr));
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

  const sliderMinChangeHandler = (e) => {
    setMinBudget(e.target.value);
  };

  const sliderMaxChangeHandler = (e) => {
    setMaxBudget(e.target.value);
  };

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
              <button
                className={classes.Button}
                onClick={() => filterShowHandler("budget")}
              >
                Budget
              </button>
              {showFilterOptions.showBudgetFilter ? (
                <div
                  className={`${classes.FilterBox} ${classes.Budget_Filter_Box}`}
                >
                  <div className={classes.PriceRange}>
                    <p className={classes.Min}>Rs. {minBudget}</p>
                    <span></span>
                    <p className={classes.Max}>Rs. {maxBudget}</p>
                  </div>
                  <div className={classes.PriceSlider}>
                    <div className={classes.Container}>
                      <input
                        type="range"
                        min={priceRange[0]}
                        max={
                          priceRange[0] + (priceRange[1] - priceRange[0]) / 2
                        }
                        step="500"
                        onChange={sliderMinChangeHandler}
                        className={classes.Slider_One}
                        value={minBudget}
                      />
                      <input
                        type="range"
                        min={
                          priceRange[0] + (priceRange[1] - priceRange[0]) / 2
                        }
                        max={priceRange[1]}
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
                      onClick={() => applyFilterHandler("budget")}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              ) : null}
            </div>

            {/* CAPACITY FILTER */}
            <div className={classes.CapacityFilter}>
              <button
                className={classes.Button}
                onClick={() => filterShowHandler("capacity")}
              >
                Capacity
              </button>
              {showFilterOptions.showCapacityFilter ? (
                <div className={classes.FilterBox}>Capacity Filter</div>
              ) : null}
            </div>

            {/* ADVANCED FILTER */}
            <div className={classes.AdvancedFilter}>
              <button
                className={classes.Button}
                onClick={() => filterShowHandler("advanced")}
              >
                Advanced Filters
              </button>
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
