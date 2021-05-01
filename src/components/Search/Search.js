import React from "react";
import classes from "./Search.module.css";
import Input from "./Input/Input";
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";

import occassionData from "./data/occassion";
import locationData from "./data/location";
import venueData from "./data/venue";

const Search = () => {
  const occassionValue = useSelector((state) => state.search.occassion);
  const locationValue = useSelector((state) => state.search.location);
  const venueValue = useSelector((state) => state.search.venue);

  const handleSubmit = () => {
    console.log(occassionValue, locationValue, venueValue);
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
      <button className={classes.SearchButton} onClick={handleSubmit}>
        <IconContext.Provider
          value={{ size: "32px", className: classes.SVGButton }}
        >
          <BsSearch />
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default Search;
