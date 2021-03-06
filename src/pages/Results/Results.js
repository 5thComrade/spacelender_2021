import React from "react";

//Redux-State
import { useSelector } from "react-redux";

//External Components
import NoResults from "../../components/NoResults/NoResults";
import ShowResults from "../../components/ShowResults/ShowResults";

//Dummy Data
import data from "../../dummyData";

const Results = () => {
  // const results = useSelector((state) => state.results.results);
  const isFilterApplied = useSelector((state) => state.results.isFilterApplied);
  const budgetFilterApplied = useSelector(
    (state) => state.results.budgetFilterApplied
  );
  const priceRange = useSelector((state) => state.results.priceRange);
  const typeFilterApplied = useSelector(
    (state) => state.results.typeFilterApplied
  );
  const type = useSelector((state) => state.results.type);
  const capacityFilterApplied = useSelector(
    (state) => state.results.capacityFilterApplied
  );
  const capacityRange = useSelector((state) => state.results.capacityRange);

  let finalResults = data; //change here

  if (isFilterApplied) {
    if (budgetFilterApplied) {
      finalResults = finalResults.filter((venue) => {
        return venue.pricing >= priceRange[0] && venue.pricing <= priceRange[1];
      });
    }

    if (typeFilterApplied) {
      finalResults = finalResults.filter((venue) => {
        return venue.type === type;
      });
    }

    if (capacityFilterApplied) {
      finalResults = finalResults.filter((venue) => {
        return (
          venue.capacity >= capacityRange[0] &&
          venue.capacity <= capacityRange[1]
        );
      });
    }
  } else {
    finalResults = data; //change here
  }

  document.body.style.overflow = "auto";

  return (
    <>
      {finalResults.length === 0 ? (
        <NoResults />
      ) : (
        <ShowResults results={finalResults} />
      )}
    </>
  );
};

export default Results;
