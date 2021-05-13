import React from "react";
import classes from "./Search.module.css";
import Input from "./Input/Input";
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { resultsActions } from "../../store/reducers/searchResults";
import { uiActions } from "../../store/reducers/ui";
import { useHistory } from "react-router-dom";

import occassionData from "./data/occassion";
import locationData from "./data/location";
import venueData from "./data/venue";

const Search = () => {
  const occassionValue = useSelector((state) => state.search.occassion);
  const locationValue = useSelector((state) => state.search.location);
  const venueValue = useSelector((state) => state.search.venue);

  const dispatch = useDispatch();

  dispatch(resultsActions.updateResults([]));
  dispatch(resultsActions.updateBody({}));
  dispatch(resultsActions.updateFilterApplied(false));
  dispatch(resultsActions.updateBudgetFilterApplied(false));
  dispatch(resultsActions.updateTypeFilterApplied(false));
  dispatch(resultsActions.updateCapacityFilterApplied(false));

  const { REACT_APP_API_URL } = process.env;

  const history = useHistory();

  const handleSubmit = async () => {
    if (
      occassionValue.length < 3 ||
      locationValue.length < 3 ||
      venueValue.length < 3
    ) {
      return console.log("No results found");
    }
    dispatch(uiActions.updateIsLoading());
    // const body = {
    //   eventTypes: [occassionValue],
    //   location: locationValue,
    //   type: venueValue,
    // };

    const body = {
      amenities: "Tables",
    };
    dispatch(resultsActions.updateBody(body));
    try {
      const res = await axios.post(
        `${REACT_APP_API_URL}api/getSpacesByCustomCriteria/`,
        body
      );
      if (Array.isArray(res.data)) {
        dispatch(resultsActions.updateResults(res.data));
        history.push("/search_results");
        dispatch(uiActions.updateIsLoading());
      } else {
        history.push("/search_results");
        dispatch(uiActions.updateIsLoading());
      }
    } catch (e) {
      dispatch(uiActions.updateIsLoading());
      console.log(e);
      return;
    }
  };

  return (
    <div className={classes.Search}>
      <Input
        placeholder="What kind of event?"
        searchData={occassionData}
        value={occassionValue}
        name="Occassion"
      />
      <Input
        placeholder="Where?"
        searchData={locationData}
        value={locationValue}
        name="Location"
      />
      <Input
        placeholder="Party or Conference?"
        searchData={venueData}
        value={venueValue}
        name="Venue"
      />
      <div className={classes.ButtonContainer}>
        <button className={classes.SearchButton} onClick={handleSubmit}>
          <IconContext.Provider
            value={{ size: "32px", className: classes.SVGButton }}
          >
            <BsSearch />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

export default Search;
