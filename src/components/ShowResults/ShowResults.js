import React from "react";
import classes from "./ShowResults.module.css";

//React-redux
import { useSelector } from "react-redux";

//External Components
import VenueCard from "../VenueCard/VenueCard";
import SortFilter from "../SortFilter/SortFilter";
import TypeFilter from "../TypeFilter/TypeFilter";
import BudgetFilter from "../BudgetFilter/BudgetFilter";
import CapacityFilter from "../CapacityFilter/CapacityFilter";

//Utility Functions
import {
  sortHighToLow,
  sortLowToHigh,
} from "../../utilityFunctions/sortResults";

const ShowResults = (props) => {
  const { results } = props;

  const sortHighToLowStatus = useSelector((state) => state.ui.highToLow);

  return (
    <div className={classes.ShowResults}>
      <div className={classes.Results}>
        <p className={classes.GrayOut}>{results.length} Properties</p>
        <p>Places in Location</p>

        <div className={classes.FilterButtons}>
          <SortFilter />
          <TypeFilter />
          <BudgetFilter />
          <CapacityFilter />
        </div>

        {(sortHighToLowStatus
          ? sortHighToLow(results)
          : sortLowToHigh(results)
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

export default ShowResults;
