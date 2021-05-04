import React from "react";
import classes from "./Categories.module.css";

const Categories = () => {
  return (
    <>
      <h2 className={classes.Heading}>Categories</h2>
      <div className={classes.Categories}>
        <div className={classes.Img1}>
          <div className={classes.Image}></div>
          <p>Occassion</p>
        </div>
        <div className={classes.Img2}>
          <div className={classes.Image}></div>
          <p>Location</p>
        </div>
        <div className={classes.Img3}>
          <div className={classes.Image}></div>
          <p>Venue</p>
        </div>
      </div>
    </>
  );
};

export default Categories;
