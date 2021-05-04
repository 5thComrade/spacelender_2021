import React from "react";
import classes from "./Discover.module.css";

const Discover = () => {
  return (
    <>
      <h2 className={classes.Heading}>Discover</h2>
      <div className={classes.Discover}>
        <div className={classes.Party}>
          <div className={classes.Img}></div>
          <p>Party Collection</p>
        </div>
        <div className={classes.Conference}>
          <div className={classes.Img}></div>
          <p>Conference Collection</p>
        </div>
      </div>
    </>
  );
};

export default Discover;
