import React from "react";
import classes from "./SearchResults.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VenueCard from "../../components/VenueCard/VenueCard";

//Dummy Data
import data from "../../dummyData";

const SearchResults = () => {
  const results = useSelector((state) => state.results.results);
  // The search results after the first page search reaches here
  console.log(results.length);

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
          {results.map((venue, index) => {
            const {
              features,
              images,
              name,
              pricing,
              capacity,
              detailedAddress,
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
                  tag: "Party",
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
