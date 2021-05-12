import React from "react";
import classes from "./NoResults.module.css";
import { Link } from "react-router-dom";

const NoResults = () => {
  return (
    <div className={classes.NoResults}>
      <p>We did not find any space that could meet your requirements.</p>
      <Link to="/" className={classes.HomeButton}>
        Find Space
      </Link>
    </div>
  );
};

export default NoResults;
